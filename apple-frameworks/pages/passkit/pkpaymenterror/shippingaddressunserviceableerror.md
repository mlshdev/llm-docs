> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymenterror/shippingaddressunserviceableerror](https://developer.apple.com/documentation/passkit/pkpaymenterror/shippingaddressunserviceableerror)

# shippingAddressUnserviceableError

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 4.0+

The error code for an unserviceable shipping address.

## Declaration

```swift
static var shippingAddressUnserviceableError: PKPaymentError.Code { get }
```

<a id="Discussion"></a>

## Discussion

Use this error code for a shipping address that is otherwise valid, but is unserviceable. For example, the address is in a country or region you don’t ship to, or it’s a P.O. box and you can’t deliver to P.O. boxes.

## See Also

### Identifying the error

- [billingContactInvalidError](billingcontactinvaliderror.md): The error code to indicate an invalid billing address or billing name.
- [shippingContactInvalidError](shippingcontactinvaliderror.md): The error code to indicate an invalid shipping address, email, phone, or name.
- [couponCodeExpiredError](couponcodeexpirederror.md): The error code that indicates an expired coupon.
- [couponCodeInvalidError](couponcodeinvaliderror.md): The error code that indicates an invalid coupon.
- [unknownError](unknownerror.md): The error code for an unknown error.
- [PKPaymentError.Code](code.md): An error code that you provide to indicate problems with address or contact information on an Apple Pay sheet.
