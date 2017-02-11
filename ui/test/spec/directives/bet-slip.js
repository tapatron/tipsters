'use strict';

describe('Directive: betSlip', function () {

  // load the directive's module
  beforeEach(module('tipstersApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bet-slip></bet-slip>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the betSlip directive');
  }));
});