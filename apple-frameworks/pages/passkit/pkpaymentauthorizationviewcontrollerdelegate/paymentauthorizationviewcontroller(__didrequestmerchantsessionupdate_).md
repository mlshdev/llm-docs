> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller(_:didrequestmerchantsessionupdate:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller(_:didrequestmerchantsessionupdate:))

# paymentAuthorizationViewController(\_:didRequestMerchantSessionUpdate:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Requests an object that validates the identity of a merchant for a payment request.

## Declaration

```swift
optional func paymentAuthorizationViewController(_ controller: PKPaymentAuthorizationViewController, didRequestMerchantSessionUpdate handler: @escaping @Sendable (PKPaymentRequestMerchantSessionUpdate) -> Void)
```

```swift
optional func paymentAuthorizationViewControllerDidRequestMerchantSessionUpdate(controller: PKPaymentAuthorizationViewController) async -> PKPaymentRequestMerchantSessionUpdate
```

## Parameters

- `controller`: The payment authorization view controller.
- `handler`: The completion handler to call with the updated merchant session.

## See Also

### Handling user’s payment authorization

- [paymentAuthorizationViewControllerWillAuthorizePayment(\_:)](paymentauthorizationviewcontrollerwillauthorizepayment%28__%29.md): Tells the delegate that the user is authorizing the payment request.
- [paymentAuthorizationViewController(\_:didAuthorizePayment:handler:)](paymentauthorizationviewcontroller%28__didauthorizepayment_handler_%29.md): Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationViewController(\_:didAuthorizePayment:completion:)](paymentauthorizationviewcontroller%28__didauthorizepayment_completion_%29.md): Deprecated. Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationViewControllerDidFinish(\_:)](paymentauthorizationviewcontrollerdidfinish%28__%29.md): Tells the delegate that payment authorization finished.
- [paymentAuthorizationViewController(\_:didSelect:handler:)](paymentauthorizationviewcontroller%28__didselect_handler_%29-3bex6.md): Tells the delegate that the user changed the payment method, and asks for an updated payment request.
- [paymentAuthorizationViewController(\_:didSelect:completion:)](paymentauthorizationviewcontroller%28__didselect_completion_%29-30s85.md): Deprecated. Tells the delegate that the user changed the payment method, and asks for an updated payment request.

# paymentAuthorizationViewController:didRequestMerchantSessionUpdate: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Requests an object that validates the identity of a merchant for a payment request.

## Declaration

```objectivec
- (void) paymentAuthorizationViewController:(PKPaymentAuthorizationViewController *) controller didRequestMerchantSessionUpdate:(void (^)(PKPaymentRequestMerchantSessionUpdate *update)) handler;
```

## Parameters

- `controller`: The payment authorization view controller.
- `handler`: The completion handler to call with the updated merchant session.

## See Also

### Handling user’s payment authorization

- [paymentAuthorizationViewControllerWillAuthorizePayment:](paymentauthorizationviewcontrollerwillauthorizepayment%28__%29.md): Tells the delegate that the user is authorizing the payment request.
- [paymentAuthorizationViewController:didAuthorizePayment:handler:](paymentauthorizationviewcontroller%28__didauthorizepayment_handler_%29.md): Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationViewController:didAuthorizePayment:completion:](paymentauthorizationviewcontroller%28__didauthorizepayment_completion_%29.md): Deprecated. Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationViewControllerDidFinish:](paymentauthorizationviewcontrollerdidfinish%28__%29.md): Tells the delegate that payment authorization finished.
- [paymentAuthorizationViewController:didSelectPaymentMethod:handler:](paymentauthorizationviewcontroller%28__didselect_handler_%29-3bex6.md): Tells the delegate that the user changed the payment method, and asks for an updated payment request.
- [paymentAuthorizationViewController:didSelectPaymentMethod:completion:](paymentauthorizationviewcontroller%28__didselect_completion_%29-30s85.md): Deprecated. Tells the delegate that the user changed the payment method, and asks for an updated payment request.
