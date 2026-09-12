> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclstmdescriptor/init(inputsize:hiddensize:layercount:usesbiases:batchfirst:isbidirectional:returnssequences:dropout:)](https://developer.apple.com/documentation/mlcompute/mlclstmdescriptor/init(inputsize:hiddensize:layercount:usesbiases:batchfirst:isbidirectional:returnssequences:dropout:))

# init(inputSize:hiddenSize:layerCount:usesBiases:batchFirst:isBidirectional:returnsSequences:dropout:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a batch first LSTM descriptor that allows you to indicate whether the layer returns output for all sequences, or output for only the last sequence.

## Declaration

```swift
convenience init(inputSize: Int, hiddenSize: Int, layerCount: Int, usesBiases: Bool, batchFirst: Bool, isBidirectional: Bool, returnsSequences: Bool, dropout: Float)
```

## Parameters

- `inputSize`: The number of expected features in the input.
- `hiddenSize`: The number of features in the hidden state.
- `layerCount`: The number of recurrent layers.
- `usesBiases`: A Boolean that indicates whether you use bias weights. The default value is `true`.
- `batchFirst`: A Boolean that indicates whether the first index of the input and output shape contains the batch size. The default value is `true`.
- `isBidirectional`: A Boolean that indicates whether the layer becomes bidirectional. The default value is `false`.
- `returnsSequences`: A Boolean that indicates whether the layer returns output for all sequences. If `false`, this method returns the output for only the last sequence. The default value is `true`.
- `dropout`: The dropout probability rate.

## See Also

### Creating LSTM Descriptors

- [init(inputSize:hiddenSize:layerCount:)](init%28inputsize_hiddensize_layercount_%29.md): Deprecated. Creates a batch first LSTM descriptor with the input size and number of layers you specify.
- [init(inputSize:hiddenSize:layerCount:usesBiases:isBidirectional:dropout:)](init%28inputsize_hiddensize_layercount_usesbiases_isbidirectional_dropout_%29.md): Deprecated. Creates a batch first LSTM descriptor with bias and bidirectional options you specify.
- [init(inputSize:hiddenSize:layerCount:usesBiases:batchFirst:isBidirectional:dropout:)](init%28inputsize_hiddensize_layercount_usesbiases_batchfirst_isbidirectional_dropout_%29.md): Deprecated. Creates a batch first LSTM descriptor that allows you to indicate whether the input and output shape is batch first.
- [init(inputSize:hiddenSize:layerCount:usesBiases:batchFirst:isBidirectional:returnsSequences:dropout:resultMode:)](init%28inputsize_hiddensize_layercount_usesbiases_batchfirst_isbidirectional_returnssequences_dropout_resultmode_%29.md): Deprecated. Creates a descriptor with the number of features and layers, dropout, and options for use of biases, batch order, return sequences, bidirectionality, and expected tensors you specify.

# descriptorWithInputSize:hiddenSize:layerCount:usesBiases:batchFirst:isBidirectional:returnsSequences:dropout: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a batch first LSTM descriptor that allows you to indicate whether the layer returns output for all sequences, or output for only the last sequence.

## Declaration

```objectivec
+ (instancetype) descriptorWithInputSize:(NSUInteger) inputSize hiddenSize:(NSUInteger) hiddenSize layerCount:(NSUInteger) layerCount usesBiases:(BOOL) usesBiases batchFirst:(BOOL) batchFirst isBidirectional:(BOOL) isBidirectional returnsSequences:(BOOL) returnsSequences dropout:(float) dropout;
```

## Parameters

- `inputSize`: The number of expected features in the input.
- `hiddenSize`: The number of features in the hidden state.
- `layerCount`: The number of recurrent layers.
- `usesBiases`: A Boolean that indicates whether you use bias weights. The default value is `true`.
- `batchFirst`: A Boolean that indicates whether the first index of the input and output shape contains the batch size. The default value is `true`.
- `isBidirectional`: A Boolean that indicates whether the layer becomes bidirectional. The default value is `false`.
- `returnsSequences`: A Boolean that indicates whether the layer returns output for all sequences. If `false`, this method returns the output for only the last sequence. The default value is `true`.
- `dropout`: The dropout probability rate.

## See Also

### Creating LSTM Descriptors

- [descriptorWithInputSize:hiddenSize:layerCount:](init%28inputsize_hiddensize_layercount_%29.md): Deprecated. Creates a batch first LSTM descriptor with the input size and number of layers you specify.
- [descriptorWithInputSize:hiddenSize:layerCount:usesBiases:isBidirectional:dropout:](init%28inputsize_hiddensize_layercount_usesbiases_isbidirectional_dropout_%29.md): Deprecated. Creates a batch first LSTM descriptor with bias and bidirectional options you specify.
- [descriptorWithInputSize:hiddenSize:layerCount:usesBiases:batchFirst:isBidirectional:dropout:](init%28inputsize_hiddensize_layercount_usesbiases_batchfirst_isbidirectional_dropout_%29.md): Deprecated. Creates a batch first LSTM descriptor that allows you to indicate whether the input and output shape is batch first.
- [descriptorWithInputSize:hiddenSize:layerCount:usesBiases:batchFirst:isBidirectional:returnsSequences:dropout:resultMode:](init%28inputsize_hiddensize_layercount_usesbiases_batchfirst_isbidirectional_returnssequences_dropout_resultmode_%29.md): Deprecated. Creates a descriptor with the number of features and layers, dropout, and options for use of biases, batch order, return sequences, bidirectionality, and expected tensors you specify.
