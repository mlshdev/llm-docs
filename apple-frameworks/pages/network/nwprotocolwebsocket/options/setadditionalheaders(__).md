> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwprotocolwebsocket/options/setadditionalheaders(_:)

# setAdditionalHeaders(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets additional HTTP header fields to be sent by the client during the WebSocket handshake.

## Declaration

```swift
func setAdditionalHeaders(_ headers: [(name: String, value: String)])
```

## See Also

### Configuring Client Handshakes

- [setSubprotocols(\_:)](setsubprotocols%28__%29.md): Adds to the list of supported application protocols that will be presented to a WebSocket server during connection establishment.
- [skipHandshake](skiphandshake.md): A Boolean indicating whether the WebSocket protocol skips its handshake and begins framing data once the underlying connection is established.
