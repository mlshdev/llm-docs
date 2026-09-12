> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensordescriptor/init(shape:sequencelengths:sortedsequences:datatype:)](https://developer.apple.com/documentation/mlcompute/mlctensordescriptor/init(shape:sequencelengths:sortedsequences:datatype:))

# init(shape:sequenceLengths:sortedSequences:dataType:)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

Creates a tensor descriptor with the shape, variable sequence lengths, sorting indicator, and data type you specify.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
convenience init?(shape: [Int], sequenceLengths: [Int], sortedSequences: Bool, dataType: MLCDataType)
```

## Parameters

- `shape`: The tensor shape.
- `sequenceLengths`: An array of the variable length of sequences stored in the tensor.
- `sortedSequences`: A Boolean that indicates whether you provide the sequence lengths sorted in descending order.
- `dataType`: The tensor data type.

<a id="Discussion"></a>

## Discussion

This initializer provides a convenient way for you to configure sequence tensors used by recurrent layers.

## See Also

### Creating Tensor Descriptors

- [init(shape:dataType:)](init%28shape_datatype_%29.md): Deprecated. Creates a tensor descriptor with the shape and data type you specify.
- [init(width:height:featureChannelCount:batchSize:)](init%28width_height_featurechannelcount_batchsize_%29.md): Deprecated. Creates a tensor descriptor with the width and height, number of feature channels, and batch size you specify.
- [init(width:height:featureChannelCount:batchSize:dataType:)](init%28width_height_featurechannelcount_batchsize_datatype_%29.md): Deprecated. Creates a tensor descriptor with the width and height, number of feature channels, batch size, and data type you specify.
- [init(convolutionWeightsWithInputFeatureChannelCount:outputFeatureChannelCount:dataType:)](init%28convolutionweightswithinputfeaturechannelcount_outputfeaturechannelcount_datatype_%29.md): Deprecated. Creates a tensor descriptor with the number of feature channels and data type you specify.
- [init(convolutionWeightsWithWidth:height:inputFeatureChannelCount:outputFeatureChannelCount:dataType:)](init%28convolutionweightswithwidth_height_inputfeaturechannelcount_outputfeaturechannelcount_datatype_%29.md): Deprecated. Creates a tensor descriptor with the sizing, number of feature channels, and data type you specify.
- [init(convolutionBiasesWithFeatureChannelCount:dataType:)](init%28convolutionbiaseswithfeaturechannelcount_datatype_%29.md): Deprecated. Creates a tensor descriptor with the number of feature channels and data type you specify.
- [maxTensorDimensions](maxtensordimensions.md): Deprecated. The maximum number of tensor dimensions.
