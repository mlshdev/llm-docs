> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/remotemediasession/pushtostarttokenupdates](https://developer.apple.com/documentation/nowplaying/remotemediasession/pushtostarttokenupdates)

# pushToStartTokenUpdates

**Framework:** Now Playing  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An asynchronous sequence that delivers updated tokens for starting a [RemoteMediaSession](../remotemediasession.md) through a push notification.

## Declaration

```swift
@MainActor static var pushToStartTokenUpdates: AsyncStream<Data> { get }
```

## Mentioned In

- [Publishing remote media sessions](../publishing-remote-media-sessions.md)

<a id="discussion"></a>

## Discussion

Use push notifications to start new remote sessions and update ongoing ones. For additional information, see [Publishing remote media sessions](../publishing-remote-media-sessions.md)
