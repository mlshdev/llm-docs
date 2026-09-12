> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymenterror/couponcodeinvaliderror](https://developer.apple.com/documentation/passkit/pkpaymenterror/couponcodeinvaliderror)

# couponCodeInvalidError

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The error code that indicates an invalid coupon.

## Declaration

```swift
static var couponCodeInvalidError: PKPaymentError.Code { get }
```

<a id="Discussion"></a>

## Discussion

Use this error code if the user entered an invalid coupon code in the payment sheet. You can use [paymentCouponCodeInvalidError(localizedDescription:)](../pkpaymentrequest/paymentcouponcodeinvaliderror%28localizeddescription_%29.md) to create an invalid coupon error object.

> **Note**

>  A coupon code error doesn’t prevent the user from authorizing the payment.

## See Also

### Identifying the error

- [billingContactInvalidError](billingcontactinvaliderror.md): The error code to indicate an invalid billing address or billing name.
- [shippingContactInvalidError](shippingcontactinvaliderror.md): The error code to indicate an invalid shipping address, email, phone, or name.
- [shippingAddressUnserviceableError](shippingaddressunserviceableerror.md): The error code for an unserviceable shipping address.
- [couponCodeExpiredError](couponcodeexpirederror.md): The error code that indicates an expired coupon.
- [unknownError](unknownerror.md): The error code for an unknown error.
- [PKPaymentError.Code](code.md): An error code that you provide to indicate problems with address or contact information on an Apple Pay sheet.
