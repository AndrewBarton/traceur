class NameBindingBase {
  x;
}

class NameBindingDerived extends NameBindingBase {
  getX() { return this.x; }
}

// ----------------------------------------------------------------------------

var derived = new NameBindingDerived();
derived.x = 12;
assertEquals(12, derived.getX());
