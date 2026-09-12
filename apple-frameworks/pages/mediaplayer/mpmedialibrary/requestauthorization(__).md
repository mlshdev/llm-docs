> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmedialibrary/requestauthorization(_:)](https://developer.apple.com/documentation/mediaplayer/mpmedialibrary/requestauthorization(_:))

# requestAuthorization(\_:) (Swift)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · visionOS 1.0+

Displays a user interface so that the user can authorize whether your app may view the media library’s contents.

## Declaration

```swift
class func requestAuthorization(_ completionHandler: @escaping @Sendable (MPMediaLibraryAuthorizationStatus) -> Void)
```

```swift
class func requestAuthorization() async -> MPMediaLibraryAuthorizationStatus
```

## Parameters

- `completionHandler`: A block that the system calls after the user chooses whether to authorize the app.

  - **status**: The status chosen by the user.

## See Also

### Getting the default media library

- [authorizationStatus()](authorizationstatus%28%29.md): Returns whether the app can access the user’s media library.
- [MPMediaLibraryAuthorizationStatus](../mpmedialibraryauthorizationstatus.md): The list of possible states for authorization to access to the user’s media library.
- [default()](default%28%29.md): Returns an instance of the default media library.

# requestAuthorization: (Objective-C)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · visionOS 1.0+

Displays a user interface so that the user can authorize whether your app may view the media library’s contents.

## Declaration

```objectivec
+ (void) requestAuthorization:(void (^)(MPMediaLibraryAuthorizationStatus status)) completionHandler;
```

## Parameters

- `completionHandler`: A block that the system calls after the user chooses whether to authorize the app.

  - **status**: The status chosen by the user.

## See Also

### Getting the default media library

- [authorizationStatus](authorizationstatus%28%29.md): Returns whether the app can access the user’s media library.
- [MPMediaLibraryAuthorizationStatus](../mpmedialibraryauthorizationstatus.md): The list of possible states for authorization to access to the user’s media library.
- [defaultMediaLibrary](default%28%29.md): Returns an instance of the default media library.
