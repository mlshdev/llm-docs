> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcconvolutionlayer](https://developer.apple.com/documentation/mlcompute/mlcconvolutionlayer)

# MLCConvolutionLayer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that applies a convolution over a signal.

## Declaration

```swift
class MLCConvolutionLayer
```

## Topics

### Creating Convolution Layers

- [init(weights:biases:descriptor:)](mlcconvolutionlayer/init%28weights_biases_descriptor_%29.md): Deprecated. Creates a convolution layer with the weights, biases, and descriptor you specify.
- [MLCConvolutionDescriptor](mlcconvolutiondescriptor.md): Deprecated. A configuration object you use to create a convolution or fully connected layer.

### Inspecting Convolution Layers

- [descriptor](mlcconvolutionlayer/descriptor.md): Deprecated. The configuration object you use to create the convolution layer.
- [weights](mlcconvolutionlayer/weights.md): Deprecated. The weights tensor you use for the convolution layer.
- [biases](mlcconvolutionlayer/biases.md): Deprecated. The biases tensor you use for the convolution layer.
- [weightsParameter](mlcconvolutionlayer/weightsparameter.md): Deprecated. The weights tensor parameter you use for optimizer updates.
- [biasesParameter](mlcconvolutionlayer/biasesparameter.md): Deprecated. The biases tensor parameter you use for optimizer updates.

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

- [MLCLSTMLayer](mlclstmlayer.md): Deprecated. A layer that represents long short-term memory (LSTM) networks.
- [MLCPoolingLayer](mlcpoolinglayer.md): Deprecated. A layer that summarizes the average presence of a feature.
- [MLCUpsampleLayer](mlcupsamplelayer.md): Deprecated. A layer that applies upsampling with the shape you specify.
- [MLCEmbeddingLayer](mlcembeddinglayer.md): Deprecated. A layer that stores a word embedding.

# MLCConvolutionLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that applies a convolution over a signal.

## Declaration

```objectivec
@interface MLCConvolutionLayer : MLCLayer
```

## Topics

### Creating Convolution Layers

- [layerWithWeights:biases:descriptor:](mlcconvolutionlayer/init%28weights_biases_descriptor_%29.md): Deprecated. Creates a convolution layer with the weights, biases, and descriptor you specify.
- [MLCConvolutionDescriptor](mlcconvolutiondescriptor.md): Deprecated. A configuration object you use to create a convolution or fully connected layer.

### Inspecting Convolution Layers

- [descriptor](mlcconvolutionlayer/descriptor.md): Deprecated. The configuration object you use to create the convolution layer.
- [weights](mlcconvolutionlayer/weights.md): Deprecated. The weights tensor you use for the convolution layer.
- [biases](mlcconvolutionlayer/biases.md): Deprecated. The biases tensor you use for the convolution layer.
- [weightsParameter](mlcconvolutionlayer/weightsparameter.md): Deprecated. The weights tensor parameter you use for optimizer updates.
- [biasesParameter](mlcconvolutionlayer/biasesparameter.md): Deprecated. The biases tensor parameter you use for optimizer updates.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

## See Also

### Convolution and Recurrent Layers

- [MLCLSTMLayer](mlclstmlayer.md): Deprecated. A layer that represents long short-term memory (LSTM) networks.
- [MLCPoolingLayer](mlcpoolinglayer.md): Deprecated. A layer that summarizes the average presence of a feature.
- [MLCUpsampleLayer](mlcupsamplelayer.md): Deprecated. A layer that applies upsampling with the shape you specify.
- [MLCEmbeddingLayer](mlcembeddinglayer.md): Deprecated. A layer that stores a word embedding.
