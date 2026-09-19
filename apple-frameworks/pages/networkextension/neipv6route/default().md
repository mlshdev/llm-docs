> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neipv6route/default()

# default() (Swift)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A convenience method for creating the default IPv4 route.

## Declaration

```swift
class func `default`() -> NEIPv6Route
```

<a id="return-value"></a>

## Return Value

A `NEIPv6Route` object containing the default IPv6 route.

<a id="Discussion"></a>

## Discussion

Set this route in the `includedRoutes` array in `NEIPv6Settings` to specify that all IPv6 network traffic be routed to the TUN interface by default.

## See Also

### Creating an IPv6 Route

- [init(destinationAddress:networkPrefixLength:)](init%28destinationaddress_networkprefixlength_%29.md): Initialize the NEIPv6Route

# defaultRoute (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A convenience method for creating the default IPv4 route.

## Declaration

```objectivec
+ (NEIPv6Route * const) defaultRoute;
```

<a id="return-value"></a>

## Return Value

A `NEIPv6Route` object containing the default IPv6 route.

<a id="Discussion"></a>

## Discussion

Set this route in the `includedRoutes` array in `NEIPv6Settings` to specify that all IPv6 network traffic be routed to the TUN interface by default.

## See Also

### Creating an IPv6 Route

- [initWithDestinationAddress:networkPrefixLength:](init%28destinationaddress_networkprefixlength_%29.md): Initialize the NEIPv6Route
