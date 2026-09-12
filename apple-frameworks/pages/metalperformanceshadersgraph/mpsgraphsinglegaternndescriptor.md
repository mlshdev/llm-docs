> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphsinglegaternndescriptor](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphsinglegaternndescriptor)

# MPSGraphSingleGateRNNDescriptor (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

The class that defines the parameters for a single gate RNN operation.

## Declaration

```swift
class MPSGraphSingleGateRNNDescriptor
```

<a id="overview"></a>

## Overview

Use this descriptor with the following [MPSGraph](mpsgraph.md) methods:

- [singleGateRNN(\_:recurrentWeight:initState:descriptor:name:)](mpsgraph/singlegaternn%28__recurrentweight_initstate_descriptor_name_%29.md)
- [singleGateRNN(\_:recurrentWeight:inputWeight:bias:initState:descriptor:name:)](mpsgraph/singlegaternn%28__recurrentweight_inputweight_bias_initstate_descriptor_name_%29.md)
- [singleGateRNN(\_:recurrentWeight:inputWeight:bias:initState:mask:descriptor:name:)](mpsgraph/singlegaternn%28__recurrentweight_inputweight_bias_initstate_mask_descriptor_name_%29.md)
- [singleGateRNNGradients(\_:recurrentWeight:sourceGradient:zState:initState:descriptor:name:)](mpsgraph/singlegaternngradients%28__recurrentweight_sourcegradient_zstate_initstate_descriptor_name_%29.md)
- [singleGateRNNGradients(\_:recurrentWeight:sourceGradient:zState:inputWeight:bias:initState:descriptor:name:)](mpsgraph/singlegaternngradients%28__recurrentweight_sourcegradient_zstate_inputweight_bias_initstate_descriptor_name_%29.md)
- [singleGateRNNGradients(\_:recurrentWeight:sourceGradient:zState:inputWeight:bias:initState:mask:descriptor:name:)](mpsgraph/singlegaternngradients%28__recurrentweight_sourcegradient_zstate_inputweight_bias_initstate_mask_descriptor_name_%29.md)
- [singleGateRNNGradients(\_:recurrentWeight:sourceGradient:zState:stateGradient:inputWeight:bias:initState:mask:descriptor:name:)](mpsgraph/singlegaternngradients%28__recurrentweight_sourcegradient_zstate_stategradient_inputweight_bias_initstate_mask_descriptor_name_%29.md)

## Topics

### Instance Properties

- [activation](mpsgraphsinglegaternndescriptor/activation.md): A parameter that defines the activation function to use with the RNN operation.
- [bidirectional](mpsgraphsinglegaternndescriptor/bidirectional.md): A parameter that defines a bidirectional RNN layer.
- [reverse](mpsgraphsinglegaternndescriptor/reverse.md): A parameter that defines time direction of the input sequence.
- [training](mpsgraphsinglegaternndescriptor/training.md): A parameter that makes the RNN layer support training.

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

# MPSGraphSingleGateRNNDescriptor (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

The class that defines the parameters for a single gate RNN operation.

## Declaration

```objectivec
@interface MPSGraphSingleGateRNNDescriptor : MPSGraphObject
```

<a id="overview"></a>

## Overview

Use this descriptor with the following [MPSGraph](mpsgraph.md) methods:

- [singleGateRNNWithSourceTensor:recurrentWeight:initState:descriptor:name:](mpsgraph/singlegaternn%28__recurrentweight_initstate_descriptor_name_%29.md)
- [singleGateRNNWithSourceTensor:recurrentWeight:inputWeight:bias:initState:descriptor:name:](mpsgraph/singlegaternn%28__recurrentweight_inputweight_bias_initstate_descriptor_name_%29.md)
- [singleGateRNNWithSourceTensor:recurrentWeight:inputWeight:bias:initState:mask:descriptor:name:](mpsgraph/singlegaternn%28__recurrentweight_inputweight_bias_initstate_mask_descriptor_name_%29.md)
- [singleGateRNNGradientsWithSourceTensor:recurrentWeight:sourceGradient:zState:initState:descriptor:name:](mpsgraph/singlegaternngradients%28__recurrentweight_sourcegradient_zstate_initstate_descriptor_name_%29.md)
- [singleGateRNNGradientsWithSourceTensor:recurrentWeight:sourceGradient:zState:inputWeight:bias:initState:descriptor:name:](mpsgraph/singlegaternngradients%28__recurrentweight_sourcegradient_zstate_inputweight_bias_initstate_descriptor_name_%29.md)
- [singleGateRNNGradientsWithSourceTensor:recurrentWeight:sourceGradient:zState:inputWeight:bias:initState:mask:descriptor:name:](mpsgraph/singlegaternngradients%28__recurrentweight_sourcegradient_zstate_inputweight_bias_initstate_mask_descriptor_name_%29.md)
- [singleGateRNNGradientsWithSourceTensor:recurrentWeight:sourceGradient:zState:stateGradient:inputWeight:bias:initState:mask:descriptor:name:](mpsgraph/singlegaternngradients%28__recurrentweight_sourcegradient_zstate_stategradient_inputweight_bias_initstate_mask_descriptor_name_%29.md)

## Topics

### Instance Properties

- [activation](mpsgraphsinglegaternndescriptor/activation.md): A parameter that defines the activation function to use with the RNN operation.
- [bidirectional](mpsgraphsinglegaternndescriptor/bidirectional.md): A parameter that defines a bidirectional RNN layer.
- [reverse](mpsgraphsinglegaternndescriptor/reverse.md): A parameter that defines time direction of the input sequence.
- [training](mpsgraphsinglegaternndescriptor/training.md): A parameter that makes the RNN layer support training.

### Type Methods

- [descriptor](mpsgraphsinglegaternndescriptor/descriptor.md): Creates a single gate RNN descriptor with default values.

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
