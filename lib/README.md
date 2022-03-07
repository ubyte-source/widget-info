# Documentation widget-info

Widget Javascript Info is a library used to create a panel in whitch you can display the data of an element. (ex. User info, Customer Info etc.)

## Structure

library:
- [window.Info](https://github.com/energia-source/widget-info/tree/main/lib#class-windowinfo-usable-methods)
- [window.Info.Line](https://github.com/energia-source/widget-info/tree/main/lib#class-windowinfoline-usable-methods)
- [window.Info.Preloader](https://github.com/energia-source/widget-info/tree/main/lib#class-windowinfopreloader-usable-methods)
- [window.Info.Image](https://github.com/energia-source/widget-info/tree/main/lib#class-windowinfoimage-usable-methods)

<br>

#### ***Class window.Info usable methods***

##### `static space()`

*Return a number of spaces.*

 * **Returns:** The return type is int.

##### `constructor()`

The constructor function creates the object and sets up the event listeners

##### `getImage()`

Get the image element from the page

 * **Returns:** The image element.

##### `getPreloader()`

Get the preloader element

 * **Returns:** The preloader element.

##### `getXHR()`

It returns the XHR object.

 * **Returns:** The constructor of the XMLHttpRequest object.

##### `setXHRCallback(func)`

It sets the callback function for the XHR object.

 * **Parameters:** `func` — The function to be called when the XHR request is complete.
 * **Returns:** Nothing 

##### `getXHRCallback()`

Get the callback function for the XHR object

 * **Returns:** The callback function that was passed to the XHR object.

##### `getUrl()`

Get the URL of the current request

 * **Returns:** The URL of the request.

##### `setUrl(url)`

Set the URL for the request

 * **Parameters:** `url` — The URL to which the request is sent.
 * **Returns:** Nothing 

##### `request(callback)`

It makes a GET request to the URL specified in the getUrl() function.

 * **Parameters:** `callback` — The function to be called when the request is complete.

##### `error()`

If the request fails, try again

##### `load()`

* Loads the JSON file and calls the callback function with the JSON data

##### `getLine()`

Create a new <ul> element and return it

 * **Returns:** The `getLine()` method returns the `ul` element.

##### `getDescription()`

Create a div element with the class `description` and append the name and line number to it

 * **Returns:** The description element.

##### `getName()`

*Create a text node and append it to the name element.*

 * **Returns:** The name of the element.

##### `setName(html)`

Set the name of the element

 * **Parameters:** `html` — The HTML to be inserted into the element.
 * **Returns:** The `setName` method returns the `this` object.

##### `getMain()`

*Create a div element with the class name "image pure-u-24-24" and append the image element to it.*

 * **Returns:** The main element.

##### `getDetail()`

It creates a div element with the class name detail.

 * **Returns:** The detail element.

##### `getContainer()`

Get the container element for the document

 * **Returns:** The container div.

##### `out()`

Get the container of the current cell

 * **Returns:** The container element.

##### `handleEvent(event)`

If the event type matches the event type in the attribute, or if the event type is empty, then execute the function in the attribute

 * **Parameters:** `event` — The event object that was passed to the event handler.
 * **Returns:** Nothing 

##### `static closestAttribute(target, attribute, html)`

Find the closest attribute to the target element

 * **Parameters:**
   * `target` — The element to search for the attribute.
   * `attribute` — The attribute to search for.
   * `html` — If true, the attribute is searched for in the HTML source code.
 * **Returns:** The closest attribute to the target element.

##### `static getIcon(name)`

Create an HTML element with the class name of the icon name passed in.

If the icon name is not the same as the clean name, then append a text node to the element with the clean name.

Return the element

 * **Parameters:** `name` — The name of the icon.
 * **Returns:** The icon element.

##### `static removeElementDOM(element)`

Remove the element from the DOM

 * **Parameters:** `element` — The element to remove from the DOM.
 * **Returns:** The return value is a boolean value.

<br>

#### ***Class window.Info.Line usable methods***

##### `constructor(info)`

It creates a new JavaScript object.

 * **Parameters:** `info` — The info object that was passed to the constructor.

##### `getInfo()`

Get the info property of the object

 * **Returns:** The getInfo() method returns the info property.

##### `getTitle()`

Get the title element of the current page

 * **Returns:** The title of the question.

##### `setTitle(text)`

* Create a text node from the given text and append it to the title element

 * **Parameters:** `text` — The text to be displayed in the title bar.
 * **Returns:** Nothing 

##### `getContainer()`

Create a container element if it doesn't exist, and return it

 * **Returns:** The container element.

##### `out()`

Get the container of the current cell

 * **Returns:** The container element.

##### `empty()`

Remove all the labels from the output pane

 * **Returns:** Nothing 

<br>

#### ***Class window.Info.Preloader usable methods***

##### `constructor(info)`

Create a new JavaScript object with the given info.

 * **Parameters:** `info` — The info object that was passed to the constructor.

##### `getInfo()`

Get the info property of the current object

 * **Returns:** The info property of the object.

##### `getPreloader()`

Create a div element with the class name "preloader" if it doesn't already exist

 * **Returns:** The preloader element.

##### `getSpinner()`

Create a spinner if it doesn't exist, and return it

 * **Returns:** The spinner element.

##### `showSpinner()`

Create a spinner and append it to the preloader

 * **Returns:** Nothing 

##### `hideSpinner()`

Hide the spinner.

 * **Returns:** The `this` object.

##### `show()`

Show the preloader by appending it to the info element.

 * **Returns:** Nothing 

##### `hide()`

Hide the preloader from the user.

 * **Returns:** Nothing 

##### `status()`

Returns a boolean indicating whether the preloader is currently visible

 * **Returns:** The status() method returns a boolean value.

<br>

#### ***Class window.Info.Image usable methods***

##### `static icon()`

*The function returns the icon name for the material icon library.*

 * **Returns:** The icon() method returns the string 'material-icons description'.

##### `constructor(info)`

The constructor function creates an object that has a property called info. The info property is set to the value of the argument passed into the constructor. The constructor also creates a property called elements. The elements property is set to an empty object

 * **Parameters:** `info` — The info object that was passed to the constructor.

##### `getInfo()`

Get the info property of the object

 * **Returns:** The getInfo() method returns the info property.

##### `get()`

It creates a container for the icon.

 * **Returns:** The container element.

##### `set(src)`

It sets the src attribute of the image to the src parameter.

 * **Parameters:** `src` — The URL of the image to display.
 * **Returns:** The `Image` object.

##### `getWrapper()`

Create a div element with the class name "wrapper" and append the element returned by the get() function to it

 * **Returns:** The wrapper div.

##### `out()`

Returns the HTML for the current page

 * **Returns:** The getWrapper() method returns the wrapper div.

## Built With

* [Javascript](https://www.javascript.com/) - Javascript