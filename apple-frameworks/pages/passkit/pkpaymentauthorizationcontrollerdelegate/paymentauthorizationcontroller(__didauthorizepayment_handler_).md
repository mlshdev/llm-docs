> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller(_:didauthorizepayment:handler:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller(_:didauthorizepayment:handler:))

# paymentAuthorizationController(\_:didAuthorizePayment:handler:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that the user authorized the payment request, and asks for a result.

## Declaration

```swift
@MainActor optional func paymentAuthorizationController(_ controller: PKPaymentAuthorizationController, didAuthorizePayment payment: PKPayment, handler completion: @escaping (PKPaymentAuthorizationResult) -> Void)
```

```swift
@MainActor optional func paymentAuthorizationController(_ controller: PKPaymentAuthorizationController, didAuthorizePayment payment: PKPayment) async -> PKPaymentAuthorizationResult
```

## Parameters

- `controller`: The payment authorization controller.
- `payment`: The authorized payment. This object contains the payment token you need to submit to your payment processor, as well as the billing and shipping information required by the payment request.
- `completion`: The completion handler to call with the result of authorizing the payment.

<a id="Discussion"></a>

## Discussion

The system calls this method after the payment request is authorized. You submit the payment information to your payment processor to authorize the transaction, and then call the handler.

## See Also

### Handling user’s payment authorization

- [paymentAuthorizationController(\_:didRequestMerchantSessionUpdate:)](paymentauthorizationcontroller%28__didrequestmerchantsessionupdate_%29.md): Requests an object that validates the identity of a merchant for a payment request.
- [paymentAuthorizationControllerWillAuthorizePayment(\_:)](paymentauthorizationcontrollerwillauthorizepayment%28__%29.md): Tells the delegate that the user is authorizing the payment request.
- [paymentAuthorizationController(\_:didAuthorizePayment:completion:)](paymentauthorizationcontroller%28__didauthorizepayment_completion_%29.md): Deprecated. Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationControllerDidFinish(\_:)](paymentauthorizationcontrollerdidfinish%28__%29.md): Tells the delegate that payment authorization has completed.

# paymentAuthorizationController:didAuthorizePayment:handler: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that the user authorized the payment request, and asks for a result.

## Declaration

```objectivec
- (void) paymentAuthorizationController:(PKPaymentAuthorizationController *) controller didAuthorizePayment:(PKPayment *) payment handler:(void (^)(PKPaymentAuthorizationResult *result)) completion;
```

## Parameters

- `controller`: The payment authorization controller.
- `payment`: The authorized payment. This object contains the payment token you need to submit to your payment processor, as well as the billing and shipping information required by the payment request.
- `completion`: The completion handler to call with the result of authorizing the payment.

<a id="Discussion"></a>

## Discussion

The system calls this method after the payment request is authorized. You submit the payment information to your payment processor to authorize the transaction, and then call the handler.

## See Also

### Handling user’s payment authorization

- [paymentAuthorizationController:didRequestMerchantSessionUpdate:](paymentauthorizationcontroller%28__didrequestmerchantsessionupdate_%29.md): Requests an object that validates the identity of a merchant for a payment request.
- [paymentAuthorizationControllerWillAuthorizePayment:](paymentauthorizationcontrollerwillauthorizepayment%28__%29.md): Tells the delegate that the user is authorizing the payment request.
- [paymentAuthorizationController:didAuthorizePayment:completion:](paymentauthorizationcontroller%28__didauthorizepayment_completion_%29.md): Deprecated. Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationControllerDidFinish:](paymentauthorizationcontrollerdidfinish%28__%29.md): Tells the delegate that payment authorization has completed.
