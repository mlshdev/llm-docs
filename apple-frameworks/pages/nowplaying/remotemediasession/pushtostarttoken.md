> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/remotemediasession/pushtostarttoken](https://developer.apple.com/documentation/nowplaying/remotemediasession/pushtostarttoken)

# pushToStartToken

**Framework:** Now Playing  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The token you use to start a [RemoteMediaSession](../remotemediasession.md) through a push notification.

## Declaration

```swift
@MainActor static var pushToStartToken: Data? { get }
```

## Mentioned In

- [Publishing remote media sessions](../publishing-remote-media-sessions.md)

<a id="discussion"></a>

## Discussion

The push token for a [RemoteMediaSession](../remotemediasession.md) may change over time. Use the [pushToStartTokenUpdates](pushtostarttokenupdates.md) asynchronous sequence to receive an updated push-to-start token.

> **Note**

> When you receive an updated push token, transmit it securely to your server (for example, over HTTPS) and invalidate the outdated token promptly so it cannot be reused.
