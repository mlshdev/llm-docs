> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcembeddingdescriptor/descriptorwithembeddingcount:embeddingdimension:](https://developer.apple.com/documentation/mlcompute/mlcembeddingdescriptor/descriptorwithembeddingcount:embeddingdimension:)

# descriptorWithEmbeddingCount:embeddingDimension:

**Interface language:** Objective-C

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an embedding descriptor with the size of the dictionary and dimension of embedding vectors you specify.

## Declaration

```objectivec
+ (instancetype) descriptorWithEmbeddingCount:(NSNumber *) embeddingCount embeddingDimension:(NSNumber *) embeddingDimension;
```

## Parameters

- `embeddingCount`: The size of the dictionary.
- `embeddingDimension`: The dimension of embedding vectors.

<a id="return-value"></a>

## Return Value

An embedding descriptor.

## See Also

### Creating Embedding Descriptors

- [descriptorWithEmbeddingCount:embeddingDimension:paddingIndex:maximumNorm:pNorm:scalesGradientByFrequency:](descriptorwithembeddingcount_embeddingdimension_paddingindex_maximumnorm_pnorm_scalesgradientbyfrequency_.md): Deprecated. Creates a new embedding descriptor with the size and dimension of embedding vectors, padding index, and norm and scaling options that you specify.
