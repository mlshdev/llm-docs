> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neipv6route/destinationnetworkprefixlength](https://developer.apple.com/documentation/networkextension/neipv6route/destinationnetworkprefixlength)

# destinationNetworkPrefixLength (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The destination network prefix length of the route.

## Declaration

```swift
var destinationNetworkPrefixLength: NSNumber { get }
```

<a id="Discussion"></a>

## Discussion

This string is combined with `destinationAddress` to specify the destination network of the route.

## See Also

### Accessing IPv6 Route Properties

- [destinationAddress](destinationaddress.md): The destination network address of the route.
- [gatewayAddress](gatewayaddress.md): The address of the next-hop gateway of the route.

# destinationNetworkPrefixLength (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The destination network prefix length of the route.

## Declaration

```objectivec
@property (readonly) NSNumber * destinationNetworkPrefixLength;
```

<a id="Discussion"></a>

## Discussion

This string is combined with `destinationAddress` to specify the destination network of the route.

## See Also

### Accessing IPv6 Route Properties

- [destinationAddress](destinationaddress.md): The destination network address of the route.
- [gatewayAddress](gatewayaddress.md): The address of the next-hop gateway of the route.
