> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnlossnode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnlossnode)

# MPSCNNLossNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of a loss kernel.

## Declaration

```swift
class MPSCNNLossNode
```

## Topics

### Initializers

- [init(source:lossDescriptor:)](mpscnnlossnode/init%28source_lossdescriptor_%29.md)

### Instance Properties

- [inputLabels](mpscnnlossnode/inputlabels.md)

## Relationships

### Inherits From

- [MPSNNFilterNode](mpsnnfilternode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Loss Layer Nodes

- [MPSCNNYOLOLossNode](mpscnnyololossnode.md): A representation of a YOLO loss kernel.
- [MPSNNLabelsNode](mpsnnlabelsnode.md): A placeholder node denoting the per-element weight buffer used by loss and gradient loss kernels.

# MPSCNNLossNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of a loss kernel.

## Declaration

```objectivec
@interface MPSCNNLossNode : MPSNNFilterNode
```

## Topics

### Instance Properties

- [inputLabels](mpscnnlossnode/inputlabels.md)

### Instance Methods

- [initWithSource:lossDescriptor:](mpscnnlossnode/init%28source_lossdescriptor_%29.md)

### Type Methods

- [nodeWithSource:lossDescriptor:](mpscnnlossnode/nodewithsource_lossdescriptor_.md)

## Relationships

### Inherits From

- [MPSNNFilterNode](mpsnnfilternode.md)

## See Also

### Loss Layer Nodes

- [MPSCNNYOLOLossNode](mpscnnyololossnode.md): A representation of a YOLO loss kernel.
- [MPSNNLabelsNode](mpsnnlabelsnode.md): A placeholder node denoting the per-element weight buffer used by loss and gradient loss kernels.
