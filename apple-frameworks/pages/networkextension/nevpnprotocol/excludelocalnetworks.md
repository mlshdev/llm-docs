> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnprotocol/excludelocalnetworks](https://developer.apple.com/documentation/networkextension/nevpnprotocol/excludelocalnetworks)

# excludeLocalNetworks (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.2+ · iPadOS 14.2+ · Mac Catalyst 14.2+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that indicates whether the system excludes all traffic destined for local networks from the tunnel.

## Declaration

```swift
var excludeLocalNetworks: Bool { get set }
```

## Mentioned In

- [Routing your VPN network traffic](../routing-your-vpn-network-traffic.md)

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), the system excludes network connections to hosts on the local network — such as AirPlay, AirDrop, and CarPlay — but only when the [includeAllNetworks](includeallnetworks.md) or [enforceRoutes](enforceroutes.md) property is also [true](https://developer.apple.com/documentation/swift/true). [NETransparentProxyManager](../netransparentproxymanager.md) doesn’t support this property.

The default value for this property is [false](https://developer.apple.com/documentation/swift/false) in macOS and [true](https://developer.apple.com/documentation/swift/true) in iOS`.`

## See Also

### Routing network traffic

- [includeAllNetworks](includeallnetworks.md): A Boolean value that indicates whether the system sends most network traffic over the tunnel.
- [excludeAPNs](excludeapns.md): A Boolean value that indicates whether the system excludes all APNs network traffic from the tunnel.
- [excludeCellularServices](excludecellularservices.md): A Boolean value that indicates whether the system excludes all cellular services network traffic from the tunnel.
- [enforceRoutes](enforceroutes.md): A Boolean value that indicates whether route rules for the tunnel take precedence over any locally defined routes.

# excludeLocalNetworks (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.2+ · iPadOS 14.2+ · Mac Catalyst 14.2+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that indicates whether the system excludes all traffic destined for local networks from the tunnel.

## Declaration

```objectivec
@property BOOL excludeLocalNetworks;
```

## Mentioned In

- [Routing your VPN network traffic](../routing-your-vpn-network-traffic.md)

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), the system excludes network connections to hosts on the local network — such as AirPlay, AirDrop, and CarPlay — but only when the [includeAllNetworks](includeallnetworks.md) or [enforceRoutes](enforceroutes.md) property is also [true](https://developer.apple.com/documentation/swift/true). [NETransparentProxyManager](../netransparentproxymanager.md) doesn’t support this property.

The default value for this property is [false](https://developer.apple.com/documentation/swift/false) in macOS and [true](https://developer.apple.com/documentation/swift/true) in iOS`.`

## See Also

### Routing network traffic

- [includeAllNetworks](includeallnetworks.md): A Boolean value that indicates whether the system sends most network traffic over the tunnel.
- [excludeAPNs](excludeapns.md): A Boolean value that indicates whether the system excludes all APNs network traffic from the tunnel.
- [excludeCellularServices](excludecellularservices.md): A Boolean value that indicates whether the system excludes all cellular services network traffic from the tunnel.
- [enforceRoutes](enforceroutes.md): A Boolean value that indicates whether route rules for the tunnel take precedence over any locally defined routes.
