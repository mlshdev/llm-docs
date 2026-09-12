> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphpooling2dopdescriptor](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphpooling2dopdescriptor)

# MPSGraphPooling2DOpDescriptor (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The class that defines the parameters for a 2D pooling operation.

## Declaration

```swift
class MPSGraphPooling2DOpDescriptor
```

<a id="overview"></a>

## Overview

Use this descriptor with the following methods:

- [maxPooling2D(withSourceTensor:descriptor:name:)](mpsgraph/maxpooling2d%28withsourcetensor_descriptor_name_%29.md)
- [maxPooling2DReturnIndices(\_:descriptor:name:)](mpsgraph/maxpooling2dreturnindices%28__descriptor_name_%29.md)
- [maxPooling2DGradient(withGradientTensor:sourceTensor:descriptor:name:)](mpsgraph/maxpooling2dgradient%28withgradienttensor_sourcetensor_descriptor_name_%29.md)
- [maxPooling2DGradient(withGradientTensor:indicesTensor:outputShape:descriptor:name:)](mpsgraph/maxpooling2dgradient%28withgradienttensor_indicestensor_outputshape_descriptor_name_%29.md)
- [maxPooling2DGradient(withGradientTensor:indicesTensor:outputShapeTensor:descriptor:name:)](mpsgraph/maxpooling2dgradient%28withgradienttensor_indicestensor_outputshapetensor_descriptor_name_%29.md)
- [avgPooling2D(withSourceTensor:descriptor:name:)](mpsgraph/avgpooling2d%28withsourcetensor_descriptor_name_%29.md)
- [avgPooling2DGradient(withGradientTensor:sourceTensor:descriptor:name:)](mpsgraph/avgpooling2dgradient%28withgradienttensor_sourcetensor_descriptor_name_%29.md)

## Topics

### Initializers

- [init(kernelWidth:kernelHeight:strideInX:strideInY:dilationRateInX:dilationRateInY:paddingLeft:paddingRight:paddingTop:paddingBottom:paddingStyle:dataLayout:)](mpsgraphpooling2dopdescriptor/init%28kernelwidth_kernelheight_strideinx_strideiny_dilationrateinx_dilationrateiny_paddingleft_paddingright_paddingtop_paddingbottom_paddingstyle_datalayout_%29.md): Creates a 2D pooling descriptor with given values.
- [init(kernelWidth:kernelHeight:strideInX:strideInY:paddingStyle:dataLayout:)](mpsgraphpooling2dopdescriptor/init%28kernelwidth_kernelheight_strideinx_strideiny_paddingstyle_datalayout_%29.md): Creates a 2D pooling descriptor with given values.

### Instance Properties

