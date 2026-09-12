> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixfullyconnected](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixfullyconnected)

# MPSMatrixFullyConnected (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A kernel for applying a fully connected neural network layer.

## Declaration

```swift
class MPSMatrixFullyConnected
```

## Topics

### Initializers

- [init(coder:device:)](mpsmatrixfullyconnected/init%28coder_device_%29.md)
- [init(device:)](mpsmatrixfullyconnected/init%28device_%29.md)

### Instance Properties

- [alpha](mpsmatrixfullyconnected/alpha.md)
- [sourceInputFeatureChannels](mpsmatrixfullyconnected/sourceinputfeaturechannels.md)
- [sourceNumberOfFeatureVectors](mpsmatrixfullyconnected/sourcenumberoffeaturevectors.md)
- [sourceOutputFeatureChannels](mpsmatrixfullyconnected/sourceoutputfeaturechannels.md)

### Instance Methods

- [copy(with:device:)](mpsmatrixfullyconnected/copy%28with_device_%29.md)
- [encode(commandBuffer:inputMatrix:weightMatrix:biasVector:resultMatrix:)](mpsmatrixfullyconnected/encode%28commandbuffer_inputmatrix_weightmatrix_biasvector_resultmatrix_%29.md)
- [neuronParameterA()](mpsmatrixfullyconnected/neuronparametera%28%29.md)
- [neuronParameterB()](mpsmatrixfullyconnected/neuronparameterb%28%29.md)
- [neuronParameterC()](mpsmatrixfullyconnected/neuronparameterc%28%29.md)
- [neuronType()](mpsmatrixfullyconnected/neurontype%28%29.md)
- [setNeuronType(\_:parameterA:parameterB:parameterC:)](mpsmatrixfullyconnected/setneurontype%28__parametera_parameterb_parameterc_%29.md)

## Relationships

### Inherits From

- [MPSMatrixBinaryKernel](mpsmatrixbinarykernel.md)

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

- [MPSMatrixFullyConnectedGradient](mpsmatrixfullyconnectedgradient.md): A kernel for applying a fully gradient connected neural network layer.
- [MPSMatrixNeuron](mpsmatrixneuron.md): A neuron activation kernel that operates on matrices.
- [MPSMatrixNeuronGradient](mpsmatrixneurongradient.md): A gradient neuron activation kernel that operates on matrices.

# MPSMatrixFullyConnected (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A kernel for applying a fully connected neural network layer.

## Declaration

```objectivec
@interface MPSMatrixFullyConnected : MPSMatrixBinaryKernel
```

## Topics

### Instance Properties

- [alpha](mpsmatrixfullyconnected/alpha.md)
- [sourceInputFeatureChannels](mpsmatrixfullyconnected/sourceinputfeaturechannels.md)
- [sourceNumberOfFeatureVectors](mpsmatrixfullyconnected/sourcenumberoffeaturevectors.md)
- [sourceOutputFeatureChannels](mpsmatrixfullyconnected/sourceoutputfeaturechannels.md)

### Instance Methods

- [copyWithZone:device:](mpsmatrixfullyconnected/copy%28with_device_%29.md)
- [encodeToCommandBuffer:inputMatrix:weightMatrix:biasVector:resultMatrix:](mpsmatrixfullyconnected/encode%28commandbuffer_inputmatrix_weightmatrix_biasvector_resultmatrix_%29.md)
- [initWithCoder:device:](mpsmatrixfullyconnected/init%28coder_device_%29.md)
- [initWithDevice:](mpsmatrixfullyconnected/init%28device_%29.md)
- [neuronParameterA](mpsmatrixfullyconnected/neuronparametera%28%29.md)
- [neuronParameterB](mpsmatrixfullyconnected/neuronparameterb%28%29.md)
- [neuronParameterC](mpsmatrixfullyconnected/neuronparameterc%28%29.md)
- [neuronType](mpsmatrixfullyconnected/neurontype%28%29.md)
- [setNeuronType:parameterA:parameterB:parameterC:](mpsmatrixfullyconnected/setneurontype%28__parametera_parameterb_parameterc_%29.md)

## Relationships

### Inherits From

- [MPSMatrixBinaryKernel](mpsmatrixbinarykernel.md)

## See Also

### Matrix Neural Network Operations

- [MPSMatrixFullyConnectedGradient](mpsmatrixfullyconnectedgradient.md): A kernel for applying a fully gradient connected neural network layer.
- [MPSMatrixNeuron](mpsmatrixneuron.md): A neuron activation kernel that operates on matrices.
- [MPSMatrixNeuronGradient](mpsmatrixneurongradient.md): A gradient neuron activation kernel that operates on matrices.
