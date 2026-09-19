> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/networkchannel/receive()-86md7

# receive()

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Receive data from a connection.

## Declaration

```swift
func receive() async throws -> ApplicationProtocol.Message<Data>
```

<a id="discussion"></a>

## Discussion

This may be called before the connection is ready, in which case the receive request will be enqueued until the connection is ready.
