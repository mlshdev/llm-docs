> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller(_:didselectpaymentmethod:handler:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller(_:didselectpaymentmethod:handler:))

# paymentAuthorizationController(\_:didSelectPaymentMethod:handler:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that the user changed the payment method, and asks for an updated payment request.

## Declaration

```swift
@MainActor optional func paymentAuthorizationController(_ controller: PKPaymentAuthorizationController, didSelectPaymentMethod paymentMethod: PKPaymentMethod, handler completion: @escaping (PKPaymentRequestPaymentMethodUpdate) -> Void)
```

```swift
@MainActor optional func paymentAuthorizationController(_ controller: PKPaymentAuthorizationController, didSelectPaymentMethod paymentMethod: PKPaymentMethod) async -> PKPaymentRequestPaymentMethodUpdate
```

## Parameters

- `controller`: The payment authorization controller.
- `paymentMethod`: The selected payment method.
- `completion`: The completion handler to call with the updated payment summary items.

<a id="Discussion"></a>

## Discussion

The system calls this method when the user selects a payment card.  Use this delegate callback to update the summary items in response to the card type changing (for example, applying credit card surcharges), and then call the completion handler with the updated summary items.

## See Also

### Handling user’s payment method selection

- [paymentAuthorizationController(\_:didSelectPaymentMethod:completion:)](paymentauthorizationcontroller%28__didselectpaymentmethod_completion_%29.md): Deprecated. Tells the delegate that the user changed the payment method, and asks for an updated payment request.

# paymentAuthorizationController:didSelectPaymentMethod:handler: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that the user changed the payment method, and asks for an updated payment request.

## Declaration

```objectivec
- (void) paymentAuthorizationController:(PKPaymentAuthorizationController *) controller didSelectPaymentMethod:(PKPaymentMethod *) paymentMethod handler:(void (^)(PKPaymentRequestPaymentMethodUpdate *requestUpdate)) completion;
```

## Parameters

- `controller`: The payment authorization controller.
- `paymentMethod`: The selected payment method.
- `completion`: The completion handler to call with the updated payment summary items.

<a id="Discussion"></a>

## Discussion

The system calls this method when the user selects a payment card.  Use this delegate callback to update the summary items in response to the card type changing (for example, applying credit card surcharges), and then call the completion handler with the updated summary items.

## See Also

### Handling user’s payment method selection

- [paymentAuthorizationController:didSelectPaymentMethod:completion:](paymentauthorizationcontroller%28__didselectpaymentmethod_completion_%29.md): Deprecated. Tells the delegate that the user changed the payment method, and asks for an updated payment request.
