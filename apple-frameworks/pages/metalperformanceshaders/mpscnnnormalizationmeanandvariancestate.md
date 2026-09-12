> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnnormalizationmeanandvariancestate](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnnormalizationmeanandvariancestate)

# MPSCNNNormalizationMeanAndVarianceState (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

An object that stores mean and variance terms used to execute batch normalization.

## Declaration

```swift
class MPSCNNNormalizationMeanAndVarianceState
```

## Topics

### Initializers

- [init(mean:variance:)](mpscnnnormalizationmeanandvariancestate/init%28mean_variance_%29.md)

### Instance Properties

- [mean](mpscnnnormalizationmeanandvariancestate/mean.md)
- [variance](mpscnnnormalizationmeanandvariancestate/variance.md)

### Type Methods

- [temporaryState(with:numberOfFeatureChannels:)](mpscnnnormalizationmeanandvariancestate/temporarystate%28with_numberoffeaturechannels_%29.md)

## Relationships

### Inherits From

- [MPSState](mpsstate.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

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
- [MPSCNNBatchNormalizationStatistics](mpscnnbatchnormalizationstatistics.md): An object that stores statistics required to execute batch normalization.
- [MPSCNNBatchNormalizationStatisticsGradient](mpscnnbatchnormalizationstatisticsgradient.md): An object that stores the gradient of the loss function with respect to the batch statistics and batch normalization weights.
- [MPSCNNInstanceNormalization](mpscnninstancenormalization.md): An instance normalization kernel.
- [MPSCNNInstanceNormalizationGradient](mpscnninstancenormalizationgradient.md): A gradient instance normalization kernel.
- [MPSCNNInstanceNormalizationGradientState](mpscnninstancenormalizationgradientstate.md): An object that stores information required to execute a gradient pass for instance normalization.
- [MPSCNNNormalizationGammaAndBetaState](mpscnnnormalizationgammaandbetastate.md): An object that stores gamma and beta terms used to apply a scale and bias in instance- or batch-normalization operations.

# MPSCNNNormalizationMeanAndVarianceState (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

An object that stores mean and variance terms used to execute batch normalization.

## Declaration

```objectivec
@interface MPSCNNNormalizationMeanAndVarianceState : MPSState
```

## Topics

### Instance Properties

- [mean](mpscnnnormalizationmeanandvariancestate/mean.md)
- [variance](mpscnnnormalizationmeanandvariancestate/variance.md)

### Instance Methods

- [initWithMean:variance:](mpscnnnormalizationmeanandvariancestate/init%28mean_variance_%29.md)

### Type Methods

- [temporaryStateWithCommandBuffer:numberOfFeatureChannels:](mpscnnnormalizationmeanandvariancestate/temporarystate%28with_numberoffeaturechannels_%29.md)

## Relationships

### Inherits From

- [MPSState](mpsstate.md)

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
- [MPSCNNBatchNormalizationStatistics](mpscnnbatchnormalizationstatistics.md): An object that stores statistics required to execute batch normalization.
- [MPSCNNBatchNormalizationStatisticsGradient](mpscnnbatchnormalizationstatisticsgradient.md): An object that stores the gradient of the loss function with respect to the batch statistics and batch normalization weights.
- [MPSCNNInstanceNormalization](mpscnninstancenormalization.md): An instance normalization kernel.
- [MPSCNNInstanceNormalizationGradient](mpscnninstancenormalizationgradient.md): A gradient instance normalization kernel.
- [MPSCNNInstanceNormalizationGradientState](mpscnninstancenormalizationgradientstate.md): An object that stores information required to execute a gradient pass for instance normalization.
- [MPSCNNNormalizationGammaAndBetaState](mpscnnnormalizationgammaandbetastate.md): An object that stores gamma and beta terms used to apply a scale and bias in instance- or batch-normalization operations.
