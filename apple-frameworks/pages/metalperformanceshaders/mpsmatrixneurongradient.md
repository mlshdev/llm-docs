> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixneurongradient](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixneurongradient)

# MPSMatrixNeuronGradient (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A gradient neuron activation kernel that operates on matrices.

## Declaration

```swift
class MPSMatrixNeuronGradient
```

## Topics

### Initializers

- [init(coder:device:)](mpsmatrixneurongradient/init%28coder_device_%29.md)
- [init(device:)](mpsmatrixneurongradient/init%28device_%29.md)

### Instance Properties

- [alpha](mpsmatrixneurongradient/alpha.md)
- [sourceInputFeatureChannels](mpsmatrixneurongradient/sourceinputfeaturechannels.md)
- [sourceNumberOfFeatureVectors](mpsmatrixneurongradient/sourcenumberoffeaturevectors.md)

### Instance Methods

- [copy(with:device:)](mpsmatrixneurongradient/copy%28with_device_%29.md)
- [encode(to:gradientMatrix:inputMatrix:biasVector:resultGradientForDataMatrix:resultGradientForBiasVector:)](mpsmatrixneurongradient/encode%28to_gradientmatrix_inputmatrix_biasvector_resultgradientfordatamatrix_resultgradientforbiasvector_%29.md)
- [neuronParameterA()](mpsmatrixneurongradient/neuronparametera%28%29.md)
- [neuronParameterB()](mpsmatrixneurongradient/neuronparameterb%28%29.md)
- [neuronParameterC()](mpsmatrixneurongradient/neuronparameterc%28%29.md)
- [neuronType()](mpsmatrixneurongradient/neurontype%28%29.md)
- [setNeuronToPReLUWithParametersA(\_:)](mpsmatrixneurongradient/setneurontopreluwithparametersa%28__%29.md)
- [setNeuronType(\_:parameterA:parameterB:parameterC:)](mpsmatrixneurongradient/setneurontype%28__parametera_parameterb_parameterc_%29.md)

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

- [MPSMatrixFullyConnected](mpsmatrixfullyconnected.md): A kernel for applying a fully connected neural network layer.
- [MPSMatrixFullyConnectedGradient](mpsmatrixfullyconnectedgradient.md): A kernel for applying a fully gradient connected neural network layer.
- [MPSMatrixNeuron](mpsmatrixneuron.md): A neuron activation kernel that operates on matrices.

# MPSMatrixNeuronGradient (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A gradient neuron activation kernel that operates on matrices.

## Declaration

```objectivec
@interface MPSMatrixNeuronGradient : MPSMatrixBinaryKernel
```

## Topics

### Instance Properties

- [alpha](mpsmatrixneurongradient/alpha.md)
- [sourceInputFeatureChannels](mpsmatrixneurongradient/sourceinputfeaturechannels.md)
- [sourceNumberOfFeatureVectors](mpsmatrixneurongradient/sourcenumberoffeaturevectors.md)

### Instance Methods

- [copyWithZone:device:](mpsmatrixneurongradient/copy%28with_device_%29.md)
- [encodeToCommandBuffer:gradientMatrix:inputMatrix:biasVector:resultGradientForDataMatrix:resultGradientForBiasVector:](mpsmatrixneurongradient/encode%28to_gradientmatrix_inputmatrix_biasvector_resultgradientfordatamatrix_resultgradientforbiasvector_%29.md)
- [initWithCoder:device:](mpsmatrixneurongradient/init%28coder_device_%29.md)
- [initWithDevice:](mpsmatrixneurongradient/init%28device_%29.md)
- [neuronParameterA](mpsmatrixneurongradient/neuronparametera%28%29.md)
- [neuronParameterB](mpsmatrixneurongradient/neuronparameterb%28%29.md)
- [neuronParameterC](mpsmatrixneurongradient/neuronparameterc%28%29.md)
- [neuronType](mpsmatrixneurongradient/neurontype%28%29.md)
- [setNeuronToPReLUWithParametersA:](mpsmatrixneurongradient/setneurontopreluwithparametersa%28__%29.md)
- [setNeuronType:parameterA:parameterB:parameterC:](mpsmatrixneurongradient/setneurontype%28__parametera_parameterb_parameterc_%29.md)

## Relationships

### Inherits From

- [MPSMatrixBinaryKernel](mpsmatrixbinarykernel.md)

## See Also

### Matrix Neural Network Operations

- [MPSMatrixFullyConnected](mpsmatrixfullyconnected.md): A kernel for applying a fully connected neural network layer.
- [MPSMatrixFullyConnectedGradient](mpsmatrixfullyconnectedgradient.md): A kernel for applying a fully gradient connected neural network layer.
- [MPSMatrixNeuron](mpsmatrixneuron.md): A neuron activation kernel that operates on matrices.
