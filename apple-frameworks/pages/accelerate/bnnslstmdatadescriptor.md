> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslstmdatadescriptor](https://developer.apple.com/documentation/accelerate/bnnslstmdatadescriptor)

# BNNSLSTMDataDescriptor (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A structure that contains the input-output, hidden, and cell state n-dimensional array descriptors for a long short-term memory (LSTM) layer.

> Use BNNSGraph\* APIs

## Declaration

```swift
struct BNNSLSTMDataDescriptor
```

## Topics

### Initializers

- [init(data_desc:hidden_desc:cell_state_desc:)](bnnslstmdatadescriptor/init%28data_desc_hidden_desc_cell_state_desc_%29.md): Deprecated. Returns a new long short-term memory (LSTM) data descriptor structure from the specified parameters.
- [init()](bnnslstmdatadescriptor/init%28%29.md): Deprecated. Returns a new long short-term memory (LSTM) data descriptor structure.

### Instance Properties

- [data_desc](bnnslstmdatadescriptor/data_desc.md): Deprecated. The descriptor of the input-output.
- [hidden_desc](bnnslstmdatadescriptor/hidden_desc.md): Deprecated. The descriptor of the hidden input-output.
- [cell_state_desc](bnnslstmdatadescriptor/cell_state_desc.md): Deprecated. The descriptor of the cell-state input-output.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Recurrent layers

- [Using Long Short-Term Memory Layers (LSTM)](using-long-short-term-memory-layers-lstm.md): Add long short-term memory (LSTM) layers to recurrent neural networks to avoid long-term dependency problems.
- [BNNSLSTMGateDescriptor](bnnslstmgatedescriptor.md): Deprecated. A structure that describes a long short-term memory (LSTM) gate layer.
- [BNNSLayerFlags](bnnslayerflags.md): Options that control the behavior of a long short-term memory (LSTM) layer.
- [BNNSLayerParametersLSTM](bnnslayerparameterslstm.md): Deprecated. A structure that contains the parameters of a long short-term memory (LSTM) layer.
- [BNNSComputeLSTMTrainingCacheCapacity(\_:)](bnnscomputelstmtrainingcachecapacity%28__%29.md): Deprecated. Returns the minimum bytes capacity of the training cache buffer a long short-term memory (LSTM) layer uses when it’s applied.
- [BNNSDirectApplyLSTMBatchTrainingCaching(\_:\_:\_:\_:)](bnnsdirectapplylstmbatchtrainingcaching%28________%29.md): Deprecated. Applies a long short-term memory (LSTM) layer directly to an input.
- [BNNSDirectApplyLSTMBatchBackward(\_:\_:\_:\_:\_:)](bnnsdirectapplylstmbatchbackward%28__________%29.md): Deprecated. Applies a long short-term memory (LSTM) filter backward to generate gradients.

# BNNSLSTMDataDescriptor (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains the input-output, hidden, and cell state n-dimensional array descriptors for a long short-term memory (LSTM) layer.

## Declaration

```objectivec
typedef struct { ... } BNNSLSTMDataDescriptor;
```

## Topics

### Instance Properties

- [data_desc](bnnslstmdatadescriptor/data_desc.md): Deprecated. The descriptor of the input-output.
- [hidden_desc](bnnslstmdatadescriptor/hidden_desc.md): Deprecated. The descriptor of the hidden input-output.
- [cell_state_desc](bnnslstmdatadescriptor/cell_state_desc.md): Deprecated. The descriptor of the cell-state input-output.

## See Also

### Recurrent layers

- [Using Long Short-Term Memory Layers (LSTM)](using-long-short-term-memory-layers-lstm.md): Add long short-term memory (LSTM) layers to recurrent neural networks to avoid long-term dependency problems.
- [BNNSLSTMGateDescriptor](bnnslstmgatedescriptor.md): Deprecated. A structure that describes a long short-term memory (LSTM) gate layer.
- [BNNSLayerFlags](bnnslayerflags.md): Options that control the behavior of a long short-term memory (LSTM) layer.
- [BNNSLayerParametersLSTM](bnnslayerparameterslstm.md): Deprecated. A structure that contains the parameters of a long short-term memory (LSTM) layer.
- [BNNSComputeLSTMTrainingCacheCapacity](bnnscomputelstmtrainingcachecapacity%28__%29.md): Deprecated. Returns the minimum bytes capacity of the training cache buffer a long short-term memory (LSTM) layer uses when it’s applied.
- [BNNSDirectApplyLSTMBatchTrainingCaching](bnnsdirectapplylstmbatchtrainingcaching%28________%29.md): Deprecated. Applies a long short-term memory (LSTM) layer directly to an input.
- [BNNSDirectApplyLSTMBatchBackward](bnnsdirectapplylstmbatchbackward%28__________%29.md): Deprecated. Applies a long short-term memory (LSTM) filter backward to generate gradients.
