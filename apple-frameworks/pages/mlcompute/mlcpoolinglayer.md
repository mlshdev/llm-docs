> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcpoolinglayer](https://developer.apple.com/documentation/mlcompute/mlcpoolinglayer)

# MLCPoolingLayer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that summarizes the average presence of a feature.

## Declaration

```swift
class MLCPoolingLayer
```

## Topics

### Creating Pooling Layers

- [init(descriptor:)](mlcpoolinglayer/init%28descriptor_%29.md): Deprecated. Creates a pooling layer with the descriptor you specify.
- [MLCPoolingDescriptor](mlcpoolingdescriptor.md): Deprecated. A configuration object you use to create a pooling layer.
- [MLCPoolingType](mlcpoolingtype-wb8j.md): Deprecated. A pooling function type for a pooling layer.

### Inspecting Pooling Layers

- [descriptor](mlcpoolinglayer/descriptor.md): Deprecated. The configuration object you use to create the pooling layer.

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
- [MLCUpsampleLayer](mlcupsamplelayer.md): Deprecated. A layer that applies upsampling with the shape you specify.
- [MLCEmbeddingLayer](mlcembeddinglayer.md): Deprecated. A layer that stores a word embedding.

# MLCPoolingLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that summarizes the average presence of a feature.

## Declaration

```objectivec
@interface MLCPoolingLayer : MLCLayer
```

## Topics

### Creating Pooling Layers

- [layerWithDescriptor:](mlcpoolinglayer/init%28descriptor_%29.md): Deprecated. Creates a pooling layer with the descriptor you specify.
- [MLCPoolingDescriptor](mlcpoolingdescriptor.md): Deprecated. A configuration object you use to create a pooling layer.
- [MLCPoolingType](mlcpoolingtype-8hrit.md): A pooling function type for a pooling layer.

### Inspecting Pooling Layers

- [descriptor](mlcpoolinglayer/descriptor.md): Deprecated. The configuration object you use to create the pooling layer.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

## See Also

### Convolution and Recurrent Layers

- [MLCConvolutionLayer](mlcconvolutionlayer.md): Deprecated. A layer that applies a convolution over a signal.
- [MLCLSTMLayer](mlclstmlayer.md): Deprecated. A layer that represents long short-term memory (LSTM) networks.
- [MLCUpsampleLayer](mlcupsamplelayer.md): Deprecated. A layer that applies upsampling with the shape you specify.
- [MLCEmbeddingLayer](mlcembeddinglayer.md): Deprecated. A layer that stores a word embedding.
