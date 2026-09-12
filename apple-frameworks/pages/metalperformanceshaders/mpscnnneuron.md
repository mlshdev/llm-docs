> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnneuron](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnneuron)

# MPSCNNNeuron (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A filter that applies a neuron activation function.

## Declaration

```swift
class MPSCNNNeuron
```

<a id="overview"></a>

## Overview

Do not use this class directly; use one of the [MPSCNNNeuron](mpscnnneuron.md) subclasses instead.

## Topics

### Initializers

- [init(coder:device:)](mpscnnneuron/init%28coder_device_%29.md)
- [init(device:neuronDescriptor:)](mpscnnneuron/init%28device_neurondescriptor_%29.md)

### Instance Properties

- [a](mpscnnneuron/a.md)
- [b](mpscnnneuron/b.md)
- [c](mpscnnneuron/c.md)
- [data](mpscnnneuron/data.md)
- [neuronType](mpscnnneuron/neurontype.md)

## Relationships

### Inherits From

- [MPSCNNKernel](mpscnnkernel.md)

### Inherited By

- [MPSCNNNeuronAbsolute](mpscnnneuronabsolute.md)
- [MPSCNNNeuronELU](mpscnnneuronelu.md)
- [MPSCNNNeuronExponential](mpscnnneuronexponential.md)
- [MPSCNNNeuronHardSigmoid](mpscnnneuronhardsigmoid.md)
- [MPSCNNNeuronLinear](mpscnnneuronlinear.md)
- [MPSCNNNeuronLogarithm](mpscnnneuronlogarithm.md)
- [MPSCNNNeuronPReLU](mpscnnneuronprelu.md)
- [MPSCNNNeuronPower](mpscnnneuronpower.md)
- [MPSCNNNeuronReLU](mpscnnneuronrelu.md)
- [MPSCNNNeuronReLUN](mpscnnneuronrelun.md)
- [MPSCNNNeuronSigmoid](mpscnnneuronsigmoid.md)
- [MPSCNNNeuronSoftPlus](mpscnnneuronsoftplus.md)
- [MPSCNNNeuronSoftSign](mpscnnneuronsoftsign.md)
- [MPSCNNNeuronTanH](mpscnnneurontanh.md)

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

### Neuron Layers

- [MPSCNNNeuronAbsolute](mpscnnneuronabsolute.md): An absolute neuron filter.
- [MPSCNNNeuronELU](mpscnnneuronelu.md): A parametric ELU neuron filter.
- [MPSCNNNeuronHardSigmoid](mpscnnneuronhardsigmoid.md): A hard sigmoid neuron filter.
- [MPSCNNNeuronLinear](mpscnnneuronlinear.md): A linear neuron filter.
- [MPSCNNNeuronPReLU](mpscnnneuronprelu.md): A parametric ReLU (Rectified Linear Unit) neuron filter.
- [MPSCNNNeuronReLUN](mpscnnneuronrelun.md): A ReLUN neuron filter.
- [MPSCNNNeuronReLU](mpscnnneuronrelu.md): A ReLU (Rectified Linear Unit) neuron filter.
- [MPSCNNNeuronSigmoid](mpscnnneuronsigmoid.md): A sigmoid neuron filter.
- [MPSCNNNeuronSoftPlus](mpscnnneuronsoftplus.md): A parametric softplus neuron filter.
- [MPSCNNNeuronSoftSign](mpscnnneuronsoftsign.md): A softsign neuron filter.
- [MPSCNNNeuronTanH](mpscnnneurontanh.md): A hyperbolic tangent neuron filter.
- [MPSCNNNeuronExponential](mpscnnneuronexponential.md): An exponential neuron filter.
- [MPSCNNNeuronGradient](mpscnnneurongradient.md): A gradient neuron filter.
- [MPSCNNNeuronLogarithm](mpscnnneuronlogarithm.md): A logarithm neuron filter.
- [MPSCNNNeuronPower](mpscnnneuronpower.md): A power neuron filter.

