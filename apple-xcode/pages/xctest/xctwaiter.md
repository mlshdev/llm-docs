> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctwaiter](https://developer.apple.com/documentation/xctest/xctwaiter)

# XCTWaiter (Swift)

**Framework:** XCTest  
**Kind:** Class

Waits for the fulfillment of a group of expectations.

## Declaration

```swift
class XCTWaiter
```

<a id="overview"></a>

## Overview

You can use waiters with or without a delegate to respond to events such as completion, timeout, or invalid expectation fulfillment. [XCTestCase](xctestcase.md) automatically conforms to the [XCTWaiterDelegate](xctwaiterdelegate.md) protocol and automatically reports timeouts and other unexpected events as test failures.

You can use waiters without a delegate or any association with a test case instance. This allows test support libraries to provide convenience methods for waiting without having to pass test cases through those APIs.

## Topics

### Creating a Waiter

- [init(delegate:)](xctwaiter/init%28delegate_%29.md): Creates a new waiter with the specified delegate.

### Waiting for Expectations

- [fulfillment(of:timeout:enforceOrder:)](xctwaiter/fulfillment%28of_timeout_enforceorder_%29-swift.method.md): Waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [wait(for:)](xctwaiter/wait%28for_%29-swift.method.md): Waits on a group of expectations.
- [wait(for:enforceOrder:)](xctwaiter/wait%28for_enforceorder_%29-swift.method.md): Waits on a group of expectations optionally enforcing their order of fulfillment.
- [wait(for:timeout:)](xctwaiter/wait%28for_timeout_%29-swift.method.md): Waits on a group of expectations for up to the specified timeout.
- [wait(for:timeout:enforceOrder:)](xctwaiter/wait%28for_timeout_enforceorder_%29-swift.method.md): Waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [fulfillment(of:timeout:enforceOrder:)](xctwaiter/fulfillment%28of_timeout_enforceorder_%29-swift.type.method.md): Creates a waiter that waits on group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [wait(for:)](xctwaiter/wait%28for_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations.
- [wait(for:enforceOrder:)](xctwaiter/wait%28for_enforceorder_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations optionally enforcing their order of fulfillment.
- [wait(for:timeout:)](xctwaiter/wait%28for_timeout_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations for up to the specified timeout.
- [wait(for:timeout:enforceOrder:)](xctwaiter/wait%28for_timeout_enforceorder_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [XCTWaiter.Result](xctwaiter/result.md): Result states returned by a waiter when it completes, times out, fails, or is interrupted.

### Responding to Expectation Fulfilment

- [delegate](xctwaiter/delegate.md): The delegate to which expectation fulfillment events will be reported.
- [XCTWaiterDelegate](xctwaiterdelegate.md): Defines methods that are called when [XCTWaiter](xctwaiter.md) expectations are fulfilled correctly or incorrectly.
- [fulfilledExpectations](xctwaiter/fulfilledexpectations.md): An array of expectations that were fulfilled, in order, up until the waiter stopped waiting.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# XCTWaiter (Objective-C)

**Framework:** XCTest  
**Kind:** Class

Waits for the fulfillment of a group of expectations.

## Declaration

```objectivec
@interface XCTWaiter : NSObject
```

<a id="overview"></a>

## Overview

You can use waiters with or without a delegate to respond to events such as completion, timeout, or invalid expectation fulfillment. [XCTestCase](xctestcase.md) automatically conforms to the [XCTWaiterDelegate](xctwaiterdelegate.md) protocol and automatically reports timeouts and other unexpected events as test failures.

You can use waiters without a delegate or any association with a test case instance. This allows test support libraries to provide convenience methods for waiting without having to pass test cases through those APIs.

## Topics

### Creating a Waiter

- [initWithDelegate:](xctwaiter/init%28delegate_%29.md): Creates a new waiter with the specified delegate.

### Waiting for Expectations

- [waitForExpectations:](xctwaiter/wait%28for_%29-swift.method.md): Waits on a group of expectations.
- [waitForExpectations:enforceOrder:](xctwaiter/wait%28for_enforceorder_%29-swift.method.md): Waits on a group of expectations optionally enforcing their order of fulfillment.
- [waitForExpectations:timeout:](xctwaiter/wait%28for_timeout_%29-swift.method.md): Waits on a group of expectations for up to the specified timeout.
- [waitForExpectations:timeout:enforceOrder:](xctwaiter/wait%28for_timeout_enforceorder_%29-swift.method.md): Waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [waitForExpectations:](xctwaiter/wait%28for_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations.
- [waitForExpectations:enforceOrder:](xctwaiter/wait%28for_enforceorder_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations optionally enforcing their order of fulfillment.
- [waitForExpectations:timeout:](xctwaiter/wait%28for_timeout_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations for up to the specified timeout.
- [waitForExpectations:timeout:enforceOrder:](xctwaiter/wait%28for_timeout_enforceorder_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [XCTWaiterResult](xctwaiter/result.md): Result states returned by a waiter when it completes, times out, fails, or is interrupted.

### Responding to Expectation Fulfilment

- [delegate](xctwaiter/delegate.md): The delegate to which expectation fulfillment events will be reported.
- [XCTWaiterDelegate](xctwaiterdelegate.md): Defines methods that are called when [XCTWaiter](xctwaiter.md) expectations are fulfilled correctly or incorrectly.
- [fulfilledExpectations](xctwaiter/fulfilledexpectations.md): An array of expectations that were fulfilled, in order, up until the waiter stopped waiting.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)
