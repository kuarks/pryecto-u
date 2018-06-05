'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function () {
    function Menu(element) {
        _classCallCheck(this, Menu);

        this.element = element;
        this.active = false;
    }

    _createClass(Menu, [{
        key: 'activate',
        value: function activate() {
            this.element.style.boxShadow = '1px 1px 30px rgba(0,0,0,.15)';
            this.element.style.borderBottom = '1px solid rgba(0,0,0,.1)';
        }
    }, {
        key: 'deactivate',
        value: function deactivate() {
            this.element.style.boxShadow = '';
            this.element.style.borderBottom = '';
        }
    }]);

    return Menu;
}();

var html = document.querySelector('html');
var nav = document.querySelector('#top');
var topMenu = new Menu(nav);
var logo = document.querySelector('.logo-text');

window.addEventListener('scroll', function (e) {
    if (html.scrollTop > 10) {
        topMenu.activate();
    } else {
        topMenu.deactivate();
    }
});

logo.addEventListener('click', function () {
    window.location = '/';
});

var div = document.querySelector('#modal');
var burger = document.querySelector('#burger');
var close = document.querySelector('#close-menu');

close.addEventListener('click', function () {
    div.style.display = 'none';
});

burger.addEventListener('click', function () {
    div.style.display = 'block';
    div.style.backgroundColor = '#000';
});