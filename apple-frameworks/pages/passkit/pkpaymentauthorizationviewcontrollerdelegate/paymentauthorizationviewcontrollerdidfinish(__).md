> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontrollerdidfinish(_:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontrollerdidfinish(_:))

# paymentAuthorizationViewControllerDidFinish(\_:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+

Tells the delegate that payment authorization finished.

## Declaration

```swift
func paymentAuthorizationViewControllerDidFinish(_ controller: PKPaymentAuthorizationViewController)
```

## Parameters

- `controller`: The payment authorization view controller.

<a id="Discussion"></a>

## Discussion

This delegate method is called every time a payment finishes. A payment may finish because authorization was completed in [paymentAuthorizationViewController(\_:didAuthorizePayment:handler:)](paymentauthorizationviewcontroller%28__didauthorizepayment_handler_%29.md), because authorization timed out, or because the user canceled the payment.

> **Important**

>  Make any needed payment-related updates to your app’s state in this delegate method, especially if the payment is canceled or times out. Also, be sure to call [dismiss(completion:)](../pkpaymentauthorizationcontroller/dismiss%28completion_%29.md) on the payment authorization view controller.

## See Also

### Handling user’s payment authorization

- [paymentAuthorizationViewController(\_:didRequestMerchantSessionUpdate:)](paymentauthorizationviewcontroller%28__didrequestmerchantsessionupdate_%29.md): Requests an object that validates the identity of a merchant for a payment request.
- [paymentAuthorizationViewControllerWillAuthorizePayment(\_:)](paymentauthorizationviewcontrollerwillauthorizepayment%28__%29.md): Tells the delegate that the user is authorizing the payment request.
- [paymentAuthorizationViewController(\_:didAuthorizePayment:handler:)](paymentauthorizationviewcontroller%28__didauthorizepayment_handler_%29.md): Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationViewController(\_:didAuthorizePayment:completion:)](paymentauthorizationviewcontroller%28__didauthorizepayment_completion_%29.md): Deprecated. Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationViewController(\_:didSelect:handler:)](paymentauthorizationviewcontroller%28__didselect_handler_%29-3bex6.md): Tells the delegate that the user changed the payment method, and asks for an updated payment request.
- [paymentAuthorizationViewController(\_:didSelect:completion:)](paymentauthorizationviewcontroller%28__didselect_completion_%29-30s85.md): Deprecated. Tells the delegate that the user changed the payment method, and asks for an updated payment request.

# paymentAuthorizationViewControllerDidFinish: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Tells the delegate that payment authorization finished.

## Declaration

```objectivec
- (void) paymentAuthorizationViewControllerDidFinish:(PKPaymentAuthorizationViewController *) controller;
```

## Parameters

- `controller`: The payment authorization view controller.

<a id="Discussion"></a>

## Discussion

This delegate method is called every time a payment finishes. A payment may finish because authorization was completed in [paymentAuthorizationViewController:didAuthorizePayment:handler:](paymentauthorizationviewcontroller%28__didauthorizepayment_handler_%29.md), because authorization timed out, or because the user canceled the payment.

> **Important**

>  Make any needed payment-related updates to your app’s state in this delegate method, especially if the payment is canceled or times out. Also, be sure to call [dismissWithCompletion:](../pkpaymentauthorizationcontroller/dismiss%28completion_%29.md) on the payment authorization view controller.

## See Also

### Handling user’s payment authorization

- [paymentAuthorizationViewController:didRequestMerchantSessionUpdate:](paymentauthorizationviewcontroller%28__didrequestmerchantsessionupdate_%29.md): Requests an object that validates the identity of a merchant for a payment request.
- [paymentAuthorizationViewControllerWillAuthorizePayment:](paymentauthorizationviewcontrollerwillauthorizepayment%28__%29.md): Tells the delegate that the user is authorizing the payment request.
- [paymentAuthorizationViewController:didAuthorizePayment:handler:](paymentauthorizationviewcontroller%28__didauthorizepayment_handler_%29.md): Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationViewController:didAuthorizePayment:completion:](paymentauthorizationviewcontroller%28__didauthorizepayment_completion_%29.md): Deprecated. Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationViewController:didSelectPaymentMethod:handler:](paymentauthorizationviewcontroller%28__didselect_handler_%29-3bex6.md): Tells the delegate that the user changed the payment method, and asks for an updated payment request.
- [paymentAuthorizationViewController:didSelectPaymentMethod:completion:](paymentauthorizationviewcontroller%28__didselect_completion_%29-30s85.md): Deprecated. Tells the delegate that the user changed the payment method, and asks for an updated payment request.
