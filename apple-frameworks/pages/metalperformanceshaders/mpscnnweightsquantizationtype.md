> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnweightsquantizationtype](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnweightsquantizationtype)

# MPSCNNWeightsQuantizationType (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Options that specify the type of quantization used to generate unsigned integer weights.

## Declaration

```swift
enum MPSCNNWeightsQuantizationType
```

## Topics

### Enumeration Cases

- [MPSCNNWeightsQuantizationType.none](mpscnnweightsquantizationtype/none-29myw.md)
- [MPSCNNWeightsQuantizationType.none](mpscnnweightsquantizationtype/none-3wocm.md)
- [MPSCNNWeightsQuantizationType.none](mpscnnweightsquantizationtype/none-41te1.md)

### Initializers

- [init(rawValue:)](mpscnnweightsquantizationtype/init%28rawvalue_%29.md)

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
- [MPSCNNReductionType](mpscnnreductiontype.md): Constants that indicate supported reduction types.
- [MPSCustomKernelIndex](mpscustomkernelindex.md)
- [MPSDeviceCapsValues](mpsdevicecapsvalues.md)
- [MPSDeviceOptions](mpsdeviceoptions.md)
- [MPSFloatDataTypeBit](mpsfloatdatatypebit.md)
- [MPSFloatDataTypeShift](mpsfloatdatatypeshift.md)
- [MPSImageType](mpsimagetype.md): Options that define a Metal Performance Shaders image type.

# MPSCNNWeightsQuantizationType (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Options that specify the type of quantization used to generate unsigned integer weights.

## Declaration

```objectivec
enum MPSCNNWeightsQuantizationType : uint32_t;
```

## Topics

### Enumeration Cases

- [MPSCNNWeightsQuantizationTypeLinear](mpscnnweightsquantizationtype/none-29myw.md)
- [MPSCNNWeightsQuantizationTypeLookupTable](mpscnnweightsquantizationtype/none-3wocm.md)
- [MPSCNNWeightsQuantizationTypeNone](mpscnnweightsquantizationtype/none-41te1.md)

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
- [MPSCNNReductionType](mpscnnreductiontype.md): Constants that indicate supported reduction types.
- [MPSCustomKernelIndex](mpscustomkernelindex.md)
- [MPSDeviceCapsValues](mpsdevicecapsvalues.md)
- [MPSDeviceOptions](mpsdeviceoptions.md)
- [MPSFloatDataTypeBit](mpsfloatdatatypebit.md)
- [MPSFloatDataTypeShift](mpsfloatdatatypeshift.md)
- [MPSImageType](mpsimagetype.md): Options that define a Metal Performance Shaders image type.
