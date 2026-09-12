> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnneuronnode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnneuronnode)

# MPSCNNNeuronNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The virtual base class for MPS CNN neuron nodes.

## Declaration

```swift
class MPSCNNNeuronNode
```

## Topics

### Supporting Types

- [MPSCNNNeuronType](mpscnnneurontype.md): The types of neuron filter to append to a convolution.

### Initializers

- [init(source:descriptor:)](mpscnnneuronnode/init%28source_descriptor_%29.md)

### Instance Properties

- [a](mpscnnneuronnode/a.md)
- [b](mpscnnneuronnode/b.md)
- [c](mpscnnneuronnode/c.md)

## Relationships

### Inherits From

- [MPSNNFilterNode](mpsnnfilternode.md)

### Inherited By

- [MPSCNNNeuronAbsoluteNode](mpscnnneuronabsolutenode.md)
- [MPSCNNNeuronELUNode](mpscnnneuronelunode.md)
- [MPSCNNNeuronExponentialNode](mpscnnneuronexponentialnode.md)
- [MPSCNNNeuronGeLUNode](mpscnnneurongelunode.md)
- [MPSCNNNeuronHardSigmoidNode](mpscnnneuronhardsigmoidnode.md)
- [MPSCNNNeuronLinearNode](mpscnnneuronlinearnode.md)
- [MPSCNNNeuronLogarithmNode](mpscnnneuronlogarithmnode.md)
- [MPSCNNNeuronPReLUNode](mpscnnneuronprelunode.md)
- [MPSCNNNeuronPowerNode](mpscnnneuronpowernode.md)
- [MPSCNNNeuronReLUNNode](mpscnnneuronrelunnode.md)
- [MPSCNNNeuronReLUNode](mpscnnneuronrelunode.md)
- [MPSCNNNeuronSigmoidNode](mpscnnneuronsigmoidnode.md)
- [MPSCNNNeuronSoftPlusNode](mpscnnneuronsoftplusnode.md)
- [MPSCNNNeuronSoftSignNode](mpscnnneuronsoftsignnode.md)
- [MPSCNNNeuronTanHNode](mpscnnneurontanhnode.md)

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
- [MPSCNNNeuronGradientNode](mpscnnneurongradientnode.md): A representation of a gradient exponential neuron filter.
- [MPSCNNNeuronLogarithmNode](mpscnnneuronlogarithmnode.md): A representation of a logarithm neuron filter.
- [MPSCNNNeuronPowerNode](mpscnnneuronpowernode.md): A representation of a power neuron filter.

# MPSCNNNeuronNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The virtual base class for MPS CNN neuron nodes.

## Declaration

```objectivec
@interface MPSCNNNeuronNode : MPSNNFilterNode
```

## Topics

### Supporting Types

- [MPSCNNNeuronType](mpscnnneurontype.md): The types of neuron filter to append to a convolution.

### Instance Properties

- [a](mpscnnneuronnode/a.md)
- [b](mpscnnneuronnode/b.md)
- [c](mpscnnneuronnode/c.md)

### Type Methods

- [nodeWithSource:descriptor:](mpscnnneuronnode/init%28source_descriptor_%29.md)

## Relationships

### Inherits From

- [MPSNNFilterNode](mpsnnfilternode.md)

### Inherited By

- [MPSCNNNeuronAbsoluteNode](mpscnnneuronabsolutenode.md)
- [MPSCNNNeuronELUNode](mpscnnneuronelunode.md)
- [MPSCNNNeuronExponentialNode](mpscnnneuronexponentialnode.md)
- [MPSCNNNeuronGeLUNode](mpscnnneurongelunode.md)
- [MPSCNNNeuronHardSigmoidNode](mpscnnneuronhardsigmoidnode.md)
- [MPSCNNNeuronLinearNode](mpscnnneuronlinearnode.md)
- [MPSCNNNeuronLogarithmNode](mpscnnneuronlogarithmnode.md)
- [MPSCNNNeuronPReLUNode](mpscnnneuronprelunode.md)
- [MPSCNNNeuronPowerNode](mpscnnneuronpowernode.md)
- [MPSCNNNeuronReLUNNode](mpscnnneuronrelunnode.md)
- [MPSCNNNeuronReLUNode](mpscnnneuronrelunode.md)
- [MPSCNNNeuronSigmoidNode](mpscnnneuronsigmoidnode.md)
- [MPSCNNNeuronSoftPlusNode](mpscnnneuronsoftplusnode.md)
- [MPSCNNNeuronSoftSignNode](mpscnnneuronsoftsignnode.md)
- [MPSCNNNeuronTanHNode](mpscnnneurontanhnode.md)

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
- [MPSCNNNeuronGradientNode](mpscnnneurongradientnode.md): A representation of a gradient exponential neuron filter.
- [MPSCNNNeuronLogarithmNode](mpscnnneuronlogarithmnode.md): A representation of a logarithm neuron filter.
- [MPSCNNNeuronPowerNode](mpscnnneuronpowernode.md): A representation of a power neuron filter.
