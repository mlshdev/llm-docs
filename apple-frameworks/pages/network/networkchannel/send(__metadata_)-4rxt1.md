> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkchannel/send(_:metadata:)-4rxt1](https://developer.apple.com/documentation/network/networkchannel/send(_:metadata:)-4rxt1)

# send(\_:metadata:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Send data on a connection.

## Declaration

```swift
func send<Sending, Receiving, CoderType>(_ content: Sending, @ProtocolMetadataBuilder metadata builder: () -> [NWProtocolMetadata] = {[]}) async throws where ApplicationProtocol == Coder<Sending, Receiving, CoderType>, Sending : Encodable, Receiving : Decodable, CoderType : NetworkCoder
```

## Parameters

- `content`: Object to send. The object will be encoded and then sent.
- `builder`: A builder for specifying metadata about the content to send.

<a id="discussion"></a>

## Discussion

This may be called before the connection is ready, in which case the send will be enqueued until the connection is ready to send.
