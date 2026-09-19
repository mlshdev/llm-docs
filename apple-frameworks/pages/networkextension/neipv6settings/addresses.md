> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neipv6settings/addresses

# addresses (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The IPv6 addresses to assign to the TUN interface.

## Declaration

```swift
var addresses: [String] { get }
```

## See Also

### Accessing IPv6 properties

- [networkPrefixLengths](networkprefixlengths.md): The IPv6 network prefix lengths to assign to the TUN interface.

# addresses (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The IPv6 addresses to assign to the TUN interface.

## Declaration

```objectivec
@property (readonly) NSArray<NSString *> * addresses;
```

## See Also

### Accessing IPv6 properties

- [networkPrefixLengths](networkprefixlengths.md): The IPv6 network prefix lengths to assign to the TUN interface.
