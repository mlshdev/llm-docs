> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnauthorizationstatus/denied](https://developer.apple.com/documentation/contacts/cnauthorizationstatus/denied)

# CNAuthorizationStatus.denied (Swift)

**Framework:** Contacts  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The user explicitly denied access to contact data for the application.

## Declaration

```swift
case denied
```

## See Also

### Authorization statuses

- [CNAuthorizationStatus.notDetermined](notdetermined.md): The user has not yet made a choice regarding whether the application may access contact data.
- [CNAuthorizationStatus.restricted](restricted.md): The application is not authorized to access contact data. The user cannot change this application’s status, possibly due to active restrictions such as parental controls being in place.
- [CNAuthorizationStatus.authorized](authorized.md): The application is authorized to access contact data.
- [CNAuthorizationStatus.limited](limited.md): The app has access to a limited subset of contacts, chosen by the person using the app.

# CNAuthorizationStatusDenied (Objective-C)

**Framework:** Contacts  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The user explicitly denied access to contact data for the application.

## Declaration

```objectivec
CNAuthorizationStatusDenied
```

## See Also

### Authorization statuses

- [CNAuthorizationStatusNotDetermined](notdetermined.md): The user has not yet made a choice regarding whether the application may access contact data.
- [CNAuthorizationStatusRestricted](restricted.md): The application is not authorized to access contact data. The user cannot change this application’s status, possibly due to active restrictions such as parental controls being in place.
- [CNAuthorizationStatusAuthorized](authorized.md): The application is authorized to access contact data.
- [CNAuthorizationStatusLimited](limited.md): The app has access to a limited subset of contacts, chosen by the person using the app.
