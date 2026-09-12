> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neethernettunnelprovider](https://developer.apple.com/documentation/networkextension/neethernettunnelprovider)

# NEEthernetTunnelProvider (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** macOS 13.0+

A type that implements the client side of a custom link-layer packet tunneling protocol.

## Declaration

```swift
class NEEthernetTunnelProvider
```

## Relationships

### Inherits From

- [NEPacketTunnelProvider](nepackettunnelprovider.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Packet tunnel provider

- [NEPacketTunnelProvider](nepackettunnelprovider.md): The principal class for a packet tunnel provider app extension.
- [NETunnelProvider](netunnelprovider.md): An abstract base class shared by NEPacketTunnelProvider and NEAppProxyProvider.
- [NEProvider](neprovider.md): An abstract base class for all NetworkExtension providers.
- [NEPacketTunnelNetworkSettings](nepackettunnelnetworksettings.md): The configuration for a packet tunnel provider’s virtual interface.
- [NETunnelNetworkSettings](netunnelnetworksettings.md): The configuration for a tunnel provider’s virtual interface.
- [NEEthernetTunnelNetworkSettings](neethernettunnelnetworksettings.md): The network settings for an ethernet-based VPN tunnel.

# NEEthernetTunnelProvider (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** macOS 13.0+

A type that implements the client side of a custom link-layer packet tunneling protocol.

## Declaration

```objectivec
@interface NEEthernetTunnelProvider : NEPacketTunnelProvider
```

## Relationships

### Inherits From

- [NEPacketTunnelProvider](nepackettunnelprovider.md)

## See Also

### Packet tunnel provider

- [NEPacketTunnelProvider](nepackettunnelprovider.md): The principal class for a packet tunnel provider app extension.
- [NETunnelProvider](netunnelprovider.md): An abstract base class shared by NEPacketTunnelProvider and NEAppProxyProvider.
- [NEProvider](neprovider.md): An abstract base class for all NetworkExtension providers.
- [NEPacketTunnelNetworkSettings](nepackettunnelnetworksettings.md): The configuration for a packet tunnel provider’s virtual interface.
- [NETunnelNetworkSettings](netunnelnetworksettings.md): The configuration for a tunnel provider’s virtual interface.
- [NEEthernetTunnelNetworkSettings](neethernettunnelnetworksettings.md): The network settings for an ethernet-based VPN tunnel.
