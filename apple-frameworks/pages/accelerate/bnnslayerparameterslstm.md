> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparameterslstm](https://developer.apple.com/documentation/accelerate/bnnslayerparameterslstm)

# BNNSLayerParametersLSTM (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A structure that contains the parameters of a long short-term memory (LSTM) layer.

> Use BNNSGraph\* APIs

## Declaration

```swift
struct BNNSLayerParametersLSTM
```

<a id="overview"></a>

## Overview

Use a [BNNSLayerParametersLSTM](bnnslayerparameterslstm.md) structure to define the parameters of a long short-term memory (LSTM) operation.

## Topics

### Initializers

- [init(input_size:hidden_size:batch_size:num_layers:seq_len:dropout:lstm_flags:sequence_descriptor:input_descriptor:output_descriptor:input_gate:forget_gate:candidate_gate:output_gate:hidden_activation:)](bnnslayerparameterslstm/init%28input_size_hidden_size_batch_size_num_layers_seq_len_dropout_lstm_flags_sequence_descriptor_input_descriptor_output_descriptor_input_gate_forget_gate_candidate_gate_output_gat~a1e0ae5f.md): Deprecated. Returns a new long short-term memory (LSTM) parameters structure from the specified parameters.
- [init()](bnnslayerparameterslstm/init%28%29.md): Deprecated. Returns a new long short-term memory (LSTM) parameters structure.

### Instance Properties

- [input_size](bnnslayerparameterslstm/input_size.md): Deprecated. The number of elements in the input.
- [hidden_size](bnnslayerparameterslstm/hidden_size.md): Deprecated. The number of elements in the hidden state.
- [batch_size](bnnslayerparameterslstm/batch_size.md): Deprecated. The number of input and output samples.
- [num_layers](bnnslayerparameterslstm/num_layers.md): Deprecated. The number of stacked long short-term memory (LSTM) layers.
- [seq_len](bnnslayerparameterslstm/seq_len.md): Deprecated. The size of the sequential input.
- [dropout](bnnslayerparameterslstm/dropout.md): Deprecated. The dropout ratio to apply between long short-term memory (LSTM) layers.
- [lstm_flags](bnnslayerparameterslstm/lstm_flags.md): Deprecated. Flags that control the behavior of a long short-term memory (LSTM) layer.
- [sequence_descriptor](bnnslayerparameterslstm/sequence_descriptor.md): Deprecated. A 1D array of unsigned-integer elements that determines the batch size for each step.
- [input_descriptor](bnnslayerparameterslstm/input_descriptor.md): Deprecated. Descriptors of the input, hidden input, and cell-state input data.
- [output_descriptor](bnnslayerparameterslstm/output_descriptor.md): Deprecated. Descriptors of the output, hidden output, and cell-state output data.
- [input_gate](bnnslayerparameterslstm/input_gate.md): Deprecated. The descriptor of the input gate, which uses default sigmoid activation.
- [forget_gate](bnnslayerparameterslstm/forget_gate.md): Deprecated. The descriptor of the forget gate, which uses default sigmoid activation.
- [candidate_gate](bnnslayerparameterslstm/candidate_gate.md): Deprecated. The descriptor of the candidate gate, which uses default tanh activation.
- [output_gate](bnnslayerparameterslstm/output_gate.md): Deprecated. The descriptor of the output gate, which uses default sigmoid activation.
- [hidden_activation](bnnslayerparameterslstm/hidden_activation.md): Deprecated. Hidden activation function, which uses default tanh activation.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Recurrent layers

- [Using Long Short-Term Memory Layers (LSTM)](using-long-short-term-memory-layers-lstm.md): Add long short-term memory (LSTM) layers to recurrent neural networks to avoid long-term dependency problems.
- [BNNSLSTMDataDescriptor](bnnslstmdatadescriptor.md): Deprecated. A structure that contains the input-output, hidden, and cell state n-dimensional array descriptors for a long short-term memory (LSTM) layer.
- [BNNSLSTMGateDescriptor](bnnslstmgatedescriptor.md): Deprecated. A structure that describes a long short-term memory (LSTM) gate layer.
- [BNNSLayerFlags](bnnslayerflags.md): Options that control the behavior of a long short-term memory (LSTM) layer.
- [BNNSComputeLSTMTrainingCacheCapacity(\_:)](bnnscomputelstmtrainingcachecapacity%28__%29.md): Deprecated. Returns the minimum bytes capacity of the training cache buffer a long short-term memory (LSTM) layer uses when it’s applied.
- [BNNSDirectApplyLSTMBatchTrainingCaching(\_:\_:\_:\_:)](bnnsdirectapplylstmbatchtrainingcaching%28________%29.md): Deprecated. Applies a long short-term memory (LSTM) layer directly to an input.
- [BNNSDirectApplyLSTMBatchBackward(\_:\_:\_:\_:\_:)](bnnsdirectapplylstmbatchbackward%28__________%29.md): Deprecated. Applies a long short-term memory (LSTM) filter backward to generate gradients.

# BNNSLayerParametersLSTM (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A structure that contains the parameters of a long short-term memory (LSTM) layer.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
typedef struct { ... } BNNSLayerParametersLSTM;
```

<a id="overview"></a>

## Overview

Use a [BNNSLayerParametersLSTM](bnnslayerparameterslstm.md) structure to define the parameters of a long short-term memory (LSTM) operation.

## Topics

### Instance Properties

- [input_size](bnnslayerparameterslstm/input_size.md): Deprecated. The number of elements in the input.
- [hidden_size](bnnslayerparameterslstm/hidden_size.md): Deprecated. The number of elements in the hidden state.
- [batch_size](bnnslayerparameterslstm/batch_size.md): Deprecated. The number of input and output samples.
- [num_layers](bnnslayerparameterslstm/num_layers.md): Deprecated. The number of stacked long short-term memory (LSTM) layers.
- [seq_len](bnnslayerparameterslstm/seq_len.md): Deprecated. The size of the sequential input.
- [dropout](bnnslayerparameterslstm/dropout.md): Deprecated. The dropout ratio to apply between long short-term memory (LSTM) layers.
- [lstm_flags](bnnslayerparameterslstm/lstm_flags.md): Deprecated. Flags that control the behavior of a long short-term memory (LSTM) layer.
- [sequence_descriptor](bnnslayerparameterslstm/sequence_descriptor.md): Deprecated. A 1D array of unsigned-integer elements that determines the batch size for each step.
- [input_descriptor](bnnslayerparameterslstm/input_descriptor.md): Deprecated. Descriptors of the input, hidden input, and cell-state input data.
- [output_descriptor](bnnslayerparameterslstm/output_descriptor.md): Deprecated. Descriptors of the output, hidden output, and cell-state output data.
- [input_gate](bnnslayerparameterslstm/input_gate.md): Deprecated. The descriptor of the input gate, which uses default sigmoid activation.
- [forget_gate](bnnslayerparameterslstm/forget_gate.md): Deprecated. The descriptor of the forget gate, which uses default sigmoid activation.
- [candidate_gate](bnnslayerparameterslstm/candidate_gate.md): Deprecated. The descriptor of the candidate gate, which uses default tanh activation.
- [output_gate](bnnslayerparameterslstm/output_gate.md): Deprecated. The descriptor of the output gate, which uses default sigmoid activation.
- [hidden_activation](bnnslayerparameterslstm/hidden_activation.md): Deprecated. Hidden activation function, which uses default tanh activation.

## See Also

### Recurrent layers

- [Using Long Short-Term Memory Layers (LSTM)](using-long-short-term-memory-layers-lstm.md): Add long short-term memory (LSTM) layers to recurrent neural networks to avoid long-term dependency problems.
- [BNNSLSTMDataDescriptor](bnnslstmdatadescriptor.md): Deprecated. A structure that contains the input-output, hidden, and cell state n-dimensional array descriptors for a long short-term memory (LSTM) layer.
- [BNNSLSTMGateDescriptor](bnnslstmgatedescriptor.md): Deprecated. A structure that describes a long short-term memory (LSTM) gate layer.
- [BNNSLayerFlags](bnnslayerflags.md): Options that control the behavior of a long short-term memory (LSTM) layer.
- [BNNSComputeLSTMTrainingCacheCapacity](bnnscomputelstmtrainingcachecapacity%28__%29.md): Deprecated. Returns the minimum bytes capacity of the training cache buffer a long short-term memory (LSTM) layer uses when it’s applied.
- [BNNSDirectApplyLSTMBatchTrainingCaching](bnnsdirectapplylstmbatchtrainingcaching%28________%29.md): Deprecated. Applies a long short-term memory (LSTM) layer directly to an input.
- [BNNSDirectApplyLSTMBatchBackward](bnnsdirectapplylstmbatchbackward%28__________%29.md): Deprecated. Applies a long short-term memory (LSTM) filter backward to generate gradients.
