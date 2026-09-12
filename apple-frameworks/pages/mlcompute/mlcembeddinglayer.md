> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcembeddinglayer](https://developer.apple.com/documentation/mlcompute/mlcembeddinglayer)

# MLCEmbeddingLayer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that stores a word embedding.

## Declaration

```swift
class MLCEmbeddingLayer
```

## Topics

### Creating Embedding Layers

- [init(descriptor:weights:)](mlcembeddinglayer/init%28descriptor_weights_%29.md): Deprecated. Creates an embedding layer with the descriptor and word embedding weights tensor you specify.
- [MLCEmbeddingDescriptor](mlcembeddingdescriptor.md): Deprecated. A configuration object you use to create an embedding layer.

### Inspecting Embedding Layers

- [descriptor](mlcembeddinglayer/descriptor.md): Deprecated. The configuration object you use to create the embedding layer.
- [weights](mlcembeddinglayer/weights.md): Deprecated. The weights tensor that contains the word embedding.
- [weightsParameter](mlcembeddinglayer/weightsparameter.md): Deprecated. The tensor parameter that describes the weights for the optimizer update.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Convolution and Recurrent Layers

- [MLCConvolutionLayer](mlcconvolutionlayer.md): Deprecated. A layer that applies a convolution over a signal.
- [MLCLSTMLayer](mlclstmlayer.md): Deprecated. A layer that represents long short-term memory (LSTM) networks.
- [MLCPoolingLayer](mlcpoolinglayer.md): Deprecated. A layer that summarizes the average presence of a feature.
- [MLCUpsampleLayer](mlcupsamplelayer.md): Deprecated. A layer that applies upsampling with the shape you specify.

# MLCEmbeddingLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that stores a word embedding.

## Declaration

```objectivec
@interface MLCEmbeddingLayer : MLCLayer
```

## Topics

### Creating Embedding Layers

- [layerWithDescriptor:weights:](mlcembeddinglayer/init%28descriptor_weights_%29.md): Deprecated. Creates an embedding layer with the descriptor and word embedding weights tensor you specify.
- [MLCEmbeddingDescriptor](mlcembeddingdescriptor.md): Deprecated. A configuration object you use to create an embedding layer.

### Inspecting Embedding Layers

- [descriptor](mlcembeddinglayer/descriptor.md): Deprecated. The configuration object you use to create the embedding layer.
- [weights](mlcembeddinglayer/weights.md): Deprecated. The weights tensor that contains the word embedding.
- [weightsParameter](mlcembeddinglayer/weightsparameter.md): Deprecated. The tensor parameter that describes the weights for the optimizer update.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

## See Also

### Convolution and Recurrent Layers

- [MLCConvolutionLayer](mlcconvolutionlayer.md): Deprecated. A layer that applies a convolution over a signal.
- [MLCLSTMLayer](mlclstmlayer.md): Deprecated. A layer that represents long short-term memory (LSTM) networks.
- [MLCPoolingLayer](mlcpoolinglayer.md): Deprecated. A layer that summarizes the average presence of a feature.
- [MLCUpsampleLayer](mlcupsamplelayer.md): Deprecated. A layer that applies upsampling with the shape you specify.
