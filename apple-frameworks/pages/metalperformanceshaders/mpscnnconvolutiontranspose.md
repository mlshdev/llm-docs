> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiontranspose](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiontranspose)

# MPSCNNConvolutionTranspose (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A transposed convolution kernel.

## Declaration

```swift
class MPSCNNConvolutionTranspose
```

## Topics

### Initializers

- [init(coder:device:)](mpscnnconvolutiontranspose/init%28coder_device_%29.md): Initializes a transposed convolution kernel.
- [init(device:weights:)](mpscnnconvolutiontranspose/init%28device_weights_%29.md): Initializes a transposed convolution kernel.
- [MPSCNNConvolutionDataSource](mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.

### Instance Properties

- [groups](mpscnnconvolutiontranspose/groups.md)
- [inputFeatureChannels](mpscnnconvolutiontranspose/inputfeaturechannels.md)
- [kernelOffsetX](mpscnnconvolutiontranspose/kerneloffsetx.md)
- [kernelOffsetY](mpscnnconvolutiontranspose/kerneloffsety.md)
- [outputFeatureChannels](mpscnnconvolutiontranspose/outputfeaturechannels.md)
- [accumulatorPrecisionOption](mpscnnconvolutiontranspose/accumulatorprecisionoption.md)
- [dataSource](mpscnnconvolutiontranspose/datasource.md)

### Instance Methods

- [encode(commandBuffer:sourceImage:convolutionGradientState:)](mpscnnconvolutiontranspose/encode%28commandbuffer_sourceimage_convolutiongradientstate_%29.md)
- [encode(commandBuffer:sourceImage:convolutionGradientState:destinationImage:)](mpscnnconvolutiontranspose/encode%28commandbuffer_sourceimage_convolutiongradientstate_destinationimage_%29.md)
- [encode(commandBuffer:sourceImage:convolutionGradientState:destinationState:destinationStateIsTemporary:)](mpscnnconvolutiontranspose/encode%28commandbuffer_sourceimage_convolutiongradientstate_destinationstate_destinationstateistemporary_%29.md)
- [encodeBatch(commandBuffer:sourceImages:convolutionGradientStates:)](mpscnnconvolutiontranspose/encodebatch%28commandbuffer_sourceimages_convolutiongradientstates_%29.md)
- [encodeBatch(commandBuffer:sourceImages:convolutionGradientStates:destinationImages:)](mpscnnconvolutiontranspose/encodebatch%28commandbuffer_sourceimages_convolutiongradientstates_destinationimages_%29.md)
- [encodeBatch(commandBuffer:sourceImages:convolutionGradientStates:destinationStates:destinationStateIsTemporary:)](mpscnnconvolutiontranspose/encodebatch%28commandbuffer_sourceimages_convolutiongradientstates_destinationstates_destinationstateistemporary_%29.md)
- [exportWeightsAndBiases(with:resultStateCanBeTemporary:)](mpscnnconvolutiontranspose/exportweightsandbiases%28with_resultstatecanbetemporary_%29.md)
- [reloadWeightsAndBiases(with:state:)](mpscnnconvolutiontranspose/reloadweightsandbiases%28with_state_%29.md)
- [reloadWeightsAndBiasesFromDataSource()](mpscnnconvolutiontranspose/reloadweightsandbiasesfromdatasource%28%29.md)
- [resultState(sourceImage:sourceStates:destinationImage:)](mpscnnconvolutiontranspose/resultstate%28sourceimage_sourcestates_destinationimage_%29.md)
- [resultStateBatch(sourceImage:sourceStates:destinationImage:)](mpscnnconvolutiontranspose/resultstatebatch%28sourceimage_sourcestates_destinationimage_%29.md)
- [temporaryResultState(commandBuffer:sourceImage:sourceStates:destinationImage:)](mpscnnconvolutiontranspose/temporaryresultstate%28commandbuffer_sourceimage_sourcestates_destinationimage_%29.md)
- [temporaryResultStateBatch(commandBuffer:sourceImage:sourceStates:destinationImage:)](mpscnnconvolutiontranspose/temporaryresultstatebatch%28commandbuffer_sourceimage_sourcestates_destinationimage_%29.md)

## Relationships

### Inherits From

- [MPSCNNKernel](mpscnnkernel.md)

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
- [MPSCNNConvolutionGradient](mpscnnconvolutiongradient.md): A gradient convolution kernel.
- [MPSCNNConvolutionGradientState](mpscnnconvolutiongradientstate.md): An object that exposes a gradient convolution kernel’s gradient with respect to weights and biases.
- [MPSImageSizeEncodingState](mpsimagesizeencodingstate.md): A protocol for objects that contain information about an image size elsewhere in the graph.
- [MPSCNNConvolutionWeightsAndBiasesState](mpscnnconvolutionweightsandbiasesstate.md): A class that stores weights and biases.

# MPSCNNConvolutionTranspose (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A transposed convolution kernel.

## Declaration

```objectivec
@interface MPSCNNConvolutionTranspose : MPSCNNKernel
```

## Topics

### Initializers

- [initWithCoder:device:](mpscnnconvolutiontranspose/init%28coder_device_%29.md): Initializes a transposed convolution kernel.
- [initWithDevice:weights:](mpscnnconvolutiontranspose/init%28device_weights_%29.md): Initializes a transposed convolution kernel.
- [MPSCNNConvolutionDataSource](mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.

### Instance Properties

- [groups](mpscnnconvolutiontranspose/groups.md)
- [inputFeatureChannels](mpscnnconvolutiontranspose/inputfeaturechannels.md)
- [kernelOffsetX](mpscnnconvolutiontranspose/kerneloffsetx.md)
- [kernelOffsetY](mpscnnconvolutiontranspose/kerneloffsety.md)
- [outputFeatureChannels](mpscnnconvolutiontranspose/outputfeaturechannels.md)
- [accumulatorPrecisionOption](mpscnnconvolutiontranspose/accumulatorprecisionoption.md)
- [dataSource](mpscnnconvolutiontranspose/datasource.md)

### Instance Methods

- [encodeToCommandBuffer:sourceImage:convolutionGradientState:](mpscnnconvolutiontranspose/encode%28commandbuffer_sourceimage_convolutiongradientstate_%29.md)
- [encodeToCommandBuffer:sourceImage:convolutionGradientState:destinationImage:](mpscnnconvolutiontranspose/encode%28commandbuffer_sourceimage_convolutiongradientstate_destinationimage_%29.md)
- [encodeToCommandBuffer:sourceImage:convolutionGradientState:destinationState:destinationStateIsTemporary:](mpscnnconvolutiontranspose/encode%28commandbuffer_sourceimage_convolutiongradientstate_destinationstate_destinationstateistemporary_%29.md)
- [encodeBatchToCommandBuffer:sourceImages:convolutionGradientStates:](mpscnnconvolutiontranspose/encodebatch%28commandbuffer_sourceimages_convolutiongradientstates_%29.md)
- [encodeBatchToCommandBuffer:sourceImages:convolutionGradientStates:destinationImages:](mpscnnconvolutiontranspose/encodebatch%28commandbuffer_sourceimages_convolutiongradientstates_destinationimages_%29.md)
- [encodeBatchToCommandBuffer:sourceImages:convolutionGradientStates:destinationStates:destinationStateIsTemporary:](mpscnnconvolutiontranspose/encodebatch%28commandbuffer_sourceimages_convolutiongradientstates_destinationstates_destinationstateistemporary_%29.md)
- [exportWeightsAndBiasesWithCommandBuffer:resultStateCanBeTemporary:](mpscnnconvolutiontranspose/exportweightsandbiases%28with_resultstatecanbetemporary_%29.md)
- [reloadWeightsAndBiasesWithCommandBuffer:state:](mpscnnconvolutiontranspose/reloadweightsandbiases%28with_state_%29.md)
- [reloadWeightsAndBiasesFromDataSource](mpscnnconvolutiontranspose/reloadweightsandbiasesfromdatasource%28%29.md)
- [resultStateForSourceImage:sourceStates:destinationImage:](mpscnnconvolutiontranspose/resultstate%28sourceimage_sourcestates_destinationimage_%29.md)
- [resultStateBatchForSourceImage:sourceStates:destinationImage:](mpscnnconvolutiontranspose/resultstatebatch%28sourceimage_sourcestates_destinationimage_%29.md)
- [temporaryResultStateForCommandBuffer:sourceImage:sourceStates:destinationImage:](mpscnnconvolutiontranspose/temporaryresultstate%28commandbuffer_sourceimage_sourcestates_destinationimage_%29.md)
- [temporaryResultStateBatchForCommandBuffer:sourceImage:sourceStates:destinationImage:](mpscnnconvolutiontranspose/temporaryresultstatebatch%28commandbuffer_sourceimage_sourcestates_destinationimage_%29.md)

## Relationships

### Inherits From

- [MPSCNNKernel](mpscnnkernel.md)

## See Also

### Convolution Layers

- [MPSCNNBinaryConvolution](mpscnnbinaryconvolution.md): A convolution kernel with binary weights and an input image using binary approximations.
- [MPSCNNConvolution](mpscnnconvolution.md): A convolution kernel that convolves the input image with a set of filters, with each producing one feature map in the output image.
- [MPSCNNDepthWiseConvolutionDescriptor](mpscnndepthwiseconvolutiondescriptor.md): A description of a convolution object that does depthwise convolution.
- [MPSCNNSubPixelConvolutionDescriptor](mpscnnsubpixelconvolutiondescriptor.md): A description of a convolution object that does subpixel upsampling and reshaping.
- [MPSCNNConvolutionGradient](mpscnnconvolutiongradient.md): A gradient convolution kernel.
- [MPSCNNConvolutionGradientState](mpscnnconvolutiongradientstate.md): An object that exposes a gradient convolution kernel’s gradient with respect to weights and biases.
- [MPSImageSizeEncodingState](mpsimagesizeencodingstate.md): A protocol for objects that contain information about an image size elsewhere in the graph.
- [MPSCNNConvolutionWeightsAndBiasesState](mpscnnconvolutionweightsandbiasesstate.md): A class that stores weights and biases.
