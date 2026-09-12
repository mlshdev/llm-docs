> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnreducefeaturechannelssum](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnreducefeaturechannelssum)

# MPSNNReduceFeatureChannelsSum (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A reduction filter that returns the sum of all values for each feature channel in an image.

## Declaration

```swift
class MPSNNReduceFeatureChannelsSum
```

## Topics

### Initializers

- [init(coder:device:)](mpsnnreducefeaturechannelssum/init%28coder_device_%29.md)
- [init(device:)](mpsnnreducefeaturechannelssum/init%28device_%29.md)

### Instance Properties

- [weight](mpsnnreducefeaturechannelssum/weight.md)

## Relationships

### Inherits From

- [MPSNNReduceUnary](mpsnnreduceunary.md)

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

### Reduction Layers

- [MPSNNReduceRowMax](mpsnnreducerowmax.md): A reduction filter that returns the maximum value for each row in an image.
- [MPSNNReduceRowMin](mpsnnreducerowmin.md): A reduction filter that returns the minimum value for each row in an image.
- [MPSNNReduceRowSum](mpsnnreducerowsum.md): A reduction filter that returns the sum of all values for each row in an image.
- [MPSNNReduceRowMean](mpsnnreducerowmean.md): A reduction filter that returns the mean value for each row in an image.
- [MPSNNReduceColumnMax](mpsnnreducecolumnmax.md): A reduction filter that returns the maximum value for each column in an image.
- [MPSNNReduceColumnMin](mpsnnreducecolumnmin.md): A reduction filter that returns the minimum value for each column in an image.
- [MPSNNReduceColumnSum](mpsnnreducecolumnsum.md): A reduction filter that returns the sum of all values for each column in an image.
- [MPSNNReduceColumnMean](mpsnnreducecolumnmean.md): A reduction filter that returns the mean value for each column in an image.
- [MPSNNReduceFeatureChannelsMax](mpsnnreducefeaturechannelsmax.md): A reduction filter that returns the maximum value for each feature channel in an image.
- [MPSNNReduceFeatureChannelsMin](mpsnnreducefeaturechannelsmin.md): A reduction filter that returns the minimum value for each feature channel in an image.
- [MPSNNReduceFeatureChannelsMean](mpsnnreducefeaturechannelsmean.md): A reduction filter that returns the mean value for each feature channel in an image.
- [MPSNNReduceFeatureChannelsArgumentMax](mpsnnreducefeaturechannelsargumentmax.md): A reduction filter that returns the index of the location of the maximum value for each feature channel in an image.
- [MPSNNReduceFeatureChannelsArgumentMin](mpsnnreducefeaturechannelsargumentmin.md): A reduction filter that returns the index of the location of the minimum value for each feature channel in an image.
- [MPSNNReduceFeatureChannelsAndWeightsSum](mpsnnreducefeaturechannelsandweightssum.md): A reduction filter that returns the weighted sum of all values for each feature channel in an image.
- [MPSNNReduceFeatureChannelsAndWeightsMean](mpsnnreducefeaturechannelsandweightsmean.md): A reduction filter that returns the weighted sum for each feature channel in an image.

# MPSNNReduceFeatureChannelsSum (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A reduction filter that returns the sum of all values for each feature channel in an image.

## Declaration

```objectivec
@interface MPSNNReduceFeatureChannelsSum : MPSNNReduceUnary
```

## Topics

### Instance Properties

- [weight](mpsnnreducefeaturechannelssum/weight.md)

### Instance Methods

- [initWithCoder:device:](mpsnnreducefeaturechannelssum/init%28coder_device_%29.md)
- [initWithDevice:](mpsnnreducefeaturechannelssum/init%28device_%29.md)

## Relationships

### Inherits From

- [MPSNNReduceUnary](mpsnnreduceunary.md)

## See Also

### Reduction Layers

- [MPSNNReduceRowMax](mpsnnreducerowmax.md): A reduction filter that returns the maximum value for each row in an image.
- [MPSNNReduceRowMin](mpsnnreducerowmin.md): A reduction filter that returns the minimum value for each row in an image.
- [MPSNNReduceRowSum](mpsnnreducerowsum.md): A reduction filter that returns the sum of all values for each row in an image.
- [MPSNNReduceRowMean](mpsnnreducerowmean.md): A reduction filter that returns the mean value for each row in an image.
- [MPSNNReduceColumnMax](mpsnnreducecolumnmax.md): A reduction filter that returns the maximum value for each column in an image.
- [MPSNNReduceColumnMin](mpsnnreducecolumnmin.md): A reduction filter that returns the minimum value for each column in an image.
- [MPSNNReduceColumnSum](mpsnnreducecolumnsum.md): A reduction filter that returns the sum of all values for each column in an image.
- [MPSNNReduceColumnMean](mpsnnreducecolumnmean.md): A reduction filter that returns the mean value for each column in an image.
- [MPSNNReduceFeatureChannelsMax](mpsnnreducefeaturechannelsmax.md): A reduction filter that returns the maximum value for each feature channel in an image.
- [MPSNNReduceFeatureChannelsMin](mpsnnreducefeaturechannelsmin.md): A reduction filter that returns the minimum value for each feature channel in an image.
- [MPSNNReduceFeatureChannelsMean](mpsnnreducefeaturechannelsmean.md): A reduction filter that returns the mean value for each feature channel in an image.
- [MPSNNReduceFeatureChannelsArgumentMax](mpsnnreducefeaturechannelsargumentmax.md): A reduction filter that returns the index of the location of the maximum value for each feature channel in an image.
- [MPSNNReduceFeatureChannelsArgumentMin](mpsnnreducefeaturechannelsargumentmin.md): A reduction filter that returns the index of the location of the minimum value for each feature channel in an image.
- [MPSNNReduceFeatureChannelsAndWeightsSum](mpsnnreducefeaturechannelsandweightssum.md): A reduction filter that returns the weighted sum of all values for each feature channel in an image.
- [MPSNNReduceFeatureChannelsAndWeightsMean](mpsnnreducefeaturechannelsandweightsmean.md): A reduction filter that returns the weighted sum for each feature channel in an image.
