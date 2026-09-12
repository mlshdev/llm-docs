> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphpooling4dopdescriptor](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphpooling4dopdescriptor)

# MPSGraphPooling4DOpDescriptor (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The class that defines the parameters for a 4D pooling operation.

## Declaration

```swift
class MPSGraphPooling4DOpDescriptor
```

<a id="overview"></a>

## Overview

Use this descriptor with the following methods:

- [maxPooling4D(\_:descriptor:name:)](mpsgraph/maxpooling4d%28__descriptor_name_%29.md)
- [maxPooling4DReturnIndices(\_:descriptor:name:)](mpsgraph/maxpooling4dreturnindices%28__descriptor_name_%29.md)
- [maxPooling4DGradient(\_:source:descriptor:name:)](mpsgraph/maxpooling4dgradient%28__source_descriptor_name_%29.md)
- [maxPooling4DGradient(withGradientTensor:indicesTensor:outputShape:descriptor:name:)](mpsgraph/maxpooling4dgradient%28withgradienttensor_indicestensor_outputshape_descriptor_name_%29.md)
- [maxPooling4DGradient(withGradientTensor:indicesTensor:outputShapeTensor:descriptor:name:)](mpsgraph/maxpooling4dgradient%28withgradienttensor_indicestensor_outputshapetensor_descriptor_name_%29.md)
- [avgPooling4D(\_:descriptor:name:)](mpsgraph/avgpooling4d%28__descriptor_name_%29.md)
- [avgPooling4DGradient(\_:source:descriptor:name:)](mpsgraph/avgpooling4dgradient%28__source_descriptor_name_%29.md)
- [L2NormPooling4D(\_:descriptor:name:)](mpsgraph/l2normpooling4d%28__descriptor_name_%29.md)
- [L2NormPooling4DGradient(\_:source:descriptor:name:)](mpsgraph/l2normpooling4dgradient%28__source_descriptor_name_%29.md)

## Topics

### Initializers

- [init(kernelSizes:paddingStyle:)](mpsgraphpooling4dopdescriptor/init%28kernelsizes_paddingstyle_%29.md): Creates a 4D pooling descriptor with default values.
- [init(kernelSizes:strides:dilationRates:paddingValues:paddingStyle:)](mpsgraphpooling4dopdescriptor/init%28kernelsizes_strides_dilationrates_paddingvalues_paddingstyle_%29.md): Creates a 4D pooling descriptor with given values.

### Instance Properties

- [ceilMode](mpsgraphpooling4dopdescriptor/ceilmode.md): Affects how MPSGraph computes the output size: if set to `YES` then output size is computed by rounding up instead of down when dividing input size by stride.
- [dilationRates](mpsgraphpooling4dopdescriptor/dilationrates.md): Defines dilation rates for spatial dimensions. Must be four numbers, one for each spatial dimension, fastest running index last.
- [includeZeroPadToAverage](mpsgraphpooling4dopdescriptor/includezeropadtoaverage.md): Defines a mode for average pooling, where samples outside the input tensor count as zeroes in the average computation.
- [kernelSizes](mpsgraphpooling4dopdescriptor/kernelsizes.md): Defines the pooling window size.
- [paddingStyle](mpsgraphpooling4dopdescriptor/paddingstyle.md): Defines what kind of padding graph applies to the operation.
- [paddingValues](mpsgraphpooling4dopdescriptor/paddingvalues.md): Defines padding values for spatial dimensions which must be eight numbers, two for each spatial dimension.
- [returnIndicesDataType](mpsgraphpooling4dopdescriptor/returnindicesdatatype.md): Defines the data type for returned indices.
- [returnIndicesMode](mpsgraphpooling4dopdescriptor/returnindicesmode.md): Defines the mode for returned indices of maximum values within each pooling window.
- [strides](mpsgraphpooling4dopdescriptor/strides.md): Defines strides for spatial dimensions. Must be four numbers, one for each spatial dimension, fastest running index last.

## Relationships

### Inherits From

