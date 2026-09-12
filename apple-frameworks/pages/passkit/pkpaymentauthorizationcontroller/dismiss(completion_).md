> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationcontroller/dismiss(completion:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontroller/dismiss(completion:))

# dismiss(completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Dismisses the payment sheet.

## Declaration

```swift
func dismiss(completion: (@Sendable () -> Void)? = nil)
```

```swift
func dismiss() async
```

## Parameters

- `completion`: A block that is called after the sheet is dismissed.

<a id="Discussion"></a>

## Discussion

Call this method when you receive the [paymentAuthorizationControllerDidFinish(\_:)](../pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontrollerdidfinish%28__%29.md) delegate callback, or otherwise want to dismiss the payment sheet.

## See Also

### Handling user interactions

- [delegate](delegate.md): The controller’s delegate.
- [PKPaymentAuthorizationControllerDelegate](../pkpaymentauthorizationcontrollerdelegate.md): Methods that let you respond to user interactions with your payment authorization controller.
- [present(completion:)](present%28completion_%29.md): Presents the payment sheet modally over your app.

# dismissWithCompletion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Dismisses the payment sheet.

## Declaration

```objectivec
- (void) dismissWithCompletion:(void (^)()) completion;
```

## Parameters

- `completion`: A block that is called after the sheet is dismissed.

<a id="Discussion"></a>

## Discussion

Call this method when you receive the [paymentAuthorizationControllerDidFinish:](../pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontrollerdidfinish%28__%29.md) delegate callback, or otherwise want to dismiss the payment sheet.

## See Also

### Handling user interactions

- [delegate](delegate.md): The controller’s delegate.
- [PKPaymentAuthorizationControllerDelegate](../pkpaymentauthorizationcontrollerdelegate.md): Methods that let you respond to user interactions with your payment authorization controller.
- [presentWithCompletion:](present%28completion_%29.md): Presents the payment sheet modally over your app.
