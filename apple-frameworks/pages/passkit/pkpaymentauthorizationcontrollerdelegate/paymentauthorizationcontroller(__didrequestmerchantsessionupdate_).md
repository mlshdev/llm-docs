> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller(_:didrequestmerchantsessionupdate:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller(_:didrequestmerchantsessionupdate:))

# paymentAuthorizationController(\_:didRequestMerchantSessionUpdate:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

Requests an object that validates the identity of a merchant for a payment request.

## Declaration

```swift
@MainActor optional func paymentAuthorizationController(_ controller: PKPaymentAuthorizationController, didRequestMerchantSessionUpdate handler: @escaping (PKPaymentRequestMerchantSessionUpdate) -> Void)
```

```swift
@MainActor optional func paymentAuthorizationControllerDidRequestMerchantSessionUpdate(controller: PKPaymentAuthorizationController) async -> PKPaymentRequestMerchantSessionUpdate
```

## Parameters

- `controller`: The payment authorization controller.
- `handler`: The completion handler to call with the updated merchant session.

## See Also

### Handling user’s payment authorization

- [paymentAuthorizationControllerWillAuthorizePayment(\_:)](paymentauthorizationcontrollerwillauthorizepayment%28__%29.md): Tells the delegate that the user is authorizing the payment request.
- [paymentAuthorizationController(\_:didAuthorizePayment:handler:)](paymentauthorizationcontroller%28__didauthorizepayment_handler_%29.md): Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationController(\_:didAuthorizePayment:completion:)](paymentauthorizationcontroller%28__didauthorizepayment_completion_%29.md): Deprecated. Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationControllerDidFinish(\_:)](paymentauthorizationcontrollerdidfinish%28__%29.md): Tells the delegate that payment authorization has completed.

# paymentAuthorizationController:didRequestMerchantSessionUpdate: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

Requests an object that validates the identity of a merchant for a payment request.

## Declaration

```objectivec
- (void) paymentAuthorizationController:(PKPaymentAuthorizationController *) controller didRequestMerchantSessionUpdate:(void (^)(PKPaymentRequestMerchantSessionUpdate *update)) handler;
```

## Parameters

- `controller`: The payment authorization controller.
- `handler`: The completion handler to call with the updated merchant session.

## See Also

### Handling user’s payment authorization

- [paymentAuthorizationControllerWillAuthorizePayment:](paymentauthorizationcontrollerwillauthorizepayment%28__%29.md): Tells the delegate that the user is authorizing the payment request.
- [paymentAuthorizationController:didAuthorizePayment:handler:](paymentauthorizationcontroller%28__didauthorizepayment_handler_%29.md): Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationController:didAuthorizePayment:completion:](paymentauthorizationcontroller%28__didauthorizepayment_completion_%29.md): Deprecated. Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationControllerDidFinish:](paymentauthorizationcontrollerdidfinish%28__%29.md): Tells the delegate that payment authorization has completed.
