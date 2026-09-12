> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnmanager/isenabled](https://developer.apple.com/documentation/networkextension/nevpnmanager/isenabled)

# isEnabled (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A Boolean used to toggle the enabled state of the VPN configuration.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

A VPN configuration must be enabled before it can be used to bring up a VPN tunnel. Only one Personal VPN configuration can be enabled simultaneously on the system. If another Personal VPN configuration is enabled, then this property will be automatically set to [false](https://developer.apple.com/documentation/swift/false) in the Network Extension preferences. Note that you will need to re-load the VPN configuration from the preferences in order to see the change in value. You can register with [NotificationCenter](../../foundation/notificationcenter.md) to observe the [NEVPNConfigurationChangeNotification](../nevpnconfigurationchangenotification.md) notification for the [NEVPNManager](../nevpnmanager.md) object so that your code can detect when the VPN configuration has been disabled.

## See Also

### Accessing VPN configuration properties

- [protocolConfiguration](protocolconfiguration.md): An [NEVPNProtocol](../nevpnprotocol.md) object containing the configuration settings of the VPN tunneling protocol.
- [protocol](protocol.md): Deprecated. An `NEVPNProtocol` object containing the configuration settings of the VPN tunneling protocol.
- [localizedDescription](localizeddescription.md): A string containing the display name of the VPN configuration.
- [isOnDemandEnabled](isondemandenabled.md): A Boolean used to toggle the Connect On Demand capability.
- [onDemandRules](ondemandrules.md): An ordered list of Connect On Demand rules.

# enabled (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A Boolean used to toggle the enabled state of the VPN configuration.

## Declaration

```objectivec
@property (getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

A VPN configuration must be enabled before it can be used to bring up a VPN tunnel. Only one Personal VPN configuration can be enabled simultaneously on the system. If another Personal VPN configuration is enabled, then this property will be automatically set to [false](https://developer.apple.com/documentation/swift/false) in the Network Extension preferences. Note that you will need to re-load the VPN configuration from the preferences in order to see the change in value. You can register with [NSNotificationCenter](../../foundation/notificationcenter.md) to observe the [NEVPNConfigurationChangeNotification](../nevpnconfigurationchangenotification.md) notification for the [NEVPNManager](../nevpnmanager.md) object so that your code can detect when the VPN configuration has been disabled.

## See Also

### Accessing VPN configuration properties

- [protocolConfiguration](protocolconfiguration.md): An [NEVPNProtocol](../nevpnprotocol.md) object containing the configuration settings of the VPN tunneling protocol.
- [protocol](protocol.md): Deprecated. An `NEVPNProtocol` object containing the configuration settings of the VPN tunneling protocol.
- [localizedDescription](localizeddescription.md): A string containing the display name of the VPN configuration.
- [onDemandEnabled](isondemandenabled.md): A Boolean used to toggle the Connect On Demand capability.
- [onDemandRules](ondemandrules.md): An ordered list of Connect On Demand rules.
