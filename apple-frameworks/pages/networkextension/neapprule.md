> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapprule](https://developer.apple.com/documentation/networkextension/neapprule)

# NEAppRule (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The identity of an app whose traffic is to be routed through the tunnel.

## Declaration

```swift
class NEAppRule
```

## Topics

### Initializing an app rule

- [init(signingIdentifier:)](neapprule/init%28signingidentifier_%29.md): Create an app rule that matches an app with a given signing identifier.
- [init(signingIdentifier:designatedRequirement:)](neapprule/init%28signingidentifier_designatedrequirement_%29.md): Create an app rule that matches an app with a given signing identifier and a given designated requirement.

### Accessing app rule properties

- [matchSigningIdentifier](neapprule/matchsigningidentifier.md): The signing identifier of the app that matches the rule.
- [matchDesignatedRequirement](neapprule/matchdesignatedrequirement.md): The designated requirement of the app that matches the rule.
- [matchPath](neapprule/matchpath.md): The file system path of the app that matches the rule.
- [matchDomains](neapprule/matchdomains.md): The hostname domains that match the rule.
- [matchTools](neapprule/matchtools.md): An array of app rule objects that restrict the rule so it only matches network traffic generated from helper processes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [NETunnelProviderProtocol](netunnelproviderprotocol.md): Configuration parameters for a VPN tunnel.
- [VPN On Demand Rules](vpn-on-demand-rules.md): Set up VPN On Demand.

# NEAppRule (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The identity of an app whose traffic is to be routed through the tunnel.

## Declaration

```objectivec
@interface NEAppRule : NSObject
```

## Topics

### Initializing an app rule

- [initWithSigningIdentifier:](neapprule/init%28signingidentifier_%29.md): Create an app rule that matches an app with a given signing identifier.
- [initWithSigningIdentifier:designatedRequirement:](neapprule/init%28signingidentifier_designatedrequirement_%29.md): Create an app rule that matches an app with a given signing identifier and a given designated requirement.

### Accessing app rule properties

- [matchSigningIdentifier](neapprule/matchsigningidentifier.md): The signing identifier of the app that matches the rule.
- [matchDesignatedRequirement](neapprule/matchdesignatedrequirement.md): The designated requirement of the app that matches the rule.
- [matchPath](neapprule/matchpath.md): The file system path of the app that matches the rule.
- [matchDomains](neapprule/matchdomains.md): The hostname domains that match the rule.
- [matchTools](neapprule/matchtools.md): An array of app rule objects that restrict the rule so it only matches network traffic generated from helper processes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### VPN configuration

- [NEAppProxyProviderManager](neappproxyprovidermanager.md): An object to create and manage the app proxy provider’s VPN configuration.
- [NETunnelProviderManager](netunnelprovidermanager.md): An object to create and manage the tunnel provider’s VPN configuration.
- [NEVPNManager](nevpnmanager.md): An object to create and manage a Personal VPN configuration.
- [NETunnelProviderProtocol](netunnelproviderprotocol.md): Configuration parameters for a VPN tunnel.
- [VPN On Demand Rules](vpn-on-demand-rules.md): Set up VPN On Demand.
