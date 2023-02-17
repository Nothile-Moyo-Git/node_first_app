// Import file system from TypeScript, make sure you have node types installed if you're using TypeScript
import fs from 'fs';

// Set our filename so we can create our text file
const fileName = "first_name.txt";

// Our node text to output to file.
const output : string = "Hello from nodejs";

// Asynchronously Save our output to a new txt file in node.js
// If our file already exists, then overwrite it
fs.writeFile(fileName, output, (error) => {

    // If successful, output a success message, if unsuccessful, respond with an error
    error ? console.log(error) : console.log("The file was written successfully");

});

console.log(output);