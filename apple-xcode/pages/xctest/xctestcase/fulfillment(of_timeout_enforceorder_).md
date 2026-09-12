> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcase/fulfillment(of:timeout:enforceorder:)](https://developer.apple.com/documentation/xctest/xctestcase/fulfillment(of:timeout:enforceorder:))

# fulfillment(of:timeout:enforceOrder:)

**Framework:** XCTest  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · watchOS 6.0+

Waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.

## Declaration

```swift
@nonobjc func fulfillment(of expectations: [XCTestExpectation], timeout seconds: TimeInterval = .infinity, enforceOrder enforceOrderOfFulfillment: Bool = false) async
```

## Parameters

- `expectations`: An array of expectations the test must satisfy.
- `seconds`: The time, in seconds, the test allows for the fulfillment of the expectations. The default timeout allows the test to run until it reaches its execution time allowance.
- `enforceOrderOfFulfillment`: If [true](https://developer.apple.com/documentation/swift/true), the test must satisfy the expectations in the order they appear in the array.

<a id="Discussion"></a>

## Discussion

Use this concurrency-safe alternative to [wait(for:timeout:enforceOrder:)](wait%28for_timeout_enforceorder_%29.md) in your Swift code. Expectations can only appear in the array once. The method can return before the timeout if the test fulfills all the expectations you provide.

> **Note**

>  If you don’t specify a timeout when calling this function, enable test timeouts to prevent unfulfilled expectation from hanging the test.

## See Also

### Waiting for Expectations

- [wait(for:)](wait%28for_%29.md): Waits on a group of expectations.
- [wait(for:enforceOrder:)](wait%28for_enforceorder_%29.md): Waits on a group of expectations optionally enforcing their order of fulfillment.
- [wait(for:timeout:)](wait%28for_timeout_%29.md): Waits for the test to fulfill a set of expectations within a specified time.
- [wait(for:timeout:enforceOrder:)](wait%28for_timeout_enforceorder_%29.md): Waits for the test to satisfy an array of expectations and specifies whether they must occur in the array’s order.
- [waitForExpectations(timeout:handler:)](waitforexpectations%28timeout_handler_%29.md): Waits until the test fulfills all expectations or until it times out.
- [XCWaitCompletionHandler](../xcwaitcompletionhandler.md): A block the test runner calls when the test fulfills a waiter’s expectations, or when it times out.
- [XCTestError](../xctesterror.md): A type of error that can occur while the test waits to fulfill expectations.
- [XCTestError.Code](../xctesterror/code.md): Error codes for errors that can occur while the test is waiting to fulfill expectations.
- [XCTestErrorDomain](../xctesterrordomain.md): The error domain for errors that can occur while the test is waiting to fulfill expectations.
