> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netunnelnetworksettings/dnssettings](https://developer.apple.com/documentation/networkextension/netunnelnetworksettings/dnssettings)

# dnsSettings (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The tunnel DNS settings.

## Declaration

```swift
@NSCopying var dnsSettings: NEDNSSettings? { get set }
```

<a id="Discussion"></a>

## Discussion

Network connections to hosts in the tunnel’s internal network will use these DNS settings when resolving host names.

## See Also

### Accessing tunnel network settings

- [tunnelRemoteAddress](tunnelremoteaddress.md): The IP address of the tunnel server.
- [NEDNSSettings](../nednssettings.md): The DNS resolver settings of a network tunnel or a system-wide configuration.
- [proxySettings](proxysettings.md): The tunnel HTTP proxy settings.
- [NEProxySettings](../neproxysettings.md): `NEProxySettings` contains HTTP proxy settings.

# DNSSettings (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The tunnel DNS settings.

## Declaration

```objectivec
@property (copy, nullable) NEDNSSettings * DNSSettings;
```

<a id="Discussion"></a>

## Discussion

Network connections to hosts in the tunnel’s internal network will use these DNS settings when resolving host names.

## See Also

### Accessing tunnel network settings

- [tunnelRemoteAddress](tunnelremoteaddress.md): The IP address of the tunnel server.
- [NEDNSSettings](../nednssettings.md): The DNS resolver settings of a network tunnel or a system-wide configuration.
- [proxySettings](proxysettings.md): The tunnel HTTP proxy settings.
- [NEProxySettings](../neproxysettings.md): `NEProxySettings` contains HTTP proxy settings.
