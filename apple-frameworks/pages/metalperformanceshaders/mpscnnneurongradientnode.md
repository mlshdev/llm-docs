> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnneurongradientnode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnneurongradientnode)

# MPSCNNNeuronGradientNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of a gradient exponential neuron filter.

## Declaration

```swift
class MPSCNNNeuronGradientNode
```

## Topics

### Initializers

- [init(sourceGradient:sourceImage:gradientState:descriptor:)](mpscnnneurongradientnode/init%28sourcegradient_sourceimage_gradientstate_descriptor_%29.md)

### Instance Properties

- [descriptor](mpscnnneurongradientnode/descriptor.md)

## Relationships

### Inherits From

- [MPSNNGradientFilterNode](mpsnngradientfilternode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Neuron Layer Nodes

- [MPSCNNNeuronAbsoluteNode](mpscnnneuronabsolutenode.md): A representation of an absolute neuron filter.
- [MPSCNNNeuronELUNode](mpscnnneuronelunode.md): A representation of a parametric ELU neuron filter.
- [MPSCNNNeuronHardSigmoidNode](mpscnnneuronhardsigmoidnode.md): A representation of a hard sigmoid neuron filter.
- [MPSCNNNeuronLinearNode](mpscnnneuronlinearnode.md): A representation of a linear neuron filter.
- [MPSCNNNeuronPReLUNode](mpscnnneuronprelunode.md): A representation a PReLU neuron filter.
- [MPSCNNNeuronReLUNNode](mpscnnneuronrelunnode.md): A representation a ReLUN neuron filter.
- [MPSCNNNeuronReLUNode](mpscnnneuronrelunode.md): A representation a ReLU neuron filter.
- [MPSCNNNeuronSigmoidNode](mpscnnneuronsigmoidnode.md): A representation of a sigmoid neuron filter.
- [MPSCNNNeuronSoftPlusNode](mpscnnneuronsoftplusnode.md): A representation of a parametric softplus neuron filter.
- [MPSCNNNeuronSoftSignNode](mpscnnneuronsoftsignnode.md): A representation of a softsign neuron filter.
- [MPSCNNNeuronTanHNode](mpscnnneurontanhnode.md): A representation of a hyperbolic tangent neuron filter.
- [MPSCNNNeuronExponentialNode](mpscnnneuronexponentialnode.md): A representation of an exponential neuron filter.
- [MPSCNNNeuronLogarithmNode](mpscnnneuronlogarithmnode.md): A representation of a logarithm neuron filter.
- [MPSCNNNeuronPowerNode](mpscnnneuronpowernode.md): A representation of a power neuron filter.
- [MPSCNNNeuronNode](mpscnnneuronnode.md): The virtual base class for MPS CNN neuron nodes.

# MPSCNNNeuronGradientNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of a gradient exponential neuron filter.

## Declaration

```objectivec
@interface MPSCNNNeuronGradientNode : MPSNNGradientFilterNode
```

## Topics

### Instance Properties

- [descriptor](mpscnnneurongradientnode/descriptor.md)

### Instance Methods

- [initWithSourceGradient:sourceImage:gradientState:descriptor:](mpscnnneurongradientnode/init%28sourcegradient_sourceimage_gradientstate_descriptor_%29.md)

### Type Methods

- [nodeWithSourceGradient:sourceImage:gradientState:descriptor:](mpscnnneurongradientnode/nodewithsourcegradient_sourceimage_gradientstate_descriptor_.md)

## Relationships

### Inherits From

- [MPSNNGradientFilterNode](mpsnngradientfilternode.md)

## See Also

### Neuron Layer Nodes

- [MPSCNNNeuronAbsoluteNode](mpscnnneuronabsolutenode.md): A representation of an absolute neuron filter.
- [MPSCNNNeuronELUNode](mpscnnneuronelunode.md): A representation of a parametric ELU neuron filter.
- [MPSCNNNeuronHardSigmoidNode](mpscnnneuronhardsigmoidnode.md): A representation of a hard sigmoid neuron filter.
- [MPSCNNNeuronLinearNode](mpscnnneuronlinearnode.md): A representation of a linear neuron filter.
- [MPSCNNNeuronPReLUNode](mpscnnneuronprelunode.md): A representation a PReLU neuron filter.
- [MPSCNNNeuronReLUNNode](mpscnnneuronrelunnode.md): A representation a ReLUN neuron filter.
- [MPSCNNNeuronReLUNode](mpscnnneuronrelunode.md): A representation a ReLU neuron filter.
- [MPSCNNNeuronSigmoidNode](mpscnnneuronsigmoidnode.md): A representation of a sigmoid neuron filter.
- [MPSCNNNeuronSoftPlusNode](mpscnnneuronsoftplusnode.md): A representation of a parametric softplus neuron filter.
- [MPSCNNNeuronSoftSignNode](mpscnnneuronsoftsignnode.md): A representation of a softsign neuron filter.
- [MPSCNNNeuronTanHNode](mpscnnneurontanhnode.md): A representation of a hyperbolic tangent neuron filter.
- [MPSCNNNeuronExponentialNode](mpscnnneuronexponentialnode.md): A representation of an exponential neuron filter.
- [MPSCNNNeuronLogarithmNode](mpscnnneuronlogarithmnode.md): A representation of a logarithm neuron filter.
- [MPSCNNNeuronPowerNode](mpscnnneuronpowernode.md): A representation of a power neuron filter.
- [MPSCNNNeuronNode](mpscnnneuronnode.md): The virtual base class for MPS CNN neuron nodes.
