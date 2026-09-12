> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/remotemediasession/end()](https://developer.apple.com/documentation/nowplaying/remotemediasession/end())

# end()

**Framework:** Now Playing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Ends the session and removes it from the Now Playing interface.

## Declaration

```swift
@MainActor func end() async throws
```

## Mentioned In

- [Publishing remote media sessions](../publishing-remote-media-sessions.md)

<a id="discussion"></a>

## Discussion

> **Throws**

> [RemoteMediaSessionError.internalFailure](../remotemediasessionerror/internalfailure.md) if the session couldn’t be removed from the system.
