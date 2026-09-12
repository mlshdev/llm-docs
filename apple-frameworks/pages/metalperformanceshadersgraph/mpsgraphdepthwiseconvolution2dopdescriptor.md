> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphdepthwiseconvolution2dopdescriptor](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphdepthwiseconvolution2dopdescriptor)

# MPSGraphDepthwiseConvolution2DOpDescriptor (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A class that defines the parameters for  a 2D-depthwise convolution operation.

## Declaration

```swift
class MPSGraphDepthwiseConvolution2DOpDescriptor
```

<a id="overview"></a>

## Overview

An `MPSGraphDepthwiseConvolution2DOpDescriptor` defines constant parameters for 2D-depthwise convolutions. Use this class with [depthwiseConvolution2D(\_:weights:descriptor:name:)](mpsgraph/depthwiseconvolution2d%28__weights_descriptor_name_%29.md), [depthwiseConvolution2DDataGradient(\_:weights:outputShape:descriptor:name:)](mpsgraph/depthwiseconvolution2ddatagradient%28__weights_outputshape_descriptor_name_%29.md), and [depthwiseConvolution2DWeightsGradient(\_:source:outputShape:descriptor:name:)](mpsgraph/depthwiseconvolution2dweightsgradient%28__source_outputshape_descriptor_name_%29.md) methods.

## Topics

### Initializers

- [init(dataLayout:weightsLayout:)](mpsgraphdepthwiseconvolution2dopdescriptor/init%28datalayout_weightslayout_%29.md): Creates a 2D-depthwise convolution descriptor with given properties and default values.
- [init(strideInX:strideInY:dilationRateInX:dilationRateInY:paddingLeft:paddingRight:paddingTop:paddingBottom:paddingStyle:dataLayout:weightsLayout:)](mpsgraphdepthwiseconvolution2dopdescriptor/init%28strideinx_strideiny_dilationrateinx_dilationrateiny_paddingleft_paddingright_paddingtop_paddingbottom_paddingstyle_datalayout_weightslayout_%29.md): Creates a 2D-depthwise convolution descriptor with given values.

### Instance Properties

- [dataLayout](mpsgraphdepthwiseconvolution2dopdescriptor/datalayout.md): The data layout of the input data in the forward pass.
- [dilationRateInX](mpsgraphdepthwiseconvolution2dopdescriptor/dilationrateinx.md): The dilation rate for the x dimension.
- [dilationRateInY](mpsgraphdepthwiseconvolution2dopdescriptor/dilationrateiny.md): The dilation rate for the y dimension.
- [paddingBottom](mpsgraphdepthwiseconvolution2dopdescriptor/paddingbottom.md): The explicit padding value for the y dimension operation adds after the data.
- [paddingLeft](mpsgraphdepthwiseconvolution2dopdescriptor/paddingleft.md): The explicit padding value for the x dimension the operation adds before the data.
- [paddingRight](mpsgraphdepthwiseconvolution2dopdescriptor/paddingright.md): The explicit padding value for the x dimension operation adds after the data.
- [paddingStyle](mpsgraphdepthwiseconvolution2dopdescriptor/paddingstyle.md): The padding style for the operation.
- [paddingTop](mpsgraphdepthwiseconvolution2dopdescriptor/paddingtop.md): The explicit padding value for the y dimension operation adds before the data.
- [strideInX](mpsgraphdepthwiseconvolution2dopdescriptor/strideinx.md): The stride for the x dimension.
- [strideInY](mpsgraphdepthwiseconvolution2dopdescriptor/strideiny.md): The stride for the y dimension.
- [weightsLayout](mpsgraphdepthwiseconvolution2dopdescriptor/weightslayout.md): The data layout of the weights.

### Instance Methods

