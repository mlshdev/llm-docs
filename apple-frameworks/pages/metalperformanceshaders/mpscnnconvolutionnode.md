> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutionnode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutionnode)

# MPSCNNConvolutionNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A representation of a convolution kernel.

## Declaration

```swift
class MPSCNNConvolutionNode
```

## Topics

### Initializers

- [init(source:weights:)](mpscnnconvolutionnode/init%28source_weights_%29.md)
- [MPSCNNConvolutionDataSource](mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.

### Instance Properties

- [accumulatorPrecision](mpscnnconvolutionnode/accumulatorprecision.md)
- [convolutionGradientState](mpscnnconvolutionnode/convolutiongradientstate.md)
- [trainingStyle](mpscnnconvolutionnode/trainingstyle.md)

## Relationships

### Inherits From

- [MPSNNFilterNode](mpsnnfilternode.md)

### Inherited By

- [MPSCNNBinaryConvolutionNode](mpscnnbinaryconvolutionnode.md)
- [MPSCNNConvolutionTransposeNode](mpscnnconvolutiontransposenode.md)
- [MPSCNNFullyConnectedNode](mpscnnfullyconnectednode.md)

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

- [MPSCNNBinaryConvolutionNode](mpscnnbinaryconvolutionnode.md): A representation of a convolution kernel with binary weights and an input image using binary approximations.
- [MPSCNNConvolutionTransposeNode](mpscnnconvolutiontransposenode.md): A representation of a transposed convolution.
- [MPSCNNConvolutionGradientNode](mpscnnconvolutiongradientnode.md): A representation of a gradient convolution kernel.
- [MPSCNNConvolutionGradientStateNode](mpscnnconvolutiongradientstatenode.md): A representation of a gradient convolution state.
- [MPSCNNCrossChannelNormalizationGradientNode](mpscnncrosschannelnormalizationgradientnode.md): A representation of a gradient normalization kernel applied across feature channels.

# MPSCNNConvolutionNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A representation of a convolution kernel.

## Declaration

```objectivec
@interface MPSCNNConvolutionNode : MPSNNFilterNode
```

## Topics

### Initializers

- [initWithSource:weights:](mpscnnconvolutionnode/init%28source_weights_%29.md)
- [MPSCNNConvolutionDataSource](mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.

### Type Methods

- [nodeWithSource:weights:](mpscnnconvolutionnode/nodewithsource_weights_.md)

### Instance Properties

- [accumulatorPrecision](mpscnnconvolutionnode/accumulatorprecision.md)
- [convolutionGradientState](mpscnnconvolutionnode/convolutiongradientstate.md)
- [trainingStyle](mpscnnconvolutionnode/trainingstyle.md)

## Relationships

### Inherits From

- [MPSNNFilterNode](mpsnnfilternode.md)

### Inherited By

- [MPSCNNBinaryConvolutionNode](mpscnnbinaryconvolutionnode.md)
- [MPSCNNConvolutionTransposeNode](mpscnnconvolutiontransposenode.md)
- [MPSCNNFullyConnectedNode](mpscnnfullyconnectednode.md)

### Conforms To

- [MPSNNTrainableNode](mpsnntrainablenode.md)

## See Also

### Convolution Layer Nodes

- [MPSCNNBinaryConvolutionNode](mpscnnbinaryconvolutionnode.md): A representation of a convolution kernel with binary weights and an input image using binary approximations.
- [MPSCNNConvolutionTransposeNode](mpscnnconvolutiontransposenode.md): A representation of a transposed convolution.
- [MPSCNNConvolutionGradientNode](mpscnnconvolutiongradientnode.md): A representation of a gradient convolution kernel.
- [MPSCNNConvolutionGradientStateNode](mpscnnconvolutiongradientstatenode.md): A representation of a gradient convolution state.
- [MPSCNNCrossChannelNormalizationGradientNode](mpscnncrosschannelnormalizationgradientnode.md): A representation of a gradient normalization kernel applied across feature channels.
