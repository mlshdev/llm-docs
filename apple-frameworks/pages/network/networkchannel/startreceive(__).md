> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkchannel/startreceive(_:)](https://developer.apple.com/documentation/network/networkchannel/startreceive(_:))

# startReceive(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Receive partial data from a connection.

## Declaration

```swift
func startReceive(_ handler: ((Int, Int) async throws -> ApplicationProtocol.Message<Data>) async throws -> Void) async throws
```

## Parameters

- `handler`: Called immediately after invoking `startReceive`. Use the receive closure to keep receiving partial data until the message is complete.

<a id="discussion"></a>

## Discussion

Use this to receive large amounts of data or data that can be processed incrementally.

This may be called before the connection is ready, in which case the receive request will be enqueued until the connection is ready.
