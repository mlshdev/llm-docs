> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequestpaymentmethodupdate](https://developer.apple.com/documentation/passkit/pkpaymentrequestpaymentmethodupdate)

# PKPaymentRequestPaymentMethodUpdate (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An object that updates the payment request after the payment method changes.

## Declaration

```swift
class PKPaymentRequestPaymentMethodUpdate
```

<a id="overview"></a>

## Overview

This is the handler for [paymentAuthorizationController(\_:didSelectPaymentMethod:handler:)](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didselectpaymentmethod_handler_%29.md) and [paymentAuthorizationViewController(\_:didSelect:handler:)](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didselect_handler_%29-3bex6.md). Update the summary items to reflect the change in payment method.

## Topics

### Creating a payment request update

- [init(errors:paymentSummaryItems:)](pkpaymentrequestpaymentmethodupdate/init%28errors_paymentsummaryitems_%29.md): Creates a payment-method update with your specified payment summary items.

### Getting user errors

- [errors](pkpaymentrequestpaymentmethodupdate/errors.md): An array of payment-method errors that the user must resolve.

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
- [PKPaymentRequestShippingContactUpdate](pkpaymentrequestshippingcontactupdate.md): An object that updates the payment request after the shipping contact information changes.
- [PKPaymentRequestShippingMethodUpdate](pkpaymentrequestshippingmethodupdate.md): An object that updates the payment request after the shipping method changed.
- [PKPaymentRequestCouponCodeUpdate](pkpaymentrequestcouponcodeupdate.md): An object that updates the payment request after the coupon code changes.
- [PKPaymentRequestUpdate](pkpaymentrequestupdate.md): The base class for updating the payment request after the user makes changes on the payment sheet.

# PKPaymentRequestPaymentMethodUpdate (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An object that updates the payment request after the payment method changes.

## Declaration

```objectivec
@interface PKPaymentRequestPaymentMethodUpdate : PKPaymentRequestUpdate
```

<a id="overview"></a>

## Overview

This is the handler for [paymentAuthorizationController:didSelectPaymentMethod:handler:](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didselectpaymentmethod_handler_%29.md) and [paymentAuthorizationViewController:didSelectPaymentMethod:handler:](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didselect_handler_%29-3bex6.md). Update the summary items to reflect the change in payment method.

## Topics

### Creating a payment request update

- [initWithErrors:paymentSummaryItems:](pkpaymentrequestpaymentmethodupdate/init%28errors_paymentsummaryitems_%29.md): Creates a payment-method update with your specified payment summary items.

### Getting user errors

- [errors](pkpaymentrequestpaymentmethodupdate/errors.md): An array of payment-method errors that the user must resolve.

## Relationships

### Inherits From

- [PKPaymentRequestUpdate](pkpaymentrequestupdate.md)

## See Also

### Payment sheet updates

- [PKPaymentRequestMerchantSessionUpdate](pkpaymentrequestmerchantsessionupdate.md): An object that updates a payment request with a merchant validation.
- [PKPaymentRequestShippingContactUpdate](pkpaymentrequestshippingcontactupdate.md): An object that updates the payment request after the shipping contact information changes.
- [PKPaymentRequestShippingMethodUpdate](pkpaymentrequestshippingmethodupdate.md): An object that updates the payment request after the shipping method changed.
- [PKPaymentRequestCouponCodeUpdate](pkpaymentrequestcouponcodeupdate.md): An object that updates the payment request after the coupon code changes.
- [PKPaymentRequestUpdate](pkpaymentrequestupdate.md): The base class for updating the payment request after the user makes changes on the payment sheet.