- [ceilMode](mpsgraphpooling2dopdescriptor/ceilmode.md): Affects how the graph computes the output size.
- [dataLayout](mpsgraphpooling2dopdescriptor/datalayout.md): Defines the data layout of the input data in the forward pass. See: [MPSGraphTensorNamedDataLayout](mpsgraphtensornameddatalayout.md).
- [dilationRateInX](mpsgraphpooling2dopdescriptor/dilationrateinx.md): Defines the dilation rate for the width dimension.
- [dilationRateInY](mpsgraphpooling2dopdescriptor/dilationrateiny.md): Defines the dilation rate for the height dimension.
- [includeZeroPadToAverage](mpsgraphpooling2dopdescriptor/includezeropadtoaverage.md): Defines a mode for average pooling, where samples outside the input tensor count as zeroes in the average computation.
- [kernelHeight](mpsgraphpooling2dopdescriptor/kernelheight.md): Defines the pooling window size for the height dimension.
- [kernelWidth](mpsgraphpooling2dopdescriptor/kernelwidth.md): Defines the pooling window size for the width dimension.
- [paddingBottom](mpsgraphpooling2dopdescriptor/paddingbottom.md): Defines the explicit padding value for the height dimension to add after the data.
- [paddingLeft](mpsgraphpooling2dopdescriptor/paddingleft.md): Defines the explicit padding value for the width dimension to add before the data.
- [paddingRight](mpsgraphpooling2dopdescriptor/paddingright.md): Defines the explicit padding value for the width dimension to add after the data.
- [paddingStyle](mpsgraphpooling2dopdescriptor/paddingstyle.md): Defines what kind of padding graph applies to the operation.
- [paddingTop](mpsgraphpooling2dopdescriptor/paddingtop.md): Defines the explicit padding value for the height dimension to add before the data.
- [returnIndicesDataType](mpsgraphpooling2dopdescriptor/returnindicesdatatype.md): Defines the data type for returned indices. Use this in conjunction with [maxPooling2DReturnIndices(\_:descriptor:name:)](mpsgraph/maxpooling2dreturnindices%28__descriptor_name_%29.md) API. Currently MPSGraph supports the following datatypes: `MPSDataTypeInt32`. Default value: `MPSDataTypeInt32`.
- [returnIndicesMode](mpsgraphpooling2dopdescriptor/returnindicesmode.md): Defines the mode for returned indices of maximum values within each pooling window. Use this in conjunction with [maxPooling2DReturnIndices(\_:descriptor:name:)](mpsgraph/maxpooling2dreturnindices%28__descriptor_name_%29.md) API. If `returnIndicesMode = MPSGraphPoolingReturnIndicesNone` then only the first result MPSGraph returns from [maxPooling2DReturnIndices(\_:descriptor:name:)](mpsgraph/maxpooling2dreturnindices%28__descriptor_name_%29.md) will be valid and using the second result will assert. Default value: `MPSGraphPoolingReturnIndicesNone`.
- [strideInX](mpsgraphpooling2dopdescriptor/strideinx.md): Defines the stride for the width dimension.
- [strideInY](mpsgraphpooling2dopdescriptor/strideiny.md): Defines the stride for the height dimension.

### Instance Methods

- [setExplicitPaddingWithPaddingLeft(\_:paddingRight:paddingTop:paddingBottom:)](mpsgraphpooling2dopdescriptor/setexplicitpaddingwithpaddingleft%28__paddingright_paddingtop_paddingbottom_%29.md): Sets the explicit padding values and sets padding style to explicit.

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

# MPSGraphPooling2DOpDescriptor (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The class that defines the parameters for a 2D pooling operation.

## Declaration

```objectivec
@interface MPSGraphPooling2DOpDescriptor : MPSGraphObject
```

<a id="overview"></a>

## Overview

Use this descriptor with the following methods:

- [maxPooling2DWithSourceTensor:descriptor:name:](mpsgraph/maxpooling2d%28withsourcetensor_descriptor_name_%29.md)
- [maxPooling2DReturnIndicesWithSourceTensor:descriptor:name:](mpsgraph/maxpooling2dreturnindices%28__descriptor_name_%29.md)
- [maxPooling2DGradientWithGradientTensor:sourceTensor:descriptor:name:](mpsgraph/maxpooling2dgradient%28withgradienttensor_sourcetensor_descriptor_name_%29.md)
- [maxPooling2DGradientWithGradientTensor:indicesTensor:outputShape:descriptor:name:](mpsgraph/maxpooling2dgradient%28withgradienttensor_indicestensor_outputshape_descriptor_name_%29.md)
- [maxPooling2DGradientWithGradientTensor:indicesTensor:outputShapeTensor:descriptor:name:](mpsgraph/maxpooling2dgradient%28withgradienttensor_indicestensor_outputshapetensor_descriptor_name_%29.md)
- [avgPooling2DWithSourceTensor:descriptor:name:](mpsgraph/avgpooling2d%28withsourcetensor_descriptor_name_%29.md)
- [avgPooling2DGradientWithGradientTensor:sourceTensor:descriptor:name:](mpsgraph/avgpooling2dgradient%28withgradienttensor_sourcetensor_descriptor_name_%29.md)

## Topics

### Instance Properties

