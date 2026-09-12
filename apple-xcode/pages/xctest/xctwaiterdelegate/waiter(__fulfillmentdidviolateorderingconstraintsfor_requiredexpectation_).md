> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctwaiterdelegate/waiter(_:fulfillmentdidviolateorderingconstraintsfor:requiredexpectation:)](https://developer.apple.com/documentation/xctest/xctwaiterdelegate/waiter(_:fulfillmentdidviolateorderingconstraintsfor:requiredexpectation:))

# waiter(\_:fulfillmentDidViolateOrderingConstraintsFor:requiredExpectation:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Invoked when a waiter is enforcing fulfillment order and an expectation is fulfilled in the wrong order.

## Declaration

```swift
optional func waiter(_ waiter: XCTWaiter, fulfillmentDidViolateOrderingConstraintsFor expectation: XCTestExpectation, requiredExpectation: XCTestExpectation)
```

<a id="Discussion"></a>

## Discussion

If the delegate is an [XCTestCase](../xctestcase.md) instance, this will be reported as a test failure.

# waiter:fulfillmentDidViolateOrderingConstraintsForExpectation:requiredExpectation: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Invoked when a waiter is enforcing fulfillment order and an expectation is fulfilled in the wrong order.

## Declaration

```objectivec
- (void) waiter:(XCTWaiter *) waiter fulfillmentDidViolateOrderingConstraintsForExpectation:(XCTestExpectation *) expectation requiredExpectation:(XCTestExpectation *) requiredExpectation;
```

<a id="Discussion"></a>

## Discussion

If the delegate is an [XCTestCase](../xctestcase.md) instance, this will be reported as a test failure.
