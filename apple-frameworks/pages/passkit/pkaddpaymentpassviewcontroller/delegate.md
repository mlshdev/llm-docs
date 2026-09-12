> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpaymentpassviewcontroller/delegate](https://developer.apple.com/documentation/passkit/pkaddpaymentpassviewcontroller/delegate)

# delegate (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The object that acts as the delegate for the add payment view controller.

## Declaration

```swift
weak var delegate: (any PKAddPaymentPassViewControllerDelegate)? { get set }
```

## See Also

### Working with add payment view controllers

- [PKAddPaymentPassViewControllerDelegate](../pkaddpaymentpassviewcontrollerdelegate.md): Methods that let the system prompt you for an add payment request, and inform you when a request has succeeded or failed.

# delegate (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The object that acts as the delegate for the add payment view controller.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<PKAddPaymentPassViewControllerDelegate> delegate;
```

## See Also

### Working with add payment view controllers

- [PKAddPaymentPassViewControllerDelegate](../pkaddpaymentpassviewcontrollerdelegate.md): Methods that let the system prompt you for an add payment request, and inform you when a request has succeeded or failed.
