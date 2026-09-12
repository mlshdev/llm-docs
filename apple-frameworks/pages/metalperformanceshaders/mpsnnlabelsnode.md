> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnlabelsnode](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnlabelsnode)

# MPSNNLabelsNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A placeholder node denoting the per-element weight buffer used by loss and gradient loss kernels.

## Declaration

```swift
class MPSNNLabelsNode
```

## Relationships

### Inherits From

- [MPSNNStateNode](mpsnnstatenode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Loss Layer Nodes

- [MPSCNNLossNode](mpscnnlossnode.md): A representation of a loss kernel.
- [MPSCNNYOLOLossNode](mpscnnyololossnode.md): A representation of a YOLO loss kernel.

# MPSNNLabelsNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A placeholder node denoting the per-element weight buffer used by loss and gradient loss kernels.

## Declaration

```objectivec
@interface MPSNNLabelsNode : MPSNNStateNode
```

## Relationships

### Inherits From

- [MPSNNStateNode](mpsnnstatenode.md)

## See Also

### Loss Layer Nodes

- [MPSCNNLossNode](mpscnnlossnode.md): A representation of a loss kernel.
- [MPSCNNYOLOLossNode](mpscnnyololossnode.md): A representation of a YOLO loss kernel.
