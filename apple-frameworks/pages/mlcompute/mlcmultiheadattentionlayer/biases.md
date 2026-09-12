> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcmultiheadattentionlayer/biases](https://developer.apple.com/documentation/mlcompute/mlcmultiheadattentionlayer/biases)

# biases (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The array of biases you use for query, key, value, and output projections.

## Declaration

```swift
var biases: [MLCTensor]? { get }
```

## See Also

### Inspecting Multi-Head Attention Layers

- [descriptor](descriptor.md): Deprecated. The configuration object you use to create the multi-head attention layer.
- [weights](weights.md): Deprecated. The array of weights you use for query, key, value, and output projections.
- [attentionBiases](attentionbiases.md): Deprecated. The array of attention biases you use for key and value.
- [weightsParameters](weightsparameters.md): Deprecated. The array of weights tensor parameters you use for optimizer updates.
- [biasesParameters](biasesparameters.md): Deprecated. The array of biases tensor parameters you use for optimizer updates.

# biases (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The array of biases you use for query, key, value, and output projections.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) NSArray<MLCTensor *> * biases;
```

## See Also

### Inspecting Multi-Head Attention Layers

- [descriptor](descriptor.md): Deprecated. The configuration object you use to create the multi-head attention layer.
- [weights](weights.md): Deprecated. The array of weights you use for query, key, value, and output projections.
- [attentionBiases](attentionbiases.md): Deprecated. The array of attention biases you use for key and value.
- [weightsParameters](weightsparameters.md): Deprecated. The array of weights tensor parameters you use for optimizer updates.
- [biasesParameters](biasesparameters.md): Deprecated. The array of biases tensor parameters you use for optimizer updates.