- [setExplicitPaddingWithPaddingLeft(\_:paddingRight:paddingTop:paddingBottom:)](mpsgraphdepthwiseconvolution2dopdescriptor/setexplicitpaddingwithpaddingleft%28__paddingright_paddingtop_paddingbottom_%29.md): Sets the explicit padding values.

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
- [MPSGraphDepthwiseConvolution3DOpDescriptor](mpsgraphdepthwiseconvolution3dopdescriptor.md): The class that defines the parameters for a 3D-depthwise convolution operation.
- [MPSGraphDevice](mpsgraphdevice.md): A class that describes the compute device.
- [MPSGraphExecutable](mpsgraphexecutable.md): The compiled representation of a compute graph executable.
- [MPSGraphExecutableExecutionDescriptor](mpsgraphexecutableexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule executable execution.
- [MPSGraphExecutableSerializationDescriptor](mpsgraphexecutableserializationdescriptor.md): A class that consists of all the levers to serialize an executable.
- [MPSGraphExecutionDescriptor](mpsgraphexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule graph execution.
- [MPSGraphFFTDescriptor](mpsgraphfftdescriptor.md): The class that defines the parameters for a fast Fourier transform (FFT) operation.
- [MPSGraphGRUDescriptor](mpsgraphgrudescriptor.md): The class that defines the parameters for a gated recurrent unit (GRU) operation.
- [MPSGraphImToColOpDescriptor](mpsgraphimtocolopdescriptor.md): The class that defines the parameters for an image to column or column to image operation.
- [MPSGraphLSTMDescriptor](mpsgraphlstmdescriptor.md): The class that defines the parameters for a long short-term memory (LSTM) operation.

# MPSGraphDepthwiseConvolution2DOpDescriptor (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A class that defines the parameters for  a 2D-depthwise convolution operation.

## Declaration

```objectivec
@interface MPSGraphDepthwiseConvolution2DOpDescriptor : MPSGraphObject
```

<a id="overview"></a>

## Overview

An `MPSGraphDepthwiseConvolution2DOpDescriptor` defines constant parameters for 2D-depthwise convolutions. Use this class with [depthwiseConvolution2DWithSourceTensor:weightsTensor:descriptor:name:](mpsgraph/depthwiseconvolution2d%28__weights_descriptor_name_%29.md), [depthwiseConvolution2DDataGradientWithIncomingGradientTensor:weightsTensor:outputShape:descriptor:name:](mpsgraph/depthwiseconvolution2ddatagradient%28__weights_outputshape_descriptor_name_%29.md), and [depthwiseConvolution2DWeightsGradientWithIncomingGradientTensor:sourceTensor:outputShape:descriptor:name:](mpsgraph/depthwiseconvolution2dweightsgradient%28__source_outputshape_descriptor_name_%29.md) methods.

## Topics

### Instance Properties

- [dataLayout](mpsgraphdepthwiseconvolution2dopdescriptor/datalayout.md): The data layout of the input data in the forward pass.
- [dilationRateInX](mpsgraphdepthwiseconvolution2dopdescriptor/dilationrateinx.md): The dilation rate for the x dimension.
- [dilationRateInY](mpsgraphdepthwiseconvolution2dopdescriptor/dilationrateiny.md): The dilation rate for the y dimension.
- [paddingBottom](mpsgraphdepthwiseconvolution2dopdescriptor/paddingbottom.md): The explicit padding value for the y dimension operation adds after the data.
- [paddingLeft](mpsgraphdepthwiseconvolution2dopdescriptor/paddingleft.md): The explicit padding value for the x dimension the operation adds before the data.
- [paddingRight](mpsgraphdepthwiseconvolution2dopdescriptor/paddingright.md): The explicit padding value for the x dimension operation adds after the data.
- [paddingStyle](mpsgraphdepthwiseconvolution2dopdescriptor/paddingstyle.md): The padding style for the operation.
- [paddingTop](mpsgraphdepthwiseconvolution2dopdescriptor/paddingtop.md): The explicit padding value for the y dimension operation adds before the data.
- [strideInX](mpsgraphdepthwiseconvolution2dopdescriptor/strideinx.md): The stride for the x dimension.
- [strideInY](mpsgraphdepthwiseconvolution2dopdescriptor/strideiny.md): The stride for the y dimension.
- [weightsLayout](mpsgraphdepthwiseconvolution2dopdescriptor/weightslayout.md): The data layout of the weights.

### Instance Methods

- [setExplicitPaddingWithPaddingLeft:paddingRight:paddingTop:paddingBottom:](mpsgraphdepthwiseconvolution2dopdescriptor/setexplicitpaddingwithpaddingleft%28__paddingright_paddingtop_paddingbottom_%29.md): Sets the explicit padding values.

### Type Methods

- [descriptorWithDataLayout:weightsLayout:](mpsgraphdepthwiseconvolution2dopdescriptor/init%28datalayout_weightslayout_%29.md): Creates a 2D-depthwise convolution descriptor with given properties and default values.
- [descriptorWithStrideInX:strideInY:dilationRateInX:dilationRateInY:paddingLeft:paddingRight:paddingTop:paddingBottom:paddingStyle:dataLayout:weightsLayout:](mpsgraphdepthwiseconvolution2dopdescriptor/init%28strideinx_strideiny_dilationrateinx_dilationrateiny_paddingleft_paddingright_paddingtop_paddingbottom_paddingstyle_datalayout_weightslayout_%29.md): Creates a 2D-depthwise convolution descriptor with given values.

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
- [MPSGraphDepthwiseConvolution3DOpDescriptor](mpsgraphdepthwiseconvolution3dopdescriptor.md): The class that defines the parameters for a 3D-depthwise convolution operation.
- [MPSGraphDevice](mpsgraphdevice.md): A class that describes the compute device.
- [MPSGraphExecutable](mpsgraphexecutable.md): The compiled representation of a compute graph executable.
- [MPSGraphExecutableExecutionDescriptor](mpsgraphexecutableexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule executable execution.
- [MPSGraphExecutableSerializationDescriptor](mpsgraphexecutableserializationdescriptor.md): A class that consists of all the levers to serialize an executable.
- [MPSGraphExecutionDescriptor](mpsgraphexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule graph execution.
- [MPSGraphFFTDescriptor](mpsgraphfftdescriptor.md): The class that defines the parameters for a fast Fourier transform (FFT) operation.
- [MPSGraphGRUDescriptor](mpsgraphgrudescriptor.md): The class that defines the parameters for a gated recurrent unit (GRU) operation.
- [MPSGraphImToColOpDescriptor](mpsgraphimtocolopdescriptor.md): The class that defines the parameters for an image to column or column to image operation.
- [MPSGraphLSTMDescriptor](mpsgraphlstmdescriptor.md): The class that defines the parameters for a long short-term memory (LSTM) operation.
