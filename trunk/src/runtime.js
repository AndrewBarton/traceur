// Shim for DOM class declarations to be included before
// including compiled classes which derive from the DOM

function HTMLH1HeadingElement() {}
function HTMLH2HeadingElement() {}
function HTMLH3HeadingElement() {}
function HTMLH4HeadingElement() {}
function HTMLH5HeadingElement() {}
function HTMLH6HeadingElement() {}

try {
  HTMLH1HeadingElement.prototype = HTMLHeadingElement.prototype;
  HTMLH2HeadingElement.prototype = HTMLHeadingElement.prototype;
  HTMLH3HeadingElement.prototype = HTMLHeadingElement.prototype;
  HTMLH4HeadingElement.prototype = HTMLHeadingElement.prototype;
  HTMLH5HeadingElement.prototype = HTMLHeadingElement.prototype;
  HTMLH6HeadingElement.prototype = HTMLHeadingElement.prototype;
} catch (e) {
}

traceur.runtime = (function() {
  var map = {};

  // Associates the instance maker with the class.
  // Used below for classes inherited from DOM elements.
  function add(map, name, cls, make) {
    Object.defineProperty(make, '$class', {
      value: cls,
      writable: false,
      enumerable: false,
      configurable: false
    });
    map[name] = make;
  }

  // AUTO-GENERATED
  try {add(map, 'Array', Array, function() {return new Array();});}catch (e) {}
  try {add(map, 'Date', Date, function() {return new Date();});}catch (e) {}
  try {add(map, 'Event', Event, function() {return document.createEvent('Event');});}catch (e) {}
  try {add(map, 'HTMLAnchorElement', HTMLAnchorElement, function() {return document.createElement('a');});}catch (e) {}
  try {add(map, 'HTMLAreaElement', HTMLAreaElement, function() {return document.createElement('area');});}catch (e) {}
  try {add(map, 'HTMLAudioElement', HTMLAudioElement, function() {return document.createElement('audio');});}catch (e) {}
  try {add(map, 'HTMLBRElement', HTMLBRElement, function() {return document.createElement('br');});}catch (e) {}
  try {add(map, 'HTMLBaseElement', HTMLBaseElement, function() {return document.createElement('base');});}catch (e) {}
  try {add(map, 'HTMLBlockquoteElement', HTMLBlockquoteElement, function() {return document.createElement('blockquote');});}catch (e) {}
  try {add(map, 'HTMLBodyElement', HTMLBodyElement, function() {return document.createElement('body');});}catch (e) {}
  try {add(map, 'HTMLButtonElement', HTMLButtonElement, function() {return document.createElement('button');});}catch (e) {}
  try {add(map, 'HTMLCanvasElement', HTMLCanvasElement, function() {return document.createElement('canvas');});}catch (e) {}
  try {add(map, 'HTMLDListElement', HTMLDListElement, function() {return document.createElement('dl');});}catch (e) {}
  try {add(map, 'HTMLDivElement', HTMLDivElement, function() {return document.createElement('div');});}catch (e) {}
  try {add(map, 'HTMLElement', HTMLElement, function() {return document.createElement('span');});}catch (e) {}
  try {add(map, 'HTMLEmbedElement', HTMLEmbedElement, function() {return document.createElement('embed');});}catch (e) {}
  try {add(map, 'HTMLFieldSetElement', HTMLFieldSetElement, function() {return document.createElement('fieldset');});}catch (e) {}
  try {add(map, 'HTMLFormElement', HTMLFormElement, function() {return document.createElement('form');});}catch (e) {}
  try {add(map, 'HTMLH1HeadingElement', HTMLH1HeadingElement, function() {return document.createElement('h1');});}catch (e) {}
  try {add(map, 'HTMLH2HeadingElement', HTMLH2HeadingElement, function() {return document.createElement('h2');});}catch (e) {}
  try {add(map, 'HTMLH3HeadingElement', HTMLH3HeadingElement, function() {return document.createElement('h3');});}catch (e) {}
  try {add(map, 'HTMLH4HeadingElement', HTMLH4HeadingElement, function() {return document.createElement('h4');});}catch (e) {}
  try {add(map, 'HTMLH5HeadingElement', HTMLH5HeadingElement, function() {return document.createElement('h5');});}catch (e) {}
  try {add(map, 'HTMLH6HeadingElement', HTMLH6HeadingElement, function() {return document.createElement('h6');});}catch (e) {}
  try {add(map, 'HTMLHRElement', HTMLHRElement, function() {return document.createElement('hr');});}catch (e) {}
  try {add(map, 'HTMLHeadElement', HTMLHeadElement, function() {return document.createElement('head');});}catch (e) {}
  try {add(map, 'HTMLHeadingElement', HTMLHeadingElement, function() {return document.createElement('h1');});}catch (e) {}
  try {add(map, 'HTMLHtmlElement', HTMLHtmlElement, function() {return document.createElement('html');});}catch (e) {}
  try {add(map, 'HTMLIFrameElement', HTMLIFrameElement, function() {return document.createElement('iframe');});}catch (e) {}
  try {add(map, 'HTMLImageElement', HTMLImageElement, function() {return document.createElement('img');});}catch (e) {}
  try {add(map, 'HTMLInputElement', HTMLInputElement, function() {return document.createElement('input');});}catch (e) {}
  try {add(map, 'HTMLLIElement', HTMLLIElement, function() {return document.createElement('li');});}catch (e) {}
  try {add(map, 'HTMLLabelElement', HTMLLabelElement, function() {return document.createElement('label');});}catch (e) {}
  try {add(map, 'HTMLLegendElement', HTMLLegendElement, function() {return document.createElement('legend');});}catch (e) {}
  try {add(map, 'HTMLLinkElement', HTMLLinkElement, function() {return document.createElement('link');});}catch (e) {}
  try {add(map, 'HTMLMapElement', HTMLMapElement, function() {return document.createElement('map');});}catch (e) {}
  try {add(map, 'HTMLMenuElement', HTMLMenuElement, function() {return document.createElement('menu');});}catch (e) {}
  try {add(map, 'HTMLMetaElement', HTMLMetaElement, function() {return document.createElement('meta');});}catch (e) {}
  try {add(map, 'HTMLMeterElement', HTMLMeterElement, function() {return document.createElement('meter');});}catch (e) {}
  try {add(map, 'HTMLModElement', HTMLModElement, function() {return document.createElement('del');});}catch (e) {}
  try {add(map, 'HTMLOListElement', HTMLOListElement, function() {return document.createElement('ol');});}catch (e) {}
  try {add(map, 'HTMLObjectElement', HTMLObjectElement, function() {return document.createElement('object');});}catch (e) {}
  try {add(map, 'HTMLOptGroupElement', HTMLOptGroupElement, function() {return document.createElement('optgroup');});}catch (e) {}
  try {add(map, 'HTMLOptionElement', HTMLOptionElement, function() {return document.createElement('option');});}catch (e) {}
  try {add(map, 'HTMLOutputElement', HTMLOutputElement, function() {return document.createElement('output');});}catch (e) {}
  try {add(map, 'HTMLParagraphElement', HTMLParagraphElement, function() {return document.createElement('p');});}catch (e) {}
  try {add(map, 'HTMLParamElement', HTMLParamElement, function() {return document.createElement('param');});}catch (e) {}
  try {add(map, 'HTMLPreElement', HTMLPreElement, function() {return document.createElement('pre');});}catch (e) {}
  try {add(map, 'HTMLProgressElement', HTMLProgressElement, function() {return document.createElement('progress');});}catch (e) {}
  try {add(map, 'HTMLQuoteElement', HTMLQuoteElement, function() {return document.createElement('q');});}catch (e) {}
  try {add(map, 'HTMLScriptElement', HTMLScriptElement, function() {return document.createElement('script');});}catch (e) {}
  try {add(map, 'HTMLSelectElement', HTMLSelectElement, function() {return document.createElement('select');});}catch (e) {}
  try {add(map, 'HTMLSourceElement', HTMLSourceElement, function() {return document.createElement('source');});}catch (e) {}
  try {add(map, 'HTMLStyleElement', HTMLStyleElement, function() {return document.createElement('style');});}catch (e) {}
  try {add(map, 'HTMLTableCaptionElement', HTMLTableCaptionElement, function() {return document.createElement('caption');});}catch (e) {}
  try {add(map, 'HTMLTableCellElement', HTMLTableCellElement, function() {return document.createElement('td');});}catch (e) {}
  try {add(map, 'HTMLTableColElement', HTMLTableColElement, function() {return document.createElement('col');});}catch (e) {}
  try {add(map, 'HTMLTableElement', HTMLTableElement, function() {return document.createElement('table');});}catch (e) {}
  try {add(map, 'HTMLTableRowElement', HTMLTableRowElement, function() {return document.createElement('tr');});}catch (e) {}
  try {add(map, 'HTMLTableSectionElement', HTMLTableSectionElement, function() {return document.createElement('tbody');});}catch (e) {}
  try {add(map, 'HTMLTextAreaElement', HTMLTextAreaElement, function() {return document.createElement('textarea');});}catch (e) {}
  try {add(map, 'HTMLTitleElement', HTMLTitleElement, function() {return document.createElement('title');});}catch (e) {}
  try {add(map, 'HTMLUListElement', HTMLUListElement, function() {return document.createElement('ul');});}catch (e) {}
  try {add(map, 'HTMLVideoElement', HTMLVideoElement, function() {return document.createElement('video');});}catch (e) {}
  try {add(map, 'KeyboardEvent', KeyboardEvent, function() {return document.createEvent('KeyboardEvent');});}catch (e) {}
  try {add(map, 'MouseEvent', MouseEvent, function() {return document.createEvent('MouseEvents');});}catch (e) {}
  try {add(map, 'MutationEvent', MutationEvent, function() {return document.createEvent('MutationEvents');});}catch (e) {}
  try {add(map, 'RegExp', RegExp, function() {return new RegExp();});}catch (e) {}
  try {add(map, 'SVGZoomEvent', SVGZoomEvent, function() {return document.createEvent('SVGZoomEvents');});}catch (e) {}
  try {add(map, 'String', String, function() {return new String();});}catch (e) {}
  try {add(map, 'Text', Text, function() {return document.createTextNode('');});}catch (e) {}
  try {add(map, 'TextEvent', TextEvent, function() {return document.createEvent('TextEvent');});}catch (e) {}
  try {add(map, 'UIEvent', UIEvent, function() {return document.createEvent('UIEvents');});}catch (e) {}
  // END AUTO-GENERATED

  // The createClass function
  // name: the class name
  // base: the base class
  // make: the function to create instance of the class
  //       i.e. function() { document.createEvent('div'); }
  // ctor: the constructor function
  // proto: the prototype object (containing instance methods, properties)
  // initS: the function to initialize class static members
  function createClass(name, base, make, ctor, init, proto, initS) {
    if (base) {
      if (typeof base != 'function') {
        throw new TypeError(
            'Base class of ' + name +
            ' must be a function (' + typeof base + ')');
      }
    } else {
      base = Object;
    }
    make = make || base.$new;

    if (!make && base.name) {
      var dom = map[base.name];
      if (dom && dom.$class === base) {
        make = dom;
      }
    }

    var binit = base.$init;
    var finit = binit
      ? (init ? function() { binit.call(this); init.call(this); } : binit)
      : init;
    if (ctor) {
      proto.constructor = ctor;
    } else {
      ctor = proto.constructor;
    }

    function TheClass() {
      var $this = make ? make() : this;
      $this.__proto__ = TheClass.prototype;
      if (finit) { finit.call($this); }
      if (ctor) { ctor.apply($this, arguments); }
      return $this;
    }

    proto.__proto__ = base.prototype;
    TheClass.prototype = proto;

    Object.defineProperty(TheClass, '$className', {
      value: name,
      writable: false,
      enumerable: false,
      configurable: false
    });
    if (finit) {
      Object.defineProperty(TheClass, '$init', {
        value: finit,
        writable: false,
        enumerable: false,
        configurable: false
      });
    }
    if (make) {
      Object.defineProperty(TheClass, '$new', {
        value: make,
        writable: false,
        enumerable: false,
        configurable: false
      });
    }
    if (initS) { initS.call(TheClass); }
    return TheClass;
  }

  function superCall($class, name, args) {
    var proto = Object.getPrototypeOf($class.prototype);
    while (proto) {
      var p = Object.getOwnPropertyDescriptor(proto, name);
      if (p) {
        if (p.hasOwnProperty('value')) {
          return p.value.apply(this, args);
        }
        if (p.hasOwnProperty('get')) {
          return p.get.apply(this, args);
        }
      }
      proto = Object.getPrototypeOf(proto);
    }
    throw new TypeError("Object has no method '" + name + "'.");
  }

  function superGet($class, name) {
    var proto = Object.getPrototypeOf($class.prototype);
    while (proto) {
      var p = Object.getOwnPropertyDescriptor(proto, name);
      if (p) {
        if (p.hasOwnProperty('value')) {
          return p.value;
        }
        if (p.hasOwnProperty('get')) {
          return p.get.call(this);
        }
      }
      proto = Object.getPrototypeOf(proto);
    }
    return undefined;
  }

  // Add iterator support to arrays.
  Object.defineProperty(Array.prototype, '__iterator__', {
    value: function() {
      var index = 0;
      var array = this;
      var current;
      return {
        get current() {
          return current;
        },
        moveNext: function() {
          if (index < array.length) {
            current = array[index++];
            return true;
          }
          return false;
        }
      };
    },
    enumerable: false,
    configurable: true,
    writable: true
  });

  // Return the traceur namespace.
  return {
    createClass: createClass,
    superCall: superCall,
    superGet: superGet
  };
})();