# MPSCNNNeuron (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A filter that applies a neuron activation function.

## Declaration

```objectivec
@interface MPSCNNNeuron : MPSCNNKernel
```

<a id="overview"></a>

## Overview

Do not use this class directly; use one of the [MPSCNNNeuron](mpscnnneuron.md) subclasses instead.

## Topics

### Initializers

- [initWithCoder:device:](mpscnnneuron/init%28coder_device_%29.md)
- [initWithDevice:neuronDescriptor:](mpscnnneuron/init%28device_neurondescriptor_%29.md)

### Instance Properties

- [a](mpscnnneuron/a.md)
- [b](mpscnnneuron/b.md)
- [c](mpscnnneuron/c.md)
- [data](mpscnnneuron/data.md)
- [neuronType](mpscnnneuron/neurontype.md)

## Relationships

### Inherits From

- [MPSCNNKernel](mpscnnkernel.md)

### Inherited By

- [MPSCNNNeuronAbsolute](mpscnnneuronabsolute.md)
- [MPSCNNNeuronELU](mpscnnneuronelu.md)
- [MPSCNNNeuronExponential](mpscnnneuronexponential.md)
- [MPSCNNNeuronHardSigmoid](mpscnnneuronhardsigmoid.md)
- [MPSCNNNeuronLinear](mpscnnneuronlinear.md)
- [MPSCNNNeuronLogarithm](mpscnnneuronlogarithm.md)
- [MPSCNNNeuronPReLU](mpscnnneuronprelu.md)
- [MPSCNNNeuronPower](mpscnnneuronpower.md)
- [MPSCNNNeuronReLU](mpscnnneuronrelu.md)
- [MPSCNNNeuronReLUN](mpscnnneuronrelun.md)
- [MPSCNNNeuronSigmoid](mpscnnneuronsigmoid.md)
- [MPSCNNNeuronSoftPlus](mpscnnneuronsoftplus.md)
- [MPSCNNNeuronSoftSign](mpscnnneuronsoftsign.md)
- [MPSCNNNeuronTanH](mpscnnneurontanh.md)

## See Also

### Neuron Layers

- [MPSCNNNeuronAbsolute](mpscnnneuronabsolute.md): An absolute neuron filter.
- [MPSCNNNeuronELU](mpscnnneuronelu.md): A parametric ELU neuron filter.
- [MPSCNNNeuronHardSigmoid](mpscnnneuronhardsigmoid.md): A hard sigmoid neuron filter.
- [MPSCNNNeuronLinear](mpscnnneuronlinear.md): A linear neuron filter.
- [MPSCNNNeuronPReLU](mpscnnneuronprelu.md): A parametric ReLU (Rectified Linear Unit) neuron filter.
- [MPSCNNNeuronReLUN](mpscnnneuronrelun.md): A ReLUN neuron filter.
- [MPSCNNNeuronReLU](mpscnnneuronrelu.md): A ReLU (Rectified Linear Unit) neuron filter.
- [MPSCNNNeuronSigmoid](mpscnnneuronsigmoid.md): A sigmoid neuron filter.
- [MPSCNNNeuronSoftPlus](mpscnnneuronsoftplus.md): A parametric softplus neuron filter.
- [MPSCNNNeuronSoftSign](mpscnnneuronsoftsign.md): A softsign neuron filter.
- [MPSCNNNeuronTanH](mpscnnneurontanh.md): A hyperbolic tangent neuron filter.
- [MPSCNNNeuronExponential](mpscnnneuronexponential.md): An exponential neuron filter.
- [MPSCNNNeuronGradient](mpscnnneurongradient.md): A gradient neuron filter.
- [MPSCNNNeuronLogarithm](mpscnnneuronlogarithm.md): A logarithm neuron filter.
- [MPSCNNNeuronPower](mpscnnneuronpower.md): A power neuron filter.
