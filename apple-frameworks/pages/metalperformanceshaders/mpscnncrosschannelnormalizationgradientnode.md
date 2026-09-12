> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnncrosschannelnormalizationgradientnode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnncrosschannelnormalizationgradientnode)

# MPSCNNCrossChannelNormalizationGradientNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of a gradient normalization kernel applied across feature channels.

## Declaration

```swift
class MPSCNNCrossChannelNormalizationGradientNode
```

## Topics

### Initializers

- [init(sourceGradient:sourceImage:gradientState:kernelSize:)](mpscnncrosschannelnormalizationgradientnode/init%28sourcegradient_sourceimage_gradientstate_kernelsize_%29.md)

### Instance Properties

- [kernelSize](mpscnncrosschannelnormalizationgradientnode/kernelsize.md)

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

### Convolution Layer Nodes

- [MPSCNNBinaryConvolutionNode](mpscnnbinaryconvolutionnode.md): A representation of a convolution kernel with binary weights and an input image using binary approximations.
- [MPSCNNConvolutionNode](mpscnnconvolutionnode.md): A representation of a convolution kernel.
- [MPSCNNConvolutionTransposeNode](mpscnnconvolutiontransposenode.md): A representation of a transposed convolution.
- [MPSCNNConvolutionGradientNode](mpscnnconvolutiongradientnode.md): A representation of a gradient convolution kernel.
- [MPSCNNConvolutionGradientStateNode](mpscnnconvolutiongradientstatenode.md): A representation of a gradient convolution state.

# MPSCNNCrossChannelNormalizationGradientNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of a gradient normalization kernel applied across feature channels.

## Declaration

```objectivec
@interface MPSCNNCrossChannelNormalizationGradientNode : MPSNNGradientFilterNode
```

## Topics

### Instance Properties

- [kernelSize](mpscnncrosschannelnormalizationgradientnode/kernelsize.md)

### Instance Methods

- [initWithSourceGradient:sourceImage:gradientState:kernelSize:](mpscnncrosschannelnormalizationgradientnode/init%28sourcegradient_sourceimage_gradientstate_kernelsize_%29.md)

### Type Methods

- [nodeWithSourceGradient:sourceImage:gradientState:kernelSize:](mpscnncrosschannelnormalizationgradientnode/nodewithsourcegradient_sourceimage_gradientstate_kernelsize_.md)

## Relationships

### Inherits From

- [MPSNNGradientFilterNode](mpsnngradientfilternode.md)

## See Also

### Convolution Layer Nodes

- [MPSCNNBinaryConvolutionNode](mpscnnbinaryconvolutionnode.md): A representation of a convolution kernel with binary weights and an input image using binary approximations.
- [MPSCNNConvolutionNode](mpscnnconvolutionnode.md): A representation of a convolution kernel.
- [MPSCNNConvolutionTransposeNode](mpscnnconvolutiontransposenode.md): A representation of a transposed convolution.
- [MPSCNNConvolutionGradientNode](mpscnnconvolutiongradientnode.md): A representation of a gradient convolution kernel.
- [MPSCNNConvolutionGradientStateNode](mpscnnconvolutiongradientstatenode.md): A representation of a gradient convolution state.
