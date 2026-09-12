> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclstmlayer/inputweights](https://developer.apple.com/documentation/mlcompute/mlclstmlayer/inputweights)

# inputWeights (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The array of tensors that describe the input weights you use for the input, hidden, cell, and output gates.

## Declaration

```swift
var inputWeights: [MLCTensor] { get }
```

## See Also

### Inspecting LSTM Layers

- [descriptor](descriptor.md): Deprecated. The configuration object you use to create the LSTM layer.
- [gateActivations](gateactivations.md): Deprecated. The array of gate activations you use for input, hidden, cell, and output gates.
- [outputResultActivation](outputresultactivation.md): Deprecated. The output activation descriptor.
- [hiddenWeights](hiddenweights.md): Deprecated. The array of tensors that describe the hidden weights you use for the input, hidden, cell, and output gates.
- [peepholeWeights](peepholeweights.md): Deprecated. The array of tensors that describe the peephole weights you use for the input, hidden, cell, and output gates.
- [biases](biases.md): Deprecated. The array of tensors that describe the bias terms you use for the input, hidden, cell, and output gates.
- [inputWeightsParameters](inputweightsparameters.md): Deprecated. The input weights tensor parameters you use for optimizer updates.
- [hiddenWeightsParameters](hiddenweightsparameters.md): Deprecated. The hidden weights tensor parameters you use for optimizer updates.
- [peepholeWeightsParameters](peepholeweightsparameters.md): Deprecated. The peephole weights tensor parameters you use for optimizer updates.
- [biasesParameters](biasesparameters.md): Deprecated. The biases tensor parameters you use for optimizer updates.

# inputWeights (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The array of tensors that describe the input weights you use for the input, hidden, cell, and output gates.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) NSArray<MLCTensor *> * inputWeights;
```

## See Also

### Inspecting LSTM Layers

- [descriptor](descriptor.md): Deprecated. The configuration object you use to create the LSTM layer.
- [gateActivations](gateactivations.md): Deprecated. The array of gate activations you use for input, hidden, cell, and output gates.
- [outputResultActivation](outputresultactivation.md): Deprecated. The output activation descriptor.
- [hiddenWeights](hiddenweights.md): Deprecated. The array of tensors that describe the hidden weights you use for the input, hidden, cell, and output gates.
- [peepholeWeights](peepholeweights.md): Deprecated. The array of tensors that describe the peephole weights you use for the input, hidden, cell, and output gates.
- [biases](biases.md): Deprecated. The array of tensors that describe the bias terms you use for the input, hidden, cell, and output gates.
- [inputWeightsParameters](inputweightsparameters.md): Deprecated. The input weights tensor parameters you use for optimizer updates.
- [hiddenWeightsParameters](hiddenweightsparameters.md): Deprecated. The hidden weights tensor parameters you use for optimizer updates.
- [peepholeWeightsParameters](peepholeweightsparameters.md): Deprecated. The peephole weights tensor parameters you use for optimizer updates.
- [biasesParameters](biasesparameters.md): Deprecated. The biases tensor parameters you use for optimizer updates.
