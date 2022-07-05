const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(`Bot Hostlandı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);

const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const Jimp = require("jimp")
const request = require('node-superfetch');
const ms = require('parse-ms')
const moment = require('moment');
require('./util/eventLoader')(client);



var prefix = ayarlar.prefix;


//----------------------Bot'un Bağlandı Kısmı -----------------------------//


const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.on("ready", () => {
  client.user.setGame('Sunucuyu', { type: 'WATCHING' });
   
        }, 
  console.log("Bağlandım!")
);

//----------------------Bot'un Bağlandı Kısmı SON-----------------------------//


//------------------Message Kısmı Burayı silersen bot cevap vermez ----------------// 

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

// ŞAHISA EMOJİ ATAR
//client.on('message', async (msg) => {
//if (msg.author.id !== "") return;
//await msg. react('🌎')
//});
//client.on('message', async (msg) => {
//if (msg.author.id !== "") return;
//await msg. react('💋')
//});
//client.on('message', async (msg) => {
//if (msg.author.id !== "") return;
//await msg. react('❤️‍🔥')
//await msg. react('💝')
//});
//client.on('message', async (msg) => {
//if (msg.author.id !== "") return;
//await msg. react('🤡')
//});
//////////////////
client.unload = command => {  
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  let permlvl = 0;
  if(!message.guild) {
  if (message.author.id === ayarlar.sahip) permlvl = 4;
	return; }
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};
var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-r_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.token);





