> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclstmdescriptor/init(inputsize:hiddensize:layercount:)](https://developer.apple.com/documentation/mlcompute/mlclstmdescriptor/init(inputsize:hiddensize:layercount:))

# init(inputSize:hiddenSize:layerCount:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a batch first LSTM descriptor with the input size and number of layers you specify.

## Declaration

```swift
convenience init(inputSize: Int, hiddenSize: Int, layerCount: Int)
```

## Parameters

- `inputSize`: The number of expected features in the input.
- `hiddenSize`: The number of features in the hidden state.
- `layerCount`: The number of recurrent layers.

## See Also

### Creating LSTM Descriptors

- [init(inputSize:hiddenSize:layerCount:usesBiases:isBidirectional:dropout:)](init%28inputsize_hiddensize_layercount_usesbiases_isbidirectional_dropout_%29.md): Deprecated. Creates a batch first LSTM descriptor with bias and bidirectional options you specify.
- [init(inputSize:hiddenSize:layerCount:usesBiases:batchFirst:isBidirectional:dropout:)](init%28inputsize_hiddensize_layercount_usesbiases_batchfirst_isbidirectional_dropout_%29.md): Deprecated. Creates a batch first LSTM descriptor that allows you to indicate whether the input and output shape is batch first.
- [init(inputSize:hiddenSize:layerCount:usesBiases:batchFirst:isBidirectional:returnsSequences:dropout:)](init%28inputsize_hiddensize_layercount_usesbiases_batchfirst_isbidirectional_returnssequences_dropout_%29.md): Deprecated. Creates a batch first LSTM descriptor that allows you to indicate whether the layer returns output for all sequences, or output for only the last sequence.
- [init(inputSize:hiddenSize:layerCount:usesBiases:batchFirst:isBidirectional:returnsSequences:dropout:resultMode:)](init%28inputsize_hiddensize_layercount_usesbiases_batchfirst_isbidirectional_returnssequences_dropout_resultmode_%29.md): Deprecated. Creates a descriptor with the number of features and layers, dropout, and options for use of biases, batch order, return sequences, bidirectionality, and expected tensors you specify.

# descriptorWithInputSize:hiddenSize:layerCount: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a batch first LSTM descriptor with the input size and number of layers you specify.

## Declaration

```objectivec
+ (instancetype) descriptorWithInputSize:(NSUInteger) inputSize hiddenSize:(NSUInteger) hiddenSize layerCount:(NSUInteger) layerCount;
```

## Parameters

- `inputSize`: The number of expected features in the input.
- `hiddenSize`: The number of features in the hidden state.
- `layerCount`: The number of recurrent layers.

## See Also

### Creating LSTM Descriptors

- [descriptorWithInputSize:hiddenSize:layerCount:usesBiases:isBidirectional:dropout:](init%28inputsize_hiddensize_layercount_usesbiases_isbidirectional_dropout_%29.md): Deprecated. Creates a batch first LSTM descriptor with bias and bidirectional options you specify.
- [descriptorWithInputSize:hiddenSize:layerCount:usesBiases:batchFirst:isBidirectional:dropout:](init%28inputsize_hiddensize_layercount_usesbiases_batchfirst_isbidirectional_dropout_%29.md): Deprecated. Creates a batch first LSTM descriptor that allows you to indicate whether the input and output shape is batch first.
- [descriptorWithInputSize:hiddenSize:layerCount:usesBiases:batchFirst:isBidirectional:returnsSequences:dropout:](init%28inputsize_hiddensize_layercount_usesbiases_batchfirst_isbidirectional_returnssequences_dropout_%29.md): Deprecated. Creates a batch first LSTM descriptor that allows you to indicate whether the layer returns output for all sequences, or output for only the last sequence.
- [descriptorWithInputSize:hiddenSize:layerCount:usesBiases:batchFirst:isBidirectional:returnsSequences:dropout:resultMode:](init%28inputsize_hiddensize_layercount_usesbiases_batchfirst_isbidirectional_returnssequences_dropout_resultmode_%29.md): Deprecated. Creates a descriptor with the number of features and layers, dropout, and options for use of biases, batch order, return sequences, bidirectionality, and expected tensors you specify.
