> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequestmerchantsessionupdate](https://developer.apple.com/documentation/passkit/pkpaymentrequestmerchantsessionupdate)

# PKPaymentRequestMerchantSessionUpdate (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

An object that updates a payment request with a merchant validation.

## Declaration

```swift
class PKPaymentRequestMerchantSessionUpdate
```

<a id="overview"></a>

## Overview

This is the handler for [paymentAuthorizationController(\_:didRequestMerchantSessionUpdate:)](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didrequestmerchantsessionupdate_%29.md) and [paymentAuthorizationViewController(\_:didRequestMerchantSessionUpdate:)](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didrequestmerchantsessionupdate_%29.md).

## Topics

### Creating a merchant session update

- [init(status:merchantSession:)](pkpaymentrequestmerchantsessionupdate/init%28status_merchantsession_%29.md): Creates a payment method update with the specified status and merchant session.

### Getting information for the merchant session update

- [status](pkpaymentrequestmerchantsessionupdate/status.md): The current authorization status for the payment.
- [session](pkpaymentrequestmerchantsessionupdate/session.md): An object that validates the identity of a merchant for the payment request.
- [PKPaymentMerchantSession](pkpaymentmerchantsession.md): An object that validates the identity of a merchant for a payment request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Payment sheet updates

- [PKPaymentRequestPaymentMethodUpdate](pkpaymentrequestpaymentmethodupdate.md): An object that updates the payment request after the payment method changes.
- [PKPaymentRequestShippingContactUpdate](pkpaymentrequestshippingcontactupdate.md): An object that updates the payment request after the shipping contact information changes.
- [PKPaymentRequestShippingMethodUpdate](pkpaymentrequestshippingmethodupdate.md): An object that updates the payment request after the shipping method changed.
- [PKPaymentRequestCouponCodeUpdate](pkpaymentrequestcouponcodeupdate.md): An object that updates the payment request after the coupon code changes.
- [PKPaymentRequestUpdate](pkpaymentrequestupdate.md): The base class for updating the payment request after the user makes changes on the payment sheet.

# PKPaymentRequestMerchantSessionUpdate (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

An object that updates a payment request with a merchant validation.

## Declaration

```objectivec
@interface PKPaymentRequestMerchantSessionUpdate : NSObject
```

<a id="overview"></a>

## Overview

This is the handler for [paymentAuthorizationController:didRequestMerchantSessionUpdate:](pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didrequestmerchantsessionupdate_%29.md) and [paymentAuthorizationViewController:didRequestMerchantSessionUpdate:](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didrequestmerchantsessionupdate_%29.md).

## Topics

### Creating a merchant session update

- [initWithStatus:merchantSession:](pkpaymentrequestmerchantsessionupdate/init%28status_merchantsession_%29.md): Creates a payment method update with the specified status and merchant session.

### Getting information for the merchant session update

- [status](pkpaymentrequestmerchantsessionupdate/status.md): The current authorization status for the payment.
- [session](pkpaymentrequestmerchantsessionupdate/session.md): An object that validates the identity of a merchant for the payment request.
- [PKPaymentMerchantSession](pkpaymentmerchantsession.md): An object that validates the identity of a merchant for a payment request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Payment sheet updates

- [PKPaymentRequestPaymentMethodUpdate](pkpaymentrequestpaymentmethodupdate.md): An object that updates the payment request after the payment method changes.
- [PKPaymentRequestShippingContactUpdate](pkpaymentrequestshippingcontactupdate.md): An object that updates the payment request after the shipping contact information changes.
- [PKPaymentRequestShippingMethodUpdate](pkpaymentrequestshippingmethodupdate.md): An object that updates the payment request after the shipping method changed.
- [PKPaymentRequestCouponCodeUpdate](pkpaymentrequestcouponcodeupdate.md): An object that updates the payment request after the coupon code changes.
- [PKPaymentRequestUpdate](pkpaymentrequestupdate.md): The base class for updating the payment request after the user makes changes on the payment sheet.
