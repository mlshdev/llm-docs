> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nepackettunnelnetworksettings](https://developer.apple.com/documentation/networkextension/nepackettunnelnetworksettings)

# NEPacketTunnelNetworkSettings (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The configuration for a packet tunnel provider’s virtual interface.

## Declaration

```swift
class NEPacketTunnelNetworkSettings
```

## Mentioned In

- [Routing your VPN network traffic](routing-your-vpn-network-traffic.md)

## Topics

### Accessing network properties

- [ipv4Settings](nepackettunnelnetworksettings/ipv4settings.md): The tunnel IP version 4 settings.
- [NEIPv4Settings](neipv4settings.md): The IPv4 settings of an IP layer network tunnel.
- [ipv6Settings](nepackettunnelnetworksettings/ipv6settings.md): The tunnel IP version 6 settings.
- [NEIPv6Settings](neipv6settings.md): The IPv6 settings of an IP layer network tunnel.
- [tunnelOverheadBytes](nepackettunnelnetworksettings/tunneloverheadbytes.md): The number of bytes added to each tunneled packet for storing tunneling protocol headers.
- [mtu](nepackettunnelnetworksettings/mtu.md): The size of the maximum trasnmission unit, in bytes.

## Relationships

### Inherits From

- [NETunnelNetworkSettings](netunnelnetworksettings.md)

### Inherited By

- [NEEthernetTunnelNetworkSettings](neethernettunnelnetworksettings.md)

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
- [NETunnelNetworkSettings](netunnelnetworksettings.md): The configuration for a tunnel provider’s virtual interface.
- [NEEthernetTunnelProvider](neethernettunnelprovider.md): A type that implements the client side of a custom link-layer packet tunneling protocol.
- [NEEthernetTunnelNetworkSettings](neethernettunnelnetworksettings.md): The network settings for an ethernet-based VPN tunnel.

# NEPacketTunnelNetworkSettings (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The configuration for a packet tunnel provider’s virtual interface.

## Declaration

```objectivec
@interface NEPacketTunnelNetworkSettings : NETunnelNetworkSettings
```

## Mentioned In

- [Routing your VPN network traffic](routing-your-vpn-network-traffic.md)

## Topics

### Accessing network properties

- [IPv4Settings](nepackettunnelnetworksettings/ipv4settings.md): The tunnel IP version 4 settings.
- [NEIPv4Settings](neipv4settings.md): The IPv4 settings of an IP layer network tunnel.
- [IPv6Settings](nepackettunnelnetworksettings/ipv6settings.md): The tunnel IP version 6 settings.
- [NEIPv6Settings](neipv6settings.md): The IPv6 settings of an IP layer network tunnel.
- [tunnelOverheadBytes](nepackettunnelnetworksettings/tunneloverheadbytes.md): The number of bytes added to each tunneled packet for storing tunneling protocol headers.
- [MTU](nepackettunnelnetworksettings/mtu.md): The size of the maximum trasnmission unit, in bytes.

### Instance Properties

- [enforceRoutes](nepackettunnelnetworksettings/enforceroutes.md)
- [excludeAPNs](nepackettunnelnetworksettings/excludeapns.md)
- [excludeCellularServices](nepackettunnelnetworksettings/excludecellularservices.md)
- [excludeDeviceCommunication](nepackettunnelnetworksettings/excludedevicecommunication.md)
- [excludeLocalNetworks](nepackettunnelnetworksettings/excludelocalnetworks.md)
- [includeAllNetworks](nepackettunnelnetworksettings/includeallnetworks.md)

## Relationships

### Inherits From

- [NETunnelNetworkSettings](netunnelnetworksettings.md)

### Inherited By

- [NEEthernetTunnelNetworkSettings](neethernettunnelnetworksettings.md)

## See Also

### Packet tunnel provider

- [NEPacketTunnelProvider](nepackettunnelprovider.md): The principal class for a packet tunnel provider app extension.
- [NETunnelProvider](netunnelprovider.md): An abstract base class shared by NEPacketTunnelProvider and NEAppProxyProvider.
- [NEProvider](neprovider.md): An abstract base class for all NetworkExtension providers.
- [NETunnelNetworkSettings](netunnelnetworksettings.md): The configuration for a tunnel provider’s virtual interface.
- [NEEthernetTunnelProvider](neethernettunnelprovider.md): A type that implements the client side of a custom link-layer packet tunneling protocol.
- [NEEthernetTunnelNetworkSettings](neethernettunnelnetworksettings.md): The network settings for an ethernet-based VPN tunnel.
