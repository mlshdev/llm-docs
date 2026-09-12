> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/avsystemrouting/avsystemroutemediasession-98ioq/datachannel](https://developer.apple.com/documentation/avsystemrouting/avsystemroutemediasession-98ioq/datachannel)

# dataChannel

**Framework:** AVSystemRouting  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The data channel for sending and receiving data with the remote app.

## Declaration

```swift
final var dataChannel: AVSystemRoute.DataChannel? { get }
```

## Mentioned In

- [Routing and streaming media to remote devices](../routing-and-streaming-media-to-remote-devices.md)
- [Routing media to third-party devices](../routing-media-to-third-party-devices.md)

<a id="discussion"></a>

## Discussion

This property is always non-nil when obtained from a successful call to [start()](../avsystemroutesession-gp78/start%28%29.md).
