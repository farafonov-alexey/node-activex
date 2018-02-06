var ActiveX = null;
if (process.platform === "win32" && process.arch === "ia32") {
    var binary = require('node-pre-gyp');
    var path = require('path');
    var binding_path = binary.find(path.resolve(path.join(__dirname, './package.json')));
    var binding = require(binding_path);
    ActiveX = module.exports = exports = binding;
    global.ActiveXObject = function (id, opt) {
        return new ActiveX.Object(id, opt);
    };
} else {
    ActiveX = module.exports = exports = {};
}


