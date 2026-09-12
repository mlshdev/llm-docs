> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolution](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolution)

# MPSCNNConvolution (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A convolution kernel that convolves the input image with a set of filters, with each producing one feature map in the output image.

## Declaration

```swift
class MPSCNNConvolution
```

<a id="overview"></a>

## Overview

The attributes of a convolution operation are described by an [MPSCNNConvolutionDescriptor](mpscnnconvolutiondescriptor.md) object.

## Topics

### Initializers

- [init(coder:device:)](mpscnnconvolution/init%28coder_device_%29.md)
- [init(device:convolutionDescriptor:kernelWeights:biasTerms:flags:)](mpscnnconvolution/init%28device_convolutiondescriptor_kernelweights_biasterms_flags_%29.md): Deprecated. Initializes a convolution kernel.
- [MPSCNNConvolutionDescriptor](mpscnnconvolutiondescriptor.md): A description of the attributes of a convolution kernel.
- [MPSCNNConvolutionFlags](mpscnnconvolutionflags.md): Options used to control how kernel weights are stored and used in the CNN kernels
- [init(device:weights:)](mpscnnconvolution/init%28device_weights_%29.md)
- [MPSCNNConvolutionDataSource](mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.

### Instance Properties

- [inputFeatureChannels](mpscnnconvolution/inputfeaturechannels.md): The number of feature channels per pixel in the input image.
- [outputFeatureChannels](mpscnnconvolution/outputfeaturechannels.md): The number of feature channels per pixel in the output image.
- [groups](mpscnnconvolution/groups.md): The number of groups that the input and output channels are divided into.
- [subPixelScaleFactor](mpscnnconvolution/subpixelscalefactor.md)
- [neuron](mpscnnconvolution/neuron.md): Deprecated. The neuron filter to be applied as part of the convolution operation.
- [MPSCNNNeuron](mpscnnneuron.md): A filter that applies a neuron activation function.
- [neuronType](mpscnnconvolution/neurontype.md): Deprecated.
- [MPSCNNNeuronType](mpscnnneurontype.md): The types of neuron filter to append to a convolution.
- [neuronParameterA](mpscnnconvolution/neuronparametera.md): Deprecated.
- [neuronParameterB](mpscnnconvolution/neuronparameterb.md): Deprecated.
- [accumulatorPrecisionOption](mpscnnconvolution/accumulatorprecisionoption.md)
- [channelMultiplier](mpscnnconvolution/channelmultiplier.md)
- [dataSource](mpscnnconvolution/datasource.md)
- [fusedNeuronDescriptor](mpscnnconvolution/fusedneurondescriptor.md)
- [neuronParameterC](mpscnnconvolution/neuronparameterc.md): Deprecated.

### Instance Methods

- [exportWeightsAndBiases(with:resultStateCanBeTemporary:)](mpscnnconvolution/exportweightsandbiases%28with_resultstatecanbetemporary_%29.md)
- [reloadWeightsAndBiases(with:)](mpscnnconvolution/reloadweightsandbiases%28with_%29.md): Deprecated.
- [reloadWeightsAndBiases(with:state:)](mpscnnconvolution/reloadweightsandbiases%28with_state_%29.md)
- [reloadWeightsAndBiasesFromDataSource()](mpscnnconvolution/reloadweightsandbiasesfromdatasource%28%29.md)
- [resultState(sourceImage:sourceStates:destinationImage:)](mpscnnconvolution/resultstate%28sourceimage_sourcestates_destinationimage_%29.md)
- [resultStateBatch(sourceImage:sourceStates:destinationImage:)](mpscnnconvolution/resultstatebatch%28sourceimage_sourcestates_destinationimage_%29.md)
- [temporaryResultState(commandBuffer:sourceImage:sourceStates:destinationImage:)](mpscnnconvolution/temporaryresultstate%28commandbuffer_sourceimage_sourcestates_destinationimage_%29.md)
- [temporaryResultStateBatch(commandBuffer:sourceImage:sourceStates:destinationImage:)](mpscnnconvolution/temporaryresultstatebatch%28commandbuffer_sourceimage_sourcestates_destinationimage_%29.md)

## Relationships

### Inherits From

- [MPSCNNKernel](mpscnnkernel.md)

### Inherited By

- [MPSCNNFullyConnected](mpscnnfullyconnected.md)

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
- [MPSCNNDepthWiseConvolutionDescriptor](mpscnndepthwiseconvolutiondescriptor.md): A description of a convolution object that does depthwise convolution.
- [MPSCNNSubPixelConvolutionDescriptor](mpscnnsubpixelconvolutiondescriptor.md): A description of a convolution object that does subpixel upsampling and reshaping.
- [MPSCNNConvolutionTranspose](mpscnnconvolutiontranspose.md): A transposed convolution kernel.
- [MPSCNNConvolutionGradient](mpscnnconvolutiongradient.md): A gradient convolution kernel.
- [MPSCNNConvolutionGradientState](mpscnnconvolutiongradientstate.md): An object that exposes a gradient convolution kernel’s gradient with respect to weights and biases.
- [MPSImageSizeEncodingState](mpsimagesizeencodingstate.md): A protocol for objects that contain information about an image size elsewhere in the graph.
- [MPSCNNConvolutionWeightsAndBiasesState](mpscnnconvolutionweightsandbiasesstate.md): A class that stores weights and biases.

# MPSCNNConvolution (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A convolution kernel that convolves the input image with a set of filters, with each producing one feature map in the output image.

## Declaration

```objectivec
@interface MPSCNNConvolution : MPSCNNKernel
```

<a id="overview"></a>

## Overview

The attributes of a convolution operation are described by an [MPSCNNConvolutionDescriptor](mpscnnconvolutiondescriptor.md) object.

## Topics

### Initializers

- [initWithCoder:device:](mpscnnconvolution/init%28coder_device_%29.md)
- [initWithDevice:convolutionDescriptor:kernelWeights:biasTerms:flags:](mpscnnconvolution/init%28device_convolutiondescriptor_kernelweights_biasterms_flags_%29.md): Deprecated. Initializes a convolution kernel.
- [MPSCNNConvolutionDescriptor](mpscnnconvolutiondescriptor.md): A description of the attributes of a convolution kernel.
- [MPSCNNConvolutionFlags](mpscnnconvolutionflags.md): Options used to control how kernel weights are stored and used in the CNN kernels
- [initWithDevice:weights:](mpscnnconvolution/init%28device_weights_%29.md)
- [MPSCNNConvolutionDataSource](mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.

### Instance Properties

- [inputFeatureChannels](mpscnnconvolution/inputfeaturechannels.md): The number of feature channels per pixel in the input image.
- [outputFeatureChannels](mpscnnconvolution/outputfeaturechannels.md): The number of feature channels per pixel in the output image.
- [groups](mpscnnconvolution/groups.md): The number of groups that the input and output channels are divided into.
- [subPixelScaleFactor](mpscnnconvolution/subpixelscalefactor.md)
- [neuron](mpscnnconvolution/neuron.md): Deprecated. The neuron filter to be applied as part of the convolution operation.
- [MPSCNNNeuron](mpscnnneuron.md): A filter that applies a neuron activation function.
- [neuronType](mpscnnconvolution/neurontype.md): Deprecated.
- [MPSCNNNeuronType](mpscnnneurontype.md): The types of neuron filter to append to a convolution.
- [neuronParameterA](mpscnnconvolution/neuronparametera.md): Deprecated.
- [neuronParameterB](mpscnnconvolution/neuronparameterb.md): Deprecated.
- [accumulatorPrecisionOption](mpscnnconvolution/accumulatorprecisionoption.md)
- [channelMultiplier](mpscnnconvolution/channelmultiplier.md)
- [dataSource](mpscnnconvolution/datasource.md)
- [fusedNeuronDescriptor](mpscnnconvolution/fusedneurondescriptor.md)
- [neuronParameterC](mpscnnconvolution/neuronparameterc.md): Deprecated.

### Instance Methods

- [exportWeightsAndBiasesWithCommandBuffer:resultStateCanBeTemporary:](mpscnnconvolution/exportweightsandbiases%28with_resultstatecanbetemporary_%29.md)
- [reloadWeightsAndBiasesWithDataSource:](mpscnnconvolution/reloadweightsandbiases%28with_%29.md): Deprecated.
- [reloadWeightsAndBiasesWithCommandBuffer:state:](mpscnnconvolution/reloadweightsandbiases%28with_state_%29.md)
- [reloadWeightsAndBiasesFromDataSource](mpscnnconvolution/reloadweightsandbiasesfromdatasource%28%29.md)
- [resultStateForSourceImage:sourceStates:destinationImage:](mpscnnconvolution/resultstate%28sourceimage_sourcestates_destinationimage_%29.md)
- [resultStateBatchForSourceImage:sourceStates:destinationImage:](mpscnnconvolution/resultstatebatch%28sourceimage_sourcestates_destinationimage_%29.md)
- [temporaryResultStateForCommandBuffer:sourceImage:sourceStates:destinationImage:](mpscnnconvolution/temporaryresultstate%28commandbuffer_sourceimage_sourcestates_destinationimage_%29.md)
- [temporaryResultStateBatchForCommandBuffer:sourceImage:sourceStates:destinationImage:](mpscnnconvolution/temporaryresultstatebatch%28commandbuffer_sourceimage_sourcestates_destinationimage_%29.md)

## Relationships

### Inherits From

- [MPSCNNKernel](mpscnnkernel.md)

### Inherited By

- [MPSCNNFullyConnected](mpscnnfullyconnected.md)

## See Also

### Convolution Layers

- [MPSCNNBinaryConvolution](mpscnnbinaryconvolution.md): A convolution kernel with binary weights and an input image using binary approximations.
- [MPSCNNDepthWiseConvolutionDescriptor](mpscnndepthwiseconvolutiondescriptor.md): A description of a convolution object that does depthwise convolution.
- [MPSCNNSubPixelConvolutionDescriptor](mpscnnsubpixelconvolutiondescriptor.md): A description of a convolution object that does subpixel upsampling and reshaping.
- [MPSCNNConvolutionTranspose](mpscnnconvolutiontranspose.md): A transposed convolution kernel.
- [MPSCNNConvolutionGradient](mpscnnconvolutiongradient.md): A gradient convolution kernel.
- [MPSCNNConvolutionGradientState](mpscnnconvolutiongradientstate.md): An object that exposes a gradient convolution kernel’s gradient with respect to weights and biases.
- [MPSImageSizeEncodingState](mpsimagesizeencodingstate.md): A protocol for objects that contain information about an image size elsewhere in the graph.
- [MPSCNNConvolutionWeightsAndBiasesState](mpscnnconvolutionweightsandbiasesstate.md): A class that stores weights and biases.
