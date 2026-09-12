> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymenterrorkey/postaladdressuserinfokey](https://developer.apple.com/documentation/passkit/pkpaymenterrorkey/postaladdressuserinfokey)

# postalAddressUserInfoKey (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 4.0+

Payment error key that indicates errors with the postal address.

## Declaration

```swift
static let postalAddressUserInfoKey: PKPaymentErrorKey
```

<a id="Discussion"></a>

## Discussion

See [CNPostalAddress](../../contacts/cnpostaladdress.md) for the values that can be used with this key. These values point to the specific area of the address that is at fault, for example, [CNPostalAddressStreetKey](../../contacts/cnpostaladdressstreetkey.md) indicates the street. When you supply the key values in a payment error, the Apple Pay sheet highlights the appropriate field, enabling the user to correct errors.

## See Also

### Error keys

- [contactFieldUserInfoKey](contactfielduserinfokey.md): Payment error key that indicates errors with the contact information.

# PKPaymentErrorPostalAddressUserInfoKey (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 4.0+

Payment error key that indicates errors with the postal address.

## Declaration

```objectivec
extern PKPaymentErrorKey const PKPaymentErrorPostalAddressUserInfoKey;
```

<a id="Discussion"></a>

## Discussion

See [CNPostalAddress](../../contacts/cnpostaladdress.md) for the values that can be used with this key. These values point to the specific area of the address that is at fault, for example, [CNPostalAddressStreetKey](../../contacts/cnpostaladdressstreetkey.md) indicates the street. When you supply the key values in a payment error, the Apple Pay sheet highlights the appropriate field, enabling the user to correct errors.

## See Also

### Error keys

- [PKPaymentErrorContactFieldUserInfoKey](contactfielduserinfokey.md): Payment error key that indicates errors with the contact information.
