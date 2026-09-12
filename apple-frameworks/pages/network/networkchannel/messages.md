> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkchannel/messages](https://developer.apple.com/documentation/network/networkchannel/messages)

# messages

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Receive data from a connection as an async stream.

## Declaration

```swift
var messages: AsyncThrowingStream<ApplicationProtocol.Message<ApplicationProtocol.ContentType>, any Error> { get }
```

<a id="discussion"></a>

## Discussion

This may be called before the connection is ready, in which case the receive requests will be enqueued until the connection is ready.
