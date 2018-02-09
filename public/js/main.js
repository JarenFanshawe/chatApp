(() => {
	const socket = io();

	let messageList = document.querySelector('ul'),
	chatForm = document.querySelector('form'),
	chatMessage = chatForm.querySelector('.message'),
	nameInput = document.querySelector('.nickname'),
	nickName = null;

	function setNickname() {
		//debugger;
		nickName = this.value;
	}

	function handleSendMessage(e) {
		e.preventDefault(); //block page refresh
		//debugger;
		nickName = (nickName && nickName.length > 0) ? nickName : 'user';
		msg = `${nickName} says ${chatMessage.value}`;

		socket.emit('chat message', msg);
		chatMessage.value = "";
		return false;
	}

	function appendMessage(msg) {
		//debugger;
		let newMsg = `<li>${msg.message}</li>`;
		messageList.innerHTML += newMsg;
	}

	function appendDiscMessage(msg) {
		//debugger;
		let newMsg = `<li>${msg}</li>`;
		messageList.innerHTML += newMsg;
	}

	nameInput.addEventListener('change', setNickname, false);
	chatForm.addEventListener('submit', handleSendMessage, false);
	socket.addEventListener('chat message', appendMessage, false);
	socket.addEventListener('disconnect message', appendDiscMessage, false);
})();
