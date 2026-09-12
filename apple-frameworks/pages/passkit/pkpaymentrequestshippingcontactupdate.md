> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequestshippingcontactupdate](https://developer.apple.com/documentation/passkit/pkpaymentrequestshippingcontactupdate)

# PKPaymentRequestShippingContactUpdate (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An object that updates the payment request after the shipping contact information changes.

## Declaration

```swift
class PKPaymentRequestShippingContactUpdate
```

<a id="overview"></a>

## Overview

This is the handler for [paymentAuthorizationController(\_:didSelectShippingContact:handler:)](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didselectshippingcontact_handler_%29.md) and [paymentAuthorizationViewController(\_:didSelectShippingContact:handler:)](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didselectshippingcontact_handler_%29.md).

Use this object to update the available shipping methods and, if the user has selected a shipping method, the current shipping cost.

## Topics

### Creating a shipping contact update

- [init(errors:paymentSummaryItems:shippingMethods:)](pkpaymentrequestshippingcontactupdate/init%28errors_paymentsummaryitems_shippingmethods_%29.md): Creates a shipping contact update with your specified payment summary items and shipping methods.

### Updating user errors and shipping methods

- [errors](pkpaymentrequestshippingcontactupdate/errors.md): An array of shipping contact information errors that the user must resolve.
- [shippingMethods](pkpaymentrequestshippingcontactupdate/shippingmethods.md): An array of shipping methods.

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
- [PKPaymentRequestShippingMethodUpdate](pkpaymentrequestshippingmethodupdate.md): An object that updates the payment request after the shipping method changed.
- [PKPaymentRequestCouponCodeUpdate](pkpaymentrequestcouponcodeupdate.md): An object that updates the payment request after the coupon code changes.
- [PKPaymentRequestUpdate](pkpaymentrequestupdate.md): The base class for updating the payment request after the user makes changes on the payment sheet.

# PKPaymentRequestShippingContactUpdate (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An object that updates the payment request after the shipping contact information changes.

## Declaration

```objectivec
@interface PKPaymentRequestShippingContactUpdate : PKPaymentRequestUpdate
```

<a id="overview"></a>

## Overview

This is the handler for [paymentAuthorizationController:didSelectShippingContact:handler:](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didselectshippingcontact_handler_%29.md) and [paymentAuthorizationViewController:didSelectShippingContact:handler:](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didselectshippingcontact_handler_%29.md).

Use this object to update the available shipping methods and, if the user has selected a shipping method, the current shipping cost.

## Topics

### Creating a shipping contact update

- [initWithErrors:paymentSummaryItems:shippingMethods:](pkpaymentrequestshippingcontactupdate/init%28errors_paymentsummaryitems_shippingmethods_%29.md): Creates a shipping contact update with your specified payment summary items and shipping methods.

### Updating user errors and shipping methods

- [errors](pkpaymentrequestshippingcontactupdate/errors.md): An array of shipping contact information errors that the user must resolve.
- [shippingMethods](pkpaymentrequestshippingcontactupdate/shippingmethods.md): An array of shipping methods.

## Relationships

### Inherits From

- [PKPaymentRequestUpdate](pkpaymentrequestupdate.md)

## See Also

### Payment sheet updates

- [PKPaymentRequestMerchantSessionUpdate](pkpaymentrequestmerchantsessionupdate.md): An object that updates a payment request with a merchant validation.
- [PKPaymentRequestPaymentMethodUpdate](pkpaymentrequestpaymentmethodupdate.md): An object that updates the payment request after the payment method changes.
- [PKPaymentRequestShippingMethodUpdate](pkpaymentrequestshippingmethodupdate.md): An object that updates the payment request after the shipping method changed.
- [PKPaymentRequestCouponCodeUpdate](pkpaymentrequestcouponcodeupdate.md): An object that updates the payment request after the coupon code changes.
- [PKPaymentRequestUpdate](pkpaymentrequestupdate.md): The base class for updating the payment request after the user makes changes on the payment sheet.
