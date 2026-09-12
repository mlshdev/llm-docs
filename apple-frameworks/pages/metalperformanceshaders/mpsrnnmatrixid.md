> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsrnnmatrixid](https://developer.apple.com/documentation/metalperformanceshaders/mpsrnnmatrixid)

# MPSRNNMatrixId (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Options that define which matrix is copied in or out of a trainable RNN layer.

## Declaration

```swift
enum MPSRNNMatrixId
```

## Topics

### Enumeration Cases

- [MPSRNNMatrixId.SingleGateInputWeights](mpsrnnmatrixid/singlegateinputweights.md)
- [MPSRNNMatrixId.gruInputGateBiasTerms](mpsrnnmatrixid/gruinputgatebiasterms.md)
- [MPSRNNMatrixId.gruInputGateInputWeights](mpsrnnmatrixid/gruinputgateinputweights.md)
- [MPSRNNMatrixId.gruInputGateRecurrentWeights](mpsrnnmatrixid/gruinputgaterecurrentweights.md)
- [MPSRNNMatrixId.gruOutputGateBiasTerms](mpsrnnmatrixid/gruoutputgatebiasterms.md)
- [MPSRNNMatrixId.gruOutputGateInputGateWeights](mpsrnnmatrixid/gruoutputgateinputgateweights.md)
- [MPSRNNMatrixId.gruOutputGateInputWeights](mpsrnnmatrixid/gruoutputgateinputweights.md)
- [MPSRNNMatrixId.gruOutputGateRecurrentWeights](mpsrnnmatrixid/gruoutputgaterecurrentweights.md)
- [MPSRNNMatrixId.gruRecurrentGateBiasTerms](mpsrnnmatrixid/grurecurrentgatebiasterms.md)
- [MPSRNNMatrixId.gruRecurrentGateInputWeights](mpsrnnmatrixid/grurecurrentgateinputweights.md)
- [MPSRNNMatrixId.gruRecurrentGateRecurrentWeights](mpsrnnmatrixid/grurecurrentgaterecurrentweights.md)
- [MPSRNNMatrixId.lstmForgetGateBiasTerms](mpsrnnmatrixid/lstmforgetgatebiasterms.md)
- [MPSRNNMatrixId.lstmForgetGateInputWeights](mpsrnnmatrixid/lstmforgetgateinputweights.md)
- [MPSRNNMatrixId.lstmForgetGateMemoryWeights](mpsrnnmatrixid/lstmforgetgatememoryweights.md)
- [MPSRNNMatrixId.lstmForgetGateRecurrentWeights](mpsrnnmatrixid/lstmforgetgaterecurrentweights.md)
- [MPSRNNMatrixId.lstmInputGateBiasTerms](mpsrnnmatrixid/lstminputgatebiasterms.md)
- [MPSRNNMatrixId.lstmInputGateInputWeights](mpsrnnmatrixid/lstminputgateinputweights.md)
- [MPSRNNMatrixId.lstmInputGateMemoryWeights](mpsrnnmatrixid/lstminputgatememoryweights.md)
- [MPSRNNMatrixId.lstmInputGateRecurrentWeights](mpsrnnmatrixid/lstminputgaterecurrentweights.md)
- [MPSRNNMatrixId.lstmMemoryGateBiasTerms](mpsrnnmatrixid/lstmmemorygatebiasterms.md)
- [MPSRNNMatrixId.lstmMemoryGateInputWeights](mpsrnnmatrixid/lstmmemorygateinputweights.md)
- [MPSRNNMatrixId.lstmMemoryGateMemoryWeights](mpsrnnmatrixid/lstmmemorygatememoryweights.md)
- [MPSRNNMatrixId.lstmMemoryGateRecurrentWeights](mpsrnnmatrixid/lstmmemorygaterecurrentweights.md)
- [MPSRNNMatrixId.lstmOutputGateBiasTerms](mpsrnnmatrixid/lstmoutputgatebiasterms.md)
- [MPSRNNMatrixId.lstmOutputGateInputWeights](mpsrnnmatrixid/lstmoutputgateinputweights.md)
- [MPSRNNMatrixId.lstmOutputGateMemoryWeights](mpsrnnmatrixid/lstmoutputgatememoryweights.md)
- [MPSRNNMatrixId.lstmOutputGateRecurrentWeights](mpsrnnmatrixid/lstmoutputgaterecurrentweights.md)
- [MPSRNNMatrixId.singleGateBiasTerms](mpsrnnmatrixid/singlegatebiasterms.md)
- [MPSRNNMatrixId.singleGateRecurrentWeights](mpsrnnmatrixid/singlegaterecurrentweights.md)

### Initializers

- [init(rawValue:)](mpsrnnmatrixid/init%28rawvalue_%29.md)

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

# MPSRNNMatrixId (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Options that define which matrix is copied in or out of a trainable RNN layer.

## Declaration

```objectivec
enum MPSRNNMatrixId : NSUInteger;
```

## Topics

### Enumeration Cases

- [MPSRNNMatrixId_count](mpsrnnmatrixid/mpsrnnmatrixid_count.md)
- [MPSRNNMatrixIdSingleGateInputWeights](mpsrnnmatrixid/singlegateinputweights.md)
- [MPSRNNMatrixIdGRUInputGateBiasTerms](mpsrnnmatrixid/gruinputgatebiasterms.md)
- [MPSRNNMatrixIdGRUInputGateInputWeights](mpsrnnmatrixid/gruinputgateinputweights.md)
- [MPSRNNMatrixIdGRUInputGateRecurrentWeights](mpsrnnmatrixid/gruinputgaterecurrentweights.md)
- [MPSRNNMatrixIdGRUOutputGateBiasTerms](mpsrnnmatrixid/gruoutputgatebiasterms.md)
- [MPSRNNMatrixIdGRUOutputGateInputGateWeights](mpsrnnmatrixid/gruoutputgateinputgateweights.md)
- [MPSRNNMatrixIdGRUOutputGateInputWeights](mpsrnnmatrixid/gruoutputgateinputweights.md)
- [MPSRNNMatrixIdGRUOutputGateRecurrentWeights](mpsrnnmatrixid/gruoutputgaterecurrentweights.md)
- [MPSRNNMatrixIdGRURecurrentGateBiasTerms](mpsrnnmatrixid/grurecurrentgatebiasterms.md)
- [MPSRNNMatrixIdGRURecurrentGateInputWeights](mpsrnnmatrixid/grurecurrentgateinputweights.md)
- [MPSRNNMatrixIdGRURecurrentGateRecurrentWeights](mpsrnnmatrixid/grurecurrentgaterecurrentweights.md)
- [MPSRNNMatrixIdLSTMForgetGateBiasTerms](mpsrnnmatrixid/lstmforgetgatebiasterms.md)
- [MPSRNNMatrixIdLSTMForgetGateInputWeights](mpsrnnmatrixid/lstmforgetgateinputweights.md)
- [MPSRNNMatrixIdLSTMForgetGateMemoryWeights](mpsrnnmatrixid/lstmforgetgatememoryweights.md)
- [MPSRNNMatrixIdLSTMForgetGateRecurrentWeights](mpsrnnmatrixid/lstmforgetgaterecurrentweights.md)
- [MPSRNNMatrixIdLSTMInputGateBiasTerms](mpsrnnmatrixid/lstminputgatebiasterms.md)
- [MPSRNNMatrixIdLSTMInputGateInputWeights](mpsrnnmatrixid/lstminputgateinputweights.md)
- [MPSRNNMatrixIdLSTMInputGateMemoryWeights](mpsrnnmatrixid/lstminputgatememoryweights.md)
- [MPSRNNMatrixIdLSTMInputGateRecurrentWeights](mpsrnnmatrixid/lstminputgaterecurrentweights.md)
- [MPSRNNMatrixIdLSTMMemoryGateBiasTerms](mpsrnnmatrixid/lstmmemorygatebiasterms.md)
- [MPSRNNMatrixIdLSTMMemoryGateInputWeights](mpsrnnmatrixid/lstmmemorygateinputweights.md)
- [MPSRNNMatrixIdLSTMMemoryGateMemoryWeights](mpsrnnmatrixid/lstmmemorygatememoryweights.md)
- [MPSRNNMatrixIdLSTMMemoryGateRecurrentWeights](mpsrnnmatrixid/lstmmemorygaterecurrentweights.md)
- [MPSRNNMatrixIdLSTMOutputGateBiasTerms](mpsrnnmatrixid/lstmoutputgatebiasterms.md)
- [MPSRNNMatrixIdLSTMOutputGateInputWeights](mpsrnnmatrixid/lstmoutputgateinputweights.md)
- [MPSRNNMatrixIdLSTMOutputGateMemoryWeights](mpsrnnmatrixid/lstmoutputgatememoryweights.md)
- [MPSRNNMatrixIdLSTMOutputGateRecurrentWeights](mpsrnnmatrixid/lstmoutputgaterecurrentweights.md)
- [MPSRNNMatrixIdSingleGateBiasTerms](mpsrnnmatrixid/singlegatebiasterms.md)
- [MPSRNNMatrixIdSingleGateRecurrentWeights](mpsrnnmatrixid/singlegaterecurrentweights.md)

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
