const Discord = require('discord.js');
const db = require('quick.db')
module.exports.run = async (bot, message, args, member, client, level) => {
  const dogrulandi = bot.emojis.find(emoji => emoji.name === ":thumbsup:");
 if (!message.member.roles.has('971796529499242594') && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Yetkin yetmiyor.');
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!user) return message.reply("**Etiket Atmalısın!**");
  user.addRole('971796529318875184')
  
  
  user.addRole('971796529474064399')
  user.addRole('971796529474064398')
  user.addRole('971796529474064394')
  user.addRole('971796529427931205')
  user.addRole('971796529427931204')
  user.addRole('971796529427931203')
  user.addRole('971796529427931200')
  user.addRole('971796529427931199')
  user.addRole('971796529427931196')
  user.addRole('971796529402769476')
  user.addRole('971796529402769474')
  user.addRole('971796529402769473')
  user.addRole('971796529402769470')
  user.addRole('971796529402769469')
  user.addRole('971796529377607704')
  user.addRole('976949618724208750')
  user.addRole('976949625124704317')
  user.addRole('971796529377607702')
  user.addRole('971796529356619810')
  user.addRole('971796529356619808')
  user.addRole('977813863200342016')
  user.addRole('977818115478011924')
  user.addRole('971796529356619806')
  user.addRole('971796529318875185')
  user.addRole('971796529318875184')
  user.removeRole('971796529318875183')
const ky = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setDescription(`${user}, ** Kaydınız Başarıyla Gerçekleşti!**`)
        .setColor('BLACK')
        .setTimestamp()
        message.channel.send(ky)
        message.react(dogrulandi)
  
} 
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["rusya"],
    permLevel: 0
}
exports.help = {
    name: 'sscb',
    description: 'kayıt',
    usage: ''
}
