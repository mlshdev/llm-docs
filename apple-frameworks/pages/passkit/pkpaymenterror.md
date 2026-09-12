> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymenterror](https://developer.apple.com/documentation/passkit/pkpaymenterror)

# PKPaymentError

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 4.0+

An error type that you create to indicate problems with address or contact information on an Apple Pay sheet.

## Declaration

```swift
struct PKPaymentError
```

<a id="overview"></a>

## Overview

The user must resolve any errors that you report on the Apple Pay sheet before they’re able to authorize the transaction.  You return any errors in [PKPaymentAuthorizationResult](pkpaymentauthorizationresult.md) or [PKPaymentRequestShippingContactUpdate](pkpaymentrequestshippingcontactupdate.md).

You can build your own payment error ([NSError](../foundation/nserror.md)), or use one of the following convenience methods from [PKPaymentRequest](pkpaymentrequest.md) to build it for you.

- For an error with contact information, use [paymentContactInvalidError(withContactField:localizedDescription:)](pkpaymentrequest/paymentcontactinvaliderror%28withcontactfield_localizeddescription_%29.md).
- For a shipping address that is unserviceable, use [paymentShippingAddressUnserviceableError(withLocalizedDescription:)](pkpaymentrequest/paymentshippingaddressunserviceableerror%28withlocalizeddescription_%29.md).
- For an error with the billing address, use [paymentBillingAddressInvalidError(withKey:localizedDescription:)](pkpaymentrequest/paymentbillingaddressinvaliderror%28withkey_localizeddescription_%29.md).
- For an error with the shipping address, use [paymentShippingAddressInvalidError(withKey:localizedDescription:)](pkpaymentrequest/paymentshippingaddressinvaliderror%28withkey_localizeddescription_%29.md).

The following code example shows:

- How to create an error directly.
- How to create an error using a convenience method.

Creating payment errors:

```swift
// A general billing address error created with NSError
let billingAddressError = NSError.init(domain: PKPaymentErrorDomain,
                          code: PKPaymentError.billingContactInvalidError.rawValue,
                          userInfo: [NSLocalizedDescriptionKey:"Address has an error",
                          PKPaymentErrorKey.contactFieldUserInfoKey: PKContactField.postalAddress])

// A specific billing address error created with a convenience method
let billingAddressInvalidStreet = PKPaymentRequest.paymentBillingAddressInvalidError(withKey:CNPostalAddressStreetKey,
                                                   localizedDescription: "Invalid street")
```

## Topics

### Describing the error

- [errorCode](../foundation/customnserror/errorcode-2opgi.md): The error code within the given domain.
- [errorUserInfo](../foundation/customnserror/erroruserinfo-1aas5.md): The default user-info dictionary.

### Identifying the error

- [billingContactInvalidError](pkpaymenterror/billingcontactinvaliderror.md): The error code to indicate an invalid billing address or billing name.
- [shippingContactInvalidError](pkpaymenterror/shippingcontactinvaliderror.md): The error code to indicate an invalid shipping address, email, phone, or name.
- [shippingAddressUnserviceableError](pkpaymenterror/shippingaddressunserviceableerror.md): The error code for an unserviceable shipping address.
- [couponCodeExpiredError](pkpaymenterror/couponcodeexpirederror.md): The error code that indicates an expired coupon.
- [couponCodeInvalidError](pkpaymenterror/couponcodeinvaliderror.md): The error code that indicates an invalid coupon.
- [unknownError](pkpaymenterror/unknownerror.md): The error code for an unknown error.
- [PKPaymentError.Code](pkpaymenterror/code.md): An error code that you provide to indicate problems with address or contact information on an Apple Pay sheet.

### Querying the error domain

- [errorDomain](pkpaymenterror/errordomain.md)
- [PKPaymentErrorDomain](pkpaymenterrordomain.md): The error domain for specific errors associated with Apple Pay in-app or web payments.

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [PKDisbursementError](pkdisbursementerror.md): A structure that describes errors that can occur while processing the disbursement.
- [PKDisbursementErrorKey](pkdisbursementerrorkey.md): Values that describe errors that can occur when processing disbursements.
- [PKPaymentError.Code](pkpaymenterror/code.md): An error code that you provide to indicate problems with address or contact information on an Apple Pay sheet.
- [PKPaymentErrorKey](pkpaymenterrorkey.md): Additional details about an error on the Apple Pay sheet.
- [PKDisbursementError.Code](pkdisbursementerror/code.md): Values that describe errors that can occur while processing the disbursement.
- [PKPaymentErrorDomain](pkpaymenterrordomain.md): The error domain for specific errors associated with Apple Pay in-app or web payments.
- [PKDisbursementErrorDomain](pkdisbursementerrordomain.md): The error domain to use for errors with in-app disbursements.
