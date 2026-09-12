> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnmanager/localizeddescription](https://developer.apple.com/documentation/networkextension/nevpnmanager/localizeddescription)

# localizedDescription (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A string containing the display name of the VPN configuration.

## Declaration

```swift
var localizedDescription: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This string is used as the display name of the VPN configuration in the system’s VPN settings UI. If this property is set to nil at the time that the configuration is created, it will be automatically set to the display name of the calling app.

## See Also

### Accessing VPN configuration properties

- [isEnabled](isenabled.md): A Boolean used to toggle the enabled state of the VPN configuration.
- [protocolConfiguration](protocolconfiguration.md): An [NEVPNProtocol](../nevpnprotocol.md) object containing the configuration settings of the VPN tunneling protocol.
- [protocol](protocol.md): Deprecated. An `NEVPNProtocol` object containing the configuration settings of the VPN tunneling protocol.
- [isOnDemandEnabled](isondemandenabled.md): A Boolean used to toggle the Connect On Demand capability.
- [onDemandRules](ondemandrules.md): An ordered list of Connect On Demand rules.

# localizedDescription (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A string containing the display name of the VPN configuration.

## Declaration

```objectivec
@property (copy, nullable) NSString * localizedDescription;
```

<a id="Discussion"></a>

## Discussion

This string is used as the display name of the VPN configuration in the system’s VPN settings UI. If this property is set to nil at the time that the configuration is created, it will be automatically set to the display name of the calling app.

## See Also

### Accessing VPN configuration properties

- [enabled](isenabled.md): A Boolean used to toggle the enabled state of the VPN configuration.
- [protocolConfiguration](protocolconfiguration.md): An [NEVPNProtocol](../nevpnprotocol.md) object containing the configuration settings of the VPN tunneling protocol.
- [protocol](protocol.md): Deprecated. An `NEVPNProtocol` object containing the configuration settings of the VPN tunneling protocol.
- [onDemandEnabled](isondemandenabled.md): A Boolean used to toggle the Connect On Demand capability.
- [onDemandRules](ondemandrules.md): An ordered list of Connect On Demand rules.
