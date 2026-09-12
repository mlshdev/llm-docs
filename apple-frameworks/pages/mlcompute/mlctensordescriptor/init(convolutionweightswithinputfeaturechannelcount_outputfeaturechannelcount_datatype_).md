> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensordescriptor/init(convolutionweightswithinputfeaturechannelcount:outputfeaturechannelcount:datatype:)](https://developer.apple.com/documentation/mlcompute/mlctensordescriptor/init(convolutionweightswithinputfeaturechannelcount:outputfeaturechannelcount:datatype:))

# init(convolutionWeightsWithInputFeatureChannelCount:outputFeatureChannelCount:dataType:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a tensor descriptor with the number of feature channels and data type you specify.

## Declaration

```swift
convenience init?(convolutionWeightsWithInputFeatureChannelCount inputFeatureChannelCount: Int, outputFeatureChannelCount: Int, dataType: MLCDataType)
```

## Parameters

- `inputFeatureChannelCount`: The number of input feature channels.
- `outputFeatureChannelCount`: The number of output feature channels.
- `dataType`: The tensor data type.

<a id="Discussion"></a>

## Discussion

This initializer provides a convenient way for you to configure weights tensors with a kernel of size 1.

## See Also

### Creating Tensor Descriptors

- [init(shape:dataType:)](init%28shape_datatype_%29.md): Deprecated. Creates a tensor descriptor with the shape and data type you specify.
- [init(shape:sequenceLengths:sortedSequences:dataType:)](init%28shape_sequencelengths_sortedsequences_datatype_%29.md): Deprecated. Creates a tensor descriptor with the shape, variable sequence lengths, sorting indicator, and data type you specify.
- [init(width:height:featureChannelCount:batchSize:)](init%28width_height_featurechannelcount_batchsize_%29.md): Deprecated. Creates a tensor descriptor with the width and height, number of feature channels, and batch size you specify.
- [init(width:height:featureChannelCount:batchSize:dataType:)](init%28width_height_featurechannelcount_batchsize_datatype_%29.md): Deprecated. Creates a tensor descriptor with the width and height, number of feature channels, batch size, and data type you specify.
- [init(convolutionWeightsWithWidth:height:inputFeatureChannelCount:outputFeatureChannelCount:dataType:)](init%28convolutionweightswithwidth_height_inputfeaturechannelcount_outputfeaturechannelcount_datatype_%29.md): Deprecated. Creates a tensor descriptor with the sizing, number of feature channels, and data type you specify.
- [init(convolutionBiasesWithFeatureChannelCount:dataType:)](init%28convolutionbiaseswithfeaturechannelcount_datatype_%29.md): Deprecated. Creates a tensor descriptor with the number of feature channels and data type you specify.
- [maxTensorDimensions](maxtensordimensions.md): Deprecated. The maximum number of tensor dimensions.

# convolutionWeightsDescriptorWithInputFeatureChannelCount:outputFeatureChannelCount:dataType: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a tensor descriptor with the number of feature channels and data type you specify.

## Declaration

```objectivec
+ (instancetype) convolutionWeightsDescriptorWithInputFeatureChannelCount:(NSUInteger) inputFeatureChannelCount outputFeatureChannelCount:(NSUInteger) outputFeatureChannelCount dataType:(MLCDataType) dataType;
```

## Parameters

- `inputFeatureChannelCount`: The number of input feature channels.
- `outputFeatureChannelCount`: The number of output feature channels.
- `dataType`: The tensor data type.

<a id="Discussion"></a>

## Discussion

This initializer provides a convenient way for you to configure weights tensors with a kernel of size 1.

## See Also

### Creating Tensor Descriptors

- [descriptorWithShape:dataType:](descriptorwithshape_datatype_.md): Deprecated. Creates a tensor descriptor with the shape and data type you specify.
- [descriptorWithShape:sequenceLengths:sortedSequences:dataType:](descriptorwithshape_sequencelengths_sortedsequences_datatype_.md): Deprecated. Creates a tensor descriptor with the shape, variable sequence lengths, sorting indicator, and data type you specify.
- [descriptorWithWidth:height:featureChannelCount:batchSize:](init%28width_height_featurechannelcount_batchsize_%29.md): Deprecated. Creates a tensor descriptor with the width and height, number of feature channels, and batch size you specify.
- [descriptorWithWidth:height:featureChannelCount:batchSize:dataType:](init%28width_height_featurechannelcount_batchsize_datatype_%29.md): Deprecated. Creates a tensor descriptor with the width and height, number of feature channels, batch size, and data type you specify.
- [convolutionWeightsDescriptorWithWidth:height:inputFeatureChannelCount:outputFeatureChannelCount:dataType:](init%28convolutionweightswithwidth_height_inputfeaturechannelcount_outputfeaturechannelcount_datatype_%29.md): Deprecated. Creates a tensor descriptor with the sizing, number of feature channels, and data type you specify.
- [convolutionBiasesDescriptorWithFeatureChannelCount:dataType:](init%28convolutionbiaseswithfeaturechannelcount_datatype_%29.md): Deprecated. Creates a tensor descriptor with the number of feature channels and data type you specify.
- [maxTensorDimensions](maxtensordimensions.md): Deprecated. The maximum number of tensor dimensions.
