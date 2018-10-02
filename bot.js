const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[═════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


 
console.log('Welcome')

 
client.on("message", message => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return;
  
 
  function discoRole() {
    let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    roles.forEach((role) => {
      let theRole = message.guild.roles.find("name", role);
      if(!theRole) return;
      theRole.edit({color: random}).catch(e => {
        return message.channel.send(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
      });
    });
  }
 
 if(message.content.startsWith(prefix + "startrainbow")) {
    if(!message.member.hasPermission('ADMINISTRATOR')) return
    setInterval(() => { discoRole(); }, config.ms);
    message.channel.send("```css\nRainbowing...```");
    message.channel.send("Make Sure You Make Role With **Rainbow** Name");
  } else {
  }
 
if(message.content.startsWith(prefix + "stoprainbow")) {
  message.channel.send("I've stopped rainbowing.");
  setTimeout(() => { console.log(process.exit(0)); }, 300);
} else {
  }
}
 
)
const config = require('./config.json');
const prefix = config.prefix;
const roles = config.roleToDisco;


client.login(process.env.BOT_TOKEN)
