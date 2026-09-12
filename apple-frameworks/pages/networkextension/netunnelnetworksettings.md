> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netunnelnetworksettings](https://developer.apple.com/documentation/networkextension/netunnelnetworksettings)

# NETunnelNetworkSettings (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The configuration for a tunnel provider’s virtual interface.

## Declaration

```swift
class NETunnelNetworkSettings
```

## Topics

### Initializing tunnel network settings

- [init(tunnelRemoteAddress:)](netunnelnetworksettings/init%28tunnelremoteaddress_%29.md): Initialize a `NETunnelNetworkSettings` object.

### Accessing tunnel network settings

- [tunnelRemoteAddress](netunnelnetworksettings/tunnelremoteaddress.md): The IP address of the tunnel server.
- [dnsSettings](netunnelnetworksettings/dnssettings.md): The tunnel DNS settings.
- [NEDNSSettings](nednssettings.md): The DNS resolver settings of a network tunnel or a system-wide configuration.
- [proxySettings](netunnelnetworksettings/proxysettings.md): The tunnel HTTP proxy settings.
- [NEProxySettings](neproxysettings.md): `NEProxySettings` contains HTTP proxy settings.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NEPacketTunnelNetworkSettings](nepackettunnelnetworksettings.md)
- [NETransparentProxyNetworkSettings](netransparentproxynetworksettings.md)

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

### App proxy provider

- [NEAppProxyProvider](neappproxyprovider.md): The principal class for an app proxy provider app extension.
- [NETunnelProvider](netunnelprovider.md): An abstract base class shared by NEPacketTunnelProvider and NEAppProxyProvider.
- [NEProvider](neprovider.md): An abstract base class for all NetworkExtension providers.

# NETunnelNetworkSettings (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The configuration for a tunnel provider’s virtual interface.

## Declaration

```objectivec
@interface NETunnelNetworkSettings : NSObject
```

## Topics

### Initializing tunnel network settings

- [initWithTunnelRemoteAddress:](netunnelnetworksettings/init%28tunnelremoteaddress_%29.md): Initialize a `NETunnelNetworkSettings` object.

### Accessing tunnel network settings

- [tunnelRemoteAddress](netunnelnetworksettings/tunnelremoteaddress.md): The IP address of the tunnel server.
- [DNSSettings](netunnelnetworksettings/dnssettings.md): The tunnel DNS settings.
- [NEDNSSettings](nednssettings.md): The DNS resolver settings of a network tunnel or a system-wide configuration.
- [proxySettings](netunnelnetworksettings/proxysettings.md): The tunnel HTTP proxy settings.
- [NEProxySettings](neproxysettings.md): `NEProxySettings` contains HTTP proxy settings.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NEPacketTunnelNetworkSettings](nepackettunnelnetworksettings.md)
- [NETransparentProxyNetworkSettings](netransparentproxynetworksettings.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### App proxy provider

- [NEAppProxyProvider](neappproxyprovider.md): The principal class for an app proxy provider app extension.
- [NETunnelProvider](netunnelprovider.md): An abstract base class shared by NEPacketTunnelProvider and NEAppProxyProvider.
- [NEProvider](neprovider.md): An abstract base class for all NetworkExtension providers.
