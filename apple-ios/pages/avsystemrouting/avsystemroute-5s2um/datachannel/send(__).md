> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/avsystemrouting/avsystemroute-5s2um/datachannel/send(_:)](https://developer.apple.com/documentation/avsystemrouting/avsystemroute-5s2um/datachannel/send(_:))

# send(\_:)

**Framework:** AVSystemRouting  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Sends data to a remote application.

## Declaration

```swift
final func send(_ data: Data) async throws
```

## Parameters

- `data`: The data to send to the remote application.

## Mentioned In

- [Routing and streaming media to remote devices](../../routing-and-streaming-media-to-remote-devices.md)
- [Routing media to third-party devices](../../routing-media-to-third-party-devices.md)

<a id="discussion"></a>

## Discussion

Calling this function again before a previous send completes is safe; multiple send operations can be in-flight concurrently.

> **Throws**

> An error if the send operation fails.
