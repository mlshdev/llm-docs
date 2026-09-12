> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/remotemediasessionrepresentable/pushtoken](https://developer.apple.com/documentation/nowplaying/remotemediasessionrepresentable/pushtoken)

# pushToken

**Framework:** Now Playing  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iOS App Extension 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The token you use to send push notifications to update this remote session.

## Declaration

```swift
@MainActor var pushToken: Data? { get }
```

## Mentioned In

- [Publishing remote media sessions](../publishing-remote-media-sessions.md)

<a id="discussion"></a>

## Discussion

The push token for a remote session may change over time. Use [pushTokenUpdates](pushtokenupdates.md) to receive the updated push token.

> **Note**

> When you receive an updated push token, transmit it securely to your server (for example, over HTTPS) and invalidate the outdated token promptly so it cannot be reused. The push token is a device-scoped identifier — handle it securely and retain it only as long as needed.
