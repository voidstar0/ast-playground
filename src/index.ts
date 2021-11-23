import generate from '@babel/generator';
import { parse } from "@babel/parser";
import { readFileSync, writeFileSync } from 'fs';
import { convertPropertyToDot } from "./transforms";

const code = readFileSync('./test/test.js', 'utf-8');

function deobfuscate(code: string) {
    // parse code and get ast
    const ast = parse(code);
    
    // ast transformations
    convertPropertyToDot(ast);

    // save output to file
    writeFileSync('./test/out.js', generate(ast).code);
}

deobfuscate(code);