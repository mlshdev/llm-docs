> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcmultiheadattentionlayer/init(descriptor:weights:biases:attentionbiases:)](https://developer.apple.com/documentation/mlcompute/mlcmultiheadattentionlayer/init(descriptor:weights:biases:attentionbiases:))

# init(descriptor:weights:biases:attentionBiases:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a multi-head attention layer with the descriptor, weights, and biases you specify.

## Declaration

```swift
convenience init?(descriptor: MLCMultiheadAttentionDescriptor, weights: [MLCTensor], biases: [MLCTensor]?, attentionBiases: [MLCTensor]?)
```

## Parameters

- `descriptor`: An object you use to configure the multi-head attention layer.
- `weights`: An array that contains the weights that correspond to query, key, value, and output projections for all heads.
- `biases`: An array that contains the biases that correspond to query, key, value, and output projections for all heads.
- `attentionBiases`: An array that contains the biases you add to the key and value, respectively.

## See Also

### Creating Multi-Head Attention Layers

- [MLCMultiheadAttentionDescriptor](../mlcmultiheadattentiondescriptor.md): Deprecated. A configuration object you use to create a multi-head attention layer.

# layerWithDescriptor:weights:biases:attentionBiases: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a multi-head attention layer with the descriptor, weights, and biases you specify.

## Declaration

```objectivec
+ (instancetype) layerWithDescriptor:(MLCMultiheadAttentionDescriptor *) descriptor weights:(NSArray<MLCTensor *> *) weights biases:(NSArray<MLCTensor *> *) biases attentionBiases:(NSArray<MLCTensor *> *) attentionBiases;
```

## Parameters

- `descriptor`: An object you use to configure the multi-head attention layer.
- `weights`: An array that contains the weights that correspond to query, key, value, and output projections for all heads.
- `biases`: An array that contains the biases that correspond to query, key, value, and output projections for all heads.
- `attentionBiases`: An array that contains the biases you add to the key and value, respectively.

## See Also

### Creating Multi-Head Attention Layers

- [MLCMultiheadAttentionDescriptor](../mlcmultiheadattentiondescriptor.md): Deprecated. A configuration object you use to create a multi-head attention layer.
