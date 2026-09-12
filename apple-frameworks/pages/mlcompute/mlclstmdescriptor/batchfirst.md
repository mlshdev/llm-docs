> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclstmdescriptor/batchfirst](https://developer.apple.com/documentation/mlcompute/mlclstmdescriptor/batchfirst)

# batchFirst (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A Boolean that indicates whether the input and output shape is batch first.

## Declaration

```swift
var batchFirst: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If `batchFirst` is `true`, the input and output shape is `[batch, feature, 1, time steps]`. Otherwise, the shape is `[time steps, batch, feature]`, which is more efficient.

## See Also

### Inspecting LSTM Descriptors

- [dropout](dropout.md): Deprecated. The dropout probability.
- [hiddenSize](hiddensize.md): Deprecated. The number of features in the hidden state.
- [inputSize](inputsize.md): Deprecated. The number of expected features in the input.
- [isBidirectional](isbidirectional.md): Deprecated. A Boolean that indicates whether the layer is bidirectional.
- [layerCount](layercount.md): Deprecated. The number of recurrent layers.
- [resultMode](resultmode.md): Deprecated. The mode that indicates whether the layer produces a single result tensor or three result tensors — final output, last hidden state, and the cell state.
- [returnsSequences](returnssequences.md): Deprecated. A Boolean that indicates whether the layer returns output for all sequences.
- [usesBiases](usesbiases.md): Deprecated. A Boolean that indicates whether you use bias weights.

# batchFirst (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A Boolean that indicates whether the input and output shape is batch first.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL batchFirst;
```

<a id="Discussion"></a>

## Discussion

If `batchFirst` is `true`, the input and output shape is `[batch, feature, 1, time steps]`. Otherwise, the shape is `[time steps, batch, feature]`, which is more efficient.

## See Also

### Inspecting LSTM Descriptors

- [dropout](dropout.md): Deprecated. The dropout probability.
- [hiddenSize](hiddensize.md): Deprecated. The number of features in the hidden state.
- [inputSize](inputsize.md): Deprecated. The number of expected features in the input.
- [isBidirectional](isbidirectional.md): Deprecated. A Boolean that indicates whether the layer is bidirectional.
- [layerCount](layercount.md): Deprecated. The number of recurrent layers.
- [resultMode](resultmode.md): Deprecated. The mode that indicates whether the layer produces a single result tensor or three result tensors — final output, last hidden state, and the cell state.
- [returnsSequences](returnssequences.md): Deprecated. A Boolean that indicates whether the layer returns output for all sequences.
- [usesBiases](usesbiases.md): Deprecated. A Boolean that indicates whether you use bias weights.
