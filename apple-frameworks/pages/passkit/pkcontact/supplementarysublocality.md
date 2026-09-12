> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkcontact/supplementarysublocality](https://developer.apple.com/documentation/passkit/pkcontact/supplementarysublocality)

# supplementarySubLocality (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.2+ (deprecated in 10.3) · iPadOS 9.2+ (deprecated in 10.3) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.2)

The contact’s sublocality, or `nil` if the sublocality is not needed for the transaction.

> Use subLocality and subAdministrativeArea on -postalAddress instead

## Declaration

```swift
var supplementarySubLocality: String? { get set }
```

<a id="Discussion"></a>

## Discussion

If the transaction requires the contact’s address, and the region requires a sublocality, then the Apple Pay sheet automatically prompts the user to enter their sublocality. The contact’s sublocality information is stored in this property.

## See Also

### Contact information

- [emailAddress](emailaddress.md): The contact’s email address, or `nil` if the contact’s email is not needed for the transaction.
- [name](name.md): The contact’s first and last name, or `nil` if the contact’s name is not needed for the transaction.
- [phoneNumber](phonenumber.md): The contact’s telephone number, or `nil` if the contact’s phone number is not needed for the transaction.
- [postalAddress](postaladdress.md): The contact’s full postal address.

# supplementarySubLocality (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.2+ (deprecated in 10.3) · iPadOS 9.2+ (deprecated in 10.3) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.2)

The contact’s sublocality, or `nil` if the sublocality is not needed for the transaction.

> Use subLocality and subAdministrativeArea on -postalAddress instead

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSString * supplementarySubLocality;
```

<a id="Discussion"></a>

## Discussion

If the transaction requires the contact’s address, and the region requires a sublocality, then the Apple Pay sheet automatically prompts the user to enter their sublocality. The contact’s sublocality information is stored in this property.

## See Also

### Contact information

- [emailAddress](emailaddress.md): The contact’s email address, or `nil` if the contact’s email is not needed for the transaction.
- [name](name.md): The contact’s first and last name, or `nil` if the contact’s name is not needed for the transaction.
- [phoneNumber](phonenumber.md): The contact’s telephone number, or `nil` if the contact’s phone number is not needed for the transaction.
- [postalAddress](postaladdress.md): The contact’s full postal address.
