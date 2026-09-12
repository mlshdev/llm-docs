> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiondescriptor](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiondescriptor)

# MPSCNNConvolutionDescriptor (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A description of the attributes of a convolution kernel.

## Declaration

```swift
class MPSCNNConvolutionDescriptor
```

<a id="overview"></a>

## Overview

You use an [MPSCNNConvolutionDescriptor](mpscnnconvolutiondescriptor.md) object to describe the properties of an [MPSCNNConvolution](mpscnnconvolution.md) kernel such as its size, pixel format and CPU cache mode.

## Topics

### Type Methods

- [init(coder:)](mpscnnconvolutiondescriptor/init%28coder_%29.md)
- [init(kernelWidth:kernelHeight:inputFeatureChannels:outputFeatureChannels:)](mpscnnconvolutiondescriptor/init%28kernelwidth_kernelheight_inputfeaturechannels_outputfeaturechannels_%29.md)
- [init(kernelWidth:kernelHeight:inputFeatureChannels:outputFeatureChannels:neuronFilter:)](mpscnnconvolutiondescriptor/init%28kernelwidth_kernelheight_inputfeaturechannels_outputfeaturechannels_neuronfilter_%29.md): Deprecated. Creates a convolution descriptor with an optional neuron filter.

### Instance Properties

- [groups](mpscnnconvolutiondescriptor/groups.md): The number of groups that the input and output channels are divided into.
- [inputFeatureChannels](mpscnnconvolutiondescriptor/inputfeaturechannels.md): The number of feature channels per pixel in the input image.
- [kernelHeight](mpscnnconvolutiondescriptor/kernelheight.md): The height of the kernel window.
- [kernelWidth](mpscnnconvolutiondescriptor/kernelwidth.md): The width of the kernel window.
- [outputFeatureChannels](mpscnnconvolutiondescriptor/outputfeaturechannels.md): The number of feature channels per pixel in the output image.
- [strideInPixelsX](mpscnnconvolutiondescriptor/strideinpixelsx.md): The output stride (downsampling factor) in the x dimension.
- [strideInPixelsY](mpscnnconvolutiondescriptor/strideinpixelsy.md): The output stride (downsampling factor) in the y dimension.
- [neuron](mpscnnconvolutiondescriptor/neuron.md): Deprecated. The neuron filter to be applied as part of the convolution operation.
- [dilationRateX](mpscnnconvolutiondescriptor/dilationratex.md)
- [dilationRateY](mpscnnconvolutiondescriptor/dilationratey.md)
- [neuronParameterA()](mpscnnconvolutiondescriptor/neuronparametera%28%29.md): Deprecated.
- [neuronParameterB()](mpscnnconvolutiondescriptor/neuronparameterb%28%29.md): Deprecated.
- [neuronType()](mpscnnconvolutiondescriptor/neurontype%28%29.md): Deprecated.
- [fusedNeuronDescriptor](mpscnnconvolutiondescriptor/fusedneurondescriptor.md)

### Instance Methods

- [encode(with:)](mpscnnconvolutiondescriptor/encode%28with_%29.md)
- [setBatchNormalizationParametersForInferenceWithMean(\_:variance:gamma:beta:epsilon:)](mpscnnconvolutiondescriptor/setbatchnormalizationparametersforinferencewithmean%28__variance_gamma_beta_epsilon_%29.md)
- [setNeuronToPReLUWithParametersA(\_:)](mpscnnconvolutiondescriptor/setneurontopreluwithparametersa%28__%29.md): Deprecated.
- [setNeuronType(\_:parameterA:parameterB:)](mpscnnconvolutiondescriptor/setneurontype%28__parametera_parameterb_%29.md): Deprecated.

### Type Properties

- [supportsSecureCoding](mpscnnconvolutiondescriptor/supportssecurecoding.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPSCNNDepthWiseConvolutionDescriptor](mpscnndepthwiseconvolutiondescriptor.md)
- [MPSCNNSubPixelConvolutionDescriptor](mpscnnsubpixelconvolutiondescriptor.md)

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

### Initializers

