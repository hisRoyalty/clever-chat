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

- 6.9.0 Is Just a part of Version 7.0.0, with __1/2__ parts being added here, __1/2__ parts being added in 7.0.0 (Please create an issue if any bugs found and ignore the BETA versions)
  7.0.0 will estimated date of release is 9/8/2021, however not confirmed. We basically added new options, such as -
  age | Sets chatbot's age
  birthday | Sets chatbot's birthday
  birthplace | Sets chatbot's birthplace
  birthyear | Sets chatbot's birthyear
  religion | Sets chatbot's religion
  actor | Sets chatbot's favourite actor
  actress | Sets chatbot's favourite actress
  artist | Sets chatbot's favourite artist
  author | Sets chatbot's favourite author
  band | Sets chatbot's favourite band
  book | Sets chatbot's favourite book
  All these options work exactly the way shown in example code.
## Credits
- Made by Sunny Development
- Brainshop AI
## Support Server
 ~ [*Programmer's Haven*](https://discord.gg/AEw8g8yVNV)

## Github
 ~ [**Github**](https://github.com/HisRoyalBaguettes/clever-chat-v6) (This Repo Link Will Be Updated When V7 is released)
