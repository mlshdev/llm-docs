> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclstmlayer/descriptor](https://developer.apple.com/documentation/mlcompute/mlclstmlayer/descriptor)

# descriptor (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The configuration object you use to create the LSTM layer.

## Declaration

```swift
@NSCopying var descriptor: MLCLSTMDescriptor { get }
```

## See Also

### Inspecting LSTM Layers

- [gateActivations](gateactivations.md): Deprecated. The array of gate activations you use for input, hidden, cell, and output gates.
- [outputResultActivation](outputresultactivation.md): Deprecated. The output activation descriptor.
- [inputWeights](inputweights.md): Deprecated. The array of tensors that describe the input weights you use for the input, hidden, cell, and output gates.
- [hiddenWeights](hiddenweights.md): Deprecated. The array of tensors that describe the hidden weights you use for the input, hidden, cell, and output gates.
- [peepholeWeights](peepholeweights.md): Deprecated. The array of tensors that describe the peephole weights you use for the input, hidden, cell, and output gates.
- [biases](biases.md): Deprecated. The array of tensors that describe the bias terms you use for the input, hidden, cell, and output gates.
- [inputWeightsParameters](inputweightsparameters.md): Deprecated. The input weights tensor parameters you use for optimizer updates.
- [hiddenWeightsParameters](hiddenweightsparameters.md): Deprecated. The hidden weights tensor parameters you use for optimizer updates.
- [peepholeWeightsParameters](peepholeweightsparameters.md): Deprecated. The peephole weights tensor parameters you use for optimizer updates.
- [biasesParameters](biasesparameters.md): Deprecated. The biases tensor parameters you use for optimizer updates.

# descriptor (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The configuration object you use to create the LSTM layer.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) MLCLSTMDescriptor * descriptor;
```

## See Also

### Inspecting LSTM Layers

- [gateActivations](gateactivations.md): Deprecated. The array of gate activations you use for input, hidden, cell, and output gates.
- [outputResultActivation](outputresultactivation.md): Deprecated. The output activation descriptor.
- [inputWeights](inputweights.md): Deprecated. The array of tensors that describe the input weights you use for the input, hidden, cell, and output gates.
- [hiddenWeights](hiddenweights.md): Deprecated. The array of tensors that describe the hidden weights you use for the input, hidden, cell, and output gates.
- [peepholeWeights](peepholeweights.md): Deprecated. The array of tensors that describe the peephole weights you use for the input, hidden, cell, and output gates.
- [biases](biases.md): Deprecated. The array of tensors that describe the bias terms you use for the input, hidden, cell, and output gates.
- [inputWeightsParameters](inputweightsparameters.md): Deprecated. The input weights tensor parameters you use for optimizer updates.
- [hiddenWeightsParameters](hiddenweightsparameters.md): Deprecated. The hidden weights tensor parameters you use for optimizer updates.
- [peepholeWeightsParameters](peepholeweightsparameters.md): Deprecated. The peephole weights tensor parameters you use for optimizer updates.
- [biasesParameters](biasesparameters.md): Deprecated. The biases tensor parameters you use for optimizer updates.
