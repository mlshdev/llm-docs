> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationcontroller/delegate](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontroller/delegate)

# delegate (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

The controller’s delegate.

## Declaration

```swift
weak var delegate: (any PKPaymentAuthorizationControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate is called at various points in the interaction, such as when the user selects shipping or billing information and when the user authorizes the payment request.

## See Also

### Handling user interactions

- [PKPaymentAuthorizationControllerDelegate](../pkpaymentauthorizationcontrollerdelegate.md): Methods that let you respond to user interactions with your payment authorization controller.
- [present(completion:)](present%28completion_%29.md): Presents the payment sheet modally over your app.
- [dismiss(completion:)](dismiss%28completion_%29.md): Dismisses the payment sheet.

# delegate (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

The controller’s delegate.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<PKPaymentAuthorizationControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate is called at various points in the interaction, such as when the user selects shipping or billing information and when the user authorizes the payment request.

## See Also

### Handling user interactions

- [PKPaymentAuthorizationControllerDelegate](../pkpaymentauthorizationcontrollerdelegate.md): Methods that let you respond to user interactions with your payment authorization controller.
- [presentWithCompletion:](present%28completion_%29.md): Presents the payment sheet modally over your app.
- [dismissWithCompletion:](dismiss%28completion_%29.md): Dismisses the payment sheet.
