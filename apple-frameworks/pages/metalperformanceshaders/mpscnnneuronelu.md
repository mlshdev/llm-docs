> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnneuronelu](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnneuronelu)

# MPSCNNNeuronELU (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A parametric ELU neuron filter.

## Declaration

```swift
class MPSCNNNeuronELU
```

<a id="overview"></a>

## Overview

For each pixel in an image, the filter applies the following function:

!\[f(x) = a \* (exp(x) - 1) if x \<  0 | f(x) = [a \* (exp(x) - 1) if x \<  0](https://developer.apple.commedia-2903539)

## Topics

### Initializers

- [init(device:a:)](mpscnnneuronelu/init%28device_a_%29.md): Deprecated. Initializes a parametric ELU neuron filter.

## Relationships

### Inherits From

- [MPSCNNNeuron](mpscnnneuron.md)

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
- [MPSCNNNeuronHardSigmoid](mpscnnneuronhardsigmoid.md): A hard sigmoid neuron filter.
- [MPSCNNNeuronLinear](mpscnnneuronlinear.md): A linear neuron filter.
- [MPSCNNNeuronPReLU](mpscnnneuronprelu.md): A parametric ReLU (Rectified Linear Unit) neuron filter.
- [MPSCNNNeuronReLUN](mpscnnneuronrelun.md): A ReLUN neuron filter.
- [MPSCNNNeuronReLU](mpscnnneuronrelu.md): A ReLU (Rectified Linear Unit) neuron filter.
- [MPSCNNNeuronSigmoid](mpscnnneuronsigmoid.md): A sigmoid neuron filter.
- [MPSCNNNeuronSoftPlus](mpscnnneuronsoftplus.md): A parametric softplus neuron filter.
- [MPSCNNNeuronSoftSign](mpscnnneuronsoftsign.md): A softsign neuron filter.
- [MPSCNNNeuronTanH](mpscnnneurontanh.md): A hyperbolic tangent neuron filter.
- [MPSCNNNeuron](mpscnnneuron.md): A filter that applies a neuron activation function.
- [MPSCNNNeuronExponential](mpscnnneuronexponential.md): An exponential neuron filter.
- [MPSCNNNeuronGradient](mpscnnneurongradient.md): A gradient neuron filter.
- [MPSCNNNeuronLogarithm](mpscnnneuronlogarithm.md): A logarithm neuron filter.
- [MPSCNNNeuronPower](mpscnnneuronpower.md): A power neuron filter.

# MPSCNNNeuronELU (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A parametric ELU neuron filter.

## Declaration

```objectivec
@interface MPSCNNNeuronELU : MPSCNNNeuron
```

<a id="overview"></a>

## Overview

For each pixel in an image, the filter applies the following function:

!\[f(x) = a \* (exp(x) - 1) if x \<  0 | f(x) = [a \* (exp(x) - 1) if x \<  0](https://developer.apple.commedia-2903539)

## Topics

### Initializers

- [initWithDevice:a:](mpscnnneuronelu/init%28device_a_%29.md): Deprecated. Initializes a parametric ELU neuron filter.

## Relationships

### Inherits From

- [MPSCNNNeuron](mpscnnneuron.md)

## See Also

### Neuron Layers

- [MPSCNNNeuronAbsolute](mpscnnneuronabsolute.md): An absolute neuron filter.
- [MPSCNNNeuronHardSigmoid](mpscnnneuronhardsigmoid.md): A hard sigmoid neuron filter.
- [MPSCNNNeuronLinear](mpscnnneuronlinear.md): A linear neuron filter.
- [MPSCNNNeuronPReLU](mpscnnneuronprelu.md): A parametric ReLU (Rectified Linear Unit) neuron filter.
- [MPSCNNNeuronReLUN](mpscnnneuronrelun.md): A ReLUN neuron filter.
- [MPSCNNNeuronReLU](mpscnnneuronrelu.md): A ReLU (Rectified Linear Unit) neuron filter.
- [MPSCNNNeuronSigmoid](mpscnnneuronsigmoid.md): A sigmoid neuron filter.
- [MPSCNNNeuronSoftPlus](mpscnnneuronsoftplus.md): A parametric softplus neuron filter.
- [MPSCNNNeuronSoftSign](mpscnnneuronsoftsign.md): A softsign neuron filter.
- [MPSCNNNeuronTanH](mpscnnneurontanh.md): A hyperbolic tangent neuron filter.
- [MPSCNNNeuron](mpscnnneuron.md): A filter that applies a neuron activation function.
- [MPSCNNNeuronExponential](mpscnnneuronexponential.md): An exponential neuron filter.
- [MPSCNNNeuronGradient](mpscnnneurongradient.md): A gradient neuron filter.
- [MPSCNNNeuronLogarithm](mpscnnneuronlogarithm.md): A logarithm neuron filter.
- [MPSCNNNeuronPower](mpscnnneuronpower.md): A power neuron filter.
