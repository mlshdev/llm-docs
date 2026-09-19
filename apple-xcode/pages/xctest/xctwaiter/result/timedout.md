> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xctest/xctwaiter/result/timedout

# XCTWaiter.Result.timedOut (Swift)

**Framework:** XCTest  
**Kind:** Case

The waiter timed out before all of its expectations were fulfilled.

## Declaration

```swift
case timedOut
```

## See Also

### Result States

- [XCTWaiter.Result.completed](completed.md): All of the waiter’s expectations were fulfilled successfully.
- [XCTWaiter.Result.incorrectOrder](incorrectorder.md): The waiter’s expectations were not fulfilled in the required order.
- [XCTWaiter.Result.invertedFulfillment](invertedfulfillment.md): An inverted expectation was fulfilled.
- [XCTWaiter.Result.interrupted](interrupted.md): The waiter was interrupted prior to its expectations being fulfilled or timing out.

# XCTWaiterResultTimedOut (Objective-C)

**Framework:** XCTest  
**Kind:** Enumeration Case

The waiter timed out before all of its expectations were fulfilled.

## Declaration

```objectivec
XCTWaiterResultTimedOut
```

## See Also

### Result States

- [XCTWaiterResultCompleted](completed.md): All of the waiter’s expectations were fulfilled successfully.
- [XCTWaiterResultIncorrectOrder](incorrectorder.md): The waiter’s expectations were not fulfilled in the required order.
- [XCTWaiterResultInvertedFulfillment](invertedfulfillment.md): An inverted expectation was fulfilled.
- [XCTWaiterResultInterrupted](interrupted.md): The waiter was interrupted prior to its expectations being fulfilled or timing out.
