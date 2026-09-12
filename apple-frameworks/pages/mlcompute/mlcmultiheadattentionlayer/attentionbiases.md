> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcmultiheadattentionlayer/attentionbiases](https://developer.apple.com/documentation/mlcompute/mlcmultiheadattentionlayer/attentionbiases)

# attentionBiases (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The array of attention biases you use for key and value.

## Declaration

```swift
var attentionBiases: [MLCTensor]? { get }
```

## See Also

### Inspecting Multi-Head Attention Layers

- [descriptor](descriptor.md): Deprecated. The configuration object you use to create the multi-head attention layer.
- [weights](weights.md): Deprecated. The array of weights you use for query, key, value, and output projections.
- [biases](biases.md): Deprecated. The array of biases you use for query, key, value, and output projections.
- [weightsParameters](weightsparameters.md): Deprecated. The array of weights tensor parameters you use for optimizer updates.
- [biasesParameters](biasesparameters.md): Deprecated. The array of biases tensor parameters you use for optimizer updates.

# attentionBiases (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The array of attention biases you use for key and value.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) NSArray<MLCTensor *> * attentionBiases;
```

## See Also

### Inspecting Multi-Head Attention Layers

- [descriptor](descriptor.md): Deprecated. The configuration object you use to create the multi-head attention layer.
- [weights](weights.md): Deprecated. The array of weights you use for query, key, value, and output projections.
- [biases](biases.md): Deprecated. The array of biases you use for query, key, value, and output projections.
- [weightsParameters](weightsparameters.md): Deprecated. The array of weights tensor parameters you use for optimizer updates.
- [biasesParameters](biasesparameters.md): Deprecated. The array of biases tensor parameters you use for optimizer updates.
