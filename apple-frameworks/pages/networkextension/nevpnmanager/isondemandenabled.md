> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnmanager/isondemandenabled](https://developer.apple.com/documentation/networkextension/nevpnmanager/isondemandenabled)

# isOnDemandEnabled (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A Boolean used to toggle the Connect On Demand capability.

## Declaration

```swift
var isOnDemandEnabled: Bool { get set }
```

## Mentioned In

- [Routing your VPN network traffic](../routing-your-vpn-network-traffic.md)

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing VPN configuration properties

- [isEnabled](isenabled.md): A Boolean used to toggle the enabled state of the VPN configuration.
- [protocolConfiguration](protocolconfiguration.md): An [NEVPNProtocol](../nevpnprotocol.md) object containing the configuration settings of the VPN tunneling protocol.
- [protocol](protocol.md): Deprecated. An `NEVPNProtocol` object containing the configuration settings of the VPN tunneling protocol.
- [localizedDescription](localizeddescription.md): A string containing the display name of the VPN configuration.
- [onDemandRules](ondemandrules.md): An ordered list of Connect On Demand rules.

# onDemandEnabled (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A Boolean used to toggle the Connect On Demand capability.

## Declaration

```objectivec
@property (getter=isOnDemandEnabled) BOOL onDemandEnabled;
```

## Mentioned In

- [Routing your VPN network traffic](../routing-your-vpn-network-traffic.md)

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing VPN configuration properties

- [enabled](isenabled.md): A Boolean used to toggle the enabled state of the VPN configuration.
- [protocolConfiguration](protocolconfiguration.md): An [NEVPNProtocol](../nevpnprotocol.md) object containing the configuration settings of the VPN tunneling protocol.
- [protocol](protocol.md): Deprecated. An `NEVPNProtocol` object containing the configuration settings of the VPN tunneling protocol.
- [localizedDescription](localizeddescription.md): A string containing the display name of the VPN configuration.
- [onDemandRules](ondemandrules.md): An ordered list of Connect On Demand rules.
