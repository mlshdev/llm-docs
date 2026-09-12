> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutionweightsandbiasesstate](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutionweightsandbiasesstate)

# MPSCNNConvolutionWeightsAndBiasesState (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A class that stores weights and biases.

## Declaration

```swift
class MPSCNNConvolutionWeightsAndBiasesState
```

## Topics

### Initializers

- [init(device:cnnConvolutionDescriptor:)](mpscnnconvolutionweightsandbiasesstate/init%28device_cnnconvolutiondescriptor_%29.md)
- [init(weights:biases:)](mpscnnconvolutionweightsandbiasesstate/init%28weights_biases_%29.md)
- [init(weights:weightsOffset:biases:biasesOffset:cnnConvolutionDescriptor:)](mpscnnconvolutionweightsandbiasesstate/init%28weights_weightsoffset_biases_biasesoffset_cnnconvolutiondescriptor_%29.md)

### Instance Properties

- [biases](mpscnnconvolutionweightsandbiasesstate/biases.md)
- [biasesOffset](mpscnnconvolutionweightsandbiasesstate/biasesoffset.md)
- [weights](mpscnnconvolutionweightsandbiasesstate/weights.md)
- [weightsOffset](mpscnnconvolutionweightsandbiasesstate/weightsoffset.md)

### Type Methods

- [temporaryCNNConvolutionWeightsAndBiasesState(with:cnnConvolutionDescriptor:)](mpscnnconvolutionweightsandbiasesstate/temporarycnnconvolutionweightsandbiasesstate%28with_cnnconvolutiondescriptor_%29.md)

## Relationships

### Inherits From

- [MPSState](mpsstate.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Convolution Layers

- [MPSCNNBinaryConvolution](mpscnnbinaryconvolution.md): A convolution kernel with binary weights and an input image using binary approximations.
- [MPSCNNConvolution](mpscnnconvolution.md): A convolution kernel that convolves the input image with a set of filters, with each producing one feature map in the output image.
- [MPSCNNDepthWiseConvolutionDescriptor](mpscnndepthwiseconvolutiondescriptor.md): A description of a convolution object that does depthwise convolution.
- [MPSCNNSubPixelConvolutionDescriptor](mpscnnsubpixelconvolutiondescriptor.md): A description of a convolution object that does subpixel upsampling and reshaping.
- [MPSCNNConvolutionTranspose](mpscnnconvolutiontranspose.md): A transposed convolution kernel.
- [MPSCNNConvolutionGradient](mpscnnconvolutiongradient.md): A gradient convolution kernel.
- [MPSCNNConvolutionGradientState](mpscnnconvolutiongradientstate.md): An object that exposes a gradient convolution kernel’s gradient with respect to weights and biases.
- [MPSImageSizeEncodingState](mpsimagesizeencodingstate.md): A protocol for objects that contain information about an image size elsewhere in the graph.

# MPSCNNConvolutionWeightsAndBiasesState (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A class that stores weights and biases.

## Declaration

```objectivec
@interface MPSCNNConvolutionWeightsAndBiasesState : MPSState
```

## Topics

### Instance Properties

- [biases](mpscnnconvolutionweightsandbiasesstate/biases.md)
- [biasesOffset](mpscnnconvolutionweightsandbiasesstate/biasesoffset.md)
- [weights](mpscnnconvolutionweightsandbiasesstate/weights.md)
- [weightsOffset](mpscnnconvolutionweightsandbiasesstate/weightsoffset.md)

### Instance Methods

- [initWithDevice:cnnConvolutionDescriptor:](mpscnnconvolutionweightsandbiasesstate/init%28device_cnnconvolutiondescriptor_%29.md)
- [initWithWeights:biases:](mpscnnconvolutionweightsandbiasesstate/init%28weights_biases_%29.md)
- [initWithWeights:weightsOffset:biases:biasesOffset:cnnConvolutionDescriptor:](mpscnnconvolutionweightsandbiasesstate/init%28weights_weightsoffset_biases_biasesoffset_cnnconvolutiondescriptor_%29.md)

### Type Methods

- [temporaryCNNConvolutionWeightsAndBiasesStateWithCommandBuffer:cnnConvolutionDescriptor:](mpscnnconvolutionweightsandbiasesstate/temporarycnnconvolutionweightsandbiasesstate%28with_cnnconvolutiondescriptor_%29.md)

## Relationships

### Inherits From

- [MPSState](mpsstate.md)

## See Also

### Convolution Layers

- [MPSCNNBinaryConvolution](mpscnnbinaryconvolution.md): A convolution kernel with binary weights and an input image using binary approximations.
- [MPSCNNConvolution](mpscnnconvolution.md): A convolution kernel that convolves the input image with a set of filters, with each producing one feature map in the output image.
- [MPSCNNDepthWiseConvolutionDescriptor](mpscnndepthwiseconvolutiondescriptor.md): A description of a convolution object that does depthwise convolution.
- [MPSCNNSubPixelConvolutionDescriptor](mpscnnsubpixelconvolutiondescriptor.md): A description of a convolution object that does subpixel upsampling and reshaping.
- [MPSCNNConvolutionTranspose](mpscnnconvolutiontranspose.md): A transposed convolution kernel.
- [MPSCNNConvolutionGradient](mpscnnconvolutiongradient.md): A gradient convolution kernel.
- [MPSCNNConvolutionGradientState](mpscnnconvolutiongradientstate.md): An object that exposes a gradient convolution kernel’s gradient with respect to weights and biases.
- [MPSImageSizeEncodingState](mpsimagesizeencodingstate.md): A protocol for objects that contain information about an image size elsewhere in the graph.
