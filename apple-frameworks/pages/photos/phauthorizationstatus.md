> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phauthorizationstatus](https://developer.apple.com/documentation/photos/phauthorizationstatus)

# PHAuthorizationStatus (Swift)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Information about your app’s authorization to access the user’s photo library.

## Declaration

```swift
enum PHAuthorizationStatus
```

## Mentioned In

- [Delivering an Enhanced Privacy Experience in Your Photos App](../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md)

## Topics

### Status Types

- [PHAuthorizationStatus.notDetermined](phauthorizationstatus/notdetermined.md): The user hasn’t set the app’s authorization status.
- [PHAuthorizationStatus.restricted](phauthorizationstatus/restricted.md): The app isn’t authorized to access the photo library, and the user can’t grant such permission.
- [PHAuthorizationStatus.denied](phauthorizationstatus/denied.md): The user explicitly denied this app access to the photo library.
- [PHAuthorizationStatus.authorized](phauthorizationstatus/authorized.md): The user explicitly granted this app access to the photo library.
- [PHAuthorizationStatus.limited](phauthorizationstatus/limited.md): The user authorized this app for limited photo library access.

### Initializers

- [init(rawValue:)](phauthorizationstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Verifying Authorization

- [authorizationStatus(for:)](phphotolibrary/authorizationstatus%28for_%29.md): Returns the app’s authorization to access the user’s photo library for the specified access level.
- [requestAuthorization(for:handler:)](phphotolibrary/requestauthorization%28for_handler_%29.md): Prompts the user to grant the app permission to access the photo library.
- [PHAccessLevel](phaccesslevel.md): The app’s level of access to the user’s photo library.
- [authorizationStatus()](phphotolibrary/authorizationstatus%28%29.md): Deprecated. Returns information about your app’s authorization to access the user’s photo library.
- [requestAuthorization(\_:)](phphotolibrary/requestauthorization%28__%29.md): Deprecated. Requests the user’s permission, if needed, to access the photo library.

# PHAuthorizationStatus (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Information about your app’s authorization to access the user’s photo library.

## Declaration

```objectivec
enum PHAuthorizationStatus : NSInteger;
```

## Mentioned In

- [Delivering an Enhanced Privacy Experience in Your Photos App](../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md)

## Topics

### Status Types

- [PHAuthorizationStatusNotDetermined](phauthorizationstatus/notdetermined.md): The user hasn’t set the app’s authorization status.
- [PHAuthorizationStatusRestricted](phauthorizationstatus/restricted.md): The app isn’t authorized to access the photo library, and the user can’t grant such permission.
- [PHAuthorizationStatusDenied](phauthorizationstatus/denied.md): The user explicitly denied this app access to the photo library.
- [PHAuthorizationStatusAuthorized](phauthorizationstatus/authorized.md): The user explicitly granted this app access to the photo library.
- [PHAuthorizationStatusLimited](phauthorizationstatus/limited.md): The user authorized this app for limited photo library access.

## See Also

### Verifying Authorization

- [authorizationStatusForAccessLevel:](phphotolibrary/authorizationstatus%28for_%29.md): Returns the app’s authorization to access the user’s photo library for the specified access level.
- [requestAuthorizationForAccessLevel:handler:](phphotolibrary/requestauthorization%28for_handler_%29.md): Prompts the user to grant the app permission to access the photo library.
- [PHAccessLevel](phaccesslevel.md): The app’s level of access to the user’s photo library.
- [authorizationStatus](phphotolibrary/authorizationstatus%28%29.md): Deprecated. Returns information about your app’s authorization to access the user’s photo library.
- [requestAuthorization:](phphotolibrary/requestauthorization%28__%29.md): Deprecated. Requests the user’s permission, if needed, to access the photo library.
