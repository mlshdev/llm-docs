> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcembeddingdescriptor/maximumnorm-17u0k](https://developer.apple.com/documentation/mlcompute/mlcembeddingdescriptor/maximumnorm-17u0k)

# maximumNorm

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

A float value that, if set, causes the layer to renormalize the selected embedding vectors to have an Lp norm less than this value.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
var maximumNorm: Float? { get }
```

<a id="Discussion"></a>

## Discussion

Renormalization occurs in the forward pass only.

## See Also

### Inspecting Embedding Descriptors

- [embeddingCount](embeddingcount-77gxz.md): Deprecated. The size of the dictionary.
- [embeddingDimension](embeddingdimension-1u9g.md): Deprecated. The dimension of embedding vectors.
- [paddingIndex](paddingindex-pb1e.md): Deprecated. An unsigned integer value that, if set, causes the layer to initialize the embedding vector at that index to zero.
- [pNorm](pnorm-8vhw1.md): Deprecated. The p of the Lp norm.
- [scalesGradientByFrequency](scalesgradientbyfrequency.md): Deprecated. A Boolean that indicates whether the layer scales gradients by the inverse of the frequency of words in batch before the weight update.
