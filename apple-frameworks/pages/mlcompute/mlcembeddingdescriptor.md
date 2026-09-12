> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcembeddingdescriptor](https://developer.apple.com/documentation/mlcompute/mlcembeddingdescriptor)

# MLCEmbeddingDescriptor (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A configuration object you use to create an embedding layer.

## Declaration

```swift
class MLCEmbeddingDescriptor
```

## Topics

### Creating Embedding Descriptors

- [init(embeddingCount:embeddingDimension:)](mlcembeddingdescriptor/init%28embeddingcount_embeddingdimension_%29.md): Deprecated. Creates an embedding descriptor with the size of the dictionary and dimension of embedding vectors you specify.
- [init(embeddingCount:embeddingDimension:paddingIndex:maximumNorm:pNorm:scalesGradientByFrequency:)](mlcembeddingdescriptor/init%28embeddingcount_embeddingdimension_paddingindex_maximumnorm_pnorm_scalesgradientbyfrequency_%29.md): Deprecated. Creates an embedding descriptor with the size and dimension of embedding vectors, padding index, and norm and scaling options that you specify.

### Inspecting Embedding Descriptors

- [embeddingCount](mlcembeddingdescriptor/embeddingcount-77gxz.md): Deprecated. The size of the dictionary.
- [embeddingDimension](mlcembeddingdescriptor/embeddingdimension-1u9g.md): Deprecated. The dimension of embedding vectors.
- [paddingIndex](mlcembeddingdescriptor/paddingindex-pb1e.md): Deprecated. An unsigned integer value that, if set, causes the layer to initialize the embedding vector at that index to zero.
- [maximumNorm](mlcembeddingdescriptor/maximumnorm-17u0k.md): Deprecated. A float value that, if set, causes the layer to renormalize the selected embedding vectors to have an Lp norm less than this value.
- [pNorm](mlcembeddingdescriptor/pnorm-8vhw1.md): Deprecated. The p of the Lp norm.
- [scalesGradientByFrequency](mlcembeddingdescriptor/scalesgradientbyfrequency.md): Deprecated. A Boolean that indicates whether the layer scales gradients by the inverse of the frequency of words in batch before the weight update.

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

### Creating Embedding Layers

- [init(descriptor:weights:)](mlcembeddinglayer/init%28descriptor_weights_%29.md): Deprecated. Creates an embedding layer with the descriptor and word embedding weights tensor you specify.

# MLCEmbeddingDescriptor (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A configuration object you use to create an embedding layer.

## Declaration

```objectivec
@interface MLCEmbeddingDescriptor : NSObject
```

## Topics

### Creating Embedding Descriptors

- [descriptorWithEmbeddingCount:embeddingDimension:](mlcembeddingdescriptor/descriptorwithembeddingcount_embeddingdimension_.md): Deprecated. Creates an embedding descriptor with the size of the dictionary and dimension of embedding vectors you specify.
- [descriptorWithEmbeddingCount:embeddingDimension:paddingIndex:maximumNorm:pNorm:scalesGradientByFrequency:](mlcembeddingdescriptor/descriptorwithembeddingcount_embeddingdimension_paddingindex_maximumnorm_pnorm_scalesgradientbyfrequency_.md): Deprecated. Creates a new embedding descriptor with the size and dimension of embedding vectors, padding index, and norm and scaling options that you specify.

### Inspecting Embedding Descriptors

- [embeddingCount](mlcembeddingdescriptor/embeddingcount-5vs5t.md): Deprecated. The size of the dictionary.
- [embeddingDimension](mlcembeddingdescriptor/embeddingdimension-3u8w7.md): Deprecated. The dimension of embedding vectors.
- [paddingIndex](mlcembeddingdescriptor/paddingindex-50o5o.md): Deprecated. An unsigned integer value that, if set, causes the layer to initialize the embedding vector at that index to zero.
- [maximumNorm](mlcembeddingdescriptor/maximumnorm-4mrjj.md): Deprecated. A float value that, if set, causes the layer to renormalize the selected embedding vectors to have an Lp norm less than this value.
- [pNorm](mlcembeddingdescriptor/pnorm-8mto8.md): Deprecated. The p of the Lp norm.
- [scalesGradientByFrequency](mlcembeddingdescriptor/scalesgradientbyfrequency.md): Deprecated. A Boolean that indicates whether the layer scales gradients by the inverse of the frequency of words in batch before the weight update.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Creating Embedding Layers

- [layerWithDescriptor:weights:](mlcembeddinglayer/init%28descriptor_weights_%29.md): Deprecated. Creates an embedding layer with the descriptor and word embedding weights tensor you specify.
