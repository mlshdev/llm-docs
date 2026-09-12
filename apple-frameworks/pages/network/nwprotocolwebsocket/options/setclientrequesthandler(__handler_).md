> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolwebsocket/options/setclientrequesthandler(_:handler:)](https://developer.apple.com/documentation/network/nwprotocolwebsocket/options/setclientrequesthandler(_:handler:))

# setClientRequestHandler(\_:handler:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets a handler to react to as a server to inbound WebSocket client handshakes.

## Declaration

```swift
@preconcurrency func setClientRequestHandler(_ queue: DispatchQueue, handler: @escaping @Sendable ([String], [(name: String, value: String)]) -> NWProtocolWebSocket.Response)
```

## See Also

### Handling Server Handshakes

- [NWProtocolWebSocket.Response](../response.md): A WebSocket handshake reponse sent from a server to a client.
