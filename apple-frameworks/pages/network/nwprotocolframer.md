> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolframer](https://developer.apple.com/documentation/network/nwprotocolframer)

# NWProtocolFramer

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A customizable network protocol for defining application message parsers.

## Declaration

```swift
class NWProtocolFramer
```

## Topics

### Implementing Framer Protocols

- [NWProtocolFramerImplementation](nwprotocolframerimplementation.md): A protocol to which your classes can conform in order to implement a custom framing protocol.
- [NWProtocolFramer.Instance](nwprotocolframer/instance.md): An object that represents a single instance of your custom protocol running in a connection.

### Using Framers with Connections

- [NWProtocolFramer.Definition](nwprotocolframer/definition.md): A custom protocol definition you use to associate messages with protocol options.
- [NWProtocolFramer.Options](nwprotocolframer/options.md): A container you use to add your custom protocol to a connection’s protocol stack.
- [NWProtocolFramer.Message](nwprotocolframer/message.md): A message for a custom protocol, in which you can store arbitrary key-value pairs.

### Enumerations

- [NWProtocolFramer.StartResult](nwprotocolframer/startresult.md): Results that you send to indicate the disposition of your protocol after receiving the call to start.

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
- [NWProtocolQUIC](nwprotocolquic.md): A network protocol for connections that use the QUIC transport protocol.
- [NWProtocolUDP](nwprotocoludp.md): A network protocol for connections that use the User Datagram Protocol.
- [NWProtocolIP](nwprotocolip.md): A network protocol for configuring the Internet Protocol on connections.
- [NWProtocolWebSocket](nwprotocolwebsocket.md): A network protocol for connections that use WebSocket.
