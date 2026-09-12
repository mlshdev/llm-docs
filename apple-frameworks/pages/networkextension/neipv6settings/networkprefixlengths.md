> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neipv6settings/networkprefixlengths](https://developer.apple.com/documentation/networkextension/neipv6settings/networkprefixlengths)

# networkPrefixLengths (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The IPv6 network prefix lengths to assign to the TUN interface.

## Declaration

```swift
var networkPrefixLengths: [NSNumber] { get }
```

<a id="Discussion"></a>

## Discussion

Each network prefix length in this array is combined with the IP address in the corresponding index in `addresses` to specify an IPv6 network that the TUN interface is (virtually) connected to.

## See Also

### Accessing IPv6 properties

- [addresses](addresses.md): The IPv6 addresses to assign to the TUN interface.

# networkPrefixLengths (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The IPv6 network prefix lengths to assign to the TUN interface.

## Declaration

```objectivec
@property (readonly) NSArray<NSNumber *> * networkPrefixLengths;
```

<a id="Discussion"></a>

## Discussion

Each network prefix length in this array is combined with the IP address in the corresponding index in `addresses` to specify an IPv6 network that the TUN interface is (virtually) connected to.

## See Also

### Accessing IPv6 properties

- [addresses](addresses.md): The IPv6 addresses to assign to the TUN interface.
