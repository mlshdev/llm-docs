> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnmanager/protocolconfiguration](https://developer.apple.com/documentation/networkextension/nevpnmanager/protocolconfiguration)

# protocolConfiguration (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An [NEVPNProtocol](../nevpnprotocol.md) object containing the configuration settings of the VPN tunneling protocol.

## Declaration

```swift
var protocolConfiguration: NEVPNProtocol? { get set }
```

<a id="Discussion"></a>

## Discussion

For `NEVPNManager` objects, this property can be set to either an [NEVPNProtocolIPSec](../nevpnprotocolipsec.md) object or an [NEVPNProtocolIKEv2](../nevpnprotocolikev2.md) object.

## See Also

### Accessing VPN configuration properties

- [isEnabled](isenabled.md): A Boolean used to toggle the enabled state of the VPN configuration.
- [protocol](protocol.md): Deprecated. An `NEVPNProtocol` object containing the configuration settings of the VPN tunneling protocol.
- [localizedDescription](localizeddescription.md): A string containing the display name of the VPN configuration.
- [isOnDemandEnabled](isondemandenabled.md): A Boolean used to toggle the Connect On Demand capability.
- [onDemandRules](ondemandrules.md): An ordered list of Connect On Demand rules.

# protocolConfiguration (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An [NEVPNProtocol](../nevpnprotocol.md) object containing the configuration settings of the VPN tunneling protocol.

## Declaration

```objectivec
@property (strong, nullable) NEVPNProtocol * protocolConfiguration;
```

<a id="Discussion"></a>

## Discussion

For `NEVPNManager` objects, this property can be set to either an [NEVPNProtocolIPSec](../nevpnprotocolipsec.md) object or an [NEVPNProtocolIKEv2](../nevpnprotocolikev2.md) object.

## See Also

### Accessing VPN configuration properties

- [enabled](isenabled.md): A Boolean used to toggle the enabled state of the VPN configuration.
- [protocol](protocol.md): Deprecated. An `NEVPNProtocol` object containing the configuration settings of the VPN tunneling protocol.
- [localizedDescription](localizeddescription.md): A string containing the display name of the VPN configuration.
- [onDemandEnabled](isondemandenabled.md): A Boolean used to toggle the Connect On Demand capability.
- [onDemandRules](ondemandrules.md): An ordered list of Connect On Demand rules.
