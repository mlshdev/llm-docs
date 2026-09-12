> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcembeddingdescriptor/pnorm-8vhw1](https://developer.apple.com/documentation/mlcompute/mlcembeddingdescriptor/pnorm-8vhw1)

# pNorm

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

The p of the Lp norm.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
var pNorm: Float? { get }
```

<a id="Discussion"></a>

## Discussion

You can set this value to [infinity](https://developer.apple.com/documentation/swift/float/infinity).

## See Also

### Inspecting Embedding Descriptors

- [embeddingCount](embeddingcount-77gxz.md): Deprecated. The size of the dictionary.
- [embeddingDimension](embeddingdimension-1u9g.md): Deprecated. The dimension of embedding vectors.
- [paddingIndex](paddingindex-pb1e.md): Deprecated. An unsigned integer value that, if set, causes the layer to initialize the embedding vector at that index to zero.
- [maximumNorm](maximumnorm-17u0k.md): Deprecated. A float value that, if set, causes the layer to renormalize the selected embedding vectors to have an Lp norm less than this value.
- [scalesGradientByFrequency](scalesgradientbyfrequency.md): Deprecated. A Boolean that indicates whether the layer scales gradients by the inverse of the frequency of words in batch before the weight update.
