// describe("angularTest_App", function(){
// 	beforeEach(module("app"));

// 	//controller
// 	describe("testController", function(){

// 		var controller, 
// 			scope;

// 		//using angular-mocks.js to inject a controller before each test
// 		beforeEach(inject(function($controller, $rootScope){
// 			scope = $rootScope.$new();
// 			controller = $controller("testController", {
// 				$scope: scope
// 			});
// 		}));

// 		/**
// 		 * controller existence testing
// 		 */
// 		it("Should have a proper controller", function(){
// 			console.debug("testController: Should have a proper controller");
// 			expect(controller).toBeDefined();
// 			expect(controller.testValue).toEqual("stuff");
// 		});

// 		it("Should have run init after evaluation", function(){
// 			console.debug('Should have run init after evaluation');
// 			expect(controller.initTestValue).toEqual(5);
// 		})

// 		it("Should not run changeResult() yet", function(){
// 			console.debug("Should not run changeResult() until manual call");
// 			expect(controller.testValue).not.toEqual("result changed");

// 			controller.changeResult();
// 			expect(controller.testValue).toEqual("result changed");
// 		})

// 	});

	
// 	//factory
// 	describe("testerRepository", function(){
// 		var factory,
// 			$httpBackend,
// 			$q;

// 		beforeEach(inject(function(_$httpBackend_, _$q_, _testerRepository_){
// 			factory = _testerRepository_;
// 			$httpBackend = _$httpBackend_;
// 			$q = _$q_;
// 		}));

// 		beforeEach(function(){
// 			$httpBackend.when('GET', 'http://localhost:15000/api/stuff')
// 				.respond(['stuff']);
// 		})

// 		//have to inject $http into the factory

// 		it("should exist", function(){
// 			console.debug("testerRepository: Should exist");
// 			expect(factory).toBeDefined();			
// 		})

		
// 		it("should have an exposed function test()", function(){
// 			console.debug("testerRepository: Should have an exposed function test()");
// 			expect(factory.test).toEqual(jasmine.any(Function));
// 			expect(factory.test()).toEqual("test")
// 		})

// 		it("should have an exposed function testNumber", function(){
// 			console.debug("testerRepository: Should have an exposed function testNumber()");
// 			expect(factory.testNumber).toEqual(jasmine.any(Function));
// 			expect(factory.testNumber()).toEqual(0);
// 		})

// 		describe("asyncTest function test", function(){
// 			it("should have an exposed function asyncTest", function(){
// 				console.debug("testerRepository: Should have an exposed function asyncTest()");
// 				expect(factory.asyncTest).toEqual(jasmine.any(Function));
// 			})

// 			it("should have a value return of 'test complete'", function(done){
// 				inject(function($timeout){
// 					factory.asyncTest().then(
// 						function(result){
// 							expect(result).toBe("test complete");
// 						},
// 						function(err){
// 							done.fail(err);
// 						})
// 						.finally(done);

// 					$timeout.flush(200);
// 				})
// 			})

// 		})

// 		describe("httpTest function test", function(){
// 			it("should have an exposed function httpTest", function(){
// 				console.debug("testerRepository: Should have an exposed function httpTest()");
// 				expect(factory.httpTest).toEqual(jasmine.any(Function));
// 			})

// 			it("should have a value return of a 1 string array", function(done){
// 				inject(function($rootScope){
// 					factory.httpTest().then(
// 						function(response){
// 							console.log(response);
// 						},
// 						function(err){
// 							done.fail(err);
// 						})
// 						.finally(done);

// 					$httpBackend.flush();
// 					$rootScope.$apply();

// 				})

// 			})
// 		})


// 	});
	



// })