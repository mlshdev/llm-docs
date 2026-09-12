> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctwaiter/delegate](https://developer.apple.com/documentation/xctest/xctwaiter/delegate)

# delegate (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

The delegate to which expectation fulfillment events will be reported.

## Declaration

```swift
weak var delegate: (any XCTWaiterDelegate)? { get set }
```

## See Also

### Responding to Expectation Fulfilment

- [XCTWaiterDelegate](../xctwaiterdelegate.md): Defines methods that are called when [XCTWaiter](../xctwaiter.md) expectations are fulfilled correctly or incorrectly.
- [fulfilledExpectations](fulfilledexpectations.md): An array of expectations that were fulfilled, in order, up until the waiter stopped waiting.

# delegate (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

The delegate to which expectation fulfillment events will be reported.

## Declaration

```objectivec
@property (weak, nullable) id<XCTWaiterDelegate> delegate;
```

## See Also

### Responding to Expectation Fulfilment

- [XCTWaiterDelegate](../xctwaiterdelegate.md): Defines methods that are called when [XCTWaiter](../xctwaiter.md) expectations are fulfilled correctly or incorrectly.
- [fulfilledExpectations](fulfilledexpectations.md): An array of expectations that were fulfilled, in order, up until the waiter stopped waiting.
