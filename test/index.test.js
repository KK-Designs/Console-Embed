const ConsoleEmbed = require('../lib/index.js');
// @ts-ignore
console.log(new ConsoleEmbed({
	title: 'Lorem Ipsum dolor sit amet',
	description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua',
	footer: 'Lorem Ipsum',
	type: 'success',
}).embed);