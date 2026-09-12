> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnreductiontype](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnreductiontype)

# MPSCNNReductionType (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Constants that indicate supported reduction types.

## Declaration

```swift
enum MPSCNNReductionType
```

## Topics

### Enumeration Cases

- [MPSCNNReductionType.count](mpscnnreductiontype/count.md)
- [MPSCNNReductionType.mean](mpscnnreductiontype/mean.md)
- [MPSCNNReductionType.none](mpscnnreductiontype/none.md)
- [MPSCNNReductionType.sum](mpscnnreductiontype/sum.md)
- [MPSCNNReductionType.sumByNonZeroWeights](mpscnnreductiontype/sumbynonzeroweights.md)

### Initializers

- [init(rawValue:)](mpscnnreductiontype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [MPSAccelerationStructureStatus](mpsaccelerationstructurestatus.md): Deprecated. Constants that indicate an acceleration structure build state.
- [MPSAccelerationStructureUsage](mpsaccelerationstructureusage.md): Deprecated. Options that describe how an acceleration structure will be used.
- [MPSAliasingStrategy](mpsaliasingstrategy.md)
- [MPSBoundingBoxIntersectionTestType](mpsboundingboxintersectiontesttype.md): Deprecated. Options for the intersection test type for a ray intersector bounding box.
- [MPSCNNBatchNormalizationFlags](mpscnnbatchnormalizationflags.md): Options that define how statistics are calculated during batch normalization.
- [MPSCNNConvolutionGradientOption](mpscnnconvolutiongradientoption.md): Options that control which gradient to compute during backward propagation.
- [MPSCNNConvolutionWeightsLayout](mpscnnconvolutionweightslayout.md)
- [MPSCNNLossType](mpscnnlosstype.md): Constants that indicate supported loss filter types.
- [MPSCNNWeightsQuantizationType](mpscnnweightsquantizationtype.md): Options that specify the type of quantization used to generate unsigned integer weights.
- [MPSCustomKernelIndex](mpscustomkernelindex.md)
- [MPSDeviceCapsValues](mpsdevicecapsvalues.md)
- [MPSDeviceOptions](mpsdeviceoptions.md)
- [MPSFloatDataTypeBit](mpsfloatdatatypebit.md)
- [MPSFloatDataTypeShift](mpsfloatdatatypeshift.md)
- [MPSImageType](mpsimagetype.md): Options that define a Metal Performance Shaders image type.

# MPSCNNReductionType (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Constants that indicate supported reduction types.

## Declaration

```objectivec
enum MPSCNNReductionType : int32_t;
```

## Topics

### Enumeration Cases

- [MPSCNNReductionTypeCount](mpscnnreductiontype/count.md)
- [MPSCNNReductionTypeMean](mpscnnreductiontype/mean.md)
- [MPSCNNReductionTypeNone](mpscnnreductiontype/none.md)
- [MPSCNNReductionTypeSum](mpscnnreductiontype/sum.md)
- [MPSCNNReductionTypeSumByNonZeroWeights](mpscnnreductiontype/sumbynonzeroweights.md)

## See Also

### Enumerations

- [MPSAccelerationStructureStatus](mpsaccelerationstructurestatus.md): Deprecated. Constants that indicate an acceleration structure build state.
- [MPSAccelerationStructureUsage](mpsaccelerationstructureusage.md): Deprecated. Options that describe how an acceleration structure will be used.
- [MPSAliasingStrategy](mpsaliasingstrategy.md)
- [MPSBoundingBoxIntersectionTestType](mpsboundingboxintersectiontesttype.md): Deprecated. Options for the intersection test type for a ray intersector bounding box.
- [MPSCNNBatchNormalizationFlags](mpscnnbatchnormalizationflags.md): Options that define how statistics are calculated during batch normalization.
- [MPSCNNConvolutionGradientOption](mpscnnconvolutiongradientoption.md): Options that control which gradient to compute during backward propagation.
- [MPSCNNConvolutionWeightsLayout](mpscnnconvolutionweightslayout.md)
- [MPSCNNLossType](mpscnnlosstype.md): Constants that indicate supported loss filter types.
- [MPSCNNWeightsQuantizationType](mpscnnweightsquantizationtype.md): Options that specify the type of quantization used to generate unsigned integer weights.
- [MPSCustomKernelIndex](mpscustomkernelindex.md)
- [MPSDeviceCapsValues](mpsdevicecapsvalues.md)
- [MPSDeviceOptions](mpsdeviceoptions.md)
- [MPSFloatDataTypeBit](mpsfloatdatatypebit.md)
- [MPSFloatDataTypeShift](mpsfloatdatatypeshift.md)
- [MPSImageType](mpsimagetype.md): Options that define a Metal Performance Shaders image type.
