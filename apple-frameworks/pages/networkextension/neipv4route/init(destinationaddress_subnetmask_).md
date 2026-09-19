> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neipv4route/init(destinationaddress:subnetmask:)

# init(destinationAddress:subnetMask:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Initialize the [NEIPv4Route](../neipv4route.md) object.

## Declaration

```swift
init(destinationAddress address: String, subnetMask: String)
```

## Parameters

- `address`: An IPv4 address string. This string is combined with `subnetMask` to specify the destination network of the route.
- `subnetMask`: An IPv4 network mask string. This string is combined with `address` to specify the destination network of the route.

## See Also

### Creating an IPv4 Route

- [default()](default%28%29.md): A convenience method for creating the default IPv4 route.

# initWithDestinationAddress:subnetMask: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Initialize the [NEIPv4Route](../neipv4route.md) object.

## Declaration

```objectivec
- (instancetype) initWithDestinationAddress:(NSString *) address subnetMask:(NSString *) subnetMask;
```

## Parameters

- `address`: An IPv4 address string. This string is combined with `subnetMask` to specify the destination network of the route.
- `subnetMask`: An IPv4 network mask string. This string is combined with `address` to specify the destination network of the route.

## See Also

### Creating an IPv4 Route

- [defaultRoute](default%28%29.md): A convenience method for creating the default IPv4 route.
