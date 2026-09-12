> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiclibrary/error/permissiondenied](https://developer.apple.com/documentation/musickit/musiclibrary/error/permissiondenied)

# MusicLibrary.Error.permissionDenied

**Framework:** MusicKit  
**Kind:** Case  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

An error that occurs when the user doesn’t consent for the current app to access their Apple Music library.

## Declaration

```swift
case permissionDenied
```

<a id="discussion"></a>

## Discussion

Apps using MusicKit need to request prior informed consent from the user to access their Apple Music library by calling [request()](../../musicauthorization/request%28%29.md) at the appropriate point in the app flow, right before needing to use other APIs from MusicKit.
