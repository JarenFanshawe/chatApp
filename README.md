
# Chat App - Jaren McDonald

This README is for Jaren's chat app.

### What is this repository for?

This repository is the central hub for all of the work added before the live launch. This will also serve to collect any bugs or issues found by users.

### Setup

Please install ruby, if not already installed;

*	Use `$ which ruby` or `$ ruby --version`, to verify if ruby is installed;
*	Make sure bundler is installed by running `$ gem install bundler`.

Please clone the repository from BitBucket:
```
$ git clone https://git@bitbucket.org/JACK_T/ledc.git
```

`$ cd ledc`

Please install NPM and Grunt, if not already installed:

*	Use `$ npm --version` to verify is NPM is installed;
	*	If not installed, please install from [Node.JS](https://nodejs.org/en/download/);
*	Use `$ grunt --version` to verify is Grunt is installed;
	*	Install grunt dependancies `$ npm install`, then proceed to run grunt `$ grunt watch`.

## Contribution guidelines

1)	Submit a ticket for your issue, assuming one does not already exist;
2)	Clearly describe the issue including steps to reproduce when it is a bug;
3)	Make sure you fill in the earliest version that you know has the issue;
4)	Fork the repository on BitBucket.

#### Making Changes:

**Create a topic branch from where you want to base your work.**

*	This is usually the master branch;
*	Only target release branches if you are certain your fix must be on that branch;
*	Please avoid working directly on the master branch;
*	Make commits of logical units;
*	Check for unnecessary whitespace with `$ git diff --check` before committing;
*	Make sure your commit messages are in the proper format;
*	Make sure you have added the necessary tests for your changes;
*	Run all the tests to assure nothing else was accidentally broken.

---
