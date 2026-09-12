> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclstmdescriptor](https://developer.apple.com/documentation/mlcompute/mlclstmdescriptor)

# MLCLSTMDescriptor (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The configuration object you use to create the LSTM layer.

## Declaration

```swift
class MLCLSTMDescriptor
```

## Topics

### Creating LSTM Descriptors

- [init(inputSize:hiddenSize:layerCount:)](mlclstmdescriptor/init%28inputsize_hiddensize_layercount_%29.md): Deprecated. Creates a batch first LSTM descriptor with the input size and number of layers you specify.
- [init(inputSize:hiddenSize:layerCount:usesBiases:isBidirectional:dropout:)](mlclstmdescriptor/init%28inputsize_hiddensize_layercount_usesbiases_isbidirectional_dropout_%29.md): Deprecated. Creates a batch first LSTM descriptor with bias and bidirectional options you specify.
- [init(inputSize:hiddenSize:layerCount:usesBiases:batchFirst:isBidirectional:dropout:)](mlclstmdescriptor/init%28inputsize_hiddensize_layercount_usesbiases_batchfirst_isbidirectional_dropout_%29.md): Deprecated. Creates a batch first LSTM descriptor that allows you to indicate whether the input and output shape is batch first.
- [init(inputSize:hiddenSize:layerCount:usesBiases:batchFirst:isBidirectional:returnsSequences:dropout:)](mlclstmdescriptor/init%28inputsize_hiddensize_layercount_usesbiases_batchfirst_isbidirectional_returnssequences_dropout_%29.md): Deprecated. Creates a batch first LSTM descriptor that allows you to indicate whether the layer returns output for all sequences, or output for only the last sequence.
- [init(inputSize:hiddenSize:layerCount:usesBiases:batchFirst:isBidirectional:returnsSequences:dropout:resultMode:)](mlclstmdescriptor/init%28inputsize_hiddensize_layercount_usesbiases_batchfirst_isbidirectional_returnssequences_dropout_resultmode_%29.md): Deprecated. Creates a descriptor with the number of features and layers, dropout, and options for use of biases, batch order, return sequences, bidirectionality, and expected tensors you specify.

### Inspecting LSTM Descriptors

- [batchFirst](mlclstmdescriptor/batchfirst.md): Deprecated. A Boolean that indicates whether the input and output shape is batch first.
- [dropout](mlclstmdescriptor/dropout.md): Deprecated. The dropout probability.
- [hiddenSize](mlclstmdescriptor/hiddensize.md): Deprecated. The number of features in the hidden state.
- [inputSize](mlclstmdescriptor/inputsize.md): Deprecated. The number of expected features in the input.
- [isBidirectional](mlclstmdescriptor/isbidirectional.md): Deprecated. A Boolean that indicates whether the layer is bidirectional.
- [layerCount](mlclstmdescriptor/layercount.md): Deprecated. The number of recurrent layers.
- [resultMode](mlclstmdescriptor/resultmode.md): Deprecated. The mode that indicates whether the layer produces a single result tensor or three result tensors — final output, last hidden state, and the cell state.
- [returnsSequences](mlclstmdescriptor/returnssequences.md): Deprecated. A Boolean that indicates whether the layer returns output for all sequences.
- [usesBiases](mlclstmdescriptor/usesbiases.md): Deprecated. A Boolean that indicates whether you use bias weights.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Creating LSTM Layers

- [init(descriptor:inputWeights:hiddenWeights:biases:)](mlclstmlayer/init%28descriptor_inputweights_hiddenweights_biases_%29.md): Deprecated. Creates an LSTM layer with the descriptor, input and hidden weights, and biases you specify.
- [init(descriptor:inputWeights:hiddenWeights:peepholeWeights:biases:)](mlclstmlayer/init%28descriptor_inputweights_hiddenweights_peepholeweights_biases_%29.md): Deprecated. Creates an LSTM layer with the descriptor, weights, and biases you specify.
- [init(descriptor:inputWeights:hiddenWeights:peepholeWeights:biases:gateActivations:outputResultActivation:)](mlclstmlayer/init%28descriptor_inputweights_hiddenweights_peepholeweights_biases_gateactivations_outputresultactivation_%29.md): Deprecated. Creates an LSTM layer using the descriptor, weights, biases, gate activations, and output result activation that you specify.
- [MLCLSTMResultMode](mlclstmresultmode.md): Deprecated. Constants that describe the result of an LSTM layer.

# MLCLSTMDescriptor (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The configuration object you use to create the LSTM layer.

## Declaration

```objectivec
@interface MLCLSTMDescriptor : NSObject
```

## Topics

### Creating LSTM Descriptors

- [descriptorWithInputSize:hiddenSize:layerCount:](mlclstmdescriptor/init%28inputsize_hiddensize_layercount_%29.md): Deprecated. Creates a batch first LSTM descriptor with the input size and number of layers you specify.
- [descriptorWithInputSize:hiddenSize:layerCount:usesBiases:isBidirectional:dropout:](mlclstmdescriptor/init%28inputsize_hiddensize_layercount_usesbiases_isbidirectional_dropout_%29.md): Deprecated. Creates a batch first LSTM descriptor with bias and bidirectional options you specify.
- [descriptorWithInputSize:hiddenSize:layerCount:usesBiases:batchFirst:isBidirectional:dropout:](mlclstmdescriptor/init%28inputsize_hiddensize_layercount_usesbiases_batchfirst_isbidirectional_dropout_%29.md): Deprecated. Creates a batch first LSTM descriptor that allows you to indicate whether the input and output shape is batch first.
- [descriptorWithInputSize:hiddenSize:layerCount:usesBiases:batchFirst:isBidirectional:returnsSequences:dropout:](mlclstmdescriptor/init%28inputsize_hiddensize_layercount_usesbiases_batchfirst_isbidirectional_returnssequences_dropout_%29.md): Deprecated. Creates a batch first LSTM descriptor that allows you to indicate whether the layer returns output for all sequences, or output for only the last sequence.
- [descriptorWithInputSize:hiddenSize:layerCount:usesBiases:batchFirst:isBidirectional:returnsSequences:dropout:resultMode:](mlclstmdescriptor/init%28inputsize_hiddensize_layercount_usesbiases_batchfirst_isbidirectional_returnssequences_dropout_resultmode_%29.md): Deprecated. Creates a descriptor with the number of features and layers, dropout, and options for use of biases, batch order, return sequences, bidirectionality, and expected tensors you specify.

### Inspecting LSTM Descriptors

- [batchFirst](mlclstmdescriptor/batchfirst.md): Deprecated. A Boolean that indicates whether the input and output shape is batch first.
- [dropout](mlclstmdescriptor/dropout.md): Deprecated. The dropout probability.
- [hiddenSize](mlclstmdescriptor/hiddensize.md): Deprecated. The number of features in the hidden state.
- [inputSize](mlclstmdescriptor/inputsize.md): Deprecated. The number of expected features in the input.
- [isBidirectional](mlclstmdescriptor/isbidirectional.md): Deprecated. A Boolean that indicates whether the layer is bidirectional.
- [layerCount](mlclstmdescriptor/layercount.md): Deprecated. The number of recurrent layers.
- [resultMode](mlclstmdescriptor/resultmode.md): Deprecated. The mode that indicates whether the layer produces a single result tensor or three result tensors — final output, last hidden state, and the cell state.
- [returnsSequences](mlclstmdescriptor/returnssequences.md): Deprecated. A Boolean that indicates whether the layer returns output for all sequences.
- [usesBiases](mlclstmdescriptor/usesbiases.md): Deprecated. A Boolean that indicates whether you use bias weights.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Creating LSTM Layers

- [layerWithDescriptor:inputWeights:hiddenWeights:biases:](mlclstmlayer/init%28descriptor_inputweights_hiddenweights_biases_%29.md): Deprecated. Creates an LSTM layer with the descriptor, input and hidden weights, and biases you specify.
- [layerWithDescriptor:inputWeights:hiddenWeights:peepholeWeights:biases:](mlclstmlayer/init%28descriptor_inputweights_hiddenweights_peepholeweights_biases_%29.md): Deprecated. Creates an LSTM layer with the descriptor, weights, and biases you specify.
- [layerWithDescriptor:inputWeights:hiddenWeights:peepholeWeights:biases:gateActivations:outputResultActivation:](mlclstmlayer/init%28descriptor_inputweights_hiddenweights_peepholeweights_biases_gateactivations_outputresultactivation_%29.md): Deprecated. Creates an LSTM layer using the descriptor, weights, biases, gate activations, and output result activation that you specify.
- [MLCLSTMResultMode](mlclstmresultmode.md): Deprecated. Constants that describe the result of an LSTM layer.
