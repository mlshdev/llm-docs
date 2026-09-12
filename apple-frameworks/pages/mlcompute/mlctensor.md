> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensor](https://developer.apple.com/documentation/mlcompute/mlctensor)

# MLCTensor (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The data object you use throughout the framework.

## Declaration

```swift
class MLCTensor
```

<a id="overview"></a>

## Overview

Create a tensor with or without data. For example, create a tensor with data for weights used by convolution or mean, variance, beta, and gamma parameters with batch normalization. Create a tensor without data to use as an input tensor when you build a graph.

## Topics

### Creating Tensors with Descriptors

- [init(descriptor:)](mlctensor/init%28descriptor_%29.md): Deprecated. Creates a tensor without data, using the descriptor you specify.
- [init(descriptor:data:)](mlctensor/init%28descriptor_data_%29.md): Deprecated. Creates a tensor with the descriptor and data you specify.
- [init(descriptor:fillWithData:)](mlctensor/init%28descriptor_fillwithdata_%29.md): Deprecated. Creates a tensor with the descriptor and scalar value you specify.
- [init(descriptor:randomInitializerType:)](mlctensor/init%28descriptor_randominitializertype_%29.md): Deprecated. Creates a tensor with the descriptor and random initializer type you specify.
- [MLCTensorDescriptor](mlctensordescriptor.md): Deprecated. A configuration object you use to create a tensor.
- [MLCDataType](mlcdatatype.md): Deprecated. A tensor data type.
- [MLCTensorData](mlctensordata.md): Deprecated. An encapsulation of the memory that tensor data uses.
- [MLCRandomInitializerType](mlcrandominitializertype.md): Deprecated. An initializer type you use to create a tensor with random data.

### Creating Tensors by Specifying Shape

- [init(shape:)](mlctensor/init%28shape_%29.md): Deprecated. Creates a tensor without data, with the shape you specify.
- [init(shape:dataType:)](mlctensor/init%28shape_datatype_%29.md): Deprecated. Creates a tensor without data, with the shape and data type you specify.
- [init(shape:data:dataType:)](mlctensor/init%28shape_data_datatype_%29.md): Deprecated. Creates a tensor with the shape, data, and data type you specify.
- [init(shape:fillWithData:dataType:)](mlctensor/init%28shape_fillwithdata_datatype_%29.md): Deprecated. Creates a tensor with the shape, scalar value, and data type you specify.
- [init(shape:randomInitializerType:)](mlctensor/init%28shape_randominitializertype_%29.md): Deprecated. Creates a tensor with the shape and random initializer type you specify.
- [init(width:height:featureChannelCount:batchSize:)](mlctensor/init%28width_height_featurechannelcount_batchsize_%29.md): Deprecated. Creates a tensor without data, with the sizes and number of feature channels you specify.
- [init(width:height:featureChannelCount:batchSize:data:)](mlctensor/init%28width_height_featurechannelcount_batchsize_data_%29.md): Deprecated. Creates a tensor with the sizes, number of feature channels, and data you specify.
- [init(width:height:featureChannelCount:batchSize:data:dataType:)](mlctensor/init%28width_height_featurechannelcount_batchsize_data_datatype_%29.md): Deprecated. Creates a tensor with the sizes, number of feature channels, data, and data type you specify.
- [init(width:height:featureChannelCount:batchSize:fillWithData:dataType:)](mlctensor/init%28width_height_featurechannelcount_batchsize_fillwithdata_datatype_%29.md): Deprecated. Creates a tensor with the sizes and number of feature channels, and filled with the data and type you specify.
- [init(width:height:featureChannelCount:batchSize:randomInitializerType:)](mlctensor/init%28width_height_featurechannelcount_batchsize_randominitializertype_%29.md): Deprecated. Creates a tensor with the sizes, number of feature channels, and random data using the random initializer type you specify.

### Creating Tensors by Specifying Sequence Lengths

- [init(sequenceLength:featureChannelCount:batchSize:)](mlctensor/init%28sequencelength_featurechannelcount_batchsize_%29.md): Deprecated. Creates a tensor without data, with the sequence length, number of feature channels, and batch size you specify.
- [init(sequenceLength:featureChannelCount:batchSize:data:)](mlctensor/init%28sequencelength_featurechannelcount_batchsize_data_%29.md): Deprecated. Creates a tensor with the sequence length, number of feature channels, batch size, and data you specify.
- [init(sequenceLengths:sortedSequences:featureChannelCount:batchSize:data:)](mlctensor/init%28sequencelengths_sortedsequences_featurechannelcount_batchsize_data_%29.md): Deprecated. Creates a tensor with the sequence lengths, sorting indicator, number of feature channels, batch size, and data you specify.
- [init(sequenceLength:featureChannelCount:batchSize:randomInitializerType:)](mlctensor/init%28sequencelength_featurechannelcount_batchsize_randominitializertype_%29.md): Deprecated. Creates a tensor with the sequence length, number of feature channels, batch size, and random initializer type you specify.
- [init(sequenceLengths:sortedSequences:featureChannelCount:batchSize:randomInitializerType:)](mlctensor/init%28sequencelengths_sortedsequences_featurechannelcount_batchsize_randominitializertype_%29.md): Deprecated. Creates a tensor with the sequence lengths, sorting indicator, number of feature channels, batch size, and random initializer type you specify.

### Inspecting Tensors

- [tensorID](mlctensor/tensorid.md): Deprecated. A number that uniquely identifies the tensor, which the framework assigns when it creates a tensor.
- [descriptor](mlctensor/descriptor.md): Deprecated. The configuration object you use to create a tensor.
- [data](mlctensor/data.md): Deprecated. The tensor data.
- [label](mlctensor/label.md): Deprecated. A string that identifes this tensor.
- [device](mlctensor/device.md): Deprecated. The device associated with this tensor.
- [optimizerData](mlctensor/optimizerdata.md): Deprecated. An array that contains optimizer buffers you specify when you create a tensor parameter.
- [optimizerDeviceData](mlctensor/optimizerdevicedata.md): Deprecated. An array that contains the device optimizer buffers you specify.
- [hasValidNumerics](mlctensor/hasvalidnumerics.md): Deprecated. A Boolean that indicates whether a tensor contains NaN or INF values.
- [MLCTensorOptimizerDeviceData](mlctensoroptimizerdevicedata.md): Deprecated. An encapsulation of the device memory associated with a tensor that an optimizer uses.

### Converting Tensors

- [quantized(to:scale:bias:)](mlctensor/quantized%28to_scale_bias_%29.md): Deprecated. Converts a 32-bit floating-point tensor with the scale and bias you specify.
- [quantized(to:scale:bias:axis:)](mlctensor/quantized%28to_scale_bias_axis_%29.md): Deprecated. Converts a 32-bit floating-point tensor with the scale and bias you specify.
- [dequantized(to:scale:zeroPoint:)](mlctensor/dequantized%28to_scale_zeropoint_%29.md): Deprecated. Converts a tensor you quantize to a 32-bit floating-point tensor.
- [dequantized(to:scale:bias:axis:)](mlctensor/dequantized%28to_scale_bias_axis_%29.md): Deprecated. Converts a tensor you quantize to a 32-bit floating-point tensor.

### Managing Tensor Data

- [synchronizeData()](mlctensor/synchronizedata%28%29.md): Deprecated. Synchronizes the data in host memory.
- [synchronizeOptimizerData()](mlctensor/synchronizeoptimizerdata%28%29.md): Deprecated. Synchronizes the optimizer data in host memory.
- [copyDataFromDeviceMemory(toBytes:length:synchronizeWithDevice:)](mlctensor/copydatafromdevicememory%28tobytes_length_synchronizewithdevice_%29.md): Deprecated. Copies tensor data from device memory to user-specified memory.
- [bindAndWriteData(\_:to:)](mlctensor/bindandwritedata%28__to_%29.md): Deprecated. Associates the given data to the tensor, and if the device is a GPU, also copies the data to the device memory.
- [bindOptimizerData(\_:deviceData:)](mlctensor/bindoptimizerdata%28__devicedata_%29.md): Deprecated. Associates the optimizer and device data buffers you specify to the tensor.

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

### Components

- [MLCPlatform](mlcplatform.md): Deprecated. A utility class for setting global properties in the framework.
- [Layers](layers.md): Create and inspect layers that encapsulate operations and configuration details to receive, process, and output tensors.
- [Training and Validation](training-and-validation.md): Create, train, and validate a graph to produce acceptable prediction results.

# MLCTensor (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The data object you use throughout the framework.

## Declaration

```objectivec
@interface MLCTensor : NSObject
```

<a id="overview"></a>

## Overview

Create a tensor with or without data. For example, create a tensor with data for weights used by convolution or mean, variance, beta, and gamma parameters with batch normalization. Create a tensor without data to use as an input tensor when you build a graph.

## Topics

### Creating Tensors with Descriptors

- [tensorWithDescriptor:](mlctensor/init%28descriptor_%29.md): Deprecated. Creates a tensor without data, using the descriptor you specify.
- [tensorWithDescriptor:data:](mlctensor/init%28descriptor_data_%29.md): Deprecated. Creates a tensor with the descriptor and data you specify.
- [tensorWithDescriptor:fillWithData:](mlctensor/init%28descriptor_fillwithdata_%29.md): Deprecated. Creates a tensor with the descriptor and scalar value you specify.
- [tensorWithDescriptor:randomInitializerType:](mlctensor/init%28descriptor_randominitializertype_%29.md): Deprecated. Creates a tensor with the descriptor and random initializer type you specify.
- [MLCTensorDescriptor](mlctensordescriptor.md): Deprecated. A configuration object you use to create a tensor.
- [MLCDataType](mlcdatatype.md): Deprecated. A tensor data type.
- [MLCTensorData](mlctensordata.md): Deprecated. An encapsulation of the memory that tensor data uses.
- [MLCRandomInitializerType](mlcrandominitializertype.md): Deprecated. An initializer type you use to create a tensor with random data.

### Creating Tensors by Specifying Shape

- [tensorWithShape:](mlctensor/tensorwithshape_.md): Deprecated. Creates a tensor without data, with the shape you specify.
- [tensorWithShape:dataType:](mlctensor/tensorwithshape_datatype_.md): Deprecated. Creates a tensor without data, with the shape and data type you specify.
- [tensorWithShape:data:dataType:](mlctensor/tensorwithshape_data_datatype_.md): Deprecated. Creates a tensor with the shape, data, and data type you specify.
- [tensorWithShape:fillWithData:dataType:](mlctensor/tensorwithshape_fillwithdata_datatype_.md): Deprecated. Creates a tensor with the shape, scalar value, and data type you specify.
- [tensorWithShape:randomInitializerType:](mlctensor/tensorwithshape_randominitializertype_.md): Deprecated. Creates a tensor with the shape and random initializer type you specify.
- [tensorWithShape:randomInitializerType:dataType:](mlctensor/tensorwithshape_randominitializertype_datatype_.md): Deprecated. Creates a tensor with the shape, random initializer, and data type you specify.
- [tensorWithWidth:height:featureChannelCount:batchSize:](mlctensor/init%28width_height_featurechannelcount_batchsize_%29.md): Deprecated. Creates a tensor without data, with the sizes and number of feature channels you specify.
- [tensorWithWidth:height:featureChannelCount:batchSize:data:](mlctensor/init%28width_height_featurechannelcount_batchsize_data_%29.md): Deprecated. Creates a tensor with the sizes, number of feature channels, and data you specify.
- [tensorWithWidth:height:featureChannelCount:batchSize:data:dataType:](mlctensor/init%28width_height_featurechannelcount_batchsize_data_datatype_%29.md): Deprecated. Creates a tensor with the sizes, number of feature channels, data, and data type you specify.
- [tensorWithWidth:height:featureChannelCount:batchSize:fillWithData:dataType:](mlctensor/init%28width_height_featurechannelcount_batchsize_fillwithdata_datatype_%29.md): Deprecated. Creates a tensor with the sizes and number of feature channels, and filled with the data and type you specify.
- [tensorWithWidth:height:featureChannelCount:batchSize:randomInitializerType:](mlctensor/init%28width_height_featurechannelcount_batchsize_randominitializertype_%29.md): Deprecated. Creates a tensor with the sizes, number of feature channels, and random data using the random initializer type you specify.

### Creating Tensors by Specifying Sequence Lengths

- [tensorWithSequenceLength:featureChannelCount:batchSize:](mlctensor/init%28sequencelength_featurechannelcount_batchsize_%29.md): Deprecated. Creates a tensor without data, with the sequence length, number of feature channels, and batch size you specify.
- [tensorWithSequenceLength:featureChannelCount:batchSize:data:](mlctensor/init%28sequencelength_featurechannelcount_batchsize_data_%29.md): Deprecated. Creates a tensor with the sequence length, number of feature channels, batch size, and data you specify.
- [tensorWithSequenceLengths:sortedSequences:featureChannelCount:batchSize:data:](mlctensor/tensorwithsequencelengths_sortedsequences_featurechannelcount_batchsize_data_.md): Deprecated. Creates a tensor with the sequence lengths, sorting indicator, number of feature channels, batch size, and data you specify.
- [tensorWithSequenceLength:featureChannelCount:batchSize:randomInitializerType:](mlctensor/init%28sequencelength_featurechannelcount_batchsize_randominitializertype_%29.md): Deprecated. Creates a tensor with the sequence length, number of feature channels, batch size, and random initializer type you specify.
- [tensorWithSequenceLengths:sortedSequences:featureChannelCount:batchSize:randomInitializerType:](mlctensor/tensorwithsequencelengths_sortedsequences_featurechannelcount_batchsize_randominitializertype_.md): Deprecated. Creates a tensor with the sequence lengths, sorting indicator, number of feature channels, batch size, and random initializer type you specify.

### Inspecting Tensors

- [tensorID](mlctensor/tensorid.md): Deprecated. A number that uniquely identifies the tensor, which the framework assigns when it creates a tensor.
- [descriptor](mlctensor/descriptor.md): Deprecated. The configuration object you use to create a tensor.
- [data](mlctensor/data.md): Deprecated. The tensor data.
- [label](mlctensor/label.md): Deprecated. A string that identifes this tensor.
- [device](mlctensor/device.md): Deprecated. The device associated with this tensor.
- [optimizerData](mlctensor/optimizerdata.md): Deprecated. An array that contains optimizer buffers you specify when you create a tensor parameter.
- [optimizerDeviceData](mlctensor/optimizerdevicedata.md): Deprecated. An array that contains the device optimizer buffers you specify.
- [hasValidNumerics](mlctensor/hasvalidnumerics.md): Deprecated. A Boolean that indicates whether a tensor contains NaN or INF values.
- [MLCTensorOptimizerDeviceData](mlctensoroptimizerdevicedata.md): Deprecated. An encapsulation of the device memory associated with a tensor that an optimizer uses.

### Converting Tensors

- [tensorByQuantizingToType:scale:bias:](mlctensor/quantized%28to_scale_bias_%29.md): Deprecated. Converts a 32-bit floating-point tensor with the scale and bias you specify.
- [tensorByQuantizingToType:scale:bias:axis:](mlctensor/quantized%28to_scale_bias_axis_%29.md): Deprecated. Converts a 32-bit floating-point tensor with the scale and bias you specify.
- [tensorByDequantizingToType:scale:bias:](mlctensor/dequantized%28to_scale_zeropoint_%29.md): Deprecated. Converts a tensor you quantize to a 32-bit floating-point tensor.
- [tensorByDequantizingToType:scale:bias:axis:](mlctensor/dequantized%28to_scale_bias_axis_%29.md): Deprecated. Converts a tensor you quantize to a 32-bit floating-point tensor.

### Managing Tensor Data

- [synchronizeData](mlctensor/synchronizedata%28%29.md): Deprecated. Synchronizes the data in host memory.
- [synchronizeOptimizerData](mlctensor/synchronizeoptimizerdata%28%29.md): Deprecated. Synchronizes the optimizer data in host memory.
- [copyDataFromDeviceMemoryToBytes:length:synchronizeWithDevice:](mlctensor/copydatafromdevicememory%28tobytes_length_synchronizewithdevice_%29.md): Deprecated. Copies tensor data from device memory to user-specified memory.
- [bindAndWriteData:toDevice:](mlctensor/bindandwritedata%28__to_%29.md): Deprecated. Associates the given data to the tensor, and if the device is a GPU, also copies the data to the device memory.
- [bindOptimizerData:deviceData:](mlctensor/bindoptimizerdata%28__devicedata_%29.md): Deprecated. Associates the optimizer and device data buffers you specify to the tensor.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Components

- [MLCPlatform](mlcplatform.md): Deprecated. A utility class for setting global properties in the framework.
- [Layers](layers.md): Create and inspect layers that encapsulate operations and configuration details to receive, process, and output tensors.
- [Training and Validation](training-and-validation.md): Create, train, and validate a graph to produce acceptable prediction results.
