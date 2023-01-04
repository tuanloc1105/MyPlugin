var exec = require('cordova/exec');
function MyPlugin() {
}
MyPlugin.prototype.coolMethod = function (arg0, success, error) {
    exec(success, error, 'MyPlugin', 'coolMethod', [arg0]);
};

module.exports = new MyPlugin();
