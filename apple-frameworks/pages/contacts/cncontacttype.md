> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontacttype](https://developer.apple.com/documentation/contacts/cncontacttype)

# CNContactType (Swift)

**Framework:** Contacts  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The types a contact can be.

## Declaration

```swift
enum CNContactType
```

## Topics

### Constants

- [CNContactType.person](cncontacttype/person.md): The contact is a person.
- [CNContactType.organization](cncontacttype/organization.md): The contact is an Organization.

### Initializers

- [init(rawValue:)](cncontacttype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying the Contact

- [identifier](cncontact/identifier.md): A value that uniquely identifies a contact on the device.
- [contactType](cncontact/contacttype.md): An enum identifying the contact type.

# CNContactType (Objective-C)

**Framework:** Contacts  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The types a contact can be.

## Declaration

```objectivec
enum CNContactType : NSInteger;
```

## Topics

### Constants

- [CNContactTypePerson](cncontacttype/person.md): The contact is a person.
- [CNContactTypeOrganization](cncontacttype/organization.md): The contact is an Organization.

## See Also

### Identifying the Contact

- [identifier](cncontact/identifier.md): A value that uniquely identifies a contact on the device.
- [contactType](cncontact/contacttype.md): An enum identifying the contact type.
