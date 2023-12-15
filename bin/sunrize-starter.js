#!/usr/bin/env node
"use strict";

const path = require ("path");
const { spawn } = require ("child_process");

process .chdir (path .resolve (__dirname, ".."));

const p = spawn ("npx", ["--yes", "sunrize"]);

p .stdout .pipe (process .stdout);
p .stderr .pipe (process .stderr);
