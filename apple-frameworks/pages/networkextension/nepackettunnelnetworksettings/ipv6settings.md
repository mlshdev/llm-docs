> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nepackettunnelnetworksettings/ipv6settings](https://developer.apple.com/documentation/networkextension/nepackettunnelnetworksettings/ipv6settings)

# ipv6Settings (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The tunnel IP version 6 settings.

## Declaration

```swift
@NSCopying var ipv6Settings: NEIPv6Settings? { get set }
```

## Mentioned In

- [Routing your VPN network traffic](../routing-your-vpn-network-traffic.md)

<a id="Discussion"></a>

## Discussion

This property contains the IPv6 routes specifying what IPv6 traffic to route to the tunnel, as well as the IPv6 address and network prefix to assign to the TUN interface.

## See Also

### Accessing network properties

- [ipv4Settings](ipv4settings.md): The tunnel IP version 4 settings.
- [NEIPv4Settings](../neipv4settings.md): The IPv4 settings of an IP layer network tunnel.
- [NEIPv6Settings](../neipv6settings.md): The IPv6 settings of an IP layer network tunnel.
- [tunnelOverheadBytes](tunneloverheadbytes.md): The number of bytes added to each tunneled packet for storing tunneling protocol headers.
- [mtu](mtu.md): The size of the maximum trasnmission unit, in bytes.

# IPv6Settings (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The tunnel IP version 6 settings.

## Declaration

```objectivec
@property (copy, nullable) NEIPv6Settings * IPv6Settings;
```

## Mentioned In

- [Routing your VPN network traffic](../routing-your-vpn-network-traffic.md)

<a id="Discussion"></a>

## Discussion

This property contains the IPv6 routes specifying what IPv6 traffic to route to the tunnel, as well as the IPv6 address and network prefix to assign to the TUN interface.

## See Also

### Accessing network properties

- [IPv4Settings](ipv4settings.md): The tunnel IP version 4 settings.
- [NEIPv4Settings](../neipv4settings.md): The IPv4 settings of an IP layer network tunnel.
- [NEIPv6Settings](../neipv6settings.md): The IPv6 settings of an IP layer network tunnel.
- [tunnelOverheadBytes](tunneloverheadbytes.md): The number of bytes added to each tunneled packet for storing tunneling protocol headers.
- [MTU](mtu.md): The size of the maximum trasnmission unit, in bytes.
