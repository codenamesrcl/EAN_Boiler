//controller
describe("testController", function(){
	beforeEach(module("app"));

	var controller, 
		scope,
		$rootScope;


	//using angular-mocks.js to inject a controller before each test
	beforeEach(inject(function($injector){
		var $controller = $injector.get("$controller");
		
		$rootScope = $injector.get("$rootScope");
		scope = $rootScope.$new();
		controller = $controller("testController", {
			$scope: scope
		});
	}));

	/**
	 * controller existence testing
	 */
	it("Should have a proper controller", function(){
		expect(controller).toBeDefined();
		expect(controller.testValue).toEqual("stuff");
	});

	it("Should have run init after evaluation", function(){
		expect(controller.initTestValue).toEqual(5);
	})

	it("Should not run changeResult() yet", function(){
		expect(controller.testValue).not.toEqual("result changed");

		//execute changeResult then retest for updated value
		controller.changeResult();
		expect(controller.testValue).toEqual("result changed");
	})

	it("should be usable with chai assertions", function(){
		assert.ok('stuff', 'stuff is good');
	})

	it("stuff is so good", function(){
		assert.equal("stuff is not good", "stuff is not good");
	})

});