> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensordescriptor](https://developer.apple.com/documentation/mlcompute/mlctensordescriptor)

# MLCTensorDescriptor (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A configuration object you use to create a tensor.

## Declaration

```swift
class MLCTensorDescriptor
```

<a id="overview"></a>

## Overview

This class contains the mathematical properties of a tensor, such as data type and shape. It also includes initializers that help you create a tensor descriptor for common use cases, such as convolutional neural networks and recurrent neural networks.

## Topics

### Creating Tensor Descriptors

- [init(shape:dataType:)](mlctensordescriptor/init%28shape_datatype_%29.md): Deprecated. Creates a tensor descriptor with the shape and data type you specify.
- [init(shape:sequenceLengths:sortedSequences:dataType:)](mlctensordescriptor/init%28shape_sequencelengths_sortedsequences_datatype_%29.md): Deprecated. Creates a tensor descriptor with the shape, variable sequence lengths, sorting indicator, and data type you specify.
- [init(width:height:featureChannelCount:batchSize:)](mlctensordescriptor/init%28width_height_featurechannelcount_batchsize_%29.md): Deprecated. Creates a tensor descriptor with the width and height, number of feature channels, and batch size you specify.
- [init(width:height:featureChannelCount:batchSize:dataType:)](mlctensordescriptor/init%28width_height_featurechannelcount_batchsize_datatype_%29.md): Deprecated. Creates a tensor descriptor with the width and height, number of feature channels, batch size, and data type you specify.
- [init(convolutionWeightsWithInputFeatureChannelCount:outputFeatureChannelCount:dataType:)](mlctensordescriptor/init%28convolutionweightswithinputfeaturechannelcount_outputfeaturechannelcount_datatype_%29.md): Deprecated. Creates a tensor descriptor with the number of feature channels and data type you specify.
- [init(convolutionWeightsWithWidth:height:inputFeatureChannelCount:outputFeatureChannelCount:dataType:)](mlctensordescriptor/init%28convolutionweightswithwidth_height_inputfeaturechannelcount_outputfeaturechannelcount_datatype_%29.md): Deprecated. Creates a tensor descriptor with the sizing, number of feature channels, and data type you specify.
- [init(convolutionBiasesWithFeatureChannelCount:dataType:)](mlctensordescriptor/init%28convolutionbiaseswithfeaturechannelcount_datatype_%29.md): Deprecated. Creates a tensor descriptor with the number of feature channels and data type you specify.
- [maxTensorDimensions](mlctensordescriptor/maxtensordimensions.md): Deprecated. The maximum number of tensor dimensions.

### Inspecting Tensor Descriptors

- [dataType](mlctensordescriptor/datatype.md): Deprecated. The tensor data type.
- [dimensionCount](mlctensordescriptor/dimensioncount.md): Deprecated. The number of dimensions in the tensor.
- [shape](mlctensordescriptor/shape-7i1rw.md): Deprecated. An array that contains the size in each dimension.
- [stride](mlctensordescriptor/stride-5mzlt.md): Deprecated. An array that contains the stride, in bytes, in each dimension.
- [tensorAllocationSizeInBytes](mlctensordescriptor/tensorallocationsizeinbytes.md): Deprecated. The allocation size, in bytes, for a tensor.
- [sequenceLengths](mlctensordescriptor/sequencelengths-3jdab.md): Deprecated. An array that contains the variable lengths of sequences stored in the tensor.
- [sortedSequences](mlctensordescriptor/sortedsequences.md): Deprecated. A Boolean that indicates whether you provided the sequence lengths sorted in descending order.
- [batchSizePerSequenceStep](mlctensordescriptor/batchsizepersequencestep-6iz59.md): Deprecated. The batch size for each sequence.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Creating Tensors with Descriptors

- [init(descriptor:)](mlctensor/init%28descriptor_%29.md): Deprecated. Creates a tensor without data, using the descriptor you specify.
- [init(descriptor:data:)](mlctensor/init%28descriptor_data_%29.md): Deprecated. Creates a tensor with the descriptor and data you specify.
- [init(descriptor:fillWithData:)](mlctensor/init%28descriptor_fillwithdata_%29.md): Deprecated. Creates a tensor with the descriptor and scalar value you specify.
- [init(descriptor:randomInitializerType:)](mlctensor/init%28descriptor_randominitializertype_%29.md): Deprecated. Creates a tensor with the descriptor and random initializer type you specify.
- [MLCDataType](mlcdatatype.md): Deprecated. A tensor data type.
- [MLCTensorData](mlctensordata.md): Deprecated. An encapsulation of the memory that tensor data uses.
- [MLCRandomInitializerType](mlcrandominitializertype.md): Deprecated. An initializer type you use to create a tensor with random data.

# MLCTensorDescriptor (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A configuration object you use to create a tensor.

## Declaration

```objectivec
@interface MLCTensorDescriptor : NSObject
```

<a id="overview"></a>

## Overview

This class contains the mathematical properties of a tensor, such as data type and shape. It also includes initializers that help you create a tensor descriptor for common use cases, such as convolutional neural networks and recurrent neural networks.

## Topics

### Creating Tensor Descriptors

- [descriptorWithShape:dataType:](mlctensordescriptor/descriptorwithshape_datatype_.md): Deprecated. Creates a tensor descriptor with the shape and data type you specify.
- [descriptorWithShape:sequenceLengths:sortedSequences:dataType:](mlctensordescriptor/descriptorwithshape_sequencelengths_sortedsequences_datatype_.md): Deprecated. Creates a tensor descriptor with the shape, variable sequence lengths, sorting indicator, and data type you specify.
- [descriptorWithWidth:height:featureChannelCount:batchSize:](mlctensordescriptor/init%28width_height_featurechannelcount_batchsize_%29.md): Deprecated. Creates a tensor descriptor with the width and height, number of feature channels, and batch size you specify.
- [descriptorWithWidth:height:featureChannelCount:batchSize:dataType:](mlctensordescriptor/init%28width_height_featurechannelcount_batchsize_datatype_%29.md): Deprecated. Creates a tensor descriptor with the width and height, number of feature channels, batch size, and data type you specify.
- [convolutionWeightsDescriptorWithInputFeatureChannelCount:outputFeatureChannelCount:dataType:](mlctensordescriptor/init%28convolutionweightswithinputfeaturechannelcount_outputfeaturechannelcount_datatype_%29.md): Deprecated. Creates a tensor descriptor with the number of feature channels and data type you specify.
- [convolutionWeightsDescriptorWithWidth:height:inputFeatureChannelCount:outputFeatureChannelCount:dataType:](mlctensordescriptor/init%28convolutionweightswithwidth_height_inputfeaturechannelcount_outputfeaturechannelcount_datatype_%29.md): Deprecated. Creates a tensor descriptor with the sizing, number of feature channels, and data type you specify.
- [convolutionBiasesDescriptorWithFeatureChannelCount:dataType:](mlctensordescriptor/init%28convolutionbiaseswithfeaturechannelcount_datatype_%29.md): Deprecated. Creates a tensor descriptor with the number of feature channels and data type you specify.
- [maxTensorDimensions](mlctensordescriptor/maxtensordimensions.md): Deprecated. The maximum number of tensor dimensions.

### Inspecting Tensor Descriptors

- [dataType](mlctensordescriptor/datatype.md): Deprecated. The tensor data type.
- [dimensionCount](mlctensordescriptor/dimensioncount.md): Deprecated. The number of dimensions in the tensor.
- [shape](mlctensordescriptor/shape-91vng.md): Deprecated. An array that contains the size in each dimension.
- [stride](mlctensordescriptor/stride-3ydik.md): Deprecated. An array that contains the stride, in bytes, in each dimension.
- [tensorAllocationSizeInBytes](mlctensordescriptor/tensorallocationsizeinbytes.md): Deprecated. The allocation size, in bytes, for a tensor.
- [sequenceLengths](mlctensordescriptor/sequencelengths-3ntsa.md): Deprecated. An array that contains the variable lengths of sequences stored in the tensor.
- [sortedSequences](mlctensordescriptor/sortedsequences.md): Deprecated. A Boolean that indicates whether you provided the sequence lengths sorted in descending order.
- [batchSizePerSequenceStep](mlctensordescriptor/batchsizepersequencestep-55mp8.md): Deprecated. The batch size for each sequence.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Creating Tensors with Descriptors

- [tensorWithDescriptor:](mlctensor/init%28descriptor_%29.md): Deprecated. Creates a tensor without data, using the descriptor you specify.
- [tensorWithDescriptor:data:](mlctensor/init%28descriptor_data_%29.md): Deprecated. Creates a tensor with the descriptor and data you specify.
- [tensorWithDescriptor:fillWithData:](mlctensor/init%28descriptor_fillwithdata_%29.md): Deprecated. Creates a tensor with the descriptor and scalar value you specify.
- [tensorWithDescriptor:randomInitializerType:](mlctensor/init%28descriptor_randominitializertype_%29.md): Deprecated. Creates a tensor with the descriptor and random initializer type you specify.
- [MLCDataType](mlcdatatype.md): Deprecated. A tensor data type.
- [MLCTensorData](mlctensordata.md): Deprecated. An encapsulation of the memory that tensor data uses.
- [MLCRandomInitializerType](mlcrandominitializertype.md): Deprecated. An initializer type you use to create a tensor with random data.
