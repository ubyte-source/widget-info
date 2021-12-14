(function (window) {

    'use strict';

    class Line {

        constructor(info) {
            this.info = info;
            this.elements = {};
            this.elements.labels = [];
        }

        getInfo() {
            return this.info;
        }
        getTitle() {
            if (this.elements.hasOwnProperty('title')) return this.elements.title;
            let container = this.getContainer();
            this.elements.title = document.createElement('h4');
            this.elements.title.className = 'title';
            container.insertBefore(this.elements.title, container.firstChild);
            return this.elements.title;
        }
        setTitle(text) {
            let node = document.createTextNode(text),
                title = this.getTitle();

            title.innerText = '';
            title.appendChild(node);
            return this;
        }
        getContainer() {
            if (this.elements.hasOwnProperty('container')) return this.elements.container;
            this.elements.container = document.createElement('li');
            this.elements.container.className = 'container';
            return this.elements.container;
        }
        out() {
            return this.getContainer();
        }
        empty() {
            let labels = this.getLabels();
            for (let item = 0; item < labels.length; item++)
                Info.removeElementDOM(labels[item].out());

            return this;
        }
    }

    class Image {

        static icon() {
            return 'material-icons description';
        }

        constructor(info) {
            this.info = info;
            this.elements = {};
        }

        getInfo() {
            return this.info;
        }
        get() {
            if (this.elements.hasOwnProperty('container')) return this.elements.container;
            let icon = Info.getIcon(this.constructor.icon());
            this.elements.container = document.createElement('div');
            this.elements.container.className = 'container';
            this.elements.container.appendChild(icon);
            return this.elements.container;
        }
        set(src) {
            let container = this.get(),
                picture = document.createElement('img');

            picture.src = src;
            picture.className = 'rounded';

            container.innerText = '';
            container.appendChild(picture);

            return this;
        }
        getWrapper() {
            if (this.elements.hasOwnProperty('wrapper')) return this.elements.wrapper;
            this.elements.wrapper = document.createElement('div');
            this.elements.wrapper.className = 'wrapper';
            this.elements.wrapper.appendChild(this.get());
            return this.elements.wrapper;
        }
        out() {
            return this.getWrapper();
        }
    }

    class Preloader {

        constructor(info) {
            this.info = info;
            this.elements = {};
        }

        getInfo() {
            return this.info;
        }
        getPreloader() {
            if (this.elements.hasOwnProperty('preloader')) return this.elements.preloader;
            this.elements.preloader = document.createElement('div');
            this.elements.preloader.className = 'preloader';
            return this.elements.preloader;
        }
        getSpinner() {
            if (this.elements.hasOwnProperty('spinner')) return this.elements.spinner;
            this.elements.spinner = document.createElement('div');
            this.elements.spinner.className = 'spinner';

            for (let item = 0; item < 3; item++) {
                let bounce = document.createElement('div');
                bounce.className = 'bounce-' + item;
                this.elements.spinner.appendChild(bounce);
            }

            return this.elements.spinner;
        }
        showSpinner() {
            let spinner = this.getSpinner();
            this.getPreloader().appendChild(spinner);
            return this;
        }
        hideSpinner() {
            let spinner = this.getSpinner();
            Info.removeElementDOM(spinner);
            return this;
        }
        show() {
            let preloader = this.getPreloader();
            this.getInfo().out().appendChild(preloader);
            return this;
        }
        hide() {
            let preloader = this.getPreloader();
            Info.removeElementDOM(preloader);
            return this;
        }
        status() {
            let preloader = this.getPreloader();
            return null !== preloader.parentNode;
        }
    }

    class Info {

        static phrase = function () {
            return String.fromCharCode(45);
        }
        static space() {
            return 4;
        }

        constructor() {
            this.elements = {};
            this.elements.image = new window.Info.Image(this);
            this.elements.preloader = new window.Info.Preloader(this);
            this.xhr = {
                url: null,
                id: null,
                error: 0,
                construct: new XMLHttpRequest(),
                callback: null
            };

            this.xhr.construct.addEventListener('load', this, false);
            this.xhr.construct.addEventListener('error', this, false);
        }

        getImage() {
            return this.elements.image;
        }
        getPreloader() {
            return this.elements.preloader;
        }
        getXHR() {
            return this.xhr.construct;
        }
        setXHRCallback(func) {
            this.xhr.callback = func;
            return this;
        }
        getXHRCallback() {
            return this.xhr.callback;
        }
        getUrl() {
            return this.xhr.url;
        }
        setUrl(url) {
            this.xhr.url = url;
            return this;
        }
        request(callback) {
            this.getPreloader().showSpinner().show();
            this.setXHRCallback(callback);

            let xhr = this.getXHR(),
                url = this.getUrl();

            xhr.open('GET', url);
            xhr.send();
        }
        error() {
            this.xhr.error = this.xhr.error + 1;
            if (this.xhr.error <= 4)
                setTimeout(this.request.bind(this), 1e3, this.getCallbackEverywhere());
        }
        load() {
            let json, xhr = this.getXHR();

            this.xhr.error = 0;

            this.getPreloader().hide();

            try {
                json = JSON.parse(xhr.responseText);
            } catch (message) {
                json = {
                    'status': false,
                    'notice': message
                };
            }

            let callback = this.getXHRCallback();
            if (typeof callback === 'function') callback.call(this, json);
        }
        getLine() {
            if (this.elements.hasOwnProperty('ul')) return this.elements.ul;
            this.elements.ul = document.createElement('ul');
            this.elements.ul.className = 'line';
            return this.elements.ul;
        }
        getDescription() {
            if (this.elements.hasOwnProperty('description')) return this.elements.description;
            let name = this.getName(),
                line = this.getLine();

            this.elements.description = document.createElement('div');
            this.elements.description.className = 'description';
            this.elements.description.appendChild(name);
            this.elements.description.appendChild(line);

            return this.elements.description;
        }
        getName() {
            if (this.elements.hasOwnProperty('name')) return this.elements.name;
            let node = document.createTextNode(String.fromCharCode(45));
            this.elements.name = document.createElement('h2');
            this.elements.name.appendChild(node);
            return this.elements.name;
        }
        setName(html) {
            let node = typeof html === 'string' ? document.createTextNode(html) : html,
                name = this.getName();

            name.innerText = '';
            name.appendChild(node);

            return this;
        }
        getMain() {
            if (this.elements.hasOwnProperty('main')) return this.elements.main;
            let image = this.getImage(),
                space = this.constructor.space();

            this.elements.main = document.createElement('div');
            this.elements.main.className = 'image pure-u-' + space.toString() + '-24';
            this.elements.main.appendChild(image.out());
            return this.elements.main;
        }
        getDetail() {
            if (this.elements.hasOwnProperty('detail')) return this.elements.detail;
            let description = this.getDescription(),
                space = 24 - this.constructor.space();

            this.elements.detail = document.createElement('div');
            this.elements.detail.className = 'detail pure-u-' + space.toString() + '-24';
            this.elements.detail.appendChild(description);
            return this.elements.detail;
        }
        getContainer() {
            if (this.elements.hasOwnProperty('container')) return this.elements.container;
            let main = this.getMain(),
                detail = this.getDetail();

            this.elements.container = document.createElement('div');
            this.elements.container.className = 'info document pure-g';
            this.elements.container.appendChild(main);
            this.elements.container.appendChild(detail);

            return this.elements.container;
        }
        out() {
            return this.getContainer();
        }
        handleEvent(event) {
            if (typeof this[event.type] === 'function')
                return this[event.type].call(this, event);

            let attribute = this.constructor.closestAttribute(event.target, 'data-handle-event');
            if (attribute === null) return;

            let attribute_split = attribute.split(/\s+/);
            for (let item = 0; item < attribute_split.length; item++) {
                let execute = attribute_split[item].split(':');
                if (execute.length !== 2) break;
                if (execute[0] === event.type || execute[0] === '') {
                    if (typeof this[execute[1]] !== 'function') continue;

                    this[execute[1]].call(this, event);
                }
            }
        }
        static closestAttribute(target, attribute, html) {
            if (typeof attribute === 'undefined'
                || !attribute.length) return null;

            let result = null, element = target;

            do {
                let tagname = element.tagName.toLowerCase();
                if (tagname === 'body') return null;

                result = element.getAttribute(attribute);
                if (result !== null) {
                    result = result.toString();
                    if (result.length) break;
                }

                element = element.parentNode;
            } while (element !== null
                || typeof element === 'undefined');

            if (typeof html === 'undefined'
                || html !== true) return result;

            return element;
        }
        static getIcon(name) {
            let icon = document.createElement('i'),
                clean = name.replace(/(\s+)?material-icons(\s+)?/, '');

            icon.className = name;
            if (name === clean) return icon;

            let text = document.createTextNode(clean);
            icon.appendChild(text);

            return icon;
        }
        static removeElementDOM(element) {
            let parent = element === null || typeof element === 'undefined' || typeof element.parentNode === 'undefined' ? null : element.parentNode;
            if (parent === null) return false;
            parent.removeChild(element);
            return true;
        }
    }

    window.Info = Info;
    window.Info.Line = Line;
    window.Info.Preloader = Preloader;
    window.Info.Image = Image;

})(window);