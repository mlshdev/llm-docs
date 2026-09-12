> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/avsystemrouting/avsystemroute-5s2um/routedatachannel](https://developer.apple.com/documentation/avsystemrouting/avsystemroute-5s2um/routedatachannel)

# routeDataChannel

**Framework:** AVSystemRouting  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A data channel for communicating with the extension outside of any media session.

## Declaration

```swift
final var routeDataChannel: AVSystemRoute.DataChannel { get }
```

## Mentioned In

- [Routing and streaming media to remote devices](../routing-and-streaming-media-to-remote-devices.md)

<a id="discussion"></a>

## Discussion

Use this channel for control messages, state synchronization, and other bidirectional communication needs that are not tied to a specific [AVSystemRouteSession](../avsystemroutesession-gp78.md).
