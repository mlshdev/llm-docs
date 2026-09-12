> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmedialibraryauthorizationstatus](https://developer.apple.com/documentation/mediaplayer/mpmedialibraryauthorizationstatus)

# MPMediaLibraryAuthorizationStatus (Swift)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · visionOS 1.0+

The list of possible states for authorization to access to the user’s media library.

## Declaration

```swift
enum MPMediaLibraryAuthorizationStatus
```

## Topics

### Authorization statuses

- [MPMediaLibraryAuthorizationStatus.notDetermined](mpmedialibraryauthorizationstatus/notdetermined.md): The user hasn’t determined whether to authorize the use of their media library.
- [MPMediaLibraryAuthorizationStatus.denied](mpmedialibraryauthorizationstatus/denied.md): The app may not access the items in the user’s media library.
- [MPMediaLibraryAuthorizationStatus.restricted](mpmedialibraryauthorizationstatus/restricted.md): The app may access some of the content in the user’s media library.
- [MPMediaLibraryAuthorizationStatus.authorized](mpmedialibraryauthorizationstatus/authorized.md): Your app may access items in the user’s media library.

### Initializers

- [init(rawValue:)](mpmedialibraryauthorizationstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the default media library

- [requestAuthorization(\_:)](mpmedialibrary/requestauthorization%28__%29.md): Displays a user interface so that the user can authorize whether your app may view the media library’s contents.
- [authorizationStatus()](mpmedialibrary/authorizationstatus%28%29.md): Returns whether the app can access the user’s media library.
- [default()](mpmedialibrary/default%28%29.md): Returns an instance of the default media library.

# MPMediaLibraryAuthorizationStatus (Objective-C)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · visionOS 1.0+

The list of possible states for authorization to access to the user’s media library.

## Declaration

```objectivec
enum MPMediaLibraryAuthorizationStatus : NSInteger;
```

## Topics

### Authorization statuses

- [MPMediaLibraryAuthorizationStatusNotDetermined](mpmedialibraryauthorizationstatus/notdetermined.md): The user hasn’t determined whether to authorize the use of their media library.
- [MPMediaLibraryAuthorizationStatusDenied](mpmedialibraryauthorizationstatus/denied.md): The app may not access the items in the user’s media library.
- [MPMediaLibraryAuthorizationStatusRestricted](mpmedialibraryauthorizationstatus/restricted.md): The app may access some of the content in the user’s media library.
- [MPMediaLibraryAuthorizationStatusAuthorized](mpmedialibraryauthorizationstatus/authorized.md): Your app may access items in the user’s media library.

## See Also

### Getting the default media library

- [requestAuthorization:](mpmedialibrary/requestauthorization%28__%29.md): Displays a user interface so that the user can authorize whether your app may view the media library’s contents.
- [authorizationStatus](mpmedialibrary/authorizationstatus%28%29.md): Returns whether the app can access the user’s media library.
- [defaultMediaLibrary](mpmedialibrary/default%28%29.md): Returns an instance of the default media library.
