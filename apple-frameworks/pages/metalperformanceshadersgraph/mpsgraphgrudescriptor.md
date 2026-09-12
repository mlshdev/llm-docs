> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphgrudescriptor](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphgrudescriptor)

# MPSGraphGRUDescriptor (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The class that defines the parameters for a gated recurrent unit (GRU) operation.

## Declaration

```swift
class MPSGraphGRUDescriptor
```

<a id="overview"></a>

## Overview

Use this descriptor with the following [MPSGraph](mpsgraph.md) methods:

- [GRU(\_:recurrentWeight:inputWeight:bias:descriptor:name:)](mpsgraph/gru%28__recurrentweight_inputweight_bias_descriptor_name_%29.md)
- [GRU(\_:recurrentWeight:inputWeight:bias:initState:descriptor:name:)](mpsgraph/gru%28__recurrentweight_inputweight_bias_initstate_descriptor_name_%29.md)
- [GRU(\_:recurrentWeight:inputWeight:bias:initState:mask:secondaryBias:descriptor:name:)](mpsgraph/gru%28__recurrentweight_inputweight_bias_initstate_mask_secondarybias_descriptor_name_%29.md)
- [GRUGradients(\_:recurrentWeight:sourceGradient:zState:outputFwd:inputWeight:bias:descriptor:name:)](mpsgraph/grugradients%28__recurrentweight_sourcegradient_zstate_outputfwd_inputweight_bias_descriptor_name_%29.md)
- [GRUGradients(\_:recurrentWeight:sourceGradient:zState:outputFwd:inputWeight:bias:initState:descriptor:name:)](mpsgraph/grugradients%28__recurrentweight_sourcegradient_zstate_outputfwd_inputweight_bias_initstate_descriptor_name_%29.md)
- [GRUGradients(\_:recurrentWeight:sourceGradient:zState:outputFwd:stateGradient:inputWeight:bias:initState:mask:secondaryBias:descriptor:name:)](mpsgraph/grugradients%28__recurrentweight_sourcegradient_zstate_outputfwd_stategradient_inputweight_bias_initstate_mask_secondarybias_descriptor_name_%29.md)

## Topics

### Instance Properties

- [bidirectional](mpsgraphgrudescriptor/bidirectional.md): A parameter that defines a bidirectional GRU layer.
- [flipZ](mpsgraphgrudescriptor/flipz.md): A parameter that chooses between two variants for the final output computation.
- [outputGateActivation](mpsgraphgrudescriptor/outputgateactivation.md): A parameter that defines the activation function to use with the output-gate of the GRU operation.
- [resetAfter](mpsgraphgrudescriptor/resetafter.md): A parameter that chooses between two variants for the reset gate computation.
- [resetGateActivation](mpsgraphgrudescriptor/resetgateactivation.md): A parameter that defines the activation function to use with the reset-gate of the GRU operation.
- [resetGateFirst](mpsgraphgrudescriptor/resetgatefirst.md): A parameter that controls the internal order of the GRU gates.
- [reverse](mpsgraphgrudescriptor/reverse.md): A parameter that defines the time direction of the input sequence.
- [training](mpsgraphgrudescriptor/training.md): A parameter that enables the GRU layer to support training.
- [updateGateActivation](mpsgraphgrudescriptor/updategateactivation.md): A parameter that defines the activation function to use with the update-gate of the GRU operation.

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
- [MPSGraphImToColOpDescriptor](mpsgraphimtocolopdescriptor.md): The class that defines the parameters for an image to column or column to image operation.
- [MPSGraphLSTMDescriptor](mpsgraphlstmdescriptor.md): The class that defines the parameters for a long short-term memory (LSTM) operation.

# MPSGraphGRUDescriptor (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The class that defines the parameters for a gated recurrent unit (GRU) operation.

## Declaration

```objectivec
@interface MPSGraphGRUDescriptor : MPSGraphObject
```

<a id="overview"></a>

## Overview

Use this descriptor with the following [MPSGraph](mpsgraph.md) methods:

- [GRUWithSourceTensor:recurrentWeight:inputWeight:bias:descriptor:name:](mpsgraph/gru%28__recurrentweight_inputweight_bias_descriptor_name_%29.md)
- [GRUWithSourceTensor:recurrentWeight:inputWeight:bias:initState:descriptor:name:](mpsgraph/gru%28__recurrentweight_inputweight_bias_initstate_descriptor_name_%29.md)
- [GRUWithSourceTensor:recurrentWeight:inputWeight:bias:initState:mask:secondaryBias:descriptor:name:](mpsgraph/gru%28__recurrentweight_inputweight_bias_initstate_mask_secondarybias_descriptor_name_%29.md)
- [GRUGradientsWithSourceTensor:recurrentWeight:sourceGradient:zState:outputFwd:inputWeight:bias:descriptor:name:](mpsgraph/grugradients%28__recurrentweight_sourcegradient_zstate_outputfwd_inputweight_bias_descriptor_name_%29.md)
- [GRUGradientsWithSourceTensor:recurrentWeight:sourceGradient:zState:outputFwd:inputWeight:bias:initState:descriptor:name:](mpsgraph/grugradients%28__recurrentweight_sourcegradient_zstate_outputfwd_inputweight_bias_initstate_descriptor_name_%29.md)
- [GRUGradientsWithSourceTensor:recurrentWeight:sourceGradient:zState:outputFwd:stateGradient:inputWeight:bias:initState:mask:secondaryBias:descriptor:name:](mpsgraph/grugradients%28__recurrentweight_sourcegradient_zstate_outputfwd_stategradient_inputweight_bias_initstate_mask_secondarybias_descriptor_name_%29.md)

## Topics

### Instance Properties

- [bidirectional](mpsgraphgrudescriptor/bidirectional.md): A parameter that defines a bidirectional GRU layer.
- [flipZ](mpsgraphgrudescriptor/flipz.md): A parameter that chooses between two variants for the final output computation.
- [outputGateActivation](mpsgraphgrudescriptor/outputgateactivation.md): A parameter that defines the activation function to use with the output-gate of the GRU operation.
- [resetAfter](mpsgraphgrudescriptor/resetafter.md): A parameter that chooses between two variants for the reset gate computation.
- [resetGateActivation](mpsgraphgrudescriptor/resetgateactivation.md): A parameter that defines the activation function to use with the reset-gate of the GRU operation.
- [resetGateFirst](mpsgraphgrudescriptor/resetgatefirst.md): A parameter that controls the internal order of the GRU gates.
- [reverse](mpsgraphgrudescriptor/reverse.md): A parameter that defines the time direction of the input sequence.
- [training](mpsgraphgrudescriptor/training.md): A parameter that enables the GRU layer to support training.
- [updateGateActivation](mpsgraphgrudescriptor/updategateactivation.md): A parameter that defines the activation function to use with the update-gate of the GRU operation.

### Type Methods

- [descriptor](mpsgraphgrudescriptor/descriptor.md): Creates an GRU descriptor with default values.

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
- [MPSGraphImToColOpDescriptor](mpsgraphimtocolopdescriptor.md): The class that defines the parameters for an image to column or column to image operation.
- [MPSGraphLSTMDescriptor](mpsgraphlstmdescriptor.md): The class that defines the parameters for a long short-term memory (LSTM) operation.
