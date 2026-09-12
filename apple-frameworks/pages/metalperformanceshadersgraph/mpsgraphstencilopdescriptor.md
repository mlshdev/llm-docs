> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphstencilopdescriptor](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphstencilopdescriptor)

# MPSGraphStencilOpDescriptor (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The class that defines the parameters for a stencil operation.

## Declaration

```swift
class MPSGraphStencilOpDescriptor
```

<a id="overview"></a>

## Overview

Use this descriptor with the following [MPSGraph](mpsgraph.md) method:

- [stencil(withSourceTensor:weightsTensor:descriptor:name:)](mpsgraph/stencil%28withsourcetensor_weightstensor_descriptor_name_%29.md)

## Topics

### Initializers

- [init(explicitPadding:)](mpsgraphstencilopdescriptor/init%28explicitpadding_%29.md): Creates a stencil operation descriptor with default values.
- [init(offsets:explicitPadding:)](mpsgraphstencilopdescriptor/init%28offsets_explicitpadding_%29.md): Creates a stencil operation descriptor with default values.
- [init(paddingStyle:)](mpsgraphstencilopdescriptor/init%28paddingstyle_%29.md): Creates a stencil operation descriptor with default values.
- [init(reductionMode:offsets:strides:dilationRates:explicitPadding:boundaryMode:paddingStyle:paddingConstant:)](mpsgraphstencilopdescriptor/init%28reductionmode_offsets_strides_dilationrates_explicitpadding_boundarymode_paddingstyle_paddingconstant_%29.md): Creates a stencil operation descriptor with given values.

### Instance Properties

- [boundaryMode](mpsgraphstencilopdescriptor/boundarymode.md): The property that determines which values to use for padding the input tensor.
- [dilationRates](mpsgraphstencilopdescriptor/dilationrates.md): The property that defines dilation rates for spatial dimensions.
- [explicitPadding](mpsgraphstencilopdescriptor/explicitpadding.md): The property that defines padding values for spatial dimensions.
- [offsets](mpsgraphstencilopdescriptor/offsets.md): An array of length four that determines from which offset to start reading the input tensor.
- [paddingConstant](mpsgraphstencilopdescriptor/paddingconstant.md): The padding value for `boundaryMode = MPSGraphPaddingModeConstant`.
- [paddingStyle](mpsgraphstencilopdescriptor/paddingstyle.md): The property that defines what kind of padding to apply to the stencil operation.
- [reductionMode](mpsgraphstencilopdescriptor/reductionmode.md): The reduction mode to use within the stencil window.
- [strides](mpsgraphstencilopdescriptor/strides.md): The property that defines strides for spatial dimensions.

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

# MPSGraphStencilOpDescriptor (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The class that defines the parameters for a stencil operation.

## Declaration

```objectivec
@interface MPSGraphStencilOpDescriptor : MPSGraphObject
```

<a id="overview"></a>

## Overview

Use this descriptor with the following [MPSGraph](mpsgraph.md) method:

- [stencilWithSourceTensor:weightsTensor:descriptor:name:](mpsgraph/stencil%28withsourcetensor_weightstensor_descriptor_name_%29.md)

## Topics

### Instance Properties

- [boundaryMode](mpsgraphstencilopdescriptor/boundarymode.md): The property that determines which values to use for padding the input tensor.
- [dilationRates](mpsgraphstencilopdescriptor/dilationrates.md): The property that defines dilation rates for spatial dimensions.
- [explicitPadding](mpsgraphstencilopdescriptor/explicitpadding.md): The property that defines padding values for spatial dimensions.
- [offsets](mpsgraphstencilopdescriptor/offsets.md): An array of length four that determines from which offset to start reading the input tensor.
- [paddingConstant](mpsgraphstencilopdescriptor/paddingconstant.md): The padding value for `boundaryMode = MPSGraphPaddingModeConstant`.
- [paddingStyle](mpsgraphstencilopdescriptor/paddingstyle.md): The property that defines what kind of padding to apply to the stencil operation.
- [reductionMode](mpsgraphstencilopdescriptor/reductionmode.md): The reduction mode to use within the stencil window.
- [strides](mpsgraphstencilopdescriptor/strides.md): The property that defines strides for spatial dimensions.

### Type Methods

- [descriptorWithExplicitPadding:](mpsgraphstencilopdescriptor/init%28explicitpadding_%29.md): Creates a stencil operation descriptor with default values.
- [descriptorWithOffsets:explicitPadding:](mpsgraphstencilopdescriptor/init%28offsets_explicitpadding_%29.md): Creates a stencil operation descriptor with default values.
- [descriptorWithPaddingStyle:](mpsgraphstencilopdescriptor/init%28paddingstyle_%29.md): Creates a stencil operation descriptor with default values.
- [descriptorWithReductionMode:offsets:strides:dilationRates:explicitPadding:boundaryMode:paddingStyle:paddingConstant:](mpsgraphstencilopdescriptor/init%28reductionmode_offsets_strides_dilationrates_explicitpadding_boundarymode_paddingstyle_paddingconstant_%29.md): Creates a stencil operation descriptor with given values.

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
