> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnreducebinary](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnreducebinary)

# MPSNNReduceBinary (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

The base class for binary reduction filters.

## Declaration

```swift
class MPSNNReduceBinary
```

## Topics

### Instance Properties

- [primaryOffset](mpsnnreducebinary/primaryoffset.md): Deprecated.
- [primarySourceClipRect](mpsnnreducebinary/primarysourcecliprect.md)
- [secondaryOffset](mpsnnreducebinary/secondaryoffset.md): Deprecated.
- [secondarySourceClipRect](mpsnnreducebinary/secondarysourcecliprect.md)

## Relationships

### Inherits From

- [MPSCNNBinaryKernel](mpscnnbinarykernel.md)

### Inherited By

- [MPSNNLocalCorrelation](mpsnnlocalcorrelation.md)
- [MPSNNReduceFeatureChannelsAndWeightsMean](mpsnnreducefeaturechannelsandweightsmean.md)
- [MPSNNReduceFeatureChannelsAndWeightsSum](mpsnnreducefeaturechannelsandweightssum.md)

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
- [MPSNNReduceFeatureChannelsSum](mpsnnreducefeaturechannelssum.md): A reduction filter that returns the sum of all values for each feature channel in an image.
- [MPSNNReduceFeatureChannelsMean](mpsnnreducefeaturechannelsmean.md): A reduction filter that returns the mean value for each feature channel in an image.
- [MPSNNReduceFeatureChannelsArgumentMax](mpsnnreducefeaturechannelsargumentmax.md): A reduction filter that returns the index of the location of the maximum value for each feature channel in an image.
- [MPSNNReduceFeatureChannelsArgumentMin](mpsnnreducefeaturechannelsargumentmin.md): A reduction filter that returns the index of the location of the minimum value for each feature channel in an image.
- [MPSNNReduceFeatureChannelsAndWeightsSum](mpsnnreducefeaturechannelsandweightssum.md): A reduction filter that returns the weighted sum of all values for each feature channel in an image.

# MPSNNReduceBinary (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

The base class for binary reduction filters.

## Declaration

```objectivec
@interface MPSNNReduceBinary : MPSCNNBinaryKernel
```

## Topics

### Instance Properties

- [primaryOffset](mpsnnreducebinary/primaryoffset.md): Deprecated.
- [primarySourceClipRect](mpsnnreducebinary/primarysourcecliprect.md)
- [secondaryOffset](mpsnnreducebinary/secondaryoffset.md): Deprecated.
- [secondarySourceClipRect](mpsnnreducebinary/secondarysourcecliprect.md)

## Relationships

### Inherits From

- [MPSCNNBinaryKernel](mpscnnbinarykernel.md)

### Inherited By

- [MPSNNLocalCorrelation](mpsnnlocalcorrelation.md)
- [MPSNNReduceFeatureChannelsAndWeightsMean](mpsnnreducefeaturechannelsandweightsmean.md)
- [MPSNNReduceFeatureChannelsAndWeightsSum](mpsnnreducefeaturechannelsandweightssum.md)

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
- [MPSNNReduceFeatureChannelsSum](mpsnnreducefeaturechannelssum.md): A reduction filter that returns the sum of all values for each feature channel in an image.
- [MPSNNReduceFeatureChannelsMean](mpsnnreducefeaturechannelsmean.md): A reduction filter that returns the mean value for each feature channel in an image.
- [MPSNNReduceFeatureChannelsArgumentMax](mpsnnreducefeaturechannelsargumentmax.md): A reduction filter that returns the index of the location of the maximum value for each feature channel in an image.
- [MPSNNReduceFeatureChannelsArgumentMin](mpsnnreducefeaturechannelsargumentmin.md): A reduction filter that returns the index of the location of the minimum value for each feature channel in an image.
- [MPSNNReduceFeatureChannelsAndWeightsSum](mpsnnreducefeaturechannelsandweightssum.md): A reduction filter that returns the weighted sum of all values for each feature channel in an image.
