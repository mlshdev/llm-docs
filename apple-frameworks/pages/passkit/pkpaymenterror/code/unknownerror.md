> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymenterror/code/unknownerror](https://developer.apple.com/documentation/passkit/pkpaymenterror/code/unknownerror)

# PKPaymentError.Code.unknownError (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 4.0+

The error code that indicates an unknown error.

## Declaration

```swift
case unknownError
```

<a id="Discussion"></a>

## Discussion

User this error code if an unknown but non-fatal error occurred during payment processing.  The user can attempt to authorize the transaction again.

## See Also

### Error codes

- [PKPaymentError.Code.couponCodeExpiredError](couponcodeexpirederror.md): The error code that indicates an expired coupon.
- [PKPaymentError.Code.couponCodeInvalidError](couponcodeinvaliderror.md): The error code that indicates an invalid coupon.
- [PKPaymentError.Code.billingContactInvalidError](billingcontactinvaliderror.md): The error code that indicates an invalid billing address or billing name.
- [PKPaymentError.Code.shippingContactInvalidError](shippingcontactinvaliderror.md): The error code that indicates an invalid shipping address, email, phone, or name.
- [PKPaymentError.Code.shippingAddressUnserviceableError](shippingaddressunserviceableerror.md): The error code that indicates an unserviceable shipping address.

# PKPaymentUnknownError (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 4.0+

The error code that indicates an unknown error.

## Declaration

```objectivec
PKPaymentUnknownError
```

<a id="Discussion"></a>

## Discussion

User this error code if an unknown but non-fatal error occurred during payment processing.  The user can attempt to authorize the transaction again.

## See Also

### Error codes

- [PKPaymentCouponCodeExpiredError](couponcodeexpirederror.md): The error code that indicates an expired coupon.
- [PKPaymentCouponCodeInvalidError](couponcodeinvaliderror.md): The error code that indicates an invalid coupon.
- [PKPaymentBillingContactInvalidError](billingcontactinvaliderror.md): The error code that indicates an invalid billing address or billing name.
- [PKPaymentShippingContactInvalidError](shippingcontactinvaliderror.md): The error code that indicates an invalid shipping address, email, phone, or name.
- [PKPaymentShippingAddressUnserviceableError](shippingaddressunserviceableerror.md): The error code that indicates an unserviceable shipping address.
