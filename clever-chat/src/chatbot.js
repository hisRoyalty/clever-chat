const fetch = require("node-fetch")
let chatbot_name;
let chatbot_gender;
let chatbot_developer;
let chatbot_user;
let chatbot_age;
let chatbot_birthday;
let chatbot_birthplace;
let chatbot_birthyear;
let chatbot_religion;
let chatbot_favourite_actor
let chatbot_favourite_actress
let chatbot_favourite_artist
let chatbot_favourite_author
let chatbot_favourite_band
let chatbot_favourite_book
let celebrity;
let chinesesign;
let family
let etype
let ethics
let favouritecolor
let favouritefood
let favouritemovie
let favouriteopera
let favouriteseason
let favouriteshow
let song
let favouritesport
let favouritesubject
let favouritefootballteam

class Chatbot {

  constructor(ops = {name: 'chatbot', gender:'male', developer_name:'Acobot Team', user:'user', age: '9', birthday: 'pog', birthplace: 'France', birthyear: '2005', religion: 'Panda', actor: 'Brad Pitt', actress: 'Julia Roberts', artist: 'Leonardo', author: 'Jeff Kinney', band: 'Imagine', book: 'Diary', celebrity: 'Taylor Swift', chinesesign: 'Dragon', family: 'chat bot', etype: 'chat bot', ethics: 'the golden rule', color: 'green', food: 'eletricity', movie: 'Matrix', opera: 'Carmen', season: 'Spring', show: 'Discovery', song: 'Believer', sport: 'Baseball', subject: 'making friends', football: 'Dallas Cowboys'}){
        chatbot_name = ops.name;

        
        chatbot_gender = ops.gender;
        chatbot_developer = ops.developer_name
        chatbot_user = ops.user
        chatbot_age = ops.age
        chatbot_birthday = ops.birthday
        chatbot_birthplace = ops.birthplace
        chatbot_birthyear = ops.birthyear
        chatbot_religion = ops.religion
        chatbot_favourite_actor = ops.actor
        chatbot_favourite_actress = ops.actress
        chatbot_favourite_artist = ops.artist
        chatbot_favourite_author = ops.author
        chatbot_favourite_band = ops.band
        chatbot_favourite_book = ops.book
        celebrity = ops.celebrity
        chinesesign = ops.chinesesign
        family = ops.family
        etype = ops.etype
        ethics = ops.ethics
        favouritecolor = ops.color 
        favouritefood = ops.food 
        favouritemovie = ops.movie
        favouriteopera = ops.opera 
        favouriteseason = ops.season
        favouriteshow = ops.show 
        song = ops.song
        favouritesport = ops.sport 
        favouritesubject = ops.subject 
        favouritefootballteam = ops.football
  }


  async chat(message) {
    if(!message) {
      throw new Error("[Chatbot API] You need to provide a message to reply to!")
    }

    let res = await fetch(`https://noideawhatthisis.hisroyal123.repl.co/?message=${encodeURIComponent(message)}&gender=${encodeURIComponent(chatbot_gender)}&name=${encodeURIComponent(chatbot_name)}&developer_name=${encodeURIComponent(chatbot_developer)}&user=${encodeURIComponent(chatbot_user)}&age=${encodeURIComponent(chatbot_age)}&birthday=${encodeURIComponent(chatbot_birthday)}&birthplace=${encodeURIComponent(chatbot_birthplace)}&birthyear=${encodeURIComponent(chatbot_birthyear)}&religion=${encodeURIComponent(chatbot_religion)}&favouriteactor=${encodeURIComponent(chatbot_favourite_actor)}&favouriteactress=${encodeURIComponent(chatbot_favourite_actress)}&favouriteauthor=${encodeURIComponent(chatbot_favourite_author)}&favouriteband=${encodeURIComponent(chatbot_favourite_band)}&favouritebook=${encodeURIComponent(chatbot_favourite_book)}&celebrity=${encodeURIComponent(celebrity)}&chinesesign=${encodeURIComponent(chinesesign)}&family=${encodeURIComponent(family)}&etype=${encodeURIComponent(etype)}&ethics=${encodeURIComponent(ethics)}&favouritecolor=${encodeURIComponent(favouritecolor)}&favouritefood=${encodeURIComponent(favouritefood)}&favouritemovie=${encodeURIComponent(favouritemovie)}&favouriteopera=${encodeURIComponent(favouriteopera)}&favouriteseason=${encodeURIComponent(favouriteseason)}&favouriteshow=${encodeURIComponent(favouriteshow)}&song=${encodeURIComponent(song)}&favouritesubject=${encodeURIComponent(favouritesubject)}&favouritefootballteam=${encodeURIComponent(favouritefootballteam)}`).catch(e => {
            throw new Error(`Ran into an Error. ${e}`);
    });


    const response = await res.json().catch(e =>{
            throw new Error(`Ran into an Error. ${e}`)
        });

        return response.message.replace('Atom', chatbot_name).replace('male', chatbot_gender).replace('Acobot Team', chatbot_developer).replace('9', chatbot_age).replace('pog', chatbot_birthday).replace('France', chatbot_birthplace).replace('2005', chatbot_birthyear).replace('Panda', chatbot_religion).replace('Brad Pitt', chatbot_favourite_actor).replace('Julia Roberts', chatbot_favourite_actress).replace('Leonardo', chatbot_favourite_artist).replace('Jeff Kinney', chatbot_favourite_author).replace('Imagine', chatbot_favourite_band).replace('Diary', chatbot_favourite_book).replace('Taylor Swift', `${celebrity}`).replace('Dragon', `${chinesesign}`).replace('chat bot', `${family}`).replace('chat bot', `${etype}`).replace('the golden rule', `${ethics}`).replace('green', `${favouritecolor}`).replace('electricity', `${favouritefood}`).replace('Matrix', `${favouritemovie}`).replace('Carmen', `${favouriteopera}`).replace('Spring', `${favouriteseason}`).replace('Discovery', `${favouriteshow}`).replace('Believer', `${song}`).replace('Baseball', `${favouritesport}`).replace('making friends', `${favouritesubject}`).replace('Dallas Cowboys', `${favouritefootballteam}`);



    if(!response) {
      throw new Error("[Chatbot API] API is unavailable. Please try again later. Contact Royalty#2021 on discord if you think this is a mistake.")
    }

    return response.message;


  }

}

module.exports = Chatbot;
