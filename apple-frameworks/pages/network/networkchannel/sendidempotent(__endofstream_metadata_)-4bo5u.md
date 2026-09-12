> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkchannel/sendidempotent(_:endofstream:metadata:)-4bo5u](https://developer.apple.com/documentation/network/networkchannel/sendidempotent(_:endofstream:metadata:)-4bo5u)

# sendIdempotent(\_:endOfStream:metadata:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Send data idempotently on a connection.

## Declaration

```swift
func sendIdempotent<Content>(_ content: Content, endOfStream: Bool = false, @ProtocolMetadataBuilder metadata builder: () -> [NWProtocolMetadata] = {[]}) where Content : DataProtocol
```

## Parameters

- `content`: The bytes to send on the connection.
- `endOfStream`: Write-close this stream.
- `builder`: A builder for specifying metadata about the content to send.

<a id="discussion"></a>

## Discussion

This may be called before the connection is ready, in which case the send will be enqueued until the connection is ready to send.

Idempotent content may be sent multiple times when opening up a 0-RTT connection, so there is no completion block
