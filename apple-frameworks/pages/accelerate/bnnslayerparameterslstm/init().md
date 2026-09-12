> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparameterslstm/init()](https://developer.apple.com/documentation/accelerate/bnnslayerparameterslstm/init())

# init()

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Returns a new long short-term memory (LSTM) parameters structure.

> Use BNNSGraph\* APIs

## Declaration

```swift
init()
```

<a id="Discussion"></a>

## Discussion

This initializer returns a new structure with all numeric properties set to `0`.

## See Also

### Initializers

- [init(input_size:hidden_size:batch_size:num_layers:seq_len:dropout:lstm_flags:sequence_descriptor:input_descriptor:output_descriptor:input_gate:forget_gate:candidate_gate:output_gate:hidden_activation:)](init%28input_size_hidden_size_batch_size_num_layers_seq_len_dropout_lstm_flags_sequence_descriptor_input_descriptor_output_descriptor_input_gate_forget_gate_candidate_gate_output_gat~a1e0ae5f.md): Deprecated. Returns a new long short-term memory (LSTM) parameters structure from the specified parameters.
