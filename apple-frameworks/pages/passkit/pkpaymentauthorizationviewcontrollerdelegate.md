> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationviewcontrollerdelegate](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationviewcontrollerdelegate)

# PKPaymentAuthorizationViewControllerDelegate (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Methods that let you respond to user interactions with your payment authorization view controller.

## Declaration

```swift
protocol PKPaymentAuthorizationViewControllerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The [PKPaymentAuthorizationViewControllerDelegate](pkpaymentauthorizationviewcontrollerdelegate.md) protocol is implemented by the payment authorization view controller’s delegate. You implement this protocol to respond to user interaction with that view controller.

The payment authorization view controller automatically waits for its delegate to finish responding to one method before it calls other delegate methods. You indicate that the delegate is finished with the current method by calling that method’s completion block. This action tells the pay authorization view controller to proceed with the next step in the authorization process.

There is one exception to this step-by-step procedure: The pay authorization view controller calls the [paymentAuthorizationViewControllerDidFinish(\_:)](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontrollerdidfinish%28__%29.md) method as soon as the user cancels a payment without authorizing a payment request, or when a payment is canceled after timing out. The controller can call this method at any time.

## Topics

### Handling user’s payment authorization

- [paymentAuthorizationViewController(\_:didRequestMerchantSessionUpdate:)](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didrequestmerchantsessionupdate_%29.md): Requests an object that validates the identity of a merchant for a payment request.
- [paymentAuthorizationViewControllerWillAuthorizePayment(\_:)](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontrollerwillauthorizepayment%28__%29.md): Tells the delegate that the user is authorizing the payment request.
- [paymentAuthorizationViewController(\_:didAuthorizePayment:handler:)](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didauthorizepayment_handler_%29.md): Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationViewController(\_:didAuthorizePayment:completion:)](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didauthorizepayment_completion_%29.md): Deprecated. Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationViewControllerDidFinish(\_:)](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontrollerdidfinish%28__%29.md): Tells the delegate that payment authorization finished.
- [paymentAuthorizationViewController(\_:didSelect:handler:)](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didselect_handler_%29-3bex6.md): Tells the delegate that the user changed the payment method, and asks for an updated payment request.
- [paymentAuthorizationViewController(\_:didSelect:completion:)](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didselect_completion_%29-30s85.md): Deprecated. Tells the delegate that the user changed the payment method, and asks for an updated payment request.

### Handling coupons

- [paymentAuthorizationViewController(\_:didChangeCouponCode:handler:)](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didchangecouponcode_handler_%29.md): Tells the delegate that the user entered or updated a coupon code.

### Handling shipping information

- [paymentAuthorizationViewController(\_:didSelectShippingContact:handler:)](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didselectshippingcontact_handler_%29.md): Tells the delegate that the user selected a shipping address, and asks for an updated payment request.
- [paymentAuthorizationViewController(\_:didSelectShippingContact:completion:)](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didselectshippingcontact_completion_%29.md): Deprecated. Tells the delegate that the user selected a shipping address, and asks for an updated payment request.
- [paymentAuthorizationViewController(\_:didSelect:handler:)](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didselect_handler_%29-5r0i7.md): Tells the delegate that the user selected a shipping method, and asks for an updated payment request.
- [paymentAuthorizationViewController(\_:didSelect:completion:)](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didselect_completion_%29-9otrj.md): Deprecated. Tells the delegate that the user selected a shipping method, and asks for an updated payment request.

### Deprecated

- [paymentAuthorizationViewController(\_:didSelectShippingAddress:completion:)](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didselectshippingaddress_completion_%29.md): Deprecated. Tells the delegate that the user selected a shipping address.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Handling user interactions

- [delegate](pkpaymentauthorizationviewcontroller/delegate.md): The view controller’s delegate.

# PKPaymentAuthorizationViewControllerDelegate (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Methods that let you respond to user interactions with your payment authorization view controller.

## Declaration

```objectivec
@protocol PKPaymentAuthorizationViewControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The [PKPaymentAuthorizationViewControllerDelegate](pkpaymentauthorizationviewcontrollerdelegate.md) protocol is implemented by the payment authorization view controller’s delegate. You implement this protocol to respond to user interaction with that view controller.

The payment authorization view controller automatically waits for its delegate to finish responding to one method before it calls other delegate methods. You indicate that the delegate is finished with the current method by calling that method’s completion block. This action tells the pay authorization view controller to proceed with the next step in the authorization process.

There is one exception to this step-by-step procedure: The pay authorization view controller calls the [paymentAuthorizationViewControllerDidFinish:](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontrollerdidfinish%28__%29.md) method as soon as the user cancels a payment without authorizing a payment request, or when a payment is canceled after timing out. The controller can call this method at any time.

## Topics

### Handling user’s payment authorization

- [paymentAuthorizationViewController:didRequestMerchantSessionUpdate:](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didrequestmerchantsessionupdate_%29.md): Requests an object that validates the identity of a merchant for a payment request.
- [paymentAuthorizationViewControllerWillAuthorizePayment:](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontrollerwillauthorizepayment%28__%29.md): Tells the delegate that the user is authorizing the payment request.
- [paymentAuthorizationViewController:didAuthorizePayment:handler:](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didauthorizepayment_handler_%29.md): Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationViewController:didAuthorizePayment:completion:](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didauthorizepayment_completion_%29.md): Deprecated. Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationViewControllerDidFinish:](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontrollerdidfinish%28__%29.md): Tells the delegate that payment authorization finished.
- [paymentAuthorizationViewController:didSelectPaymentMethod:handler:](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didselect_handler_%29-3bex6.md): Tells the delegate that the user changed the payment method, and asks for an updated payment request.
- [paymentAuthorizationViewController:didSelectPaymentMethod:completion:](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didselect_completion_%29-30s85.md): Deprecated. Tells the delegate that the user changed the payment method, and asks for an updated payment request.

### Handling coupons

- [paymentAuthorizationViewController:didChangeCouponCode:handler:](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didchangecouponcode_handler_%29.md): Tells the delegate that the user entered or updated a coupon code.

### Handling shipping information

- [paymentAuthorizationViewController:didSelectShippingContact:handler:](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didselectshippingcontact_handler_%29.md): Tells the delegate that the user selected a shipping address, and asks for an updated payment request.
- [paymentAuthorizationViewController:didSelectShippingContact:completion:](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didselectshippingcontact_completion_%29.md): Deprecated. Tells the delegate that the user selected a shipping address, and asks for an updated payment request.
- [paymentAuthorizationViewController:didSelectShippingMethod:handler:](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didselect_handler_%29-5r0i7.md): Tells the delegate that the user selected a shipping method, and asks for an updated payment request.
- [paymentAuthorizationViewController:didSelectShippingMethod:completion:](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didselect_completion_%29-9otrj.md): Deprecated. Tells the delegate that the user selected a shipping method, and asks for an updated payment request.

### Deprecated

- [paymentAuthorizationViewController:didSelectShippingAddress:completion:](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didselectshippingaddress_completion_%29.md): Deprecated. Tells the delegate that the user selected a shipping address.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Handling user interactions

- [delegate](pkpaymentauthorizationviewcontroller/delegate.md): The view controller’s delegate.
