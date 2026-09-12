> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnbatchnormalizationgradient](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnbatchnormalizationgradient)

# MPSCNNBatchNormalizationGradient (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A gradient batch normalization kernel.

## Declaration

```swift
class MPSCNNBatchNormalizationGradient
```

## Topics

### Initializers

- [init(coder:device:)](mpscnnbatchnormalizationgradient/init%28coder_device_%29.md)
- [init(device:fusedNeuronDescriptor:)](mpscnnbatchnormalizationgradient/init%28device_fusedneurondescriptor_%29.md)

### Instance Methods

- [encode(to:sourceGradient:sourceImage:batchNormalizationState:)](mpscnnbatchnormalizationgradient/encode%28to_sourcegradient_sourceimage_batchnormalizationstate_%29.md)
- [encode(to:sourceGradient:sourceImage:batchNormalizationState:destinationGradient:)](mpscnnbatchnormalizationgradient/encode%28to_sourcegradient_sourceimage_batchnormalizationstate_destinationgradient_%29.md)
- [encodeBatch(to:sourceGradients:sourceImages:batchNormalizationState:)](mpscnnbatchnormalizationgradient/encodebatch%28to_sourcegradients_sourceimages_batchnormalizationstate_%29.md)
- [encodeBatch(to:sourceGradients:sourceImages:batchNormalizationState:destinationGradients:)](mpscnnbatchnormalizationgradient/encodebatch%28to_sourcegradients_sourceimages_batchnormalizationstate_destinationgradients_%29.md)

## Relationships

### Inherits From

- [MPSCNNGradientKernel](mpscnngradientkernel.md)

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

### Normalization Layers

- [MPSCNNCrossChannelNormalization](mpscnncrosschannelnormalization.md): A normalization kernel applied across feature channels.
- [MPSCNNCrossChannelNormalizationGradient](mpscnncrosschannelnormalizationgradient.md): A gradient normalization kernel applied across feature channels.
- [MPSCNNLocalContrastNormalization](mpscnnlocalcontrastnormalization.md): A local-contrast normalization kernel.
- [MPSCNNLocalContrastNormalizationGradient](mpscnnlocalcontrastnormalizationgradient.md): A gradient local-contrast normalization kernel.
- [MPSCNNSpatialNormalization](mpscnnspatialnormalization.md): A spatial normalization kernel.
- [MPSCNNSpatialNormalizationGradient](mpscnnspatialnormalizationgradient.md): A gradient spatial normalization kernel.
- [MPSCNNBatchNormalization](mpscnnbatchnormalization.md): A batch normalization kernel.
- [MPSCNNBatchNormalizationState](mpscnnbatchnormalizationstate.md): An object that stores data required to execute batch normalization.
- [MPSCNNNormalizationMeanAndVarianceState](mpscnnnormalizationmeanandvariancestate.md): An object that stores mean and variance terms used to execute batch normalization.
- [MPSCNNBatchNormalizationStatistics](mpscnnbatchnormalizationstatistics.md): An object that stores statistics required to execute batch normalization.
- [MPSCNNBatchNormalizationStatisticsGradient](mpscnnbatchnormalizationstatisticsgradient.md): An object that stores the gradient of the loss function with respect to the batch statistics and batch normalization weights.
- [MPSCNNInstanceNormalization](mpscnninstancenormalization.md): An instance normalization kernel.
- [MPSCNNInstanceNormalizationGradient](mpscnninstancenormalizationgradient.md): A gradient instance normalization kernel.
- [MPSCNNInstanceNormalizationGradientState](mpscnninstancenormalizationgradientstate.md): An object that stores information required to execute a gradient pass for instance normalization.
- [MPSCNNNormalizationGammaAndBetaState](mpscnnnormalizationgammaandbetastate.md): An object that stores gamma and beta terms used to apply a scale and bias in instance- or batch-normalization operations.

# MPSCNNBatchNormalizationGradient (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A gradient batch normalization kernel.

## Declaration

```objectivec
@interface MPSCNNBatchNormalizationGradient : MPSCNNGradientKernel
```

## Topics

### Instance Methods

- [encodeToCommandBuffer:sourceGradient:sourceImage:batchNormalizationState:](mpscnnbatchnormalizationgradient/encode%28to_sourcegradient_sourceimage_batchnormalizationstate_%29.md)
- [encodeToCommandBuffer:sourceGradient:sourceImage:batchNormalizationState:destinationGradient:](mpscnnbatchnormalizationgradient/encode%28to_sourcegradient_sourceimage_batchnormalizationstate_destinationgradient_%29.md)
- [encodeBatchToCommandBuffer:sourceGradients:sourceImages:batchNormalizationState:](mpscnnbatchnormalizationgradient/encodebatch%28to_sourcegradients_sourceimages_batchnormalizationstate_%29.md)
- [encodeBatchToCommandBuffer:sourceGradients:sourceImages:batchNormalizationState:destinationGradients:](mpscnnbatchnormalizationgradient/encodebatch%28to_sourcegradients_sourceimages_batchnormalizationstate_destinationgradients_%29.md)
- [initWithCoder:device:](mpscnnbatchnormalizationgradient/init%28coder_device_%29.md)
- [initWithDevice:fusedNeuronDescriptor:](mpscnnbatchnormalizationgradient/init%28device_fusedneurondescriptor_%29.md)

## Relationships

### Inherits From

- [MPSCNNGradientKernel](mpscnngradientkernel.md)

## See Also

### Normalization Layers

- [MPSCNNCrossChannelNormalization](mpscnncrosschannelnormalization.md): A normalization kernel applied across feature channels.
- [MPSCNNCrossChannelNormalizationGradient](mpscnncrosschannelnormalizationgradient.md): A gradient normalization kernel applied across feature channels.
- [MPSCNNLocalContrastNormalization](mpscnnlocalcontrastnormalization.md): A local-contrast normalization kernel.
- [MPSCNNLocalContrastNormalizationGradient](mpscnnlocalcontrastnormalizationgradient.md): A gradient local-contrast normalization kernel.
- [MPSCNNSpatialNormalization](mpscnnspatialnormalization.md): A spatial normalization kernel.
- [MPSCNNSpatialNormalizationGradient](mpscnnspatialnormalizationgradient.md): A gradient spatial normalization kernel.
- [MPSCNNBatchNormalization](mpscnnbatchnormalization.md): A batch normalization kernel.
- [MPSCNNBatchNormalizationState](mpscnnbatchnormalizationstate.md): An object that stores data required to execute batch normalization.
- [MPSCNNNormalizationMeanAndVarianceState](mpscnnnormalizationmeanandvariancestate.md): An object that stores mean and variance terms used to execute batch normalization.
- [MPSCNNBatchNormalizationStatistics](mpscnnbatchnormalizationstatistics.md): An object that stores statistics required to execute batch normalization.
- [MPSCNNBatchNormalizationStatisticsGradient](mpscnnbatchnormalizationstatisticsgradient.md): An object that stores the gradient of the loss function with respect to the batch statistics and batch normalization weights.
- [MPSCNNInstanceNormalization](mpscnninstancenormalization.md): An instance normalization kernel.
- [MPSCNNInstanceNormalizationGradient](mpscnninstancenormalizationgradient.md): A gradient instance normalization kernel.
- [MPSCNNInstanceNormalizationGradientState](mpscnninstancenormalizationgradientstate.md): An object that stores information required to execute a gradient pass for instance normalization.
- [MPSCNNNormalizationGammaAndBetaState](mpscnnnormalizationgammaandbetastate.md): An object that stores gamma and beta terms used to apply a scale and bias in instance- or batch-normalization operations.
