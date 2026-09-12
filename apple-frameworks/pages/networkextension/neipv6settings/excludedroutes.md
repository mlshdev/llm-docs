> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neipv6settings/excludedroutes](https://developer.apple.com/documentation/networkextension/neipv6settings/excludedroutes)

# excludedRoutes (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The IPv6 network traffic that the system routes to the primary physical interface, not the TUN interface.

## Declaration

```swift
var excludedRoutes: [NEIPv6Route]? { get set }
```

## Mentioned In

- [Routing your VPN network traffic](../routing-your-vpn-network-traffic.md)

<a id="Discussion"></a>

## Discussion

This property excludes routes that the system might otherwise include from the [includedRoutes](includedroutes.md) property. The system automatically excludes the IP address of the tunnel server.

## See Also

### Routing network traffic

- [includedRoutes](includedroutes.md): The IPv6 network traffic that the system routes to the TUN interface.
- [NEIPv6Route](../neipv6route.md): The settings for an IPv6 route.

# excludedRoutes (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The IPv6 network traffic that the system routes to the primary physical interface, not the TUN interface.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NEIPv6Route *> * excludedRoutes;
```

## Mentioned In

- [Routing your VPN network traffic](../routing-your-vpn-network-traffic.md)

<a id="Discussion"></a>

## Discussion

This property excludes routes that the system might otherwise include from the [includedRoutes](includedroutes.md) property. The system automatically excludes the IP address of the tunnel server.

## See Also

### Routing network traffic

- [includedRoutes](includedroutes.md): The IPv6 network traffic that the system routes to the TUN interface.
- [NEIPv6Route](../neipv6route.md): The settings for an IPv6 route.
