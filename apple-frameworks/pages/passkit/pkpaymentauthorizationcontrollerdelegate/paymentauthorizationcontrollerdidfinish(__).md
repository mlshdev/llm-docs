> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontrollerdidfinish(_:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontrollerdidfinish(_:))

# paymentAuthorizationControllerDidFinish(\_:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Tells the delegate that payment authorization has completed.

## Declaration

```swift
@MainActor func paymentAuthorizationControllerDidFinish(_ controller: PKPaymentAuthorizationController)
```

## Parameters

- `controller`: The payment authorization controller.

<a id="Discussion"></a>

## Discussion

Use this method to dismiss the payment authorization controller and update any other app state.

When the user authorizes a payment request, this method is called after the user is shown the status from the [paymentAuthorizationController(\_:didAuthorizePayment:completion:)](paymentauthorizationcontroller%28__didauthorizepayment_completion_%29.md) method’s completion block. When the user cancels without authorizing the payment request, only `paymentAuthorizationControllerDidFinish:` is called.

## See Also

### Handling user’s payment authorization

- [paymentAuthorizationController(\_:didRequestMerchantSessionUpdate:)](paymentauthorizationcontroller%28__didrequestmerchantsessionupdate_%29.md): Requests an object that validates the identity of a merchant for a payment request.
- [paymentAuthorizationControllerWillAuthorizePayment(\_:)](paymentauthorizationcontrollerwillauthorizepayment%28__%29.md): Tells the delegate that the user is authorizing the payment request.
- [paymentAuthorizationController(\_:didAuthorizePayment:handler:)](paymentauthorizationcontroller%28__didauthorizepayment_handler_%29.md): Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationController(\_:didAuthorizePayment:completion:)](paymentauthorizationcontroller%28__didauthorizepayment_completion_%29.md): Deprecated. Tells the delegate that the user authorized the payment request, and asks for a result.

# paymentAuthorizationControllerDidFinish: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Tells the delegate that payment authorization has completed.

## Declaration

```objectivec
- (void) paymentAuthorizationControllerDidFinish:(PKPaymentAuthorizationController *) controller;
```

## Parameters

- `controller`: The payment authorization controller.

<a id="Discussion"></a>

## Discussion

Use this method to dismiss the payment authorization controller and update any other app state.

When the user authorizes a payment request, this method is called after the user is shown the status from the [paymentAuthorizationController:didAuthorizePayment:completion:](paymentauthorizationcontroller%28__didauthorizepayment_completion_%29.md) method’s completion block. When the user cancels without authorizing the payment request, only `paymentAuthorizationControllerDidFinish:` is called.

## See Also

### Handling user’s payment authorization

- [paymentAuthorizationController:didRequestMerchantSessionUpdate:](paymentauthorizationcontroller%28__didrequestmerchantsessionupdate_%29.md): Requests an object that validates the identity of a merchant for a payment request.
- [paymentAuthorizationControllerWillAuthorizePayment:](paymentauthorizationcontrollerwillauthorizepayment%28__%29.md): Tells the delegate that the user is authorizing the payment request.
- [paymentAuthorizationController:didAuthorizePayment:handler:](paymentauthorizationcontroller%28__didauthorizepayment_handler_%29.md): Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationController:didAuthorizePayment:completion:](paymentauthorizationcontroller%28__didauthorizepayment_completion_%29.md): Deprecated. Tells the delegate that the user authorized the payment request, and asks for a result.
