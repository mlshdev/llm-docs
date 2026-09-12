> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnbatchnormalization](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnbatchnormalization)

# MPSCNNBatchNormalization (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A batch normalization kernel.

## Declaration

```swift
class MPSCNNBatchNormalization
```

## Topics

### Initializers

- [init(coder:device:)](mpscnnbatchnormalization/init%28coder_device_%29.md)
- [init(device:dataSource:)](mpscnnbatchnormalization/init%28device_datasource_%29.md)
- [init(device:dataSource:fusedNeuronDescriptor:)](mpscnnbatchnormalization/init%28device_datasource_fusedneurondescriptor_%29.md)

### Instance Properties

- [dataSource](mpscnnbatchnormalization/datasource.md)
- [epsilon](mpscnnbatchnormalization/epsilon.md)
- [numberOfFeatureChannels](mpscnnbatchnormalization/numberoffeaturechannels.md)

### Instance Methods

- [encode(to:sourceImage:batchNormalizationState:destinationImage:)](mpscnnbatchnormalization/encode%28to_sourceimage_batchnormalizationstate_destinationimage_%29.md)
- [encodeBatch(to:sourceImages:batchNormalizationState:destinationImages:)](mpscnnbatchnormalization/encodebatch%28to_sourceimages_batchnormalizationstate_destinationimages_%29.md)
- [reloadDataSource(\_:)](mpscnnbatchnormalization/reloaddatasource%28__%29.md): Deprecated.
- [reloadGammaAndBeta(with:gammaAndBetaState:)](mpscnnbatchnormalization/reloadgammaandbeta%28with_gammaandbetastate_%29.md)
- [reloadGammaAndBetaFromDataSource()](mpscnnbatchnormalization/reloadgammaandbetafromdatasource%28%29.md)
- [reloadMeanAndVariance(with:meanAndVarianceState:)](mpscnnbatchnormalization/reloadmeanandvariance%28with_meanandvariancestate_%29.md)
- [reloadMeanAndVarianceFromDataSource()](mpscnnbatchnormalization/reloadmeanandvariancefromdatasource%28%29.md)
- [resultState(sourceImage:sourceStates:destinationImage:)](mpscnnbatchnormalization/resultstate%28sourceimage_sourcestates_destinationimage_%29.md)
- [temporaryResultState(commandBuffer:sourceImage:sourceStates:destinationImage:)](mpscnnbatchnormalization/temporaryresultstate%28commandbuffer_sourceimage_sourcestates_destinationimage_%29.md)

## Relationships

### Inherits From

- [MPSCNNKernel](mpscnnkernel.md)

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
- [MPSCNNBatchNormalizationGradient](mpscnnbatchnormalizationgradient.md): A gradient batch normalization kernel.
- [MPSCNNBatchNormalizationState](mpscnnbatchnormalizationstate.md): An object that stores data required to execute batch normalization.
- [MPSCNNNormalizationMeanAndVarianceState](mpscnnnormalizationmeanandvariancestate.md): An object that stores mean and variance terms used to execute batch normalization.
- [MPSCNNBatchNormalizationStatistics](mpscnnbatchnormalizationstatistics.md): An object that stores statistics required to execute batch normalization.
- [MPSCNNBatchNormalizationStatisticsGradient](mpscnnbatchnormalizationstatisticsgradient.md): An object that stores the gradient of the loss function with respect to the batch statistics and batch normalization weights.
- [MPSCNNInstanceNormalization](mpscnninstancenormalization.md): An instance normalization kernel.
- [MPSCNNInstanceNormalizationGradient](mpscnninstancenormalizationgradient.md): A gradient instance normalization kernel.
- [MPSCNNInstanceNormalizationGradientState](mpscnninstancenormalizationgradientstate.md): An object that stores information required to execute a gradient pass for instance normalization.
- [MPSCNNNormalizationGammaAndBetaState](mpscnnnormalizationgammaandbetastate.md): An object that stores gamma and beta terms used to apply a scale and bias in instance- or batch-normalization operations.

# MPSCNNBatchNormalization (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A batch normalization kernel.

## Declaration

```objectivec
@interface MPSCNNBatchNormalization : MPSCNNKernel
```

## Topics

### Instance Properties

- [dataSource](mpscnnbatchnormalization/datasource.md)
- [epsilon](mpscnnbatchnormalization/epsilon.md)
- [numberOfFeatureChannels](mpscnnbatchnormalization/numberoffeaturechannels.md)

