> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphobject](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphobject)

# MPSGraphObject (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The common base class for all Metal Performance Shaders Graph objects.

## Declaration

```swift
class MPSGraphObject
```

<a id="overview"></a>

## Overview

Only the child classes should be used.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPSGraph](mpsgraph.md)
- [MPSGraphCompilationDescriptor](mpsgraphcompilationdescriptor.md)
- [MPSGraphConvolution2DOpDescriptor](mpsgraphconvolution2dopdescriptor.md)
- [MPSGraphConvolution3DOpDescriptor](mpsgraphconvolution3dopdescriptor.md)
- [MPSGraphCreateSparseOpDescriptor](mpsgraphcreatesparseopdescriptor.md)
- [MPSGraphDepthwiseConvolution2DOpDescriptor](mpsgraphdepthwiseconvolution2dopdescriptor.md)
- [MPSGraphDepthwiseConvolution3DOpDescriptor](mpsgraphdepthwiseconvolution3dopdescriptor.md)
- [MPSGraphDevice](mpsgraphdevice.md)
- [MPSGraphExecutable](mpsgraphexecutable.md)
- [MPSGraphExecutableExecutionDescriptor](mpsgraphexecutableexecutiondescriptor.md)
- [MPSGraphExecutableSerializationDescriptor](mpsgraphexecutableserializationdescriptor.md)
- [MPSGraphExecutionDescriptor](mpsgraphexecutiondescriptor.md)
- [MPSGraphFFTDescriptor](mpsgraphfftdescriptor.md)
- [MPSGraphGRUDescriptor](mpsgraphgrudescriptor.md)
- [MPSGraphImToColOpDescriptor](mpsgraphimtocolopdescriptor.md)
- [MPSGraphLSTMDescriptor](mpsgraphlstmdescriptor.md)
- [MPSGraphOperation](mpsgraphoperation.md)
- [MPSGraphPooling2DOpDescriptor](mpsgraphpooling2dopdescriptor.md)
- [MPSGraphPooling4DOpDescriptor](mpsgraphpooling4dopdescriptor.md)
- [MPSGraphRandomOpDescriptor](mpsgraphrandomopdescriptor.md)
- [MPSGraphSDPADescriptor](mpsgraphsdpadescriptor.md)
- [MPSGraphSingleGateRNNDescriptor](mpsgraphsinglegaternndescriptor.md)
- [MPSGraphStencilOpDescriptor](mpsgraphstencilopdescriptor.md)
- [MPSGraphTensor](mpsgraphtensor.md)
- [MPSGraphTensorData](mpsgraphtensordata.md)
- [MPSGraphType](mpsgraphtype.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
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

# MPSGraphObject (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The common base class for all Metal Performance Shaders Graph objects.

## Declaration

```objectivec
@interface MPSGraphObject : NSObject
```

<a id="overview"></a>

## Overview

Only the child classes should be used.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPSGraph](mpsgraph.md)
- [MPSGraphCompilationDescriptor](mpsgraphcompilationdescriptor.md)
- [MPSGraphConvolution2DOpDescriptor](mpsgraphconvolution2dopdescriptor.md)
- [MPSGraphConvolution3DOpDescriptor](mpsgraphconvolution3dopdescriptor.md)
- [MPSGraphCreateSparseOpDescriptor](mpsgraphcreatesparseopdescriptor.md)
- [MPSGraphDepthwiseConvolution2DOpDescriptor](mpsgraphdepthwiseconvolution2dopdescriptor.md)
- [MPSGraphDepthwiseConvolution3DOpDescriptor](mpsgraphdepthwiseconvolution3dopdescriptor.md)
- [MPSGraphDevice](mpsgraphdevice.md)
- [MPSGraphExecutable](mpsgraphexecutable.md)
- [MPSGraphExecutableExecutionDescriptor](mpsgraphexecutableexecutiondescriptor.md)
- [MPSGraphExecutableSerializationDescriptor](mpsgraphexecutableserializationdescriptor.md)
- [MPSGraphExecutionDescriptor](mpsgraphexecutiondescriptor.md)
- [MPSGraphFFTDescriptor](mpsgraphfftdescriptor.md)
- [MPSGraphGRUDescriptor](mpsgraphgrudescriptor.md)
- [MPSGraphImToColOpDescriptor](mpsgraphimtocolopdescriptor.md)
- [MPSGraphLSTMDescriptor](mpsgraphlstmdescriptor.md)
- [MPSGraphOperation](mpsgraphoperation.md)
- [MPSGraphPooling2DOpDescriptor](mpsgraphpooling2dopdescriptor.md)
- [MPSGraphPooling4DOpDescriptor](mpsgraphpooling4dopdescriptor.md)
- [MPSGraphRandomOpDescriptor](mpsgraphrandomopdescriptor.md)
- [MPSGraphSDPADescriptor](mpsgraphsdpadescriptor.md)
- [MPSGraphSingleGateRNNDescriptor](mpsgraphsinglegaternndescriptor.md)
- [MPSGraphStencilOpDescriptor](mpsgraphstencilopdescriptor.md)
- [MPSGraphTensor](mpsgraphtensor.md)
- [MPSGraphTensorData](mpsgraphtensordata.md)
- [MPSGraphType](mpsgraphtype.md)

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
