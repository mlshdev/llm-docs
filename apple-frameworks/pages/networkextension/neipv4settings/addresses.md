> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neipv4settings/addresses](https://developer.apple.com/documentation/networkextension/neipv4settings/addresses)

# addresses (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The IPv4 addresses to assign to the TUN interface.

## Declaration

```swift
var addresses: [String] { get }
```

## See Also

### Accessing IPv4 properties

- [subnetMasks](subnetmasks.md): The IPv4 network masks to assign to the TUN interface.
- [router](router.md): The address of the next-hop gateway router represented as a dotted decimal string.

# addresses (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The IPv4 addresses to assign to the TUN interface.

## Declaration

```objectivec
@property (readonly) NSArray<NSString *> * addresses;
```

## See Also

### Accessing IPv4 properties

- [subnetMasks](subnetmasks.md): The IPv4 network masks to assign to the TUN interface.
- [router](router.md): The address of the next-hop gateway router represented as a dotted decimal string.
