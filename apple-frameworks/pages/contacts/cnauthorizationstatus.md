> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnauthorizationstatus](https://developer.apple.com/documentation/contacts/cnauthorizationstatus)

# CNAuthorizationStatus (Swift)

**Framework:** Contacts  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An authorization status the user can grant for an app to access the specified entity type.

## Declaration

```swift
enum CNAuthorizationStatus
```

## Topics

### Authorization statuses

- [CNAuthorizationStatus.notDetermined](cnauthorizationstatus/notdetermined.md): The user has not yet made a choice regarding whether the application may access contact data.
- [CNAuthorizationStatus.restricted](cnauthorizationstatus/restricted.md): The application is not authorized to access contact data. The user cannot change this application’s status, possibly due to active restrictions such as parental controls being in place.
- [CNAuthorizationStatus.denied](cnauthorizationstatus/denied.md): The user explicitly denied access to contact data for the application.
- [CNAuthorizationStatus.authorized](cnauthorizationstatus/authorized.md): The application is authorized to access contact data.
- [CNAuthorizationStatus.limited](cnauthorizationstatus/limited.md): The app has access to a limited subset of contacts, chosen by the person using the app.

### Initializers

- [init(rawValue:)](cnauthorizationstatus/init%28rawvalue_%29.md)

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
- [CNEntityType](cnentitytype.md): The entities the user can grant access to.

# CNAuthorizationStatus (Objective-C)

**Framework:** Contacts  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An authorization status the user can grant for an app to access the specified entity type.

## Declaration

```objectivec
enum CNAuthorizationStatus : NSInteger;
```

## Topics

### Authorization statuses

- [CNAuthorizationStatusNotDetermined](cnauthorizationstatus/notdetermined.md): The user has not yet made a choice regarding whether the application may access contact data.
- [CNAuthorizationStatusRestricted](cnauthorizationstatus/restricted.md): The application is not authorized to access contact data. The user cannot change this application’s status, possibly due to active restrictions such as parental controls being in place.
- [CNAuthorizationStatusDenied](cnauthorizationstatus/denied.md): The user explicitly denied access to contact data for the application.
- [CNAuthorizationStatusAuthorized](cnauthorizationstatus/authorized.md): The application is authorized to access contact data.
- [CNAuthorizationStatusLimited](cnauthorizationstatus/limited.md): The app has access to a limited subset of contacts, chosen by the person using the app.

## See Also

### Requesting access to the user’s contacts

- [requestAccessForEntityType:completionHandler:](cncontactstore/requestaccess%28for_completionhandler_%29.md): Requests access to the user’s contacts.
- [authorizationStatusForEntityType:](cncontactstore/authorizationstatus%28for_%29.md): Returns the current authorization status to access the contact data.
- [CNEntityType](cnentitytype.md): The entities the user can grant access to.
