# Console Embed
A small module to give your users a soft interface to display information.

---

# Installation
```
npm i console-embed
```

---
 
```diff
- ⚠ This module does not support all terminals. The best result was in the visual studio code terminal (tested three terminals).
```

# Usage
First you must import the library using the following code:

```javascript
const ConsoleEmbed = require('console-embed');
// or `import ConsoleEmbed from 'console-embed';` for Typescript users
```
\
Then all you have to do is call the function with some values:
```javascript
const ConsoleEmbed = require('console-embed');
// or `import ConsoleEmbed from 'console-embed';` for Typescript users
console.log(new ConsoleEmbed({
	title: 'Lorem Ipsum dolor sit amet',
	description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua',
	footer: 'Lorem Ipsum',
	type: 'success',
}).embed);
```
### Results:
![Image unavailable](result.png?raw=true "Result") \
**Thats it! Now you have it running!**

# Parameters
|  Parameters | Type                | Usage                                                     | Description                                                                                                                                                        |
|------------:|---------------------|-----------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Title       | `string` (required) | `new ConsoleEmbed({ title: 'title' , ..., ..., ...})`     | The title for the embed                                                                                                                                            |
| Description | `string`            | `new ConsoleEmbed({ ..., description: 'desc', ..., ...})` | The description for the embed                                                                                                                                      |
| Footer      | `string`            | `new ConsoleEmbed({ ..., ..., footer: 'foooter', ...})`   | The footer text for the embed                                                                                                                                      |
| Type        | `string`            | `new ConsoleEmbed({ ..., ..., ..., type: 'type'})`        | The type for the embed, like 'info'. All types [here.](https://cdn.discordapp.com/attachments/778786796225298444/898000847395491880/types.txt "Types for 'types'") |
