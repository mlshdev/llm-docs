> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsboundingboxintersectiontesttype](https://developer.apple.com/documentation/metalperformanceshaders/mpsboundingboxintersectiontesttype)

# MPSBoundingBoxIntersectionTestType (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ (deprecated in 17.0) · iPadOS 12.0+ (deprecated in 17.0) · Mac Catalyst 13.0+ (deprecated in 17.0) · macOS 10.14+ (deprecated in 14.0) · tvOS 12.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Options for the intersection test type for a ray intersector bounding box.

## Declaration

```swift
enum MPSBoundingBoxIntersectionTestType
```

## Topics

### Enumeration Cases

- [MPSBoundingBoxIntersectionTestType.axisAligned](mpsboundingboxintersectiontesttype/axisaligned.md): Deprecated.
- [MPSBoundingBoxIntersectionTestType.default](mpsboundingboxintersectiontesttype/default.md): Deprecated.
- [MPSBoundingBoxIntersectionTestType.fast](mpsboundingboxintersectiontesttype/fast.md): Deprecated.

### Initializers

- [init(rawValue:)](mpsboundingboxintersectiontesttype/init%28rawvalue_%29.md): Deprecated.

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
- [MPSCNNBatchNormalizationFlags](mpscnnbatchnormalizationflags.md): Options that define how statistics are calculated during batch normalization.
- [MPSCNNConvolutionGradientOption](mpscnnconvolutiongradientoption.md): Options that control which gradient to compute during backward propagation.
- [MPSCNNConvolutionWeightsLayout](mpscnnconvolutionweightslayout.md)
- [MPSCNNLossType](mpscnnlosstype.md): Constants that indicate supported loss filter types.
- [MPSCNNReductionType](mpscnnreductiontype.md): Constants that indicate supported reduction types.
- [MPSCNNWeightsQuantizationType](mpscnnweightsquantizationtype.md): Options that specify the type of quantization used to generate unsigned integer weights.
- [MPSCustomKernelIndex](mpscustomkernelindex.md)
- [MPSDeviceCapsValues](mpsdevicecapsvalues.md)
- [MPSDeviceOptions](mpsdeviceoptions.md)
- [MPSFloatDataTypeBit](mpsfloatdatatypebit.md)
- [MPSFloatDataTypeShift](mpsfloatdatatypeshift.md)
- [MPSImageType](mpsimagetype.md): Options that define a Metal Performance Shaders image type.

# MPSBoundingBoxIntersectionTestType (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ (deprecated in 17.0) · iPadOS 12.0+ (deprecated in 17.0) · Mac Catalyst 13.0+ (deprecated in 17.0) · macOS 10.14+ (deprecated in 14.0) · tvOS 12.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Options for the intersection test type for a ray intersector bounding box.

## Declaration

```objectivec
enum MPSBoundingBoxIntersectionTestType : NSUInteger;
```

## Topics

### Enumeration Cases

- [MPSBoundingBoxIntersectionTestTypeAxisAligned](mpsboundingboxintersectiontesttype/axisaligned.md): Deprecated.
- [MPSBoundingBoxIntersectionTestTypeDefault](mpsboundingboxintersectiontesttype/default.md): Deprecated.
- [MPSBoundingBoxIntersectionTestTypeFast](mpsboundingboxintersectiontesttype/fast.md): Deprecated.

## See Also

### Enumerations

- [MPSAccelerationStructureStatus](mpsaccelerationstructurestatus.md): Deprecated. Constants that indicate an acceleration structure build state.
- [MPSAccelerationStructureUsage](mpsaccelerationstructureusage.md): Deprecated. Options that describe how an acceleration structure will be used.
- [MPSAliasingStrategy](mpsaliasingstrategy.md)
- [MPSCNNBatchNormalizationFlags](mpscnnbatchnormalizationflags.md): Options that define how statistics are calculated during batch normalization.
- [MPSCNNConvolutionGradientOption](mpscnnconvolutiongradientoption.md): Options that control which gradient to compute during backward propagation.
- [MPSCNNConvolutionWeightsLayout](mpscnnconvolutionweightslayout.md)
- [MPSCNNLossType](mpscnnlosstype.md): Constants that indicate supported loss filter types.
- [MPSCNNReductionType](mpscnnreductiontype.md): Constants that indicate supported reduction types.
- [MPSCNNWeightsQuantizationType](mpscnnweightsquantizationtype.md): Options that specify the type of quantization used to generate unsigned integer weights.
- [MPSCustomKernelIndex](mpscustomkernelindex.md)
- [MPSDeviceCapsValues](mpsdevicecapsvalues.md)
- [MPSDeviceOptions](mpsdeviceoptions.md)
- [MPSFloatDataTypeBit](mpsfloatdatatypebit.md)
- [MPSFloatDataTypeShift](mpsfloatdatatypeshift.md)
- [MPSImageType](mpsimagetype.md): Options that define a Metal Performance Shaders image type.
