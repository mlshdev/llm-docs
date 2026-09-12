> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnlogsoftmaxgradientnode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnlogsoftmaxgradientnode)

# MPSCNNLogSoftMaxGradientNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of a gradient logarithmic softmax filter kernel.

## Declaration

```swift
class MPSCNNLogSoftMaxGradientNode
```

## Topics

### Initializers

- [init(sourceGradient:sourceImage:gradientState:)](mpscnnlogsoftmaxgradientnode/init%28sourcegradient_sourceimage_gradientstate_%29.md)

## Relationships

### Inherits From

- [MPSNNGradientFilterNode](mpsnngradientfilternode.md)

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
- [MPSCNNLogSoftMaxNode](mpscnnlogsoftmaxnode.md): A representation of a logarithmic softmax filter kernel.
- [MPSCNNSoftMaxGradientNode](mpscnnsoftmaxgradientnode.md): A representation of a gradient softmax filter.

# MPSCNNLogSoftMaxGradientNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of a gradient logarithmic softmax filter kernel.

## Declaration

```objectivec
@interface MPSCNNLogSoftMaxGradientNode : MPSNNGradientFilterNode
```

## Topics

### Instance Methods

- [initWithSourceGradient:sourceImage:gradientState:](mpscnnlogsoftmaxgradientnode/init%28sourcegradient_sourceimage_gradientstate_%29.md)

### Type Methods

- [nodeWithSourceGradient:sourceImage:gradientState:](mpscnnlogsoftmaxgradientnode/nodewithsourcegradient_sourceimage_gradientstate_.md)

## Relationships

### Inherits From

- [MPSNNGradientFilterNode](mpsnngradientfilternode.md)

## See Also

### Softmax Layer Nodes

- [MPSCNNSoftMaxNode](mpscnnsoftmaxnode.md): A representation of a softmax filter.
- [MPSCNNLogSoftMaxNode](mpscnnlogsoftmaxnode.md): A representation of a logarithmic softmax filter kernel.
- [MPSCNNSoftMaxGradientNode](mpscnnsoftmaxgradientnode.md): A representation of a gradient softmax filter.
