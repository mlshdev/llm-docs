> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctwaiter/result/interrupted](https://developer.apple.com/documentation/xctest/xctwaiter/result/interrupted)

# XCTWaiter.Result.interrupted (Swift)

**Framework:** XCTest  
**Kind:** Case

The waiter was interrupted prior to its expectations being fulfilled or timing out.

## Declaration

```swift
case interrupted
```

<a id="Discussion"></a>

## Discussion

This occurs when an “outer” waiter times out, resulting in any waiters nested inside it being interrupted to allow the call stack to quickly unwind.

## See Also

### Result States

- [XCTWaiter.Result.completed](completed.md): All of the waiter’s expectations were fulfilled successfully.
- [XCTWaiter.Result.timedOut](timedout.md): The waiter timed out before all of its expectations were fulfilled.
- [XCTWaiter.Result.incorrectOrder](incorrectorder.md): The waiter’s expectations were not fulfilled in the required order.
- [XCTWaiter.Result.invertedFulfillment](invertedfulfillment.md): An inverted expectation was fulfilled.

# XCTWaiterResultInterrupted (Objective-C)

**Framework:** XCTest  
**Kind:** Enumeration Case

The waiter was interrupted prior to its expectations being fulfilled or timing out.

## Declaration

```objectivec
XCTWaiterResultInterrupted
```

<a id="Discussion"></a>

## Discussion

This occurs when an “outer” waiter times out, resulting in any waiters nested inside it being interrupted to allow the call stack to quickly unwind.

## See Also

### Result States

- [XCTWaiterResultCompleted](completed.md): All of the waiter’s expectations were fulfilled successfully.
- [XCTWaiterResultTimedOut](timedout.md): The waiter timed out before all of its expectations were fulfilled.
- [XCTWaiterResultIncorrectOrder](incorrectorder.md): The waiter’s expectations were not fulfilled in the required order.
- [XCTWaiterResultInvertedFulfillment](invertedfulfillment.md): An inverted expectation was fulfilled.
