> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctwaiterdelegate/nestedwaiter(_:wasinterruptedbytimedoutwaiter:)](https://developer.apple.com/documentation/xctest/xctwaiterdelegate/nestedwaiter(_:wasinterruptedbytimedoutwaiter:))

# nestedWaiter(\_:wasInterruptedByTimedOutWaiter:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Invoked when the waiter is interrupted prior to its expectations being fulfilled or timing out.

## Declaration

```swift
optional func nestedWaiter(_ waiter: XCTWaiter, wasInterruptedByTimedOutWaiter outerWaiter: XCTWaiter)
```

<a id="Discussion"></a>

## Discussion

This occurs when an “outer” waiter times out, resulting in any waiters nested inside it being interrupted to allow the call stack to quickly unwind.

## See Also

### Timeout Events

- [waiter(\_:didTimeoutWithUnfulfilledExpectations:)](waiter%28__didtimeoutwithunfulfilledexpectations_%29.md): Invoked when not all waited on expectations are fulfilled during the timeout period.

# nestedWaiter:wasInterruptedByTimedOutWaiter: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Invoked when the waiter is interrupted prior to its expectations being fulfilled or timing out.

## Declaration

```objectivec
- (void) nestedWaiter:(XCTWaiter *) waiter wasInterruptedByTimedOutWaiter:(XCTWaiter *) outerWaiter;
```

<a id="Discussion"></a>

## Discussion

This occurs when an “outer” waiter times out, resulting in any waiters nested inside it being interrupted to allow the call stack to quickly unwind.

## See Also

### Timeout Events

- [waiter:didTimeoutWithUnfulfilledExpectations:](waiter%28__didtimeoutwithunfulfilledexpectations_%29.md): Invoked when not all waited on expectations are fulfilled during the timeout period.
