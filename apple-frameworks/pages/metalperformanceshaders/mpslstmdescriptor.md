> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpslstmdescriptor](https://developer.apple.com/documentation/metalperformanceshaders/mpslstmdescriptor)

# MPSLSTMDescriptor (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A description of a long short-term memory block or layer.

## Declaration

```swift
class MPSLSTMDescriptor
```

<a id="overview"></a>

## Overview

The recurrent neural network (RNN) layer initialized with [MPSLSTMDescriptor](mpslstmdescriptor.md) transforms the input data (image or matrix), the memory cell data, and previous output with a set of filters. Each produces one feature map in the output data and memory cell according to the long short-term memory (LSTM) formula detailed below.

You may provide the LSTM unit with a single input or a sequence of inputs.

<a id="Description-of-Operation"></a>

### Description of Operation

1. Let `x_j` be the input data (at time index `t` of sequence, `j` index containing quadruplet: batch index, `x`,`y` and feature index (`x = y = 0` for matrices)).
2. Let `h0_j` be the recurrent input (previous output) data from previous time step (at time index `t-1` of sequence).
3. Let `h1_i` be the output data produced at this time step.
4. Let `c0_j` be the previous memory cell data (at time index `t-1` of sequence).
5. Let `c1_i` be the new memory cell data (at time index `t-1` of sequence).
6. Let `Wi_ij`, `Ui_ij`, `Vi_ij` be the input gate weights for input, recurrent input, and memory cell (peephole) data, respectively.
7. Let `bi_i` be the bias for the input gate.
8. Let `Wf_ij`, `Uf_ij`, `Vf_ij` be the forget gate weights for input, recurrent input, and memory cell data, respectively.
9. Let `bf_i` be the bias for the forget gate.
10. Let `Wo_ij`, `Uo_ij`, `Vo_ij` be the output gate weights for input, recurrent input, and memory cell data, respectively.
11. Let `bo_i` be the bias for the output gate.
12. Let `Wc_ij`, `Uc_ij`, `Vc_ij` be the memory cell gate weights for input, recurrent input, and memory cell data, respectively.
13. Let `bc_i` be the bias for the memory cell gate.
14. Let `gi(x)`, `gf(x)`, `go(x)`, `gc(x)` be the neuron activation function for the input, forget, output gate, and memory cell gate.
15. Let `gh(x)` be the activation function applied to result memory cell data.

The output of the LSTM layer is computed as follows:

```other
I_i = gi(  Wi_ij * x_j  +  Ui_ij * h0_j  +  Vi_ij * c0_j  + bi_i  )
F_i = gf(  Wf_ij * x_j  +  Uf_ij * h0_j  +  Vf_ij * c0_j  + bf_i  )
C_i = gc(  Wc_ij * x_j  +  Uc_ij * h0_j  +  Vc_ij * c0_j  + bc_i  )

c1_i = F_i c0_i  +  I_i C_i

O_i = go(  Wo_ij * x_j  +  Uo_ij * h0_j  +  Vo_ij * c1_j  + bo_i  )
h1_i = O_i gh( c1_i )
```

The `*` stands for convolution (see [MPSRNNImageInferenceLayer](mpsrnnimageinferencelayer.md)) or matrix-vector/matrix multiplication (see [MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md)).

Summation is over index `j` (except for the batch index), but there’s no summation over repeated index `i` (the output index).

Note that for validity, all intermediate images must be of same size, and all `U` and `V` matrices must be square (that is, [outputFeatureChannels](mpsrnndescriptor/outputfeaturechannels.md) == [inputFeatureChannels](mpsrnndescriptor/inputfeaturechannels.md)). Also, the bias terms are scalars with regard to spatial dimensions.

## Topics

### Instance Properties

- [cellGateInputWeights](mpslstmdescriptor/cellgateinputweights.md)
- [cellGateMemoryWeights](mpslstmdescriptor/cellgatememoryweights.md)
- [cellGateRecurrentWeights](mpslstmdescriptor/cellgaterecurrentweights.md)
- [cellToOutputNeuronParamA](mpslstmdescriptor/celltooutputneuronparama.md)
- [cellToOutputNeuronParamB](mpslstmdescriptor/celltooutputneuronparamb.md)
- [cellToOutputNeuronType](mpslstmdescriptor/celltooutputneurontype.md)
- [MPSCNNNeuronType](mpscnnneurontype.md): The types of neuron filter to append to a convolution.
- [forgetGateInputWeights](mpslstmdescriptor/forgetgateinputweights.md)
- [forgetGateMemoryWeights](mpslstmdescriptor/forgetgatememoryweights.md)
- [forgetGateRecurrentWeights](mpslstmdescriptor/forgetgaterecurrentweights.md)
- [inputGateInputWeights](mpslstmdescriptor/inputgateinputweights.md)
- [inputGateMemoryWeights](mpslstmdescriptor/inputgatememoryweights.md)
- [inputGateRecurrentWeights](mpslstmdescriptor/inputgaterecurrentweights.md)
- [memoryWeightsAreDiagonal](mpslstmdescriptor/memoryweightsarediagonal.md)
- [outputGateInputWeights](mpslstmdescriptor/outputgateinputweights.md)
- [outputGateMemoryWeights](mpslstmdescriptor/outputgatememoryweights.md)
- [outputGateRecurrentWeights](mpslstmdescriptor/outputgaterecurrentweights.md)
- [MPSCNNConvolutionDataSource](mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
- [cellToOutputNeuronParamC](mpslstmdescriptor/celltooutputneuronparamc.md)

### Type Methods

- [createLSTMDescriptor(withInputFeatureChannels:outputFeatureChannels:)](mpslstmdescriptor/createlstmdescriptor%28withinputfeaturechannels_outputfeaturechannels_%29.md)

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
- [MPSRNNSingleGateDescriptor](mpsrnnsinglegatedescriptor.md): A description of a simple recurrent block or layer.
- [MPSGRUDescriptor](mpsgrudescriptor.md): A description of a gated recurrent unit block or layer.
- [MPSRNNSequenceDirection](mpsrnnsequencedirection.md): Directions that a sequence of inputs can be processed by a recurrent neural network layer.
- [MPSRNNMatrixTrainingLayer](mpsrnnmatrixtraininglayer.md): A layer for training recurrent neural networks on Metal Performance Shaders matrices.
- [MPSRNNMatrixTrainingState](mpsrnnmatrixtrainingstate.md): A class that holds data from a forward pass to be used in a backward pass.

# MPSLSTMDescriptor (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A description of a long short-term memory block or layer.

## Declaration

```objectivec
@interface MPSLSTMDescriptor : MPSRNNDescriptor
```

<a id="overview"></a>

## Overview

The recurrent neural network (RNN) layer initialized with [MPSLSTMDescriptor](mpslstmdescriptor.md) transforms the input data (image or matrix), the memory cell data, and previous output with a set of filters. Each produces one feature map in the output data and memory cell according to the long short-term memory (LSTM) formula detailed below.

You may provide the LSTM unit with a single input or a sequence of inputs.

<a id="Description-of-Operation"></a>

### Description of Operation

1. Let `x_j` be the input data (at time index `t` of sequence, `j` index containing quadruplet: batch index, `x`,`y` and feature index (`x = y = 0` for matrices)).
2. Let `h0_j` be the recurrent input (previous output) data from previous time step (at time index `t-1` of sequence).
3. Let `h1_i` be the output data produced at this time step.
4. Let `c0_j` be the previous memory cell data (at time index `t-1` of sequence).
5. Let `c1_i` be the new memory cell data (at time index `t-1` of sequence).
6. Let `Wi_ij`, `Ui_ij`, `Vi_ij` be the input gate weights for input, recurrent input, and memory cell (peephole) data, respectively.
7. Let `bi_i` be the bias for the input gate.
8. Let `Wf_ij`, `Uf_ij`, `Vf_ij` be the forget gate weights for input, recurrent input, and memory cell data, respectively.
9. Let `bf_i` be the bias for the forget gate.
10. Let `Wo_ij`, `Uo_ij`, `Vo_ij` be the output gate weights for input, recurrent input, and memory cell data, respectively.
11. Let `bo_i` be the bias for the output gate.
12. Let `Wc_ij`, `Uc_ij`, `Vc_ij` be the memory cell gate weights for input, recurrent input, and memory cell data, respectively.
13. Let `bc_i` be the bias for the memory cell gate.
14. Let `gi(x)`, `gf(x)`, `go(x)`, `gc(x)` be the neuron activation function for the input, forget, output gate, and memory cell gate.
15. Let `gh(x)` be the activation function applied to result memory cell data.

The output of the LSTM layer is computed as follows:

```other
I_i = gi(  Wi_ij * x_j  +  Ui_ij * h0_j  +  Vi_ij * c0_j  + bi_i  )
F_i = gf(  Wf_ij * x_j  +  Uf_ij * h0_j  +  Vf_ij * c0_j  + bf_i  )
C_i = gc(  Wc_ij * x_j  +  Uc_ij * h0_j  +  Vc_ij * c0_j  + bc_i  )

c1_i = F_i c0_i  +  I_i C_i

O_i = go(  Wo_ij * x_j  +  Uo_ij * h0_j  +  Vo_ij * c1_j  + bo_i  )
h1_i = O_i gh( c1_i )
```

The `*` stands for convolution (see [MPSRNNImageInferenceLayer](mpsrnnimageinferencelayer.md)) or matrix-vector/matrix multiplication (see [MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md)).

Summation is over index `j` (except for the batch index), but there’s no summation over repeated index `i` (the output index).

Note that for validity, all intermediate images must be of same size, and all `U` and `V` matrices must be square (that is, [outputFeatureChannels](mpsrnndescriptor/outputfeaturechannels.md) == [inputFeatureChannels](mpsrnndescriptor/inputfeaturechannels.md)). Also, the bias terms are scalars with regard to spatial dimensions.

## Topics

### Instance Properties

- [cellGateInputWeights](mpslstmdescriptor/cellgateinputweights.md)
- [cellGateMemoryWeights](mpslstmdescriptor/cellgatememoryweights.md)
- [cellGateRecurrentWeights](mpslstmdescriptor/cellgaterecurrentweights.md)
- [cellToOutputNeuronParamA](mpslstmdescriptor/celltooutputneuronparama.md)
- [cellToOutputNeuronParamB](mpslstmdescriptor/celltooutputneuronparamb.md)
- [cellToOutputNeuronType](mpslstmdescriptor/celltooutputneurontype.md)
- [MPSCNNNeuronType](mpscnnneurontype.md): The types of neuron filter to append to a convolution.
- [forgetGateInputWeights](mpslstmdescriptor/forgetgateinputweights.md)
- [forgetGateMemoryWeights](mpslstmdescriptor/forgetgatememoryweights.md)
- [forgetGateRecurrentWeights](mpslstmdescriptor/forgetgaterecurrentweights.md)
- [inputGateInputWeights](mpslstmdescriptor/inputgateinputweights.md)
- [inputGateMemoryWeights](mpslstmdescriptor/inputgatememoryweights.md)
- [inputGateRecurrentWeights](mpslstmdescriptor/inputgaterecurrentweights.md)
- [memoryWeightsAreDiagonal](mpslstmdescriptor/memoryweightsarediagonal.md)
- [outputGateInputWeights](mpslstmdescriptor/outputgateinputweights.md)
- [outputGateMemoryWeights](mpslstmdescriptor/outputgatememoryweights.md)
- [outputGateRecurrentWeights](mpslstmdescriptor/outputgaterecurrentweights.md)
- [MPSCNNConvolutionDataSource](mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
- [cellToOutputNeuronParamC](mpslstmdescriptor/celltooutputneuronparamc.md)

### Type Methods

- [createLSTMDescriptorWithInputFeatureChannels:outputFeatureChannels:](mpslstmdescriptor/createlstmdescriptor%28withinputfeaturechannels_outputfeaturechannels_%29.md)

## Relationships

### Inherits From

- [MPSRNNDescriptor](mpsrnndescriptor.md)

## See Also

### Recurrent Neural Networks

- [MPSRNNImageInferenceLayer](mpsrnnimageinferencelayer.md): A recurrent neural network layer for inference on Metal Performance Shaders images.
- [MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md): A recurrent neural network layer for inference on Metal Performance Shaders matrices.
- [MPSRNNSingleGateDescriptor](mpsrnnsinglegatedescriptor.md): A description of a simple recurrent block or layer.
- [MPSGRUDescriptor](mpsgrudescriptor.md): A description of a gated recurrent unit block or layer.
- [MPSRNNSequenceDirection](mpsrnnsequencedirection.md): Directions that a sequence of inputs can be processed by a recurrent neural network layer.
- [MPSRNNMatrixTrainingLayer](mpsrnnmatrixtraininglayer.md): A layer for training recurrent neural networks on Metal Performance Shaders matrices.
- [MPSRNNMatrixTrainingState](mpsrnnmatrixtrainingstate.md): A class that holds data from a forward pass to be used in a backward pass.
