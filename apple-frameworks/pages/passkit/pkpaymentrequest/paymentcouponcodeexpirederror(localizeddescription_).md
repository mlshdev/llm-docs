> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequest/paymentcouponcodeexpirederror(localizeddescription:)](https://developer.apple.com/documentation/passkit/pkpaymentrequest/paymentcouponcodeexpirederror(localizeddescription:))

# paymentCouponCodeExpiredError(localizedDescription:)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS

Returns an error object that indicates an expired coupon.

## Declaration

```swift
static func paymentCouponCodeExpiredError(localizedDescription: String? = nil) -> any Error
```

## Parameters

- `localizedDescription`: A user-readable error as a localized string.

<a id="return-value"></a>

## Return Value

A new expired coupon error.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a payment error object instead of creating an [NSError](../../foundation/nserror.md) object yourself. This method indicates that the coupon code received from the Apple Pay sheet has expired.

The error you provide and its optional message appear on the Apple Pay sheet. There’s limited available space to display messages, so keep your messages concise.

## See Also

### Providing error information

- [paymentBillingAddressInvalidError(withKey:localizedDescription:)](paymentbillingaddressinvaliderror%28withkey_localizeddescription_%29.md): Creates a billing address error with the supplied key and user-facing error message.
- [paymentContactInvalidError(withContactField:localizedDescription:)](paymentcontactinvaliderror%28withcontactfield_localizeddescription_%29.md): Creates a contact error with the supplied field and user-facing error message.
- [paymentShippingAddressInvalidError(withKey:localizedDescription:)](paymentshippingaddressinvaliderror%28withkey_localizeddescription_%29.md): Creates a shipping address error with the supplied key and user-facing error message.
- [paymentShippingAddressUnserviceableError(withLocalizedDescription:)](paymentshippingaddressunserviceableerror%28withlocalizeddescription_%29.md): Creates an error for an unserviceable address, with the supplied user-facing error message.
- [paymentCouponCodeInvalidError(localizedDescription:)](paymentcouponcodeinvaliderror%28localizeddescription_%29.md): Returns an error object that indicates an invalid coupon.
