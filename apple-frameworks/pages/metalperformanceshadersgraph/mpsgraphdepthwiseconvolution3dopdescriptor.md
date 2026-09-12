> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphdepthwiseconvolution3dopdescriptor](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphdepthwiseconvolution3dopdescriptor)

# MPSGraphDepthwiseConvolution3DOpDescriptor (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The class that defines the parameters for a 3D-depthwise convolution operation.

## Declaration

```swift
class MPSGraphDepthwiseConvolution3DOpDescriptor
```

<a id="overview"></a>

## Overview

A `MPSGraphDepthwiseConvolution3DOpDescriptor` defines constant parameters for 3D depthwise convolutions. Use this class with [depthwiseConvolution3D(\_:weights:descriptor:name:)](mpsgraph/depthwiseconvolution3d%28__weights_descriptor_name_%29.md), [depthwiseConvolution3DDataGradient(\_:weights:outputShape:descriptor:name:)](mpsgraph/depthwiseconvolution3ddatagradient%28__weights_outputshape_descriptor_name_%29.md) and [depthwiseConvolution3DWeightsGradient(\_:source:outputShape:descriptor:name:)](mpsgraph/depthwiseconvolution3dweightsgradient%28__source_outputshape_descriptor_name_%29.md) methods.

## Topics

### Initializers

- [init(paddingStyle:)](mpsgraphdepthwiseconvolution3dopdescriptor/init%28paddingstyle_%29.md): Creates a 3D depthwise convolution descriptor with default values.
- [init(strides:dilationRates:paddingValues:paddingStyle:)](mpsgraphdepthwiseconvolution3dopdescriptor/init%28strides_dilationrates_paddingvalues_paddingstyle_%29.md): Creates a 3D depthwise convolution descriptor with given values.

### Instance Properties

- [channelDimensionIndex](mpsgraphdepthwiseconvolution3dopdescriptor/channeldimensionindex.md): The axis that contains the channels in the input and the weights, within the 4D tile of the last dimensions.
- [dilationRates](mpsgraphdepthwiseconvolution3dopdescriptor/dilationrates.md): The dilation rates for spatial dimensions.
- [paddingStyle](mpsgraphdepthwiseconvolution3dopdescriptor/paddingstyle.md): The padding style for the operation.
- [paddingValues](mpsgraphdepthwiseconvolution3dopdescriptor/paddingvalues.md): The padding values for spatial dimensions.
- [strides](mpsgraphdepthwiseconvolution3dopdescriptor/strides.md): The strides for spatial dimensions.

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
- [MPSGraphDevice](mpsgraphdevice.md): A class that describes the compute device.
- [MPSGraphExecutable](mpsgraphexecutable.md): The compiled representation of a compute graph executable.
- [MPSGraphExecutableExecutionDescriptor](mpsgraphexecutableexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule executable execution.
- [MPSGraphExecutableSerializationDescriptor](mpsgraphexecutableserializationdescriptor.md): A class that consists of all the levers to serialize an executable.
- [MPSGraphExecutionDescriptor](mpsgraphexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule graph execution.
- [MPSGraphFFTDescriptor](mpsgraphfftdescriptor.md): The class that defines the parameters for a fast Fourier transform (FFT) operation.
- [MPSGraphGRUDescriptor](mpsgraphgrudescriptor.md): The class that defines the parameters for a gated recurrent unit (GRU) operation.
- [MPSGraphImToColOpDescriptor](mpsgraphimtocolopdescriptor.md): The class that defines the parameters for an image to column or column to image operation.
- [MPSGraphLSTMDescriptor](mpsgraphlstmdescriptor.md): The class that defines the parameters for a long short-term memory (LSTM) operation.

# MPSGraphDepthwiseConvolution3DOpDescriptor (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The class that defines the parameters for a 3D-depthwise convolution operation.

## Declaration

```objectivec
@interface MPSGraphDepthwiseConvolution3DOpDescriptor : MPSGraphObject
```

<a id="overview"></a>

## Overview

A `MPSGraphDepthwiseConvolution3DOpDescriptor` defines constant parameters for 3D depthwise convolutions. Use this class with [depthwiseConvolution3DWithSourceTensor:weightsTensor:descriptor:name:](mpsgraph/depthwiseconvolution3d%28__weights_descriptor_name_%29.md), [depthwiseConvolution3DDataGradientWithIncomingGradientTensor:weightsTensor:outputShape:descriptor:name:](mpsgraph/depthwiseconvolution3ddatagradient%28__weights_outputshape_descriptor_name_%29.md) and [depthwiseConvolution3DWeightsGradientWithIncomingGradientTensor:sourceTensor:outputShape:descriptor:name:](mpsgraph/depthwiseconvolution3dweightsgradient%28__source_outputshape_descriptor_name_%29.md) methods.

## Topics

### Instance Properties

- [channelDimensionIndex](mpsgraphdepthwiseconvolution3dopdescriptor/channeldimensionindex.md): The axis that contains the channels in the input and the weights, within the 4D tile of the last dimensions.
- [dilationRates](mpsgraphdepthwiseconvolution3dopdescriptor/dilationrates.md): The dilation rates for spatial dimensions.
- [paddingStyle](mpsgraphdepthwiseconvolution3dopdescriptor/paddingstyle.md): The padding style for the operation.
- [paddingValues](mpsgraphdepthwiseconvolution3dopdescriptor/paddingvalues.md): The padding values for spatial dimensions.
- [strides](mpsgraphdepthwiseconvolution3dopdescriptor/strides.md): The strides for spatial dimensions.

### Type Methods

- [descriptorWithPaddingStyle:](mpsgraphdepthwiseconvolution3dopdescriptor/init%28paddingstyle_%29.md): Creates a 3D depthwise convolution descriptor with default values.
- [descriptorWithStrides:dilationRates:paddingValues:paddingStyle:](mpsgraphdepthwiseconvolution3dopdescriptor/init%28strides_dilationrates_paddingvalues_paddingstyle_%29.md): Creates a 3D depthwise convolution descriptor with given values.

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
- [MPSGraphDevice](mpsgraphdevice.md): A class that describes the compute device.
- [MPSGraphExecutable](mpsgraphexecutable.md): The compiled representation of a compute graph executable.
- [MPSGraphExecutableExecutionDescriptor](mpsgraphexecutableexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule executable execution.
- [MPSGraphExecutableSerializationDescriptor](mpsgraphexecutableserializationdescriptor.md): A class that consists of all the levers to serialize an executable.
- [MPSGraphExecutionDescriptor](mpsgraphexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule graph execution.
- [MPSGraphFFTDescriptor](mpsgraphfftdescriptor.md): The class that defines the parameters for a fast Fourier transform (FFT) operation.
- [MPSGraphGRUDescriptor](mpsgraphgrudescriptor.md): The class that defines the parameters for a gated recurrent unit (GRU) operation.
- [MPSGraphImToColOpDescriptor](mpsgraphimtocolopdescriptor.md): The class that defines the parameters for an image to column or column to image operation.
- [MPSGraphLSTMDescriptor](mpsgraphlstmdescriptor.md): The class that defines the parameters for a long short-term memory (LSTM) operation.
