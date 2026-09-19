> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neipv4settings/subnetmasks

# subnetMasks (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The IPv4 network masks to assign to the TUN interface.

## Declaration

```swift
var subnetMasks: [String] { get }
```

<a id="Discussion"></a>

## Discussion

Each mask in this array is combined with the IP address in the corresponding index in `addresses` to specify an IPv4 network that the TUN interface is (virtually) connected to.

## See Also

### Accessing IPv4 properties

- [addresses](addresses.md): The IPv4 addresses to assign to the TUN interface.
- [router](router.md): The address of the next-hop gateway router represented as a dotted decimal string.

# subnetMasks (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The IPv4 network masks to assign to the TUN interface.

## Declaration

```objectivec
@property (readonly) NSArray<NSString *> * subnetMasks;
```

<a id="Discussion"></a>

## Discussion

Each mask in this array is combined with the IP address in the corresponding index in `addresses` to specify an IPv4 network that the TUN interface is (virtually) connected to.

## See Also

### Accessing IPv4 properties

- [addresses](addresses.md): The IPv4 addresses to assign to the TUN interface.
- [router](router.md): The address of the next-hop gateway router represented as a dotted decimal string.
