{
  let Name = traceur.runtime.modules['@name'];

  function isIndex(s) {
    // toUint32: s >>> 0
    return s == String(s >>> 0);
  }

  function ArrayLike() {
    // This should use a private name.
    Object.defineProperty(this, '_length', {
      value: 0,
      writable: true
    });
  }

  ArrayLike.prototype = Object.create({}, {
    length: {
      get: function() {
        return this._length;
      }
    }
  });

  ArrayLike.prototype[Name.elementSet] = function(name, value) {
    if (isIndex(name) && +name >= this.length) {
      this._length = +name + 1;
    }
    Object.setProperty(this, name, value);
  };

  let a = new ArrayLike;
  a[0] = 0;
  assertEquals(1, a.length);
  a[5] = 5;
  assertEquals(6, a.length);

  assertArrayEquals(['0', '5'], Object.keys(a));
}
