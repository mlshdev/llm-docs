> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neipv4route/destinationaddress](https://developer.apple.com/documentation/networkextension/neipv4route/destinationaddress)

# destinationAddress (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The destination network address of the route.

## Declaration

```swift
var destinationAddress: String { get }
```

<a id="Discussion"></a>

## Discussion

This string is combined with `destinationSubnetMask` to specify the destination network of the route.

## See Also

### Accessing IPv4 Route Properties

- [destinationSubnetMask](destinationsubnetmask.md): The destination network mask of the route.
- [gatewayAddress](gatewayaddress.md): The address of the next-hop gateway of the route.

# destinationAddress (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The destination network address of the route.

## Declaration

```objectivec
@property (readonly) NSString * destinationAddress;
```

<a id="Discussion"></a>

## Discussion

This string is combined with `destinationSubnetMask` to specify the destination network of the route.

## See Also

### Accessing IPv4 Route Properties

- [destinationSubnetMask](destinationsubnetmask.md): The destination network mask of the route.
- [gatewayAddress](gatewayaddress.md): The address of the next-hop gateway of the route.
