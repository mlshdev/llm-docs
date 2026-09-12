> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymenterror/code/billingcontactinvaliderror](https://developer.apple.com/documentation/passkit/pkpaymenterror/code/billingcontactinvaliderror)

# PKPaymentError.Code.billingContactInvalidError (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 4.0+

The error code that indicates an invalid billing address or billing name.

## Declaration

```swift
case billingContactInvalidError
```

<a id="Discussion"></a>

## Discussion

Use this error code if the billing contact information on the Apple Pay sheet has an error in the address or name.

## See Also

### Error codes

- [PKPaymentError.Code.couponCodeExpiredError](couponcodeexpirederror.md): The error code that indicates an expired coupon.
- [PKPaymentError.Code.couponCodeInvalidError](couponcodeinvaliderror.md): The error code that indicates an invalid coupon.
- [PKPaymentError.Code.shippingContactInvalidError](shippingcontactinvaliderror.md): The error code that indicates an invalid shipping address, email, phone, or name.
- [PKPaymentError.Code.shippingAddressUnserviceableError](shippingaddressunserviceableerror.md): The error code that indicates an unserviceable shipping address.
- [PKPaymentError.Code.unknownError](unknownerror.md): The error code that indicates an unknown error.

# PKPaymentBillingContactInvalidError (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 4.0+

The error code that indicates an invalid billing address or billing name.

## Declaration

```objectivec
PKPaymentBillingContactInvalidError
```

<a id="Discussion"></a>

## Discussion

Use this error code if the billing contact information on the Apple Pay sheet has an error in the address or name.

## See Also

### Error codes

- [PKPaymentCouponCodeExpiredError](couponcodeexpirederror.md): The error code that indicates an expired coupon.
- [PKPaymentCouponCodeInvalidError](couponcodeinvaliderror.md): The error code that indicates an invalid coupon.
- [PKPaymentShippingContactInvalidError](shippingcontactinvaliderror.md): The error code that indicates an invalid shipping address, email, phone, or name.
- [PKPaymentShippingAddressUnserviceableError](shippingaddressunserviceableerror.md): The error code that indicates an unserviceable shipping address.
- [PKPaymentUnknownError](unknownerror.md): The error code that indicates an unknown error.
