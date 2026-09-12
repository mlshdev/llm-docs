> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsrnnsinglegatedescriptor](https://developer.apple.com/documentation/metalperformanceshaders/mpsrnnsinglegatedescriptor)

# MPSRNNSingleGateDescriptor (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A description of a simple recurrent block or layer.

## Declaration

```swift
class MPSRNNSingleGateDescriptor
```

<a id="overview"></a>

## Overview

The recurrent neural network (RNN) layer initialized with a [MPSRNNSingleGateDescriptor](mpsrnnsinglegatedescriptor.md) transforms the input data (image or matrix) and previous output with a set of filters. Each produces one feature map in the new output data.

You may provide the RNN unit with a single input or a sequence of inputs.

<a id="Description-of-Operation"></a>

### Description of Operation

1. Let `x_j` be the input data (at time index `t` of sequence, `j` index containing quadruplet: batch index, `x,y` and feature index (`x = y = 0` for matrices)).
2. Let `h0_j` be the recurrent input (previous output) data from previous time step (at time index `t-1` of sequence).
3. Let `h1_i` be the output data produced at this time step.
4. Let `W_ij, U_ij` be the weights for input and recurrent input data, respectively.
5. Let `b_i` be a bias term.
6. Let `gi(x)` be a neuron activation function.

The new output image `h1_i` data is computed as follows:

```other
h1_i = gi( W_ij * x_j + U_ij * h0_j  + b_i )
```

The `*` stands for convolution (see [MPSRNNImageInferenceLayer](mpsrnnimageinferencelayer.md)) or matrix-vector/matrix multiplication (see [MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md)).

Summation is over index `j` (except for the batch index), but there’s no summation over repeated index `i` (the output index).

Note that for validity, all intermediate images must be of same size, and the `U` matrix must be square (that is, [outputFeatureChannels](mpsrnndescriptor/outputfeaturechannels.md) `==` [inputFeatureChannels](mpsrnndescriptor/inputfeaturechannels.md)). Also, the bias terms are scalars with regard to spatial dimensions.

## Topics

### Instance Properties

- [inputWeights](mpsrnnsinglegatedescriptor/inputweights.md)
- [recurrentWeights](mpsrnnsinglegatedescriptor/recurrentweights.md)
- [MPSCNNConvolutionDataSource](mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.

### Type Methods

- [createRNNSingleGateDescriptor(withInputFeatureChannels:outputFeatureChannels:)](mpsrnnsinglegatedescriptor/creaternnsinglegatedescriptor%28withinputfeaturechannels_outputfeaturechannels_%29.md)

## Relationships

### Inherits From

- [MPSRNNDescriptor](mpsrnndescriptor.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Recurrent Neural Networks

- [MPSRNNImageInferenceLayer](mpsrnnimageinferencelayer.md): A recurrent neural network layer for inference on Metal Performance Shaders images.
- [MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md): A recurrent neural network layer for inference on Metal Performance Shaders matrices.
- [MPSGRUDescriptor](mpsgrudescriptor.md): A description of a gated recurrent unit block or layer.
- [MPSLSTMDescriptor](mpslstmdescriptor.md): A description of a long short-term memory block or layer.
- [MPSRNNSequenceDirection](mpsrnnsequencedirection.md): Directions that a sequence of inputs can be processed by a recurrent neural network layer.
- [MPSRNNMatrixTrainingLayer](mpsrnnmatrixtraininglayer.md): A layer for training recurrent neural networks on Metal Performance Shaders matrices.
- [MPSRNNMatrixTrainingState](mpsrnnmatrixtrainingstate.md): A class that holds data from a forward pass to be used in a backward pass.

# MPSRNNSingleGateDescriptor (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A description of a simple recurrent block or layer.

## Declaration

```objectivec
@interface MPSRNNSingleGateDescriptor : MPSRNNDescriptor
```

<a id="overview"></a>

## Overview

The recurrent neural network (RNN) layer initialized with a [MPSRNNSingleGateDescriptor](mpsrnnsinglegatedescriptor.md) transforms the input data (image or matrix) and previous output with a set of filters. Each produces one feature map in the new output data.

You may provide the RNN unit with a single input or a sequence of inputs.

<a id="Description-of-Operation"></a>

### Description of Operation

1. Let `x_j` be the input data (at time index `t` of sequence, `j` index containing quadruplet: batch index, `x,y` and feature index (`x = y = 0` for matrices)).
2. Let `h0_j` be the recurrent input (previous output) data from previous time step (at time index `t-1` of sequence).
3. Let `h1_i` be the output data produced at this time step.
4. Let `W_ij, U_ij` be the weights for input and recurrent input data, respectively.
5. Let `b_i` be a bias term.
6. Let `gi(x)` be a neuron activation function.

The new output image `h1_i` data is computed as follows:

```other
h1_i = gi( W_ij * x_j + U_ij * h0_j  + b_i )
```

The `*` stands for convolution (see [MPSRNNImageInferenceLayer](mpsrnnimageinferencelayer.md)) or matrix-vector/matrix multiplication (see [MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md)).

Summation is over index `j` (except for the batch index), but there’s no summation over repeated index `i` (the output index).

Note that for validity, all intermediate images must be of same size, and the `U` matrix must be square (that is, [outputFeatureChannels](mpsrnndescriptor/outputfeaturechannels.md) `==` [inputFeatureChannels](mpsrnndescriptor/inputfeaturechannels.md)). Also, the bias terms are scalars with regard to spatial dimensions.

## Topics

### Instance Properties

- [inputWeights](mpsrnnsinglegatedescriptor/inputweights.md)
- [recurrentWeights](mpsrnnsinglegatedescriptor/recurrentweights.md)
- [MPSCNNConvolutionDataSource](mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.

### Type Methods

- [createRNNSingleGateDescriptorWithInputFeatureChannels:outputFeatureChannels:](mpsrnnsinglegatedescriptor/creaternnsinglegatedescriptor%28withinputfeaturechannels_outputfeaturechannels_%29.md)

## Relationships

### Inherits From

- [MPSRNNDescriptor](mpsrnndescriptor.md)

## See Also

### Recurrent Neural Networks

- [MPSRNNImageInferenceLayer](mpsrnnimageinferencelayer.md): A recurrent neural network layer for inference on Metal Performance Shaders images.
- [MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md): A recurrent neural network layer for inference on Metal Performance Shaders matrices.
- [MPSGRUDescriptor](mpsgrudescriptor.md): A description of a gated recurrent unit block or layer.
- [MPSLSTMDescriptor](mpslstmdescriptor.md): A description of a long short-term memory block or layer.
- [MPSRNNSequenceDirection](mpsrnnsequencedirection.md): Directions that a sequence of inputs can be processed by a recurrent neural network layer.
- [MPSRNNMatrixTrainingLayer](mpsrnnmatrixtraininglayer.md): A layer for training recurrent neural networks on Metal Performance Shaders matrices.
- [MPSRNNMatrixTrainingState](mpsrnnmatrixtrainingstate.md): A class that holds data from a forward pass to be used in a backward pass.
