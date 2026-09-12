> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcembeddinglayer/init(descriptor:weights:)](https://developer.apple.com/documentation/mlcompute/mlcembeddinglayer/init(descriptor:weights:))

# init(descriptor:weights:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an embedding layer with the descriptor and word embedding weights tensor you specify.

## Declaration

```swift
convenience init(descriptor: MLCEmbeddingDescriptor, weights: MLCTensor)
```

## Parameters

- `descriptor`: An object you use to configure the embedding layer.
- `weights`: A word embedding weights tensor.

## See Also

### Creating Embedding Layers

- [MLCEmbeddingDescriptor](../mlcembeddingdescriptor.md): Deprecated. A configuration object you use to create an embedding layer.

# layerWithDescriptor:weights: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an embedding layer with the descriptor and word embedding weights tensor you specify.

## Declaration

```objectivec
+ (instancetype) layerWithDescriptor:(MLCEmbeddingDescriptor *) descriptor weights:(MLCTensor *) weights;
```

## Parameters

- `descriptor`: An object you use to configure the embedding layer.
- `weights`: A word embedding weights tensor.

## See Also

### Creating Embedding Layers

- [MLCEmbeddingDescriptor](../mlcembeddingdescriptor.md): Deprecated. A configuration object you use to create an embedding layer.
