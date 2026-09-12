> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmedialibrary/default()](https://developer.apple.com/documentation/mediaplayer/mpmedialibrary/default())

# default() (Swift)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns an instance of the default media library.

## Declaration

```swift
class func `default`() -> MPMediaLibrary
```

<a id="return-value"></a>

## Return Value

The user’s default media library.

## See Also

### Getting the default media library

- [requestAuthorization(\_:)](requestauthorization%28__%29.md): Displays a user interface so that the user can authorize whether your app may view the media library’s contents.
- [authorizationStatus()](authorizationstatus%28%29.md): Returns whether the app can access the user’s media library.
- [MPMediaLibraryAuthorizationStatus](../mpmedialibraryauthorizationstatus.md): The list of possible states for authorization to access to the user’s media library.

# defaultMediaLibrary (Objective-C)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns an instance of the default media library.

## Declaration

```objectivec
+ (MPMediaLibrary *) defaultMediaLibrary;
```

<a id="return-value"></a>

## Return Value

The user’s default media library.

## See Also

### Getting the default media library

- [requestAuthorization:](requestauthorization%28__%29.md): Displays a user interface so that the user can authorize whether your app may view the media library’s contents.
- [authorizationStatus](authorizationstatus%28%29.md): Returns whether the app can access the user’s media library.
- [MPMediaLibraryAuthorizationStatus](../mpmedialibraryauthorizationstatus.md): The list of possible states for authorization to access to the user’s media library.
