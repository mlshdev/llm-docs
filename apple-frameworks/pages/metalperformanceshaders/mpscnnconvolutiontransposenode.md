> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiontransposenode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiontransposenode)

# MPSCNNConvolutionTransposeNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A representation of a transposed convolution.

## Declaration

```swift
class MPSCNNConvolutionTransposeNode
```

## Topics

### Initializers

- [MPSCNNConvolutionDataSource](mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
- [init(source:convolutionGradientState:weights:)](mpscnnconvolutiontransposenode/init%28source_convolutiongradientstate_weights_%29.md)

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

### Convolution Layer Nodes

- [MPSCNNBinaryConvolutionNode](mpscnnbinaryconvolutionnode.md): A representation of a convolution kernel with binary weights and an input image using binary approximations.
- [MPSCNNConvolutionNode](mpscnnconvolutionnode.md): A representation of a convolution kernel.
- [MPSCNNConvolutionGradientNode](mpscnnconvolutiongradientnode.md): A representation of a gradient convolution kernel.
- [MPSCNNConvolutionGradientStateNode](mpscnnconvolutiongradientstatenode.md): A representation of a gradient convolution state.
- [MPSCNNCrossChannelNormalizationGradientNode](mpscnncrosschannelnormalizationgradientnode.md): A representation of a gradient normalization kernel applied across feature channels.

# MPSCNNConvolutionTransposeNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A representation of a transposed convolution.

## Declaration

```objectivec
@interface MPSCNNConvolutionTransposeNode : MPSCNNConvolutionNode
```

## Topics

### Initializers

- [MPSCNNConvolutionDataSource](mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
- [initWithSource:convolutionGradientState:weights:](mpscnnconvolutiontransposenode/init%28source_convolutiongradientstate_weights_%29.md)

### Type Methods

- [nodeWithSource:convolutionGradientState:weights:](mpscnnconvolutiontransposenode/nodewithsource_convolutiongradientstate_weights_.md)

## Relationships

### Inherits From

- [MPSCNNConvolutionNode](mpscnnconvolutionnode.md)

## See Also

### Convolution Layer Nodes

- [MPSCNNBinaryConvolutionNode](mpscnnbinaryconvolutionnode.md): A representation of a convolution kernel with binary weights and an input image using binary approximations.
- [MPSCNNConvolutionNode](mpscnnconvolutionnode.md): A representation of a convolution kernel.
- [MPSCNNConvolutionGradientNode](mpscnnconvolutiongradientnode.md): A representation of a gradient convolution kernel.
- [MPSCNNConvolutionGradientStateNode](mpscnnconvolutiongradientstatenode.md): A representation of a gradient convolution state.
- [MPSCNNCrossChannelNormalizationGradientNode](mpscnncrosschannelnormalizationgradientnode.md): A representation of a gradient normalization kernel applied across feature channels.
