> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmedialibrary/authorizationstatus()](https://developer.apple.com/documentation/mediaplayer/mpmedialibrary/authorizationstatus())

# authorizationStatus() (Swift)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns whether the app can access the user’s media library.

## Declaration

```swift
class func authorizationStatus() -> MPMediaLibraryAuthorizationStatus
```

<a id="return-value"></a>

## Return Value

The status representing whether the app has access to the user’s media library.

## See Also

### Getting the default media library

- [requestAuthorization(\_:)](requestauthorization%28__%29.md): Displays a user interface so that the user can authorize whether your app may view the media library’s contents.
- [MPMediaLibraryAuthorizationStatus](../mpmedialibraryauthorizationstatus.md): The list of possible states for authorization to access to the user’s media library.
- [default()](default%28%29.md): Returns an instance of the default media library.

# authorizationStatus (Objective-C)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns whether the app can access the user’s media library.

## Declaration

```objectivec
+ (MPMediaLibraryAuthorizationStatus) authorizationStatus;
```

<a id="return-value"></a>

## Return Value

The status representing whether the app has access to the user’s media library.

## See Also

### Getting the default media library

- [requestAuthorization:](requestauthorization%28__%29.md): Displays a user interface so that the user can authorize whether your app may view the media library’s contents.
- [MPMediaLibraryAuthorizationStatus](../mpmedialibraryauthorizationstatus.md): The list of possible states for authorization to access to the user’s media library.
- [defaultMediaLibrary](default%28%29.md): Returns an instance of the default media library.
