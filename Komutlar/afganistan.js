const Discord = require('discord.js');
const db = require('quick.db')
module.exports.run = async (bot, message, args, member, client, level) => {
  const dogrulandi = bot.emojis.find(emoji => emoji.name === ":thumbsup:");
 if (!message.member.roles.has('971796529499242594') && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Yetkin yetmiyor.');
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!user) return message.reply("**Etiket Atmalısın!**");
  //bu değişecek
  user.addRole('971796529318875184')
  
  
  
  user.addRole('971796529474064399')
  user.addRole('971796529474064398')
  user.addRole('971796529474064394')
  user.addRole('975822630156386304')
  user.addRole('971796529427931204')
  user.addRole('971796529427931197')
  user.addRole('971796529427931196')
  user.addRole('971796529402769475')
  user.addRole('971796529402769474')
  user.addRole('971796529402769471')
  user.addRole('971796529402769470')
  user.addRole('971796529377607709')
  user.addRole('971796529377607700')
  user.addRole('971796529356619811')
  user.addRole('971796529356619812')
  user.addRole('971796529356619810')
  user.addRole('977819390898761738')
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
    aliases: [""],
    permLevel: 0
}
exports.help = {
    name: 'afganistan',
    description: 'kayıt',
    usage: ''
}
