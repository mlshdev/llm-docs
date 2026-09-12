> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcembeddinglayer/descriptor](https://developer.apple.com/documentation/mlcompute/mlcembeddinglayer/descriptor)

# descriptor (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The configuration object you use to create the embedding layer.

## Declaration

```swift
@NSCopying var descriptor: MLCEmbeddingDescriptor { get }
```

## See Also

### Inspecting Embedding Layers

- [weights](weights.md): Deprecated. The weights tensor that contains the word embedding.
- [weightsParameter](weightsparameter.md): Deprecated. The tensor parameter that describes the weights for the optimizer update.

# descriptor (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The configuration object you use to create the embedding layer.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) MLCEmbeddingDescriptor * descriptor;
```

## See Also

### Inspecting Embedding Layers

- [weights](weights.md): Deprecated. The weights tensor that contains the word embedding.
- [weightsParameter](weightsparameter.md): Deprecated. The tensor parameter that describes the weights for the optimizer update.
