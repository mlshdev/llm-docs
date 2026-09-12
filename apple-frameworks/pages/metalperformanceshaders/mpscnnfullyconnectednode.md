> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnfullyconnectednode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnfullyconnectednode)

# MPSCNNFullyConnectedNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A representation of a fully connected convolution layer, also known as an inner product layer.

## Declaration

```swift
class MPSCNNFullyConnectedNode
```

## Topics

### Initializers

- [init(source:weights:)](mpscnnfullyconnectednode/init%28source_weights_%29.md)

## Relationships

### Inherits From

- [MPSCNNConvolutionNode](mpscnnconvolutionnode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MPSNNTrainableNode](mpsnntrainablenode.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Fully Connected Layer Nodes

- [MPSCNNBinaryFullyConnectedNode](mpscnnbinaryfullyconnectednode.md): A representation of a fully connected convolution layer with binary weights and optionally binarized input image.

# MPSCNNFullyConnectedNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A representation of a fully connected convolution layer, also known as an inner product layer.

## Declaration

```objectivec
@interface MPSCNNFullyConnectedNode : MPSCNNConvolutionNode
```

## Topics

### Initializers

- [initWithSource:weights:](mpscnnfullyconnectednode/init%28source_weights_%29.md)

### Type Methods

- [nodeWithSource:weights:](mpscnnfullyconnectednode/nodewithsource_weights_.md)

## Relationships

### Inherits From

- [MPSCNNConvolutionNode](mpscnnconvolutionnode.md)

## See Also

### Fully Connected Layer Nodes

- [MPSCNNBinaryFullyConnectedNode](mpscnnbinaryfullyconnectednode.md): A representation of a fully connected convolution layer with binary weights and optionally binarized input image.
