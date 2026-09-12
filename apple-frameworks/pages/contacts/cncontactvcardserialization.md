> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactvcardserialization](https://developer.apple.com/documentation/contacts/cncontactvcardserialization)

# CNContactVCardSerialization (Swift)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An object you use to convert to and from a vCard representation of the user’s contacts.

## Declaration

```swift
class CNContactVCardSerialization
```

## Topics

### Extracting Contacts from a vCard

- [contacts(with:)](cncontactvcardserialization/contacts%28with_%29.md): Returns the contacts from the vCard data.

### Getting a vCard for Contacts

- [data(with:)](cncontactvcardserialization/data%28with_%29.md): Returns the vCard representation of the specified contacts.

### Getting a Descriptor

- [descriptorForRequiredKeys()](cncontactvcardserialization/descriptorforrequiredkeys%28%29.md): Use to fetch all contact keys required to create vCard data from a contact.

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
- [CNContactsUserDefaults](cncontactsuserdefaults.md): An object that defines the default options to use when displaying contacts.

# CNContactVCardSerialization (Objective-C)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An object you use to convert to and from a vCard representation of the user’s contacts.

## Declaration

```objectivec
@interface CNContactVCardSerialization : NSObject
```

## Topics

### Extracting Contacts from a vCard

- [contactsWithData:error:](cncontactvcardserialization/contacts%28with_%29.md): Returns the contacts from the vCard data.

### Getting a vCard for Contacts

- [dataWithContacts:error:](cncontactvcardserialization/data%28with_%29.md): Returns the vCard representation of the specified contacts.

### Getting a Descriptor

- [descriptorForRequiredKeys](cncontactvcardserialization/descriptorforrequiredkeys%28%29.md): Use to fetch all contact keys required to create vCard data from a contact.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Formatters

- [CNContactFormatter](cncontactformatter.md): An object that you use to format contact information before displaying it to the user.
- [CNPostalAddressFormatter](cnpostaladdressformatter.md): An object that you use to format a contact’s postal addresses.
- [CNContactsUserDefaults](cncontactsuserdefaults.md): An object that defines the default options to use when displaying contacts.
