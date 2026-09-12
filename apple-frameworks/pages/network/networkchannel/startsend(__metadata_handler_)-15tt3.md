> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkchannel/startsend(_:metadata:handler:)-15tt3](https://developer.apple.com/documentation/network/networkchannel/startsend(_:metadata:handler:)-15tt3)

# startSend(\_:metadata:handler:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Send partial text on a connection.

## Declaration

```swift
func startSend(_ content: String, @ProtocolMetadataBuilder metadata builder: () -> [NWProtocolMetadata] = {[]}, handler: ((String, Bool) async throws -> Void) async throws -> Void) async throws
```

## Parameters

- `content`: A string to send.
- `builder`: A builder for specifying metadata about the content to send.
- `handler`: A handler that will be invoked immediately, and will be passed a closure that should be called repeatedly until all text content is sent. Intermediate invocations of the send closure must be invoked with `isComplete` set to false. The last call to the send closure must be invoked with `isComplete` set to true.

<a id="discussion"></a>

## Discussion

This may be called before the connection is ready, in which case the send will be enqueued until the connection is ready to send.
