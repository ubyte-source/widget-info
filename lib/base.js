(function (window) {

    'use strict';

    class Line {

        /**
         * It creates a new JavaScript object.
         * @param info - The info object that was passed to the constructor.
         */
        constructor(info) {
            this.info = info;
            this.elements = {};
            this.elements.labels = [];
        }

        /**
         * Get the info property of the object
         * @returns The getInfo() method returns the info property.
         */
        getInfo() {
            return this.info;
        }
        /**
         * Get the title element of the current page
         * @returns The title of the question.
         */
        getTitle() {
            if (this.elements.hasOwnProperty('title')) return this.elements.title;
            let container = this.getContainer();
            this.elements.title = document.createElement('h4');
            this.elements.title.className = 'title';
            container.insertBefore(this.elements.title, container.firstChild);
            return this.elements.title;
        }
        /**
         * * Create a text node from the given text and append it to the title element
         * @param text - The text to be displayed in the title bar.
         * @returns Nothing.
         */
        setTitle(text) {
            let node = document.createTextNode(text),
                title = this.getTitle();

            title.innerText = '';
            title.appendChild(node);
            return this;
        }
        /**
         * Create a container element if it doesn't exist, and return it
         * @returns The container element.
         */
        getContainer() {
            if (this.elements.hasOwnProperty('container')) return this.elements.container;
            this.elements.container = document.createElement('li');
            this.elements.container.className = 'container';
            return this.elements.container;
        }
        /**
         * Get the container of the current cell
         * @returns The container element.
         */
        out() {
            return this.getContainer();
        }
        /**
         * Remove all the labels from the output pane
         * @returns Nothing.
         */
        empty() {
            let labels = this.getLabels();
            for (let item = 0; item < labels.length; item++)
                window.Info.removeElementDOM(labels[item].out());

            return this;
        }
    }

    class Image {

        /**
         * *The function returns the icon name for the material icon library.*
         * @returns The icon() method returns the string 'material-icons description'.
         */
        static icon() {
            return 'material-icons description';
        }

        /**
         * The constructor function creates an object that has a property called info. 
         * The info property is set to the value of the argument passed into the constructor. 
         * The constructor also creates a property called elements. 
         * The elements property is set to an empty object
         * @param info - The info object that was passed to the constructor.
         */
        constructor(info) {
            this.info = info;
            this.elements = {};
        }


        /**
         * Get the info property of the object
         * @returns The getInfo() method returns the info property.
         */
        getInfo() {
            return this.info;
        }
        /**
         * It creates a container for the icon.
         * @returns The container element.
         */
        get() {
            if (this.elements.hasOwnProperty('container')) return this.elements.container;
            let icon = window.Info.getIcon(this.constructor.icon());
            this.elements.container = document.createElement('div');
            this.elements.container.className = 'container';
            this.elements.container.appendChild(icon);
            return this.elements.container;
        }
        /**
         * It sets the src attribute of the image to the src parameter.
         * @param src - The URL of the image to display.
         * @returns The `Image` object.
         */
        set(src) {
            let container = this.get(),
                picture = document.createElement('img');

            picture.src = src;
            picture.className = 'rounded';

            container.innerText = '';
            container.appendChild(picture);

            return this;
        }
        /**
         * Create a div element with the class name "wrapper" and append the element returned by the
         * get() function to it
         * @returns The wrapper div.
         */
        getWrapper() {
            if (this.elements.hasOwnProperty('wrapper')) return this.elements.wrapper;
            this.elements.wrapper = document.createElement('div');
            this.elements.wrapper.className = 'wrapper';
            this.elements.wrapper.appendChild(this.get());
            return this.elements.wrapper;
        }
        /**
         * Returns the HTML for the current page
         * @returns The getWrapper() method returns the wrapper div.
         */
        out() {
            return this.getWrapper();
        }
    }

    class Preloader {

        /**
         * Create a new JavaScript object with the given info.
         * @param info - The info object that was passed to the constructor.
         */
        constructor(info) {
            this.info = info;
            this.elements = {};
        }

        /**
         * Get the info property of the current object
         * @returns The info property of the object.
         */
        getInfo() {
            return this.info;
        }
        /**
         * Create a div element with the class name "preloader" if it doesn't already exist
         * @returns The preloader element.
         */
        getPreloader() {
            if (this.elements.hasOwnProperty('preloader')) return this.elements.preloader;
            this.elements.preloader = document.createElement('div');
            this.elements.preloader.className = 'preloader';
            return this.elements.preloader;
        }
        /**
         * Create a spinner if it doesn't exist, and return it
         * @returns The spinner element.
         */
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
        /**
         * Create a spinner and append it to the preloader
         * @returns Nothing.
         */
        showSpinner() {
            let spinner = this.getSpinner();
            this.getPreloader().appendChild(spinner);
            return this;
        }
        /**
         * Hide the spinner.
         * @returns The `this` object.
         */
        hideSpinner() {
            let spinner = this.getSpinner();
            window.Info.removeElementDOM(spinner);
            return this;
        }
        /**
         * Show the preloader by appending it to the info element.
         * @returns Nothing.
         */
        show() {
            let preloader = this.getPreloader();
            this.getInfo().out().appendChild(preloader);
            return this;
        }
        /**
         * Hide the preloader from the user.
         * @returns Nothing.
         */
        hide() {
            let preloader = this.getPreloader();
            window.Info.removeElementDOM(preloader);
            return this;
        }
        /**
         * Returns a boolean indicating whether the preloader is currently visible
         * @returns The status() method returns a boolean value.
         */
        status() {
            let preloader = this.getPreloader();
            return null !== preloader.parentNode;
        }
    }

    class Info {

        /* Creating a function that returns a string with a hyphen. */
        static phrase = function () {
            return String.fromCharCode(45);
        }

        /**
         * *Return a number of spaces.*
         * 
         * @returns The return type is int.
         */
        static space() {
            return 4;
        }

        /**
         * The constructor function creates the object and sets up the event listeners
         */
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

        /**
         * Get the image element from the page
         * @returns The image element.
         */
        getImage() {
            return this.elements.image;
        }
        /**
         * Get the preloader element
         * @returns The preloader element.
         */
        getPreloader() {
            return this.elements.preloader;
        }
        /**
         * It returns the XHR object.
         * @returns The constructor of the XMLHttpRequest object.
         */
        getXHR() {
            return this.xhr.construct;
        }
        /**
         * It sets the callback function for the XHR object.
         * @param func - The function to be called when the XHR request is complete.
         * @returns Nothing.
         */
        setXHRCallback(func) {
            this.xhr.callback = func;
            return this;
        }
        /**
         * Get the callback function for the XHR object
         * @returns The callback function that was passed to the XHR object.
         */
        getXHRCallback() {
            return this.xhr.callback;
        }
        /**
         * Get the URL of the current request
         * @returns The URL of the request.
         */
        getUrl() {
            return this.xhr.url;
        }
        /**
         * Set the URL for the request
         * @param url - The URL to which the request is sent.
         * @returns Nothing.
         */
        setUrl(url) {
            this.xhr.url = url;
            return this;
        }
        /**
         * It makes a GET request to the URL specified in the getUrl() function.
         * @param callback - The function to be called when the request is complete.
         */
        request(callback) {
            this.getPreloader().showSpinner().show();
            this.setXHRCallback(callback);

            let xhr = this.getXHR(),
                url = this.getUrl();

            xhr.open('GET', url);
            xhr.send();
        }
        /**
         * If the request fails, try again
         */
        error() {
            this.xhr.error = this.xhr.error + 1;
            if (this.xhr.error <= 4)
                setTimeout(this.request.bind(this), 1e3, this.getCallbackEverywhere());
        }
        /**
         * * Loads the JSON file and calls the callback function with the JSON data
         */
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
        /**
         * Create a new <ul> element and return it
         * @returns The `getLine()` method returns the `ul` element.
         */
        getLine() {
            if (this.elements.hasOwnProperty('ul')) return this.elements.ul;
            this.elements.ul = document.createElement('ul');
            this.elements.ul.className = 'line';
            return this.elements.ul;
        }
        /**
         * Create a div element with the class `description` and append the name and line number to it
         * @returns The description element.
         */
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
        /**
         * *Create a text node and append it to the name element.*
         * @returns The name of the element.
         */
        getName() {
            if (this.elements.hasOwnProperty('name')) return this.elements.name;
            let node = document.createTextNode(String.fromCharCode(45));
            this.elements.name = document.createElement('h2');
            this.elements.name.appendChild(node);
            return this.elements.name;
        }
        /**
         * Set the name of the element
         * @param html - The HTML to be inserted into the element.
         * @returns The `setName` method returns the `this` object.
         */
        setName(html) {
            let node = typeof html === 'string' ? document.createTextNode(html) : html,
                name = this.getName();

            name.innerText = '';
            name.appendChild(node);

            return this;
        }

        /**
         * *Create a div element with the class name "image pure-u-24-24" and append the image element
         * to it.*
         * @returns The main element.
         */
        getMain() {
            if (this.elements.hasOwnProperty('main')) return this.elements.main;
            let image = this.getImage(),
                space = this.constructor.space();

            this.elements.main = document.createElement('div');
            this.elements.main.className = 'image pure-u-' + space.toString() + '-24';
            this.elements.main.appendChild(image.out());
            return this.elements.main;
        }
        /**
         * It creates a div element with the class name detail.
         * @returns The detail element.
         */
        getDetail() {
            if (this.elements.hasOwnProperty('detail')) return this.elements.detail;
            let description = this.getDescription(),
                space = 24 - this.constructor.space();

            this.elements.detail = document.createElement('div');
            this.elements.detail.className = 'detail pure-u-' + space.toString() + '-24';
            this.elements.detail.appendChild(description);
            return this.elements.detail;
        }
        /**
         * Get the container element for the document
         * @returns The container div.
         */
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
        /**
         * Get the container of the current cell
         * @returns The container element.
         */
        out() {
            return this.getContainer();
        }
        /**
         * If the event type matches the event type in the attribute, or if the event type is empty,
         * then execute the function in the attribute
         * @param event - The event object that was passed to the event handler.
         * @returns Nothing.
         */
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
        /**
         * Find the closest attribute to the target element
         * @param target - The element to search for the attribute.
         * @param attribute - The attribute to search for.
         * @param html - If true, the attribute is searched for in the HTML source code.
         * @returns The closest attribute to the target element.
         */
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

        /**
         * Create an HTML element with the class name of the icon name passed in. 
         * 
         * If the icon name is not the same as the clean name, then append a text node to the element
         * with the clean name. 
         * 
         * Return the element
         * @param name - The name of the icon.
         * @returns The icon element.
         */

        static getIcon(name) {
            let icon = document.createElement('i'),
                clean = name.replace(/(\s+)?material-icons(\s+)?/, '');

            icon.className = name;
            if (name === clean) return icon;

            let text = document.createTextNode(clean);
            icon.appendChild(text);

            return icon;
        }
        /**
         * Remove the element from the DOM
         * @param element - The element to remove from the DOM.
         * @returns The return value is a boolean value.
         */
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