- [ceilMode](mpsgraphpooling2dopdescriptor/ceilmode.md): Affects how the graph computes the output size.
- [dataLayout](mpsgraphpooling2dopdescriptor/datalayout.md): Defines the data layout of the input data in the forward pass. See: [MPSGraphTensorNamedDataLayout](mpsgraphtensornameddatalayout.md).
- [dilationRateInX](mpsgraphpooling2dopdescriptor/dilationrateinx.md): Defines the dilation rate for the width dimension.
- [dilationRateInY](mpsgraphpooling2dopdescriptor/dilationrateiny.md): Defines the dilation rate for the height dimension.
- [includeZeroPadToAverage](mpsgraphpooling2dopdescriptor/includezeropadtoaverage.md): Defines a mode for average pooling, where samples outside the input tensor count as zeroes in the average computation.
- [kernelHeight](mpsgraphpooling2dopdescriptor/kernelheight.md): Defines the pooling window size for the height dimension.
- [kernelWidth](mpsgraphpooling2dopdescriptor/kernelwidth.md): Defines the pooling window size for the width dimension.
- [paddingBottom](mpsgraphpooling2dopdescriptor/paddingbottom.md): Defines the explicit padding value for the height dimension to add after the data.
- [paddingLeft](mpsgraphpooling2dopdescriptor/paddingleft.md): Defines the explicit padding value for the width dimension to add before the data.
- [paddingRight](mpsgraphpooling2dopdescriptor/paddingright.md): Defines the explicit padding value for the width dimension to add after the data.
- [paddingStyle](mpsgraphpooling2dopdescriptor/paddingstyle.md): Defines what kind of padding graph applies to the operation.
- [paddingTop](mpsgraphpooling2dopdescriptor/paddingtop.md): Defines the explicit padding value for the height dimension to add before the data.
- [returnIndicesDataType](mpsgraphpooling2dopdescriptor/returnindicesdatatype.md): Defines the data type for returned indices. Use this in conjunction with [maxPooling2DReturnIndicesWithSourceTensor:descriptor:name:](mpsgraph/maxpooling2dreturnindices%28__descriptor_name_%29.md) API. Currently MPSGraph supports the following datatypes: `MPSDataTypeInt32`. Default value: `MPSDataTypeInt32`.
- [returnIndicesMode](mpsgraphpooling2dopdescriptor/returnindicesmode.md): Defines the mode for returned indices of maximum values within each pooling window. Use this in conjunction with [maxPooling2DReturnIndicesWithSourceTensor:descriptor:name:](mpsgraph/maxpooling2dreturnindices%28__descriptor_name_%29.md) API. If `returnIndicesMode = MPSGraphPoolingReturnIndicesNone` then only the first result MPSGraph returns from [maxPooling2DReturnIndicesWithSourceTensor:descriptor:name:](mpsgraph/maxpooling2dreturnindices%28__descriptor_name_%29.md) will be valid and using the second result will assert. Default value: `MPSGraphPoolingReturnIndicesNone`.
- [strideInX](mpsgraphpooling2dopdescriptor/strideinx.md): Defines the stride for the width dimension.
- [strideInY](mpsgraphpooling2dopdescriptor/strideiny.md): Defines the stride for the height dimension.

### Instance Methods

- [setExplicitPaddingWithPaddingLeft:paddingRight:paddingTop:paddingBottom:](mpsgraphpooling2dopdescriptor/setexplicitpaddingwithpaddingleft%28__paddingright_paddingtop_paddingbottom_%29.md): Sets the explicit padding values and sets padding style to explicit.

### Type Methods

- [descriptorWithKernelWidth:kernelHeight:strideInX:strideInY:dilationRateInX:dilationRateInY:paddingLeft:paddingRight:paddingTop:paddingBottom:paddingStyle:dataLayout:](mpsgraphpooling2dopdescriptor/init%28kernelwidth_kernelheight_strideinx_strideiny_dilationrateinx_dilationrateiny_paddingleft_paddingright_paddingtop_paddingbottom_paddingstyle_datalayout_%29.md): Creates a 2D pooling descriptor with given values.
- [descriptorWithKernelWidth:kernelHeight:strideInX:strideInY:paddingStyle:dataLayout:](mpsgraphpooling2dopdescriptor/init%28kernelwidth_kernelheight_strideinx_strideiny_paddingstyle_datalayout_%29.md): Creates a 2D pooling descriptor with given values.

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
