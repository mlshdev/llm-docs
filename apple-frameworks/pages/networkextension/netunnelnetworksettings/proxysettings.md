> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netunnelnetworksettings/proxysettings](https://developer.apple.com/documentation/networkextension/netunnelnetworksettings/proxysettings)

# proxySettings (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The tunnel HTTP proxy settings.

## Declaration

```swift
@NSCopying var proxySettings: NEProxySettings? { get set }
```

<a id="Discussion"></a>

## Discussion

HTTP connections to hosts in the tunnel’s internal network will use these proxy settings.

## See Also

### Accessing tunnel network settings

- [tunnelRemoteAddress](tunnelremoteaddress.md): The IP address of the tunnel server.
- [dnsSettings](dnssettings.md): The tunnel DNS settings.
- [NEDNSSettings](../nednssettings.md): The DNS resolver settings of a network tunnel or a system-wide configuration.
- [NEProxySettings](../neproxysettings.md): `NEProxySettings` contains HTTP proxy settings.

# proxySettings (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The tunnel HTTP proxy settings.

## Declaration

```objectivec
@property (copy, nullable) NEProxySettings * proxySettings;
```

<a id="Discussion"></a>

## Discussion

HTTP connections to hosts in the tunnel’s internal network will use these proxy settings.

## See Also

### Accessing tunnel network settings

- [tunnelRemoteAddress](tunnelremoteaddress.md): The IP address of the tunnel server.
- [DNSSettings](dnssettings.md): The tunnel DNS settings.
- [NEDNSSettings](../nednssettings.md): The DNS resolver settings of a network tunnel or a system-wide configuration.
- [NEProxySettings](../neproxysettings.md): `NEProxySettings` contains HTTP proxy settings.
