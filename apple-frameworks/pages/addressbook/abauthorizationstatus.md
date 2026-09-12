> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abauthorizationstatus](https://developer.apple.com/documentation/addressbook/abauthorizationstatus)

# ABAuthorizationStatus (Swift)

**Framework:** Address Book  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Different possible values for the authorization status of an app with respect to address book data.

> use CNAuthorizationStatus

## Declaration

```swift
enum ABAuthorizationStatus
```

## Topics

### Constants

- [ABAuthorizationStatus.notDetermined](abauthorizationstatus/notdetermined.md): Deprecated. No authorization status could be determined.
- [ABAuthorizationStatus.restricted](abauthorizationstatus/restricted.md): Deprecated. The app is not authorized to access address book data. The user cannot change this access, possibly due to restrictions such as parental controls.
- [ABAuthorizationStatus.denied](abauthorizationstatus/denied.md): Deprecated. The user explicitly denied access to address book data for this app.
- [ABAuthorizationStatus.authorized](abauthorizationstatus/authorized.md): Deprecated. The app is authorized to access address book data.

### Initializers

- [init(rawValue:)](abauthorizationstatus/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Deprecated

- [ABPersonImageFormat](abpersonimageformat.md): Deprecated. Indicates an image format.

# ABAuthorizationStatus (Objective-C)

**Framework:** Address Book  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Different possible values for the authorization status of an app with respect to address book data.

> use CNAuthorizationStatus

## Declaration

```objectivec
enum ABAuthorizationStatus : CFIndex;
```

## Topics

### Constants

- [kABAuthorizationStatusNotDetermined](abauthorizationstatus/notdetermined.md): Deprecated. No authorization status could be determined.
- [kABAuthorizationStatusRestricted](abauthorizationstatus/restricted.md): Deprecated. The app is not authorized to access address book data. The user cannot change this access, possibly due to restrictions such as parental controls.
- [kABAuthorizationStatusDenied](abauthorizationstatus/denied.md): Deprecated. The user explicitly denied access to address book data for this app.
- [kABAuthorizationStatusAuthorized](abauthorizationstatus/authorized.md): Deprecated. The app is authorized to access address book data.

## See Also

### Deprecated

- [ABPersonImageFormat](abpersonimageformat.md): Deprecated. Indicates an image format.
