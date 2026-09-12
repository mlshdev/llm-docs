> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcmultiheadattentionlayer](https://developer.apple.com/documentation/mlcompute/mlcmultiheadattentionlayer)

# MLCMultiheadAttentionLayer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A multihead, scaled dot-product attention layer that attends to one or more entries in the input key-value pairs.

## Declaration

```swift
class MLCMultiheadAttentionLayer
```

<a id="overview"></a>

## Overview

The dimensions of projections are as follows:

- **Query**: `(1, headCount, keyDimension/headCount, modelDimension)`
- **Key**: `(1, headCount, keyDimension/headCount, modelDimension)`
- **Value**: `(1, headCount, valueDimension/headCount, modelDimension)`
- **Output**: `(1, 1, modelDimension, valueDimension)`

\`\`

## Topics

### Creating Multi-Head Attention Layers

- [init(descriptor:weights:biases:attentionBiases:)](mlcmultiheadattentionlayer/init%28descriptor_weights_biases_attentionbiases_%29.md): Deprecated. Creates a multi-head attention layer with the descriptor, weights, and biases you specify.
- [MLCMultiheadAttentionDescriptor](mlcmultiheadattentiondescriptor.md): Deprecated. A configuration object you use to create a multi-head attention layer.

### Inspecting Multi-Head Attention Layers

- [descriptor](mlcmultiheadattentionlayer/descriptor.md): Deprecated. The configuration object you use to create the multi-head attention layer.
- [weights](mlcmultiheadattentionlayer/weights.md): Deprecated. The array of weights you use for query, key, value, and output projections.
- [biases](mlcmultiheadattentionlayer/biases.md): Deprecated. The array of biases you use for query, key, value, and output projections.
- [attentionBiases](mlcmultiheadattentionlayer/attentionbiases.md): Deprecated. The array of attention biases you use for key and value.
- [weightsParameters](mlcmultiheadattentionlayer/weightsparameters.md): Deprecated. The array of weights tensor parameters you use for optimizer updates.
- [biasesParameters](mlcmultiheadattentionlayer/biasesparameters.md): Deprecated. The array of biases tensor parameters you use for optimizer updates.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Activation Layers

- [MLCActivationLayer](mlcactivationlayer.md): Deprecated. A layer that applies an activation function to the source tensor and produces an output.
- [MLCSoftmaxLayer](mlcsoftmaxlayer.md): Deprecated. A layer that outputs a probability distribution as attention weights.

# MLCMultiheadAttentionLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A multihead, scaled dot-product attention layer that attends to one or more entries in the input key-value pairs.

## Declaration

```objectivec
@interface MLCMultiheadAttentionLayer : MLCLayer
```

<a id="overview"></a>

## Overview

The dimensions of projections are as follows:

- **Query**: `(1, headCount, keyDimension/headCount, modelDimension)`
- **Key**: `(1, headCount, keyDimension/headCount, modelDimension)`
- **Value**: `(1, headCount, valueDimension/headCount, modelDimension)`
- **Output**: `(1, 1, modelDimension, valueDimension)`

\`\`

## Topics

### Creating Multi-Head Attention Layers

- [layerWithDescriptor:weights:biases:attentionBiases:](mlcmultiheadattentionlayer/init%28descriptor_weights_biases_attentionbiases_%29.md): Deprecated. Creates a multi-head attention layer with the descriptor, weights, and biases you specify.
- [MLCMultiheadAttentionDescriptor](mlcmultiheadattentiondescriptor.md): Deprecated. A configuration object you use to create a multi-head attention layer.

### Inspecting Multi-Head Attention Layers

- [descriptor](mlcmultiheadattentionlayer/descriptor.md): Deprecated. The configuration object you use to create the multi-head attention layer.
- [weights](mlcmultiheadattentionlayer/weights.md): Deprecated. The array of weights you use for query, key, value, and output projections.
- [biases](mlcmultiheadattentionlayer/biases.md): Deprecated. The array of biases you use for query, key, value, and output projections.
- [attentionBiases](mlcmultiheadattentionlayer/attentionbiases.md): Deprecated. The array of attention biases you use for key and value.
- [weightsParameters](mlcmultiheadattentionlayer/weightsparameters.md): Deprecated. The array of weights tensor parameters you use for optimizer updates.
- [biasesParameters](mlcmultiheadattentionlayer/biasesparameters.md): Deprecated. The array of biases tensor parameters you use for optimizer updates.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

## See Also

### Activation Layers

- [MLCActivationLayer](mlcactivationlayer.md): Deprecated. A layer that applies an activation function to the source tensor and produces an output.
- [MLCSoftmaxLayer](mlcsoftmaxlayer.md): Deprecated. A layer that outputs a probability distribution as attention weights.
