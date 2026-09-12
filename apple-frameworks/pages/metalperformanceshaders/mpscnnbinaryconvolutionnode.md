> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnbinaryconvolutionnode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnbinaryconvolutionnode)

# MPSCNNBinaryConvolutionNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A representation of a convolution kernel with binary weights and an input image using binary approximations.

## Declaration

```swift
class MPSCNNBinaryConvolutionNode
```

## Topics

### Initializers

- [init(source:weights:scaleValue:type:flags:)](mpscnnbinaryconvolutionnode/init%28source_weights_scalevalue_type_flags_%29.md)
- [MPSCNNConvolutionDataSource](mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
- [MPSCNNBinaryConvolutionType](mpscnnbinaryconvolutiontype.md): Options that defines what operations are used to perform binary convolution.
- [MPSCNNBinaryConvolutionFlags](mpscnnbinaryconvolutionflags.md): Options used to control binary convolution kernels.
- [init(source:weights:outputBiasTerms:outputScaleTerms:inputBiasTerms:inputScaleTerms:type:flags:)](mpscnnbinaryconvolutionnode/init%28source_weights_outputbiasterms_outputscaleterms_inputbiasterms_inputscaleterms_type_flags_%29.md)

## Relationships

### Inherits From

- [MPSCNNConvolutionNode](mpscnnconvolutionnode.md)

### Inherited By

- [MPSCNNBinaryFullyConnectedNode](mpscnnbinaryfullyconnectednode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MPSNNTrainableNode](mpsnntrainablenode.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Convolution Layer Nodes

- [MPSCNNConvolutionNode](mpscnnconvolutionnode.md): A representation of a convolution kernel.
- [MPSCNNConvolutionTransposeNode](mpscnnconvolutiontransposenode.md): A representation of a transposed convolution.
- [MPSCNNConvolutionGradientNode](mpscnnconvolutiongradientnode.md): A representation of a gradient convolution kernel.
- [MPSCNNConvolutionGradientStateNode](mpscnnconvolutiongradientstatenode.md): A representation of a gradient convolution state.
- [MPSCNNCrossChannelNormalizationGradientNode](mpscnncrosschannelnormalizationgradientnode.md): A representation of a gradient normalization kernel applied across feature channels.

# MPSCNNBinaryConvolutionNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A representation of a convolution kernel with binary weights and an input image using binary approximations.

## Declaration

```objectivec
@interface MPSCNNBinaryConvolutionNode : MPSCNNConvolutionNode
```

## Topics

### Initializers

- [initWithSource:weights:scaleValue:type:flags:](mpscnnbinaryconvolutionnode/init%28source_weights_scalevalue_type_flags_%29.md)
- [MPSCNNConvolutionDataSource](mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
- [MPSCNNBinaryConvolutionType](mpscnnbinaryconvolutiontype.md): Options that defines what operations are used to perform binary convolution.
- [MPSCNNBinaryConvolutionFlags](mpscnnbinaryconvolutionflags.md): Options used to control binary convolution kernels.
- [initWithSource:weights:outputBiasTerms:outputScaleTerms:inputBiasTerms:inputScaleTerms:type:flags:](mpscnnbinaryconvolutionnode/init%28source_weights_outputbiasterms_outputscaleterms_inputbiasterms_inputscaleterms_type_flags_%29.md)

### Type Methods

- [nodeWithSource:weights:scaleValue:type:flags:](mpscnnbinaryconvolutionnode/nodewithsource_weights_scalevalue_type_flags_.md)
- [nodeWithSource:weights:outputBiasTerms:outputScaleTerms:inputBiasTerms:inputScaleTerms:type:flags:](mpscnnbinaryconvolutionnode/nodewithsource_weights_outputbiasterms_outputscaleterms_inputbiasterms_inputscaleterms_type_flags_.md)

## Relationships

### Inherits From

- [MPSCNNConvolutionNode](mpscnnconvolutionnode.md)

### Inherited By

- [MPSCNNBinaryFullyConnectedNode](mpscnnbinaryfullyconnectednode.md)

## See Also

### Convolution Layer Nodes

- [MPSCNNConvolutionNode](mpscnnconvolutionnode.md): A representation of a convolution kernel.
- [MPSCNNConvolutionTransposeNode](mpscnnconvolutiontransposenode.md): A representation of a transposed convolution.
- [MPSCNNConvolutionGradientNode](mpscnnconvolutiongradientnode.md): A representation of a gradient convolution kernel.
- [MPSCNNConvolutionGradientStateNode](mpscnnconvolutiongradientstatenode.md): A representation of a gradient convolution state.
- [MPSCNNCrossChannelNormalizationGradientNode](mpscnncrosschannelnormalizationgradientnode.md): A representation of a gradient normalization kernel applied across feature channels.
