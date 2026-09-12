> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netransparentproxynetworksettings](https://developer.apple.com/documentation/networkextension/netransparentproxynetworksettings)

# NETransparentProxyNetworkSettings (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** macOS 10.15+

A specification of what traffic to route through a transparent proxy.

## Declaration

```swift
class NETransparentProxyNetworkSettings
```

<a id="overview"></a>

## Overview

A proxy network settings object contains two properties: an array of rules to include traffic ([includedNetworkRules](netransparentproxynetworksettings/includednetworkrules.md)) and an array of rules to exclude traffic ([excludedNetworkRules](netransparentproxynetworksettings/excludednetworkrules.md)). The exclusion rules take prirority. Therefore, if a given flow matches any of the [excludedNetworkRules](netransparentproxynetworksettings/excludednetworkrules.md), evaluation ends and the flow doesn’t route to the proxy. If there’s no match, then evaluation continues and attempts to match the flow against the [includedNetworkRules](netransparentproxynetworksettings/includednetworkrules.md).

## Topics

### Traffic routing rules

- [includedNetworkRules](netransparentproxynetworksettings/includednetworkrules.md): An array of rules that collectively specify what traffic to route through the transparent proxy.
- [excludedNetworkRules](netransparentproxynetworksettings/excludednetworkrules.md): An array of rules that collectively specify what traffic to not route through the transparent proxy.

## Relationships

### Inherits From

- [NETunnelNetworkSettings](netunnelnetworksettings.md)

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

### Transparent proxy configuration

- [NETransparentProxyManager](netransparentproxymanager.md): An object that configures and controls transparent proxies.
- [NETransparentProxyProvider](netransparentproxyprovider.md): An object that implements the client side of a custom transparent network proxy solution.
- [NENetworkRule](nenetworkrule.md): A rule to match attributes of network traffic.

# NETransparentProxyNetworkSettings (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** macOS 10.15+

A specification of what traffic to route through a transparent proxy.

## Declaration

```objectivec
@interface NETransparentProxyNetworkSettings : NETunnelNetworkSettings
```

<a id="overview"></a>

## Overview

A proxy network settings object contains two properties: an array of rules to include traffic ([includedNetworkRules](netransparentproxynetworksettings/includednetworkrules.md)) and an array of rules to exclude traffic ([excludedNetworkRules](netransparentproxynetworksettings/excludednetworkrules.md)). The exclusion rules take prirority. Therefore, if a given flow matches any of the [excludedNetworkRules](netransparentproxynetworksettings/excludednetworkrules.md), evaluation ends and the flow doesn’t route to the proxy. If there’s no match, then evaluation continues and attempts to match the flow against the [includedNetworkRules](netransparentproxynetworksettings/includednetworkrules.md).

## Topics

### Traffic routing rules

- [includedNetworkRules](netransparentproxynetworksettings/includednetworkrules.md): An array of rules that collectively specify what traffic to route through the transparent proxy.
- [excludedNetworkRules](netransparentproxynetworksettings/excludednetworkrules.md): An array of rules that collectively specify what traffic to not route through the transparent proxy.

## Relationships

### Inherits From

- [NETunnelNetworkSettings](netunnelnetworksettings.md)

## See Also

### Transparent proxy configuration

- [NETransparentProxyManager](netransparentproxymanager.md): An object that configures and controls transparent proxies.
- [NETransparentProxyProvider](netransparentproxyprovider.md): An object that implements the client side of a custom transparent network proxy solution.
- [NENetworkRule](nenetworkrule.md): A rule to match attributes of network traffic.
