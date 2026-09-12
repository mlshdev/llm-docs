> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclstmdescriptor/returnssequences](https://developer.apple.com/documentation/mlcompute/mlclstmdescriptor/returnssequences)

# returnsSequences (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A Boolean that indicates whether the layer returns output for all sequences.

## Declaration

```swift
var returnsSequences: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If `false`, the layer returns output for only the last sequences.

## See Also

### Inspecting LSTM Descriptors

- [batchFirst](batchfirst.md): Deprecated. A Boolean that indicates whether the input and output shape is batch first.
- [dropout](dropout.md): Deprecated. The dropout probability.
- [hiddenSize](hiddensize.md): Deprecated. The number of features in the hidden state.
- [inputSize](inputsize.md): Deprecated. The number of expected features in the input.
- [isBidirectional](isbidirectional.md): Deprecated. A Boolean that indicates whether the layer is bidirectional.
- [layerCount](layercount.md): Deprecated. The number of recurrent layers.
- [resultMode](resultmode.md): Deprecated. The mode that indicates whether the layer produces a single result tensor or three result tensors — final output, last hidden state, and the cell state.
- [usesBiases](usesbiases.md): Deprecated. A Boolean that indicates whether you use bias weights.

# returnsSequences (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A Boolean that indicates whether the layer returns output for all sequences.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL returnsSequences;
```

<a id="Discussion"></a>

## Discussion

If `false`, the layer returns output for only the last sequences.

## See Also

### Inspecting LSTM Descriptors

- [batchFirst](batchfirst.md): Deprecated. A Boolean that indicates whether the input and output shape is batch first.
- [dropout](dropout.md): Deprecated. The dropout probability.
- [hiddenSize](hiddensize.md): Deprecated. The number of features in the hidden state.
- [inputSize](inputsize.md): Deprecated. The number of expected features in the input.
- [isBidirectional](isbidirectional.md): Deprecated. A Boolean that indicates whether the layer is bidirectional.
- [layerCount](layercount.md): Deprecated. The number of recurrent layers.
- [resultMode](resultmode.md): Deprecated. The mode that indicates whether the layer produces a single result tensor or three result tensors — final output, last hidden state, and the cell state.
- [usesBiases](usesbiases.md): Deprecated. A Boolean that indicates whether you use bias weights.
