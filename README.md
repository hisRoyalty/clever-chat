# Clever-Chat

![F4pEry6](https://nodei.co/npm/clever-chat.png?downloads=true&stars=true)

<a href="https://www.npmjs.com/package/clever-chat">
<img src="https://img.shields.io/npm/dt/clever-chat?color=CC3534&logo=npm&style=for-the-badge" alt="Downloads">
</a>

<a href="https://www.npmjs.com/package/clever-chat">
<img src="https://img.shields.io/npm/v/clever-chat?color=red&label=Version&logo=npm&style=for-the-badge" alt="Npm version">
</a>

- Clever-Chat is a wrapper for a chatbot API that you can use to make a chatbot in node.js created by [Sunny Development](https://sunnydevelopment.ml/)

## What's New!
- Added __gender__, __developer name__ and __user__ as an option!

- Added __TypeScipt__ Support!

## Installation

```bash
npm i clever-chat
```
## Example

- Note: This is an just example code, you can edit it to make it more advanced.

```javascript
// import the package
const Chat = require("clever-chat");
const chat = new Chat({ name: "Put Your Chatbot Name Here", gender: "Male", developer_name: "Put Your Name Here", user: "Put an ID here" }); //put your chatbot name, chatbot gender and developer name here

chat.chat('Hey! How are you!').then(reply => {
  console.log(reply)
})
// wait for the console to log the reply
```
## Information
- If any bugs found, please report it in the __Discord Server__ or __Github__.

- A list for the options -
| Parameter | Type | Description
| --- | --- | --- |
| `name` | `string` | Sets chatbot's name
| `gender` | `string` | Sets chatbot's gender|
| `developer_name` | `string` | Sets chatbot's developer name
| `user` | `string` | Put an ID here|
| `age` | `string` | Sets chatbot's age
| `birthday` | `string` | Sets chatbot's birthday|
| `birthplace` | `string` | Sets chatbot's birthplace
| `birthyear` | `string` | Sets chatbot's birthyear|
| `religion` | `string` | Sets chatbot's religion
| `actor` | `string` | Sets chatbot's favourite actor|
| `actress` | `string` | Sets chatbot's favourite actress
| `artist` | `string` | Sets chatbot's favourite artist|
| `author` | `string` | Sets chatbot's favourite author
| `band` | `string` | Sets chatbot's favourite band|
| `book` | `string` | Sets chatbot's favourite book
| `color` | `string` | Sets chatbot's favourite colour
| `food` | `string` | Sets chatbot's favourite food|
| `movie` | `string` | Sets chatbot's favourite movie
| `opera` | `string` | Sets chatbot's favourite opera|
| `season` | `string` | Sets chatbot's favourite season
| `show` | `string` | Sets chatbot's favourite show|
| `song` | `string` | Sets chatbot's favourite song(ʙᴇᴛᴀ)
| `sport` | `string` | Sets chatbot's favourite sport|
| `subject` | `string` | Sets chatbot's favourite subject
| `football` | `string` | Sets chatbot's favourite football team|
| `celebrity` | `string` | Sets chatbot's favourite celebrity|
| `chinesesign` | `string` | Sets chatbot's chinese sign
| `family` | `string` | Sets chatbot's family|
| `ethics` | `string` | Sets chatbot's name
| `etype` | `string` | Sets chatbot's etype(ʙᴇᴛᴀ)|

## Credits
- Made by Sunny Development
- Brainshop AI
## Support Server
 ~ [*Programmer's Haven*](https://discord.gg/AEw8g8yVNV)

## Github
 ~ [**Github**](https://github.com/HisRoyalBaguettes/clever-chat-v7)
