> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparameterslstm/sequence_descriptor](https://developer.apple.com/documentation/accelerate/bnnslayerparameterslstm/sequence_descriptor)

# sequence_descriptor (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A 1D array of unsigned-integer elements that determines the batch size for each step.

> Use BNNSGraph\* APIs

## Declaration

```swift
var sequence_descriptor: BNNSNDArrayDescriptor
```

<a id="Discussion"></a>

## Discussion

If [seq_len](seq_len.md) is greater than `1` and the [data](../bnnsndarraydescriptor/data.md) property of this descriptor is `nil`, BNNS uses the same [batch_size](batch_size.md) for the entire sequence.

## See Also

### Instance Properties

- [input_size](input_size.md): Deprecated. The number of elements in the input.
- [hidden_size](hidden_size.md): Deprecated. The number of elements in the hidden state.
- [batch_size](batch_size.md): Deprecated. The number of input and output samples.
- [num_layers](num_layers.md): Deprecated. The number of stacked long short-term memory (LSTM) layers.
- [seq_len](seq_len.md): Deprecated. The size of the sequential input.
- [dropout](dropout.md): Deprecated. The dropout ratio to apply between long short-term memory (LSTM) layers.
- [lstm_flags](lstm_flags.md): Deprecated. Flags that control the behavior of a long short-term memory (LSTM) layer.
- [input_descriptor](input_descriptor.md): Deprecated. Descriptors of the input, hidden input, and cell-state input data.
- [output_descriptor](output_descriptor.md): Deprecated. Descriptors of the output, hidden output, and cell-state output data.
- [input_gate](input_gate.md): Deprecated. The descriptor of the input gate, which uses default sigmoid activation.
- [forget_gate](forget_gate.md): Deprecated. The descriptor of the forget gate, which uses default sigmoid activation.
- [candidate_gate](candidate_gate.md): Deprecated. The descriptor of the candidate gate, which uses default tanh activation.
- [output_gate](output_gate.md): Deprecated. The descriptor of the output gate, which uses default sigmoid activation.
- [hidden_activation](hidden_activation.md): Deprecated. Hidden activation function, which uses default tanh activation.

# sequence_descriptor (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A 1D array of unsigned-integer elements that determines the batch size for each step.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
BNNSNDArrayDescriptor sequence_descriptor;
```

<a id="Discussion"></a>

## Discussion

If [seq_len](seq_len.md) is greater than `1` and the [data](../bnnsndarraydescriptor/data.md) property of this descriptor is `nil`, BNNS uses the same [batch_size](batch_size.md) for the entire sequence.

## See Also

### Instance Properties

- [input_size](input_size.md): Deprecated. The number of elements in the input.
- [hidden_size](hidden_size.md): Deprecated. The number of elements in the hidden state.
- [batch_size](batch_size.md): Deprecated. The number of input and output samples.
- [num_layers](num_layers.md): Deprecated. The number of stacked long short-term memory (LSTM) layers.
- [seq_len](seq_len.md): Deprecated. The size of the sequential input.
- [dropout](dropout.md): Deprecated. The dropout ratio to apply between long short-term memory (LSTM) layers.
- [lstm_flags](lstm_flags.md): Deprecated. Flags that control the behavior of a long short-term memory (LSTM) layer.
- [input_descriptor](input_descriptor.md): Deprecated. Descriptors of the input, hidden input, and cell-state input data.
- [output_descriptor](output_descriptor.md): Deprecated. Descriptors of the output, hidden output, and cell-state output data.
- [input_gate](input_gate.md): Deprecated. The descriptor of the input gate, which uses default sigmoid activation.
- [forget_gate](forget_gate.md): Deprecated. The descriptor of the forget gate, which uses default sigmoid activation.
- [candidate_gate](candidate_gate.md): Deprecated. The descriptor of the candidate gate, which uses default tanh activation.
- [output_gate](output_gate.md): Deprecated. The descriptor of the output gate, which uses default sigmoid activation.
- [hidden_activation](hidden_activation.md): Deprecated. Hidden activation function, which uses default tanh activation.
