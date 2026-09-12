> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abauthorizationstatus/denied](https://developer.apple.com/documentation/addressbook/abauthorizationstatus/denied)

# ABAuthorizationStatus.denied (Swift)

**Framework:** Address Book  
**Kind:** Case  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The user explicitly denied access to address book data for this app.

> use CNAuthorizationStatus

## Declaration

```swift
case denied
```

## See Also

### Constants

- [ABAuthorizationStatus.notDetermined](notdetermined.md): Deprecated. No authorization status could be determined.
- [ABAuthorizationStatus.restricted](restricted.md): Deprecated. The app is not authorized to access address book data. The user cannot change this access, possibly due to restrictions such as parental controls.
- [ABAuthorizationStatus.authorized](authorized.md): Deprecated. The app is authorized to access address book data.

# kABAuthorizationStatusDenied (Objective-C)

**Framework:** Address Book  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The user explicitly denied access to address book data for this app.

> use CNAuthorizationStatus

## Declaration

```objectivec
kABAuthorizationStatusDenied
```

## See Also

### Constants

- [kABAuthorizationStatusNotDetermined](notdetermined.md): Deprecated. No authorization status could be determined.
- [kABAuthorizationStatusRestricted](restricted.md): Deprecated. The app is not authorized to access address book data. The user cannot change this access, possibly due to restrictions such as parental controls.
- [kABAuthorizationStatusAuthorized](authorized.md): Deprecated. The app is authorized to access address book data.
