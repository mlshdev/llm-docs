> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musictokenrequesterror/permissiondenied](https://developer.apple.com/documentation/musickit/musictokenrequesterror/permissiondenied)

# MusicTokenRequestError.permissionDenied

**Framework:** MusicKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An error that occurs when the user doesn’t consent for the current app to access their Apple Music data.

## Declaration

```swift
case permissionDenied
```

<a id="discussion"></a>

## Discussion

Apps using MusicKit need to request prior informed consent from the user to access their Apple Music data by calling [request()](../musicauthorization/request%28%29.md) at the appropriate point in the app flow, right before needing to use other APIs from MusicKit.
