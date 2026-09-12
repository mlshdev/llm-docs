> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller(_:didauthorizepayment:completion:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller(_:didauthorizepayment:completion:))

# paymentAuthorizationController(\_:didAuthorizePayment:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 11.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

Tells the delegate that the user authorized the payment request, and asks for a result.

> Use [paymentAuthorizationController(\_:didAuthorizePayment:handler:)](paymentauthorizationcontroller%28__didauthorizepayment_handler_%29.md) instead.

## Declaration

```swift
optional func paymentAuthorizationController(_ controller: PKPaymentAuthorizationController, didAuthorizePayment payment: PKPayment, completion: @escaping @Sendable (PKPaymentAuthorizationStatus) -> Void)
```

```swift
optional func paymentAuthorizationController(_ controller: PKPaymentAuthorizationController, didAuthorizePayment payment: PKPayment) async -> PKPaymentAuthorizationStatus
```

## Parameters

- `controller`: The payment authorization controller.
- `payment`: The authorized payment. This object contains the payment token you need to submit to your payment processor, as well as the billing and shipping information required by the payment request.
- `completion`: The completion block to call with the result of authorizing the payment.

  This block takes the following parameters:

  - **`status`**: The authorization status for the payment. For values, see [paymentAuthorizationControllerDidFinish(\_:)](paymentauthorizationcontrollerdidfinish%28__%29.md).

<a id="Discussion"></a>

## Discussion

This method is called after the payment request is authorized. You submit the payment information to your payment processor to authorize the transaction, and then call the completion block.

> **Note**

>  The delegate receives no further callbacks except [paymentAuthorizationControllerDidFinish(\_:)](paymentauthorizationcontrollerdidfinish%28__%29.md) until it has invoked the completion block.

## See Also

### Handling user’s payment authorization

- [paymentAuthorizationController(\_:didRequestMerchantSessionUpdate:)](paymentauthorizationcontroller%28__didrequestmerchantsessionupdate_%29.md): Requests an object that validates the identity of a merchant for a payment request.
- [paymentAuthorizationControllerWillAuthorizePayment(\_:)](paymentauthorizationcontrollerwillauthorizepayment%28__%29.md): Tells the delegate that the user is authorizing the payment request.
- [paymentAuthorizationController(\_:didAuthorizePayment:handler:)](paymentauthorizationcontroller%28__didauthorizepayment_handler_%29.md): Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationControllerDidFinish(\_:)](paymentauthorizationcontrollerdidfinish%28__%29.md): Tells the delegate that payment authorization has completed.

# paymentAuthorizationController:didAuthorizePayment:completion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

Tells the delegate that the user authorized the payment request, and asks for a result.

> Use [paymentAuthorizationController:didAuthorizePayment:handler:](paymentauthorizationcontroller%28__didauthorizepayment_handler_%29.md) instead.

## Declaration

```objectivec
- (void) paymentAuthorizationController:(PKPaymentAuthorizationController *) controller didAuthorizePayment:(PKPayment *) payment completion:(void (^)(PKPaymentAuthorizationStatus status)) completion;
```

## Parameters

- `controller`: The payment authorization controller.
- `payment`: The authorized payment. This object contains the payment token you need to submit to your payment processor, as well as the billing and shipping information required by the payment request.
- `completion`: The completion block to call with the result of authorizing the payment.

  This block takes the following parameters:

  - **`status`**: The authorization status for the payment. For values, see [paymentAuthorizationControllerDidFinish:](paymentauthorizationcontrollerdidfinish%28__%29.md).

<a id="Discussion"></a>

## Discussion

This method is called after the payment request is authorized. You submit the payment information to your payment processor to authorize the transaction, and then call the completion block.

> **Note**

>  The delegate receives no further callbacks except [paymentAuthorizationControllerDidFinish:](paymentauthorizationcontrollerdidfinish%28__%29.md) until it has invoked the completion block.

## See Also

### Handling user’s payment authorization

- [paymentAuthorizationController:didRequestMerchantSessionUpdate:](paymentauthorizationcontroller%28__didrequestmerchantsessionupdate_%29.md): Requests an object that validates the identity of a merchant for a payment request.
- [paymentAuthorizationControllerWillAuthorizePayment:](paymentauthorizationcontrollerwillauthorizepayment%28__%29.md): Tells the delegate that the user is authorizing the payment request.
- [paymentAuthorizationController:didAuthorizePayment:handler:](paymentauthorizationcontroller%28__didauthorizepayment_handler_%29.md): Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationControllerDidFinish:](paymentauthorizationcontrollerdidfinish%28__%29.md): Tells the delegate that payment authorization has completed.
