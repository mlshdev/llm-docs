> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neipv6settings](https://developer.apple.com/documentation/networkextension/neipv6settings)

# NEIPv6Settings (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The IPv6 settings of an IP layer network tunnel.

## Declaration

```swift
class NEIPv6Settings
```

<a id="overview"></a>

## Overview

To specify the IPv6 settings of a packet tunnel, set its [NEPacketTunnelNetworkSettings](nepackettunnelnetworksettings.md).[ipv6Settings](nepackettunnelnetworksettings/ipv6settings.md) property to an instance of this class.

## Topics

### Initializing IPv6 settings

- [init(addresses:networkPrefixLengths:)](neipv6settings/init%28addresses_networkprefixlengths_%29.md): Initializes the IPv6 settings object.

### Accessing IPv6 properties

- [addresses](neipv6settings/addresses.md): The IPv6 addresses to assign to the TUN interface.
- [networkPrefixLengths](neipv6settings/networkprefixlengths.md): The IPv6 network prefix lengths to assign to the TUN interface.

### Routing network traffic

- [includedRoutes](neipv6settings/includedroutes.md): The IPv6 network traffic that the system routes to the TUN interface.
- [excludedRoutes](neipv6settings/excludedroutes.md): The IPv6 network traffic that the system routes to the primary physical interface, not the TUN interface.
- [NEIPv6Route](neipv6route.md): The settings for an IPv6 route.

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

### Accessing network properties

- [ipv4Settings](nepackettunnelnetworksettings/ipv4settings.md): The tunnel IP version 4 settings.
- [NEIPv4Settings](neipv4settings.md): The IPv4 settings of an IP layer network tunnel.
- [ipv6Settings](nepackettunnelnetworksettings/ipv6settings.md): The tunnel IP version 6 settings.
- [tunnelOverheadBytes](nepackettunnelnetworksettings/tunneloverheadbytes.md): The number of bytes added to each tunneled packet for storing tunneling protocol headers.
- [mtu](nepackettunnelnetworksettings/mtu.md): The size of the maximum trasnmission unit, in bytes.

# NEIPv6Settings (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The IPv6 settings of an IP layer network tunnel.

## Declaration

```objectivec
@interface NEIPv6Settings : NSObject
```

<a id="overview"></a>

## Overview

To specify the IPv6 settings of a packet tunnel, set its [NEPacketTunnelNetworkSettings](nepackettunnelnetworksettings.md).[IPv6Settings](nepackettunnelnetworksettings/ipv6settings.md) property to an instance of this class.

## Topics

### Initializing IPv6 settings

- [initWithAddresses:networkPrefixLengths:](neipv6settings/init%28addresses_networkprefixlengths_%29.md): Initializes the IPv6 settings object.

### Accessing IPv6 properties

- [addresses](neipv6settings/addresses.md): The IPv6 addresses to assign to the TUN interface.
- [networkPrefixLengths](neipv6settings/networkprefixlengths.md): The IPv6 network prefix lengths to assign to the TUN interface.

### Routing network traffic

- [includedRoutes](neipv6settings/includedroutes.md): The IPv6 network traffic that the system routes to the TUN interface.
- [excludedRoutes](neipv6settings/excludedroutes.md): The IPv6 network traffic that the system routes to the primary physical interface, not the TUN interface.
- [NEIPv6Route](neipv6route.md): The settings for an IPv6 route.

### Type Methods

- [settingsWithAutomaticAddressing](neipv6settings/settingswithautomaticaddressing.md)
- [settingsWithLinkLocalAddressing](neipv6settings/settingswithlinklocaladdressing.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Accessing network properties

- [IPv4Settings](nepackettunnelnetworksettings/ipv4settings.md): The tunnel IP version 4 settings.
- [NEIPv4Settings](neipv4settings.md): The IPv4 settings of an IP layer network tunnel.
- [IPv6Settings](nepackettunnelnetworksettings/ipv6settings.md): The tunnel IP version 6 settings.
- [tunnelOverheadBytes](nepackettunnelnetworksettings/tunneloverheadbytes.md): The number of bytes added to each tunneled packet for storing tunneling protocol headers.
- [MTU](nepackettunnelnetworksettings/mtu.md): The size of the maximum trasnmission unit, in bytes.
