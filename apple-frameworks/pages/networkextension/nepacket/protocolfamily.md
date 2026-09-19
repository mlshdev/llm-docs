> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nepacket/protocolfamily

# protocolFamily (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```swift
var protocolFamily: sa_family_t { get }
```

## See Also

### Accessing packet properties

- [data](data.md)
- [metadata](metadata.md)
- [direction](direction.md): The direction of the packet.
- [NETrafficDirection](../netrafficdirection.md): A type to represent the direction of network traffic.

# protocolFamily (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```objectivec
@property (readonly) sa_family_t protocolFamily;
```

## See Also

### Accessing packet properties

- [data](data.md)
- [metadata](metadata.md)
- [direction](direction.md): The direction of the packet.
- [NETrafficDirection](../netrafficdirection.md): A type to represent the direction of network traffic.
