function destructObject() {
  var a, b, c, d;
  ({a, x: b, y: {c, z: [,d]}} = {
    a: 7,  // field with shorthand a => a: a syntax
    x: 8,  // typical syntax
    y: {   // nested object destructuring
           // missing binding 'c'
      z: [10, 11, 12]  // nested array destructuring
    }
  });
  return {
    a: a,
    b: b,
    c: c,
    d: d
  };
}

// ----------------------------------------------------------------------------

var result = destructObject();
assertEquals(7, result.a);
assertEquals(8, result.b);
assertUndefined(result.c);
assertEquals(11, result.d);
