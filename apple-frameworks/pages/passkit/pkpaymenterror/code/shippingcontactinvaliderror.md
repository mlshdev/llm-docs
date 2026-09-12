> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymenterror/code/shippingcontactinvaliderror](https://developer.apple.com/documentation/passkit/pkpaymenterror/code/shippingcontactinvaliderror)

# PKPaymentError.Code.shippingContactInvalidError (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 4.0+

The error code that indicates an invalid shipping address, email, phone, or name.

## Declaration

```swift
case shippingContactInvalidError
```

<a id="Discussion"></a>

## Discussion

Use this error code if the shipping contact information on the Apple Pay sheet has an error in the address, email, phone, or name.

## See Also

### Error codes

- [PKPaymentError.Code.couponCodeExpiredError](couponcodeexpirederror.md): The error code that indicates an expired coupon.
- [PKPaymentError.Code.couponCodeInvalidError](couponcodeinvaliderror.md): The error code that indicates an invalid coupon.
- [PKPaymentError.Code.billingContactInvalidError](billingcontactinvaliderror.md): The error code that indicates an invalid billing address or billing name.
- [PKPaymentError.Code.shippingAddressUnserviceableError](shippingaddressunserviceableerror.md): The error code that indicates an unserviceable shipping address.
- [PKPaymentError.Code.unknownError](unknownerror.md): The error code that indicates an unknown error.

# PKPaymentShippingContactInvalidError (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 4.0+

The error code that indicates an invalid shipping address, email, phone, or name.

## Declaration

```objectivec
PKPaymentShippingContactInvalidError
```

<a id="Discussion"></a>

## Discussion

Use this error code if the shipping contact information on the Apple Pay sheet has an error in the address, email, phone, or name.

## See Also

### Error codes

- [PKPaymentCouponCodeExpiredError](couponcodeexpirederror.md): The error code that indicates an expired coupon.
- [PKPaymentCouponCodeInvalidError](couponcodeinvaliderror.md): The error code that indicates an invalid coupon.
- [PKPaymentBillingContactInvalidError](billingcontactinvaliderror.md): The error code that indicates an invalid billing address or billing name.
- [PKPaymentShippingAddressUnserviceableError](shippingaddressunserviceableerror.md): The error code that indicates an unserviceable shipping address.
- [PKPaymentUnknownError](unknownerror.md): The error code that indicates an unknown error.
