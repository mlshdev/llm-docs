> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neipv4route/default()](https://developer.apple.com/documentation/networkextension/neipv4route/default())

# default() (Swift)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A convenience method for creating the default IPv4 route.

## Declaration

```swift
class func `default`() -> NEIPv4Route
```

<a id="return-value"></a>

## Return Value

An [NEIPv4Route](../neipv4route.md) object containing the default IPv4 route.

<a id="Discussion"></a>

## Discussion

Set this route in the `includedRoutes` array in the [NEIPv4Settings](../neipv4settings.md) object to specify that all IPv4 network traffic be routed to the TUN interface by default.

## See Also

### Creating an IPv4 Route

- [init(destinationAddress:subnetMask:)](init%28destinationaddress_subnetmask_%29.md): Initialize the [NEIPv4Route](../neipv4route.md) object.

# defaultRoute (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A convenience method for creating the default IPv4 route.

## Declaration

```objectivec
+ (NEIPv4Route * const) defaultRoute;
```

<a id="return-value"></a>

## Return Value

An [NEIPv4Route](../neipv4route.md) object containing the default IPv4 route.

<a id="Discussion"></a>

## Discussion

Set this route in the `includedRoutes` array in the [NEIPv4Settings](../neipv4settings.md) object to specify that all IPv4 network traffic be routed to the TUN interface by default.

## See Also

### Creating an IPv4 Route

- [initWithDestinationAddress:subnetMask:](init%28destinationaddress_subnetmask_%29.md): Initialize the [NEIPv4Route](../neipv4route.md) object.
