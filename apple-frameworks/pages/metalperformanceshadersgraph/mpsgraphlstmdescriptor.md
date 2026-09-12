> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphlstmdescriptor](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphlstmdescriptor)

# MPSGraphLSTMDescriptor (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

The class that defines the parameters for a long short-term memory (LSTM) operation.

## Declaration

```swift
class MPSGraphLSTMDescriptor
```

<a id="overview"></a>

## Overview

Use this descriptor with the following [MPSGraph](mpsgraph.md) methods:

- [LSTM(\_:recurrentWeight:initState:initCell:descriptor:name:)](mpsgraph/lstm%28__recurrentweight_initstate_initcell_descriptor_name_%29.md)
- [LSTM(\_:recurrentWeight:inputWeight:bias:initState:initCell:descriptor:name:)](mpsgraph/lstm%28__recurrentweight_inputweight_bias_initstate_initcell_descriptor_name_%29.md)
- [LSTM(\_:recurrentWeight:inputWeight:bias:initState:initCell:mask:peephole:descriptor:name:)](mpsgraph/lstm%28__recurrentweight_inputweight_bias_initstate_initcell_mask_peephole_descriptor_name_%29.md)
- [LSTMGradients(\_:recurrentWeight:sourceGradient:zState:cellOutputFwd:descriptor:name:)](mpsgraph/lstmgradients%28__recurrentweight_sourcegradient_zstate_celloutputfwd_descriptor_name_%29.md)
- [LSTMGradients(\_:recurrentWeight:sourceGradient:zState:cellOutputFwd:inputWeight:bias:initState:initCell:descriptor:name:)](mpsgraph/lstmgradients%28__recurrentweight_sourcegradient_zstate_celloutputfwd_inputweight_bias_initstate_initcell_descriptor_name_%29.md)
- [LSTMGradients(\_:recurrentWeight:sourceGradient:zState:cellOutputFwd:inputWeight:bias:initState:initCell:mask:descriptor:name:)](mpsgraph/lstmgradients%28__recurrentweight_sourcegradient_zstate_celloutputfwd_inputweight_bias_initstate_initcell_mask_descriptor_name_%29.md)
- [LSTMGradients(\_:recurrentWeight:sourceGradient:zState:cellOutputFwd:stateGradient:cellGradient:inputWeight:bias:initState:initCell:mask:peephole:descriptor:name:)](mpsgraph/lstmgradients%28__recurrentweight_sourcegradient_zstate_celloutputfwd_stategradient_cellgradient_inputweight_bias_initstate_initcell_mask_peephole_descriptor_name_%29.md)

## Topics

### Instance Properties

- [activation](mpsgraphlstmdescriptor/activation.md): A parameter that defines the activation function used with the current cell value of the LSTM operation.
- [bidirectional](mpsgraphlstmdescriptor/bidirectional.md): A parameter that defines a bidirectional LSTM layer.
- [cellGateActivation](mpsgraphlstmdescriptor/cellgateactivation.md): A parameter that defines the activation function used with the cell gate of the LSTM operation.
- [forgetGateActivation](mpsgraphlstmdescriptor/forgetgateactivation.md): A parameter that defines the activation function used with the forget gate of the LSTM operation.
- [forgetGateLast](mpsgraphlstmdescriptor/forgetgatelast.md): A parameter that controls the internal order of the LSTM gates.
- [inputGateActivation](mpsgraphlstmdescriptor/inputgateactivation.md): A parameter that defines the activation function used with the input gate of the LSTM operation.
- [outputGateActivation](mpsgraphlstmdescriptor/outputgateactivation.md): A parameter that defines the activation function used with the output gate of the LSTM operation.
- [produceCell](mpsgraphlstmdescriptor/producecell.md): A parameter that controls whether or not to return the output cell from the LSTM layer.
- [reverse](mpsgraphlstmdescriptor/reverse.md): A parameter that defines time direction of the input sequence.
- [training](mpsgraphlstmdescriptor/training.md): A parameter that enables the LSTM layer to support training.

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

# MPSGraphLSTMDescriptor (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

