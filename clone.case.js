const child_process = require('child_process');

const cp = child_process.spawn('git', ['clone', 'https://github.com/kwintenp/import-repo-test'], {
    stdio: 'inherit'
});
