> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphconvolution2dopdescriptor](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphconvolution2dopdescriptor)

# MPSGraphConvolution2DOpDescriptor (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A class that describes the properties of a 2D-convolution operator.

## Declaration

```swift
class MPSGraphConvolution2DOpDescriptor
```

<a id="overview"></a>

## Overview

Use an instance of this class is to add a 2D-convolution operator with the desired properties to the graph.

## Topics

### Initializers

- [init(strideInX:strideInY:dilationRateInX:dilationRateInY:groups:paddingLeft:paddingRight:paddingTop:paddingBottom:paddingStyle:dataLayout:weightsLayout:)](mpsgraphconvolution2dopdescriptor/init%28strideinx_strideiny_dilationrateinx_dilationrateiny_groups_paddingleft_paddingright_paddingtop_paddingbottom_paddingstyle_datalayout_weightslayout_%29.md): Creates a convolution descriptor with given values for parameters.
- [init(strideInX:strideInY:dilationRateInX:dilationRateInY:groups:paddingStyle:dataLayout:weightsLayout:)](mpsgraphconvolution2dopdescriptor/init%28strideinx_strideiny_dilationrateinx_dilationrateiny_groups_paddingstyle_datalayout_weightslayout_%29.md): Creates a convolution descriptor with given values for parameters.

### Instance Properties

- [dataLayout](mpsgraphconvolution2dopdescriptor/datalayout.md): The named layout of data in the source tensor.
- [dilationRateInX](mpsgraphconvolution2dopdescriptor/dilationrateinx.md): The amount by which the weights tensor expands in the `x`-direction.
- [dilationRateInY](mpsgraphconvolution2dopdescriptor/dilationrateiny.md): The amount by which the weights tensor expands in the `y`-direction.
- [groups](mpsgraphconvolution2dopdescriptor/groups.md): The number of partitions of the input and output channels.
- [paddingBottom](mpsgraphconvolution2dopdescriptor/paddingbottom.md): The number of zeros added at the bottom of the source tensor.
- [paddingLeft](mpsgraphconvolution2dopdescriptor/paddingleft.md): The number of zeros added on the left side of the source tensor.
- [paddingRight](mpsgraphconvolution2dopdescriptor/paddingright.md): The number of zeros added on the right side of the source tensor.
- [paddingStyle](mpsgraphconvolution2dopdescriptor/paddingstyle.md): The type of padding applied to the source tensor.
- [paddingTop](mpsgraphconvolution2dopdescriptor/paddingtop.md): The number of zeros added at the top of the source tensor.
- [strideInX](mpsgraphconvolution2dopdescriptor/strideinx.md): The scale that maps `x`-coordinate of the destination to `x`-coordinate of the source.
- [strideInY](mpsgraphconvolution2dopdescriptor/strideiny.md): The scale that maps `y`-coordinate of the destination to `y`-coordinate of the source.
- [weightsLayout](mpsgraphconvolution2dopdescriptor/weightslayout.md): The named layout of data in the weights tensor.

### Instance Methods

- [setExplicitPaddingWithPaddingLeft(\_:paddingRight:paddingTop:paddingBottom:)](mpsgraphconvolution2dopdescriptor/setexplicitpaddingwithpaddingleft%28__paddingright_paddingtop_paddingbottom_%29.md): Sets the left, right, top, and bottom padding values.

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
- [MPSGraphLSTMDescriptor](mpsgraphlstmdescriptor.md): The class that defines the parameters for a long short-term memory (LSTM) operation.

# MPSGraphConvolution2DOpDescriptor (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A class that describes the properties of a 2D-convolution operator.

## Declaration

```objectivec
@interface MPSGraphConvolution2DOpDescriptor : MPSGraphObject
```

<a id="overview"></a>

## Overview

Use an instance of this class is to add a 2D-convolution operator with the desired properties to the graph.

## Topics

### Instance Properties

- [dataLayout](mpsgraphconvolution2dopdescriptor/datalayout.md): The named layout of data in the source tensor.
- [dilationRateInX](mpsgraphconvolution2dopdescriptor/dilationrateinx.md): The amount by which the weights tensor expands in the `x`-direction.
- [dilationRateInY](mpsgraphconvolution2dopdescriptor/dilationrateiny.md): The amount by which the weights tensor expands in the `y`-direction.
- [groups](mpsgraphconvolution2dopdescriptor/groups.md): The number of partitions of the input and output channels.
- [paddingBottom](mpsgraphconvolution2dopdescriptor/paddingbottom.md): The number of zeros added at the bottom of the source tensor.
- [paddingLeft](mpsgraphconvolution2dopdescriptor/paddingleft.md): The number of zeros added on the left side of the source tensor.
- [paddingRight](mpsgraphconvolution2dopdescriptor/paddingright.md): The number of zeros added on the right side of the source tensor.
- [paddingStyle](mpsgraphconvolution2dopdescriptor/paddingstyle.md): The type of padding applied to the source tensor.
- [paddingTop](mpsgraphconvolution2dopdescriptor/paddingtop.md): The number of zeros added at the top of the source tensor.
- [strideInX](mpsgraphconvolution2dopdescriptor/strideinx.md): The scale that maps `x`-coordinate of the destination to `x`-coordinate of the source.
- [strideInY](mpsgraphconvolution2dopdescriptor/strideiny.md): The scale that maps `y`-coordinate of the destination to `y`-coordinate of the source.
- [weightsLayout](mpsgraphconvolution2dopdescriptor/weightslayout.md): The named layout of data in the weights tensor.

### Instance Methods

- [setExplicitPaddingWithPaddingLeft:paddingRight:paddingTop:paddingBottom:](mpsgraphconvolution2dopdescriptor/setexplicitpaddingwithpaddingleft%28__paddingright_paddingtop_paddingbottom_%29.md): Sets the left, right, top, and bottom padding values.

### Type Methods

- [descriptorWithStrideInX:strideInY:dilationRateInX:dilationRateInY:groups:paddingLeft:paddingRight:paddingTop:paddingBottom:paddingStyle:dataLayout:weightsLayout:](mpsgraphconvolution2dopdescriptor/init%28strideinx_strideiny_dilationrateinx_dilationrateiny_groups_paddingleft_paddingright_paddingtop_paddingbottom_paddingstyle_datalayout_weightslayout_%29.md): Creates a convolution descriptor with given values for parameters.
- [descriptorWithStrideInX:strideInY:dilationRateInX:dilationRateInY:groups:paddingStyle:dataLayout:weightsLayout:](mpsgraphconvolution2dopdescriptor/init%28strideinx_strideiny_dilationrateinx_dilationrateiny_groups_paddingstyle_datalayout_weightslayout_%29.md): Creates a convolution descriptor with given values for parameters.

## Relationships

### Inherits From

- [MPSGraphObject](mpsgraphobject.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Classes

- [MPSGraph](mpsgraph.md): The optimized representation of a compute graph of operations and tensors.
- [MPSGraphCompilationDescriptor](mpsgraphcompilationdescriptor.md): A class that consists of all the levers for compiling graphs.
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
- [MPSGraphLSTMDescriptor](mpsgraphlstmdescriptor.md): The class that defines the parameters for a long short-term memory (LSTM) operation.
