> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkchannel/close(code:reason:metadata:)](https://developer.apple.com/documentation/network/networkchannel/close(code:reason:metadata:))

# close(code:reason:metadata:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Send a WebSocket close frame on a connection.

## Declaration

```swift
func close(code: NWProtocolWebSocket.CloseCode = .protocolCode(.normalClosure), reason: String? = nil, @ProtocolMetadataBuilder metadata builder: () -> [NWProtocolMetadata] = {[]}) async throws
```

## Parameters

- `code`: Optional close code. Defaults to normal closure.
- `reason`: Optional reason string containing details about the closure.
- `builder`: A builder for specifying metadata about the content to send.

<a id="discussion"></a>

## Discussion

This may be called before the connection is ready, in which case the send will be enqueued until the connection is ready to send.
