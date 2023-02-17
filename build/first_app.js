"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import file system from TypeScript, make sure you have node types installed if you're using TypeScript
const fs_1 = __importDefault(require("fs"));
// Set our filename so we can create our text file
const fileName = "first_name.txt";
// Our node text to output to file.
const output = "Hello from nodejs";
// Save our output to a new txt file in node.js
fs_1.default.writeFile(fileName, output, (error) => {
    error ? console.log(error) : console.log("The file was written successfully");
});
console.log(output);
