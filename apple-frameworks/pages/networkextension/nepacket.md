> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nepacket](https://developer.apple.com/documentation/networkextension/nepacket)

# NEPacket (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 17.0+ · visionOS 1.0+

A network packet and its associated properties.

## Declaration

```swift
class NEPacket
```

## Topics

### Initializing a packet

- [init(data:protocolFamily:)](nepacket/init%28data_protocolfamily_%29.md)

### Accessing packet properties

- [data](nepacket/data.md)
- [metadata](nepacket/metadata.md)
- [protocolFamily](nepacket/protocolfamily.md)
- [direction](nepacket/direction.md): The direction of the packet.
- [NETrafficDirection](netrafficdirection.md): A type to represent the direction of network traffic.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Packet handling

- [NEPacketTunnelFlow](nepackettunnelflow.md): An object you use to read and write packets to and from the tunnel’s virtual interface.
- [In-Provider Networking](in-provider-networking.md): Network APIs for use by all types of NetworkExtension providers and by hotspot helpers.

# NEPacket (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 17.0+ · visionOS 1.0+

A network packet and its associated properties.

## Declaration

```objectivec
@interface NEPacket : NSObject
```

## Topics

### Initializing a packet

- [initWithData:protocolFamily:](nepacket/init%28data_protocolfamily_%29.md)

### Accessing packet properties

- [data](nepacket/data.md)
- [metadata](nepacket/metadata.md)
- [protocolFamily](nepacket/protocolfamily.md)
- [direction](nepacket/direction.md): The direction of the packet.
- [NETrafficDirection](netrafficdirection.md): A type to represent the direction of network traffic.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Packet handling

- [NEPacketTunnelFlow](nepackettunnelflow.md): An object you use to read and write packets to and from the tunnel’s virtual interface.
- [In-Provider Networking](in-provider-networking.md): Network APIs for use by all types of NetworkExtension providers and by hotspot helpers.
