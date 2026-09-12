> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiondescriptor/groups](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiondescriptor/groups)

# groups (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The number of groups that the input and output channels are divided into.

## Declaration

```swift
var groups: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `1`.

Groups let you reduce parametrization. If the value of this property is set to `n`, the input is divided into `n` groups with ```inputFeatureChannels``/n``` channels in each group. Similarly, the output is divided into `n` groups with `outputFeatureChannels/n` channels in each group.  The `ith` group in the input is only connected to the `ith` group in the output, so the number of weights (parameters) needed is reduced by a factor of `n`. Both the value of the [inputFeatureChannels](inputfeaturechannels.md) and [outputFeatureChannels](outputfeaturechannels.md) properties must be divisible by `n` and the number of channels in each group must be a multiple of `4`.

## See Also

### Instance Properties

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
- [neuronType()](neurontype%28%29.md): Deprecated.
- [fusedNeuronDescriptor](fusedneurondescriptor.md)

# groups (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The number of groups that the input and output channels are divided into.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger groups;
```

<a id="Discussion"></a>

## Discussion

The default value is `1`.

Groups let you reduce parametrization. If the value of this property is set to `n`, the input is divided into `n` groups with ```inputFeatureChannels``/n``` channels in each group. Similarly, the output is divided into `n` groups with `outputFeatureChannels/n` channels in each group.  The `ith` group in the input is only connected to the `ith` group in the output, so the number of weights (parameters) needed is reduced by a factor of `n`. Both the value of the [inputFeatureChannels](inputfeaturechannels.md) and [outputFeatureChannels](outputfeaturechannels.md) properties must be divisible by `n` and the number of channels in each group must be a multiple of `4`.

## See Also

### Instance Properties

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
- [neuronType](neurontype%28%29.md): Deprecated.
- [fusedNeuronDescriptor](fusedneurondescriptor.md)
