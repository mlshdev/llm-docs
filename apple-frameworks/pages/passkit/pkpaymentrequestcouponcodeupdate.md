> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequestcouponcodeupdate](https://developer.apple.com/documentation/passkit/pkpaymentrequestcouponcodeupdate)

# PKPaymentRequestCouponCodeUpdate (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

An object that updates the payment request after the coupon code changes.

## Declaration

```swift
class PKPaymentRequestCouponCodeUpdate
```

<a id="overview"></a>

## Overview

This is the handler for [paymentAuthorizationController(\_:didChangeCouponCode:handler:)](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didchangecouponcode_handler_%29.md) and [paymentAuthorizationViewController(\_:didChangeCouponCode:handler:)](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didchangecouponcode_handler_%29.md).

Use this object to update the summary items to reflect the change in the coupon code.

> **Note**

>  A coupon code error doesn’t block payment authorization.

## Topics

### Creating a payment coupon update object

- [init(errors:paymentSummaryItems:shippingMethods:)](pkpaymentrequestcouponcodeupdate/init%28errors_paymentsummaryitems_shippingmethods_%29.md): Creates a payment coupon update with your specified payment summary items, errors, and shipping methods.

### Reading errors

- [errors](pkpaymentrequestcouponcodeupdate/errors.md): An array of errors for the coupon code that the user must resolve.

## Relationships

### Inherits From

- [PKPaymentRequestUpdate](pkpaymentrequestupdate.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Payment sheet updates

- [PKPaymentRequestMerchantSessionUpdate](pkpaymentrequestmerchantsessionupdate.md): An object that updates a payment request with a merchant validation.
- [PKPaymentRequestPaymentMethodUpdate](pkpaymentrequestpaymentmethodupdate.md): An object that updates the payment request after the payment method changes.
- [PKPaymentRequestShippingContactUpdate](pkpaymentrequestshippingcontactupdate.md): An object that updates the payment request after the shipping contact information changes.
- [PKPaymentRequestShippingMethodUpdate](pkpaymentrequestshippingmethodupdate.md): An object that updates the payment request after the shipping method changed.
- [PKPaymentRequestUpdate](pkpaymentrequestupdate.md): The base class for updating the payment request after the user makes changes on the payment sheet.

# PKPaymentRequestCouponCodeUpdate (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

An object that updates the payment request after the coupon code changes.

## Declaration

```objectivec
@interface PKPaymentRequestCouponCodeUpdate : PKPaymentRequestUpdate
```

<a id="overview"></a>

## Overview

This is the handler for [paymentAuthorizationController:didChangeCouponCode:handler:](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didchangecouponcode_handler_%29.md) and [paymentAuthorizationViewController:didChangeCouponCode:handler:](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didchangecouponcode_handler_%29.md).

Use this object to update the summary items to reflect the change in the coupon code.

> **Note**

>  A coupon code error doesn’t block payment authorization.

## Topics

### Creating a payment coupon update object

- [initWithErrors:paymentSummaryItems:shippingMethods:](pkpaymentrequestcouponcodeupdate/init%28errors_paymentsummaryitems_shippingmethods_%29.md): Creates a payment coupon update with your specified payment summary items, errors, and shipping methods.

### Reading errors

- [errors](pkpaymentrequestcouponcodeupdate/errors.md): An array of errors for the coupon code that the user must resolve.

## Relationships

### Inherits From

- [PKPaymentRequestUpdate](pkpaymentrequestupdate.md)

## See Also

### Payment sheet updates

- [PKPaymentRequestMerchantSessionUpdate](pkpaymentrequestmerchantsessionupdate.md): An object that updates a payment request with a merchant validation.
- [PKPaymentRequestPaymentMethodUpdate](pkpaymentrequestpaymentmethodupdate.md): An object that updates the payment request after the payment method changes.
- [PKPaymentRequestShippingContactUpdate](pkpaymentrequestshippingcontactupdate.md): An object that updates the payment request after the shipping contact information changes.
- [PKPaymentRequestShippingMethodUpdate](pkpaymentrequestshippingmethodupdate.md): An object that updates the payment request after the shipping method changed.
- [PKPaymentRequestUpdate](pkpaymentrequestupdate.md): The base class for updating the payment request after the user makes changes on the payment sheet.
