> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkconnection/remotemaxstreamsunidirectional](https://developer.apple.com/documentation/network/networkconnection/remotemaxstreamsunidirectional)

# remoteMaxStreamsUnidirectional

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Get the maximum number of unidirectional streams advertised by peer that an application is allowed to create.

## Declaration

```swift
final var remoteMaxStreamsUnidirectional: Int { get }
```

<a id="discussion"></a>

## Discussion

Note that while attempts to create streams above this limit will be blocked until the server increases the limit, these blocked attempts will cause a STREAMS_BLOCKED frame to be sent to the server. This informs the server that the client has more streams it would like to create. As a result, the caller should attempt to create streams over this limit if it desires more streams.