class Deferred {
  var fired_;
  var result_;
  var listeners_ = [];
  var canceller_;

  constructor(canceller) {
    this.canceller_ = canceller;
  }

  createPromise() {
    return {then: this.then.bind(this), cancel: this.cancel.bind(this)};
  }

  callback(value) {
    this.fire_(value, false);
  }

  errback(err) {
    this.fire_(err, true);
  }

  fire_(value, isError) {
    if (this.fired_)
      throw new Error('already fired');

    this.fired_ = true;
    this.result_ = [value, isError];
    this.notify_();
  }

  notify_() {
    while (this.listeners_.length > 0) {
      var current = this.listeners_.shift();
      var currentResult = undefined;
      try {
        try {
          if (this.result_[1]) {
            if (current.errback)
              currentResult = current.errback.call(undefined, this.result_[0]);
          } else {
            if (current.callback)
              currentResult = current.callback.call(undefined, this.result_[0]);
          }
          current.deferred.callback(currentResult);
        } catch (err) {
          current.deferred.errback(err);
        }
      } catch (unused) {}
    }
  }

  then(callback, errback) {
    var result = new Deferred(this.cancel.bind(this));
    this.listeners_.push({
      deferred: result,
      callback: callback,
      errback: errback
    });
    if (this.fired_)
      this.notify_();
    return result.createPromise();
  }

  cancel() {
    if (this.fired_)
      throw new Error('already finished');
    var result;
    if (this.canceller_) {
      result = this.canceller_(this);
      if (!result instanceof Error)
        result = new Error(result);
    } else {
      result = new Error('cancelled');
    }
    if (!this.fired_) {
      this.result_ = [result, true];
      this.notify_();
    }
  }
}