- [init(coder:device:)](mpscnnconvolution/init%28coder_device_%29.md)
- [init(device:convolutionDescriptor:kernelWeights:biasTerms:flags:)](mpscnnconvolution/init%28device_convolutiondescriptor_kernelweights_biasterms_flags_%29.md): Deprecated. Initializes a convolution kernel.
- [MPSCNNConvolutionFlags](mpscnnconvolutionflags.md): Options used to control how kernel weights are stored and used in the CNN kernels
- [init(device:weights:)](mpscnnconvolution/init%28device_weights_%29.md)
- [MPSCNNConvolutionDataSource](mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.

# MPSCNNConvolutionDescriptor (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A description of the attributes of a convolution kernel.

## Declaration

```objectivec
@interface MPSCNNConvolutionDescriptor : NSObject
```

<a id="overview"></a>

## Overview

You use an [MPSCNNConvolutionDescriptor](mpscnnconvolutiondescriptor.md) object to describe the properties of an [MPSCNNConvolution](mpscnnconvolution.md) kernel such as its size, pixel format and CPU cache mode.

## Topics

### Type Methods

- [initWithCoder:](mpscnnconvolutiondescriptor/init%28coder_%29.md)
- [cnnConvolutionDescriptorWithKernelWidth:kernelHeight:inputFeatureChannels:outputFeatureChannels:](mpscnnconvolutiondescriptor/init%28kernelwidth_kernelheight_inputfeaturechannels_outputfeaturechannels_%29.md)
- [cnnConvolutionDescriptorWithKernelWidth:kernelHeight:inputFeatureChannels:outputFeatureChannels:neuronFilter:](mpscnnconvolutiondescriptor/init%28kernelwidth_kernelheight_inputfeaturechannels_outputfeaturechannels_neuronfilter_%29.md): Deprecated. Creates a convolution descriptor with an optional neuron filter.

### Instance Properties

- [groups](mpscnnconvolutiondescriptor/groups.md): The number of groups that the input and output channels are divided into.
- [inputFeatureChannels](mpscnnconvolutiondescriptor/inputfeaturechannels.md): The number of feature channels per pixel in the input image.
- [kernelHeight](mpscnnconvolutiondescriptor/kernelheight.md): The height of the kernel window.
- [kernelWidth](mpscnnconvolutiondescriptor/kernelwidth.md): The width of the kernel window.
- [outputFeatureChannels](mpscnnconvolutiondescriptor/outputfeaturechannels.md): The number of feature channels per pixel in the output image.
- [strideInPixelsX](mpscnnconvolutiondescriptor/strideinpixelsx.md): The output stride (downsampling factor) in the x dimension.
- [strideInPixelsY](mpscnnconvolutiondescriptor/strideinpixelsy.md): The output stride (downsampling factor) in the y dimension.
- [neuron](mpscnnconvolutiondescriptor/neuron.md): Deprecated. The neuron filter to be applied as part of the convolution operation.
- [dilationRateX](mpscnnconvolutiondescriptor/dilationratex.md)
- [dilationRateY](mpscnnconvolutiondescriptor/dilationratey.md)
- [neuronParameterA](mpscnnconvolutiondescriptor/neuronparametera%28%29.md): Deprecated.
- [neuronParameterB](mpscnnconvolutiondescriptor/neuronparameterb%28%29.md): Deprecated.
- [neuronType](mpscnnconvolutiondescriptor/neurontype%28%29.md): Deprecated.
- [fusedNeuronDescriptor](mpscnnconvolutiondescriptor/fusedneurondescriptor.md)

### Instance Methods

- [encodeWithCoder:](mpscnnconvolutiondescriptor/encode%28with_%29.md)
- [setBatchNormalizationParametersForInferenceWithMean:variance:gamma:beta:epsilon:](mpscnnconvolutiondescriptor/setbatchnormalizationparametersforinferencewithmean%28__variance_gamma_beta_epsilon_%29.md)
- [setNeuronToPReLUWithParametersA:](mpscnnconvolutiondescriptor/setneurontopreluwithparametersa%28__%29.md): Deprecated.
- [setNeuronType:parameterA:parameterB:](mpscnnconvolutiondescriptor/setneurontype%28__parametera_parameterb_%29.md): Deprecated.

### Type Properties

- [supportsSecureCoding](mpscnnconvolutiondescriptor/supportssecurecoding.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPSCNNDepthWiseConvolutionDescriptor](mpscnndepthwiseconvolutiondescriptor.md)
- [MPSCNNSubPixelConvolutionDescriptor](mpscnnsubpixelconvolutiondescriptor.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Initializers

- [initWithCoder:device:](mpscnnconvolution/init%28coder_device_%29.md)
- [initWithDevice:convolutionDescriptor:kernelWeights:biasTerms:flags:](mpscnnconvolution/init%28device_convolutiondescriptor_kernelweights_biasterms_flags_%29.md): Deprecated. Initializes a convolution kernel.
- [MPSCNNConvolutionFlags](mpscnnconvolutionflags.md): Options used to control how kernel weights are stored and used in the CNN kernels
- [initWithDevice:weights:](mpscnnconvolution/init%28device_weights_%29.md)
- [MPSCNNConvolutionDataSource](mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
