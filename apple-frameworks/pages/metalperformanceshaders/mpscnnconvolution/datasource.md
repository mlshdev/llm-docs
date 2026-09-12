> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolution/datasource](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolution/datasource)

# dataSource (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

## Declaration

```swift
var dataSource: any MPSCNNConvolutionDataSource { get }
```

## See Also

### Instance Properties

- [inputFeatureChannels](inputfeaturechannels.md): The number of feature channels per pixel in the input image.
- [outputFeatureChannels](outputfeaturechannels.md): The number of feature channels per pixel in the output image.
- [groups](groups.md): The number of groups that the input and output channels are divided into.
- [subPixelScaleFactor](subpixelscalefactor.md)
- [neuron](neuron.md): Deprecated. The neuron filter to be applied as part of the convolution operation.
- [MPSCNNNeuron](../mpscnnneuron.md): A filter that applies a neuron activation function.
- [neuronType](neurontype.md): Deprecated.
- [MPSCNNNeuronType](../mpscnnneurontype.md): The types of neuron filter to append to a convolution.
- [neuronParameterA](neuronparametera.md): Deprecated.
- [neuronParameterB](neuronparameterb.md): Deprecated.
- [accumulatorPrecisionOption](accumulatorprecisionoption.md)
- [channelMultiplier](channelmultiplier.md)
- [fusedNeuronDescriptor](fusedneurondescriptor.md)
- [neuronParameterC](neuronparameterc.md): Deprecated.

# dataSource (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nonnull) id<MPSCNNConvolutionDataSource> dataSource;
```

## See Also

### Instance Properties

- [inputFeatureChannels](inputfeaturechannels.md): The number of feature channels per pixel in the input image.
- [outputFeatureChannels](outputfeaturechannels.md): The number of feature channels per pixel in the output image.
- [groups](groups.md): The number of groups that the input and output channels are divided into.
- [subPixelScaleFactor](subpixelscalefactor.md)
- [neuron](neuron.md): Deprecated. The neuron filter to be applied as part of the convolution operation.
- [MPSCNNNeuron](../mpscnnneuron.md): A filter that applies a neuron activation function.
- [neuronType](neurontype.md): Deprecated.
- [MPSCNNNeuronType](../mpscnnneurontype.md): The types of neuron filter to append to a convolution.
- [neuronParameterA](neuronparametera.md): Deprecated.
- [neuronParameterB](neuronparameterb.md): Deprecated.
- [accumulatorPrecisionOption](accumulatorprecisionoption.md)
- [channelMultiplier](channelmultiplier.md)
- [fusedNeuronDescriptor](fusedneurondescriptor.md)
- [neuronParameterC](neuronparameterc.md): Deprecated.