### Instance Methods

- [encodeToCommandBuffer:sourceImage:batchNormalizationState:destinationImage:](mpscnnbatchnormalization/encode%28to_sourceimage_batchnormalizationstate_destinationimage_%29.md)
- [encodeBatchToCommandBuffer:sourceImages:batchNormalizationState:destinationImages:](mpscnnbatchnormalization/encodebatch%28to_sourceimages_batchnormalizationstate_destinationimages_%29.md)
- [initWithCoder:device:](mpscnnbatchnormalization/init%28coder_device_%29.md)
- [initWithDevice:dataSource:](mpscnnbatchnormalization/init%28device_datasource_%29.md)
- [initWithDevice:dataSource:fusedNeuronDescriptor:](mpscnnbatchnormalization/init%28device_datasource_fusedneurondescriptor_%29.md)
- [reloadDataSource:](mpscnnbatchnormalization/reloaddatasource%28__%29.md): Deprecated.
- [reloadGammaAndBetaWithCommandBuffer:gammaAndBetaState:](mpscnnbatchnormalization/reloadgammaandbeta%28with_gammaandbetastate_%29.md)
- [reloadGammaAndBetaFromDataSource](mpscnnbatchnormalization/reloadgammaandbetafromdatasource%28%29.md)
- [reloadMeanAndVarianceWithCommandBuffer:meanAndVarianceState:](mpscnnbatchnormalization/reloadmeanandvariance%28with_meanandvariancestate_%29.md)
- [reloadMeanAndVarianceFromDataSource](mpscnnbatchnormalization/reloadmeanandvariancefromdatasource%28%29.md)
- [resultStateForSourceImage:sourceStates:destinationImage:](mpscnnbatchnormalization/resultstate%28sourceimage_sourcestates_destinationimage_%29.md)
- [temporaryResultStateForCommandBuffer:sourceImage:sourceStates:destinationImage:](mpscnnbatchnormalization/temporaryresultstate%28commandbuffer_sourceimage_sourcestates_destinationimage_%29.md)

## Relationships

### Inherits From

- [MPSCNNKernel](mpscnnkernel.md)

## See Also

### Normalization Layers

- [MPSCNNCrossChannelNormalization](mpscnncrosschannelnormalization.md): A normalization kernel applied across feature channels.
- [MPSCNNCrossChannelNormalizationGradient](mpscnncrosschannelnormalizationgradient.md): A gradient normalization kernel applied across feature channels.
- [MPSCNNLocalContrastNormalization](mpscnnlocalcontrastnormalization.md): A local-contrast normalization kernel.
- [MPSCNNLocalContrastNormalizationGradient](mpscnnlocalcontrastnormalizationgradient.md): A gradient local-contrast normalization kernel.
- [MPSCNNSpatialNormalization](mpscnnspatialnormalization.md): A spatial normalization kernel.
- [MPSCNNSpatialNormalizationGradient](mpscnnspatialnormalizationgradient.md): A gradient spatial normalization kernel.
- [MPSCNNBatchNormalizationGradient](mpscnnbatchnormalizationgradient.md): A gradient batch normalization kernel.
- [MPSCNNBatchNormalizationState](mpscnnbatchnormalizationstate.md): An object that stores data required to execute batch normalization.
- [MPSCNNNormalizationMeanAndVarianceState](mpscnnnormalizationmeanandvariancestate.md): An object that stores mean and variance terms used to execute batch normalization.
- [MPSCNNBatchNormalizationStatistics](mpscnnbatchnormalizationstatistics.md): An object that stores statistics required to execute batch normalization.
- [MPSCNNBatchNormalizationStatisticsGradient](mpscnnbatchnormalizationstatisticsgradient.md): An object that stores the gradient of the loss function with respect to the batch statistics and batch normalization weights.
- [MPSCNNInstanceNormalization](mpscnninstancenormalization.md): An instance normalization kernel.
- [MPSCNNInstanceNormalizationGradient](mpscnninstancenormalizationgradient.md): A gradient instance normalization kernel.
- [MPSCNNInstanceNormalizationGradientState](mpscnninstancenormalizationgradientstate.md): An object that stores information required to execute a gradient pass for instance normalization.
- [MPSCNNNormalizationGammaAndBetaState](mpscnnnormalizationgammaandbetastate.md): An object that stores gamma and beta terms used to apply a scale and bias in instance- or batch-normalization operations.
