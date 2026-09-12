> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phaccesslevel](https://developer.apple.com/documentation/photos/phaccesslevel)

# PHAccessLevel (Swift)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The app’s level of access to the user’s photo library.

## Declaration

```swift
enum PHAccessLevel
```

## Topics

### Access Levels

- [PHAccessLevel.addOnly](phaccesslevel/addonly.md): A value that indicates the app may only add to the user’s photo library.
- [PHAccessLevel.readWrite](phaccesslevel/readwrite.md): A value that indicates the app can read from and write to the user’s photo library.

### Initializers

- [init(rawValue:)](phaccesslevel/init%28rawvalue_%29.md)

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
- [PHAuthorizationStatus](phauthorizationstatus.md): Information about your app’s authorization to access the user’s photo library.
- [authorizationStatus()](phphotolibrary/authorizationstatus%28%29.md): Deprecated. Returns information about your app’s authorization to access the user’s photo library.
- [requestAuthorization(\_:)](phphotolibrary/requestauthorization%28__%29.md): Deprecated. Requests the user’s permission, if needed, to access the photo library.

# PHAccessLevel (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The app’s level of access to the user’s photo library.

## Declaration

```objectivec
enum PHAccessLevel : NSInteger;
```

## Topics

### Access Levels

- [PHAccessLevelAddOnly](phaccesslevel/addonly.md): A value that indicates the app may only add to the user’s photo library.
- [PHAccessLevelReadWrite](phaccesslevel/readwrite.md): A value that indicates the app can read from and write to the user’s photo library.

## See Also

### Verifying Authorization

- [authorizationStatusForAccessLevel:](phphotolibrary/authorizationstatus%28for_%29.md): Returns the app’s authorization to access the user’s photo library for the specified access level.
- [requestAuthorizationForAccessLevel:handler:](phphotolibrary/requestauthorization%28for_handler_%29.md): Prompts the user to grant the app permission to access the photo library.
- [PHAuthorizationStatus](phauthorizationstatus.md): Information about your app’s authorization to access the user’s photo library.
- [authorizationStatus](phphotolibrary/authorizationstatus%28%29.md): Deprecated. Returns information about your app’s authorization to access the user’s photo library.
- [requestAuthorization:](phphotolibrary/requestauthorization%28__%29.md): Deprecated. Requests the user’s permission, if needed, to access the photo library.
