> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixneuron](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixneuron)

# MPSMatrixNeuron (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A neuron activation kernel that operates on matrices.

## Declaration

```swift
class MPSMatrixNeuron
```

## Topics

### Initializers

- [init(coder:device:)](mpsmatrixneuron/init%28coder_device_%29.md)
- [init(device:)](mpsmatrixneuron/init%28device_%29.md)

### Instance Properties

- [alpha](mpsmatrixneuron/alpha.md)
- [sourceInputFeatureChannels](mpsmatrixneuron/sourceinputfeaturechannels.md)
- [sourceNumberOfFeatureVectors](mpsmatrixneuron/sourcenumberoffeaturevectors.md)

### Instance Methods

- [copy(with:device:)](mpsmatrixneuron/copy%28with_device_%29.md)
- [encode(commandBuffer:inputMatrix:biasVector:resultMatrix:)](mpsmatrixneuron/encode%28commandbuffer_inputmatrix_biasvector_resultmatrix_%29.md)
- [neuronParameterA()](mpsmatrixneuron/neuronparametera%28%29.md)
- [neuronParameterB()](mpsmatrixneuron/neuronparameterb%28%29.md)
- [neuronParameterC()](mpsmatrixneuron/neuronparameterc%28%29.md)
- [neuronType()](mpsmatrixneuron/neurontype%28%29.md)
- [setNeuronToPReLUWithParametersA(\_:)](mpsmatrixneuron/setneurontopreluwithparametersa%28__%29.md)
- [setNeuronType(\_:parameterA:parameterB:parameterC:)](mpsmatrixneuron/setneurontype%28__parametera_parameterb_parameterc_%29.md)

## Relationships

### Inherits From

- [MPSMatrixUnaryKernel](mpsmatrixunarykernel.md)

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

### Matrix Neural Network Operations

- [MPSMatrixFullyConnected](mpsmatrixfullyconnected.md): A kernel for applying a fully connected neural network layer.
- [MPSMatrixFullyConnectedGradient](mpsmatrixfullyconnectedgradient.md): A kernel for applying a fully gradient connected neural network layer.
- [MPSMatrixNeuronGradient](mpsmatrixneurongradient.md): A gradient neuron activation kernel that operates on matrices.

# MPSMatrixNeuron (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A neuron activation kernel that operates on matrices.

## Declaration

```objectivec
@interface MPSMatrixNeuron : MPSMatrixUnaryKernel
```

## Topics

### Instance Properties

- [alpha](mpsmatrixneuron/alpha.md)
- [sourceInputFeatureChannels](mpsmatrixneuron/sourceinputfeaturechannels.md)
- [sourceNumberOfFeatureVectors](mpsmatrixneuron/sourcenumberoffeaturevectors.md)

### Instance Methods

- [copyWithZone:device:](mpsmatrixneuron/copy%28with_device_%29.md)
- [encodeToCommandBuffer:inputMatrix:biasVector:resultMatrix:](mpsmatrixneuron/encode%28commandbuffer_inputmatrix_biasvector_resultmatrix_%29.md)
- [initWithCoder:device:](mpsmatrixneuron/init%28coder_device_%29.md)
- [initWithDevice:](mpsmatrixneuron/init%28device_%29.md)
- [neuronParameterA](mpsmatrixneuron/neuronparametera%28%29.md)
- [neuronParameterB](mpsmatrixneuron/neuronparameterb%28%29.md)
- [neuronParameterC](mpsmatrixneuron/neuronparameterc%28%29.md)
- [neuronType](mpsmatrixneuron/neurontype%28%29.md)
- [setNeuronToPReLUWithParametersA:](mpsmatrixneuron/setneurontopreluwithparametersa%28__%29.md)
- [setNeuronType:parameterA:parameterB:parameterC:](mpsmatrixneuron/setneurontype%28__parametera_parameterb_parameterc_%29.md)

## Relationships

### Inherits From

- [MPSMatrixUnaryKernel](mpsmatrixunarykernel.md)

## See Also

### Matrix Neural Network Operations

- [MPSMatrixFullyConnected](mpsmatrixfullyconnected.md): A kernel for applying a fully connected neural network layer.
- [MPSMatrixFullyConnectedGradient](mpsmatrixfullyconnectedgradient.md): A kernel for applying a fully gradient connected neural network layer.
- [MPSMatrixNeuronGradient](mpsmatrixneurongradient.md): A gradient neuron activation kernel that operates on matrices.
