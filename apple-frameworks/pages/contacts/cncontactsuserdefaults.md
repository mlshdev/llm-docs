> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactsuserdefaults](https://developer.apple.com/documentation/contacts/cncontactsuserdefaults)

# CNContactsUserDefaults (Swift)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An object that defines the default options to use when displaying contacts.

## Declaration

```swift
class CNContactsUserDefaults
```

## Topics

### Getting the Shared Database

- [shared()](cncontactsuserdefaults/shared%28%29.md): The singleton contacts user defaults object.

### Getting the Default Values

- [countryCode](cncontactsuserdefaults/countrycode.md): An ISO country code.
- [sortOrder](cncontactsuserdefaults/sortorder.md): Default sorting order by name.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Formatters

- [CNContactFormatter](cncontactformatter.md): An object that you use to format contact information before displaying it to the user.
- [CNPostalAddressFormatter](cnpostaladdressformatter.md): An object that you use to format a contact’s postal addresses.
- [CNContactVCardSerialization](cncontactvcardserialization.md): An object you use to convert to and from a vCard representation of the user’s contacts.

# CNContactsUserDefaults (Objective-C)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An object that defines the default options to use when displaying contacts.

## Declaration

```objectivec
@interface CNContactsUserDefaults : NSObject
```

## Topics

### Getting the Shared Database

- [sharedDefaults](cncontactsuserdefaults/shared%28%29.md): The singleton contacts user defaults object.

### Getting the Default Values

- [countryCode](cncontactsuserdefaults/countrycode.md): An ISO country code.
- [sortOrder](cncontactsuserdefaults/sortorder.md): Default sorting order by name.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Formatters

- [CNContactFormatter](cncontactformatter.md): An object that you use to format contact information before displaying it to the user.
- [CNPostalAddressFormatter](cnpostaladdressformatter.md): An object that you use to format a contact’s postal addresses.
- [CNContactVCardSerialization](cncontactvcardserialization.md): An object you use to convert to and from a vCard representation of the user’s contacts.
