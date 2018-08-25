'use strict';

exports.__esModule = true;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _imagemin = require('imagemin');

var _imagemin2 = _interopRequireDefault(_imagemin);

var _imageminJpegtran = require('imagemin-jpegtran');

var _imageminJpegtran2 = _interopRequireDefault(_imageminJpegtran);

var _imageminMozjpeg = require('imagemin-mozjpeg');

var _imageminMozjpeg2 = _interopRequireDefault(_imageminMozjpeg);

var _imageminPngquant = require('imagemin-pngquant');

var _imageminPngquant2 = _interopRequireDefault(_imageminPngquant);

var _imageminSvgo = require('imagemin-svgo');

var _imageminSvgo2 = _interopRequireDefault(_imageminSvgo);

var _imageminGifsicle = require('imagemin-gifsicle');

var _imageminGifsicle2 = _interopRequireDefault(_imageminGifsicle);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class() {
        var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, _class);

        var def = {
            filter: new RegExp('\.(jpg|png|jpeg|svg)$'),
            config: {
                jpg: {},
                png: { quality: '65-80' },
                svg: { removeViewBox: true },
                gif: {}
            }
        };

        this.setting = Object.assign({}, def, c);
    }

    _class.prototype.apply = function apply(op) {

        var setting = this.setting;

        if (!setting.filter.test(op.file)) {
            op.next();
        } else {
            op.output && op.output({
                action: '压缩',
                file: op.file
            });
            (0, _imagemin2.default)([op.file], '', {
                plugins: [(0, _imageminMozjpeg2.default)(this.setting.config.jpg), (0, _imageminJpegtran2.default)(this.setting.config.jpg), (0, _imageminPngquant2.default)(this.setting.config.png), (0, _imageminSvgo2.default)(this.setting.config.svg), (0, _imageminGifsicle2.default)(this.setting.config.gif)]
            }).then(function (files) {
                op.code = files[0].data;
                op.next();
            }).catch(function (e) {
                op.err = e;
                op.catch();
            });
        }
    };

    return _class;
}();

exports.default = _class;