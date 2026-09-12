> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctwaiterdelegate/waiter(_:didfulfillinvertedexpectation:)](https://developer.apple.com/documentation/xctest/xctwaiterdelegate/waiter(_:didfulfillinvertedexpectation:))

# waiter(\_:didFulfillInvertedExpectation:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Invoked when an expectation whose `isInverted` property is set to `true` is fulfilled.

## Declaration

```swift
optional func waiter(_ waiter: XCTWaiter, didFulfillInvertedExpectation expectation: XCTestExpectation)
```

<a id="Discussion"></a>

## Discussion

If the delegate is an [XCTestCase](../xctestcase.md) instance, this will be reported as a test failure.

# waiter:didFulfillInvertedExpectation: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Invoked when an expectation whose `isInverted` property is set to `true` is fulfilled.

## Declaration

```objectivec
- (void) waiter:(XCTWaiter *) waiter didFulfillInvertedExpectation:(XCTestExpectation *) expectation;
```

<a id="Discussion"></a>

## Discussion

If the delegate is an [XCTestCase](../xctestcase.md) instance, this will be reported as a test failure.
