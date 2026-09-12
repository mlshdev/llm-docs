> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagesizeencodingstate](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagesizeencodingstate)

# MPSImageSizeEncodingState (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A protocol for objects that contain information about an image size elsewhere in the graph.

## Declaration

```swift
protocol MPSImageSizeEncodingState : NSObjectProtocol
```

## Topics

### Instance Properties

- [sourceHeight](mpsimagesizeencodingstate/sourceheight.md)
- [sourceWidth](mpsimagesizeencodingstate/sourcewidth.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [MPSCNNConvolutionGradientState](mpscnnconvolutiongradientstate.md)
- [MPSCNNConvolutionTransposeGradientState](mpscnnconvolutiontransposegradientstate.md)

## See Also

### Convolution Layers

- [MPSCNNBinaryConvolution](mpscnnbinaryconvolution.md): A convolution kernel with binary weights and an input image using binary approximations.
- [MPSCNNConvolution](mpscnnconvolution.md): A convolution kernel that convolves the input image with a set of filters, with each producing one feature map in the output image.
- [MPSCNNDepthWiseConvolutionDescriptor](mpscnndepthwiseconvolutiondescriptor.md): A description of a convolution object that does depthwise convolution.
- [MPSCNNSubPixelConvolutionDescriptor](mpscnnsubpixelconvolutiondescriptor.md): A description of a convolution object that does subpixel upsampling and reshaping.
- [MPSCNNConvolutionTranspose](mpscnnconvolutiontranspose.md): A transposed convolution kernel.
- [MPSCNNConvolutionGradient](mpscnnconvolutiongradient.md): A gradient convolution kernel.
- [MPSCNNConvolutionGradientState](mpscnnconvolutiongradientstate.md): An object that exposes a gradient convolution kernel’s gradient with respect to weights and biases.
- [MPSCNNConvolutionWeightsAndBiasesState](mpscnnconvolutionweightsandbiasesstate.md): A class that stores weights and biases.

# MPSImageSizeEncodingState (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A protocol for objects that contain information about an image size elsewhere in the graph.

## Declaration

```objectivec
@protocol MPSImageSizeEncodingState <NSObject>
```

## Topics

### Instance Properties

- [sourceHeight](mpsimagesizeencodingstate/sourceheight.md)
- [sourceWidth](mpsimagesizeencodingstate/sourcewidth.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [MPSCNNConvolutionGradientState](mpscnnconvolutiongradientstate.md)

## See Also

### Convolution Layers

- [MPSCNNBinaryConvolution](mpscnnbinaryconvolution.md): A convolution kernel with binary weights and an input image using binary approximations.
- [MPSCNNConvolution](mpscnnconvolution.md): A convolution kernel that convolves the input image with a set of filters, with each producing one feature map in the output image.
- [MPSCNNDepthWiseConvolutionDescriptor](mpscnndepthwiseconvolutiondescriptor.md): A description of a convolution object that does depthwise convolution.
- [MPSCNNSubPixelConvolutionDescriptor](mpscnnsubpixelconvolutiondescriptor.md): A description of a convolution object that does subpixel upsampling and reshaping.
- [MPSCNNConvolutionTranspose](mpscnnconvolutiontranspose.md): A transposed convolution kernel.
- [MPSCNNConvolutionGradient](mpscnnconvolutiongradient.md): A gradient convolution kernel.
- [MPSCNNConvolutionGradientState](mpscnnconvolutiongradientstate.md): An object that exposes a gradient convolution kernel’s gradient with respect to weights and biases.
- [MPSCNNConvolutionWeightsAndBiasesState](mpscnnconvolutionweightsandbiasesstate.md): A class that stores weights and biases.
