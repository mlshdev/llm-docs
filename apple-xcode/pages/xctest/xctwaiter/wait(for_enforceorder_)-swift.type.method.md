> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctwaiter/wait(for:enforceorder:)-swift.type.method](https://developer.apple.com/documentation/xctest/xctwaiter/wait(for:enforceorder:)-swift.type.method)

# wait(for:enforceOrder:) (Swift)

**Framework:** XCTest  
**Kind:** Type Method

Creates a waiter that waits on a group of expectations optionally enforcing their order of fulfillment.

## Declaration

```swift
class func wait(for expectations: [XCTestExpectation], enforceOrder enforceOrderOfFulfillment: Bool) -> XCTWaiter.Result
```

## Parameters

- `expectations`: An array of expectations the test must satisfy.
- `enforceOrderOfFulfillment`: If [true](https://developer.apple.com/documentation/swift/true), the test must satisfy the expectations in the order they appear in the array.

<a id="return-value"></a>

## Return Value

A value describing the outcome of waiting for `expectations`. The test discards the waiter when the wait completes.

<a id="discussion"></a>

## Discussion

In Objective-C code, you might use an expectation to wait on a call to an interface that uses a completion handler to return a result. From Swift code, consider calling `withCheckedContinuation(function:_:)` to use [Concurrency](https://developer.apple.com/documentation/swift/concurrency) instead of an expectation to wait on the result of a completion handler.

## See Also

### Waiting for Expectations

- [fulfillment(of:timeout:enforceOrder:)](fulfillment%28of_timeout_enforceorder_%29-swift.method.md): Waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [wait(for:)](wait%28for_%29-swift.method.md): Waits on a group of expectations.
- [wait(for:enforceOrder:)](wait%28for_enforceorder_%29-swift.method.md): Waits on a group of expectations optionally enforcing their order of fulfillment.
- [wait(for:timeout:)](wait%28for_timeout_%29-swift.method.md): Waits on a group of expectations for up to the specified timeout.
- [wait(for:timeout:enforceOrder:)](wait%28for_timeout_enforceorder_%29-swift.method.md): Waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [fulfillment(of:timeout:enforceOrder:)](fulfillment%28of_timeout_enforceorder_%29-swift.type.method.md): Creates a waiter that waits on group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [wait(for:)](wait%28for_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations.
- [wait(for:timeout:)](wait%28for_timeout_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations for up to the specified timeout.
- [wait(for:timeout:enforceOrder:)](wait%28for_timeout_enforceorder_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [XCTWaiter.Result](result.md): Result states returned by a waiter when it completes, times out, fails, or is interrupted.

# waitForExpectations:enforceOrder: (Objective-C)

**Framework:** XCTest  
**Kind:** Type Method

Creates a waiter that waits on a group of expectations optionally enforcing their order of fulfillment.

## Declaration

```objectivec
+ (XCTWaiterResult) waitForExpectations:(NSArray<XCTestExpectation *> *) expectations enforceOrder:(BOOL) enforceOrderOfFulfillment;
```

## Parameters

- `expectations`: An array of expectations the test must satisfy.
- `enforceOrderOfFulfillment`: If [true](https://developer.apple.com/documentation/swift/true), the test must satisfy the expectations in the order they appear in the array.

<a id="return-value"></a>

## Return Value

A value describing the outcome of waiting for `expectations`. The test discards the waiter when the wait completes.

<a id="discussion"></a>

## Discussion

In Objective-C code, you might use an expectation to wait on a call to an interface that uses a completion handler to return a result. From Swift code, consider calling `withCheckedContinuation(function:_:)` to use [Concurrency](https://developer.apple.com/documentation/swift/concurrency) instead of an expectation to wait on the result of a completion handler.

## See Also

### Waiting for Expectations

- [waitForExpectations:](wait%28for_%29-swift.method.md): Waits on a group of expectations.
- [waitForExpectations:enforceOrder:](wait%28for_enforceorder_%29-swift.method.md): Waits on a group of expectations optionally enforcing their order of fulfillment.
- [waitForExpectations:timeout:](wait%28for_timeout_%29-swift.method.md): Waits on a group of expectations for up to the specified timeout.
- [waitForExpectations:timeout:enforceOrder:](wait%28for_timeout_enforceorder_%29-swift.method.md): Waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [waitForExpectations:](wait%28for_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations.
- [waitForExpectations:timeout:](wait%28for_timeout_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations for up to the specified timeout.
- [waitForExpectations:timeout:enforceOrder:](wait%28for_timeout_enforceorder_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [XCTWaiterResult](result.md): Result states returned by a waiter when it completes, times out, fails, or is interrupted.
