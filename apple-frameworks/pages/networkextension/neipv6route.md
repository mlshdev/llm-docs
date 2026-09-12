> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neipv6route](https://developer.apple.com/documentation/networkextension/neipv6route)

# NEIPv6Route (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The settings for an IPv6 route.

## Declaration

```swift
class NEIPv6Route
```

## Mentioned In

- [Routing your VPN network traffic](routing-your-vpn-network-traffic.md)

## Topics

### Creating an IPv6 Route

- [init(destinationAddress:networkPrefixLength:)](neipv6route/init%28destinationaddress_networkprefixlength_%29.md): Initialize the NEIPv6Route
- [default()](neipv6route/default%28%29.md): A convenience method for creating the default IPv4 route.

### Accessing IPv6 Route Properties

- [destinationAddress](neipv6route/destinationaddress.md): The destination network address of the route.
- [destinationNetworkPrefixLength](neipv6route/destinationnetworkprefixlength.md): The destination network prefix length of the route.
- [gatewayAddress](neipv6route/gatewayaddress.md): The address of the next-hop gateway of the route.

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

### Routing network traffic

- [includedRoutes](neipv6settings/includedroutes.md): The IPv6 network traffic that the system routes to the TUN interface.
- [excludedRoutes](neipv6settings/excludedroutes.md): The IPv6 network traffic that the system routes to the primary physical interface, not the TUN interface.

# NEIPv6Route (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The settings for an IPv6 route.

## Declaration

```objectivec
@interface NEIPv6Route : NSObject
```

## Mentioned In

- [Routing your VPN network traffic](routing-your-vpn-network-traffic.md)

## Topics

### Creating an IPv6 Route

- [initWithDestinationAddress:networkPrefixLength:](neipv6route/init%28destinationaddress_networkprefixlength_%29.md): Initialize the NEIPv6Route
- [defaultRoute](neipv6route/default%28%29.md): A convenience method for creating the default IPv4 route.

### Accessing IPv6 Route Properties

- [destinationAddress](neipv6route/destinationaddress.md): The destination network address of the route.
- [destinationNetworkPrefixLength](neipv6route/destinationnetworkprefixlength.md): The destination network prefix length of the route.
- [gatewayAddress](neipv6route/gatewayaddress.md): The address of the next-hop gateway of the route.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Routing network traffic

- [includedRoutes](neipv6settings/includedroutes.md): The IPv6 network traffic that the system routes to the TUN interface.
- [excludedRoutes](neipv6settings/excludedroutes.md): The IPv6 network traffic that the system routes to the primary physical interface, not the TUN interface.
