> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcembeddingdescriptor/embeddingdimension-1u9g](https://developer.apple.com/documentation/mlcompute/mlcembeddingdescriptor/embeddingdimension-1u9g)

# embeddingDimension

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

The dimension of embedding vectors.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
var embeddingDimension: Int { get }
```

## See Also

### Inspecting Embedding Descriptors

- [embeddingCount](embeddingcount-77gxz.md): Deprecated. The size of the dictionary.
- [paddingIndex](paddingindex-pb1e.md): Deprecated. An unsigned integer value that, if set, causes the layer to initialize the embedding vector at that index to zero.
- [maximumNorm](maximumnorm-17u0k.md): Deprecated. A float value that, if set, causes the layer to renormalize the selected embedding vectors to have an Lp norm less than this value.
- [pNorm](pnorm-8vhw1.md): Deprecated. The p of the Lp norm.
- [scalesGradientByFrequency](scalesgradientbyfrequency.md): Deprecated. A Boolean that indicates whether the layer scales gradients by the inverse of the frequency of words in batch before the weight update.
