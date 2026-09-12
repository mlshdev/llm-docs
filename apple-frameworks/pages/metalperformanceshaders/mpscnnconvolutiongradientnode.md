> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiongradientnode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiongradientnode)

# MPSCNNConvolutionGradientNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of a gradient convolution kernel.

## Declaration

```swift
class MPSCNNConvolutionGradientNode
```

## Topics

### Initializers

- [init(sourceGradient:sourceImage:convolutionGradientState:weights:)](mpscnnconvolutiongradientnode/init%28sourcegradient_sourceimage_convolutiongradientstate_weights_%29.md)

## Relationships

### Inherits From

- [MPSNNGradientFilterNode](mpsnngradientfilternode.md)

### Inherited By

- [MPSCNNConvolutionTransposeGradientNode](mpscnnconvolutiontransposegradientnode.md)
- [MPSCNNFullyConnectedGradientNode](mpscnnfullyconnectedgradientnode.md)

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
- [MPSCNNConvolutionTransposeNode](mpscnnconvolutiontransposenode.md): A representation of a transposed convolution.
- [MPSCNNConvolutionGradientStateNode](mpscnnconvolutiongradientstatenode.md): A representation of a gradient convolution state.
- [MPSCNNCrossChannelNormalizationGradientNode](mpscnncrosschannelnormalizationgradientnode.md): A representation of a gradient normalization kernel applied across feature channels.

# MPSCNNConvolutionGradientNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of a gradient convolution kernel.

## Declaration

```objectivec
@interface MPSCNNConvolutionGradientNode : MPSNNGradientFilterNode
```

## Topics

### Instance Methods

- [initWithSourceGradient:sourceImage:convolutionGradientState:weights:](mpscnnconvolutiongradientnode/init%28sourcegradient_sourceimage_convolutiongradientstate_weights_%29.md)

### Type Methods

- [nodeWithSourceGradient:sourceImage:convolutionGradientState:weights:](mpscnnconvolutiongradientnode/nodewithsourcegradient_sourceimage_convolutiongradientstate_weights_.md)

## Relationships

### Inherits From

- [MPSNNGradientFilterNode](mpsnngradientfilternode.md)

### Inherited By

- [MPSCNNConvolutionTransposeGradientNode](mpscnnconvolutiontransposegradientnode.md)
- [MPSCNNFullyConnectedGradientNode](mpscnnfullyconnectedgradientnode.md)

### Conforms To

- [MPSNNTrainableNode](mpsnntrainablenode.md)

## See Also

### Convolution Layer Nodes

- [MPSCNNBinaryConvolutionNode](mpscnnbinaryconvolutionnode.md): A representation of a convolution kernel with binary weights and an input image using binary approximations.
- [MPSCNNConvolutionNode](mpscnnconvolutionnode.md): A representation of a convolution kernel.
- [MPSCNNConvolutionTransposeNode](mpscnnconvolutiontransposenode.md): A representation of a transposed convolution.
- [MPSCNNConvolutionGradientStateNode](mpscnnconvolutiongradientstatenode.md): A representation of a gradient convolution state.
- [MPSCNNCrossChannelNormalizationGradientNode](mpscnncrosschannelnormalizationgradientnode.md): A representation of a gradient normalization kernel applied across feature channels.
