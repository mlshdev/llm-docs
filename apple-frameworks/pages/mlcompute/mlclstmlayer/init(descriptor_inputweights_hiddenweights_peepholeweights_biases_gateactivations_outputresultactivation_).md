> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclstmlayer/init(descriptor:inputweights:hiddenweights:peepholeweights:biases:gateactivations:outputresultactivation:)](https://developer.apple.com/documentation/mlcompute/mlclstmlayer/init(descriptor:inputweights:hiddenweights:peepholeweights:biases:gateactivations:outputresultactivation:))

# init(descriptor:inputWeights:hiddenWeights:peepholeWeights:biases:gateActivations:outputResultActivation:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an LSTM layer using the descriptor, weights, biases, gate activations, and output result activation that you specify.

## Declaration

```swift
convenience init?(descriptor: MLCLSTMDescriptor, inputWeights: [MLCTensor], hiddenWeights: [MLCTensor], peepholeWeights: [MLCTensor]?, biases: [MLCTensor]?, gateActivations: [MLCActivationDescriptor], outputResultActivation: MLCActivationDescriptor)
```

## Parameters

- `descriptor`: An object you use to configure the LSTM layer.
- `inputWeights`: An array that contains tensors that describe the input weights.
- `hiddenWeights`: An array that contains tensors that describe the hidden weights.
- `peepholeWeights`: An array that contains tensors that describe the peephole weights.
- `biases`: An array that contains tensors that describe the bias terms.
- `gateActivations`: An array that contains 4 neuron descriptors for the input, hidden, cell, and output gate activations.
- `outputResultActivation`: The neuron descriptor you use for the activation function applied to output result. The default value is tanh.

## See Also

### Creating LSTM Layers

- [init(descriptor:inputWeights:hiddenWeights:biases:)](init%28descriptor_inputweights_hiddenweights_biases_%29.md): Deprecated. Creates an LSTM layer with the descriptor, input and hidden weights, and biases you specify.
- [init(descriptor:inputWeights:hiddenWeights:peepholeWeights:biases:)](init%28descriptor_inputweights_hiddenweights_peepholeweights_biases_%29.md): Deprecated. Creates an LSTM layer with the descriptor, weights, and biases you specify.
- [MLCLSTMDescriptor](../mlclstmdescriptor.md): Deprecated. The configuration object you use to create the LSTM layer.
- [MLCLSTMResultMode](../mlclstmresultmode.md): Deprecated. Constants that describe the result of an LSTM layer.

# layerWithDescriptor:inputWeights:hiddenWeights:peepholeWeights:biases:gateActivations:outputResultActivation: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an LSTM layer using the descriptor, weights, biases, gate activations, and output result activation that you specify.

## Declaration

```objectivec
+ (instancetype) layerWithDescriptor:(MLCLSTMDescriptor *) descriptor inputWeights:(NSArray<MLCTensor *> *) inputWeights hiddenWeights:(NSArray<MLCTensor *> *) hiddenWeights peepholeWeights:(NSArray<MLCTensor *> *) peepholeWeights biases:(NSArray<MLCTensor *> *) biases gateActivations:(NSArray<MLCActivationDescriptor *> *) gateActivations outputResultActivation:(MLCActivationDescriptor *) outputResultActivation;
```

## Parameters

- `descriptor`: An object you use to configure the LSTM layer.
- `inputWeights`: An array that contains tensors that describe the input weights.
- `hiddenWeights`: An array that contains tensors that describe the hidden weights.
- `peepholeWeights`: An array that contains tensors that describe the peephole weights.
- `biases`: An array that contains tensors that describe the bias terms.
- `gateActivations`: An array that contains 4 neuron descriptors for the input, hidden, cell, and output gate activations.
- `outputResultActivation`: The neuron descriptor you use for the activation function applied to output result. The default value is tanh.

## See Also

### Creating LSTM Layers

- [layerWithDescriptor:inputWeights:hiddenWeights:biases:](init%28descriptor_inputweights_hiddenweights_biases_%29.md): Deprecated. Creates an LSTM layer with the descriptor, input and hidden weights, and biases you specify.
- [layerWithDescriptor:inputWeights:hiddenWeights:peepholeWeights:biases:](init%28descriptor_inputweights_hiddenweights_peepholeweights_biases_%29.md): Deprecated. Creates an LSTM layer with the descriptor, weights, and biases you specify.
- [MLCLSTMDescriptor](../mlclstmdescriptor.md): Deprecated. The configuration object you use to create the LSTM layer.
- [MLCLSTMResultMode](../mlclstmresultmode.md): Deprecated. Constants that describe the result of an LSTM layer.
