var Name = traceur.runtime.modules['@name'];

var n = Name.create();
var p = {};
Object.defineProperty(p, n, {
  get: function() {
    return 42;
  },
  configurable: true
});

var o = Object.create(p);
assertEquals(42, o[n]);
assertThrows(function() {
  o[n] = 1;
});

var val;
Object.defineProperty(p, n, {
  set: function(v) {
    val = v;
  },
  configurable: true
});

o[n] = 33;
assertEquals(33, val);
