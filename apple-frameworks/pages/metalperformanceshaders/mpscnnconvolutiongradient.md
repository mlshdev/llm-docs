> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiongradient](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiongradient)

# MPSCNNConvolutionGradient (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A gradient convolution kernel.

## Declaration

```swift
class MPSCNNConvolutionGradient
```

## Topics

### Initializers

- [init(coder:device:)](mpscnnconvolutiongradient/init%28coder_device_%29.md)
- [init(device:weights:)](mpscnnconvolutiongradient/init%28device_weights_%29.md)

### Instance Properties

- [channelMultiplier](mpscnnconvolutiongradient/channelmultiplier.md)
- [dataSource](mpscnnconvolutiongradient/datasource.md)
- [gradientOption](mpscnnconvolutiongradient/gradientoption.md)
- [groups](mpscnnconvolutiongradient/groups.md)
- [serializeWeightsAndBiases](mpscnnconvolutiongradient/serializeweightsandbiases.md): Deprecated.
- [sourceGradientFeatureChannels](mpscnnconvolutiongradient/sourcegradientfeaturechannels.md)
- [sourceImageFeatureChannels](mpscnnconvolutiongradient/sourceimagefeaturechannels.md)

### Instance Methods

- [reloadWeightsAndBiases(with:state:)](mpscnnconvolutiongradient/reloadweightsandbiases%28with_state_%29.md)
- [reloadWeightsAndBiasesFromDataSource()](mpscnnconvolutiongradient/reloadweightsandbiasesfromdatasource%28%29.md)

## Relationships

### Inherits From

- [MPSCNNGradientKernel](mpscnngradientkernel.md)

### Inherited By

- [MPSCNNFullyConnectedGradient](mpscnnfullyconnectedgradient.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Convolution Layers

- [MPSCNNBinaryConvolution](mpscnnbinaryconvolution.md): A convolution kernel with binary weights and an input image using binary approximations.
- [MPSCNNConvolution](mpscnnconvolution.md): A convolution kernel that convolves the input image with a set of filters, with each producing one feature map in the output image.
- [MPSCNNDepthWiseConvolutionDescriptor](mpscnndepthwiseconvolutiondescriptor.md): A description of a convolution object that does depthwise convolution.
- [MPSCNNSubPixelConvolutionDescriptor](mpscnnsubpixelconvolutiondescriptor.md): A description of a convolution object that does subpixel upsampling and reshaping.
- [MPSCNNConvolutionTranspose](mpscnnconvolutiontranspose.md): A transposed convolution kernel.
- [MPSCNNConvolutionGradientState](mpscnnconvolutiongradientstate.md): An object that exposes a gradient convolution kernel’s gradient with respect to weights and biases.
- [MPSImageSizeEncodingState](mpsimagesizeencodingstate.md): A protocol for objects that contain information about an image size elsewhere in the graph.
- [MPSCNNConvolutionWeightsAndBiasesState](mpscnnconvolutionweightsandbiasesstate.md): A class that stores weights and biases.

# MPSCNNConvolutionGradient (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A gradient convolution kernel.

## Declaration

```objectivec
@interface MPSCNNConvolutionGradient : MPSCNNGradientKernel
```

## Topics

### Instance Properties

- [channelMultiplier](mpscnnconvolutiongradient/channelmultiplier.md)
- [dataSource](mpscnnconvolutiongradient/datasource.md)
- [gradientOption](mpscnnconvolutiongradient/gradientoption.md)
- [groups](mpscnnconvolutiongradient/groups.md)
- [serializeWeightsAndBiases](mpscnnconvolutiongradient/serializeweightsandbiases.md): Deprecated.
- [sourceGradientFeatureChannels](mpscnnconvolutiongradient/sourcegradientfeaturechannels.md)
- [sourceImageFeatureChannels](mpscnnconvolutiongradient/sourceimagefeaturechannels.md)

### Instance Methods

- [initWithCoder:device:](mpscnnconvolutiongradient/init%28coder_device_%29.md)
- [initWithDevice:weights:](mpscnnconvolutiongradient/init%28device_weights_%29.md)
- [reloadWeightsAndBiasesWithCommandBuffer:state:](mpscnnconvolutiongradient/reloadweightsandbiases%28with_state_%29.md)
- [reloadWeightsAndBiasesFromDataSource](mpscnnconvolutiongradient/reloadweightsandbiasesfromdatasource%28%29.md)

## Relationships

### Inherits From

- [MPSCNNGradientKernel](mpscnngradientkernel.md)

### Inherited By

- [MPSCNNFullyConnectedGradient](mpscnnfullyconnectedgradient.md)

## See Also

### Convolution Layers

- [MPSCNNBinaryConvolution](mpscnnbinaryconvolution.md): A convolution kernel with binary weights and an input image using binary approximations.
- [MPSCNNConvolution](mpscnnconvolution.md): A convolution kernel that convolves the input image with a set of filters, with each producing one feature map in the output image.
- [MPSCNNDepthWiseConvolutionDescriptor](mpscnndepthwiseconvolutiondescriptor.md): A description of a convolution object that does depthwise convolution.
- [MPSCNNSubPixelConvolutionDescriptor](mpscnnsubpixelconvolutiondescriptor.md): A description of a convolution object that does subpixel upsampling and reshaping.
- [MPSCNNConvolutionTranspose](mpscnnconvolutiontranspose.md): A transposed convolution kernel.
- [MPSCNNConvolutionGradientState](mpscnnconvolutiongradientstate.md): An object that exposes a gradient convolution kernel’s gradient with respect to weights and biases.
- [MPSImageSizeEncodingState](mpsimagesizeencodingstate.md): A protocol for objects that contain information about an image size elsewhere in the graph.
- [MPSCNNConvolutionWeightsAndBiasesState](mpscnnconvolutionweightsandbiasesstate.md): A class that stores weights and biases.
