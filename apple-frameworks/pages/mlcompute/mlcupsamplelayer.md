> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcupsamplelayer](https://developer.apple.com/documentation/mlcompute/mlcupsamplelayer)

# MLCUpsampleLayer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that applies upsampling with the shape you specify.

## Declaration

```swift
class MLCUpsampleLayer
```

## Topics

### Creating Upsample Layers

- [init(shape:)](mlcupsamplelayer/init%28shape_%29.md): Deprecated. Creates an upsample layer with the shape you specify.
- [init(shape:sampleMode:alignsCorners:)](mlcupsamplelayer/init%28shape_samplemode_alignscorners_%29.md): Deprecated. Creates an upsample layer with the shape, upsampling algorithm, and corner alignment option you specify.
- [MLCSampleMode](mlcsamplemode.md): Deprecated. A sampling mode for an upsample layer.

### Inspecting Upsample Layers

- [shape](mlcupsamplelayer/shape-61n1u.md): Deprecated. An array that contains the dimensions of the result tensor.
- [sampleMode](mlcupsamplelayer/samplemode.md): Deprecated. The upsampling algorithm type.
- [alignsCorners](mlcupsamplelayer/alignscorners.md): Deprecated. A Boolean that indicates whether the layer aligns the corner pixels of the input and output tensors.

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
- [MLCEmbeddingLayer](mlcembeddinglayer.md): Deprecated. A layer that stores a word embedding.

# MLCUpsampleLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that applies upsampling with the shape you specify.

## Declaration

```objectivec
@interface MLCUpsampleLayer : MLCLayer
```

## Topics

### Creating Upsample Layers

- [layerWithShape:](mlcupsamplelayer/layerwithshape_.md): Deprecated. Creates an upsample layer with the shape you specify.
- [layerWithShape:sampleMode:alignsCorners:](mlcupsamplelayer/layerwithshape_samplemode_alignscorners_.md): Deprecated. Creates an upsample layer with the shape, upsampling algorithm, and corner alignement option you specify.
- [MLCSampleMode](mlcsamplemode.md): Deprecated. A sampling mode for an upsample layer.

### Inspecting Upsample Layers

- [shape](mlcupsamplelayer/shape-7j6sf.md): Deprecated. An array that contains the dimensions of the result tensor.
- [sampleMode](mlcupsamplelayer/samplemode.md): Deprecated. The upsampling algorithm type.
- [alignsCorners](mlcupsamplelayer/alignscorners.md): Deprecated. A Boolean that indicates whether the layer aligns the corner pixels of the input and output tensors.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

## See Also

### Convolution and Recurrent Layers

- [MLCConvolutionLayer](mlcconvolutionlayer.md): Deprecated. A layer that applies a convolution over a signal.
- [MLCLSTMLayer](mlclstmlayer.md): Deprecated. A layer that represents long short-term memory (LSTM) networks.
- [MLCPoolingLayer](mlcpoolinglayer.md): Deprecated. A layer that summarizes the average presence of a feature.
- [MLCEmbeddingLayer](mlcembeddinglayer.md): Deprecated. A layer that stores a word embedding.
