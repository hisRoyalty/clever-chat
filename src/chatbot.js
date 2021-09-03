// npx prettier --write src/chatbot.js should i do this?? ok then
// do this whenever u want prettier to format the code

const defaultOptions = require("./defaultOptions.json");

const fetch = require("node-fetch");
const translate = require("@vitalets/google-translate-api");

class Chatbot {
    constructor(
        ops = defaultOptions
    ) {
        this.ops = ops;
    }

    async chat(message) {
        if (!message) {
            throw new Error(
                "[Chatbot API] You need to provide a message to reply to!"
            );
        }

        const { ops } = this;

        let language = ops.language

        const url = Object.keys(ops)
            .map(op => `${op}=${encodeURIComponent(ops[op])}`)
            .join("&"); 

        let res = await fetch(
            `https://yourmommmaosamaobama.hisroyal123.repl.co/?message=${encodeURIComponent(message)}&${url}`
        ).catch(e => {
            throw new Error(`Ran into an Error. ${e}`);
        });

        const response = await res.json();
        const translation = await translate(response.message, {to: ops.language}).catch(e => {
            throw new Error(`Ran into an Error. ${e}`);
        });

        const replacers = {
            "Atom": ops.name,
            "female": ops.gender,
            "Acobot Team": ops.developer_name, 
            "user": ops.user,
            "732": ops.age,
            "pog": ops.birthday,
            "France": ops.birthplace,
            "2005": ops.birthyear,
            "Panda": ops.religion,
            "Brad Pitt": ops.actor,
            "Julia Roberts": ops.actress,
            "Leonardo": ops.artist,
            "Jeff Kinney": ops.author,
            "Imagine": ops.band,
            "Diary": ops.book,
            "Taylor Swift": ops.celebrity,
            "C3P0": ops.celebrities,
            "Dragon": ops.chinesesign,
            "chat bot": ops.family,
            "the golden rule": ops.ethics,
            "green": ops.color,
            "eletricity": ops.food,
            "Matrix": ops.movie,
            "Carmen": ops.opera,
            "Spring": ops.season,
            "Discovery": ops.show,
            "Believer": ops.song,
            "Baseball": ops.sport,
            "making friends": ops.subject,
            "Dallas Cowboys": ops.football,
            "New York Yankees": ops.baseball,
            "San Francisco": ops.city,
            "California": ops.state,
            "Artificial Intelligence": ops.class,
            "united states": ops.country,
            "Acobot": ops.company,
            "Hisroyal.baguette@gmail.com": ops.email,
            "Brainshop": ops.wechat,
            "my shinning virtual wardrobe": ops.wear,
            "20000": ops.vocab,
            "Beta": ops.version,
            "hundreds of thousands": ops.totalcli,
            "artificial intelligence chatbot": ops.species,
            "Pisces": ops.sign,
            "智能机器人": ops.scspecies,
            "双鱼座": ops.scsign,
            "中国": ops.scnationality,
            "Acobot 团队": ops.scmaster,
            "女": ops.scgender,
            "电": ops.scfavouritefood,
            "绿色": ops.scfavouritecolor,
            "中国": ops.sccountry,
            "艾珂（北京）智能系统有限公司": ops.sccompany,
            "北京": ops.sccity,
            "龙": ops.scchinesesign,
            "English": ops.language2,
            "New York Rangers": ops.hockey,
            "chat bot": ops.job,
            "techno": ops.music,
            "Straight": ops.orientation,
            "Software": ops.phylum,
            "Joe Biden": ops.president
        
        };
        
        return translation.text.replace(
            /.+/g,
            match => replacers[match] || match
        );

        if (!response) {
            throw new Error(
                "[Chatbot API] API is unavailable. Please try again later. Contact Royalty#2021 on Discord if you think this is a mistake."
            );
        }

        return response.message;
    }
}

module.exports = Chatbot;