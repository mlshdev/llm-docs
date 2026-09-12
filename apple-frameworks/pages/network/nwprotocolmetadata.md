> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolmetadata](https://developer.apple.com/documentation/network/nwprotocolmetadata)

# NWProtocolMetadata

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The abstract superclass for specifying metadata about a network protocol.

## Declaration

```swift
class NWProtocolMetadata
```

<a id="overview"></a>

## Overview

You can use metadata when sending and receiving messages, as well as when inspecting connection properties.

## Relationships

### Inherited By

- [NWProtocolFramer.Message](nwprotocolframer/message.md)
- [NWProtocolIP.Metadata](nwprotocolip/metadata.md)
- [NWProtocolQUIC.Metadata](nwprotocolquic/metadata.md)
- [NWProtocolTCP.Metadata](nwprotocoltcp/metadata.md)
- [NWProtocolTLS.Metadata](nwprotocoltls/metadata.md)
- [NWProtocolUDP.Metadata](nwprotocoludp/metadata.md)
- [NWProtocolWebSocket.Metadata](nwprotocolwebsocket/metadata.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting Connections

- [metadata(definition:)](nwconnection/metadata%28definition_%29.md): Retrieves the connection-wide metadata for a specific protocol.
- [endpoint](nwconnection/endpoint.md): The remote endpoint with which the connection was initialized.
- [parameters](nwconnection/parameters.md): The parameters with which the connection was initialized.
- [queue](nwconnection/queue.md): The queue on which connection events are delivered.
