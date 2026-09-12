> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avrouting/avcustomroutingpartialip/address](https://developer.apple.com/documentation/avrouting/avcustomroutingpartialip/address)

# address (Swift)

**Framework:** AVRouting  
**Kind:** Instance Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · visionOS 1.0+

A full or partial IP address for a device known to be on the network.

## Declaration

```swift
var address: Data { get }
```

## See Also

### Inspecting the IP fragment

- [mask](mask.md): A mask that represents how many octets of the IP address to respect.

# address (Objective-C)

**Framework:** AVRouting  
**Kind:** Instance Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · visionOS 1.0+

A full or partial IP address for a device known to be on the network.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * address;
```

## See Also

### Inspecting the IP fragment

- [mask](mask.md): A mask that represents how many octets of the IP address to respect.
