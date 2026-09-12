> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclstmdescriptor/resultmode](https://developer.apple.com/documentation/mlcompute/mlclstmdescriptor/resultmode)

# resultMode (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The mode that indicates whether the layer produces a single result tensor or three result tensors — final output, last hidden state, and the cell state.

## Declaration

```swift
var resultMode: MLCLSTMResultMode { get }
```

## See Also

### Inspecting LSTM Descriptors

- [batchFirst](batchfirst.md): Deprecated. A Boolean that indicates whether the input and output shape is batch first.
- [dropout](dropout.md): Deprecated. The dropout probability.
- [hiddenSize](hiddensize.md): Deprecated. The number of features in the hidden state.
- [inputSize](inputsize.md): Deprecated. The number of expected features in the input.
- [isBidirectional](isbidirectional.md): Deprecated. A Boolean that indicates whether the layer is bidirectional.
- [layerCount](layercount.md): Deprecated. The number of recurrent layers.
- [returnsSequences](returnssequences.md): Deprecated. A Boolean that indicates whether the layer returns output for all sequences.
- [usesBiases](usesbiases.md): Deprecated. A Boolean that indicates whether you use bias weights.

# resultMode (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The mode that indicates whether the layer produces a single result tensor or three result tensors — final output, last hidden state, and the cell state.

## Declaration

```objectivec
@property (nonatomic, readonly) MLCLSTMResultMode resultMode;
```

## See Also

### Inspecting LSTM Descriptors

- [batchFirst](batchfirst.md): Deprecated. A Boolean that indicates whether the input and output shape is batch first.
- [dropout](dropout.md): Deprecated. The dropout probability.
- [hiddenSize](hiddensize.md): Deprecated. The number of features in the hidden state.
- [inputSize](inputsize.md): Deprecated. The number of expected features in the input.
- [isBidirectional](isbidirectional.md): Deprecated. A Boolean that indicates whether the layer is bidirectional.
- [layerCount](layercount.md): Deprecated. The number of recurrent layers.
- [returnsSequences](returnssequences.md): Deprecated. A Boolean that indicates whether the layer returns output for all sequences.
- [usesBiases](usesbiases.md): Deprecated. A Boolean that indicates whether you use bias weights.
