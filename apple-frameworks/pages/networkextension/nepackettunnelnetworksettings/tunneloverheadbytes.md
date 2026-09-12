> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nepackettunnelnetworksettings/tunneloverheadbytes](https://developer.apple.com/documentation/networkextension/nepackettunnelnetworksettings/tunneloverheadbytes)

# tunnelOverheadBytes (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The number of bytes added to each tunneled packet for storing tunneling protocol headers.

## Declaration

```swift
@NSCopying var tunnelOverheadBytes: NSNumber? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is subtracted from the Maximum Transmission Unit (MTU) of the tunnel’s underlying physical network interface to compute the MTU of the TUN interface.

## See Also

### Accessing network properties

- [ipv4Settings](ipv4settings.md): The tunnel IP version 4 settings.
- [NEIPv4Settings](../neipv4settings.md): The IPv4 settings of an IP layer network tunnel.
- [ipv6Settings](ipv6settings.md): The tunnel IP version 6 settings.
- [NEIPv6Settings](../neipv6settings.md): The IPv6 settings of an IP layer network tunnel.
- [mtu](mtu.md): The size of the maximum trasnmission unit, in bytes.

# tunnelOverheadBytes (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The number of bytes added to each tunneled packet for storing tunneling protocol headers.

## Declaration

```objectivec
@property (copy, nullable) NSNumber * tunnelOverheadBytes;
```

<a id="Discussion"></a>

## Discussion

The value of this property is subtracted from the Maximum Transmission Unit (MTU) of the tunnel’s underlying physical network interface to compute the MTU of the TUN interface.

## See Also

### Accessing network properties

- [IPv4Settings](ipv4settings.md): The tunnel IP version 4 settings.
- [NEIPv4Settings](../neipv4settings.md): The IPv4 settings of an IP layer network tunnel.
- [IPv6Settings](ipv6settings.md): The tunnel IP version 6 settings.
- [NEIPv6Settings](../neipv6settings.md): The IPv6 settings of an IP layer network tunnel.
- [MTU](mtu.md): The size of the maximum trasnmission unit, in bytes.
