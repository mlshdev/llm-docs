> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avrouting/avcustomroutingpartialip/mask

# mask (Swift)

**Framework:** AVRouting  
**Kind:** Instance Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · visionOS 1.0+

A mask that represents how many octets of the IP address to respect.

## Declaration

```swift
var mask: Data { get }
```

## See Also

### Inspecting the IP fragment

- [address](address.md): A full or partial IP address for a device known to be on the network.

# mask (Objective-C)

**Framework:** AVRouting  
**Kind:** Instance Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · visionOS 1.0+

A mask that represents how many octets of the IP address to respect.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * mask;
```

## See Also

### Inspecting the IP fragment

- [address](address.md): A full or partial IP address for a device known to be on the network.
