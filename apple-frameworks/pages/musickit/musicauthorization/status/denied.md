> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/musickit/musicauthorization/status/denied

# MusicAuthorization.Status.denied

**Framework:** MusicKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The user denied permission for the current app to use MusicKit.

## Declaration

```swift
case denied
```

<a id="discussion"></a>

## Discussion

On iOS, applications may attempt to recover from this situation by suggesting to their users that they can grant access to their Apple Music data again by linking to [openSettingsURLString](../../../uikit/uiapplication/opensettingsurlstring.md).
