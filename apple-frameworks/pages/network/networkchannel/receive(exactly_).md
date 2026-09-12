> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkchannel/receive(exactly:)](https://developer.apple.com/documentation/network/networkchannel/receive(exactly:))

# receive(exactly:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Receive data from a connection.

## Declaration

```swift
func receive(exactly: Int) async throws -> ApplicationProtocol.Message<Data>
```

## Parameters

- `exactly`: Receive exactly this number of bytes from the connection.

<a id="discussion"></a>

## Discussion

This may be called before the connection is ready, in which case the receive request will be enqueued until the connection is ready.
