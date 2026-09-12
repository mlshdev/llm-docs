> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolquic](https://developer.apple.com/documentation/network/nwprotocolquic)

# NWProtocolQUIC

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A network protocol for connections that use the QUIC transport protocol.

## Declaration

```swift
class NWProtocolQUIC
```

## Topics

### Creating QUIC Connections

- [NWProtocolQUIC.Options](nwprotocolquic/options.md): A container of options that configure the use of QUIC on a connection.
- [definition](nwprotocolquic/definition.md): The system definition of the QUIC transport protocol.

### Inspecting QUIC State

- [NWProtocolQUIC.Metadata](nwprotocolquic/metadata.md): A handle you can use to inspect a connection’s QUIC state.

### Structures

- [NWProtocolQUIC.ApplicationError](nwprotocolquic/applicationerror.md): A QUIC application error code.

## Relationships

### Inherits From

- [NWProtocol](nwprotocol.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Network Protocols

- [Building a custom peer-to-peer protocol](building-a-custom-peer-to-peer-protocol.md): Use networking frameworks to create a custom protocol for playing a game across iOS, iPadOS, watchOS, and tvOS devices.
- [Connecting iPadOS and visionOS apps over the local network](../visionos/connecting-ipados-and-visionos-apps-over-the-local-network.md): Build an iPadOS companion app to control your visionOS app.
- [NWProtocolTCP](nwprotocoltcp.md): A network protocol for connections that use the Transmission Control Protocol.
- [NWProtocolTLS](nwprotocoltls.md): A network protocol for connections that use Transport Layer Security.
- [NWProtocolUDP](nwprotocoludp.md): A network protocol for connections that use the User Datagram Protocol.
- [NWProtocolIP](nwprotocolip.md): A network protocol for configuring the Internet Protocol on connections.
- [NWProtocolWebSocket](nwprotocolwebsocket.md): A network protocol for connections that use WebSocket.
- [NWProtocolFramer](nwprotocolframer.md): A customizable network protocol for defining application message parsers.
