> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nepackettunnelnetworksettings/mtu](https://developer.apple.com/documentation/networkextension/nepackettunnelnetworksettings/mtu)

# mtu (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The size of the maximum trasnmission unit, in bytes.

## Declaration

```swift
@NSCopying var mtu: NSNumber? { get set }
```

<a id="Discussion"></a>

## Discussion

The maximum transmission unit (MTU) size represents the largest number of bytes that anything can assign to the TUN interface.

> **Note**

>  The system ignores the [tunnelOverheadBytes](tunneloverheadbytes.md) property when this property is non-`nil`.

## See Also

### Accessing network properties

- [ipv4Settings](ipv4settings.md): The tunnel IP version 4 settings.
- [NEIPv4Settings](../neipv4settings.md): The IPv4 settings of an IP layer network tunnel.
- [ipv6Settings](ipv6settings.md): The tunnel IP version 6 settings.
- [NEIPv6Settings](../neipv6settings.md): The IPv6 settings of an IP layer network tunnel.
- [tunnelOverheadBytes](tunneloverheadbytes.md): The number of bytes added to each tunneled packet for storing tunneling protocol headers.

# MTU (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The size of the maximum trasnmission unit, in bytes.

## Declaration

```objectivec
@property (copy, nullable) NSNumber * MTU;
```

<a id="Discussion"></a>

## Discussion

The maximum transmission unit (MTU) size represents the largest number of bytes that anything can assign to the TUN interface.

> **Note**

>  The system ignores the [tunnelOverheadBytes](tunneloverheadbytes.md) property when this property is non-`nil`.

## See Also

### Accessing network properties

- [IPv4Settings](ipv4settings.md): The tunnel IP version 4 settings.
- [NEIPv4Settings](../neipv4settings.md): The IPv4 settings of an IP layer network tunnel.
- [IPv6Settings](ipv6settings.md): The tunnel IP version 6 settings.
- [NEIPv6Settings](../neipv6settings.md): The IPv6 settings of an IP layer network tunnel.
- [tunnelOverheadBytes](tunneloverheadbytes.md): The number of bytes added to each tunneled packet for storing tunneling protocol headers.
