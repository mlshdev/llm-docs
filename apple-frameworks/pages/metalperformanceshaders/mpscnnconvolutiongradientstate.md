> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiongradientstate](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiongradientstate)

# MPSCNNConvolutionGradientState (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

An object that exposes a gradient convolution kernel’s gradient with respect to weights and biases.

## Declaration

```swift
class MPSCNNConvolutionGradientState
```

## Topics

### Instance Properties

- [convolution](mpscnnconvolutiongradientstate/convolution.md)
- [gradientForBiases](mpscnnconvolutiongradientstate/gradientforbiases.md)
- [gradientForWeights](mpscnnconvolutiongradientstate/gradientforweights.md)
- [gradientForWeightsLayout](mpscnnconvolutiongradientstate/gradientforweightslayout.md)

## Relationships

### Inherits From

- [MPSNNGradientState](mpsnngradientstate.md)

### Inherited By

- [MPSCNNConvolutionTransposeGradientState](mpscnnconvolutiontransposegradientstate.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MPSImageSizeEncodingState](mpsimagesizeencodingstate.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Convolution Layers

- [MPSCNNBinaryConvolution](mpscnnbinaryconvolution.md): A convolution kernel with binary weights and an input image using binary approximations.
- [MPSCNNConvolution](mpscnnconvolution.md): A convolution kernel that convolves the input image with a set of filters, with each producing one feature map in the output image.
- [MPSCNNDepthWiseConvolutionDescriptor](mpscnndepthwiseconvolutiondescriptor.md): A description of a convolution object that does depthwise convolution.
- [MPSCNNSubPixelConvolutionDescriptor](mpscnnsubpixelconvolutiondescriptor.md): A description of a convolution object that does subpixel upsampling and reshaping.
- [MPSCNNConvolutionTranspose](mpscnnconvolutiontranspose.md): A transposed convolution kernel.
- [MPSCNNConvolutionGradient](mpscnnconvolutiongradient.md): A gradient convolution kernel.
- [MPSImageSizeEncodingState](mpsimagesizeencodingstate.md): A protocol for objects that contain information about an image size elsewhere in the graph.
- [MPSCNNConvolutionWeightsAndBiasesState](mpscnnconvolutionweightsandbiasesstate.md): A class that stores weights and biases.

# MPSCNNConvolutionGradientState (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

An object that exposes a gradient convolution kernel’s gradient with respect to weights and biases.

## Declaration

```objectivec
@interface MPSCNNConvolutionGradientState : MPSNNGradientState
```

## Topics

### Instance Properties

- [convolution](mpscnnconvolutiongradientstate/convolution.md)
- [gradientForBiases](mpscnnconvolutiongradientstate/gradientforbiases.md)
- [gradientForWeights](mpscnnconvolutiongradientstate/gradientforweights.md)
- [gradientForWeightsLayout](mpscnnconvolutiongradientstate/gradientforweightslayout.md)

## Relationships

### Inherits From

- [MPSNNGradientState](mpsnngradientstate.md)

### Inherited By

- [MPSCNNConvolutionTransposeGradientState](mpscnnconvolutiontransposegradientstate.md)

### Conforms To

- [MPSImageSizeEncodingState](mpsimagesizeencodingstate.md)

## See Also

### Convolution Layers

- [MPSCNNBinaryConvolution](mpscnnbinaryconvolution.md): A convolution kernel with binary weights and an input image using binary approximations.
- [MPSCNNConvolution](mpscnnconvolution.md): A convolution kernel that convolves the input image with a set of filters, with each producing one feature map in the output image.
- [MPSCNNDepthWiseConvolutionDescriptor](mpscnndepthwiseconvolutiondescriptor.md): A description of a convolution object that does depthwise convolution.
- [MPSCNNSubPixelConvolutionDescriptor](mpscnnsubpixelconvolutiondescriptor.md): A description of a convolution object that does subpixel upsampling and reshaping.
- [MPSCNNConvolutionTranspose](mpscnnconvolutiontranspose.md): A transposed convolution kernel.
- [MPSCNNConvolutionGradient](mpscnnconvolutiongradient.md): A gradient convolution kernel.
- [MPSImageSizeEncodingState](mpsimagesizeencodingstate.md): A protocol for objects that contain information about an image size elsewhere in the graph.
- [MPSCNNConvolutionWeightsAndBiasesState](mpscnnconvolutionweightsandbiasesstate.md): A class that stores weights and biases.
