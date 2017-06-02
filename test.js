mocha.setup('bdd');
var assert = chai.assert;

// describe('addClass', function() {
//   it('should add class into element', function() {
//     var element = { className: '' };
//
//     addClass(element, 'test-class');
//
//     assert.equal(element.className, 'test-class');
//   });
//
//   it('should not add a class which already exists in element');
// });

describe('restaurant', function() {
  var restaurant = payload["restaurant"];

  it('should have a logo', function() {
    assert.equal(restaurant["logo"], "http://example.com/images/pizza.png");
  });

  it('should have a name', function() {
    assert.equal(restaurant["name"], "Pizza R Us");
  });

  it('should have a Yelp link', function() {
    assert.equal(restaurant["yelp_link"], "https://yelp.com/pizza-r-us");
  });
});

describe('members', function() {
  var members = payload["members"];

  it('should have four members', function() {
    assert.equal(members.length, 4);
  });
});

describe('member', function() {
  var member = payload["members"][0];

  it('should have a name', function() {
    assert.equal(member["name"], 'Jill');
  });
  it('should have an email', function() {
    assert.equal(member["email"], 'jill@mycompany.com');
  });
  it('should have an team', function() {
    assert.equal(member["team"], 'engineering');
  });
});

//mocha.run();
