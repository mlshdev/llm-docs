> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcembeddingdescriptor/paddingindex-pb1e](https://developer.apple.com/documentation/mlcompute/mlcembeddingdescriptor/paddingindex-pb1e)

# paddingIndex

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

An unsigned integer value that, if set, causes the layer to initialize the embedding vector at that index to zero.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
var paddingIndex: Int? { get }
```

<a id="Discussion"></a>

## Discussion

If set, the layer won’t update the embedding vector at `paddingIndex` in the gradient pass.

## See Also

### Inspecting Embedding Descriptors

- [embeddingCount](embeddingcount-77gxz.md): Deprecated. The size of the dictionary.
- [embeddingDimension](embeddingdimension-1u9g.md): Deprecated. The dimension of embedding vectors.
- [maximumNorm](maximumnorm-17u0k.md): Deprecated. A float value that, if set, causes the layer to renormalize the selected embedding vectors to have an Lp norm less than this value.
- [pNorm](pnorm-8vhw1.md): Deprecated. The p of the Lp norm.
- [scalesGradientByFrequency](scalesgradientbyfrequency.md): Deprecated. A Boolean that indicates whether the layer scales gradients by the inverse of the frequency of words in batch before the weight update.
