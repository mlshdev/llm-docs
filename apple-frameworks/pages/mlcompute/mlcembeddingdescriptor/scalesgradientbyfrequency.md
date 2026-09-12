> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcembeddingdescriptor/scalesgradientbyfrequency](https://developer.apple.com/documentation/mlcompute/mlcembeddingdescriptor/scalesgradientbyfrequency)

# scalesGradientByFrequency (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A Boolean that indicates whether the layer scales gradients by the inverse of the frequency of words in batch before the weight update.

## Declaration

```swift
var scalesGradientByFrequency: Bool { get }
```

## See Also

### Inspecting Embedding Descriptors

- [embeddingCount](embeddingcount-77gxz.md): Deprecated. The size of the dictionary.
- [embeddingDimension](embeddingdimension-1u9g.md): Deprecated. The dimension of embedding vectors.
- [paddingIndex](paddingindex-pb1e.md): Deprecated. An unsigned integer value that, if set, causes the layer to initialize the embedding vector at that index to zero.
- [maximumNorm](maximumnorm-17u0k.md): Deprecated. A float value that, if set, causes the layer to renormalize the selected embedding vectors to have an Lp norm less than this value.
- [pNorm](pnorm-8vhw1.md): Deprecated. The p of the Lp norm.

# scalesGradientByFrequency (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A Boolean that indicates whether the layer scales gradients by the inverse of the frequency of words in batch before the weight update.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL scalesGradientByFrequency;
```

## See Also

### Inspecting Embedding Descriptors

- [embeddingCount](embeddingcount-5vs5t.md): Deprecated. The size of the dictionary.
- [embeddingDimension](embeddingdimension-3u8w7.md): Deprecated. The dimension of embedding vectors.
- [paddingIndex](paddingindex-50o5o.md): Deprecated. An unsigned integer value that, if set, causes the layer to initialize the embedding vector at that index to zero.
- [maximumNorm](maximumnorm-4mrjj.md): Deprecated. A float value that, if set, causes the layer to renormalize the selected embedding vectors to have an Lp norm less than this value.
- [pNorm](pnorm-8mto8.md): Deprecated. The p of the Lp norm.
