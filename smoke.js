const fs = require("fs");
const path = require("path");

const root = __dirname;
const files = {
  json: path.join(root, "dist", "openapi.json"),
  yaml: path.join(root, "dist", "openapi.yaml"),
  ts: path.join(root, "openapi.ts"),
};

let failed = false;

// JSON parse check
try {
  JSON.parse(fs.readFileSync(files.json, "utf8"));
  console.log("OK: openapi.json is valid JSON");
} catch (e) {
  console.error("FAIL: openapi.json is not valid JSON:", e.message);
  failed = true;
}

// YAML basic structure check
try {
  const yaml = fs.readFileSync(files.yaml, "utf8");
  if (!yaml.includes("openapi:")) throw new Error("Missing openapi: key");
  console.log("OK: openapi.yaml has valid structure");
} catch (e) {
  console.error("FAIL: openapi.yaml:", e.message);
  failed = true;
}

// TypeScript file exists and is non-empty
try {
  const ts = fs.readFileSync(files.ts, "utf8");
  if (ts.length === 0) throw new Error("File is empty");
  console.log("OK: openapi.ts is non-empty");
} catch (e) {
  console.error("FAIL: openapi.ts:", e.message);
  failed = true;
}

if (failed) process.exit(1);
