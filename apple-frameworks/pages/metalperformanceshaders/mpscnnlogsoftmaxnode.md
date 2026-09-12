> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnlogsoftmaxnode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnlogsoftmaxnode)

# MPSCNNLogSoftMaxNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A representation of a logarithmic softmax filter kernel.

## Declaration

```swift
class MPSCNNLogSoftMaxNode
```

## Topics

### Initializers

- [init(source:)](mpscnnlogsoftmaxnode/init%28source_%29.md)

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

- [MPSCNNSoftMaxNode](mpscnnsoftmaxnode.md): A representation of a softmax filter.
- [MPSCNNLogSoftMaxGradientNode](mpscnnlogsoftmaxgradientnode.md): A representation of a gradient logarithmic softmax filter kernel.
- [MPSCNNSoftMaxGradientNode](mpscnnsoftmaxgradientnode.md): A representation of a gradient softmax filter.

# MPSCNNLogSoftMaxNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A representation of a logarithmic softmax filter kernel.

## Declaration

```objectivec
@interface MPSCNNLogSoftMaxNode : MPSNNFilterNode
```

## Topics

### Initializers

- [initWithSource:](mpscnnlogsoftmaxnode/init%28source_%29.md)

### Type Methods

- [nodeWithSource:](mpscnnlogsoftmaxnode/nodewithsource_.md)

## Relationships

### Inherits From

- [MPSNNFilterNode](mpsnnfilternode.md)

## See Also

### Softmax Layer Nodes

- [MPSCNNSoftMaxNode](mpscnnsoftmaxnode.md): A representation of a softmax filter.
- [MPSCNNLogSoftMaxGradientNode](mpscnnlogsoftmaxgradientnode.md): A representation of a gradient logarithmic softmax filter kernel.
- [MPSCNNSoftMaxGradientNode](mpscnnsoftmaxgradientnode.md): A representation of a gradient softmax filter.
