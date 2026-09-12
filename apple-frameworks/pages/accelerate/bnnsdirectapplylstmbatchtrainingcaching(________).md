> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsdirectapplylstmbatchtrainingcaching(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsdirectapplylstmbatchtrainingcaching(_:_:_:_:))

# BNNSDirectApplyLSTMBatchTrainingCaching(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Applies a long short-term memory (LSTM) layer directly to an input.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSDirectApplyLSTMBatchTrainingCaching(_ layer_params: UnsafePointer<BNNSLayerParametersLSTM>, _ filter_params: UnsafePointer<BNNSFilterParameters>?, _ training_cache_ptr: UnsafeMutableRawPointer?, _ training_cache_capacity: Int) -> Int32
```

## Parameters

- `layer_params`: The LSTM layer parameters.
- `filter_params`: Filter runtime parameters.
- `training_cache_ptr`: A pointer to the training cache buffer.
- `training_cache_capacity`: The minimum bytes capacity of the training cache buffer as computed by the training cache capacity function.

## Mentioned In

- [Using Long Short-Term Memory Layers (LSTM)](using-long-short-term-memory-layers-lstm.md)

## See Also

### Recurrent layers

- [Using Long Short-Term Memory Layers (LSTM)](using-long-short-term-memory-layers-lstm.md): Add long short-term memory (LSTM) layers to recurrent neural networks to avoid long-term dependency problems.
- [BNNSLSTMDataDescriptor](bnnslstmdatadescriptor.md): Deprecated. A structure that contains the input-output, hidden, and cell state n-dimensional array descriptors for a long short-term memory (LSTM) layer.
- [BNNSLSTMGateDescriptor](bnnslstmgatedescriptor.md): Deprecated. A structure that describes a long short-term memory (LSTM) gate layer.
- [BNNSLayerFlags](bnnslayerflags.md): Options that control the behavior of a long short-term memory (LSTM) layer.
- [BNNSLayerParametersLSTM](bnnslayerparameterslstm.md): Deprecated. A structure that contains the parameters of a long short-term memory (LSTM) layer.
- [BNNSComputeLSTMTrainingCacheCapacity(\_:)](bnnscomputelstmtrainingcachecapacity%28__%29.md): Deprecated. Returns the minimum bytes capacity of the training cache buffer a long short-term memory (LSTM) layer uses when it’s applied.
- [BNNSDirectApplyLSTMBatchBackward(\_:\_:\_:\_:\_:)](bnnsdirectapplylstmbatchbackward%28__________%29.md): Deprecated. Applies a long short-term memory (LSTM) filter backward to generate gradients.

# BNNSDirectApplyLSTMBatchTrainingCaching (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Applies a long short-term memory (LSTM) layer directly to an input.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSDirectApplyLSTMBatchTrainingCaching(const BNNSLayerParametersLSTM *layer_params, const BNNSFilterParameters *filter_params, void *training_cache_ptr, const size_t training_cache_capacity);
```

## Parameters

- `layer_params`: The LSTM layer parameters.
- `filter_params`: Filter runtime parameters.
- `training_cache_ptr`: A pointer to the training cache buffer.
- `training_cache_capacity`: The minimum bytes capacity of the training cache buffer as computed by the training cache capacity function.

## Mentioned In

- [Using Long Short-Term Memory Layers (LSTM)](using-long-short-term-memory-layers-lstm.md)

## See Also

### Recurrent layers

- [Using Long Short-Term Memory Layers (LSTM)](using-long-short-term-memory-layers-lstm.md): Add long short-term memory (LSTM) layers to recurrent neural networks to avoid long-term dependency problems.
- [BNNSLSTMDataDescriptor](bnnslstmdatadescriptor.md): Deprecated. A structure that contains the input-output, hidden, and cell state n-dimensional array descriptors for a long short-term memory (LSTM) layer.
- [BNNSLSTMGateDescriptor](bnnslstmgatedescriptor.md): Deprecated. A structure that describes a long short-term memory (LSTM) gate layer.
- [BNNSLayerFlags](bnnslayerflags.md): Options that control the behavior of a long short-term memory (LSTM) layer.
- [BNNSLayerParametersLSTM](bnnslayerparameterslstm.md): Deprecated. A structure that contains the parameters of a long short-term memory (LSTM) layer.
- [BNNSComputeLSTMTrainingCacheCapacity](bnnscomputelstmtrainingcachecapacity%28__%29.md): Deprecated. Returns the minimum bytes capacity of the training cache buffer a long short-term memory (LSTM) layer uses when it’s applied.
- [BNNSDirectApplyLSTMBatchBackward](bnnsdirectapplylstmbatchbackward%28__________%29.md): Deprecated. Applies a long short-term memory (LSTM) filter backward to generate gradients.
