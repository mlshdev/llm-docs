> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclstmresultmode](https://developer.apple.com/documentation/mlcompute/mlclstmresultmode)

# MLCLSTMResultMode (Swift)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Constants that describe the result of an LSTM layer.

## Declaration

```swift
enum MLCLSTMResultMode
```

## Topics

### Enumeration Cases

- [MLCLSTMResultMode.output](mlclstmresultmode/output.md): Deprecated. A result mode that indicates the layer produces a single result tensor that represents the final output of the LSTM.
- [MLCLSTMResultMode.outputAndStates](mlclstmresultmode/outputandstates.md): Deprecated. A result mode that indicates the layer produces three result tensors that represent the final output of the LSTM, the last hidden state, and the cell state.
- [debugDescription](mlclstmresultmode/debugdescription.md): A textual description of the LSTM result mode you use for debugging.

### Initializers

- [init(rawValue:)](mlclstmresultmode/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating LSTM Layers

- [init(descriptor:inputWeights:hiddenWeights:biases:)](mlclstmlayer/init%28descriptor_inputweights_hiddenweights_biases_%29.md): Deprecated. Creates an LSTM layer with the descriptor, input and hidden weights, and biases you specify.
- [init(descriptor:inputWeights:hiddenWeights:peepholeWeights:biases:)](mlclstmlayer/init%28descriptor_inputweights_hiddenweights_peepholeweights_biases_%29.md): Deprecated. Creates an LSTM layer with the descriptor, weights, and biases you specify.
- [init(descriptor:inputWeights:hiddenWeights:peepholeWeights:biases:gateActivations:outputResultActivation:)](mlclstmlayer/init%28descriptor_inputweights_hiddenweights_peepholeweights_biases_gateactivations_outputresultactivation_%29.md): Deprecated. Creates an LSTM layer using the descriptor, weights, biases, gate activations, and output result activation that you specify.
- [MLCLSTMDescriptor](mlclstmdescriptor.md): Deprecated. The configuration object you use to create the LSTM layer.

# MLCLSTMResultMode (Objective-C)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

Constants that describe the result of an LSTM layer.

## Declaration

```objectivec
enum MLCLSTMResultMode : uint64_t;
```

## Topics

### Enumeration Cases

- [MLCLSTMResultModeOutput](mlclstmresultmode/output.md): Deprecated. A result mode that indicates the layer produces a single result tensor that represents the final output of the LSTM.
- [MLCLSTMResultModeOutputAndStates](mlclstmresultmode/outputandstates.md): Deprecated. A result mode that indicates the layer produces three result tensors that represent the final output of the LSTM, the last hidden state, and the cell state.
- [MLCLSTMResultModeDebugDescription](mlclstmresultmode/debugdescription.md): A textual description of the LSTM result mode you use for debugging.

## See Also

### Creating LSTM Layers

- [layerWithDescriptor:inputWeights:hiddenWeights:biases:](mlclstmlayer/init%28descriptor_inputweights_hiddenweights_biases_%29.md): Deprecated. Creates an LSTM layer with the descriptor, input and hidden weights, and biases you specify.
- [layerWithDescriptor:inputWeights:hiddenWeights:peepholeWeights:biases:](mlclstmlayer/init%28descriptor_inputweights_hiddenweights_peepholeweights_biases_%29.md): Deprecated. Creates an LSTM layer with the descriptor, weights, and biases you specify.
- [layerWithDescriptor:inputWeights:hiddenWeights:peepholeWeights:biases:gateActivations:outputResultActivation:](mlclstmlayer/init%28descriptor_inputweights_hiddenweights_peepholeweights_biases_gateactivations_outputresultactivation_%29.md): Deprecated. Creates an LSTM layer using the descriptor, weights, biases, gate activations, and output result activation that you specify.
- [MLCLSTMDescriptor](mlclstmdescriptor.md): Deprecated. The configuration object you use to create the LSTM layer.
