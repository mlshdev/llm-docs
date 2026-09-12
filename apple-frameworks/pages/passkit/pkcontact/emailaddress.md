> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkcontact/emailaddress](https://developer.apple.com/documentation/passkit/pkcontact/emailaddress)

# emailAddress (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

The contact’s email address, or `nil` if the contact’s email is not needed for the transaction.

## Declaration

```swift
var emailAddress: String? { get set }
```

## See Also

### Contact information

- [name](name.md): The contact’s first and last name, or `nil` if the contact’s name is not needed for the transaction.
- [phoneNumber](phonenumber.md): The contact’s telephone number, or `nil` if the contact’s phone number is not needed for the transaction.
- [postalAddress](postaladdress.md): The contact’s full postal address.
- [supplementarySubLocality](supplementarysublocality.md): Deprecated. The contact’s sublocality, or `nil` if the sublocality is not needed for the transaction.

# emailAddress (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

The contact’s email address, or `nil` if the contact’s email is not needed for the transaction.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSString * emailAddress;
```

## See Also

### Contact information

- [name](name.md): The contact’s first and last name, or `nil` if the contact’s name is not needed for the transaction.
- [phoneNumber](phonenumber.md): The contact’s telephone number, or `nil` if the contact’s phone number is not needed for the transaction.
- [postalAddress](postaladdress.md): The contact’s full postal address.
- [supplementarySubLocality](supplementarysublocality.md): Deprecated. The contact’s sublocality, or `nil` if the sublocality is not needed for the transaction.
