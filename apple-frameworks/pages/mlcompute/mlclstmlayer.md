> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclstmlayer](https://developer.apple.com/documentation/mlcompute/mlclstmlayer)

# MLCLSTMLayer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that represents long short-term memory (LSTM) networks.

## Declaration

```swift
class MLCLSTMLayer
```

<a id="overview"></a>

## Overview

Use this class to create an LSTM layer with one of the following configurations:

- **Unidirectional single layer**: The input weights, hidden weights, and biases are arrays of 4 tensors that describe the specified weights for the input, hidden, cell, and output gates.
- **Unidirectional stacked layers**: The input weights, hidden weights and biases are arrays of [layerCount](mlclstmdescriptor/layercount.md) `* 4` tensors that describe the specified weights for the input, hidden, cell, and output gates, for `layer0...layer(layerCount - 1)`.
- **Bidirectional single layer**: The input weights, hidden weights, and biases are arrays of 8 tensors, where the backward time weights and biases follow the forward time weights.

## Topics

### Creating LSTM Layers

- [init(descriptor:inputWeights:hiddenWeights:biases:)](mlclstmlayer/init%28descriptor_inputweights_hiddenweights_biases_%29.md): Deprecated. Creates an LSTM layer with the descriptor, input and hidden weights, and biases you specify.
- [init(descriptor:inputWeights:hiddenWeights:peepholeWeights:biases:)](mlclstmlayer/init%28descriptor_inputweights_hiddenweights_peepholeweights_biases_%29.md): Deprecated. Creates an LSTM layer with the descriptor, weights, and biases you specify.
- [init(descriptor:inputWeights:hiddenWeights:peepholeWeights:biases:gateActivations:outputResultActivation:)](mlclstmlayer/init%28descriptor_inputweights_hiddenweights_peepholeweights_biases_gateactivations_outputresultactivation_%29.md): Deprecated. Creates an LSTM layer using the descriptor, weights, biases, gate activations, and output result activation that you specify.
- [MLCLSTMDescriptor](mlclstmdescriptor.md): Deprecated. The configuration object you use to create the LSTM layer.
- [MLCLSTMResultMode](mlclstmresultmode.md): Deprecated. Constants that describe the result of an LSTM layer.

### Inspecting LSTM Layers

- [descriptor](mlclstmlayer/descriptor.md): Deprecated. The configuration object you use to create the LSTM layer.
- [gateActivations](mlclstmlayer/gateactivations.md): Deprecated. The array of gate activations you use for input, hidden, cell, and output gates.
- [outputResultActivation](mlclstmlayer/outputresultactivation.md): Deprecated. The output activation descriptor.
- [inputWeights](mlclstmlayer/inputweights.md): Deprecated. The array of tensors that describe the input weights you use for the input, hidden, cell, and output gates.
- [hiddenWeights](mlclstmlayer/hiddenweights.md): Deprecated. The array of tensors that describe the hidden weights you use for the input, hidden, cell, and output gates.
- [peepholeWeights](mlclstmlayer/peepholeweights.md): Deprecated. The array of tensors that describe the peephole weights you use for the input, hidden, cell, and output gates.
- [biases](mlclstmlayer/biases.md): Deprecated. The array of tensors that describe the bias terms you use for the input, hidden, cell, and output gates.
- [inputWeightsParameters](mlclstmlayer/inputweightsparameters.md): Deprecated. The input weights tensor parameters you use for optimizer updates.
- [hiddenWeightsParameters](mlclstmlayer/hiddenweightsparameters.md): Deprecated. The hidden weights tensor parameters you use for optimizer updates.
- [peepholeWeightsParameters](mlclstmlayer/peepholeweightsparameters.md): Deprecated. The peephole weights tensor parameters you use for optimizer updates.
- [biasesParameters](mlclstmlayer/biasesparameters.md): Deprecated. The biases tensor parameters you use for optimizer updates.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Convolution and Recurrent Layers

- [MLCConvolutionLayer](mlcconvolutionlayer.md): Deprecated. A layer that applies a convolution over a signal.
- [MLCPoolingLayer](mlcpoolinglayer.md): Deprecated. A layer that summarizes the average presence of a feature.
- [MLCUpsampleLayer](mlcupsamplelayer.md): Deprecated. A layer that applies upsampling with the shape you specify.
- [MLCEmbeddingLayer](mlcembeddinglayer.md): Deprecated. A layer that stores a word embedding.

# MLCLSTMLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that represents long short-term memory (LSTM) networks.

## Declaration

```objectivec
@interface MLCLSTMLayer : MLCLayer
```

<a id="overview"></a>

## Overview

Use this class to create an LSTM layer with one of the following configurations:

- **Unidirectional single layer**: The input weights, hidden weights, and biases are arrays of 4 tensors that describe the specified weights for the input, hidden, cell, and output gates.
- **Unidirectional stacked layers**: The input weights, hidden weights and biases are arrays of [layerCount](mlclstmdescriptor/layercount.md) `* 4` tensors that describe the specified weights for the input, hidden, cell, and output gates, for `layer0...layer(layerCount - 1)`.
- **Bidirectional single layer**: The input weights, hidden weights, and biases are arrays of 8 tensors, where the backward time weights and biases follow the forward time weights.

## Topics

### Creating LSTM Layers

- [layerWithDescriptor:inputWeights:hiddenWeights:biases:](mlclstmlayer/init%28descriptor_inputweights_hiddenweights_biases_%29.md): Deprecated. Creates an LSTM layer with the descriptor, input and hidden weights, and biases you specify.
- [layerWithDescriptor:inputWeights:hiddenWeights:peepholeWeights:biases:](mlclstmlayer/init%28descriptor_inputweights_hiddenweights_peepholeweights_biases_%29.md): Deprecated. Creates an LSTM layer with the descriptor, weights, and biases you specify.
- [layerWithDescriptor:inputWeights:hiddenWeights:peepholeWeights:biases:gateActivations:outputResultActivation:](mlclstmlayer/init%28descriptor_inputweights_hiddenweights_peepholeweights_biases_gateactivations_outputresultactivation_%29.md): Deprecated. Creates an LSTM layer using the descriptor, weights, biases, gate activations, and output result activation that you specify.
- [MLCLSTMDescriptor](mlclstmdescriptor.md): Deprecated. The configuration object you use to create the LSTM layer.
- [MLCLSTMResultMode](mlclstmresultmode.md): Deprecated. Constants that describe the result of an LSTM layer.

### Inspecting LSTM Layers

- [descriptor](mlclstmlayer/descriptor.md): Deprecated. The configuration object you use to create the LSTM layer.
- [gateActivations](mlclstmlayer/gateactivations.md): Deprecated. The array of gate activations you use for input, hidden, cell, and output gates.
- [outputResultActivation](mlclstmlayer/outputresultactivation.md): Deprecated. The output activation descriptor.
- [inputWeights](mlclstmlayer/inputweights.md): Deprecated. The array of tensors that describe the input weights you use for the input, hidden, cell, and output gates.
- [hiddenWeights](mlclstmlayer/hiddenweights.md): Deprecated. The array of tensors that describe the hidden weights you use for the input, hidden, cell, and output gates.
- [peepholeWeights](mlclstmlayer/peepholeweights.md): Deprecated. The array of tensors that describe the peephole weights you use for the input, hidden, cell, and output gates.
- [biases](mlclstmlayer/biases.md): Deprecated. The array of tensors that describe the bias terms you use for the input, hidden, cell, and output gates.
- [inputWeightsParameters](mlclstmlayer/inputweightsparameters.md): Deprecated. The input weights tensor parameters you use for optimizer updates.
- [hiddenWeightsParameters](mlclstmlayer/hiddenweightsparameters.md): Deprecated. The hidden weights tensor parameters you use for optimizer updates.
- [peepholeWeightsParameters](mlclstmlayer/peepholeweightsparameters.md): Deprecated. The peephole weights tensor parameters you use for optimizer updates.
- [biasesParameters](mlclstmlayer/biasesparameters.md): Deprecated. The biases tensor parameters you use for optimizer updates.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

## See Also

### Convolution and Recurrent Layers

- [MLCConvolutionLayer](mlcconvolutionlayer.md): Deprecated. A layer that applies a convolution over a signal.
- [MLCPoolingLayer](mlcpoolinglayer.md): Deprecated. A layer that summarizes the average presence of a feature.
- [MLCUpsampleLayer](mlcupsamplelayer.md): Deprecated. A layer that applies upsampling with the shape you specify.
- [MLCEmbeddingLayer](mlcembeddinglayer.md): Deprecated. A layer that stores a word embedding.
