#!/usr/bin/env -S npx ts-node-transpile-only --script-mode

import execa from 'execa';

const message = process.argv[process.argv.length - 1];

execa.sync('pnpm', ['exec', 'commitlint', '--edit', message]);
