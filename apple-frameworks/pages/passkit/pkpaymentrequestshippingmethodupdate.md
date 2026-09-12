> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequestshippingmethodupdate](https://developer.apple.com/documentation/passkit/pkpaymentrequestshippingmethodupdate)

# PKPaymentRequestShippingMethodUpdate (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An object that updates the payment request after the shipping method changed.

## Declaration

```swift
class PKPaymentRequestShippingMethodUpdate
```

<a id="overview"></a>

## Overview

This is the handler for [paymentAuthorizationController(\_:didSelectShippingMethod:handler:)](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didselectshippingmethod_handler_%29.md) and [paymentAuthorizationViewController(\_:didSelect:handler:)](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didselect_handler_%29-5r0i7.md).

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
- [PKPaymentRequestCouponCodeUpdate](pkpaymentrequestcouponcodeupdate.md): An object that updates the payment request after the coupon code changes.
- [PKPaymentRequestUpdate](pkpaymentrequestupdate.md): The base class for updating the payment request after the user makes changes on the payment sheet.

# PKPaymentRequestShippingMethodUpdate (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An object that updates the payment request after the shipping method changed.

## Declaration

```objectivec
@interface PKPaymentRequestShippingMethodUpdate : PKPaymentRequestUpdate
```

<a id="overview"></a>

## Overview

This is the handler for [paymentAuthorizationController:didSelectShippingMethod:handler:](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didselectshippingmethod_handler_%29.md) and [paymentAuthorizationViewController:didSelectShippingMethod:handler:](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didselect_handler_%29-5r0i7.md).

## Relationships

### Inherits From

- [PKPaymentRequestUpdate](pkpaymentrequestupdate.md)

## See Also

### Payment sheet updates

- [PKPaymentRequestMerchantSessionUpdate](pkpaymentrequestmerchantsessionupdate.md): An object that updates a payment request with a merchant validation.
- [PKPaymentRequestPaymentMethodUpdate](pkpaymentrequestpaymentmethodupdate.md): An object that updates the payment request after the payment method changes.
- [PKPaymentRequestShippingContactUpdate](pkpaymentrequestshippingcontactupdate.md): An object that updates the payment request after the shipping contact information changes.
- [PKPaymentRequestCouponCodeUpdate](pkpaymentrequestcouponcodeupdate.md): An object that updates the payment request after the coupon code changes.
- [PKPaymentRequestUpdate](pkpaymentrequestupdate.md): The base class for updating the payment request after the user makes changes on the payment sheet.
