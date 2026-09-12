> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsintersectiontype](https://developer.apple.com/documentation/metalperformanceshaders/mpsintersectiontype)

# MPSIntersectionType (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Options that determine an intersection type for a ray intersector.

## Declaration

```swift
enum MPSIntersectionType
```

## Topics

### Enumeration Cases

- [MPSIntersectionType.any](mpsintersectiontype/any.md)
- [MPSIntersectionType.nearest](mpsintersectiontype/nearest.md)

### Initializers

- [init(rawValue:)](mpsintersectiontype/init%28rawvalue_%29.md)

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
- [MPSCNNWeightsQuantizationType](mpscnnweightsquantizationtype.md): Options that specify the type of quantization used to generate unsigned integer weights.
- [MPSCustomKernelIndex](mpscustomkernelindex.md)
- [MPSDeviceCapsValues](mpsdevicecapsvalues.md)
- [MPSDeviceOptions](mpsdeviceoptions.md)
- [MPSFloatDataTypeBit](mpsfloatdatatypebit.md)
- [MPSFloatDataTypeShift](mpsfloatdatatypeshift.md)

# MPSIntersectionType (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Options that determine an intersection type for a ray intersector.

## Declaration

```objectivec
enum MPSIntersectionType : NSUInteger;
```

## Topics

### Enumeration Cases

- [MPSIntersectionTypeAny](mpsintersectiontype/any.md)
- [MPSIntersectionTypeNearest](mpsintersectiontype/nearest.md)

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
- [MPSCNNWeightsQuantizationType](mpscnnweightsquantizationtype.md): Options that specify the type of quantization used to generate unsigned integer weights.
- [MPSCustomKernelIndex](mpscustomkernelindex.md)
- [MPSDeviceCapsValues](mpsdevicecapsvalues.md)
- [MPSDeviceOptions](mpsdeviceoptions.md)
- [MPSFloatDataTypeBit](mpsfloatdatatypebit.md)
- [MPSFloatDataTypeShift](mpsfloatdatatypeshift.md)
