> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequest/paymentcontactinvaliderror(withcontactfield:localizeddescription:)](https://developer.apple.com/documentation/passkit/pkpaymentrequest/paymentcontactinvaliderror(withcontactfield:localizeddescription:))

# paymentContactInvalidError(withContactField:localizedDescription:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a contact error with the supplied field and user-facing error message.

## Declaration

```swift
class func paymentContactInvalidError(withContactField field: PKContactField, localizedDescription: String?) -> any Error
```

## Parameters

- `field`: A value from [PKContactField](../pkcontactfield.md) that indicates which part of the contact information has an error.
- `localizedDescription`: Optional. Provide a localized, user-facing error message string to help the user resolve the error.

<a id="Discussion"></a>

## Discussion

You can use this convenience method to create a payment error object instead of creating an [NSError](../../foundation/nserror.md) object yourself.  This method indicates an error in the contact information that is received from an Apple Pay sheet.

The error you provide and its optional message appear on the Apple Pay sheet. The available space to display messages is limited, so you should keep your messages concise.

## See Also

### Providing error information

- [paymentBillingAddressInvalidError(withKey:localizedDescription:)](paymentbillingaddressinvaliderror%28withkey_localizeddescription_%29.md): Creates a billing address error with the supplied key and user-facing error message.
- [paymentShippingAddressInvalidError(withKey:localizedDescription:)](paymentshippingaddressinvaliderror%28withkey_localizeddescription_%29.md): Creates a shipping address error with the supplied key and user-facing error message.
- [paymentShippingAddressUnserviceableError(withLocalizedDescription:)](paymentshippingaddressunserviceableerror%28withlocalizeddescription_%29.md): Creates an error for an unserviceable address, with the supplied user-facing error message.
- [paymentCouponCodeInvalidError(localizedDescription:)](paymentcouponcodeinvaliderror%28localizeddescription_%29.md): Returns an error object that indicates an invalid coupon.
- [paymentCouponCodeExpiredError(localizedDescription:)](paymentcouponcodeexpirederror%28localizeddescription_%29.md): Returns an error object that indicates an expired coupon.

# paymentContactInvalidErrorWithContactField:localizedDescription: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a contact error with the supplied field and user-facing error message.

## Declaration

```objectivec
+ (NSError *) paymentContactInvalidErrorWithContactField:(PKContactField) field localizedDescription:(NSString *) localizedDescription;
```

## Parameters

- `field`: A value from [PKContactField](../pkcontactfield.md) that indicates which part of the contact information has an error.
- `localizedDescription`: Optional. Provide a localized, user-facing error message string to help the user resolve the error.

<a id="Discussion"></a>

## Discussion

You can use this convenience method to create a payment error object instead of creating an [NSError](../../foundation/nserror.md) object yourself.  This method indicates an error in the contact information that is received from an Apple Pay sheet.

The error you provide and its optional message appear on the Apple Pay sheet. The available space to display messages is limited, so you should keep your messages concise.

## See Also

### Providing error information

- [paymentBillingAddressInvalidErrorWithKey:localizedDescription:](paymentbillingaddressinvaliderror%28withkey_localizeddescription_%29.md): Creates a billing address error with the supplied key and user-facing error message.
- [paymentShippingAddressInvalidErrorWithKey:localizedDescription:](paymentshippingaddressinvaliderror%28withkey_localizeddescription_%29.md): Creates a shipping address error with the supplied key and user-facing error message.
- [paymentShippingAddressUnserviceableErrorWithLocalizedDescription:](paymentshippingaddressunserviceableerror%28withlocalizeddescription_%29.md): Creates an error for an unserviceable address, with the supplied user-facing error message.
- [paymentCouponCodeInvalidErrorWithLocalizedDescription:](paymentcouponcodeinvaliderrorwithlocalizeddescription_.md): Returns an error object that indicates an invalid coupon.
- [paymentCouponCodeExpiredErrorWithLocalizedDescription:](paymentcouponcodeexpirederrorwithlocalizeddescription_.md): Returns an error object that indicates an expired coupon.
