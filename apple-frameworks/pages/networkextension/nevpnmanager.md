> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnmanager](https://developer.apple.com/documentation/networkextension/nevpnmanager)

# NEVPNManager (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An object to create and manage a Personal VPN configuration.

## Declaration

```swift
class NEVPNManager
```

<a id="overview"></a>

## Overview

The [NEVPNManager](nevpnmanager.md) API gives apps the ability to create and manage a Personal VPN configuration on iOS and macOS. Personal VPN configurations are typically used to provide a service to users that protects their Internet browsing activity on insecure networks such as public Wi-Fi networks.

## Topics

### Managing VPN configurations

- [shared()](nevpnmanager/shared%28%29.md): Access the single instance of `NEVPNManager`.
- [loadFromPreferences(completionHandler:)](nevpnmanager/loadfrompreferences%28completionhandler_%29.md): Load the VPN configuration from the Network Extension preferences.
- [saveToPreferences(completionHandler:)](nevpnmanager/savetopreferences%28completionhandler_%29.md): Save the VPN configuration in the Network Extension preferences.
- [setAuthorization(\_:)](nevpnmanager/setauthorization%28__%29.md)
- [removeFromPreferences(completionHandler:)](nevpnmanager/removefrompreferences%28completionhandler_%29.md): Remove the VPN configuration from the Network Extension preferences.

### Accessing VPN configuration properties

- [isEnabled](nevpnmanager/isenabled.md): A Boolean used to toggle the enabled state of the VPN configuration.
- [protocolConfiguration](nevpnmanager/protocolconfiguration.md): An [NEVPNProtocol](nevpnprotocol.md) object containing the configuration settings of the VPN tunneling protocol.
- [protocol](nevpnmanager/protocol.md): Deprecated. An `NEVPNProtocol` object containing the configuration settings of the VPN tunneling protocol.
- [localizedDescription](nevpnmanager/localizeddescription.md): A string containing the display name of the VPN configuration.
- [isOnDemandEnabled](nevpnmanager/isondemandenabled.md): A Boolean used to toggle the Connect On Demand capability.
- [onDemandRules](nevpnmanager/ondemandrules.md): An ordered list of Connect On Demand rules.

### Connecting and disconnecting VPN

- [connection](nevpnmanager/connection.md): An [NEVPNConnection](nevpnconnection.md) object that is used to control the VPN tunnel specified by the VPN configuration.

### Errors

- [NEVPNError.Code](nevpnerror-swift.struct/code.md): Codes that indicate the source of an error.
- [NEVPNErrorDomain](nevpnerrordomain.md)
- [NEVPNError.Code](nevpnerror-swift.struct/code.md): Codes that indicate the source of an error.

### Notifications

- [NEVPNConfigurationChange](../foundation/nsnotification/name-swift.struct/nevpnconfigurationchange.md): Posted after the VPN configuration stored in the Network Extension preferences changes.

### Entitlements

- [Personal VPN Entitlement](../bundleresources/entitlements/com.apple.developer.networking.vpn.api.md): The API an app can use to create and control a custom system VPN configuration.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NETransparentProxyManager](netransparentproxymanager.md)
- [NETunnelProviderManager](netunnelprovidermanager.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### VPN configuration

- [NEAppProxyProviderManager](neappproxyprovidermanager.md): An object to create and manage the app proxy provider’s VPN configuration.
- [NETunnelProviderManager](netunnelprovidermanager.md): An object to create and manage the tunnel provider’s VPN configuration.
- [NETunnelProviderProtocol](netunnelproviderprotocol.md): Configuration parameters for a VPN tunnel.
- [NEAppRule](neapprule.md): The identity of an app whose traffic is to be routed through the tunnel.
- [VPN On Demand Rules](vpn-on-demand-rules.md): Set up VPN On Demand.

# NEVPNManager (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An object to create and manage a Personal VPN configuration.

## Declaration

```objectivec
@interface NEVPNManager : NSObject
```

<a id="overview"></a>

## Overview

The [NEVPNManager](nevpnmanager.md) API gives apps the ability to create and manage a Personal VPN configuration on iOS and macOS. Personal VPN configurations are typically used to provide a service to users that protects their Internet browsing activity on insecure networks such as public Wi-Fi networks.

## Topics

### Managing VPN configurations

- [sharedManager](nevpnmanager/shared%28%29.md): Access the single instance of `NEVPNManager`.
- [loadFromPreferencesWithCompletionHandler:](nevpnmanager/loadfrompreferences%28completionhandler_%29.md): Load the VPN configuration from the Network Extension preferences.
- [saveToPreferencesWithCompletionHandler:](nevpnmanager/savetopreferences%28completionhandler_%29.md): Save the VPN configuration in the Network Extension preferences.
- [setAuthorization:](nevpnmanager/setauthorization%28__%29.md)
- [removeFromPreferencesWithCompletionHandler:](nevpnmanager/removefrompreferences%28completionhandler_%29.md): Remove the VPN configuration from the Network Extension preferences.

### Accessing VPN configuration properties

- [enabled](nevpnmanager/isenabled.md): A Boolean used to toggle the enabled state of the VPN configuration.
- [protocolConfiguration](nevpnmanager/protocolconfiguration.md): An [NEVPNProtocol](nevpnprotocol.md) object containing the configuration settings of the VPN tunneling protocol.
- [protocol](nevpnmanager/protocol.md): Deprecated. An `NEVPNProtocol` object containing the configuration settings of the VPN tunneling protocol.
- [localizedDescription](nevpnmanager/localizeddescription.md): A string containing the display name of the VPN configuration.
- [onDemandEnabled](nevpnmanager/isondemandenabled.md): A Boolean used to toggle the Connect On Demand capability.
- [onDemandRules](nevpnmanager/ondemandrules.md): An ordered list of Connect On Demand rules.

### Connecting and disconnecting VPN

- [connection](nevpnmanager/connection.md): An [NEVPNConnection](nevpnconnection.md) object that is used to control the VPN tunnel specified by the VPN configuration.

### Errors

- [NEVPNError](nevpnerror-swift.struct/code.md): Codes that indicate the source of an error.
- [NEVPNErrorDomain](nevpnerrordomain.md)
- [NEVPNError](nevpnerror-swift.struct/code.md): Codes that indicate the source of an error.

### Notifications

- [NEVPNConfigurationChangeNotification](nevpnconfigurationchangenotification.md): Posted after the VPN configuration stored in the Network Extension preferences changes.

### Entitlements

- [Personal VPN Entitlement](../bundleresources/entitlements/com.apple.developer.networking.vpn.api.md): The API an app can use to create and control a custom system VPN configuration.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NETransparentProxyManager](netransparentproxymanager.md)
- [NETunnelProviderManager](netunnelprovidermanager.md)

## See Also

### VPN configuration

- [NEAppProxyProviderManager](neappproxyprovidermanager.md): An object to create and manage the app proxy provider’s VPN configuration.
- [NETunnelProviderManager](netunnelprovidermanager.md): An object to create and manage the tunnel provider’s VPN configuration.
- [NETunnelProviderProtocol](netunnelproviderprotocol.md): Configuration parameters for a VPN tunnel.
- [NEAppRule](neapprule.md): The identity of an app whose traffic is to be routed through the tunnel.
- [VPN On Demand Rules](vpn-on-demand-rules.md): Set up VPN On Demand.
