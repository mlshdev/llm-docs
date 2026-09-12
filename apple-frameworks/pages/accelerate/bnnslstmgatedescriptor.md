> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslstmgatedescriptor](https://developer.apple.com/documentation/accelerate/bnnslstmgatedescriptor)

# BNNSLSTMGateDescriptor (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A structure that describes a long short-term memory (LSTM) gate layer.

> Use BNNSGraph\* APIs

## Declaration

```swift
struct BNNSLSTMGateDescriptor
```

## Topics

### Initializers

- [init(iw_desc:hw_desc:cw_desc:b_desc:activation:)](bnnslstmgatedescriptor/init%28iw_desc_hw_desc_cw_desc_b_desc_activation_%29.md): Deprecated. Returns a new long short-term memory (LSTM) gate descriptor structure from the specified parameters.
- [init()](bnnslstmgatedescriptor/init%28%29.md): Deprecated. Returns a new long short-term memory (LSTM) gate descriptor structure.

### Instance Properties

- [iw_desc](bnnslstmgatedescriptor/iw_desc.md): Deprecated. The descriptor of the input weights.
- [hw_desc](bnnslstmgatedescriptor/hw_desc.md): Deprecated. The descriptor of the hidden weights.
- [cw_desc](bnnslstmgatedescriptor/cw_desc.md): Deprecated. The descriptor of the cell weights.
- [b_desc](bnnslstmgatedescriptor/b_desc.md): Deprecated. The descriptor of the bias.
- [activation](bnnslstmgatedescriptor/activation.md): Deprecated. The activation function that the layer applies to the output.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Recurrent layers

- [Using Long Short-Term Memory Layers (LSTM)](using-long-short-term-memory-layers-lstm.md): Add long short-term memory (LSTM) layers to recurrent neural networks to avoid long-term dependency problems.
- [BNNSLSTMDataDescriptor](bnnslstmdatadescriptor.md): Deprecated. A structure that contains the input-output, hidden, and cell state n-dimensional array descriptors for a long short-term memory (LSTM) layer.
- [BNNSLayerFlags](bnnslayerflags.md): Options that control the behavior of a long short-term memory (LSTM) layer.
- [BNNSLayerParametersLSTM](bnnslayerparameterslstm.md): Deprecated. A structure that contains the parameters of a long short-term memory (LSTM) layer.
- [BNNSComputeLSTMTrainingCacheCapacity(\_:)](bnnscomputelstmtrainingcachecapacity%28__%29.md): Deprecated. Returns the minimum bytes capacity of the training cache buffer a long short-term memory (LSTM) layer uses when it’s applied.
- [BNNSDirectApplyLSTMBatchTrainingCaching(\_:\_:\_:\_:)](bnnsdirectapplylstmbatchtrainingcaching%28________%29.md): Deprecated. Applies a long short-term memory (LSTM) layer directly to an input.
- [BNNSDirectApplyLSTMBatchBackward(\_:\_:\_:\_:\_:)](bnnsdirectapplylstmbatchbackward%28__________%29.md): Deprecated. Applies a long short-term memory (LSTM) filter backward to generate gradients.

# BNNSLSTMGateDescriptor (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that describes a long short-term memory (LSTM) gate layer.

## Declaration

```objectivec
typedef struct { ... } BNNSLSTMGateDescriptor;
```

## Topics

### Instance Properties

- [iw_desc](bnnslstmgatedescriptor/iw_desc.md): Deprecated. The descriptor of the input weights.
- [hw_desc](bnnslstmgatedescriptor/hw_desc.md): Deprecated. The descriptor of the hidden weights.
- [cw_desc](bnnslstmgatedescriptor/cw_desc.md): Deprecated. The descriptor of the cell weights.
- [b_desc](bnnslstmgatedescriptor/b_desc.md): Deprecated. The descriptor of the bias.
- [activation](bnnslstmgatedescriptor/activation.md): Deprecated. The activation function that the layer applies to the output.

## See Also

### Recurrent layers

- [Using Long Short-Term Memory Layers (LSTM)](using-long-short-term-memory-layers-lstm.md): Add long short-term memory (LSTM) layers to recurrent neural networks to avoid long-term dependency problems.
- [BNNSLSTMDataDescriptor](bnnslstmdatadescriptor.md): Deprecated. A structure that contains the input-output, hidden, and cell state n-dimensional array descriptors for a long short-term memory (LSTM) layer.
- [BNNSLayerFlags](bnnslayerflags.md): Options that control the behavior of a long short-term memory (LSTM) layer.
- [BNNSLayerParametersLSTM](bnnslayerparameterslstm.md): Deprecated. A structure that contains the parameters of a long short-term memory (LSTM) layer.
- [BNNSComputeLSTMTrainingCacheCapacity](bnnscomputelstmtrainingcachecapacity%28__%29.md): Deprecated. Returns the minimum bytes capacity of the training cache buffer a long short-term memory (LSTM) layer uses when it’s applied.
- [BNNSDirectApplyLSTMBatchTrainingCaching](bnnsdirectapplylstmbatchtrainingcaching%28________%29.md): Deprecated. Applies a long short-term memory (LSTM) layer directly to an input.
- [BNNSDirectApplyLSTMBatchBackward](bnnsdirectapplylstmbatchbackward%28__________%29.md): Deprecated. Applies a long short-term memory (LSTM) filter backward to generate gradients.
