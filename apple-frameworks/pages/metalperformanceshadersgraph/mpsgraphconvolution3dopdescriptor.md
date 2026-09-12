> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphconvolution3dopdescriptor](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphconvolution3dopdescriptor)

# MPSGraphConvolution3DOpDescriptor (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 16.3+ · iPadOS 16.3+ · Mac Catalyst 16.3+ · macOS 13.2+ · tvOS 16.3+ · visionOS 1.0+

A class that describes the properties of a 3D-convolution operator.

## Declaration

```swift
class MPSGraphConvolution3DOpDescriptor
```

<a id="overview"></a>

## Overview

Use an instance of this class is to add a 3D-convolution operator with desired properties to the graph.

## Topics

### Initializers

- [init(strideInX:strideInY:strideInZ:dilationRateInX:dilationRateInY:dilationRateInZ:groups:paddingLeft:paddingRight:paddingTop:paddingBottom:paddingFront:paddingBack:paddingStyle:dataLayout:weightsLayout:)](mpsgraphconvolution3dopdescriptor/init%28strideinx_strideiny_strideinz_dilationrateinx_dilationrateiny_dilationrateinz_groups_paddingleft_paddingright_paddingtop_paddingbottom_paddingfront_paddingback_paddingstyle_da~28363108.md): Creates a convolution descriptor with given values for parameters.
- [init(strideInX:strideInY:strideInZ:dilationRateInX:dilationRateInY:dilationRateInZ:groups:paddingStyle:dataLayout:weightsLayout:)](mpsgraphconvolution3dopdescriptor/init%28strideinx_strideiny_strideinz_dilationrateinx_dilationrateiny_dilationrateinz_groups_paddingstyle_datalayout_weightslayout_%29.md): Creates a convolution descriptor with given values for parameters.

### Instance Properties

- [dataLayout](mpsgraphconvolution3dopdescriptor/datalayout.md): The named layout of data in the source tensor.
- [dilationRateInX](mpsgraphconvolution3dopdescriptor/dilationrateinx.md): The amount by which weights tensor expands in the `x`-direction.
- [dilationRateInY](mpsgraphconvolution3dopdescriptor/dilationrateiny.md): The amount by which weights tensor expands in the `y`-direction.
- [dilationRateInZ](mpsgraphconvolution3dopdescriptor/dilationrateinz.md): The amount by which weights tensor expands in the `z`-direction.
- [groups](mpsgraphconvolution3dopdescriptor/groups.md): The number of partitions of the input and output channels.
- [paddingBack](mpsgraphconvolution3dopdescriptor/paddingback.md): The number of zeros added at the back of the source tensor.
- [paddingBottom](mpsgraphconvolution3dopdescriptor/paddingbottom.md): The number of zeros added at the bottom of the source tensor.
- [paddingFront](mpsgraphconvolution3dopdescriptor/paddingfront.md): The number of zeros added at the front of the source tensor.
- [paddingLeft](mpsgraphconvolution3dopdescriptor/paddingleft.md): The number of zeros added on the left side of the source tensor.
- [paddingRight](mpsgraphconvolution3dopdescriptor/paddingright.md): The number of zeros added on the right side of the source tensor.
- [paddingStyle](mpsgraphconvolution3dopdescriptor/paddingstyle.md): The type of padding that is applied to the source tensor.
- [paddingTop](mpsgraphconvolution3dopdescriptor/paddingtop.md): The number of zeros added at the top of the source tensor.
- [strideInX](mpsgraphconvolution3dopdescriptor/strideinx.md): The scale that maps`x`-coordinate of destination to `x`-coordinate of source.
- [strideInY](mpsgraphconvolution3dopdescriptor/strideiny.md): The scale that maps`y`-coordinate of destination to `y`-coordinate of source.
- [strideInZ](mpsgraphconvolution3dopdescriptor/strideinz.md): The scale that maps`z`-coordinate of destination to `z`-coordinate of source.
- [weightsLayout](mpsgraphconvolution3dopdescriptor/weightslayout.md): The named layout of data in the weights tensor.

### Instance Methods

- [setExplicitPaddingWithPaddingLeft(\_:paddingRight:paddingTop:paddingBottom:paddingFront:paddingBack:)](mpsgraphconvolution3dopdescriptor/setexplicitpaddingwithpaddingleft%28__paddingright_paddingtop_paddingbottom_paddingfront_paddingback_%29.md): Sets the left, right, top, bottom, front, and back padding values.

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
- [MPSGraphLSTMDescriptor](mpsgraphlstmdescriptor.md): The class that defines the parameters for a long short-term memory (LSTM) operation.

