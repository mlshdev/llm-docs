> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcembeddingdescriptor/embeddingcount-5vs5t](https://developer.apple.com/documentation/mlcompute/mlcembeddingdescriptor/embeddingcount-5vs5t)

# embeddingCount

**Interface language:** Objective-C

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The size of the dictionary.

## Declaration

```objectivec
@property (nonatomic, readonly) NSNumber * embeddingCount;
```

## See Also

### Inspecting Embedding Descriptors

- [embeddingDimension](embeddingdimension-3u8w7.md): Deprecated. The dimension of embedding vectors.
- [paddingIndex](paddingindex-50o5o.md): Deprecated. An unsigned integer value that, if set, causes the layer to initialize the embedding vector at that index to zero.
- [maximumNorm](maximumnorm-4mrjj.md): Deprecated. A float value that, if set, causes the layer to renormalize the selected embedding vectors to have an Lp norm less than this value.
- [pNorm](pnorm-8mto8.md): Deprecated. The p of the Lp norm.
- [scalesGradientByFrequency](scalesgradientbyfrequency.md): Deprecated. A Boolean that indicates whether the layer scales gradients by the inverse of the frequency of words in batch before the weight update.
