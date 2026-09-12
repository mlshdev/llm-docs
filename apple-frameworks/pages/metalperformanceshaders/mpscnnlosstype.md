> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnlosstype](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnlosstype)

# MPSCNNLossType (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Constants that indicate supported loss filter types.

## Declaration

```swift
enum MPSCNNLossType
```

## Topics

### Enumeration Cases

- [MPSCNNLossType.categoricalCrossEntropy](mpscnnlosstype/categoricalcrossentropy.md)
- [MPSCNNLossType.cosineDistance](mpscnnlosstype/cosinedistance.md)
- [MPSCNNLossType.count](mpscnnlosstype/count.md)
- [MPSCNNLossType.hinge](mpscnnlosstype/hinge.md)
- [MPSCNNLossType.huber](mpscnnlosstype/huber.md)
- [MPSCNNLossType.kullbackLeiblerDivergence](mpscnnlosstype/kullbackleiblerdivergence.md)
- [MPSCNNLossType.log](mpscnnlosstype/log.md)
- [MPSCNNLossType.meanAbsoluteError](mpscnnlosstype/meanabsoluteerror.md)
- [MPSCNNLossType.meanSquaredError](mpscnnlosstype/meansquarederror.md)
- [MPSCNNLossType.sigmoidCrossEntropy](mpscnnlosstype/sigmoidcrossentropy.md)
- [MPSCNNLossType.softMaxCrossEntropy](mpscnnlosstype/softmaxcrossentropy.md)

### Initializers

- [init(rawValue:)](mpscnnlosstype/init%28rawvalue_%29.md)

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
- [MPSCNNReductionType](mpscnnreductiontype.md): Constants that indicate supported reduction types.
- [MPSCNNWeightsQuantizationType](mpscnnweightsquantizationtype.md): Options that specify the type of quantization used to generate unsigned integer weights.
- [MPSCustomKernelIndex](mpscustomkernelindex.md)
- [MPSDeviceCapsValues](mpsdevicecapsvalues.md)
- [MPSDeviceOptions](mpsdeviceoptions.md)
- [MPSFloatDataTypeBit](mpsfloatdatatypebit.md)
- [MPSFloatDataTypeShift](mpsfloatdatatypeshift.md)
- [MPSImageType](mpsimagetype.md): Options that define a Metal Performance Shaders image type.

# MPSCNNLossType (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Constants that indicate supported loss filter types.

## Declaration

```objectivec
enum MPSCNNLossType : uint32_t;
```

## Topics

### Enumeration Cases

- [MPSCNNLossTypeCategoricalCrossEntropy](mpscnnlosstype/categoricalcrossentropy.md)
- [MPSCNNLossTypeCosineDistance](mpscnnlosstype/cosinedistance.md)
- [MPSCNNLossTypeCount](mpscnnlosstype/count.md)
- [MPSCNNLossTypeHinge](mpscnnlosstype/hinge.md)
- [MPSCNNLossTypeHuber](mpscnnlosstype/huber.md)
- [MPSCNNLossTypeKullbackLeiblerDivergence](mpscnnlosstype/kullbackleiblerdivergence.md)
- [MPSCNNLossTypeLog](mpscnnlosstype/log.md)
- [MPSCNNLossTypeMeanAbsoluteError](mpscnnlosstype/meanabsoluteerror.md)
- [MPSCNNLossTypeMeanSquaredError](mpscnnlosstype/meansquarederror.md)
- [MPSCNNLossTypeSigmoidCrossEntropy](mpscnnlosstype/sigmoidcrossentropy.md)
- [MPSCNNLossTypeSoftMaxCrossEntropy](mpscnnlosstype/softmaxcrossentropy.md)

## See Also

### Enumerations

- [MPSAccelerationStructureStatus](mpsaccelerationstructurestatus.md): Deprecated. Constants that indicate an acceleration structure build state.
- [MPSAccelerationStructureUsage](mpsaccelerationstructureusage.md): Deprecated. Options that describe how an acceleration structure will be used.
- [MPSAliasingStrategy](mpsaliasingstrategy.md)
- [MPSBoundingBoxIntersectionTestType](mpsboundingboxintersectiontesttype.md): Deprecated. Options for the intersection test type for a ray intersector bounding box.
- [MPSCNNBatchNormalizationFlags](mpscnnbatchnormalizationflags.md): Options that define how statistics are calculated during batch normalization.
- [MPSCNNConvolutionGradientOption](mpscnnconvolutiongradientoption.md): Options that control which gradient to compute during backward propagation.
- [MPSCNNConvolutionWeightsLayout](mpscnnconvolutionweightslayout.md)
- [MPSCNNReductionType](mpscnnreductiontype.md): Constants that indicate supported reduction types.
- [MPSCNNWeightsQuantizationType](mpscnnweightsquantizationtype.md): Options that specify the type of quantization used to generate unsigned integer weights.
- [MPSCustomKernelIndex](mpscustomkernelindex.md)
- [MPSDeviceCapsValues](mpsdevicecapsvalues.md)
- [MPSDeviceOptions](mpsdeviceoptions.md)
- [MPSFloatDataTypeBit](mpsfloatdatatypebit.md)
- [MPSFloatDataTypeShift](mpsfloatdatatypeshift.md)
- [MPSImageType](mpsimagetype.md): Options that define a Metal Performance Shaders image type.
