> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymenterror/code/shippingaddressunserviceableerror](https://developer.apple.com/documentation/passkit/pkpaymenterror/code/shippingaddressunserviceableerror)

# PKPaymentError.Code.shippingAddressUnserviceableError (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 4.0+

The error code that indicates an unserviceable shipping address.

## Declaration

```swift
case shippingAddressUnserviceableError
```

<a id="Discussion"></a>

## Discussion

Use this error code for a shipping address that is otherwise valid, but is unserviceable. For example, the address is in a country or region you don’t ship to, or it’s a P.O. box and you can’t deliver to P.O. boxes.

## See Also

### Error codes

- [PKPaymentError.Code.couponCodeExpiredError](couponcodeexpirederror.md): The error code that indicates an expired coupon.
- [PKPaymentError.Code.couponCodeInvalidError](couponcodeinvaliderror.md): The error code that indicates an invalid coupon.
- [PKPaymentError.Code.billingContactInvalidError](billingcontactinvaliderror.md): The error code that indicates an invalid billing address or billing name.
- [PKPaymentError.Code.shippingContactInvalidError](shippingcontactinvaliderror.md): The error code that indicates an invalid shipping address, email, phone, or name.
- [PKPaymentError.Code.unknownError](unknownerror.md): The error code that indicates an unknown error.

# PKPaymentShippingAddressUnserviceableError (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 4.0+

The error code that indicates an unserviceable shipping address.

## Declaration

```objectivec
PKPaymentShippingAddressUnserviceableError
```

<a id="Discussion"></a>

## Discussion

Use this error code for a shipping address that is otherwise valid, but is unserviceable. For example, the address is in a country or region you don’t ship to, or it’s a P.O. box and you can’t deliver to P.O. boxes.

## See Also

### Error codes

- [PKPaymentCouponCodeExpiredError](couponcodeexpirederror.md): The error code that indicates an expired coupon.
- [PKPaymentCouponCodeInvalidError](couponcodeinvaliderror.md): The error code that indicates an invalid coupon.
- [PKPaymentBillingContactInvalidError](billingcontactinvaliderror.md): The error code that indicates an invalid billing address or billing name.
- [PKPaymentShippingContactInvalidError](shippingcontactinvaliderror.md): The error code that indicates an invalid shipping address, email, phone, or name.
- [PKPaymentUnknownError](unknownerror.md): The error code that indicates an unknown error.
