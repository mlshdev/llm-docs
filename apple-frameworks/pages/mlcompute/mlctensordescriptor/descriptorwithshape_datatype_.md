> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensordescriptor/descriptorwithshape:datatype:](https://developer.apple.com/documentation/mlcompute/mlctensordescriptor/descriptorwithshape:datatype:)

# descriptorWithShape:dataType:

**Interface language:** Objective-C

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a tensor descriptor with the shape and data type you specify.

## Declaration

```objectivec
+ (instancetype) descriptorWithShape:(NSArray<NSNumber *> *) shape dataType:(MLCDataType) dataType;
```

## Parameters

- `shape`: The tensor shape.
- `dataType`: The tensor data type.

<a id="return-value"></a>

## Return Value

A tensor descriptor, or `nil` if initialization fails.

## See Also

### Creating Tensor Descriptors

- [descriptorWithShape:sequenceLengths:sortedSequences:dataType:](descriptorwithshape_sequencelengths_sortedsequences_datatype_.md): Deprecated. Creates a tensor descriptor with the shape, variable sequence lengths, sorting indicator, and data type you specify.
- [descriptorWithWidth:height:featureChannelCount:batchSize:](init%28width_height_featurechannelcount_batchsize_%29.md): Deprecated. Creates a tensor descriptor with the width and height, number of feature channels, and batch size you specify.
- [descriptorWithWidth:height:featureChannelCount:batchSize:dataType:](init%28width_height_featurechannelcount_batchsize_datatype_%29.md): Deprecated. Creates a tensor descriptor with the width and height, number of feature channels, batch size, and data type you specify.
- [convolutionWeightsDescriptorWithInputFeatureChannelCount:outputFeatureChannelCount:dataType:](init%28convolutionweightswithinputfeaturechannelcount_outputfeaturechannelcount_datatype_%29.md): Deprecated. Creates a tensor descriptor with the number of feature channels and data type you specify.
- [convolutionWeightsDescriptorWithWidth:height:inputFeatureChannelCount:outputFeatureChannelCount:dataType:](init%28convolutionweightswithwidth_height_inputfeaturechannelcount_outputfeaturechannelcount_datatype_%29.md): Deprecated. Creates a tensor descriptor with the sizing, number of feature channels, and data type you specify.
- [convolutionBiasesDescriptorWithFeatureChannelCount:dataType:](init%28convolutionbiaseswithfeaturechannelcount_datatype_%29.md): Deprecated. Creates a tensor descriptor with the number of feature channels and data type you specify.
- [maxTensorDimensions](maxtensordimensions.md): Deprecated. The maximum number of tensor dimensions.
