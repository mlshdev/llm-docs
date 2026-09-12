> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymenterrorkey/contactfielduserinfokey](https://developer.apple.com/documentation/passkit/pkpaymenterrorkey/contactfielduserinfokey)

# contactFieldUserInfoKey (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 4.0+

Payment error key that indicates errors with the contact information.

## Declaration

```swift
static let contactFieldUserInfoKey: PKPaymentErrorKey
```

<a id="Discussion"></a>

## Discussion

See [PKContactField](../pkcontactfield.md) for the values to use with this key.

Use this key with the error code [PKPaymentError.Code.shippingContactInvalidError](../pkpaymenterror/code/shippingcontactinvaliderror.md) to indicate an error in the name, email address, phone number, or the shipping address as a whole.

Use this key with the error code [billingContactInvalidError](../pkpaymenterror/billingcontactinvaliderror.md)  to indicate an error with the billing address as a whole, or billing name.

The example code in [Listing 1](https://developer.apple.com/library/archive/qa/qa1639/_index.html#//apple_ref/doc/uid/DTS40008751-CH1-SOURCECODE2) shows the [contactFieldUserInfoKey](contactfielduserinfokey.md) used to indicate a phone number error.

The following example shows an error indicating a problem with the shipping contact’s phone number.

```swift
let phoneError = NSError.init(domain: PKPaymentErrorDomain,
                               code: PKPaymentError.shippingContactInvalidError.rawValue,
                               userInfo: [NSLocalizedDescriptionKey:"Phone number is invalid",
                               PKPaymentErrorKey.contactFieldUserInfoKey:PKContactField.phoneNumber])
```

## See Also

### Error keys

- [postalAddressUserInfoKey](postaladdressuserinfokey.md): Payment error key that indicates errors with the postal address.

# PKPaymentErrorContactFieldUserInfoKey (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 4.0+

Payment error key that indicates errors with the contact information.

## Declaration

```objectivec
extern PKPaymentErrorKey const PKPaymentErrorContactFieldUserInfoKey;
```

<a id="Discussion"></a>

## Discussion

See [PKContactField](../pkcontactfield.md) for the values to use with this key.

Use this key with the error code [PKPaymentShippingContactInvalidError](../pkpaymenterror/code/shippingcontactinvaliderror.md) to indicate an error in the name, email address, phone number, or the shipping address as a whole.

Use this key with the error code [billingContactInvalidError](../pkpaymenterror/billingcontactinvaliderror.md)  to indicate an error with the billing address as a whole, or billing name.

The example code in [Listing 1](https://developer.apple.com/library/archive/qa/qa1639/_index.html#//apple_ref/doc/uid/DTS40008751-CH1-SOURCECODE2) shows the [PKPaymentErrorContactFieldUserInfoKey](contactfielduserinfokey.md) used to indicate a phone number error.

The following example shows an error indicating a problem with the shipping contact’s phone number.

```swift
let phoneError = NSError.init(domain: PKPaymentErrorDomain,
                               code: PKPaymentError.shippingContactInvalidError.rawValue,
                               userInfo: [NSLocalizedDescriptionKey:"Phone number is invalid",
                               PKPaymentErrorKey.contactFieldUserInfoKey:PKContactField.phoneNumber])
```

## See Also

### Error keys

- [PKPaymentErrorPostalAddressUserInfoKey](postaladdressuserinfokey.md): Payment error key that indicates errors with the postal address.
