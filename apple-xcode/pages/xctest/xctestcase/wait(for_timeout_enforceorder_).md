> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcase/wait(for:timeout:enforceorder:)](https://developer.apple.com/documentation/xctest/xctestcase/wait(for:timeout:enforceorder:))

# wait(for:timeout:enforceOrder:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Waits for the test to satisfy an array of expectations and specifies whether they must occur in the array’s order.

## Declaration

```swift
func wait(for expectations: [XCTestExpectation], timeout seconds: TimeInterval, enforceOrder enforceOrderOfFulfillment: Bool)
```

## Parameters

- `expectations`: An array of expectations the test must satisfy.
- `seconds`: The time, in seconds, the test allows for the fulfillment of the expectations. The default timeout allows the test to run until it reaches its execution time allowance.
- `enforceOrderOfFulfillment`: If [true](https://developer.apple.com/documentation/swift/true), the test must satisfy the expectations in the order they appear in the array.

<a id="Discussion"></a>

## Discussion

> **Note**

>  Use [fulfillment(of:timeout:enforceOrder:)](../xctwaiter/fulfillment%28of_timeout_enforceorder_%29-swift.method.md) in Swift code requiring concurrency.

In Objective-C code, you might use an expectation to wait on a call to an interface that uses a completion handler to return a result. From Swift code, consider calling `withCheckedContinuation(function:_:)` to use [Concurrency](https://developer.apple.com/documentation/swift/concurrency) instead of an expectation to wait on the result of a completion handler.

## See Also

### Waiting for Expectations

- [fulfillment(of:timeout:enforceOrder:)](fulfillment%28of_timeout_enforceorder_%29.md): Waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [wait(for:)](wait%28for_%29.md): Waits on a group of expectations.
- [wait(for:enforceOrder:)](wait%28for_enforceorder_%29.md): Waits on a group of expectations optionally enforcing their order of fulfillment.
- [wait(for:timeout:)](wait%28for_timeout_%29.md): Waits for the test to fulfill a set of expectations within a specified time.
- [waitForExpectations(timeout:handler:)](waitforexpectations%28timeout_handler_%29.md): Waits until the test fulfills all expectations or until it times out.
- [XCWaitCompletionHandler](../xcwaitcompletionhandler.md): A block the test runner calls when the test fulfills a waiter’s expectations, or when it times out.
- [XCTestError](../xctesterror.md): A type of error that can occur while the test waits to fulfill expectations.
- [XCTestError.Code](../xctesterror/code.md): Error codes for errors that can occur while the test is waiting to fulfill expectations.
- [XCTestErrorDomain](../xctesterrordomain.md): The error domain for errors that can occur while the test is waiting to fulfill expectations.

# waitForExpectations:timeout:enforceOrder: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Waits for the test to satisfy an array of expectations and specifies whether they must occur in the array’s order.

## Declaration

```objectivec
- (void) waitForExpectations:(NSArray<XCTestExpectation *> *) expectations timeout:(NSTimeInterval) seconds enforceOrder:(BOOL) enforceOrderOfFulfillment;
```

## Parameters

- `expectations`: An array of expectations the test must satisfy.
- `seconds`: The time, in seconds, the test allows for the fulfillment of the expectations. The default timeout allows the test to run until it reaches its execution time allowance.
- `enforceOrderOfFulfillment`: If [true](https://developer.apple.com/documentation/swift/true), the test must satisfy the expectations in the order they appear in the array.

<a id="Discussion"></a>

## Discussion

> **Note**

>  Use [fulfillment(of:timeout:enforceOrder:)](../xctwaiter/fulfillment%28of_timeout_enforceorder_%29-swift.method.md) in Swift code requiring concurrency.

In Objective-C code, you might use an expectation to wait on a call to an interface that uses a completion handler to return a result. From Swift code, consider calling `withCheckedContinuation(function:_:)` to use [Concurrency](https://developer.apple.com/documentation/swift/concurrency) instead of an expectation to wait on the result of a completion handler.

## See Also

### Waiting for Expectations

- [waitForExpectations:](wait%28for_%29.md): Waits on a group of expectations.
- [waitForExpectations:enforceOrder:](wait%28for_enforceorder_%29.md): Waits on a group of expectations optionally enforcing their order of fulfillment.
- [waitForExpectations:timeout:](wait%28for_timeout_%29.md): Waits for the test to fulfill a set of expectations within a specified time.
- [waitForExpectationsWithTimeout:handler:](waitforexpectations%28timeout_handler_%29.md): Waits until the test fulfills all expectations or until it times out.
- [XCWaitCompletionHandler](../xcwaitcompletionhandler.md): A block the test runner calls when the test fulfills a waiter’s expectations, or when it times out.
- [XCTestErrorCode](../xctesterror/code.md): Error codes for errors that can occur while the test is waiting to fulfill expectations.
- [XCTestErrorDomain](../xctesterrordomain.md): The error domain for errors that can occur while the test is waiting to fulfill expectations.
