> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkchannel/receive()-8jbul](https://developer.apple.com/documentation/network/networkchannel/receive()-8jbul)

# receive()

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Receive data on a connection.

## Declaration

```swift
func receive<T>() async throws -> ApplicationProtocol.Message<Data> where ApplicationProtocol == Framer<T>, T : FramerProtocol
```
