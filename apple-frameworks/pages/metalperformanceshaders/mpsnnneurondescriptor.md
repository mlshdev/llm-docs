> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnneurondescriptor](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnneurondescriptor)

# MPSNNNeuronDescriptor (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

An object that specifies properties used by a neuron kernel.

## Declaration

```swift
class MPSNNNeuronDescriptor
```

## Topics

### Instance Properties

- [a](mpsnnneurondescriptor/a.md)
- [b](mpsnnneurondescriptor/b.md)
- [c](mpsnnneurondescriptor/c.md)
- [data](mpsnnneurondescriptor/data.md)
- [neuronType](mpsnnneurondescriptor/neurontype.md)

### Type Methods

- [cnnNeuronDescriptor(with:)](mpsnnneurondescriptor/cnnneurondescriptor%28with_%29.md)
- [cnnNeuronDescriptor(with:a:)](mpsnnneurondescriptor/cnnneurondescriptor%28with_a_%29.md)
- [cnnNeuronDescriptor(with:a:b:)](mpsnnneurondescriptor/cnnneurondescriptor%28with_a_b_%29.md)
- [cnnNeuronDescriptor(with:a:b:c:)](mpsnnneurondescriptor/cnnneurondescriptor%28with_a_b_c_%29.md)
- [cnnNeuronPReLUDescriptor(with:noCopy:)](mpsnnneurondescriptor/cnnneuronpreludescriptor%28with_nocopy_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [MPSCNNNeuron](mpscnnneuron.md): A filter that applies a neuron activation function.
- [MPSCNNNeuronExponential](mpscnnneuronexponential.md): An exponential neuron filter.
- [MPSCNNNeuronGradient](mpscnnneurongradient.md): A gradient neuron filter.
- [MPSCNNNeuronLogarithm](mpscnnneuronlogarithm.md): A logarithm neuron filter.

# MPSNNNeuronDescriptor (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

An object that specifies properties used by a neuron kernel.

## Declaration

```objectivec
@interface MPSNNNeuronDescriptor : NSObject
```

## Topics

### Instance Properties

- [a](mpsnnneurondescriptor/a.md)
- [b](mpsnnneurondescriptor/b.md)
- [c](mpsnnneurondescriptor/c.md)
- [data](mpsnnneurondescriptor/data.md)
- [neuronType](mpsnnneurondescriptor/neurontype.md)

### Type Methods

- [cnnNeuronDescriptorWithType:](mpsnnneurondescriptor/cnnneurondescriptor%28with_%29.md)
- [cnnNeuronDescriptorWithType:a:](mpsnnneurondescriptor/cnnneurondescriptor%28with_a_%29.md)
- [cnnNeuronDescriptorWithType:a:b:](mpsnnneurondescriptor/cnnneurondescriptor%28with_a_b_%29.md)
- [cnnNeuronDescriptorWithType:a:b:c:](mpsnnneurondescriptor/cnnneurondescriptor%28with_a_b_c_%29.md)
- [cnnNeuronPReLUDescriptorWithData:noCopy:](mpsnnneurondescriptor/cnnneuronpreludescriptor%28with_nocopy_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
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
- [MPSCNNNeuron](mpscnnneuron.md): A filter that applies a neuron activation function.
- [MPSCNNNeuronExponential](mpscnnneuronexponential.md): An exponential neuron filter.
- [MPSCNNNeuronGradient](mpscnnneurongradient.md): A gradient neuron filter.
- [MPSCNNNeuronLogarithm](mpscnnneuronlogarithm.md): A logarithm neuron filter.
