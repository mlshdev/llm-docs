> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkcontact/postaladdress](https://developer.apple.com/documentation/passkit/pkcontact/postaladdress)

# postalAddress (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

The contact’s full postal address.

## Declaration

```swift
var postalAddress: CNPostalAddress? { get set }
```

<a id="Discussion"></a>

## Discussion

The contact’s full street address including name, street, city, state or province, postal code, and country or region. This property can be `nil` if the contact’s address isn’t needed for the transaction.

## See Also

### Contact information

- [emailAddress](emailaddress.md): The contact’s email address, or `nil` if the contact’s email is not needed for the transaction.
- [name](name.md): The contact’s first and last name, or `nil` if the contact’s name is not needed for the transaction.
- [phoneNumber](phonenumber.md): The contact’s telephone number, or `nil` if the contact’s phone number is not needed for the transaction.
- [supplementarySubLocality](supplementarysublocality.md): Deprecated. The contact’s sublocality, or `nil` if the sublocality is not needed for the transaction.

# postalAddress (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

The contact’s full postal address.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) CNPostalAddress * postalAddress;
```

<a id="Discussion"></a>

## Discussion

The contact’s full street address including name, street, city, state or province, postal code, and country or region. This property can be `nil` if the contact’s address isn’t needed for the transaction.

## See Also

### Contact information

- [emailAddress](emailaddress.md): The contact’s email address, or `nil` if the contact’s email is not needed for the transaction.
- [name](name.md): The contact’s first and last name, or `nil` if the contact’s name is not needed for the transaction.
- [phoneNumber](phonenumber.md): The contact’s telephone number, or `nil` if the contact’s phone number is not needed for the transaction.
- [supplementarySubLocality](supplementarysublocality.md): Deprecated. The contact’s sublocality, or `nil` if the sublocality is not needed for the transaction.