# MPSGraphConvolution3DOpDescriptor (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 16.3+ · iPadOS 16.3+ · Mac Catalyst 16.3+ · macOS 13.2+ · tvOS 16.3+ · visionOS 1.0+

A class that describes the properties of a 3D-convolution operator.

## Declaration

```objectivec
@interface MPSGraphConvolution3DOpDescriptor : MPSGraphObject
```

<a id="overview"></a>

## Overview

Use an instance of this class is to add a 3D-convolution operator with desired properties to the graph.

## Topics

### Instance Properties

- [dataLayout](mpsgraphconvolution3dopdescriptor/datalayout.md): The named layout of data in the source tensor.
- [dilationRateInX](mpsgraphconvolution3dopdescriptor/dilationrateinx.md): The amount by which weights tensor expands in the `x`-direction.
- [dilationRateInY](mpsgraphconvolution3dopdescriptor/dilationrateiny.md): The amount by which weights tensor expands in the `y`-direction.
- [dilationRateInZ](mpsgraphconvolution3dopdescriptor/dilationrateinz.md): The amount by which weights tensor expands in the `z`-direction.
- [groups](mpsgraphconvolution3dopdescriptor/groups.md): The number of partitions of the input and output channels.
- [paddingBack](mpsgraphconvolution3dopdescriptor/paddingback.md): The number of zeros added at the back of the source tensor.
- [paddingBottom](mpsgraphconvolution3dopdescriptor/paddingbottom.md): The number of zeros added at the bottom of the source tensor.
- [paddingFront](mpsgraphconvolution3dopdescriptor/paddingfront.md): The number of zeros added at the front of the source tensor.
- [paddingLeft](mpsgraphconvolution3dopdescriptor/paddingleft.md): The number of zeros added on the left side of the source tensor.
- [paddingRight](mpsgraphconvolution3dopdescriptor/paddingright.md): The number of zeros added on the right side of the source tensor.
- [paddingStyle](mpsgraphconvolution3dopdescriptor/paddingstyle.md): The type of padding that is applied to the source tensor.
- [paddingTop](mpsgraphconvolution3dopdescriptor/paddingtop.md): The number of zeros added at the top of the source tensor.
- [strideInX](mpsgraphconvolution3dopdescriptor/strideinx.md): The scale that maps`x`-coordinate of destination to `x`-coordinate of source.
- [strideInY](mpsgraphconvolution3dopdescriptor/strideiny.md): The scale that maps`y`-coordinate of destination to `y`-coordinate of source.
- [strideInZ](mpsgraphconvolution3dopdescriptor/strideinz.md): The scale that maps`z`-coordinate of destination to `z`-coordinate of source.
- [weightsLayout](mpsgraphconvolution3dopdescriptor/weightslayout.md): The named layout of data in the weights tensor.

### Instance Methods

- [setExplicitPaddingWithPaddingLeft:paddingRight:paddingTop:paddingBottom:paddingFront:paddingBack:](mpsgraphconvolution3dopdescriptor/setexplicitpaddingwithpaddingleft%28__paddingright_paddingtop_paddingbottom_paddingfront_paddingback_%29.md): Sets the left, right, top, bottom, front, and back padding values.

### Type Methods

- [descriptorWithStrideInX:strideInY:strideInZ:dilationRateInX:dilationRateInY:dilationRateInZ:groups:paddingLeft:paddingRight:paddingTop:paddingBottom:paddingFront:paddingBack:paddingStyle:dataLayout:weightsLayout:](mpsgraphconvolution3dopdescriptor/init%28strideinx_strideiny_strideinz_dilationrateinx_dilationrateiny_dilationrateinz_groups_paddingleft_paddingright_paddingtop_paddingbottom_paddingfront_paddingback_paddingstyle_da~28363108.md): Creates a convolution descriptor with given values for parameters.
- [descriptorWithStrideInX:strideInY:strideInZ:dilationRateInX:dilationRateInY:dilationRateInZ:groups:paddingStyle:dataLayout:weightsLayout:](mpsgraphconvolution3dopdescriptor/init%28strideinx_strideiny_strideinz_dilationrateinx_dilationrateiny_dilationrateinz_groups_paddingstyle_datalayout_weightslayout_%29.md): Creates a convolution descriptor with given values for parameters.

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
- [MPSGraphLSTMDescriptor](mpsgraphlstmdescriptor.md): The class that defines the parameters for a long short-term memory (LSTM) operation.
