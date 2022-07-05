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
  user.addRole('975487767515643914')
  user.addRole('971796529474064394')
  user.addRole('971796529427931204')
  user.addRole('971796529427931201')
  user.addRole('971796529427931200')
  user.addRole('971796529427931198')
  user.addRole('971796529427931196')
  user.addRole('971796529402769475')
  user.addRole('971796529402769474')
  user.addRole('971796529402769470')
  user.addRole('971796529402769468')
  user.addRole('971796529377607704')
  user.addRole('971796529377607700')
  user.addRole('971796529356619814')
  user.addRole('971796529356619812')
  user.addRole('935093673148952596')
  user.addRole('971796529356619810')
  user.addRole('971796529356619808')
  user.addRole('977813863200342016')
  user.addRole('977813976559804426')
  user.addRole('971796529356619806')
  user.addRole('971796529402769471')
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
    name: 'demokrat-almanya',
    description: 'kayıt',
    usage: ''
}
