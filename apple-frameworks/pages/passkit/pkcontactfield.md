> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkcontactfield](https://developer.apple.com/documentation/passkit/pkcontactfield)

# PKContactField (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The fields that describe a contact.

## Declaration

```swift
struct PKContactField
```

<a id="Discussion"></a>

## Discussion

Use [PKContactField](pkcontactfield.md) field types to indicate which contact fields you require for a billing or shipping contact in order to complete the transaction.

## Topics

### Initializing a contact field

- [init(rawValue:)](pkcontactfield/init%28rawvalue_%29.md): Create a contact field given the raw value.

### Types of contact fields

- [emailAddress](pkcontactfield/emailaddress.md): A constant that indicates a contact’s email address.
- [name](pkcontactfield/name.md): A constant that indicates a contact’s name.
- [phoneNumber](pkcontactfield/phonenumber.md): A constant that indicates a contact’s telephone number.
- [phoneticName](pkcontactfield/phoneticname.md): A constant that indicates a contact’s phonetic name.
- [postalAddress](pkcontactfield/postaladdress.md): A constant that indicates a contact’s postal address.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Requesting billing and shipping contact fields

- [requiredBillingContactFields](pkpaymentrequest/requiredbillingcontactfields.md): A list of fields that you need for a billing contact to process the transaction.
- [requiredShippingContactFields](pkpaymentrequest/requiredshippingcontactfields.md): A list of fields that you need for a shipping contact to process the transaction.

# PKContactField (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The fields that describe a contact.

## Declaration

```objectivec
typedef NSString * PKContactField;
```

<a id="Discussion"></a>

## Discussion

Use [PKContactField](pkcontactfield.md) field types to indicate which contact fields you require for a billing or shipping contact in order to complete the transaction.

## Topics

### Types of contact fields

- [PKContactFieldEmailAddress](pkcontactfield/emailaddress.md): A constant that indicates a contact’s email address.
- [PKContactFieldName](pkcontactfield/name.md): A constant that indicates a contact’s name.
- [PKContactFieldPhoneNumber](pkcontactfield/phonenumber.md): A constant that indicates a contact’s telephone number.
- [PKContactFieldPhoneticName](pkcontactfield/phoneticname.md): A constant that indicates a contact’s phonetic name.
- [PKContactFieldPostalAddress](pkcontactfield/postaladdress.md): A constant that indicates a contact’s postal address.

## See Also

### Requesting billing and shipping contact fields

- [requiredBillingContactFields](pkpaymentrequest/requiredbillingcontactfields.md): A list of fields that you need for a billing contact to process the transaction.
- [requiredShippingContactFields](pkpaymentrequest/requiredshippingcontactfields.md): A list of fields that you need for a shipping contact to process the transaction.
