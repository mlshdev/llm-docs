> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netunnelproviderprotocol](https://developer.apple.com/documentation/networkextension/netunnelproviderprotocol)

# NETunnelProviderProtocol (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Configuration parameters for a VPN tunnel.

## Declaration

```swift
class NETunnelProviderProtocol
```

<a id="overview"></a>

## Overview

`NETunnelProviderProtocol` objects are used to specify configuration parameters for Tunnel Provider extensions.

## Topics

### Accessing the tunnel configuration

- [providerConfiguration](netunnelproviderprotocol/providerconfiguration.md): A dictionary containing keys and values defined by the Tunnel Provider developer.
- [providerBundleIdentifier](netunnelproviderprotocol/providerbundleidentifier.md): A string identifying the specific Tunnel Provider extension that should be used with this configuration.

## Relationships

### Inherits From

- [NEVPNProtocol](nevpnprotocol.md)

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

### VPN configuration

- [NEAppProxyProviderManager](neappproxyprovidermanager.md): An object to create and manage the app proxy provider’s VPN configuration.
- [NETunnelProviderManager](netunnelprovidermanager.md): An object to create and manage the tunnel provider’s VPN configuration.
- [NEVPNManager](nevpnmanager.md): An object to create and manage a Personal VPN configuration.
- [NEAppRule](neapprule.md): The identity of an app whose traffic is to be routed through the tunnel.
- [VPN On Demand Rules](vpn-on-demand-rules.md): Set up VPN On Demand.

# NETunnelProviderProtocol (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Configuration parameters for a VPN tunnel.

## Declaration

```objectivec
@interface NETunnelProviderProtocol : NEVPNProtocol
```

<a id="overview"></a>

## Overview

`NETunnelProviderProtocol` objects are used to specify configuration parameters for Tunnel Provider extensions.

## Topics

### Accessing the tunnel configuration

- [providerConfiguration](netunnelproviderprotocol/providerconfiguration.md): A dictionary containing keys and values defined by the Tunnel Provider developer.
- [providerBundleIdentifier](netunnelproviderprotocol/providerbundleidentifier.md): A string identifying the specific Tunnel Provider extension that should be used with this configuration.

## Relationships

### Inherits From

- [NEVPNProtocol](nevpnprotocol.md)

## See Also

### VPN configuration

- [NEAppProxyProviderManager](neappproxyprovidermanager.md): An object to create and manage the app proxy provider’s VPN configuration.
- [NETunnelProviderManager](netunnelprovidermanager.md): An object to create and manage the tunnel provider’s VPN configuration.
- [NEVPNManager](nevpnmanager.md): An object to create and manage a Personal VPN configuration.
- [NEAppRule](neapprule.md): The identity of an app whose traffic is to be routed through the tunnel.
- [VPN On Demand Rules](vpn-on-demand-rules.md): Set up VPN On Demand.
