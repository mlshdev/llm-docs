> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neipv6settings/includedroutes

# includedRoutes (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The IPv6 network traffic that the system routes to the TUN interface.

## Declaration

```swift
var includedRoutes: [NEIPv6Route]? { get set }
```

## Mentioned In

- [Routing your VPN network traffic](../routing-your-vpn-network-traffic.md)

<a id="Discussion"></a>

## Discussion

If you include the default route (`0.0.0.0/0` or `::/0`) in this property, the system routes traffic that doesn’t match a specific rule in the system routing table through the VPN.

## See Also

### Routing network traffic

- [excludedRoutes](excludedroutes.md): The IPv6 network traffic that the system routes to the primary physical interface, not the TUN interface.
- [NEIPv6Route](../neipv6route.md): The settings for an IPv6 route.

# includedRoutes (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The IPv6 network traffic that the system routes to the TUN interface.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NEIPv6Route *> * includedRoutes;
```

## Mentioned In

- [Routing your VPN network traffic](../routing-your-vpn-network-traffic.md)

<a id="Discussion"></a>

## Discussion

If you include the default route (`0.0.0.0/0` or `::/0`) in this property, the system routes traffic that doesn’t match a specific rule in the system routing table through the VPN.

## See Also

### Routing network traffic

- [excludedRoutes](excludedroutes.md): The IPv6 network traffic that the system routes to the primary physical interface, not the TUN interface.
- [NEIPv6Route](../neipv6route.md): The settings for an IPv6 route.
