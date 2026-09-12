> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyprovidermanager](https://developer.apple.com/documentation/networkextension/neappproxyprovidermanager)

# NEAppProxyProviderManager (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An object to create and manage the app proxy provider’s VPN configuration.

## Declaration

```swift
class NEAppProxyProviderManager
```

## Mentioned In

- [Routing your VPN network traffic](routing-your-vpn-network-traffic.md)

<a id="overview"></a>

## Overview

Objects cannot be directly instantiated. Instead, App Proxy configurations are created exclusively from `com.apple.vpn.managed.applayer` payloads in configuration profiles.

App Proxy configurations can only be used with Per-App VPN routing rules. For more details about how to create App Proxy configurations and configure Per-App VPN, see [NETunnelProviderManager](netunnelprovidermanager.md).

> **Important**

>  The `com.apple.developer.networking.networkextension` entitlement is required in order to use the [NEAppProxyProviderManager](neappproxyprovidermanager.md) class. Enable this entitlement when creating an App ID in your developer account.

## Topics

### Loading the app proxy configuration

- [loadAllFromPreferences(completionHandler:)](neappproxyprovidermanager/loadallfrompreferences%28completionhandler_%29.md): Load all of the App Proxy configurations associated with the calling app that have previously been saved to the Network Extension preferences.

## Relationships

### Inherits From

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

- [NETunnelProviderManager](netunnelprovidermanager.md): An object to create and manage the tunnel provider’s VPN configuration.
- [NEVPNManager](nevpnmanager.md): An object to create and manage a Personal VPN configuration.
- [NETunnelProviderProtocol](netunnelproviderprotocol.md): Configuration parameters for a VPN tunnel.
- [NEAppRule](neapprule.md): The identity of an app whose traffic is to be routed through the tunnel.
- [VPN On Demand Rules](vpn-on-demand-rules.md): Set up VPN On Demand.

# NEAppProxyProviderManager (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An object to create and manage the app proxy provider’s VPN configuration.

## Declaration

```objectivec
@interface NEAppProxyProviderManager : NETunnelProviderManager
```

## Mentioned In

- [Routing your VPN network traffic](routing-your-vpn-network-traffic.md)

<a id="overview"></a>

## Overview

Objects cannot be directly instantiated. Instead, App Proxy configurations are created exclusively from `com.apple.vpn.managed.applayer` payloads in configuration profiles.

App Proxy configurations can only be used with Per-App VPN routing rules. For more details about how to create App Proxy configurations and configure Per-App VPN, see [NETunnelProviderManager](netunnelprovidermanager.md).

> **Important**

>  The `com.apple.developer.networking.networkextension` entitlement is required in order to use the [NEAppProxyProviderManager](neappproxyprovidermanager.md) class. Enable this entitlement when creating an App ID in your developer account.

## Topics

### Loading the app proxy configuration

- [loadAllFromPreferencesWithCompletionHandler:](neappproxyprovidermanager/loadallfrompreferences%28completionhandler_%29.md): Load all of the App Proxy configurations associated with the calling app that have previously been saved to the Network Extension preferences.

## Relationships

### Inherits From

- [NETunnelProviderManager](netunnelprovidermanager.md)

## See Also

### VPN configuration

- [NETunnelProviderManager](netunnelprovidermanager.md): An object to create and manage the tunnel provider’s VPN configuration.
- [NEVPNManager](nevpnmanager.md): An object to create and manage a Personal VPN configuration.
- [NETunnelProviderProtocol](netunnelproviderprotocol.md): Configuration parameters for a VPN tunnel.
- [NEAppRule](neapprule.md): The identity of an app whose traffic is to be routed through the tunnel.
- [VPN On Demand Rules](vpn-on-demand-rules.md): Set up VPN On Demand.
