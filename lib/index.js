const chalk = require('chalk');
/**
 * @param {{ title: string; description: string; footer: string; type: string; }} options
 */
function ConsoleEmbed(options) {
	if (!options.title) throw new TypeError(`Expected string but got ${options.title} (reading "options.title")`);
	if (!options.description) throw new TypeError(`Expected string but got ${options.description} (reading "options.description")`);
	if (!options.footer) throw new TypeError(`Expected string but got ${options.footer} (reading "options.footer")`);
	let embed;
	if (options.type === 'error') {
		embed = `${chalk.red.bgRed('‎')} ${chalk.bold(options.title)}\n${chalk.red.bgRed('‎')}${chalk.red.bgRed('‎')} ${chalk.italic(options.description)}\n${chalk.red.bgRed('‎')} ${chalk.red.bgRed('‎')}${chalk.gray(options.footer)}`;
	}
	if (options.type === 'warn') {
		embed = `${chalk.yellow.bgYellow('‎')} ${chalk.bold(options.title)}${chalk.yellow.bgYellow('‎')}\n${chalk.yellow.bgYellow('‎')} ${chalk.italic(options.description)}\n${chalk.yellow.bgYellow('‎')} ${chalk.gray(options.footer)}`;
	}
	if (options.type === 'success') {
		embed = `${chalk.green.bgGreen('‎')} ${chalk.bold(options.title)}\n${chalk.green.bgGreen('‎')} ${chalk.italic(options.description)}\n${chalk.green.bgGreen('‎')} ${chalk.gray(options.footer)}`;
	}
	if (options.type === 'info') {
		embed = `${chalk.blue.bgBlue('‎')} ${chalk.bold(options.title)}\n${chalk.blue.bgBlue('‎')}${chalk.blue.bgBlue('‎')} ${chalk.italic(options.description)}\n${chalk.blue.bgBlue('‎')} ${chalk.gray(options.footer)}`;
	}
	if (options.type === 'neutral') {
		embed = `${chalk.blue.bgWhite('‎')} ${chalk.bold(options.title)}\n${chalk.blue.bgWhite('‎')}${chalk.blue.bgWhite('‎')} ${chalk.italic(options.description)}\n${chalk.blue.bgWhite('‎')} ${chalk.gray(options.footer)}`;
	}
	if (!options.type) {
		embed = `${chalk.blue.bgWhite('‎')} ${chalk.bold(options.title)}\n${chalk.blue.bgWhite('‎')}${chalk.blue.bgWhite('‎')} ${chalk.italic(options.description)}\n${chalk.blue.bgWhite('‎')} ${chalk.gray(options.footer)}`;
	}
	return { embed: embed, title: options.title, description: options.description, footer: options.footer, type: options.type };
}
module.exports = ConsoleEmbed;