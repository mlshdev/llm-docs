> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationcontrollerdelegate](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontrollerdelegate)

# PKPaymentAuthorizationControllerDelegate (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Methods that let you respond to user interactions with your payment authorization controller.

## Declaration

```swift
protocol PKPaymentAuthorizationControllerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The [PKPaymentAuthorizationControllerDelegate](pkpaymentauthorizationcontrollerdelegate.md) protocol is implemented by the payment authorization controller’s delegate. You implement this protocol to respond to user interaction with that controller.

In most cases, the payment authorization controller automatically waits for its delegate to finish responding to one method before it calls other delegate methods. You indicate that the delegate is finished with the current method by calling that method’s completion block. This action tells the pay authorization controller to proceed with the next step in the authorization process.

There is one exception to this step-by-step procedure: The pay authorization controller calls the [paymentAuthorizationControllerDidFinish(\_:)](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontrollerdidfinish%28__%29.md) method as soon as the user cancels a payment without authorizing. The controller can call this method at any time.

## Topics

### Handling user interactions

- [presentationWindow(for:)](pkpaymentauthorizationcontrollerdelegate/presentationwindow%28for_%29.md): Returns the window in which to present a payment authorization sheet.

### Handling user’s payment method selection

- [paymentAuthorizationController(\_:didSelectPaymentMethod:handler:)](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didselectpaymentmethod_handler_%29.md): Tells the delegate that the user changed the payment method, and asks for an updated payment request.
- [paymentAuthorizationController(\_:didSelectPaymentMethod:completion:)](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didselectpaymentmethod_completion_%29.md): Deprecated. Tells the delegate that the user changed the payment method, and asks for an updated payment request.

### Handling coupons

- [paymentAuthorizationController(\_:didChangeCouponCode:handler:)](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didchangecouponcode_handler_%29.md): Tells the delegate that the user entered or updated a coupon code.

### Handling shipping information

- [paymentAuthorizationController(\_:didSelectShippingContact:handler:)](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didselectshippingcontact_handler_%29.md): Tells the delegate that the user selected a shipping address.
- [paymentAuthorizationController(\_:didSelectShippingContact:completion:)](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didselectshippingcontact_completion_%29.md): Deprecated. Tells the delegate that the user selected a shipping address.
- [paymentAuthorizationController(\_:didSelectShippingMethod:handler:)](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didselectshippingmethod_handler_%29.md): Tells the delegate that the user selected a shipping method.
- [paymentAuthorizationController(\_:didSelectShippingMethod:completion:)](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didselectshippingmethod_completion_%29.md): Deprecated. Tells the delegate that the user selected a shipping method.

### Handling user’s payment authorization

- [paymentAuthorizationController(\_:didRequestMerchantSessionUpdate:)](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didrequestmerchantsessionupdate_%29.md): Requests an object that validates the identity of a merchant for a payment request.
- [paymentAuthorizationControllerWillAuthorizePayment(\_:)](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontrollerwillauthorizepayment%28__%29.md): Tells the delegate that the user is authorizing the payment request.
- [paymentAuthorizationController(\_:didAuthorizePayment:handler:)](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didauthorizepayment_handler_%29.md): Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationController(\_:didAuthorizePayment:completion:)](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didauthorizepayment_completion_%29.md): Deprecated. Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationControllerDidFinish(\_:)](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontrollerdidfinish%28__%29.md): Tells the delegate that payment authorization has completed.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Handling user interactions

- [delegate](pkpaymentauthorizationcontroller/delegate.md): The controller’s delegate.
- [present(completion:)](pkpaymentauthorizationcontroller/present%28completion_%29.md): Presents the payment sheet modally over your app.
- [dismiss(completion:)](pkpaymentauthorizationcontroller/dismiss%28completion_%29.md): Dismisses the payment sheet.

# PKPaymentAuthorizationControllerDelegate (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Methods that let you respond to user interactions with your payment authorization controller.

## Declaration

```objectivec
@protocol PKPaymentAuthorizationControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The [PKPaymentAuthorizationControllerDelegate](pkpaymentauthorizationcontrollerdelegate.md) protocol is implemented by the payment authorization controller’s delegate. You implement this protocol to respond to user interaction with that controller.

In most cases, the payment authorization controller automatically waits for its delegate to finish responding to one method before it calls other delegate methods. You indicate that the delegate is finished with the current method by calling that method’s completion block. This action tells the pay authorization controller to proceed with the next step in the authorization process.

There is one exception to this step-by-step procedure: The pay authorization controller calls the [paymentAuthorizationControllerDidFinish:](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontrollerdidfinish%28__%29.md) method as soon as the user cancels a payment without authorizing. The controller can call this method at any time.

## Topics

### Handling user interactions

- [presentationWindowForPaymentAuthorizationController:](pkpaymentauthorizationcontrollerdelegate/presentationwindow%28for_%29.md): Returns the window in which to present a payment authorization sheet.

### Handling user’s payment method selection

- [paymentAuthorizationController:didSelectPaymentMethod:handler:](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didselectpaymentmethod_handler_%29.md): Tells the delegate that the user changed the payment method, and asks for an updated payment request.
- [paymentAuthorizationController:didSelectPaymentMethod:completion:](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didselectpaymentmethod_completion_%29.md): Deprecated. Tells the delegate that the user changed the payment method, and asks for an updated payment request.

### Handling coupons

- [paymentAuthorizationController:didChangeCouponCode:handler:](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didchangecouponcode_handler_%29.md): Tells the delegate that the user entered or updated a coupon code.

### Handling shipping information

- [paymentAuthorizationController:didSelectShippingContact:handler:](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didselectshippingcontact_handler_%29.md): Tells the delegate that the user selected a shipping address.
- [paymentAuthorizationController:didSelectShippingContact:completion:](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didselectshippingcontact_completion_%29.md): Deprecated. Tells the delegate that the user selected a shipping address.
- [paymentAuthorizationController:didSelectShippingMethod:handler:](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didselectshippingmethod_handler_%29.md): Tells the delegate that the user selected a shipping method.
- [paymentAuthorizationController:didSelectShippingMethod:completion:](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didselectshippingmethod_completion_%29.md): Deprecated. Tells the delegate that the user selected a shipping method.

### Handling user’s payment authorization

- [paymentAuthorizationController:didRequestMerchantSessionUpdate:](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didrequestmerchantsessionupdate_%29.md): Requests an object that validates the identity of a merchant for a payment request.
- [paymentAuthorizationControllerWillAuthorizePayment:](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontrollerwillauthorizepayment%28__%29.md): Tells the delegate that the user is authorizing the payment request.
- [paymentAuthorizationController:didAuthorizePayment:handler:](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didauthorizepayment_handler_%29.md): Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationController:didAuthorizePayment:completion:](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didauthorizepayment_completion_%29.md): Deprecated. Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationControllerDidFinish:](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontrollerdidfinish%28__%29.md): Tells the delegate that payment authorization has completed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Handling user interactions

- [delegate](pkpaymentauthorizationcontroller/delegate.md): The controller’s delegate.
- [presentWithCompletion:](pkpaymentauthorizationcontroller/present%28completion_%29.md): Presents the payment sheet modally over your app.
- [dismissWithCompletion:](pkpaymentauthorizationcontroller/dismiss%28completion_%29.md): Dismisses the payment sheet.
