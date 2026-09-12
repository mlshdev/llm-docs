> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netransparentproxymanager](https://developer.apple.com/documentation/networkextension/netransparentproxymanager)

# NETransparentProxyManager (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** macOS 10.15+

An object that configures and controls transparent proxies.

## Declaration

```swift
class NETransparentProxyManager
```

## Topics

### Loading proxy configurations

- [loadAllFromPreferences(completionHandler:)](netransparentproxymanager/loadallfrompreferences%28completionhandler_%29.md): Loads all previously-saved transparent proxy configurations.

## Relationships

### Inherits From

- [NEVPNManager](nevpnmanager.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Transparent proxy configuration

- [NETransparentProxyProvider](netransparentproxyprovider.md): An object that implements the client side of a custom transparent network proxy solution.
- [NETransparentProxyNetworkSettings](netransparentproxynetworksettings.md): A specification of what traffic to route through a transparent proxy.
- [NENetworkRule](nenetworkrule.md): A rule to match attributes of network traffic.

# NETransparentProxyManager (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** macOS 10.15+

An object that configures and controls transparent proxies.

## Declaration

```objectivec
@interface NETransparentProxyManager : NEVPNManager
```

## Topics

### Loading proxy configurations

- [loadAllFromPreferencesWithCompletionHandler:](netransparentproxymanager/loadallfrompreferences%28completionhandler_%29.md): Loads all previously-saved transparent proxy configurations.

## Relationships

### Inherits From

- [NEVPNManager](nevpnmanager.md)

## See Also

### Transparent proxy configuration

- [NETransparentProxyProvider](netransparentproxyprovider.md): An object that implements the client side of a custom transparent network proxy solution.
- [NETransparentProxyNetworkSettings](netransparentproxynetworksettings.md): A specification of what traffic to route through a transparent proxy.
- [NENetworkRule](nenetworkrule.md): A rule to match attributes of network traffic.
