> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neipv4route/gatewayaddress](https://developer.apple.com/documentation/networkextension/neipv4route/gatewayaddress)

# gatewayAddress (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The address of the next-hop gateway of the route.

## Declaration

```swift
var gatewayAddress: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is nil. When this property is nil, the route’s next-hop gateway will be set to the TUN interface unless it is a Split Exclude route.

## See Also

### Accessing IPv4 Route Properties

- [destinationAddress](destinationaddress.md): The destination network address of the route.
- [destinationSubnetMask](destinationsubnetmask.md): The destination network mask of the route.

# gatewayAddress (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The address of the next-hop gateway of the route.

## Declaration

```objectivec
@property (copy, nullable) NSString * gatewayAddress;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is nil. When this property is nil, the route’s next-hop gateway will be set to the TUN interface unless it is a Split Exclude route.

## See Also

### Accessing IPv4 Route Properties

- [destinationAddress](destinationaddress.md): The destination network address of the route.
- [destinationSubnetMask](destinationsubnetmask.md): The destination network mask of the route.
