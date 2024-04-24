/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let domainNames = [];

let pronouns = ["the", "our", "my", "your"];
let adjectives = ["great", "big", "small", "tiny"];
let nouns = ["jogger", "racoon", "dog", "cat"];

for (let i = 0; i < pronouns.length; i++) {
  for (let j = 0; j < adjectives.length; j++) {
    for (let k = 0; k < nouns.length; k++) {
      let domainName = pronouns[i] + adjectives[j] + nouns[k] + ".com";
      domainNames.push(domainName);
      console.log(domainName);
    }
  }
}
