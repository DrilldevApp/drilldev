import execa from 'execa';

const message = process.argv[process.argv.length - 1];

execa.sync('yarn', ['run', 'commitlint', '--edit', message]);
