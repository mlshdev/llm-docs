> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neethernettunnelnetworksettings](https://developer.apple.com/documentation/networkextension/neethernettunnelnetworksettings)

# NEEthernetTunnelNetworkSettings (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** macOS 13.0+

The network settings for an ethernet-based VPN tunnel.

## Declaration

```swift
class NEEthernetTunnelNetworkSettings
```

<a id="overview"></a>

## Overview

You use this type with [NEEthernetTunnelProvider](neethernettunnelprovider.md) instances to communicate the desired network settings for the packet tunnel to the framework. The framework takes care of applying the contained settings to the system.

Instances of this class are thread-safe.

## Topics

### Creating a settings instance

- [init(tunnelRemoteAddress:ethernetAddress:mtu:)](neethernettunnelnetworksettings/init%28tunnelremoteaddress_ethernetaddress_mtu_%29.md): Creates a settings object with a given tunnel remote address and MAC address.

### Inspecting settings properties

- [ethernetAddress](neethernettunnelnetworksettings/ethernetaddress.md): The ethernet address of the tunnel interface, as a string.

## Relationships

### Inherits From

- [NEPacketTunnelNetworkSettings](nepackettunnelnetworksettings.md)

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

### Packet tunnel provider

- [NEPacketTunnelProvider](nepackettunnelprovider.md): The principal class for a packet tunnel provider app extension.
- [NETunnelProvider](netunnelprovider.md): An abstract base class shared by NEPacketTunnelProvider and NEAppProxyProvider.
- [NEProvider](neprovider.md): An abstract base class for all NetworkExtension providers.
- [NEPacketTunnelNetworkSettings](nepackettunnelnetworksettings.md): The configuration for a packet tunnel provider’s virtual interface.
- [NETunnelNetworkSettings](netunnelnetworksettings.md): The configuration for a tunnel provider’s virtual interface.
- [NEEthernetTunnelProvider](neethernettunnelprovider.md): A type that implements the client side of a custom link-layer packet tunneling protocol.

# NEEthernetTunnelNetworkSettings (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** macOS 13.0+

The network settings for an ethernet-based VPN tunnel.

## Declaration

```objectivec
@interface NEEthernetTunnelNetworkSettings : NEPacketTunnelNetworkSettings
```

<a id="overview"></a>

## Overview

You use this type with [NEEthernetTunnelProvider](neethernettunnelprovider.md) instances to communicate the desired network settings for the packet tunnel to the framework. The framework takes care of applying the contained settings to the system.

Instances of this class are thread-safe.

## Topics

### Creating a settings instance

- [initWithTunnelRemoteAddress:ethernetAddress:mtu:](neethernettunnelnetworksettings/init%28tunnelremoteaddress_ethernetaddress_mtu_%29.md): Creates a settings object with a given tunnel remote address and MAC address.

### Inspecting settings properties

- [ethernetAddress](neethernettunnelnetworksettings/ethernetaddress.md): The ethernet address of the tunnel interface, as a string.

## Relationships

### Inherits From

- [NEPacketTunnelNetworkSettings](nepackettunnelnetworksettings.md)

## See Also

### Packet tunnel provider

- [NEPacketTunnelProvider](nepackettunnelprovider.md): The principal class for a packet tunnel provider app extension.
- [NETunnelProvider](netunnelprovider.md): An abstract base class shared by NEPacketTunnelProvider and NEAppProxyProvider.
- [NEProvider](neprovider.md): An abstract base class for all NetworkExtension providers.
- [NEPacketTunnelNetworkSettings](nepackettunnelnetworksettings.md): The configuration for a packet tunnel provider’s virtual interface.
- [NETunnelNetworkSettings](netunnelnetworksettings.md): The configuration for a tunnel provider’s virtual interface.
- [NEEthernetTunnelProvider](neethernettunnelprovider.md): A type that implements the client side of a custom link-layer packet tunneling protocol.
