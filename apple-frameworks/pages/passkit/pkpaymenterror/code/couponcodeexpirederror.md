> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymenterror/code/couponcodeexpirederror](https://developer.apple.com/documentation/passkit/pkpaymenterror/code/couponcodeexpirederror)

# PKPaymentError.Code.couponCodeExpiredError (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The error code that indicates an expired coupon.

## Declaration

```swift
case couponCodeExpiredError
```

<a id="Discussion"></a>

## Discussion

Use this error code if the coupon code entered in the payment sheet has expired. You can use [paymentCouponCodeExpiredError(localizedDescription:)](../../pkpaymentrequest/paymentcouponcodeexpirederror%28localizeddescription_%29.md) to create an expired coupon error object.

## See Also

### Error codes

- [PKPaymentError.Code.couponCodeInvalidError](couponcodeinvaliderror.md): The error code that indicates an invalid coupon.
- [PKPaymentError.Code.billingContactInvalidError](billingcontactinvaliderror.md): The error code that indicates an invalid billing address or billing name.
- [PKPaymentError.Code.shippingContactInvalidError](shippingcontactinvaliderror.md): The error code that indicates an invalid shipping address, email, phone, or name.
- [PKPaymentError.Code.shippingAddressUnserviceableError](shippingaddressunserviceableerror.md): The error code that indicates an unserviceable shipping address.
- [PKPaymentError.Code.unknownError](unknownerror.md): The error code that indicates an unknown error.

# PKPaymentCouponCodeExpiredError (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The error code that indicates an expired coupon.

## Declaration

```objectivec
PKPaymentCouponCodeExpiredError
```

<a id="Discussion"></a>

## Discussion

Use this error code if the coupon code entered in the payment sheet has expired. You can use [paymentCouponCodeExpiredError(localizedDescription:)](../../pkpaymentrequest/paymentcouponcodeexpirederror%28localizeddescription_%29.md) to create an expired coupon error object.

## See Also

### Error codes

- [PKPaymentCouponCodeInvalidError](couponcodeinvaliderror.md): The error code that indicates an invalid coupon.
- [PKPaymentBillingContactInvalidError](billingcontactinvaliderror.md): The error code that indicates an invalid billing address or billing name.
- [PKPaymentShippingContactInvalidError](shippingcontactinvaliderror.md): The error code that indicates an invalid shipping address, email, phone, or name.
- [PKPaymentShippingAddressUnserviceableError](shippingaddressunserviceableerror.md): The error code that indicates an unserviceable shipping address.
- [PKPaymentUnknownError](unknownerror.md): The error code that indicates an unknown error.
