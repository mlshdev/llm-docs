> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/musickit/musictokenrequesterror/usertokenrevoked

# MusicTokenRequestError.userTokenRevoked

**Framework:** MusicKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An error that occurs when the user revokes permission for the current app to access their Apple Music data.

## Declaration

```swift
case userTokenRevoked
```

<a id="discussion"></a>

## Discussion

In iOS, apps may attempt to recover from this error condition by suggesting to their users that they can grant access to their Apple Music data again by linking to [openSettingsURLString](../../uikit/uiapplication/opensettingsurlstring.md).