- [MPSGraphObject](mpsgraphobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Classes

- [MPSGraph](mpsgraph.md): The optimized representation of a compute graph of operations and tensors.
- [MPSGraphCompilationDescriptor](mpsgraphcompilationdescriptor.md): A class that consists of all the levers for compiling graphs.
- [MPSGraphConvolution2DOpDescriptor](mpsgraphconvolution2dopdescriptor.md): A class that describes the properties of a 2D-convolution operator.
- [MPSGraphConvolution3DOpDescriptor](mpsgraphconvolution3dopdescriptor.md): A class that describes the properties of a 3D-convolution operator.
- [MPSGraphCreateSparseOpDescriptor](mpsgraphcreatesparseopdescriptor.md): A class that describes the properties of a create sparse operation.
- [MPSGraphDepthwiseConvolution2DOpDescriptor](mpsgraphdepthwiseconvolution2dopdescriptor.md): A class that defines the parameters for a 2D-depthwise convolution operation.
- [MPSGraphDepthwiseConvolution3DOpDescriptor](mpsgraphdepthwiseconvolution3dopdescriptor.md): The class that defines the parameters for a 3D-depthwise convolution operation.
- [MPSGraphDevice](mpsgraphdevice.md): A class that describes the compute device.
- [MPSGraphExecutable](mpsgraphexecutable.md): The compiled representation of a compute graph executable.
- [MPSGraphExecutableExecutionDescriptor](mpsgraphexecutableexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule executable execution.
- [MPSGraphExecutableSerializationDescriptor](mpsgraphexecutableserializationdescriptor.md): A class that consists of all the levers to serialize an executable.
- [MPSGraphExecutionDescriptor](mpsgraphexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule graph execution.
- [MPSGraphFFTDescriptor](mpsgraphfftdescriptor.md): The class that defines the parameters for a fast Fourier transform (FFT) operation.
- [MPSGraphGRUDescriptor](mpsgraphgrudescriptor.md): The class that defines the parameters for a gated recurrent unit (GRU) operation.
- [MPSGraphImToColOpDescriptor](mpsgraphimtocolopdescriptor.md): The class that defines the parameters for an image to column or column to image operation.

# MPSGraphPooling4DOpDescriptor (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The class that defines the parameters for a 4D pooling operation.

## Declaration

```objectivec
@interface MPSGraphPooling4DOpDescriptor : MPSGraphObject
```

<a id="overview"></a>

## Overview

Use this descriptor with the following methods:

- [maxPooling4DWithSourceTensor:descriptor:name:](mpsgraph/maxpooling4d%28__descriptor_name_%29.md)
- [maxPooling4DReturnIndicesWithSourceTensor:descriptor:name:](mpsgraph/maxpooling4dreturnindices%28__descriptor_name_%29.md)
- [maxPooling4DGradientWithGradientTensor:sourceTensor:descriptor:name:](mpsgraph/maxpooling4dgradient%28__source_descriptor_name_%29.md)
- [maxPooling4DGradientWithGradientTensor:indicesTensor:outputShape:descriptor:name:](mpsgraph/maxpooling4dgradient%28withgradienttensor_indicestensor_outputshape_descriptor_name_%29.md)
- [maxPooling4DGradientWithGradientTensor:indicesTensor:outputShapeTensor:descriptor:name:](mpsgraph/maxpooling4dgradient%28withgradienttensor_indicestensor_outputshapetensor_descriptor_name_%29.md)
- [avgPooling4DWithSourceTensor:descriptor:name:](mpsgraph/avgpooling4d%28__descriptor_name_%29.md)
- [avgPooling4DGradientWithGradientTensor:sourceTensor:descriptor:name:](mpsgraph/avgpooling4dgradient%28__source_descriptor_name_%29.md)
- [L2NormPooling4DWithSourceTensor:descriptor:name:](mpsgraph/l2normpooling4d%28__descriptor_name_%29.md)
- [L2NormPooling4DGradientWithGradientTensor:sourceTensor:descriptor:name:](mpsgraph/l2normpooling4dgradient%28__source_descriptor_name_%29.md)

## Topics

### Instance Properties

- [ceilMode](mpsgraphpooling4dopdescriptor/ceilmode.md): Affects how MPSGraph computes the output size: if set to `YES` then output size is computed by rounding up instead of down when dividing input size by stride.
- [dilationRates](mpsgraphpooling4dopdescriptor/dilationrates.md): Defines dilation rates for spatial dimensions. Must be four numbers, one for each spatial dimension, fastest running index last.
- [includeZeroPadToAverage](mpsgraphpooling4dopdescriptor/includezeropadtoaverage.md): Defines a mode for average pooling, where samples outside the input tensor count as zeroes in the average computation.
- [kernelSizes](mpsgraphpooling4dopdescriptor/kernelsizes.md): Defines the pooling window size.
- [paddingStyle](mpsgraphpooling4dopdescriptor/paddingstyle.md): Defines what kind of padding graph applies to the operation.
- [paddingValues](mpsgraphpooling4dopdescriptor/paddingvalues.md): Defines padding values for spatial dimensions which must be eight numbers, two for each spatial dimension.
- [returnIndicesDataType](mpsgraphpooling4dopdescriptor/returnindicesdatatype.md): Defines the data type for returned indices.
- [returnIndicesMode](mpsgraphpooling4dopdescriptor/returnindicesmode.md): Defines the mode for returned indices of maximum values within each pooling window.
- [strides](mpsgraphpooling4dopdescriptor/strides.md): Defines strides for spatial dimensions. Must be four numbers, one for each spatial dimension, fastest running index last.

### Type Methods

- [descriptorWithKernelSizes:paddingStyle:](mpsgraphpooling4dopdescriptor/init%28kernelsizes_paddingstyle_%29.md): Creates a 4D pooling descriptor with default values.
- [descriptorWithKernelSizes:strides:dilationRates:paddingValues:paddingStyle:](mpsgraphpooling4dopdescriptor/init%28kernelsizes_strides_dilationrates_paddingvalues_paddingstyle_%29.md): Creates a 4D pooling descriptor with given values.

## Relationships

### Inherits From

- [MPSGraphObject](mpsgraphobject.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Classes

- [MPSGraph](mpsgraph.md): The optimized representation of a compute graph of operations and tensors.
- [MPSGraphCompilationDescriptor](mpsgraphcompilationdescriptor.md): A class that consists of all the levers for compiling graphs.
- [MPSGraphConvolution2DOpDescriptor](mpsgraphconvolution2dopdescriptor.md): A class that describes the properties of a 2D-convolution operator.
- [MPSGraphConvolution3DOpDescriptor](mpsgraphconvolution3dopdescriptor.md): A class that describes the properties of a 3D-convolution operator.
- [MPSGraphCreateSparseOpDescriptor](mpsgraphcreatesparseopdescriptor.md): A class that describes the properties of a create sparse operation.
- [MPSGraphDepthwiseConvolution2DOpDescriptor](mpsgraphdepthwiseconvolution2dopdescriptor.md): A class that defines the parameters for a 2D-depthwise convolution operation.
- [MPSGraphDepthwiseConvolution3DOpDescriptor](mpsgraphdepthwiseconvolution3dopdescriptor.md): The class that defines the parameters for a 3D-depthwise convolution operation.
- [MPSGraphDevice](mpsgraphdevice.md): A class that describes the compute device.
- [MPSGraphExecutable](mpsgraphexecutable.md): The compiled representation of a compute graph executable.
- [MPSGraphExecutableExecutionDescriptor](mpsgraphexecutableexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule executable execution.
- [MPSGraphExecutableSerializationDescriptor](mpsgraphexecutableserializationdescriptor.md): A class that consists of all the levers to serialize an executable.
- [MPSGraphExecutionDescriptor](mpsgraphexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule graph execution.
- [MPSGraphFFTDescriptor](mpsgraphfftdescriptor.md): The class that defines the parameters for a fast Fourier transform (FFT) operation.
- [MPSGraphGRUDescriptor](mpsgraphgrudescriptor.md): The class that defines the parameters for a gated recurrent unit (GRU) operation.
- [MPSGraphImToColOpDescriptor](mpsgraphimtocolopdescriptor.md): The class that defines the parameters for an image to column or column to image operation.
