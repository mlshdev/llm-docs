> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xctest/xctwaiter/fulfilledexpectations

# fulfilledExpectations (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

An array of expectations that were fulfilled, in order, up until the waiter stopped waiting.

## Declaration

```swift
var fulfilledExpectations: [XCTestExpectation] { get }
```

<a id="Discussion"></a>

## Discussion

The array will be empty until the waiter has started waiting, even if expectations have already been fulfilled. Expectations fulfilled after the waiter stops waiting will not be in the array.

## See Also

### Responding to Expectation Fulfilment

- [delegate](delegate.md): The delegate to which expectation fulfillment events will be reported.
- [XCTWaiterDelegate](../xctwaiterdelegate.md): Defines methods that are called when [XCTWaiter](../xctwaiter.md) expectations are fulfilled correctly or incorrectly.

# fulfilledExpectations (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

An array of expectations that were fulfilled, in order, up until the waiter stopped waiting.

## Declaration

```objectivec
@property (readonly) NSArray<XCTestExpectation *> * fulfilledExpectations;
```

<a id="Discussion"></a>

## Discussion

The array will be empty until the waiter has started waiting, even if expectations have already been fulfilled. Expectations fulfilled after the waiter stops waiting will not be in the array.

## See Also

### Responding to Expectation Fulfilment

- [delegate](delegate.md): The delegate to which expectation fulfillment events will be reported.
- [XCTWaiterDelegate](../xctwaiterdelegate.md): Defines methods that are called when [XCTWaiter](../xctwaiter.md) expectations are fulfilled correctly or incorrectly.
