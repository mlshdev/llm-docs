> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediasession/requesttobecomeapplicationprimary()](https://developer.apple.com/documentation/nowplaying/mediasession/requesttobecomeapplicationprimary())

# requestToBecomeApplicationPrimary()

**Framework:** Now Playing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Attempts to make this session your app’s primary media session.

## Declaration

```swift
@MainActor func requestToBecomeApplicationPrimary() async throws
```

## Mentioned In

- [Publishing media sessions](../publishing-media-sessions.md)

<a id="discussion"></a>

## Discussion

Use this method to signal to the system that this session supplies data and handles commands.

> **Throws**

> [MediaSessionError.invalidState](../mediasessionerror/invalidstate.md) if the session can’t become active. [MediaSessionError.internalFailure](../mediasessionerror/internalfailure.md) if the system couldn’t set the active player.
