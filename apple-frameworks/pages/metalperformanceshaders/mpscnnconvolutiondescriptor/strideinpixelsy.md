> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiondescriptor/strideinpixelsy](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiondescriptor/strideinpixelsy)

# strideInPixelsY (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The output stride (downsampling factor) in the y dimension.

## Declaration

```swift
var strideInPixelsY: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `1`.

## See Also

### Instance Properties

- [groups](groups.md): The number of groups that the input and output channels are divided into.
- [inputFeatureChannels](inputfeaturechannels.md): The number of feature channels per pixel in the input image.
- [kernelHeight](kernelheight.md): The height of the kernel window.
- [kernelWidth](kernelwidth.md): The width of the kernel window.
- [outputFeatureChannels](outputfeaturechannels.md): The number of feature channels per pixel in the output image.
- [strideInPixelsX](strideinpixelsx.md): The output stride (downsampling factor) in the x dimension.
- [neuron](neuron.md): Deprecated. The neuron filter to be applied as part of the convolution operation.
- [dilationRateX](dilationratex.md)
- [dilationRateY](dilationratey.md)
- [neuronParameterA()](neuronparametera%28%29.md): Deprecated.
- [neuronParameterB()](neuronparameterb%28%29.md): Deprecated.
- [neuronType()](neurontype%28%29.md): Deprecated.
- [fusedNeuronDescriptor](fusedneurondescriptor.md)

# strideInPixelsY (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The output stride (downsampling factor) in the y dimension.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger strideInPixelsY;
```

<a id="Discussion"></a>

## Discussion

The default value is `1`.

## See Also

### Instance Properties

- [groups](groups.md): The number of groups that the input and output channels are divided into.
- [inputFeatureChannels](inputfeaturechannels.md): The number of feature channels per pixel in the input image.
- [kernelHeight](kernelheight.md): The height of the kernel window.
- [kernelWidth](kernelwidth.md): The width of the kernel window.
- [outputFeatureChannels](outputfeaturechannels.md): The number of feature channels per pixel in the output image.
- [strideInPixelsX](strideinpixelsx.md): The output stride (downsampling factor) in the x dimension.
- [neuron](neuron.md): Deprecated. The neuron filter to be applied as part of the convolution operation.
- [dilationRateX](dilationratex.md)
- [dilationRateY](dilationratey.md)
- [neuronParameterA](neuronparametera%28%29.md): Deprecated.
- [neuronParameterB](neuronparameterb%28%29.md): Deprecated.
- [neuronType](neurontype%28%29.md): Deprecated.
- [fusedNeuronDescriptor](fusedneurondescriptor.md)
