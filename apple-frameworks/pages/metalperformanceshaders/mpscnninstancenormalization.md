> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnninstancenormalization](https://developer.apple.com/documentation/metalperformanceshaders/mpscnninstancenormalization)

# MPSCNNInstanceNormalization (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

An instance normalization kernel.

## Declaration

```swift
class MPSCNNInstanceNormalization
```

## Topics

### Initializers

- [init(coder:device:)](mpscnninstancenormalization/init%28coder_device_%29.md)
- [init(device:dataSource:)](mpscnninstancenormalization/init%28device_datasource_%29.md)

### Instance Properties

- [dataSource](mpscnninstancenormalization/datasource.md)
- [epsilon](mpscnninstancenormalization/epsilon.md)

### Instance Methods

- [reloadDataSource(\_:)](mpscnninstancenormalization/reloaddatasource%28__%29.md): Deprecated.
- [reloadGammaAndBeta(with:gammaAndBetaState:)](mpscnninstancenormalization/reloadgammaandbeta%28with_gammaandbetastate_%29.md)
- [reloadGammaAndBetaFromDataSource()](mpscnninstancenormalization/reloadgammaandbetafromdatasource%28%29.md)
- [resultState(sourceImage:sourceStates:destinationImage:)](mpscnninstancenormalization/resultstate%28sourceimage_sourcestates_destinationimage_%29.md)
- [temporaryResultState(commandBuffer:sourceImage:sourceStates:destinationImage:)](mpscnninstancenormalization/temporaryresultstate%28commandbuffer_sourceimage_sourcestates_destinationimage_%29.md)

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
- [MPSCNNBatchNormalization](mpscnnbatchnormalization.md): A batch normalization kernel.
- [MPSCNNBatchNormalizationGradient](mpscnnbatchnormalizationgradient.md): A gradient batch normalization kernel.
- [MPSCNNBatchNormalizationState](mpscnnbatchnormalizationstate.md): An object that stores data required to execute batch normalization.
- [MPSCNNNormalizationMeanAndVarianceState](mpscnnnormalizationmeanandvariancestate.md): An object that stores mean and variance terms used to execute batch normalization.
- [MPSCNNBatchNormalizationStatistics](mpscnnbatchnormalizationstatistics.md): An object that stores statistics required to execute batch normalization.
- [MPSCNNBatchNormalizationStatisticsGradient](mpscnnbatchnormalizationstatisticsgradient.md): An object that stores the gradient of the loss function with respect to the batch statistics and batch normalization weights.
- [MPSCNNInstanceNormalizationGradient](mpscnninstancenormalizationgradient.md): A gradient instance normalization kernel.
- [MPSCNNInstanceNormalizationGradientState](mpscnninstancenormalizationgradientstate.md): An object that stores information required to execute a gradient pass for instance normalization.
- [MPSCNNNormalizationGammaAndBetaState](mpscnnnormalizationgammaandbetastate.md): An object that stores gamma and beta terms used to apply a scale and bias in instance- or batch-normalization operations.

# MPSCNNInstanceNormalization (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

An instance normalization kernel.

## Declaration

```objectivec
@interface MPSCNNInstanceNormalization : MPSCNNKernel
```

## Topics

### Instance Properties

- [dataSource](mpscnninstancenormalization/datasource.md)
- [epsilon](mpscnninstancenormalization/epsilon.md)

### Instance Methods

- [initWithCoder:device:](mpscnninstancenormalization/init%28coder_device_%29.md)
- [initWithDevice:dataSource:](mpscnninstancenormalization/init%28device_datasource_%29.md)
- [reloadDataSource:](mpscnninstancenormalization/reloaddatasource%28__%29.md): Deprecated.
- [reloadGammaAndBetaWithCommandBuffer:gammaAndBetaState:](mpscnninstancenormalization/reloadgammaandbeta%28with_gammaandbetastate_%29.md)
- [reloadGammaAndBetaFromDataSource](mpscnninstancenormalization/reloadgammaandbetafromdatasource%28%29.md)
- [resultStateForSourceImage:sourceStates:destinationImage:](mpscnninstancenormalization/resultstate%28sourceimage_sourcestates_destinationimage_%29.md)
- [temporaryResultStateForCommandBuffer:sourceImage:sourceStates:destinationImage:](mpscnninstancenormalization/temporaryresultstate%28commandbuffer_sourceimage_sourcestates_destinationimage_%29.md)

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
- [MPSCNNBatchNormalization](mpscnnbatchnormalization.md): A batch normalization kernel.
- [MPSCNNBatchNormalizationGradient](mpscnnbatchnormalizationgradient.md): A gradient batch normalization kernel.
- [MPSCNNBatchNormalizationState](mpscnnbatchnormalizationstate.md): An object that stores data required to execute batch normalization.
- [MPSCNNNormalizationMeanAndVarianceState](mpscnnnormalizationmeanandvariancestate.md): An object that stores mean and variance terms used to execute batch normalization.
- [MPSCNNBatchNormalizationStatistics](mpscnnbatchnormalizationstatistics.md): An object that stores statistics required to execute batch normalization.
- [MPSCNNBatchNormalizationStatisticsGradient](mpscnnbatchnormalizationstatisticsgradient.md): An object that stores the gradient of the loss function with respect to the batch statistics and batch normalization weights.
- [MPSCNNInstanceNormalizationGradient](mpscnninstancenormalizationgradient.md): A gradient instance normalization kernel.
- [MPSCNNInstanceNormalizationGradientState](mpscnninstancenormalizationgradientstate.md): An object that stores information required to execute a gradient pass for instance normalization.
- [MPSCNNNormalizationGammaAndBetaState](mpscnnnormalizationgammaandbetastate.md): An object that stores gamma and beta terms used to apply a scale and bias in instance- or batch-normalization operations.
