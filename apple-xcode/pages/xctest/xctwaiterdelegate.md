> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctwaiterdelegate](https://developer.apple.com/documentation/xctest/xctwaiterdelegate)

# XCTWaiterDelegate (Swift)

**Framework:** XCTest  
**Kind:** Protocol

Defines methods that are called when [XCTWaiter](xctwaiter.md) expectations are fulfilled correctly or incorrectly.

## Declaration

```swift
protocol XCTWaiterDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

[XCTestCase](xctestcase.md) instances automatically conform to the [XCTWaiterDelegate](xctwaiterdelegate.md) protocol. If you pass a test case instance as the delegate property of [XCTWaiter](xctwaiter.md)’s [init(delegate:)](xctwaiter/init%28delegate_%29.md) initializer, that test case will automatically report timeouts and other unexpected events as test failures.

## Topics

### Timeout Events

- [waiter(\_:didTimeoutWithUnfulfilledExpectations:)](xctwaiterdelegate/waiter%28__didtimeoutwithunfulfilledexpectations_%29.md): Invoked when not all waited on expectations are fulfilled during the timeout period.
- [nestedWaiter(\_:wasInterruptedByTimedOutWaiter:)](xctwaiterdelegate/nestedwaiter%28__wasinterruptedbytimedoutwaiter_%29.md): Invoked when the waiter is interrupted prior to its expectations being fulfilled or timing out.

### Order of Fulfillment Events

- [waiter(\_:fulfillmentDidViolateOrderingConstraintsFor:requiredExpectation:)](xctwaiterdelegate/waiter%28__fulfillmentdidviolateorderingconstraintsfor_requiredexpectation_%29.md): Invoked when a waiter is enforcing fulfillment order and an expectation is fulfilled in the wrong order.

### Inverted Expectation Events

- [waiter(\_:didFulfillInvertedExpectation:)](xctwaiterdelegate/waiter%28__didfulfillinvertedexpectation_%29.md): Invoked when an expectation whose `isInverted` property is set to `true` is fulfilled.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [XCTestCase](xctestcase.md)

## See Also

### Responding to Expectation Fulfilment

- [delegate](xctwaiter/delegate.md): The delegate to which expectation fulfillment events will be reported.
- [fulfilledExpectations](xctwaiter/fulfilledexpectations.md): An array of expectations that were fulfilled, in order, up until the waiter stopped waiting.

# XCTWaiterDelegate (Objective-C)

**Framework:** XCTest  
**Kind:** Protocol

Defines methods that are called when [XCTWaiter](xctwaiter.md) expectations are fulfilled correctly or incorrectly.

## Declaration

```objectivec
@protocol XCTWaiterDelegate <NSObject>
```

<a id="overview"></a>

## Overview

[XCTestCase](xctestcase.md) instances automatically conform to the [XCTWaiterDelegate](xctwaiterdelegate.md) protocol. If you pass a test case instance as the delegate property of [XCTWaiter](xctwaiter.md)’s [initWithDelegate:](xctwaiter/init%28delegate_%29.md) initializer, that test case will automatically report timeouts and other unexpected events as test failures.

## Topics

### Timeout Events

- [waiter:didTimeoutWithUnfulfilledExpectations:](xctwaiterdelegate/waiter%28__didtimeoutwithunfulfilledexpectations_%29.md): Invoked when not all waited on expectations are fulfilled during the timeout period.
- [nestedWaiter:wasInterruptedByTimedOutWaiter:](xctwaiterdelegate/nestedwaiter%28__wasinterruptedbytimedoutwaiter_%29.md): Invoked when the waiter is interrupted prior to its expectations being fulfilled or timing out.

### Order of Fulfillment Events

- [waiter:fulfillmentDidViolateOrderingConstraintsForExpectation:requiredExpectation:](xctwaiterdelegate/waiter%28__fulfillmentdidviolateorderingconstraintsfor_requiredexpectation_%29.md): Invoked when a waiter is enforcing fulfillment order and an expectation is fulfilled in the wrong order.

### Inverted Expectation Events

- [waiter:didFulfillInvertedExpectation:](xctwaiterdelegate/waiter%28__didfulfillinvertedexpectation_%29.md): Invoked when an expectation whose `isInverted` property is set to `true` is fulfilled.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [XCTestCase](xctestcase.md)

## See Also

### Responding to Expectation Fulfilment

- [delegate](xctwaiter/delegate.md): The delegate to which expectation fulfillment events will be reported.
- [fulfilledExpectations](xctwaiter/fulfilledexpectations.md): An array of expectations that were fulfilled, in order, up until the waiter stopped waiting.
