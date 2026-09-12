> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkchannel/pong(_:metadata:)](https://developer.apple.com/documentation/network/networkchannel/pong(_:metadata:))

# pong(\_:metadata:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Send a pong frame on a connection.

## Declaration

```swift
func pong<Content>(_ content: Content? = nil, @ProtocolMetadataBuilder metadata builder: () -> [NWProtocolMetadata] = {[]}) async throws where Content : DataProtocol
```

## Parameters

- `content`: Optional pong data.
- `builder`: A builder for specifying metadata about the content to send.

<a id="discussion"></a>

## Discussion

This may be called before the connection is ready, in which case the send will be enqueued until the connection is ready to send.
