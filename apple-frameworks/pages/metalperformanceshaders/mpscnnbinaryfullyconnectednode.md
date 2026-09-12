> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnbinaryfullyconnectednode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnbinaryfullyconnectednode)

# MPSCNNBinaryFullyConnectedNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A representation of a fully connected convolution layer with binary weights and optionally binarized input image.

## Declaration

```swift
class MPSCNNBinaryFullyConnectedNode
```

## Topics

### Initializers

- [init(source:weights:scaleValue:type:flags:)](mpscnnbinaryfullyconnectednode/init%28source_weights_scalevalue_type_flags_%29.md)
- [MPSCNNConvolutionDataSource](mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
- [init(source:weights:outputBiasTerms:outputScaleTerms:inputBiasTerms:inputScaleTerms:type:flags:)](mpscnnbinaryfullyconnectednode/init%28source_weights_outputbiasterms_outputscaleterms_inputbiasterms_inputscaleterms_type_flags_%29.md)

## Relationships

### Inherits From

- [MPSCNNBinaryConvolutionNode](mpscnnbinaryconvolutionnode.md)

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

- [MPSCNNFullyConnectedNode](mpscnnfullyconnectednode.md): A representation of a fully connected convolution layer, also known as an inner product layer.

# MPSCNNBinaryFullyConnectedNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A representation of a fully connected convolution layer with binary weights and optionally binarized input image.

## Declaration

```objectivec
@interface MPSCNNBinaryFullyConnectedNode : MPSCNNBinaryConvolutionNode
```

## Topics

### Initializers

- [initWithSource:weights:scaleValue:type:flags:](mpscnnbinaryfullyconnectednode/init%28source_weights_scalevalue_type_flags_%29.md)
- [MPSCNNConvolutionDataSource](mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
- [initWithSource:weights:outputBiasTerms:outputScaleTerms:inputBiasTerms:inputScaleTerms:type:flags:](mpscnnbinaryfullyconnectednode/init%28source_weights_outputbiasterms_outputscaleterms_inputbiasterms_inputscaleterms_type_flags_%29.md)

### Type Methods

- [nodeWithSource:weights:scaleValue:type:flags:](mpscnnbinaryfullyconnectednode/nodewithsource_weights_scalevalue_type_flags_.md)
- [nodeWithSource:weights:outputBiasTerms:outputScaleTerms:inputBiasTerms:inputScaleTerms:type:flags:](mpscnnbinaryfullyconnectednode/nodewithsource_weights_outputbiasterms_outputscaleterms_inputbiasterms_inputscaleterms_type_flags_.md)

## Relationships

### Inherits From

- [MPSCNNBinaryConvolutionNode](mpscnnbinaryconvolutionnode.md)

## See Also

### Fully Connected Layer Nodes

- [MPSCNNFullyConnectedNode](mpscnnfullyconnectednode.md): A representation of a fully connected convolution layer, also known as an inner product layer.
