> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiondescriptor/inputfeaturechannels](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiondescriptor/inputfeaturechannels)

# inputFeatureChannels (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The number of feature channels per pixel in the input image.

## Declaration

```swift
var inputFeatureChannels: Int { get set }
```

## See Also

### Instance Properties

- [groups](groups.md): The number of groups that the input and output channels are divided into.
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
- [neuronType()](neurontype%28%29.md): Deprecated.
- [fusedNeuronDescriptor](fusedneurondescriptor.md)

# inputFeatureChannels (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The number of feature channels per pixel in the input image.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger inputFeatureChannels;
```

## See Also

### Instance Properties

- [groups](groups.md): The number of groups that the input and output channels are divided into.
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
- [neuronType](neurontype%28%29.md): Deprecated.
- [fusedNeuronDescriptor](fusedneurondescriptor.md)
