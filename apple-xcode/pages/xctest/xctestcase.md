> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcase](https://developer.apple.com/documentation/xctest/xctestcase)

# XCTestCase (Swift)

**Framework:** XCTest  
**Kind:** Class

The primary class for defining test cases, test methods, and performance tests.

## Declaration

```swift
class XCTestCase
```

## Mentioned In

- [Defining Test Cases and Test Methods](defining-test-cases-and-test-methods.md)
- [Set Up and Tear Down State in Your Tests](set-up-and-tear-down-state-in-your-tests.md)
- [Adding Attachments to Tests, Activities, and Issues](adding-attachments-to-tests-activities-and-issues.md)
- [Grouping Tests into Substeps with Activities](grouping-tests-into-substeps-with-activities.md)

<a id="overview"></a>

## Overview

A test case is a group of related test methods, with optional setup and teardown before and after tests run. See [Defining Test Cases and Test Methods](defining-test-cases-and-test-methods.md) for more information.

`XCTestCase` conforms to [XCTActivity](xctactivity.md), so you can simplify complex tests by organizing them into activities, and attach output to tests for later analysis. For more information, see [Activities and Attachments](activities-and-attachments.md).

Create tests for asynchronous operations using expectations. For more information, see `Testing Asynchronous Operations with Expectations`. If your app uses Swift [Concurrency](https://developer.apple.com/documentation/swift/concurrency), annotate test methods with `async` or `async throws` instead to test asynchronous operations, and use standard Swift concurrency patterns in your tests.

Create tests to measure performance for specific blocks of code using the methods in the Measuring Performance section below. Build performance tests as part of a continuous improvement cycle for performance in your app. For more information, see [Improving your app’s performance](../xcode/improving-your-app-s-performance.md).

## Topics

### Customizing Test Setup and Teardown

- [Set Up and Tear Down State in Your Tests](set-up-and-tear-down-state-in-your-tests.md): Prepare initial state before tests run, and clean up resources after tests complete.
- [setUp()](xctestcase/setup%28%29.md): Provides an opportunity to customize initial state before a test case begins.
- [addTeardownBlock(\_:)](xctestcase/addteardownblock%28__%29-2guon.md): Registers a block of teardown code to run after the current test method ends.
- [addTeardownBlock(\_:)](xctestcase/addteardownblock%28__%29-5zw6c.md): Registers a block of teardown code to run after the current test method ends.
- [tearDown()](xctestcase/teardown%28%29.md): Provides an opportunity to perform cleanup after a test case ends.

### Managing Test Case Execution

- [runsForEachTargetApplicationUIConfiguration](xctestcase/runsforeachtargetapplicationuiconfiguration.md): A Boolean value that indicates whether your UI tests run once for each possible combination of orientation, localization, and other appearance settings your app supports.
- [continueAfterFailure](xctestcase/continueafterfailure.md): A Boolean value that indicates whether a test method should continue running after a failure occurs.
- [executionTimeAllowance](xctestcase/executiontimeallowance.md): The number of seconds, rounded up to the nearest minute, for a test to run before it fails with a timeout error.

### Measuring Performance

- [measure(\_:)](xctestcase/measure%28__%29.md): Measures the performance of a block of code.
- [measureMetrics(\_:automaticallyStartMeasuring:for:)](xctestcase/measuremetrics%28__automaticallystartmeasuring_for_%29.md): Measures the performance of a block of code, optionally deferring the starting point for measurement.
- [measure(metrics:block:)](xctestcase/measure%28metrics_block_%29.md): Records the selected metrics for a block of code.
- [measure(metrics:options:block:)](xctestcase/measure%28metrics_options_block_%29.md): Records the selected metrics, using the specified measurement options, for a block of code.
- [measure(options:block:)](xctestcase/measure%28options_block_%29.md): Records the performance, using the specified measurement options, for a block of code.
- [startMeasuring()](xctestcase/startmeasuring%28%29.md): Starts recording performance metrics within a block of code.
- [stopMeasuring()](xctestcase/stopmeasuring%28%29.md): Ends recording performance metrics within a block of code.
- [defaultPerformanceMetrics](xctestcase/defaultperformancemetrics.md): An array of default performance metrics the test records.
- [defaultMetrics](xctestcase/defaultmetrics.md): An array of default metrics the test uses to record performance.
- [defaultMeasureOptions](xctestcase/defaultmeasureoptions.md): The default measurement options the test uses to record performance.
- [XCTPerformanceMetric](xctperformancemetric.md): Performance metrics that the test records.

### Creating Asynchronous Test Expectations

To create asynchronous test expectations, use the convenience methods below, or create instances of the test expectation class and its subclasses manually.

- [expectation(description:)](xctestcase/expectation%28description_%29.md): Creates a new expectation with an associated description.
- [expectation(for:evaluatedWith:handler:)](xctestcase/expectation%28for_evaluatedwith_handler_%29.md): Creates an expectation that the test fulfills by evaluating the predicate with the specified object.
- [expectation(forNotification:object:handler:)](xctestcase/expectation%28fornotification_object_handler_%29.md): Creates an expectation that the test fulfills when it receives a specific notification for a specified object.
- [expectation(forNotification:object:notificationCenter:handler:)](xctestcase/expectation%28fornotification_object_notificationcenter_handler_%29.md): Creates an expectation that the test fulfills when it receives a specific notification from a specific notification center for a specified object.
- [keyValueObservingExpectation(for:keyPath:expectedValue:)](xctestcase/keyvalueobservingexpectation%28for_keypath_expectedvalue_%29.md): Deprecated. Creates an expectation that uses Key-Value Observing to observe a value until it matches an expected value.
- [expectation(that:on:options:willEqual:)](xctestcase/expectation%28that_on_options_willequal_%29.md): Creates an expectation using key-value observing the test fulfills when the value of an observed property changes to an expected value.
- [keyValueObservingExpectation(for:keyPath:handler:)](xctestcase/keyvalueobservingexpectation%28for_keypath_handler_%29.md): Deprecated. Creates an expectation that uses Key-Value Observing to observe a value and respond to changes in that value by calling a provided handler.
- [expectation(that:on:options:willSatisfy:)](xctestcase/expectation%28that_on_options_willsatisfy_%29-6itb.md): Deprecated. Creates an expectation using key-value observing the test fulfills when the value of an observed property changes and satisfies the conditions of a predicate’s evaluation.
- [expectation(that:on:options:willSatisfy:)](xctestcase/expectation%28that_on_options_willsatisfy_%29-292oj.md): Creates an expectation using key-value observing to monitor changes to a given key path on a given object.
- [expectation(that:on:options:willSatisfy:)](xctestcase/expectation%28that_on_options_willsatisfy_%29-85or0.md): Creates an expectation using key-value observing to monitor changes to a given key path on a given object.

### Waiting for Expectations

To wait for the test to fulfill asynchronous test expectations, create a waiter object directly or by using the convenience methods.

- [fulfillment(of:timeout:enforceOrder:)](xctestcase/fulfillment%28of_timeout_enforceorder_%29.md): Waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [wait(for:)](xctestcase/wait%28for_%29.md): Waits on a group of expectations.
- [wait(for:enforceOrder:)](xctestcase/wait%28for_enforceorder_%29.md): Waits on a group of expectations optionally enforcing their order of fulfillment.
- [wait(for:timeout:)](xctestcase/wait%28for_timeout_%29.md): Waits for the test to fulfill a set of expectations within a specified time.
- [wait(for:timeout:enforceOrder:)](xctestcase/wait%28for_timeout_enforceorder_%29.md): Waits for the test to satisfy an array of expectations and specifies whether they must occur in the array’s order.
- [waitForExpectations(timeout:handler:)](xctestcase/waitforexpectations%28timeout_handler_%29.md): Waits until the test fulfills all expectations or until it times out.
- [XCWaitCompletionHandler](xcwaitcompletionhandler.md): A block the test runner calls when the test fulfills a waiter’s expectations, or when it times out.
- [XCTestError](xctesterror.md): A type of error that can occur while the test waits to fulfill expectations.
- [XCTestError.Code](xctesterror/code.md): Error codes for errors that can occur while the test is waiting to fulfill expectations.
- [XCTestErrorDomain](xctesterrordomain.md): The error domain for errors that can occur while the test is waiting to fulfill expectations.

### Monitoring UI Interruptions

- [Handling UI Interruptions](handling-ui-interruptions.md): Improve your UI test’s stability by handling interface changes that block the UI elements under test.
- [addUIInterruptionMonitor(withDescription:handler:)](xctestcase/adduiinterruptionmonitor%28withdescription_handler_%29.md): Adds a handler to the current context.
- [removeUIInterruptionMonitor(\_:)](xctestcase/removeuiinterruptionmonitor%28__%29.md): Removes a handler using the token from when you added the handler.

### Creating Tests Programmatically

The test runner automatically detects methods you define in your test case subclasses. Use the symbols below if you need more customization for test case creation, such as to define test cases dynamically at run time.

- [init(invocation:)](xctestcase/init%28invocation_%29.md): Initializes a test case with an invocation.
- [init(selector:)](xctestcase/init%28selector_%29.md): Initializes a test case with a selector.
- [testInvocations](xctestcase/testinvocations.md): An array of invocations that represents each test method in the test case.
- [invocation](xctestcase/invocation.md): The invocation for running the test.
- [invokeTest()](xctestcase/invoketest%28%29.md): Invokes the test.
- [record(\_:)](xctestcase/record%28__%29.md): Records an issue during test execution.
- [recordFailure(withDescription:inFile:atLine:expected:)](xctestcase/recordfailure%28withdescription_infile_atline_expected_%29.md): Deprecated. Records a failure during text execution.
- [defaultTestSuite](xctestcase/defaulttestsuite.md): A test suite that contains test cases for all of the tests in the class.

## Relationships

### Inherits From

- [XCTest](xctest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [XCTActivity](xctactivity.md)
- [XCTWaiterDelegate](xctwaiterdelegate.md)

## See Also

### Test cases and test methods

- [Defining Test Cases and Test Methods](defining-test-cases-and-test-methods.md): Add test cases and test methods to a test target to confirm that your code performs as expected.
- [XCTest](xctest.md): An abstract base class for creating, managing, and executing tests.

# XCTestCase (Objective-C)

**Framework:** XCTest  
**Kind:** Class

The primary class for defining test cases, test methods, and performance tests.

## Declaration

```objectivec
@interface XCTestCase : XCTest
```

## Mentioned In

- [Defining Test Cases and Test Methods](defining-test-cases-and-test-methods.md)
- [Set Up and Tear Down State in Your Tests](set-up-and-tear-down-state-in-your-tests.md)
- [Adding Attachments to Tests, Activities, and Issues](adding-attachments-to-tests-activities-and-issues.md)
- [Grouping Tests into Substeps with Activities](grouping-tests-into-substeps-with-activities.md)

<a id="overview"></a>

## Overview

A test case is a group of related test methods, with optional setup and teardown before and after tests run. See [Defining Test Cases and Test Methods](defining-test-cases-and-test-methods.md) for more information.

`XCTestCase` conforms to [XCTActivity](xctactivity.md), so you can simplify complex tests by organizing them into activities, and attach output to tests for later analysis. For more information, see [Activities and Attachments](activities-and-attachments.md).

Create tests for asynchronous operations using expectations. For more information, see `Testing Asynchronous Operations with Expectations`. If your app uses Swift [Concurrency](https://developer.apple.com/documentation/swift/concurrency), annotate test methods with `async` or `async throws` instead to test asynchronous operations, and use standard Swift concurrency patterns in your tests.

Create tests to measure performance for specific blocks of code using the methods in the Measuring Performance section below. Build performance tests as part of a continuous improvement cycle for performance in your app. For more information, see [Improving your app’s performance](../xcode/improving-your-app-s-performance.md).

## Topics

### Customizing Test Setup and Teardown

- [Set Up and Tear Down State in Your Tests](set-up-and-tear-down-state-in-your-tests.md): Prepare initial state before tests run, and clean up resources after tests complete.
- [setUp](xctestcase/setup%28%29.md): Provides an opportunity to customize initial state before a test case begins.
- [addAsyncTeardownBlock:](xctestcase/addasyncteardownblock_.md): Registers a block of asynchronous teardown code to run after the current test method ends.
- [addTeardownBlock:](xctestcase/addteardownblock_.md): Registers a block of teardown code to run after the current test method ends.
- [tearDown](xctestcase/teardown%28%29.md): Provides an opportunity to perform cleanup after a test case ends.

### Managing Test Case Execution

- [runsForEachTargetApplicationUIConfiguration](xctestcase/runsforeachtargetapplicationuiconfiguration.md): A Boolean value that indicates whether your UI tests run once for each possible combination of orientation, localization, and other appearance settings your app supports.
- [continueAfterFailure](xctestcase/continueafterfailure.md): A Boolean value that indicates whether a test method should continue running after a failure occurs.
- [executionTimeAllowance](xctestcase/executiontimeallowance.md): The number of seconds, rounded up to the nearest minute, for a test to run before it fails with a timeout error.

### Measuring Performance

- [measureBlock:](xctestcase/measure%28__%29.md): Measures the performance of a block of code.
- [measureMetrics:automaticallyStartMeasuring:forBlock:](xctestcase/measuremetrics%28__automaticallystartmeasuring_for_%29.md): Measures the performance of a block of code, optionally deferring the starting point for measurement.
- [measureWithMetrics:block:](xctestcase/measure%28metrics_block_%29.md): Records the selected metrics for a block of code.
- [measureWithMetrics:options:block:](xctestcase/measure%28metrics_options_block_%29.md): Records the selected metrics, using the specified measurement options, for a block of code.
- [measureWithOptions:block:](xctestcase/measure%28options_block_%29.md): Records the performance, using the specified measurement options, for a block of code.
- [startMeasuring](xctestcase/startmeasuring%28%29.md): Starts recording performance metrics within a block of code.
- [stopMeasuring](xctestcase/stopmeasuring%28%29.md): Ends recording performance metrics within a block of code.
- [defaultPerformanceMetrics](xctestcase/defaultperformancemetrics.md): An array of default performance metrics the test records.
- [defaultMetrics](xctestcase/defaultmetrics.md): An array of default metrics the test uses to record performance.
- [defaultMeasureOptions](xctestcase/defaultmeasureoptions.md): The default measurement options the test uses to record performance.
- [XCTPerformanceMetric](xctperformancemetric.md): Performance metrics that the test records.

### Creating Asynchronous Test Expectations

To create asynchronous test expectations, use the convenience methods below, or create instances of the test expectation class and its subclasses manually.

- [expectationWithDescription:](xctestcase/expectation%28description_%29.md): Creates a new expectation with an associated description.
- [expectationForPredicate:evaluatedWithObject:handler:](xctestcase/expectation%28for_evaluatedwith_handler_%29.md): Creates an expectation that the test fulfills by evaluating the predicate with the specified object.
- [expectationForNotification:object:handler:](xctestcase/expectation%28fornotification_object_handler_%29.md): Creates an expectation that the test fulfills when it receives a specific notification for a specified object.
- [expectationForNotification:object:notificationCenter:handler:](xctestcase/expectation%28fornotification_object_notificationcenter_handler_%29.md): Creates an expectation that the test fulfills when it receives a specific notification from a specific notification center for a specified object.
- [keyValueObservingExpectationForObject:keyPath:expectedValue:](xctestcase/keyvalueobservingexpectation%28for_keypath_expectedvalue_%29.md): Deprecated. Creates an expectation that uses Key-Value Observing to observe a value until it matches an expected value.
- [keyValueObservingExpectationForObject:keyPath:handler:](xctestcase/keyvalueobservingexpectation%28for_keypath_handler_%29.md): Deprecated. Creates an expectation that uses Key-Value Observing to observe a value and respond to changes in that value by calling a provided handler.

### Waiting for Expectations

To wait for the test to fulfill asynchronous test expectations, create a waiter object directly or by using the convenience methods.

- [waitForExpectations:](xctestcase/wait%28for_%29.md): Waits on a group of expectations.
- [waitForExpectations:enforceOrder:](xctestcase/wait%28for_enforceorder_%29.md): Waits on a group of expectations optionally enforcing their order of fulfillment.
- [waitForExpectations:timeout:](xctestcase/wait%28for_timeout_%29.md): Waits for the test to fulfill a set of expectations within a specified time.
- [waitForExpectations:timeout:enforceOrder:](xctestcase/wait%28for_timeout_enforceorder_%29.md): Waits for the test to satisfy an array of expectations and specifies whether they must occur in the array’s order.
- [waitForExpectationsWithTimeout:handler:](xctestcase/waitforexpectations%28timeout_handler_%29.md): Waits until the test fulfills all expectations or until it times out.
- [XCWaitCompletionHandler](xcwaitcompletionhandler.md): A block the test runner calls when the test fulfills a waiter’s expectations, or when it times out.
- [XCTestErrorCode](xctesterror/code.md): Error codes for errors that can occur while the test is waiting to fulfill expectations.
- [XCTestErrorDomain](xctesterrordomain.md): The error domain for errors that can occur while the test is waiting to fulfill expectations.

### Monitoring UI Interruptions

- [Handling UI Interruptions](handling-ui-interruptions.md): Improve your UI test’s stability by handling interface changes that block the UI elements under test.
- [addUIInterruptionMonitorWithDescription:handler:](xctestcase/adduiinterruptionmonitor%28withdescription_handler_%29.md): Adds a handler to the current context.
- [removeUIInterruptionMonitor:](xctestcase/removeuiinterruptionmonitor%28__%29.md): Removes a handler using the token from when you added the handler.

### Creating Tests Programmatically

The test runner automatically detects methods you define in your test case subclasses. Use the symbols below if you need more customization for test case creation, such as to define test cases dynamically at run time.

- [initWithInvocation:](xctestcase/init%28invocation_%29.md): Initializes a test case with an invocation.
- [testCaseWithInvocation:](xctestcase/testcasewithinvocation_.md): Creates a test case with an invocation.
- [initWithSelector:](xctestcase/init%28selector_%29.md): Initializes a test case with a selector.
- [testCaseWithSelector:](xctestcase/testcasewithselector_.md): Creates a test case with a selector.
- [testInvocations](xctestcase/testinvocations.md): An array of invocations that represents each test method in the test case.
- [invocation](xctestcase/invocation.md): The invocation for running the test.
- [invokeTest](xctestcase/invoketest%28%29.md): Invokes the test.
- [recordIssue:](xctestcase/record%28__%29.md): Records an issue during test execution.
- [recordFailureWithDescription:inFile:atLine:expected:](xctestcase/recordfailure%28withdescription_infile_atline_expected_%29.md): Deprecated. Records a failure during text execution.
- [defaultTestSuite](xctestcase/defaulttestsuite.md): A test suite that contains test cases for all of the tests in the class.

## Relationships

### Inherits From

- [XCTest](xctest.md)

### Conforms To

- [XCTActivity](xctactivity.md)
- [XCTWaiterDelegate](xctwaiterdelegate.md)

## See Also

### Test cases and test methods

- [Defining Test Cases and Test Methods](defining-test-cases-and-test-methods.md): Add test cases and test methods to a test target to confirm that your code performs as expected.
- [XCTest](xctest.md): An abstract base class for creating, managing, and executing tests.
