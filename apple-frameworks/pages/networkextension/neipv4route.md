> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neipv4route](https://developer.apple.com/documentation/networkextension/neipv4route)

# NEIPv4Route (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The settings for an IPv4 route.

## Declaration

```swift
class NEIPv4Route
```

## Mentioned In

- [Routing your VPN network traffic](routing-your-vpn-network-traffic.md)

## Topics

### Creating an IPv4 Route

- [init(destinationAddress:subnetMask:)](neipv4route/init%28destinationaddress_subnetmask_%29.md): Initialize the [NEIPv4Route](neipv4route.md) object.
- [default()](neipv4route/default%28%29.md): A convenience method for creating the default IPv4 route.

### Accessing IPv4 Route Properties

- [destinationAddress](neipv4route/destinationaddress.md): The destination network address of the route.
- [destinationSubnetMask](neipv4route/destinationsubnetmask.md): The destination network mask of the route.
- [gatewayAddress](neipv4route/gatewayaddress.md): The address of the next-hop gateway of the route.

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

- [includedRoutes](neipv4settings/includedroutes.md): The IPv4 network traffic that the system routes to the TUN interface.
- [excludedRoutes](neipv4settings/excludedroutes.md): The IPv4 network traffic that the system routes to the primary physical interface, not the TUN interface.

# NEIPv4Route (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The settings for an IPv4 route.

## Declaration

```objectivec
@interface NEIPv4Route : NSObject
```

## Mentioned In

- [Routing your VPN network traffic](routing-your-vpn-network-traffic.md)

## Topics

### Creating an IPv4 Route

- [initWithDestinationAddress:subnetMask:](neipv4route/init%28destinationaddress_subnetmask_%29.md): Initialize the [NEIPv4Route](neipv4route.md) object.
- [defaultRoute](neipv4route/default%28%29.md): A convenience method for creating the default IPv4 route.

### Accessing IPv4 Route Properties

- [destinationAddress](neipv4route/destinationaddress.md): The destination network address of the route.
- [destinationSubnetMask](neipv4route/destinationsubnetmask.md): The destination network mask of the route.
- [gatewayAddress](neipv4route/gatewayaddress.md): The address of the next-hop gateway of the route.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Routing network traffic

- [includedRoutes](neipv4settings/includedroutes.md): The IPv4 network traffic that the system routes to the TUN interface.
- [excludedRoutes](neipv4settings/excludedroutes.md): The IPv4 network traffic that the system routes to the primary physical interface, not the TUN interface.
