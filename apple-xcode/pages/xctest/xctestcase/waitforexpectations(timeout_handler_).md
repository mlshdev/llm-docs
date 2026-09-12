> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcase/waitforexpectations(timeout:handler:)](https://developer.apple.com/documentation/xctest/xctestcase/waitforexpectations(timeout:handler:))

# waitForExpectations(timeout:handler:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Waits until the test fulfills all expectations or until it times out.

## Declaration

```swift
@MainActor func waitForExpectations(timeout: TimeInterval, handler: (@Sendable ((any Error)?) -> Void)? = nil)
```

## Parameters

- `timeout`: The time, in seconds, the test allows for the fulfillment of the expectations. The default timeout allows the test to run until it reaches its execution time allowance.
- `handler`: An optional [XCWaitCompletionHandler](../xcwaitcompletionhandler.md) block to invoke after a test fulfills all expectations or the wait time elapses. A test treats a timeout as a failure.

<a id="Discussion"></a>

## Discussion

This method creates a point of synchronization in the flow of a test. Only one [waitForExpectations(timeout:handler:)](waitforexpectations%28timeout_handler_%29.md) can be active at any given time, but you can chain together multiple discrete sequences of “create expectations and wait for them to be fulfilled”.

> **Important**

>  This method waits on expectations created with [XCTestCase](../xctestcase.md)‘s convenience methods only. This method *doesn’t* wait on expectations created manually through initializers on [XCTestExpectation](../xctestexpectation.md) or its subclasses.
>
> To wait for manually created expectations, use the [wait(for:timeout:)](wait%28for_timeout_%29.md) or [wait(for:timeout:enforceOrder:)](wait%28for_timeout_enforceorder_%29.md) methods, or the corresponding methods on [XCTWaiter](../xctwaiter.md), passing an explicit list of expectations.

> **Note**

>  Clients shouldn’t manipulate the run loop while using this API.

## See Also

### Waiting for Expectations

- [fulfillment(of:timeout:enforceOrder:)](fulfillment%28of_timeout_enforceorder_%29.md): Waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [wait(for:)](wait%28for_%29.md): Waits on a group of expectations.
- [wait(for:enforceOrder:)](wait%28for_enforceorder_%29.md): Waits on a group of expectations optionally enforcing their order of fulfillment.
- [wait(for:timeout:)](wait%28for_timeout_%29.md): Waits for the test to fulfill a set of expectations within a specified time.
- [wait(for:timeout:enforceOrder:)](wait%28for_timeout_enforceorder_%29.md): Waits for the test to satisfy an array of expectations and specifies whether they must occur in the array’s order.
- [XCWaitCompletionHandler](../xcwaitcompletionhandler.md): A block the test runner calls when the test fulfills a waiter’s expectations, or when it times out.
- [XCTestError](../xctesterror.md): A type of error that can occur while the test waits to fulfill expectations.
- [XCTestError.Code](../xctesterror/code.md): Error codes for errors that can occur while the test is waiting to fulfill expectations.
- [XCTestErrorDomain](../xctesterrordomain.md): The error domain for errors that can occur while the test is waiting to fulfill expectations.

# waitForExpectationsWithTimeout:handler: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Waits until the test fulfills all expectations or until it times out.

## Declaration

```objectivec
- (void) waitForExpectationsWithTimeout:(NSTimeInterval) timeout handler:(XCWaitCompletionHandler) handler;
```

## Parameters

- `timeout`: The time, in seconds, the test allows for the fulfillment of the expectations. The default timeout allows the test to run until it reaches its execution time allowance.
- `handler`: An optional [XCWaitCompletionHandler](../xcwaitcompletionhandler.md) block to invoke after a test fulfills all expectations or the wait time elapses. A test treats a timeout as a failure.

<a id="Discussion"></a>

## Discussion

This method creates a point of synchronization in the flow of a test. Only one [waitForExpectationsWithTimeout:handler:](waitforexpectations%28timeout_handler_%29.md) can be active at any given time, but you can chain together multiple discrete sequences of “create expectations and wait for them to be fulfilled”.

> **Important**

>  This method waits on expectations created with [XCTestCase](../xctestcase.md)‘s convenience methods only. This method *doesn’t* wait on expectations created manually through initializers on [XCTestExpectation](../xctestexpectation.md) or its subclasses.
>
> To wait for manually created expectations, use the [waitForExpectations:timeout:](wait%28for_timeout_%29.md) or [waitForExpectations:timeout:enforceOrder:](wait%28for_timeout_enforceorder_%29.md) methods, or the corresponding methods on [XCTWaiter](../xctwaiter.md), passing an explicit list of expectations.

> **Note**

>  Clients shouldn’t manipulate the run loop while using this API.

## See Also

### Waiting for Expectations

- [waitForExpectations:](wait%28for_%29.md): Waits on a group of expectations.
- [waitForExpectations:enforceOrder:](wait%28for_enforceorder_%29.md): Waits on a group of expectations optionally enforcing their order of fulfillment.
- [waitForExpectations:timeout:](wait%28for_timeout_%29.md): Waits for the test to fulfill a set of expectations within a specified time.
- [waitForExpectations:timeout:enforceOrder:](wait%28for_timeout_enforceorder_%29.md): Waits for the test to satisfy an array of expectations and specifies whether they must occur in the array’s order.
- [XCWaitCompletionHandler](../xcwaitcompletionhandler.md): A block the test runner calls when the test fulfills a waiter’s expectations, or when it times out.
- [XCTestErrorCode](../xctesterror/code.md): Error codes for errors that can occur while the test is waiting to fulfill expectations.
- [XCTestErrorDomain](../xctesterrordomain.md): The error domain for errors that can occur while the test is waiting to fulfill expectations.
