> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwprotocoloptions

# NWProtocolOptions

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The abstract superclass for configuring the options of a network protocol.

## Declaration

```swift
class NWProtocolOptions
```

## Relationships

### Inherited By

- [NWProtocolFramer.Options](nwprotocolframer/options.md)
- [NWProtocolIP.Options](nwprotocolip/options.md)
- [NWProtocolQUIC.Options](nwprotocolquic/options.md)
- [NWProtocolTCP.Options](nwprotocoltcp/options.md)
- [NWProtocolTLS.Options](nwprotocoltls/options.md)
- [NWProtocolUDP.Options](nwprotocoludp/options.md)
- [NWProtocolWebSocket.Options](nwprotocolwebsocket/options.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Adding Protocols to Connections

- [NWProtocolDefinition](nwprotocoldefinition.md): The abstract superclass for identifying a network protocol.
