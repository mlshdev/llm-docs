> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymenterror/unknownerror](https://developer.apple.com/documentation/passkit/pkpaymenterror/unknownerror)

# unknownError

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 4.0+

The error code for an unknown error.

## Declaration

```swift
static var unknownError: PKPaymentError.Code { get }
```

<a id="Discussion"></a>

## Discussion

Use this error code if an unknown but non-fatal error occurred during payment processing.  The user can attempt authorization again.

## See Also

### Identifying the error

- [billingContactInvalidError](billingcontactinvaliderror.md): The error code to indicate an invalid billing address or billing name.
- [shippingContactInvalidError](shippingcontactinvaliderror.md): The error code to indicate an invalid shipping address, email, phone, or name.
- [shippingAddressUnserviceableError](shippingaddressunserviceableerror.md): The error code for an unserviceable shipping address.
- [couponCodeExpiredError](couponcodeexpirederror.md): The error code that indicates an expired coupon.
- [couponCodeInvalidError](couponcodeinvaliderror.md): The error code that indicates an invalid coupon.
- [PKPaymentError.Code](code.md): An error code that you provide to indicate problems with address or contact information on an Apple Pay sheet.
