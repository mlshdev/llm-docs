> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnmanager/protocol](https://developer.apple.com/documentation/networkextension/nevpnmanager/protocol)

# protocol (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.11) · visionOS 1.0+ (deprecated in 1.0)

An `NEVPNProtocol` object containing the configuration settings of the VPN tunneling protocol.

## Declaration

```swift
var `protocol`: NEVPNProtocol? { get set }
```

<a id="Discussion"></a>

## Discussion

For `NEVPNManager` objects, this property can be set to either an [NEVPNProtocolIPSec](../nevpnprotocolipsec.md) object or an [NEVPNProtocolIKEv2](../nevpnprotocolikev2.md) object.

## See Also

### Accessing VPN configuration properties

- [isEnabled](isenabled.md): A Boolean used to toggle the enabled state of the VPN configuration.
- [protocolConfiguration](protocolconfiguration.md): An [NEVPNProtocol](../nevpnprotocol.md) object containing the configuration settings of the VPN tunneling protocol.
- [localizedDescription](localizeddescription.md): A string containing the display name of the VPN configuration.
- [isOnDemandEnabled](isondemandenabled.md): A Boolean used to toggle the Connect On Demand capability.
- [onDemandRules](ondemandrules.md): An ordered list of Connect On Demand rules.

# protocol (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.11) · visionOS 1.0+ (deprecated in 1.0)

An `NEVPNProtocol` object containing the configuration settings of the VPN tunneling protocol.

## Declaration

```objectivec
@property (strong, nullable) NEVPNProtocol * protocol;
```

<a id="Discussion"></a>

## Discussion

For `NEVPNManager` objects, this property can be set to either an [NEVPNProtocolIPSec](../nevpnprotocolipsec.md) object or an [NEVPNProtocolIKEv2](../nevpnprotocolikev2.md) object.

## See Also

### Accessing VPN configuration properties

- [enabled](isenabled.md): A Boolean used to toggle the enabled state of the VPN configuration.
- [protocolConfiguration](protocolconfiguration.md): An [NEVPNProtocol](../nevpnprotocol.md) object containing the configuration settings of the VPN tunneling protocol.
- [localizedDescription](localizeddescription.md): A string containing the display name of the VPN configuration.
- [onDemandEnabled](isondemandenabled.md): A Boolean used to toggle the Connect On Demand capability.
- [onDemandRules](ondemandrules.md): An ordered list of Connect On Demand rules.
