> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctwaiterdelegate/waiter(_:didtimeoutwithunfulfilledexpectations:)](https://developer.apple.com/documentation/xctest/xctwaiterdelegate/waiter(_:didtimeoutwithunfulfilledexpectations:))

# waiter(\_:didTimeoutWithUnfulfilledExpectations:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Invoked when not all waited on expectations are fulfilled during the timeout period.

## Declaration

```swift
optional func waiter(_ waiter: XCTWaiter, didTimeoutWithUnfulfilledExpectations unfulfilledExpectations: [XCTestExpectation])
```

## Parameters

- `waiter`: The [XCTWaiter](../xctwaiter.md) reporting the timeout event.
- `unfulfilledExpectations`: The expectations

<a id="Discussion"></a>

## Discussion

If the delegate is an [XCTestCase](../xctestcase.md) instance, this will be reported as a test failure.

## See Also

### Timeout Events

- [nestedWaiter(\_:wasInterruptedByTimedOutWaiter:)](nestedwaiter%28__wasinterruptedbytimedoutwaiter_%29.md): Invoked when the waiter is interrupted prior to its expectations being fulfilled or timing out.

# waiter:didTimeoutWithUnfulfilledExpectations: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Invoked when not all waited on expectations are fulfilled during the timeout period.

## Declaration

```objectivec
- (void) waiter:(XCTWaiter *) waiter didTimeoutWithUnfulfilledExpectations:(NSArray<XCTestExpectation *> *) unfulfilledExpectations;
```

## Parameters

- `waiter`: The [XCTWaiter](../xctwaiter.md) reporting the timeout event.
- `unfulfilledExpectations`: The expectations

<a id="Discussion"></a>

## Discussion

If the delegate is an [XCTestCase](../xctestcase.md) instance, this will be reported as a test failure.

## See Also

### Timeout Events

- [nestedWaiter:wasInterruptedByTimedOutWaiter:](nestedwaiter%28__wasinterruptedbytimedoutwaiter_%29.md): Invoked when the waiter is interrupted prior to its expectations being fulfilled or timing out.
