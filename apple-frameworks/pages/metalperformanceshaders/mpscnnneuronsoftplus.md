> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnneuronsoftplus](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnneuronsoftplus)

# MPSCNNNeuronSoftPlus (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A parametric softplus neuron filter.

## Declaration

```swift
class MPSCNNNeuronSoftPlus
```

<a id="overview"></a>

## Overview

For each pixel in an image, the filter applies the following function:

![f(x) = a \* log(1 + e^(b \* x))](https://developer.apple.com/images/com.apple.metalperformanceshaders/media-2903546@2x.png)

## Topics

### Initializers

- [init(device:a:b:)](mpscnnneuronsoftplus/init%28device_a_b_%29.md): Deprecated. Initializes a parametric softplus neuron filter.

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
- [MPSCNNNeuronELU](mpscnnneuronelu.md): A parametric ELU neuron filter.
- [MPSCNNNeuronHardSigmoid](mpscnnneuronhardsigmoid.md): A hard sigmoid neuron filter.
- [MPSCNNNeuronLinear](mpscnnneuronlinear.md): A linear neuron filter.
- [MPSCNNNeuronPReLU](mpscnnneuronprelu.md): A parametric ReLU (Rectified Linear Unit) neuron filter.
- [MPSCNNNeuronReLUN](mpscnnneuronrelun.md): A ReLUN neuron filter.
- [MPSCNNNeuronReLU](mpscnnneuronrelu.md): A ReLU (Rectified Linear Unit) neuron filter.
- [MPSCNNNeuronSigmoid](mpscnnneuronsigmoid.md): A sigmoid neuron filter.
- [MPSCNNNeuronSoftSign](mpscnnneuronsoftsign.md): A softsign neuron filter.
- [MPSCNNNeuronTanH](mpscnnneurontanh.md): A hyperbolic tangent neuron filter.
- [MPSCNNNeuron](mpscnnneuron.md): A filter that applies a neuron activation function.
- [MPSCNNNeuronExponential](mpscnnneuronexponential.md): An exponential neuron filter.
- [MPSCNNNeuronGradient](mpscnnneurongradient.md): A gradient neuron filter.
- [MPSCNNNeuronLogarithm](mpscnnneuronlogarithm.md): A logarithm neuron filter.
- [MPSCNNNeuronPower](mpscnnneuronpower.md): A power neuron filter.

# MPSCNNNeuronSoftPlus (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A parametric softplus neuron filter.

## Declaration

```objectivec
@interface MPSCNNNeuronSoftPlus : MPSCNNNeuron
```

<a id="overview"></a>

## Overview

For each pixel in an image, the filter applies the following function:

![f(x) = a \* log(1 + e^(b \* x))](https://developer.apple.com/images/com.apple.metalperformanceshaders/media-2903546@2x.png)

## Topics

### Initializers

- [initWithDevice:a:b:](mpscnnneuronsoftplus/init%28device_a_b_%29.md): Deprecated. Initializes a parametric softplus neuron filter.

## Relationships

### Inherits From

- [MPSCNNNeuron](mpscnnneuron.md)

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
- [MPSCNNNeuronSoftSign](mpscnnneuronsoftsign.md): A softsign neuron filter.
- [MPSCNNNeuronTanH](mpscnnneurontanh.md): A hyperbolic tangent neuron filter.
- [MPSCNNNeuron](mpscnnneuron.md): A filter that applies a neuron activation function.
- [MPSCNNNeuronExponential](mpscnnneuronexponential.md): An exponential neuron filter.
- [MPSCNNNeuronGradient](mpscnnneurongradient.md): A gradient neuron filter.
- [MPSCNNNeuronLogarithm](mpscnnneuronlogarithm.md): A logarithm neuron filter.
- [MPSCNNNeuronPower](mpscnnneuronpower.md): A power neuron filter.
