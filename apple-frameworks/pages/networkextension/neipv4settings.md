> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neipv4settings](https://developer.apple.com/documentation/networkextension/neipv4settings)

# NEIPv4Settings (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The IPv4 settings of an IP layer network tunnel.

## Declaration

```swift
class NEIPv4Settings
```

<a id="overview"></a>

## Overview

To specify the IPv4 settings of a packet tunnel, set its [NEPacketTunnelNetworkSettings](nepackettunnelnetworksettings.md).[ipv4Settings](nepackettunnelnetworksettings/ipv4settings.md) property to an instance of this class.

## Topics

### Initializing IPv4 settings

- [init(addresses:subnetMasks:)](neipv4settings/init%28addresses_subnetmasks_%29.md): Initializes an IPv4 settings object.

### Accessing IPv4 properties

- [addresses](neipv4settings/addresses.md): The IPv4 addresses to assign to the TUN interface.
- [subnetMasks](neipv4settings/subnetmasks.md): The IPv4 network masks to assign to the TUN interface.
- [router](neipv4settings/router.md): The address of the next-hop gateway router represented as a dotted decimal string.

### Routing network traffic

- [includedRoutes](neipv4settings/includedroutes.md): The IPv4 network traffic that the system routes to the TUN interface.
- [excludedRoutes](neipv4settings/excludedroutes.md): The IPv4 network traffic that the system routes to the primary physical interface, not the TUN interface.
- [NEIPv4Route](neipv4route.md): The settings for an IPv4 route.

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
- [ipv6Settings](nepackettunnelnetworksettings/ipv6settings.md): The tunnel IP version 6 settings.
- [NEIPv6Settings](neipv6settings.md): The IPv6 settings of an IP layer network tunnel.
- [tunnelOverheadBytes](nepackettunnelnetworksettings/tunneloverheadbytes.md): The number of bytes added to each tunneled packet for storing tunneling protocol headers.
- [mtu](nepackettunnelnetworksettings/mtu.md): The size of the maximum trasnmission unit, in bytes.

# NEIPv4Settings (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The IPv4 settings of an IP layer network tunnel.

## Declaration

```objectivec
@interface NEIPv4Settings : NSObject
```

<a id="overview"></a>

## Overview

To specify the IPv4 settings of a packet tunnel, set its [NEPacketTunnelNetworkSettings](nepackettunnelnetworksettings.md).[IPv4Settings](nepackettunnelnetworksettings/ipv4settings.md) property to an instance of this class.

## Topics

### Initializing IPv4 settings

- [initWithAddresses:subnetMasks:](neipv4settings/init%28addresses_subnetmasks_%29.md): Initializes an IPv4 settings object.

### Accessing IPv4 properties

- [addresses](neipv4settings/addresses.md): The IPv4 addresses to assign to the TUN interface.
- [subnetMasks](neipv4settings/subnetmasks.md): The IPv4 network masks to assign to the TUN interface.
- [router](neipv4settings/router.md): The address of the next-hop gateway router represented as a dotted decimal string.

### Routing network traffic

- [includedRoutes](neipv4settings/includedroutes.md): The IPv4 network traffic that the system routes to the TUN interface.
- [excludedRoutes](neipv4settings/excludedroutes.md): The IPv4 network traffic that the system routes to the primary physical interface, not the TUN interface.
- [NEIPv4Route](neipv4route.md): The settings for an IPv4 route.

### Type Methods

- [settingsWithAutomaticAddressing](neipv4settings/settingswithautomaticaddressing.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Accessing network properties

- [IPv4Settings](nepackettunnelnetworksettings/ipv4settings.md): The tunnel IP version 4 settings.
- [IPv6Settings](nepackettunnelnetworksettings/ipv6settings.md): The tunnel IP version 6 settings.
- [NEIPv6Settings](neipv6settings.md): The IPv6 settings of an IP layer network tunnel.
- [tunnelOverheadBytes](nepackettunnelnetworksettings/tunneloverheadbytes.md): The number of bytes added to each tunneled packet for storing tunneling protocol headers.
- [MTU](nepackettunnelnetworksettings/mtu.md): The size of the maximum trasnmission unit, in bytes.
