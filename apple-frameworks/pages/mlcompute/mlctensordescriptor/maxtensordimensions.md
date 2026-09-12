> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensordescriptor/maxtensordimensions](https://developer.apple.com/documentation/mlcompute/mlctensordescriptor/maxtensordimensions)

# maxTensorDimensions (Swift)

**Framework:** ML Compute  
**Kind:** Type Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The maximum number of tensor dimensions.

## Declaration

```swift
class var maxTensorDimensions: Int { get }
```

## See Also

### Creating Tensor Descriptors

- [init(shape:dataType:)](init%28shape_datatype_%29.md): Deprecated. Creates a tensor descriptor with the shape and data type you specify.
- [init(shape:sequenceLengths:sortedSequences:dataType:)](init%28shape_sequencelengths_sortedsequences_datatype_%29.md): Deprecated. Creates a tensor descriptor with the shape, variable sequence lengths, sorting indicator, and data type you specify.
- [init(width:height:featureChannelCount:batchSize:)](init%28width_height_featurechannelcount_batchsize_%29.md): Deprecated. Creates a tensor descriptor with the width and height, number of feature channels, and batch size you specify.
- [init(width:height:featureChannelCount:batchSize:dataType:)](init%28width_height_featurechannelcount_batchsize_datatype_%29.md): Deprecated. Creates a tensor descriptor with the width and height, number of feature channels, batch size, and data type you specify.
- [init(convolutionWeightsWithInputFeatureChannelCount:outputFeatureChannelCount:dataType:)](init%28convolutionweightswithinputfeaturechannelcount_outputfeaturechannelcount_datatype_%29.md): Deprecated. Creates a tensor descriptor with the number of feature channels and data type you specify.
- [init(convolutionWeightsWithWidth:height:inputFeatureChannelCount:outputFeatureChannelCount:dataType:)](init%28convolutionweightswithwidth_height_inputfeaturechannelcount_outputfeaturechannelcount_datatype_%29.md): Deprecated. Creates a tensor descriptor with the sizing, number of feature channels, and data type you specify.
- [init(convolutionBiasesWithFeatureChannelCount:dataType:)](init%28convolutionbiaseswithfeaturechannelcount_datatype_%29.md): Deprecated. Creates a tensor descriptor with the number of feature channels and data type you specify.

# maxTensorDimensions (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The maximum number of tensor dimensions.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSUInteger maxTensorDimensions;
```

## See Also

### Creating Tensor Descriptors

- [descriptorWithShape:dataType:](descriptorwithshape_datatype_.md): Deprecated. Creates a tensor descriptor with the shape and data type you specify.
- [descriptorWithShape:sequenceLengths:sortedSequences:dataType:](descriptorwithshape_sequencelengths_sortedsequences_datatype_.md): Deprecated. Creates a tensor descriptor with the shape, variable sequence lengths, sorting indicator, and data type you specify.
- [descriptorWithWidth:height:featureChannelCount:batchSize:](init%28width_height_featurechannelcount_batchsize_%29.md): Deprecated. Creates a tensor descriptor with the width and height, number of feature channels, and batch size you specify.
- [descriptorWithWidth:height:featureChannelCount:batchSize:dataType:](init%28width_height_featurechannelcount_batchsize_datatype_%29.md): Deprecated. Creates a tensor descriptor with the width and height, number of feature channels, batch size, and data type you specify.
- [convolutionWeightsDescriptorWithInputFeatureChannelCount:outputFeatureChannelCount:dataType:](init%28convolutionweightswithinputfeaturechannelcount_outputfeaturechannelcount_datatype_%29.md): Deprecated. Creates a tensor descriptor with the number of feature channels and data type you specify.
- [convolutionWeightsDescriptorWithWidth:height:inputFeatureChannelCount:outputFeatureChannelCount:dataType:](init%28convolutionweightswithwidth_height_inputfeaturechannelcount_outputfeaturechannelcount_datatype_%29.md): Deprecated. Creates a tensor descriptor with the sizing, number of feature channels, and data type you specify.
- [convolutionBiasesDescriptorWithFeatureChannelCount:dataType:](init%28convolutionbiaseswithfeaturechannelcount_datatype_%29.md): Deprecated. Creates a tensor descriptor with the number of feature channels and data type you specify.
