> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiondescriptor/neurontype()](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiondescriptor/neurontype())

# neuronType() (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 11.3) · iPadOS 11.0+ (deprecated in 11.3) · Mac Catalyst 11.0+ (deprecated in 11.3) · macOS 10.13+ (deprecated in 10.13.4) · tvOS 11.0+ (deprecated in 11.3) · visionOS 1.0+ (deprecated in 1.0)

## Declaration

```swift
func neuronType() -> MPSCNNNeuronType
```

## See Also

### Instance Properties

- [groups](groups.md): The number of groups that the input and output channels are divided into.
- [inputFeatureChannels](inputfeaturechannels.md): The number of feature channels per pixel in the input image.
- [kernelHeight](kernelheight.md): The height of the kernel window.
- [kernelWidth](kernelwidth.md): The width of the kernel window.
- [outputFeatureChannels](outputfeaturechannels.md): The number of feature channels per pixel in the output image.
- [strideInPixelsX](strideinpixelsx.md): The output stride (downsampling factor) in the x dimension.
- [strideInPixelsY](strideinpixelsy.md): The output stride (downsampling factor) in the y dimension.
- [neuron](neuron.md): Deprecated. The neuron filter to be applied as part of the convolution operation.
- [dilationRateX](dilationratex.md)
- [dilationRateY](dilationratey.md)
- [neuronParameterA()](neuronparametera%28%29.md): Deprecated.
- [neuronParameterB()](neuronparameterb%28%29.md): Deprecated.
- [fusedNeuronDescriptor](fusedneurondescriptor.md)

# neuronType (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 11.3) · iPadOS 11.0+ (deprecated in 11.3) · macOS 10.13+ (deprecated in 10.13.4) · tvOS 11.0+ (deprecated in 11.3) · visionOS 1.0+ (deprecated in 1.0)

## Declaration

```objectivec
- (MPSCNNNeuronType) neuronType;
```

## See Also

### Instance Properties

- [groups](groups.md): The number of groups that the input and output channels are divided into.
- [inputFeatureChannels](inputfeaturechannels.md): The number of feature channels per pixel in the input image.
- [kernelHeight](kernelheight.md): The height of the kernel window.
- [kernelWidth](kernelwidth.md): The width of the kernel window.
- [outputFeatureChannels](outputfeaturechannels.md): The number of feature channels per pixel in the output image.
- [strideInPixelsX](strideinpixelsx.md): The output stride (downsampling factor) in the x dimension.
- [strideInPixelsY](strideinpixelsy.md): The output stride (downsampling factor) in the y dimension.
- [neuron](neuron.md): Deprecated. The neuron filter to be applied as part of the convolution operation.
- [dilationRateX](dilationratex.md)
- [dilationRateY](dilationratey.md)
- [neuronParameterA](neuronparametera%28%29.md): Deprecated.
- [neuronParameterB](neuronparameterb%28%29.md): Deprecated.
- [fusedNeuronDescriptor](fusedneurondescriptor.md)
