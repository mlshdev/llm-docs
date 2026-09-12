> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnprotocol/excludeapns](https://developer.apple.com/documentation/networkextension/nevpnprotocol/excludeapns)

# excludeAPNs (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · visionOS 1.0+

A Boolean value that indicates whether the system excludes all APNs network traffic from the tunnel.

## Declaration

```swift
var excludeAPNs: Bool { get set }
```

## Mentioned In

- [Routing your VPN network traffic](../routing-your-vpn-network-traffic.md)

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), the system excludes Apple Push Notification services (APNs) traffic, but only when the [includeAllNetworks](includeallnetworks.md) property is also [true](https://developer.apple.com/documentation/swift/true). [NETransparentProxyManager](../netransparentproxymanager.md) doesn’t support this property.

The default value for this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Routing network traffic

- [includeAllNetworks](includeallnetworks.md): A Boolean value that indicates whether the system sends most network traffic over the tunnel.
- [excludeCellularServices](excludecellularservices.md): A Boolean value that indicates whether the system excludes all cellular services network traffic from the tunnel.
- [excludeLocalNetworks](excludelocalnetworks.md): A Boolean value that indicates whether the system excludes all traffic destined for local networks from the tunnel.
- [enforceRoutes](enforceroutes.md): A Boolean value that indicates whether route rules for the tunnel take precedence over any locally defined routes.

# excludeAPNs (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · visionOS 1.0+

A Boolean value that indicates whether the system excludes all APNs network traffic from the tunnel.

## Declaration

```objectivec
@property BOOL excludeAPNs;
```

## Mentioned In

- [Routing your VPN network traffic](../routing-your-vpn-network-traffic.md)

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), the system excludes Apple Push Notification services (APNs) traffic, but only when the [includeAllNetworks](includeallnetworks.md) property is also [true](https://developer.apple.com/documentation/swift/true). [NETransparentProxyManager](../netransparentproxymanager.md) doesn’t support this property.

The default value for this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Routing network traffic

- [includeAllNetworks](includeallnetworks.md): A Boolean value that indicates whether the system sends most network traffic over the tunnel.
- [excludeCellularServices](excludecellularservices.md): A Boolean value that indicates whether the system excludes all cellular services network traffic from the tunnel.
- [excludeLocalNetworks](excludelocalnetworks.md): A Boolean value that indicates whether the system excludes all traffic destined for local networks from the tunnel.
- [enforceRoutes](enforceroutes.md): A Boolean value that indicates whether route rules for the tunnel take precedence over any locally defined routes.
