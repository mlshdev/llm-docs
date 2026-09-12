> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abauthorizationstatus/restricted](https://developer.apple.com/documentation/addressbook/abauthorizationstatus/restricted)

# ABAuthorizationStatus.restricted (Swift)

**Framework:** Address Book  
**Kind:** Case  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The app is not authorized to access address book data. The user cannot change this access, possibly due to restrictions such as parental controls.

> use CNAuthorizationStatus

## Declaration

```swift
case restricted
```

## See Also

### Constants

- [ABAuthorizationStatus.notDetermined](notdetermined.md): Deprecated. No authorization status could be determined.
- [ABAuthorizationStatus.denied](denied.md): Deprecated. The user explicitly denied access to address book data for this app.
- [ABAuthorizationStatus.authorized](authorized.md): Deprecated. The app is authorized to access address book data.

# kABAuthorizationStatusRestricted (Objective-C)

**Framework:** Address Book  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The app is not authorized to access address book data. The user cannot change this access, possibly due to restrictions such as parental controls.

> use CNAuthorizationStatus

## Declaration

```objectivec
kABAuthorizationStatusRestricted
```

## See Also

### Constants

- [kABAuthorizationStatusNotDetermined](notdetermined.md): Deprecated. No authorization status could be determined.
- [kABAuthorizationStatusDenied](denied.md): Deprecated. The user explicitly denied access to address book data for this app.
- [kABAuthorizationStatusAuthorized](authorized.md): Deprecated. The app is authorized to access address book data.
