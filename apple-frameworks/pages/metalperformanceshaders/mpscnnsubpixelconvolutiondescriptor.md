> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnsubpixelconvolutiondescriptor](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnsubpixelconvolutiondescriptor)

# MPSCNNSubPixelConvolutionDescriptor (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A description of a convolution object that does subpixel upsampling and reshaping.

## Declaration

```swift
class MPSCNNSubPixelConvolutionDescriptor
```

## Topics

### Instance Properties

- [subPixelScaleFactor](mpscnnsubpixelconvolutiondescriptor/subpixelscalefactor.md)

## Relationships

### Inherits From

- [MPSCNNConvolutionDescriptor](mpscnnconvolutiondescriptor.md)

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
- [MPSCNNConvolutionTranspose](mpscnnconvolutiontranspose.md): A transposed convolution kernel.
- [MPSCNNConvolutionGradient](mpscnnconvolutiongradient.md): A gradient convolution kernel.
- [MPSCNNConvolutionGradientState](mpscnnconvolutiongradientstate.md): An object that exposes a gradient convolution kernel’s gradient with respect to weights and biases.
- [MPSImageSizeEncodingState](mpsimagesizeencodingstate.md): A protocol for objects that contain information about an image size elsewhere in the graph.
- [MPSCNNConvolutionWeightsAndBiasesState](mpscnnconvolutionweightsandbiasesstate.md): A class that stores weights and biases.

# MPSCNNSubPixelConvolutionDescriptor (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A description of a convolution object that does subpixel upsampling and reshaping.

## Declaration

```objectivec
@interface MPSCNNSubPixelConvolutionDescriptor : MPSCNNConvolutionDescriptor
```

## Topics

### Instance Properties

- [subPixelScaleFactor](mpscnnsubpixelconvolutiondescriptor/subpixelscalefactor.md)

## Relationships

### Inherits From

- [MPSCNNConvolutionDescriptor](mpscnnconvolutiondescriptor.md)

## See Also

### Convolution Layers

- [MPSCNNBinaryConvolution](mpscnnbinaryconvolution.md): A convolution kernel with binary weights and an input image using binary approximations.
- [MPSCNNConvolution](mpscnnconvolution.md): A convolution kernel that convolves the input image with a set of filters, with each producing one feature map in the output image.
- [MPSCNNDepthWiseConvolutionDescriptor](mpscnndepthwiseconvolutiondescriptor.md): A description of a convolution object that does depthwise convolution.
- [MPSCNNConvolutionTranspose](mpscnnconvolutiontranspose.md): A transposed convolution kernel.
- [MPSCNNConvolutionGradient](mpscnnconvolutiongradient.md): A gradient convolution kernel.
- [MPSCNNConvolutionGradientState](mpscnnconvolutiongradientstate.md): An object that exposes a gradient convolution kernel’s gradient with respect to weights and biases.
- [MPSImageSizeEncodingState](mpsimagesizeencodingstate.md): A protocol for objects that contain information about an image size elsewhere in the graph.
- [MPSCNNConvolutionWeightsAndBiasesState](mpscnnconvolutionweightsandbiasesstate.md): A class that stores weights and biases.
