> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkchannel/send(_:lastmessage:metadata:other:)](https://developer.apple.com/documentation/network/networkchannel/send(_:lastmessage:metadata:other:))

# send(\_:lastMessage:metadata:other:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Send data on a connection.

## Declaration

```swift
func send<T>(_ content: Data, lastMessage: Bool = false, metadata: NWProtocolFramer.Message? = nil, @ProtocolMetadataBuilder other builder: () -> [NWProtocolMetadata] = {[]}) async throws where ApplicationProtocol == Framer<T>, T : FramerProtocol
```

## Parameters

- `content`: The data to send.
- `lastMessage`: The last message to send.
- `metadata`: The metadata about the data being sent.
- `builder`: A builder for specifying metadata about the content to send.
