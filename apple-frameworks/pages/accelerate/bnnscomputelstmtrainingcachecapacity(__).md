> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnscomputelstmtrainingcachecapacity(_:)](https://developer.apple.com/documentation/accelerate/bnnscomputelstmtrainingcachecapacity(_:))

# BNNSComputeLSTMTrainingCacheCapacity(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Returns the minimum bytes capacity of the training cache buffer a long short-term memory (LSTM) layer uses when it’s applied.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSComputeLSTMTrainingCacheCapacity(_ layer_params: UnsafePointer<BNNSLayerParametersLSTM>) -> Int
```

## Parameters

- `layer_params`: The LSTM layer parameters.

## Mentioned In

- [Using Long Short-Term Memory Layers (LSTM)](using-long-short-term-memory-layers-lstm.md)

## See Also

### Recurrent layers

- [Using Long Short-Term Memory Layers (LSTM)](using-long-short-term-memory-layers-lstm.md): Add long short-term memory (LSTM) layers to recurrent neural networks to avoid long-term dependency problems.
- [BNNSLSTMDataDescriptor](bnnslstmdatadescriptor.md): Deprecated. A structure that contains the input-output, hidden, and cell state n-dimensional array descriptors for a long short-term memory (LSTM) layer.
- [BNNSLSTMGateDescriptor](bnnslstmgatedescriptor.md): Deprecated. A structure that describes a long short-term memory (LSTM) gate layer.
- [BNNSLayerFlags](bnnslayerflags.md): Options that control the behavior of a long short-term memory (LSTM) layer.
- [BNNSLayerParametersLSTM](bnnslayerparameterslstm.md): Deprecated. A structure that contains the parameters of a long short-term memory (LSTM) layer.
- [BNNSDirectApplyLSTMBatchTrainingCaching(\_:\_:\_:\_:)](bnnsdirectapplylstmbatchtrainingcaching%28________%29.md): Deprecated. Applies a long short-term memory (LSTM) layer directly to an input.
- [BNNSDirectApplyLSTMBatchBackward(\_:\_:\_:\_:\_:)](bnnsdirectapplylstmbatchbackward%28__________%29.md): Deprecated. Applies a long short-term memory (LSTM) filter backward to generate gradients.

# BNNSComputeLSTMTrainingCacheCapacity (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Returns the minimum bytes capacity of the training cache buffer a long short-term memory (LSTM) layer uses when it’s applied.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
size_t BNNSComputeLSTMTrainingCacheCapacity(const BNNSLayerParametersLSTM *layer_params);
```

## Parameters

- `layer_params`: The LSTM layer parameters.

## Mentioned In

- [Using Long Short-Term Memory Layers (LSTM)](using-long-short-term-memory-layers-lstm.md)

## See Also

### Recurrent layers

- [Using Long Short-Term Memory Layers (LSTM)](using-long-short-term-memory-layers-lstm.md): Add long short-term memory (LSTM) layers to recurrent neural networks to avoid long-term dependency problems.
- [BNNSLSTMDataDescriptor](bnnslstmdatadescriptor.md): Deprecated. A structure that contains the input-output, hidden, and cell state n-dimensional array descriptors for a long short-term memory (LSTM) layer.
- [BNNSLSTMGateDescriptor](bnnslstmgatedescriptor.md): Deprecated. A structure that describes a long short-term memory (LSTM) gate layer.
- [BNNSLayerFlags](bnnslayerflags.md): Options that control the behavior of a long short-term memory (LSTM) layer.
- [BNNSLayerParametersLSTM](bnnslayerparameterslstm.md): Deprecated. A structure that contains the parameters of a long short-term memory (LSTM) layer.
- [BNNSDirectApplyLSTMBatchTrainingCaching](bnnsdirectapplylstmbatchtrainingcaching%28________%29.md): Deprecated. Applies a long short-term memory (LSTM) layer directly to an input.
- [BNNSDirectApplyLSTMBatchBackward](bnnsdirectapplylstmbatchbackward%28__________%29.md): Deprecated. Applies a long short-term memory (LSTM) filter backward to generate gradients.
