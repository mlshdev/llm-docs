> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller(_:didauthorizepayment:completion:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller(_:didauthorizepayment:completion:))

# paymentAuthorizationViewController(\_:didAuthorizePayment:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 11.0+ · visionOS 1.0+ (deprecated in 1.0)

Tells the delegate that the user authorized the payment request, and asks for a result.

> Use [paymentAuthorizationViewController(\_:didAuthorizePayment:handler:)](paymentauthorizationviewcontroller%28__didauthorizepayment_handler_%29.md) instead.

## Declaration

```swift
optional func paymentAuthorizationViewController(_ controller: PKPaymentAuthorizationViewController, didAuthorizePayment payment: PKPayment, completion: @escaping @Sendable (PKPaymentAuthorizationStatus) -> Void)
```

```swift
optional func paymentAuthorizationViewController(_ controller: PKPaymentAuthorizationViewController, didAuthorizePayment payment: PKPayment) async -> PKPaymentAuthorizationStatus
```

## Parameters

- `controller`: The payment authorization view controller.
- `payment`: The authorized payment. This object contains the payment token you need to submit to your payment processor, as well as the billing and shipping information required by the payment request.
- `completion`: The completion block to call with the result of authorizing the payment.

  This block takes the following parameters:

  - **`status`**: The authorization status for the payment. For values, see [PKPaymentAuthorizationStatus](../pkpaymentauthorizationstatus.md).

<a id="Discussion"></a>

## Discussion

This method is called after the payment request is authorized. You submit the payment information to your payment processor to authorize the transaction, and then call the completion block.

## See Also

### Handling user’s payment authorization

- [paymentAuthorizationViewController(\_:didRequestMerchantSessionUpdate:)](paymentauthorizationviewcontroller%28__didrequestmerchantsessionupdate_%29.md): Requests an object that validates the identity of a merchant for a payment request.
- [paymentAuthorizationViewControllerWillAuthorizePayment(\_:)](paymentauthorizationviewcontrollerwillauthorizepayment%28__%29.md): Tells the delegate that the user is authorizing the payment request.
- [paymentAuthorizationViewController(\_:didAuthorizePayment:handler:)](paymentauthorizationviewcontroller%28__didauthorizepayment_handler_%29.md): Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationViewControllerDidFinish(\_:)](paymentauthorizationviewcontrollerdidfinish%28__%29.md): Tells the delegate that payment authorization finished.
- [paymentAuthorizationViewController(\_:didSelect:handler:)](paymentauthorizationviewcontroller%28__didselect_handler_%29-3bex6.md): Tells the delegate that the user changed the payment method, and asks for an updated payment request.
- [paymentAuthorizationViewController(\_:didSelect:completion:)](paymentauthorizationviewcontroller%28__didselect_completion_%29-30s85.md): Deprecated. Tells the delegate that the user changed the payment method, and asks for an updated payment request.

# paymentAuthorizationViewController:didAuthorizePayment:completion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS · visionOS 1.0+ (deprecated in 1.0)

Tells the delegate that the user authorized the payment request, and asks for a result.

> Use [paymentAuthorizationViewController:didAuthorizePayment:handler:](paymentauthorizationviewcontroller%28__didauthorizepayment_handler_%29.md) instead.

## Declaration

```objectivec
- (void) paymentAuthorizationViewController:(PKPaymentAuthorizationViewController *) controller didAuthorizePayment:(PKPayment *) payment completion:(void (^)(PKPaymentAuthorizationStatus status)) completion;
```

## Parameters

- `controller`: The payment authorization view controller.
- `payment`: The authorized payment. This object contains the payment token you need to submit to your payment processor, as well as the billing and shipping information required by the payment request.
- `completion`: The completion block to call with the result of authorizing the payment.

  This block takes the following parameters:

  - **`status`**: The authorization status for the payment. For values, see [PKPaymentAuthorizationStatus](../pkpaymentauthorizationstatus.md).

<a id="Discussion"></a>

## Discussion

This method is called after the payment request is authorized. You submit the payment information to your payment processor to authorize the transaction, and then call the completion block.

## See Also

### Handling user’s payment authorization

- [paymentAuthorizationViewController:didRequestMerchantSessionUpdate:](paymentauthorizationviewcontroller%28__didrequestmerchantsessionupdate_%29.md): Requests an object that validates the identity of a merchant for a payment request.
- [paymentAuthorizationViewControllerWillAuthorizePayment:](paymentauthorizationviewcontrollerwillauthorizepayment%28__%29.md): Tells the delegate that the user is authorizing the payment request.
- [paymentAuthorizationViewController:didAuthorizePayment:handler:](paymentauthorizationviewcontroller%28__didauthorizepayment_handler_%29.md): Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationViewControllerDidFinish:](paymentauthorizationviewcontrollerdidfinish%28__%29.md): Tells the delegate that payment authorization finished.
- [paymentAuthorizationViewController:didSelectPaymentMethod:handler:](paymentauthorizationviewcontroller%28__didselect_handler_%29-3bex6.md): Tells the delegate that the user changed the payment method, and asks for an updated payment request.
- [paymentAuthorizationViewController:didSelectPaymentMethod:completion:](paymentauthorizationviewcontroller%28__didselect_completion_%29-30s85.md): Deprecated. Tells the delegate that the user changed the payment method, and asks for an updated payment request.
