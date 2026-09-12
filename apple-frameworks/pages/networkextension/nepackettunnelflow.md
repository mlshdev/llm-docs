> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nepackettunnelflow](https://developer.apple.com/documentation/networkextension/nepackettunnelflow)

# NEPacketTunnelFlow (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An object you use to read and write packets to and from the tunnel’s virtual interface.

## Declaration

```swift
class NEPacketTunnelFlow
```

<a id="overview"></a>

## Overview

Use the `NEPacketTunnelFlow` class to implement a custom-IP tunneling protocol for your packet tunnel. For example, use the APIs in this class to read packets from the virtual interface, so you can then encapsulate these packets and send them to a packet-tunnel server. Likewise, read packets from your packet-tunnel server and use these APIs to write the packets back to the tunnel’s virtual interface.

## Topics

### Handling IP packets

- [readPacketObjects(completionHandler:)](nepackettunnelflow/readpacketobjects%28completionhandler_%29.md): Read multiple IP packets from the TUN interface.
- [writePacketObjects(\_:)](nepackettunnelflow/writepacketobjects%28__%29.md): Write multiple IP packets to the TUN interface.
- [readPackets(completionHandler:)](nepackettunnelflow/readpackets%28completionhandler_%29.md): Reads IP packets from the TUN interface.
- [writePackets(\_:withProtocols:)](nepackettunnelflow/writepackets%28__withprotocols_%29.md): Writes IP packets to the TUN interface.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Packet handling

- [NEPacket](nepacket.md): A network packet and its associated properties.
- [In-Provider Networking](in-provider-networking.md): Network APIs for use by all types of NetworkExtension providers and by hotspot helpers.

# NEPacketTunnelFlow (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An object you use to read and write packets to and from the tunnel’s virtual interface.

## Declaration

```objectivec
@interface NEPacketTunnelFlow : NSObject
```

<a id="overview"></a>

## Overview

Use the `NEPacketTunnelFlow` class to implement a custom-IP tunneling protocol for your packet tunnel. For example, use the APIs in this class to read packets from the virtual interface, so you can then encapsulate these packets and send them to a packet-tunnel server. Likewise, read packets from your packet-tunnel server and use these APIs to write the packets back to the tunnel’s virtual interface.

## Topics

### Handling IP packets

- [readPacketObjectsWithCompletionHandler:](nepackettunnelflow/readpacketobjects%28completionhandler_%29.md): Read multiple IP packets from the TUN interface.
- [writePacketObjects:](nepackettunnelflow/writepacketobjects%28__%29.md): Write multiple IP packets to the TUN interface.
- [readPacketsWithCompletionHandler:](nepackettunnelflow/readpackets%28completionhandler_%29.md): Reads IP packets from the TUN interface.
- [writePackets:withProtocols:](nepackettunnelflow/writepackets%28__withprotocols_%29.md): Writes IP packets to the TUN interface.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Packet handling

- [NEPacket](nepacket.md): A network packet and its associated properties.
- [In-Provider Networking](in-provider-networking.md): Network APIs for use by all types of NetworkExtension providers and by hotspot helpers.
