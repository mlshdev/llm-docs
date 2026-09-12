> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nepacket/metadata](https://developer.apple.com/documentation/networkextension/nepacket/metadata)

# metadata (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

## Declaration

```swift
var metadata: NEFlowMetaData? { get }
```

## See Also

### Accessing packet properties

- [data](data.md)
- [protocolFamily](protocolfamily.md)
- [direction](direction.md): The direction of the packet.
- [NETrafficDirection](../netrafficdirection.md): A type to represent the direction of network traffic.

# metadata (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

## Declaration

```objectivec
@property (readonly, nullable) NEFlowMetaData * metadata;
```

## See Also

### Accessing packet properties

- [data](data.md)
- [protocolFamily](protocolfamily.md)
- [direction](direction.md): The direction of the packet.
- [NETrafficDirection](../netrafficdirection.md): A type to represent the direction of network traffic.
