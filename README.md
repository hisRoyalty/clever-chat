# Clever-Chat

Due to some security issues, I have not displayed the files. Will display on 10/8/2021.

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
const chat = new Chat({ name: "Put Your Chatbot Name Here", gender: "Male", developer_name: "Put Your Name Here", user: "Put an ID here", language: "Put a language here" }); //all of these are REQUIRED

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
  | `song` | `string` | Sets chatbot's favourite song
  | `sport` | `string` | Sets chatbot's favourite sport|
  | `subject` | `string` | Sets chatbot's favourite subject
  | `football` | `string` | Sets chatbot's favourite football team|
  | `celebrity` | `string` | Sets chatbot's favourite celebrity|
  | `chinesesign` | `string` | Sets chatbot's chinese sign
  | `family` | `string` | Sets chatbot's family|
  | `ethics` | `string` | Sets chatbot's name
  | `etype` | `string` | Sets chatbot's etype|
  | `baseball` | `string` | Sets chatbot's faovourite baseball team
  | `city` | `string` | Sets chatbot's city|
  | `state`| `string` | Sets chatbot's state
  |`class`| `string` | Sets chatbot's class|
  |`country`| `string` | Sets chatbot's country|
  |`company`| `string` | Sets chatbot's company|
  |`email`| `string` | Sets the chatbot's support email|
  |`wechat`| `string` | Sets chatbot's wechat|
  |`wear`| `string` | Sets chatbot's favourite cloth/wear|
  |`vocab`| `string` | Sets chatbot's number of vocabulary|
  |`version`| `string` | Sets your chatbot's version/your bot's version|
  |`totalcli`| `string` | Sets chatbot's total clients|
  |`species`| `string` | Sets chatbot's species|
  |`sign`| `string` | Sets chatbot's sign|
  |`scspecies`| `string` | Sets chatbot's species (chinese)|
  |`scsign`| `string` | Sets chatbot's sign (chinese)|
  |`scnationality`| `string` | Sets chatbot's nationality (chinese)|
  |`scmaster`| `string` | Sets chatbot's master/owner/developer_name (chinese)|
  |`scgender`| `string` | Sets chatbot's gender (chinese)|
  |`scfavouritecolor`|`string` | Sets chatbot's favourite color (chinese)|
  |`scfavouritefood`| `string` | Sets chatbot's favourite food (chinese)|
  |`sccountry`| `string` | Sets chatbot's country (chinese)|
  |`sccompany`| `string` | Sets chatbot's company (chinese)|
  |`sccity`| `string` | Sets chatbot's city (chinese)|
  |`scchinesesign`| `string` | Sets chatbot's chinese sign (chinese)|
  |`language2`| `string` | Sets chatbot's language while chatting|
  |`hockey`| `string` | Sets chatbot's favourite hockey team|
  |`job`| `string` | Sets chatbot's job|
  |`music`| `string` | Sets chatbot's favourite music|
  |`celebrities`| `string` | Sets chatbot's favourite celebrities/characters|
  |`orientation`| `string` | Sets chatbot's orientation|
  |`phylum`| `string` | Sets chatbot's phylum|
  |`president`| `string` | Sets chatbot's president|




  Something missing? Found a bug/problem? Want to suggest something?? Make an issue/PR in the github repository!

## Credits
- Made by Sunny Development (Royal, Acê, and thecoolguy17)
- Brainshop AI
- Possible for translation because of google-translate-api. (Note = Latency/Ping *might* be high.)

## Language List - 
**Name Of Language**|**Code for Languages**
:-----:|:-----:
Automatic|auto
Afrikaans|af
Irish|ga
Albanian|sq
Italian|it
Arabic|ar
Japanese|ja
Azerbaijani|az
Kannada|kn
Basque|eu
Korean|ko
Bengali|bn
Latin|la
Belarusian|be
Latvian|lv
Bulgarian|bg
Lithuanian|lt
Catalan|ca
Macedonian|mk
Chinese Simplified|zh-CN
Malay|ms
Chinese Traditional|zh-TW
Maltese|mt
Croatian|hr
Norwegian|no
Czech|cs
Persian|fa
Danish|da
Polish|pl
Dutch|nl
Portuguese|pt
English|en
Romanian|ro
Esperanto|eo
Russian|ru
Estonian|et
Serbian|sr
Filipino|tl
Slovak|sk
Finnish|fi
Slovenian|sl
French|fr
Spanish|es
Galician|gl
Swahili|sw
Georgian|ka
Swedish|sv
German|de
Tamil|ta
Greek|el
Telugu|te
Gujarati|gu
Thai|th
Haitian Creole|ht
Turkish|tr
Hebrew|iw
Ukrainian|uk
Hindi|hi
Urdu|ur
Hungarian|hu
Vietnamese|vi
Icelandic|is
Welsh|cy
Indonesian|id
Yiddish|yi



## Support Server
 ~ [*Programmer's Haven*](https://discord.gg/AEw8g8yVNV)

## Github
 ~ [**Github**](https://github.com/hisRoyalty/clever-chat-v7)


