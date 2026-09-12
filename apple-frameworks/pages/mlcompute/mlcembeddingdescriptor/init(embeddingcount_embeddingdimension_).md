> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcembeddingdescriptor/init(embeddingcount:embeddingdimension:)](https://developer.apple.com/documentation/mlcompute/mlcembeddingdescriptor/init(embeddingcount:embeddingdimension:))

# init(embeddingCount:embeddingDimension:)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

Creates an embedding descriptor with the size of the dictionary and dimension of embedding vectors you specify.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
convenience init?(embeddingCount: Int, embeddingDimension: Int)
```

## Parameters

- `embeddingCount`: The size of the dictionary.
- `embeddingDimension`: The dimension of embedding vectors.

## See Also

### Creating Embedding Descriptors

- [init(embeddingCount:embeddingDimension:paddingIndex:maximumNorm:pNorm:scalesGradientByFrequency:)](init%28embeddingcount_embeddingdimension_paddingindex_maximumnorm_pnorm_scalesgradientbyfrequency_%29.md): Deprecated. Creates an embedding descriptor with the size and dimension of embedding vectors, padding index, and norm and scaling options that you specify.
