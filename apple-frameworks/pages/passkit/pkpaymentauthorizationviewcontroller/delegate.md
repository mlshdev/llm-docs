> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationviewcontroller/delegate](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationviewcontroller/delegate)

# delegate (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+

The view controller’s delegate.

## Declaration

```swift
weak var delegate: (any PKPaymentAuthorizationViewControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate is called at various points in the interaction, such as when the user selects shipping or billing information and when the user authorizes the payment request.

## See Also

### Handling user interactions

- [PKPaymentAuthorizationViewControllerDelegate](../pkpaymentauthorizationviewcontrollerdelegate.md): Methods that let you respond to user interactions with your payment authorization view controller.

# delegate (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+

The view controller’s delegate.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<PKPaymentAuthorizationViewControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate is called at various points in the interaction, such as when the user selects shipping or billing information and when the user authorizes the payment request.

## See Also

### Handling user interactions

- [PKPaymentAuthorizationViewControllerDelegate](../pkpaymentauthorizationviewcontrollerdelegate.md): Methods that let you respond to user interactions with your payment authorization view controller.
