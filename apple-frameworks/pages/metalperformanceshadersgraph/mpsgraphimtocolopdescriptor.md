> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphimtocolopdescriptor](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphimtocolopdescriptor)

# MPSGraphImToColOpDescriptor (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The class that defines the parameters for an image to column or column to image operation.

## Declaration

```swift
class MPSGraphImToColOpDescriptor
```

<a id="overview"></a>

## Overview

Use this descriptor with the following [MPSGraph](mpsgraph.md) methods:

- [imToCol(\_:descriptor:name:)](mpsgraph/imtocol%28__descriptor_name_%29.md)
- [colToIm(\_:outputShape:descriptor:name:)](mpsgraph/coltoim%28__outputshape_descriptor_name_%29.md)

## Topics

### Initializers

- [init(kernelWidth:kernelHeight:strideInX:strideInY:dilationRateInX:dilationRateInY:dataLayout:)](mpsgraphimtocolopdescriptor/init%28kernelwidth_kernelheight_strideinx_strideiny_dilationrateinx_dilationrateiny_datalayout_%29.md): Creates column to image descriptor with given values for parameters.
- [init(kernelWidth:kernelHeight:strideInX:strideInY:dilationRateInX:dilationRateInY:paddingLeft:paddingRight:paddingTop:paddingBottom:dataLayout:)](mpsgraphimtocolopdescriptor/init%28kernelwidth_kernelheight_strideinx_strideiny_dilationrateinx_dilationrateiny_paddingleft_paddingright_paddingtop_paddingbottom_datalayout_%29.md): Creates an image to column descriptor with given values for parameters.

### Instance Properties

- [dataLayout](mpsgraphimtocolopdescriptor/datalayout.md): The property that defines the layout of source or output tensor. e.g. `batch x channels x width x height` for `NCHW` layout
- [dilationRateInX](mpsgraphimtocolopdescriptor/dilationrateinx.md): The property that defines the dilation in width dimension.
- [dilationRateInY](mpsgraphimtocolopdescriptor/dilationrateiny.md): The property that defines the dilation in height dimension.
- [kernelHeight](mpsgraphimtocolopdescriptor/kernelheight.md): The property that defines the kernel size in height dimension.
- [kernelWidth](mpsgraphimtocolopdescriptor/kernelwidth.md): The property that defines the kernel size in width dimension.
- [paddingBottom](mpsgraphimtocolopdescriptor/paddingbottom.md): The property that defines the padding in height dimension at the bottom.
- [paddingLeft](mpsgraphimtocolopdescriptor/paddingleft.md): The property that defines the padding in width dimension on the left side.
- [paddingRight](mpsgraphimtocolopdescriptor/paddingright.md): The property that defines the padding in width dimension on the right side.
- [paddingTop](mpsgraphimtocolopdescriptor/paddingtop.md): The property that defines the padding in height dimension at the top.
- [strideInX](mpsgraphimtocolopdescriptor/strideinx.md): The property that defines the stride in width dimension.
- [strideInY](mpsgraphimtocolopdescriptor/strideiny.md): The property that defines the stride in height dimension.

### Instance Methods

- [setExplicitPaddingWithPaddingLeft(\_:paddingRight:paddingTop:paddingBottom:)](mpsgraphimtocolopdescriptor/setexplicitpaddingwithpaddingleft%28__paddingright_paddingtop_paddingbottom_%29.md): Sets the descriptor’s padding to the given values.

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
- [MPSGraphLSTMDescriptor](mpsgraphlstmdescriptor.md): The class that defines the parameters for a long short-term memory (LSTM) operation.

# MPSGraphImToColOpDescriptor (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The class that defines the parameters for an image to column or column to image operation.

## Declaration

```objectivec
@interface MPSGraphImToColOpDescriptor : MPSGraphObject
```

<a id="overview"></a>

## Overview

Use this descriptor with the following [MPSGraph](mpsgraph.md) methods:

- [imToColWithSourceTensor:descriptor:name:](mpsgraph/imtocol%28__descriptor_name_%29.md)
- [colToImWithSourceTensor:outputShape:descriptor:name:](mpsgraph/coltoim%28__outputshape_descriptor_name_%29.md)

## Topics

### Instance Properties

- [dataLayout](mpsgraphimtocolopdescriptor/datalayout.md): The property that defines the layout of source or output tensor. e.g. `batch x channels x width x height` for `NCHW` layout
- [dilationRateInX](mpsgraphimtocolopdescriptor/dilationrateinx.md): The property that defines the dilation in width dimension.
- [dilationRateInY](mpsgraphimtocolopdescriptor/dilationrateiny.md): The property that defines the dilation in height dimension.
- [kernelHeight](mpsgraphimtocolopdescriptor/kernelheight.md): The property that defines the kernel size in height dimension.
- [kernelWidth](mpsgraphimtocolopdescriptor/kernelwidth.md): The property that defines the kernel size in width dimension.
- [paddingBottom](mpsgraphimtocolopdescriptor/paddingbottom.md): The property that defines the padding in height dimension at the bottom.
- [paddingLeft](mpsgraphimtocolopdescriptor/paddingleft.md): The property that defines the padding in width dimension on the left side.
- [paddingRight](mpsgraphimtocolopdescriptor/paddingright.md): The property that defines the padding in width dimension on the right side.
- [paddingTop](mpsgraphimtocolopdescriptor/paddingtop.md): The property that defines the padding in height dimension at the top.
- [strideInX](mpsgraphimtocolopdescriptor/strideinx.md): The property that defines the stride in width dimension.
- [strideInY](mpsgraphimtocolopdescriptor/strideiny.md): The property that defines the stride in height dimension.

### Instance Methods

- [setExplicitPaddingWithPaddingLeft:paddingRight:paddingTop:paddingBottom:](mpsgraphimtocolopdescriptor/setexplicitpaddingwithpaddingleft%28__paddingright_paddingtop_paddingbottom_%29.md): Sets the descriptor’s padding to the given values.

### Type Methods

- [descriptorWithKernelWidth:kernelHeight:strideInX:strideInY:dilationRateInX:dilationRateInY:dataLayout:](mpsgraphimtocolopdescriptor/init%28kernelwidth_kernelheight_strideinx_strideiny_dilationrateinx_dilationrateiny_datalayout_%29.md): Creates column to image descriptor with given values for parameters.
- [descriptorWithKernelWidth:kernelHeight:strideInX:strideInY:dilationRateInX:dilationRateInY:paddingLeft:paddingRight:paddingTop:paddingBottom:dataLayout:](mpsgraphimtocolopdescriptor/init%28kernelwidth_kernelheight_strideinx_strideiny_dilationrateinx_dilationrateiny_paddingleft_paddingright_paddingtop_paddingbottom_datalayout_%29.md): Creates an image to column descriptor with given values for parameters.

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
- [MPSGraphLSTMDescriptor](mpsgraphlstmdescriptor.md): The class that defines the parameters for a long short-term memory (LSTM) operation.
