const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const requiredFiles = [
  "docs/source-of-truth.md",
  "index.html",
  "styles.css",
  "public/brand/stark-av-logo.jpeg"
];

for (const file of requiredFiles) {
  const fullPath = path.join(root, file);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Missing required file: ${file}`);
  }
}

const source = fs.readFileSync(path.join(root, "docs/source-of-truth.md"), "utf8");
const homepage = fs.readFileSync(path.join(root, "index.html"), "utf8");

const requiredSourceText = [
  "Stark AV",
  "Isaiah Stark",
  "churches",
  "AV design",
  "consulting",
  "install",
  "training",
  "Villa de Matel Chapel",
  "https://fohonline.com/featured/houstons-villa-de-matel-chapel-upgrades-with-dbtechnologies-system/",
  "Open Inputs Before Final Launch",
  "Jordan1022/StarkAV",
  "stark-av",
  "isaiahmichaelthunder@gmail.com",
  "(346) 208-3603",
  "Vectorworks",
  "Dante Level 2",
  "Q-SYS Level 1"
];

for (const text of requiredSourceText) {
  if (!source.includes(text)) {
    throw new Error(`Source of truth missing required text: ${text}`);
  }
}

const requiredHomepageText = [
  "Stark AV",
  "Church AV design, consulting, and training",
  "Start a Conversation",
  "Featured Work",
  "Villa de Matel Chapel",
  "Source of truth",
  "Email Isaiah",
  "Call (346) 208-3603",
  "About Isaiah"
];

for (const text of requiredHomepageText) {
  if (!homepage.includes(text)) {
    throw new Error(`Homepage missing required text: ${text}`);
  }
}

console.log("Stark AV source document and starter site checks passed.");
