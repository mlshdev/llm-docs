> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnmanager/ondemandrules](https://developer.apple.com/documentation/networkextension/nevpnmanager/ondemandrules)

# onDemandRules (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An ordered list of Connect On Demand rules.

## Declaration

```swift
var onDemandRules: [NEOnDemandRule]? { get set }
```

<a id="Discussion"></a>

## Discussion

The VPN configuration can optionally be configured to connect automatically based on a variety of criteria specified in [NEOnDemandRule](../neondemandrule.md) objects. The [onDemandRules](ondemandrules.md) property contains the current set of Connect On Demand rules for the VPN configuration. Each rule is evaluated in order, and the first rule that matches all criteria on the current network is applied.

## See Also

### Accessing VPN configuration properties

- [isEnabled](isenabled.md): A Boolean used to toggle the enabled state of the VPN configuration.
- [protocolConfiguration](protocolconfiguration.md): An [NEVPNProtocol](../nevpnprotocol.md) object containing the configuration settings of the VPN tunneling protocol.
- [protocol](protocol.md): Deprecated. An `NEVPNProtocol` object containing the configuration settings of the VPN tunneling protocol.
- [localizedDescription](localizeddescription.md): A string containing the display name of the VPN configuration.
- [isOnDemandEnabled](isondemandenabled.md): A Boolean used to toggle the Connect On Demand capability.

# onDemandRules (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An ordered list of Connect On Demand rules.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NEOnDemandRule *> * onDemandRules;
```

<a id="Discussion"></a>

## Discussion

The VPN configuration can optionally be configured to connect automatically based on a variety of criteria specified in [NEOnDemandRule](../neondemandrule.md) objects. The [onDemandRules](ondemandrules.md) property contains the current set of Connect On Demand rules for the VPN configuration. Each rule is evaluated in order, and the first rule that matches all criteria on the current network is applied.

## See Also

### Accessing VPN configuration properties

- [enabled](isenabled.md): A Boolean used to toggle the enabled state of the VPN configuration.
- [protocolConfiguration](protocolconfiguration.md): An [NEVPNProtocol](../nevpnprotocol.md) object containing the configuration settings of the VPN tunneling protocol.
- [protocol](protocol.md): Deprecated. An `NEVPNProtocol` object containing the configuration settings of the VPN tunneling protocol.
- [localizedDescription](localizeddescription.md): A string containing the display name of the VPN configuration.
- [onDemandEnabled](isondemandenabled.md): A Boolean used to toggle the Connect On Demand capability.
