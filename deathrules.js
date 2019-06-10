const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "&";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {`** الرسالة **`
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\`** : عدد الاعضاء المستلمين**`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : King`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Kig ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`&bc | #Ki Ng`,"http://twitch.tv/deathrules")
client.user.setStatus("dnd")
});



client.login("NTg3NjU4NzY5NzE1MTY3MjQ0.XP5yAg.ldaHEY835BkIqswKAk_3tDh8WYc");
