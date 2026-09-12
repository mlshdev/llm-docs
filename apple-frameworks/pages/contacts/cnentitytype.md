> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnentitytype](https://developer.apple.com/documentation/contacts/cnentitytype)

# CNEntityType (Swift)

**Framework:** Contacts  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The entities the user can grant access to.

## Declaration

```swift
enum CNEntityType
```

## Topics

### Entities

- [CNEntityType.contacts](cnentitytype/contacts.md): The user’s contacts.

### Initializers

- [init(rawValue:)](cnentitytype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Requesting access to the user’s contacts

- [requestAccess(for:completionHandler:)](cncontactstore/requestaccess%28for_completionhandler_%29.md): Requests access to the user’s contacts.
- [authorizationStatus(for:)](cncontactstore/authorizationstatus%28for_%29.md): Returns the current authorization status to access the contact data.
- [CNAuthorizationStatus](cnauthorizationstatus.md): An authorization status the user can grant for an app to access the specified entity type.

# CNEntityType (Objective-C)

**Framework:** Contacts  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The entities the user can grant access to.

## Declaration

```objectivec
enum CNEntityType : NSInteger;
```

## Topics

### Entities

- [CNEntityTypeContacts](cnentitytype/contacts.md): The user’s contacts.

## See Also

### Requesting access to the user’s contacts

- [requestAccessForEntityType:completionHandler:](cncontactstore/requestaccess%28for_completionhandler_%29.md): Requests access to the user’s contacts.
- [authorizationStatusForEntityType:](cncontactstore/authorizationstatus%28for_%29.md): Returns the current authorization status to access the contact data.
- [CNAuthorizationStatus](cnauthorizationstatus.md): An authorization status the user can grant for an app to access the specified entity type.
