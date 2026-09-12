> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netunnelnetworksettings/tunnelremoteaddress](https://developer.apple.com/documentation/networkextension/netunnelnetworksettings/tunnelremoteaddress)

# tunnelRemoteAddress (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The IP address of the tunnel server.

## Declaration

```swift
var tunnelRemoteAddress: String { get }
```

## See Also

### Accessing tunnel network settings

- [dnsSettings](dnssettings.md): The tunnel DNS settings.
- [NEDNSSettings](../nednssettings.md): The DNS resolver settings of a network tunnel or a system-wide configuration.
- [proxySettings](proxysettings.md): The tunnel HTTP proxy settings.
- [NEProxySettings](../neproxysettings.md): `NEProxySettings` contains HTTP proxy settings.

# tunnelRemoteAddress (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The IP address of the tunnel server.

## Declaration

```objectivec
@property (readonly) NSString * tunnelRemoteAddress;
```

## See Also

### Accessing tunnel network settings

- [DNSSettings](dnssettings.md): The tunnel DNS settings.
- [NEDNSSettings](../nednssettings.md): The DNS resolver settings of a network tunnel or a system-wide configuration.
- [proxySettings](proxysettings.md): The tunnel HTTP proxy settings.
- [NEProxySettings](../neproxysettings.md): `NEProxySettings` contains HTTP proxy settings.
