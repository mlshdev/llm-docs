> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnsoftmaxnode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnsoftmaxnode)

# MPSCNNSoftMaxNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A representation of a softmax filter.

## Declaration

```swift
class MPSCNNSoftMaxNode
```

## Topics

### Initializers

- [init(source:)](mpscnnsoftmaxnode/init%28source_%29.md)

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

### Softmax Layer Nodes

- [MPSCNNLogSoftMaxNode](mpscnnlogsoftmaxnode.md): A representation of a logarithmic softmax filter kernel.
- [MPSCNNLogSoftMaxGradientNode](mpscnnlogsoftmaxgradientnode.md): A representation of a gradient logarithmic softmax filter kernel.
- [MPSCNNSoftMaxGradientNode](mpscnnsoftmaxgradientnode.md): A representation of a gradient softmax filter.

# MPSCNNSoftMaxNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A representation of a softmax filter.

## Declaration

```objectivec
@interface MPSCNNSoftMaxNode : MPSNNFilterNode
```

## Topics

### Initializers

- [initWithSource:](mpscnnsoftmaxnode/init%28source_%29.md)

### Type Methods

- [nodeWithSource:](mpscnnsoftmaxnode/nodewithsource_.md)

## Relationships

### Inherits From

- [MPSNNFilterNode](mpsnnfilternode.md)

## See Also

### Softmax Layer Nodes

- [MPSCNNLogSoftMaxNode](mpscnnlogsoftmaxnode.md): A representation of a logarithmic softmax filter kernel.
- [MPSCNNLogSoftMaxGradientNode](mpscnnlogsoftmaxgradientnode.md): A representation of a gradient logarithmic softmax filter kernel.
- [MPSCNNSoftMaxGradientNode](mpscnnsoftmaxgradientnode.md): A representation of a gradient softmax filter.
