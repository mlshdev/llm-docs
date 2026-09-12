> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netransparentproxyprovider](https://developer.apple.com/documentation/networkextension/netransparentproxyprovider)

# NETransparentProxyProvider (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** macOS 11.0+

An object that implements the client side of a custom transparent network proxy solution.

## Declaration

```swift
class NETransparentProxyProvider
```

## Mentioned In

- [Handling Flow Copying](handling-flow-copying.md)

<a id="overview"></a>

## Overview

The [NETransparentProxyProvider](netransparentproxyprovider.md) class has the following behavior differences from its superclass [NEAppProxyProvider](neappproxyprovider.md):

- Returning `NO` from [handleNewFlow(\_:)](neappproxyprovider/handlenewflow%28__%29.md) and [handleNewUDPFlow(\_:initialRemoteEndpoint:)](neappproxyprovider/handlenewudpflow%28__initialremoteendpoint_%29.md) causes the flow to proceed to communicate directly with the flow’s ultimate destination, instead of closing the flow with a “Connection Refused” error.
- This provider ignores [NEDNSSettings](nednssettings.md) and [NEProxySettings](neproxysettings.md) specified within [NETransparentProxyNetworkSettings](netransparentproxynetworksettings.md). Flows that match the [includedNetworkRules](netransparentproxynetworksettings/includednetworkrules.md) within [NETransparentProxyNetworkSettings](netransparentproxynetworksettings.md) use the same DNS and proxy settings that other flows on the system currently use.
- Flows that are created using a “connect by name” API (such as [Network](../network.md) framework or [URLSession](../foundation/urlsession.md)) that match the [includedNetworkRules](netransparentproxynetworksettings/includednetworkrules.md) don’t bypass DNS resolution.

## Relationships

### Inherits From

- [NEAppProxyProvider](neappproxyprovider.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Transparent proxy configuration

- [NETransparentProxyManager](netransparentproxymanager.md): An object that configures and controls transparent proxies.
- [NETransparentProxyNetworkSettings](netransparentproxynetworksettings.md): A specification of what traffic to route through a transparent proxy.
- [NENetworkRule](nenetworkrule.md): A rule to match attributes of network traffic.

# NETransparentProxyProvider (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** macOS 11.0+

An object that implements the client side of a custom transparent network proxy solution.

## Declaration

```objectivec
@interface NETransparentProxyProvider : NEAppProxyProvider
```

## Mentioned In

- [Handling Flow Copying](handling-flow-copying.md)

<a id="overview"></a>

## Overview

The [NETransparentProxyProvider](netransparentproxyprovider.md) class has the following behavior differences from its superclass [NEAppProxyProvider](neappproxyprovider.md):

- Returning `NO` from [handleNewFlow:](neappproxyprovider/handlenewflow%28__%29.md) and [handleNewUDPFlow:initialRemoteEndpoint:](neappproxyprovider/handlenewudpflow%28__initialremoteendpoint_%29.md) causes the flow to proceed to communicate directly with the flow’s ultimate destination, instead of closing the flow with a “Connection Refused” error.
- This provider ignores [NEDNSSettings](nednssettings.md) and [NEProxySettings](neproxysettings.md) specified within [NETransparentProxyNetworkSettings](netransparentproxynetworksettings.md). Flows that match the [includedNetworkRules](netransparentproxynetworksettings/includednetworkrules.md) within [NETransparentProxyNetworkSettings](netransparentproxynetworksettings.md) use the same DNS and proxy settings that other flows on the system currently use.
- Flows that are created using a “connect by name” API (such as [Network](../network.md) framework or [NSURLSession](../foundation/urlsession.md)) that match the [includedNetworkRules](netransparentproxynetworksettings/includednetworkrules.md) don’t bypass DNS resolution.

## Relationships

### Inherits From

- [NEAppProxyProvider](neappproxyprovider.md)

## See Also

### Transparent proxy configuration

- [NETransparentProxyManager](netransparentproxymanager.md): An object that configures and controls transparent proxies.
- [NETransparentProxyNetworkSettings](netransparentproxynetworksettings.md): A specification of what traffic to route through a transparent proxy.
- [NENetworkRule](nenetworkrule.md): A rule to match attributes of network traffic.
