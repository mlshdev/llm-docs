> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neipv4route/destinationsubnetmask](https://developer.apple.com/documentation/networkextension/neipv4route/destinationsubnetmask)

# destinationSubnetMask (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The destination network mask of the route.

## Declaration

```swift
var destinationSubnetMask: String { get }
```

<a id="Discussion"></a>

## Discussion

This string is combined with `destinationAddress` to specify the destination network of the route.

## See Also

### Accessing IPv4 Route Properties

- [destinationAddress](destinationaddress.md): The destination network address of the route.
- [gatewayAddress](gatewayaddress.md): The address of the next-hop gateway of the route.

# destinationSubnetMask (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The destination network mask of the route.

## Declaration

```objectivec
@property (readonly) NSString * destinationSubnetMask;
```

<a id="Discussion"></a>

## Discussion

This string is combined with `destinationAddress` to specify the destination network of the route.

## See Also

### Accessing IPv4 Route Properties

- [destinationAddress](destinationaddress.md): The destination network address of the route.
- [gatewayAddress](gatewayaddress.md): The address of the next-hop gateway of the route.
