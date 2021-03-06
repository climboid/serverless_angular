'use strict';

describe('Controller: TestCtrl', function() {

  // load the controller's module
  beforeEach(module('serverlessAngularApp'));

  var TestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    TestCtrl = $controller('TestCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
