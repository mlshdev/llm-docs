> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnngradientkernel](https://developer.apple.com/documentation/metalperformanceshaders/mpscnngradientkernel)

# MPSCNNGradientKernel (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

The base class for gradient layers.

## Declaration

```swift
class MPSCNNGradientKernel
```

## Topics

### Initializers

- [init(coder:device:)](mpscnngradientkernel/init%28coder_device_%29.md)
- [init(device:)](mpscnngradientkernel/init%28device_%29.md)

### Instance Properties

- [kernelOffsetX](mpscnngradientkernel/kerneloffsetx.md)
- [kernelOffsetY](mpscnngradientkernel/kerneloffsety.md)

### Instance Methods

- [encode(commandBuffer:sourceGradient:sourceImage:gradientState:)](mpscnngradientkernel/encode%28commandbuffer_sourcegradient_sourceimage_gradientstate_%29.md)
- [encode(commandBuffer:sourceGradient:sourceImage:gradientState:destinationGradient:)](mpscnngradientkernel/encode%28commandbuffer_sourcegradient_sourceimage_gradientstate_destinationgradient_%29.md)
- [encodeBatch(commandBuffer:sourceGradients:sourceImages:gradientStates:)](mpscnngradientkernel/encodebatch%28commandbuffer_sourcegradients_sourceimages_gradientstates_%29.md)
- [encodeBatch(commandBuffer:sourceGradients:sourceImages:gradientStates:destinationGradients:)](mpscnngradientkernel/encodebatch%28commandbuffer_sourcegradients_sourceimages_gradientstates_destinationgradients_%29.md)

## Relationships

### Inherits From

- [MPSCNNBinaryKernel](mpscnnbinarykernel.md)

### Inherited By

- [MPSCNNArithmeticGradient](mpscnnarithmeticgradient.md)
- [MPSCNNBatchNormalizationGradient](mpscnnbatchnormalizationgradient.md)
- [MPSCNNBatchNormalizationStatisticsGradient](mpscnnbatchnormalizationstatisticsgradient.md)
- [MPSCNNConvolutionGradient](mpscnnconvolutiongradient.md)
- [MPSCNNConvolutionTransposeGradient](mpscnnconvolutiontransposegradient.md)
- [MPSCNNCrossChannelNormalizationGradient](mpscnncrosschannelnormalizationgradient.md)
- [MPSCNNDropoutGradient](mpscnndropoutgradient.md)
- [MPSCNNGroupNormalizationGradient](mpscnngroupnormalizationgradient.md)
- [MPSCNNInstanceNormalizationGradient](mpscnninstancenormalizationgradient.md)
- [MPSCNNLocalContrastNormalizationGradient](mpscnnlocalcontrastnormalizationgradient.md)
- [MPSCNNLogSoftMaxGradient](mpscnnlogsoftmaxgradient.md)
- [MPSCNNNeuronGradient](mpscnnneurongradient.md)
- [MPSCNNPoolingGradient](mpscnnpoolinggradient.md)
- [MPSCNNSoftMaxGradient](mpscnnsoftmaxgradient.md)
- [MPSCNNSpatialNormalizationGradient](mpscnnspatialnormalizationgradient.md)
- [MPSCNNUpsamplingGradient](mpscnnupsamplinggradient.md)
- [MPSNNGramMatrixCalculationGradient](mpsnngrammatrixcalculationgradient.md)
- [MPSNNPadGradient](mpsnnpadgradient.md)
- [MPSNNReshapeGradient](mpsnnreshapegradient.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Layer Base Classes

- [MPSCNNKernel](mpscnnkernel.md): Base class for neural network layers.
- [MPSCNNBinaryKernel](mpscnnbinarykernel.md): A convolution neural network kernel.

# MPSCNNGradientKernel (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

The base class for gradient layers.

## Declaration

```objectivec
@interface MPSCNNGradientKernel : MPSCNNBinaryKernel
```

## Topics

### Instance Properties

- [kernelOffsetX](mpscnngradientkernel/kerneloffsetx.md)
- [kernelOffsetY](mpscnngradientkernel/kerneloffsety.md)

### Instance Methods

- [encodeToCommandBuffer:sourceGradient:sourceImage:gradientState:](mpscnngradientkernel/encode%28commandbuffer_sourcegradient_sourceimage_gradientstate_%29.md)
- [encodeToCommandBuffer:sourceGradient:sourceImage:gradientState:destinationGradient:](mpscnngradientkernel/encode%28commandbuffer_sourcegradient_sourceimage_gradientstate_destinationgradient_%29.md)
- [encodeBatchToCommandBuffer:sourceGradients:sourceImages:gradientStates:](mpscnngradientkernel/encodebatch%28commandbuffer_sourcegradients_sourceimages_gradientstates_%29.md)
- [encodeBatchToCommandBuffer:sourceGradients:sourceImages:gradientStates:destinationGradients:](mpscnngradientkernel/encodebatch%28commandbuffer_sourcegradients_sourceimages_gradientstates_destinationgradients_%29.md)
- [initWithCoder:device:](mpscnngradientkernel/init%28coder_device_%29.md)
- [initWithDevice:](mpscnngradientkernel/init%28device_%29.md)

## Relationships

### Inherits From

- [MPSCNNBinaryKernel](mpscnnbinarykernel.md)

### Inherited By

- [MPSCNNArithmeticGradient](mpscnnarithmeticgradient.md)
- [MPSCNNBatchNormalizationGradient](mpscnnbatchnormalizationgradient.md)
- [MPSCNNBatchNormalizationStatisticsGradient](mpscnnbatchnormalizationstatisticsgradient.md)
- [MPSCNNConvolutionGradient](mpscnnconvolutiongradient.md)
- [MPSCNNConvolutionTransposeGradient](mpscnnconvolutiontransposegradient.md)
- [MPSCNNCrossChannelNormalizationGradient](mpscnncrosschannelnormalizationgradient.md)
- [MPSCNNDropoutGradient](mpscnndropoutgradient.md)
- [MPSCNNGroupNormalizationGradient](mpscnngroupnormalizationgradient.md)
- [MPSCNNInstanceNormalizationGradient](mpscnninstancenormalizationgradient.md)
- [MPSCNNLocalContrastNormalizationGradient](mpscnnlocalcontrastnormalizationgradient.md)
- [MPSCNNLogSoftMaxGradient](mpscnnlogsoftmaxgradient.md)
- [MPSCNNNeuronGradient](mpscnnneurongradient.md)
- [MPSCNNPoolingGradient](mpscnnpoolinggradient.md)
- [MPSCNNSoftMaxGradient](mpscnnsoftmaxgradient.md)
- [MPSCNNSpatialNormalizationGradient](mpscnnspatialnormalizationgradient.md)
- [MPSCNNUpsamplingGradient](mpscnnupsamplinggradient.md)
- [MPSNNGramMatrixCalculationGradient](mpsnngrammatrixcalculationgradient.md)
- [MPSNNPadGradient](mpsnnpadgradient.md)
- [MPSNNReshapeGradient](mpsnnreshapegradient.md)

## See Also

### Layer Base Classes

- [MPSCNNKernel](mpscnnkernel.md): Base class for neural network layers.
- [MPSCNNBinaryKernel](mpscnnbinarykernel.md): A convolution neural network kernel.