The class that defines the parameters for a long short-term memory (LSTM) operation.

## Declaration

```objectivec
@interface MPSGraphLSTMDescriptor : MPSGraphObject
```

<a id="overview"></a>

## Overview

Use this descriptor with the following [MPSGraph](mpsgraph.md) methods:

- [LSTMWithSourceTensor:recurrentWeight:initState:initCell:descriptor:name:](mpsgraph/lstm%28__recurrentweight_initstate_initcell_descriptor_name_%29.md)
- [LSTMWithSourceTensor:recurrentWeight:inputWeight:bias:initState:initCell:descriptor:name:](mpsgraph/lstm%28__recurrentweight_inputweight_bias_initstate_initcell_descriptor_name_%29.md)
- [LSTMWithSourceTensor:recurrentWeight:inputWeight:bias:initState:initCell:mask:peephole:descriptor:name:](mpsgraph/lstm%28__recurrentweight_inputweight_bias_initstate_initcell_mask_peephole_descriptor_name_%29.md)
- [LSTMGradientsWithSourceTensor:recurrentWeight:sourceGradient:zState:cellOutputFwd:descriptor:name:](mpsgraph/lstmgradients%28__recurrentweight_sourcegradient_zstate_celloutputfwd_descriptor_name_%29.md)
- [LSTMGradientsWithSourceTensor:recurrentWeight:sourceGradient:zState:cellOutputFwd:inputWeight:bias:initState:initCell:descriptor:name:](mpsgraph/lstmgradients%28__recurrentweight_sourcegradient_zstate_celloutputfwd_inputweight_bias_initstate_initcell_descriptor_name_%29.md)
- [LSTMGradientsWithSourceTensor:recurrentWeight:sourceGradient:zState:cellOutputFwd:inputWeight:bias:initState:initCell:mask:descriptor:name:](mpsgraph/lstmgradients%28__recurrentweight_sourcegradient_zstate_celloutputfwd_inputweight_bias_initstate_initcell_mask_descriptor_name_%29.md)
- [LSTMGradientsWithSourceTensor:recurrentWeight:sourceGradient:zState:cellOutputFwd:stateGradient:cellGradient:inputWeight:bias:initState:initCell:mask:peephole:descriptor:name:](mpsgraph/lstmgradients%28__recurrentweight_sourcegradient_zstate_celloutputfwd_stategradient_cellgradient_inputweight_bias_initstate_initcell_mask_peephole_descriptor_name_%29.md)

## Topics

### Instance Properties

- [activation](mpsgraphlstmdescriptor/activation.md): A parameter that defines the activation function used with the current cell value of the LSTM operation.
- [bidirectional](mpsgraphlstmdescriptor/bidirectional.md): A parameter that defines a bidirectional LSTM layer.
- [cellGateActivation](mpsgraphlstmdescriptor/cellgateactivation.md): A parameter that defines the activation function used with the cell gate of the LSTM operation.
- [forgetGateActivation](mpsgraphlstmdescriptor/forgetgateactivation.md): A parameter that defines the activation function used with the forget gate of the LSTM operation.
- [forgetGateLast](mpsgraphlstmdescriptor/forgetgatelast.md): A parameter that controls the internal order of the LSTM gates.
- [inputGateActivation](mpsgraphlstmdescriptor/inputgateactivation.md): A parameter that defines the activation function used with the input gate of the LSTM operation.
- [outputGateActivation](mpsgraphlstmdescriptor/outputgateactivation.md): A parameter that defines the activation function used with the output gate of the LSTM operation.
- [produceCell](mpsgraphlstmdescriptor/producecell.md): A parameter that controls whether or not to return the output cell from the LSTM layer.
- [reverse](mpsgraphlstmdescriptor/reverse.md): A parameter that defines time direction of the input sequence.
- [training](mpsgraphlstmdescriptor/training.md): A parameter that enables the LSTM layer to support training.

### Type Methods

- [descriptor](mpsgraphlstmdescriptor/descriptor.md): Creates an LSTM descriptor with default values.

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
