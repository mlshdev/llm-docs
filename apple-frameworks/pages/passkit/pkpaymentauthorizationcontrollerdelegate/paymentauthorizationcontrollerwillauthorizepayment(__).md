> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontrollerwillauthorizepayment(_:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontrollerwillauthorizepayment(_:))

# paymentAuthorizationControllerWillAuthorizePayment(\_:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Tells the delegate that the user is authorizing the payment request.

## Declaration

```swift
@MainActor optional func paymentAuthorizationControllerWillAuthorizePayment(_ controller: PKPaymentAuthorizationController)
```

## Parameters

- `controller`: The payment authorization controller.

<a id="Discussion"></a>

## Discussion

This method is called before the payment request is authorized but after the user has authenticated by using either a passcode, Touch ID, or Face ID.

## See Also

### Handling user’s payment authorization

- [paymentAuthorizationController(\_:didRequestMerchantSessionUpdate:)](paymentauthorizationcontroller%28__didrequestmerchantsessionupdate_%29.md): Requests an object that validates the identity of a merchant for a payment request.
- [paymentAuthorizationController(\_:didAuthorizePayment:handler:)](paymentauthorizationcontroller%28__didauthorizepayment_handler_%29.md): Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationController(\_:didAuthorizePayment:completion:)](paymentauthorizationcontroller%28__didauthorizepayment_completion_%29.md): Deprecated. Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationControllerDidFinish(\_:)](paymentauthorizationcontrollerdidfinish%28__%29.md): Tells the delegate that payment authorization has completed.

# paymentAuthorizationControllerWillAuthorizePayment: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Tells the delegate that the user is authorizing the payment request.

## Declaration

```objectivec
- (void) paymentAuthorizationControllerWillAuthorizePayment:(PKPaymentAuthorizationController *) controller;
```

## Parameters

- `controller`: The payment authorization controller.

<a id="Discussion"></a>

## Discussion

This method is called before the payment request is authorized but after the user has authenticated by using either a passcode, Touch ID, or Face ID.

## See Also

### Handling user’s payment authorization

- [paymentAuthorizationController:didRequestMerchantSessionUpdate:](paymentauthorizationcontroller%28__didrequestmerchantsessionupdate_%29.md): Requests an object that validates the identity of a merchant for a payment request.
- [paymentAuthorizationController:didAuthorizePayment:handler:](paymentauthorizationcontroller%28__didauthorizepayment_handler_%29.md): Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationController:didAuthorizePayment:completion:](paymentauthorizationcontroller%28__didauthorizepayment_completion_%29.md): Deprecated. Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationControllerDidFinish:](paymentauthorizationcontrollerdidfinish%28__%29.md): Tells the delegate that payment authorization has completed.
