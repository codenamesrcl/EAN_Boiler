//factory
describe("testerRepository", function(){
	beforeEach(module("app"));

	var factory,
		$httpBackend,
		$rootScope
		;
		//$q;

	beforeEach(inject(function($injector){
		factory = $injector.get('testerRepository');
		$httpBackend = $injector.get("$httpBackend");
		$rootScope = $injector.get("$rootScope");
	}));

	//http backend setup
	beforeEach(function(){
		$httpBackend.when('GET', 'http://localhost:15000/api/stuff')
			.respond(['stuff']);
	})

	//have to inject $http into the factory

	it("should exist", function(){
		expect(factory).toBeDefined();			
	})

	describe("test function", function(){
		it("should have an exposed function test()", function(){
			expect(factory.test).toEqual(jasmine.any(Function));
			expect(factory.test()).toEqual("test")
		})

	})

	describe("testNumber function", function(){
		it("should have an exposed function testNumber", function(){
			expect(factory.testNumber).toEqual(jasmine.any(Function));
			expect(factory.testNumber()).toEqual(0);
		})
	})


	describe("asyncTest function", function(){
		it("should have an exposed function asyncTest", function(){
			expect(factory.asyncTest).toEqual(jasmine.any(Function));
		})

		it("should have a value return of 'test complete'", function(done){
			inject(function($timeout){
				factory.asyncTest().then(
					function(result){
						expect(result).toBe("test complete");
					},
					function(err){
						done.fail(err);
					})
					.finally(done);

				$timeout.flush(200);
			})
		})

	})

	describe("httpTest function", function(){
		it("should have an exposed function httpTest", function(){
			expect(factory.httpTest).toEqual(jasmine.any(Function));
		})

		it("should have a value return of a 1 string array", function(done){
			factory.httpTest().then(
				function(response){
					expect(response.data).toEqual(jasmine.any(Array));

				},
				function(err){
					done.fail(err);
				})
				.finally(done);

			//httpBackend flush for the http call
			//rootScope apply to allow the q promise to propagate
			$httpBackend.flush();
			$rootScope.$apply();
		}, 5*60*1000)
	})


});