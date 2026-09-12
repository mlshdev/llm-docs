> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnneurontype](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnneurontype)

# MPSCNNNeuronType (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The types of neuron filter to append to a convolution.

## Declaration

```swift
enum MPSCNNNeuronType
```

## Topics

### Enumeration Cases

- [MPSCNNNeuronType.none](mpscnnneurontype/none.md): A neuron type indicating no neuron filter.
- [MPSCNNNeuronType.reLU](mpscnnneurontype/relu.md): A neuron type indicating a rectified linear unit neuron filter.
- [MPSCNNNeuronType.linear](mpscnnneurontype/linear.md): A neuron type indicating a linear neuron filter.
- [MPSCNNNeuronType.sigmoid](mpscnnneurontype/sigmoid.md): A neuron type indicating a sigmoid neuron filter.
- [MPSCNNNeuronType.hardSigmoid](mpscnnneurontype/hardsigmoid.md): A neuron type indicating a hard sigmoid neuron filter.
- [MPSCNNNeuronType.tanH](mpscnnneurontype/tanh.md): A neuron type indicating a hyperbolic tangent neuron filter.
- [MPSCNNNeuronType.absolute](mpscnnneurontype/absolute.md): A neuron type indicating an absolute neuron filter.
- [MPSCNNNeuronType.softPlus](mpscnnneurontype/softplus.md): A neuron type indicating a parametric softplus neuron filter.
- [MPSCNNNeuronType.softSign](mpscnnneurontype/softsign.md): A neuron type indicating a softsign neuron filter.
- [MPSCNNNeuronType.ELU](mpscnnneurontype/elu.md): A neuron type indicating a parametric exponential linear unit neuron filter.
- [MPSCNNNeuronType.count](mpscnnneurontype/count.md)
- [MPSCNNNeuronType.exponential](mpscnnneurontype/exponential.md)
- [MPSCNNNeuronType.geLU](mpscnnneurontype/gelu.md)
- [MPSCNNNeuronType.logarithm](mpscnnneurontype/logarithm.md)
- [MPSCNNNeuronType.pReLU](mpscnnneurontype/prelu.md)
- [MPSCNNNeuronType.power](mpscnnneurontype/power.md)
- [MPSCNNNeuronType.reLUN](mpscnnneurontype/relun.md)

### Initializers

- [init(rawValue:)](mpscnnneurontype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Instance Properties

- [inputFeatureChannels](mpscnnconvolution/inputfeaturechannels.md): The number of feature channels per pixel in the input image.
- [outputFeatureChannels](mpscnnconvolution/outputfeaturechannels.md): The number of feature channels per pixel in the output image.
- [groups](mpscnnconvolution/groups.md): The number of groups that the input and output channels are divided into.
- [subPixelScaleFactor](mpscnnconvolution/subpixelscalefactor.md)
- [neuron](mpscnnconvolution/neuron.md): Deprecated. The neuron filter to be applied as part of the convolution operation.
- [MPSCNNNeuron](mpscnnneuron.md): A filter that applies a neuron activation function.
- [neuronType](mpscnnconvolution/neurontype.md): Deprecated.
- [neuronParameterA](mpscnnconvolution/neuronparametera.md): Deprecated.
- [neuronParameterB](mpscnnconvolution/neuronparameterb.md): Deprecated.
- [accumulatorPrecisionOption](mpscnnconvolution/accumulatorprecisionoption.md)
- [channelMultiplier](mpscnnconvolution/channelmultiplier.md)
- [dataSource](mpscnnconvolution/datasource.md)
- [fusedNeuronDescriptor](mpscnnconvolution/fusedneurondescriptor.md)
- [neuronParameterC](mpscnnconvolution/neuronparameterc.md): Deprecated.

# MPSCNNNeuronType (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The types of neuron filter to append to a convolution.

## Declaration

```objectivec
enum MPSCNNNeuronType : int32_t;
```

## Topics

### Enumeration Cases

- [MPSCNNNeuronTypeNone](mpscnnneurontype/none.md): A neuron type indicating no neuron filter.
- [MPSCNNNeuronTypeReLU](mpscnnneurontype/relu.md): A neuron type indicating a rectified linear unit neuron filter.
- [MPSCNNNeuronTypeLinear](mpscnnneurontype/linear.md): A neuron type indicating a linear neuron filter.
- [MPSCNNNeuronTypeSigmoid](mpscnnneurontype/sigmoid.md): A neuron type indicating a sigmoid neuron filter.
- [MPSCNNNeuronTypeHardSigmoid](mpscnnneurontype/hardsigmoid.md): A neuron type indicating a hard sigmoid neuron filter.
- [MPSCNNNeuronTypeTanH](mpscnnneurontype/tanh.md): A neuron type indicating a hyperbolic tangent neuron filter.
- [MPSCNNNeuronTypeAbsolute](mpscnnneurontype/absolute.md): A neuron type indicating an absolute neuron filter.
- [MPSCNNNeuronTypeSoftPlus](mpscnnneurontype/softplus.md): A neuron type indicating a parametric softplus neuron filter.
- [MPSCNNNeuronTypeSoftSign](mpscnnneurontype/softsign.md): A neuron type indicating a softsign neuron filter.
- [MPSCNNNeuronTypeELU](mpscnnneurontype/elu.md): A neuron type indicating a parametric exponential linear unit neuron filter.
- [MPSCNNNeuronTypeCount](mpscnnneurontype/count.md)
- [MPSCNNNeuronTypeExponential](mpscnnneurontype/exponential.md)
- [MPSCNNNeuronTypeGeLU](mpscnnneurontype/gelu.md)
- [MPSCNNNeuronTypeLogarithm](mpscnnneurontype/logarithm.md)
- [MPSCNNNeuronTypePReLU](mpscnnneurontype/prelu.md)
- [MPSCNNNeuronTypePower](mpscnnneurontype/power.md)
- [MPSCNNNeuronTypeReLUN](mpscnnneurontype/relun.md)

## See Also

### Instance Properties

- [inputFeatureChannels](mpscnnconvolution/inputfeaturechannels.md): The number of feature channels per pixel in the input image.
- [outputFeatureChannels](mpscnnconvolution/outputfeaturechannels.md): The number of feature channels per pixel in the output image.
- [groups](mpscnnconvolution/groups.md): The number of groups that the input and output channels are divided into.
- [subPixelScaleFactor](mpscnnconvolution/subpixelscalefactor.md)
- [neuron](mpscnnconvolution/neuron.md): Deprecated. The neuron filter to be applied as part of the convolution operation.
- [MPSCNNNeuron](mpscnnneuron.md): A filter that applies a neuron activation function.
- [neuronType](mpscnnconvolution/neurontype.md): Deprecated.
- [neuronParameterA](mpscnnconvolution/neuronparametera.md): Deprecated.
- [neuronParameterB](mpscnnconvolution/neuronparameterb.md): Deprecated.
- [accumulatorPrecisionOption](mpscnnconvolution/accumulatorprecisionoption.md)
- [channelMultiplier](mpscnnconvolution/channelmultiplier.md)
- [dataSource](mpscnnconvolution/datasource.md)
- [fusedNeuronDescriptor](mpscnnconvolution/fusedneurondescriptor.md)
- [neuronParameterC](mpscnnconvolution/neuronparameterc.md): Deprecated.
