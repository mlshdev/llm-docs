> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctwaiter/fulfillment(of:timeout:enforceorder:)-swift.type.method](https://developer.apple.com/documentation/xctest/xctwaiter/fulfillment(of:timeout:enforceorder:)-swift.type.method)

# fulfillment(of:timeout:enforceOrder:)

**Framework:** XCTest  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · watchOS 6.0+

Creates a waiter that waits on group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.

## Declaration

```swift
@nonobjc class func fulfillment(of expectations: [XCTestExpectation], timeout seconds: TimeInterval = .infinity, enforceOrder enforceOrderOfFulfillment: Bool = false) async -> XCTWaiter.Result
```

## Parameters

- `expectations`: An array of expectations the test must satisfy.
- `seconds`: The time, in seconds, the test allows for the fulfillment of the expectations.
- `enforceOrderOfFulfillment`: If [true](https://developer.apple.com/documentation/swift/true), the test must satisfy the expectations in the order they appear in the array.

<a id="return-value"></a>

## Return Value

A value describing the outcome of waiting for `expectations`.

<a id="Discussion"></a>

## Discussion

Use this Concurrency safe alternative to [wait(for:timeout:enforceOrder:)](wait%28for_timeout_enforceorder_%29-swift.type.method.md) in your Swift code. A call to [wait(for:timeout:enforceOrder:)](wait%28for_timeout_enforceorder_%29-swift.type.method.md) runs synchronously and blocks the calling thread, which can cause deadlocks or priority inversion.

Expectations can only appear in the array once. The call may return before the timeout if the test fulfills all the expectations you provide.

> **Note**

>  If you don’t specify a timeout when calling this function, enable test timeouts to prevent unfulfilled expectation from hanging the test.

The test discards the waiter after the wait completes.

## See Also

### Waiting for Expectations

- [fulfillment(of:timeout:enforceOrder:)](fulfillment%28of_timeout_enforceorder_%29-swift.method.md): Waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [wait(for:)](wait%28for_%29-swift.method.md): Waits on a group of expectations.
- [wait(for:enforceOrder:)](wait%28for_enforceorder_%29-swift.method.md): Waits on a group of expectations optionally enforcing their order of fulfillment.
- [wait(for:timeout:)](wait%28for_timeout_%29-swift.method.md): Waits on a group of expectations for up to the specified timeout.
- [wait(for:timeout:enforceOrder:)](wait%28for_timeout_enforceorder_%29-swift.method.md): Waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [wait(for:)](wait%28for_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations.
- [wait(for:enforceOrder:)](wait%28for_enforceorder_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations optionally enforcing their order of fulfillment.
- [wait(for:timeout:)](wait%28for_timeout_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations for up to the specified timeout.
- [wait(for:timeout:enforceOrder:)](wait%28for_timeout_enforceorder_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [XCTWaiter.Result](result.md): Result states returned by a waiter when it completes, times out, fails, or is interrupted.
