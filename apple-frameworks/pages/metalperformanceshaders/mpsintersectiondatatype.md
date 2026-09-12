> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsintersectiondatatype](https://developer.apple.com/documentation/metalperformanceshaders/mpsintersectiondatatype)

# MPSIntersectionDataType (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Options that determine the data contained in an intersection result.

## Declaration

```swift
enum MPSIntersectionDataType
```

## Topics

### Enumeration Cases

- [MPSIntersectionDataType.distance](mpsintersectiondatatype/distance.md)
- [MPSIntersectionDataType.distancePrimitiveIndex](mpsintersectiondatatype/distanceprimitiveindex.md)
- [MPSIntersectionDataType.distancePrimitiveIndexBufferIndex](mpsintersectiondatatype/distanceprimitiveindexbufferindex.md)
- [MPSIntersectionDataType.distancePrimitiveIndexBufferIndexCoordinates](mpsintersectiondatatype/distanceprimitiveindexbufferindexcoordinates.md)
- [MPSIntersectionDataType.distancePrimitiveIndexBufferIndexInstanceIndex](mpsintersectiondatatype/distanceprimitiveindexbufferindexinstanceindex.md)
- [MPSIntersectionDataType.distancePrimitiveIndexBufferIndexInstanceIndexCoordinates](mpsintersectiondatatype/distanceprimitiveindexbufferindexinstanceindexcoordinates.md)
- [MPSIntersectionDataType.distancePrimitiveIndexCoordinates](mpsintersectiondatatype/distanceprimitiveindexcoordinates.md)
- [MPSIntersectionDataType.distancePrimitiveIndexInstanceIndex](mpsintersectiondatatype/distanceprimitiveindexinstanceindex.md)
- [MPSIntersectionDataType.distancePrimitiveIndexInstanceIndexCoordinates](mpsintersectiondatatype/distanceprimitiveindexinstanceindexcoordinates.md)

### Initializers

- [init(rawValue:)](mpsintersectiondatatype/init%28rawvalue_%29.md)

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

# MPSIntersectionDataType (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Options that determine the data contained in an intersection result.

## Declaration

```objectivec
enum MPSIntersectionDataType : NSUInteger;
```

## Topics

### Enumeration Cases

- [MPSIntersectionDataTypeDistance](mpsintersectiondatatype/distance.md)
- [MPSIntersectionDataTypeDistancePrimitiveIndex](mpsintersectiondatatype/distanceprimitiveindex.md)
- [MPSIntersectionDataTypeDistancePrimitiveIndexBufferIndex](mpsintersectiondatatype/distanceprimitiveindexbufferindex.md)
- [MPSIntersectionDataTypeDistancePrimitiveIndexBufferIndexCoordinates](mpsintersectiondatatype/distanceprimitiveindexbufferindexcoordinates.md)
- [MPSIntersectionDataTypeDistancePrimitiveIndexBufferIndexInstanceIndex](mpsintersectiondatatype/distanceprimitiveindexbufferindexinstanceindex.md)
- [MPSIntersectionDataTypeDistancePrimitiveIndexBufferIndexInstanceIndexCoordinates](mpsintersectiondatatype/distanceprimitiveindexbufferindexinstanceindexcoordinates.md)
- [MPSIntersectionDataTypeDistancePrimitiveIndexCoordinates](mpsintersectiondatatype/distanceprimitiveindexcoordinates.md)
- [MPSIntersectionDataTypeDistancePrimitiveIndexInstanceIndex](mpsintersectiondatatype/distanceprimitiveindexinstanceindex.md)
- [MPSIntersectionDataTypeDistancePrimitiveIndexInstanceIndexCoordinates](mpsintersectiondatatype/distanceprimitiveindexinstanceindexcoordinates.md)

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
