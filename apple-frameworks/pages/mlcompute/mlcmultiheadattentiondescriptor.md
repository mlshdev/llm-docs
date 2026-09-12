> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcmultiheadattentiondescriptor](https://developer.apple.com/documentation/mlcompute/mlcmultiheadattentiondescriptor)

# MLCMultiheadAttentionDescriptor (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A configuration object you use to create a multi-head attention layer.

## Declaration

```swift
class MLCMultiheadAttentionDescriptor
```

## Topics

### Creating Multi-Head Attention Descriptors

- [init(modelDimension:headCount:)](mlcmultiheadattentiondescriptor/init%28modeldimension_headcount_%29.md): Deprecated. Creates a multi-head attention descriptor with the model dimension and number of parallel attention heads you specify.
- [init(modelDimension:keyDimension:valueDimension:headCount:dropout:hasBiases:hasAttentionBiases:addsZeroAttention:)](mlcmultiheadattentiondescriptor/init%28modeldimension_keydimension_valuedimension_headcount_dropout_hasbiases_hasattentionbiases_addszeroattention_%29.md): Deprecated. Creates a multi-head attention descriptor with the dimensions, number of attention heads, dropout rate, and bias and padding options you specify.

### Inspecting Multi-Head Attention Descriptors

- [modelDimension](mlcmultiheadattentiondescriptor/modeldimension.md): Deprecated. The model or embedding dimension.
- [keyDimension](mlcmultiheadattentiondescriptor/keydimension.md): Deprecated. The total dimension of key space, which must be divisible by the number of heads.
- [valueDimension](mlcmultiheadattentiondescriptor/valuedimension.md): Deprecated. The total dimension of value space, which must be divisible by the number of heads.
- [headCount](mlcmultiheadattentiondescriptor/headcount.md): Deprecated. The number of parallel attention heads.
- [dropout](mlcmultiheadattentiondescriptor/dropout.md): Deprecated. The dropout rate you apply to the output projection weights.
- [hasBiases](mlcmultiheadattentiondescriptor/hasbiases.md): Deprecated. A Boolean that specifies whether you add a bias to query, key, value, and output projections.
- [hasAttentionBiases](mlcmultiheadattentiondescriptor/hasattentionbiases.md): Deprecated. A Boolean that specifies whether you add an array of biases to key and value, respectively.
- [addsZeroAttention](mlcmultiheadattentiondescriptor/addszeroattention.md): Deprecated. A Boolean that specifies whether you add a row of zeros to projected key and value.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Creating Multi-Head Attention Layers

- [init(descriptor:weights:biases:attentionBiases:)](mlcmultiheadattentionlayer/init%28descriptor_weights_biases_attentionbiases_%29.md): Deprecated. Creates a multi-head attention layer with the descriptor, weights, and biases you specify.

# MLCMultiheadAttentionDescriptor (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A configuration object you use to create a multi-head attention layer.

## Declaration

```objectivec
@interface MLCMultiheadAttentionDescriptor : NSObject
```

## Topics

### Creating Multi-Head Attention Descriptors

- [descriptorWithModelDimension:headCount:](mlcmultiheadattentiondescriptor/init%28modeldimension_headcount_%29.md): Deprecated. Creates a multi-head attention descriptor with the model dimension and number of parallel attention heads you specify.
- [descriptorWithModelDimension:keyDimension:valueDimension:headCount:dropout:hasBiases:hasAttentionBiases:addsZeroAttention:](mlcmultiheadattentiondescriptor/init%28modeldimension_keydimension_valuedimension_headcount_dropout_hasbiases_hasattentionbiases_addszeroattention_%29.md): Deprecated. Creates a multi-head attention descriptor with the dimensions, number of attention heads, dropout rate, and bias and padding options you specify.

### Inspecting Multi-Head Attention Descriptors

- [modelDimension](mlcmultiheadattentiondescriptor/modeldimension.md): Deprecated. The model or embedding dimension.
- [keyDimension](mlcmultiheadattentiondescriptor/keydimension.md): Deprecated. The total dimension of key space, which must be divisible by the number of heads.
- [valueDimension](mlcmultiheadattentiondescriptor/valuedimension.md): Deprecated. The total dimension of value space, which must be divisible by the number of heads.
- [headCount](mlcmultiheadattentiondescriptor/headcount.md): Deprecated. The number of parallel attention heads.
- [dropout](mlcmultiheadattentiondescriptor/dropout.md): Deprecated. The dropout rate you apply to the output projection weights.
- [hasBiases](mlcmultiheadattentiondescriptor/hasbiases.md): Deprecated. A Boolean that specifies whether you add a bias to query, key, value, and output projections.
- [hasAttentionBiases](mlcmultiheadattentiondescriptor/hasattentionbiases.md): Deprecated. A Boolean that specifies whether you add an array of biases to key and value, respectively.
- [addsZeroAttention](mlcmultiheadattentiondescriptor/addszeroattention.md): Deprecated. A Boolean that specifies whether you add a row of zeros to projected key and value.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Creating Multi-Head Attention Layers

- [layerWithDescriptor:weights:biases:attentionBiases:](mlcmultiheadattentionlayer/init%28descriptor_weights_biases_attentionbiases_%29.md): Deprecated. Creates a multi-head attention layer with the descriptor, weights, and biases you specify.
