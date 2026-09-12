> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolution/neuron](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolution/neuron)

# neuron (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 10.0+ (deprecated in 11.0) · macOS 10.13+ · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

The neuron filter to be applied as part of the convolution operation.

## Declaration

```swift
var neuron: MPSCNNNeuron? { get }
```

## See Also

### Instance Properties

- [inputFeatureChannels](inputfeaturechannels.md): The number of feature channels per pixel in the input image.
- [outputFeatureChannels](outputfeaturechannels.md): The number of feature channels per pixel in the output image.
- [groups](groups.md): The number of groups that the input and output channels are divided into.
- [subPixelScaleFactor](subpixelscalefactor.md)
- [MPSCNNNeuron](../mpscnnneuron.md): A filter that applies a neuron activation function.
- [neuronType](neurontype.md): Deprecated.
- [MPSCNNNeuronType](../mpscnnneurontype.md): The types of neuron filter to append to a convolution.
- [neuronParameterA](neuronparametera.md): Deprecated.
- [neuronParameterB](neuronparameterb.md): Deprecated.
- [accumulatorPrecisionOption](accumulatorprecisionoption.md)
- [channelMultiplier](channelmultiplier.md)
- [dataSource](datasource.md)
- [fusedNeuronDescriptor](fusedneurondescriptor.md)
- [neuronParameterC](neuronparameterc.md): Deprecated.

# neuron (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · macOS 10.13+ · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

The neuron filter to be applied as part of the convolution operation.

## Declaration

```objectivec
@property (nonatomic, readonly) const MPSCNNNeuron * neuron;
```

## See Also

### Instance Properties

- [inputFeatureChannels](inputfeaturechannels.md): The number of feature channels per pixel in the input image.
- [outputFeatureChannels](outputfeaturechannels.md): The number of feature channels per pixel in the output image.
- [groups](groups.md): The number of groups that the input and output channels are divided into.
- [subPixelScaleFactor](subpixelscalefactor.md)
- [MPSCNNNeuron](../mpscnnneuron.md): A filter that applies a neuron activation function.
- [neuronType](neurontype.md): Deprecated.
- [MPSCNNNeuronType](../mpscnnneurontype.md): The types of neuron filter to append to a convolution.
- [neuronParameterA](neuronparametera.md): Deprecated.
- [neuronParameterB](neuronparameterb.md): Deprecated.
- [accumulatorPrecisionOption](accumulatorprecisionoption.md)
- [channelMultiplier](channelmultiplier.md)
- [dataSource](datasource.md)
- [fusedNeuronDescriptor](fusedneurondescriptor.md)
- [neuronParameterC](neuronparameterc.md): Deprecated.
