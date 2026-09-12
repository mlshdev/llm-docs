> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctwaiter/result](https://developer.apple.com/documentation/xctest/xctwaiter/result)

# XCTWaiter.Result (Swift)

**Framework:** XCTest  
**Kind:** Enumeration

Result states returned by a waiter when it completes, times out, fails, or is interrupted.

## Declaration

```swift
enum Result
```

## Topics

### Result States

- [XCTWaiter.Result.completed](result/completed.md): All of the waiter’s expectations were fulfilled successfully.
- [XCTWaiter.Result.timedOut](result/timedout.md): The waiter timed out before all of its expectations were fulfilled.
- [XCTWaiter.Result.incorrectOrder](result/incorrectorder.md): The waiter’s expectations were not fulfilled in the required order.
- [XCTWaiter.Result.invertedFulfillment](result/invertedfulfillment.md): An inverted expectation was fulfilled.
- [XCTWaiter.Result.interrupted](result/interrupted.md): The waiter was interrupted prior to its expectations being fulfilled or timing out.

### Initializers

- [init(rawValue:)](result/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Waiting for Expectations

- [fulfillment(of:timeout:enforceOrder:)](fulfillment%28of_timeout_enforceorder_%29-swift.method.md): Waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [wait(for:)](wait%28for_%29-swift.method.md): Waits on a group of expectations.
- [wait(for:enforceOrder:)](wait%28for_enforceorder_%29-swift.method.md): Waits on a group of expectations optionally enforcing their order of fulfillment.
- [wait(for:timeout:)](wait%28for_timeout_%29-swift.method.md): Waits on a group of expectations for up to the specified timeout.
- [wait(for:timeout:enforceOrder:)](wait%28for_timeout_enforceorder_%29-swift.method.md): Waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [fulfillment(of:timeout:enforceOrder:)](fulfillment%28of_timeout_enforceorder_%29-swift.type.method.md): Creates a waiter that waits on group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [wait(for:)](wait%28for_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations.
- [wait(for:enforceOrder:)](wait%28for_enforceorder_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations optionally enforcing their order of fulfillment.
- [wait(for:timeout:)](wait%28for_timeout_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations for up to the specified timeout.
- [wait(for:timeout:enforceOrder:)](wait%28for_timeout_enforceorder_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.

# XCTWaiterResult (Objective-C)

**Framework:** XCTest  
**Kind:** Enumeration

Result states returned by a waiter when it completes, times out, fails, or is interrupted.

## Declaration

```objectivec
enum XCTWaiterResult : NSInteger;
```

## Topics

### Result States

- [XCTWaiterResultCompleted](result/completed.md): All of the waiter’s expectations were fulfilled successfully.
- [XCTWaiterResultTimedOut](result/timedout.md): The waiter timed out before all of its expectations were fulfilled.
- [XCTWaiterResultIncorrectOrder](result/incorrectorder.md): The waiter’s expectations were not fulfilled in the required order.
- [XCTWaiterResultInvertedFulfillment](result/invertedfulfillment.md): An inverted expectation was fulfilled.
- [XCTWaiterResultInterrupted](result/interrupted.md): The waiter was interrupted prior to its expectations being fulfilled or timing out.

## See Also

### Waiting for Expectations

- [waitForExpectations:](wait%28for_%29-swift.method.md): Waits on a group of expectations.
- [waitForExpectations:enforceOrder:](wait%28for_enforceorder_%29-swift.method.md): Waits on a group of expectations optionally enforcing their order of fulfillment.
- [waitForExpectations:timeout:](wait%28for_timeout_%29-swift.method.md): Waits on a group of expectations for up to the specified timeout.
- [waitForExpectations:timeout:enforceOrder:](wait%28for_timeout_enforceorder_%29-swift.method.md): Waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [waitForExpectations:](wait%28for_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations.
- [waitForExpectations:enforceOrder:](wait%28for_enforceorder_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations optionally enforcing their order of fulfillment.
- [waitForExpectations:timeout:](wait%28for_timeout_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations for up to the specified timeout.
- [waitForExpectations:timeout:enforceOrder:](wait%28for_timeout_enforceorder_%29-swift.type.method.md): Creates a waiter that waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
