const { MessageEmbed } =require("discord.js")
const config = require("../../config.json")
module.exports = {
	name: "developer",
	category: "π€ Information Commands",
  aliases: ["dev", "irvanni"],
  description: "Shows Information about the Developer",
  useage: "developer",
  run: async (client, message, args) => {
	const embed = new MessageEmbed()
	.setColor(config.colors.yes)
	.setFooter("π€πβπΌ ππββπΌππΌ πΉπππ€", config.AVATARURL)
  .setTimestamp()
  .setThumbnail("https://i.ibb.co/Hpr6jFQ/Avatar.png")
  .setTitle("πirπvanπniπ#1840")
  .setDescription(`
> Hello I am **IRVANNI** <@536798044939878403> *(\`πirπvanπniπ#1840\`)*,

> I am a developer of websites, applications or bots etc... [SEE IT](https://irvanni.ga/)

> I hope you like my stuff :v: :heart:

`)
	message.channel.send(embed).catch(error => console.log(error));
}
}