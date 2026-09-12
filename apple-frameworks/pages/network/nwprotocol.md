> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocol](https://developer.apple.com/documentation/network/nwprotocol)

# NWProtocol

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The abstract superclass used by Network framework protocols and by custom network protocols that you define.

## Declaration

```swift
class NWProtocol
```

## Topics

### Adding Protocols to Connections

- [NWProtocolOptions](nwprotocoloptions.md): The abstract superclass for configuring the options of a network protocol.
- [NWProtocolDefinition](nwprotocoldefinition.md): The abstract superclass for identifying a network protocol.

### Interacting with Protocols

- [NWProtocolMetadata](nwprotocolmetadata.md): The abstract superclass for specifying metadata about a network protocol.

## Relationships

### Inherited By

- [NWProtocolFramer](nwprotocolframer.md)
- [NWProtocolIP](nwprotocolip.md)
- [NWProtocolQUIC](nwprotocolquic.md)
- [NWProtocolTCP](nwprotocoltcp.md)
- [NWProtocolTLS](nwprotocoltls.md)
- [NWProtocolUDP](nwprotocoludp.md)
- [NWProtocolWebSocket](nwprotocolwebsocket.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Modifying Protocol Stacks

- [defaultProtocolStack](nwparameters/defaultprotocolstack.md): The protocol stack used by connections and listeners.
- [NWParameters.ProtocolStack](nwparameters/protocolstack.md): An ordered set of protocol options that define the protocols that connections and listeners use.
