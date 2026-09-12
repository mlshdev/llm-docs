> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequest/paymentshippingaddressinvaliderror(withkey:localizeddescription:)](https://developer.apple.com/documentation/passkit/pkpaymentrequest/paymentshippingaddressinvaliderror(withkey:localizeddescription:))

# paymentShippingAddressInvalidError(withKey:localizedDescription:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a shipping address error with the supplied key and user-facing error message.

## Declaration

```swift
class func paymentShippingAddressInvalidError(withKey postalAddressKey: String, localizedDescription: String?) -> any Error
```

## Parameters

- `postalAddressKey`: A key value from [CNPostalAddress](../../contacts/cnpostaladdress.md) that indicates which part of the address has an error.
- `localizedDescription`: Optional. Provide a localized, user-facing error message string to help the user resolve the error.

<a id="Discussion"></a>

## Discussion

You can use this convenience method to create a payment error object instead of creating an [NSError](../../foundation/nserror.md) object yourself.  This convenience method indicates an error in the shipping address received from an Apple Pay sheet.

The error you provide and its optional message appear on the Apple Pay sheet. The available space to display messages is limited, so you should keep your messages concise.

For example, the following example shows how to create errors for indicating problems with the zip code and street, using the keys [CNPostalAddressPostalCodeKey](../../contacts/cnpostaladdresspostalcodekey.md) and [CNPostalAddressStreetKey](../../contacts/cnpostaladdressstreetkey.md).

Creating custom errors:

**Swift**

```swift
// Create errors for the zip code and street address
let shippingInvalidZip = PKPaymentRequest.paymentShippingAddressInvalidError(withKey: CNPostalAddressPostalCodeKey,localizedDescription: "Invalid ZIP code")
        let shippingInvalidStreet = PKPaymentRequest.paymentShippingAddressInvalidError(withKey: CNPostalAddressStreetKey,localizedDescription: "Missing street name")
// The result contains both errors       let result = PKPaymentAuthorizationResult(status: .failure, errors: [shippingInvalidZip, shippingInvalidStreet])
```

**Objective-C**

```objc
// Create errors for the zip code and street address
NSError *shippingInvalidZip = [PKPaymentRequest 
    paymentShippingAddressInvalidErrorWithKey:CNPostalAddressPostalCodeKey 
    localizedDescription:@"Invalid ZIP code"];
 
NSError *shippingInvalidStreet = [PKPaymentRequest    paymentShippingAddressInvalidErrorWithKey:CNPostalAddressStreetKey 
    localizedDescription:@"Missing street name"];

// The result contains both errors
PKPaymentAuthorizationResult *result = [[PKPaymentAuthorizationResult alloc]
    initWithStatus:PKPaymentAuthorizationStatusFailure 
    errors:@[shippingInvalidZip, shippingInvalidStreet]];
```

## See Also

### Providing error information

- [paymentBillingAddressInvalidError(withKey:localizedDescription:)](paymentbillingaddressinvaliderror%28withkey_localizeddescription_%29.md): Creates a billing address error with the supplied key and user-facing error message.
- [paymentContactInvalidError(withContactField:localizedDescription:)](paymentcontactinvaliderror%28withcontactfield_localizeddescription_%29.md): Creates a contact error with the supplied field and user-facing error message.
- [paymentShippingAddressUnserviceableError(withLocalizedDescription:)](paymentshippingaddressunserviceableerror%28withlocalizeddescription_%29.md): Creates an error for an unserviceable address, with the supplied user-facing error message.
- [paymentCouponCodeInvalidError(localizedDescription:)](paymentcouponcodeinvaliderror%28localizeddescription_%29.md): Returns an error object that indicates an invalid coupon.
- [paymentCouponCodeExpiredError(localizedDescription:)](paymentcouponcodeexpirederror%28localizeddescription_%29.md): Returns an error object that indicates an expired coupon.

# paymentShippingAddressInvalidErrorWithKey:localizedDescription: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a shipping address error with the supplied key and user-facing error message.

## Declaration

```objectivec
+ (NSError *) paymentShippingAddressInvalidErrorWithKey:(NSString *) postalAddressKey localizedDescription:(NSString *) localizedDescription;
```

## Parameters

- `postalAddressKey`: A key value from [CNPostalAddress](../../contacts/cnpostaladdress.md) that indicates which part of the address has an error.
- `localizedDescription`: Optional. Provide a localized, user-facing error message string to help the user resolve the error.

<a id="Discussion"></a>

## Discussion

You can use this convenience method to create a payment error object instead of creating an [NSError](../../foundation/nserror.md) object yourself.  This convenience method indicates an error in the shipping address received from an Apple Pay sheet.

The error you provide and its optional message appear on the Apple Pay sheet. The available space to display messages is limited, so you should keep your messages concise.

For example, the following example shows how to create errors for indicating problems with the zip code and street, using the keys [CNPostalAddressPostalCodeKey](../../contacts/cnpostaladdresspostalcodekey.md) and [CNPostalAddressStreetKey](../../contacts/cnpostaladdressstreetkey.md).

Creating custom errors:

**Swift**

```swift
// Create errors for the zip code and street address
let shippingInvalidZip = PKPaymentRequest.paymentShippingAddressInvalidError(withKey: CNPostalAddressPostalCodeKey,localizedDescription: "Invalid ZIP code")
        let shippingInvalidStreet = PKPaymentRequest.paymentShippingAddressInvalidError(withKey: CNPostalAddressStreetKey,localizedDescription: "Missing street name")
// The result contains both errors       let result = PKPaymentAuthorizationResult(status: .failure, errors: [shippingInvalidZip, shippingInvalidStreet])
```

**Objective-C**

```objc
// Create errors for the zip code and street address
NSError *shippingInvalidZip = [PKPaymentRequest 
    paymentShippingAddressInvalidErrorWithKey:CNPostalAddressPostalCodeKey 
    localizedDescription:@"Invalid ZIP code"];
 
NSError *shippingInvalidStreet = [PKPaymentRequest    paymentShippingAddressInvalidErrorWithKey:CNPostalAddressStreetKey 
    localizedDescription:@"Missing street name"];

// The result contains both errors
PKPaymentAuthorizationResult *result = [[PKPaymentAuthorizationResult alloc]
    initWithStatus:PKPaymentAuthorizationStatusFailure 
    errors:@[shippingInvalidZip, shippingInvalidStreet]];
```

## See Also

### Providing error information

- [paymentBillingAddressInvalidErrorWithKey:localizedDescription:](paymentbillingaddressinvaliderror%28withkey_localizeddescription_%29.md): Creates a billing address error with the supplied key and user-facing error message.
- [paymentContactInvalidErrorWithContactField:localizedDescription:](paymentcontactinvaliderror%28withcontactfield_localizeddescription_%29.md): Creates a contact error with the supplied field and user-facing error message.
- [paymentShippingAddressUnserviceableErrorWithLocalizedDescription:](paymentshippingaddressunserviceableerror%28withlocalizeddescription_%29.md): Creates an error for an unserviceable address, with the supplied user-facing error message.
- [paymentCouponCodeInvalidErrorWithLocalizedDescription:](paymentcouponcodeinvaliderrorwithlocalizeddescription_.md): Returns an error object that indicates an invalid coupon.
- [paymentCouponCodeExpiredErrorWithLocalizedDescription:](paymentcouponcodeexpirederrorwithlocalizeddescription_.md): Returns an error object that indicates an expired coupon.
