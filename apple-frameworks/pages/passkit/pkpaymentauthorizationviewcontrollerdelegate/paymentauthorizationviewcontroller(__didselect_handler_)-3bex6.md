> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller(_:didselect:handler:)-3bex6](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller(_:didselect:handler:)-3bex6)

# paymentAuthorizationViewController(\_:didSelect:handler:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+

Tells the delegate that the user changed the payment method, and asks for an updated payment request.

## Declaration

```swift
optional func paymentAuthorizationViewController(_ controller: PKPaymentAuthorizationViewController, didSelect paymentMethod: PKPaymentMethod, handler completion: @escaping @Sendable (PKPaymentRequestPaymentMethodUpdate) -> Void)
```

```swift
optional func paymentAuthorizationViewController(_ controller: PKPaymentAuthorizationViewController, didSelect paymentMethod: PKPaymentMethod) async -> PKPaymentRequestPaymentMethodUpdate
```

## Parameters

- `controller`: The payment authorization view controller.
- `paymentMethod`: The new payment method.
- `completion`: The completion handler to call with the updated payment summary items.

<a id="Discussion"></a>

## Discussion

The system calls this method when the user selects a new payment card.  Use this delegate callback to update the summary items in response to the card type changing (for example, applying credit card surcharges), and then call the handler with the updated summary items.

## See Also

### Handling user’s payment authorization

- [paymentAuthorizationViewController(\_:didRequestMerchantSessionUpdate:)](paymentauthorizationviewcontroller%28__didrequestmerchantsessionupdate_%29.md): Requests an object that validates the identity of a merchant for a payment request.
- [paymentAuthorizationViewControllerWillAuthorizePayment(\_:)](paymentauthorizationviewcontrollerwillauthorizepayment%28__%29.md): Tells the delegate that the user is authorizing the payment request.
- [paymentAuthorizationViewController(\_:didAuthorizePayment:handler:)](paymentauthorizationviewcontroller%28__didauthorizepayment_handler_%29.md): Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationViewController(\_:didAuthorizePayment:completion:)](paymentauthorizationviewcontroller%28__didauthorizepayment_completion_%29.md): Deprecated. Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationViewControllerDidFinish(\_:)](paymentauthorizationviewcontrollerdidfinish%28__%29.md): Tells the delegate that payment authorization finished.
- [paymentAuthorizationViewController(\_:didSelect:completion:)](paymentauthorizationviewcontroller%28__didselect_completion_%29-30s85.md): Deprecated. Tells the delegate that the user changed the payment method, and asks for an updated payment request.

# paymentAuthorizationViewController:didSelectPaymentMethod:handler: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+

Tells the delegate that the user changed the payment method, and asks for an updated payment request.

## Declaration

```objectivec
- (void) paymentAuthorizationViewController:(PKPaymentAuthorizationViewController *) controller didSelectPaymentMethod:(PKPaymentMethod *) paymentMethod handler:(void (^)(PKPaymentRequestPaymentMethodUpdate *update)) completion;
```

## Parameters

- `controller`: The payment authorization view controller.
- `paymentMethod`: The new payment method.
- `completion`: The completion handler to call with the updated payment summary items.

<a id="Discussion"></a>

## Discussion

The system calls this method when the user selects a new payment card.  Use this delegate callback to update the summary items in response to the card type changing (for example, applying credit card surcharges), and then call the handler with the updated summary items.

## See Also

### Handling user’s payment authorization

- [paymentAuthorizationViewController:didRequestMerchantSessionUpdate:](paymentauthorizationviewcontroller%28__didrequestmerchantsessionupdate_%29.md): Requests an object that validates the identity of a merchant for a payment request.
- [paymentAuthorizationViewControllerWillAuthorizePayment:](paymentauthorizationviewcontrollerwillauthorizepayment%28__%29.md): Tells the delegate that the user is authorizing the payment request.
- [paymentAuthorizationViewController:didAuthorizePayment:handler:](paymentauthorizationviewcontroller%28__didauthorizepayment_handler_%29.md): Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationViewController:didAuthorizePayment:completion:](paymentauthorizationviewcontroller%28__didauthorizepayment_completion_%29.md): Deprecated. Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationViewControllerDidFinish:](paymentauthorizationviewcontrollerdidfinish%28__%29.md): Tells the delegate that payment authorization finished.
- [paymentAuthorizationViewController:didSelectPaymentMethod:completion:](paymentauthorizationviewcontroller%28__didselect_completion_%29-30s85.md): Deprecated. Tells the delegate that the user changed the payment method, and asks for an updated payment request.
