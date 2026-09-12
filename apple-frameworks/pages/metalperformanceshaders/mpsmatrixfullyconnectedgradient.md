> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixfullyconnectedgradient](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixfullyconnectedgradient)

# MPSMatrixFullyConnectedGradient (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A kernel for applying a fully gradient connected neural network layer.

## Declaration

```swift
class MPSMatrixFullyConnectedGradient
```

## Topics

### Initializers

- [init(coder:device:)](mpsmatrixfullyconnectedgradient/init%28coder_device_%29.md)
- [init(device:)](mpsmatrixfullyconnectedgradient/init%28device_%29.md)

### Instance Properties

- [alpha](mpsmatrixfullyconnectedgradient/alpha.md)
- [sourceInputFeatureChannels](mpsmatrixfullyconnectedgradient/sourceinputfeaturechannels.md)
- [sourceNumberOfFeatureVectors](mpsmatrixfullyconnectedgradient/sourcenumberoffeaturevectors.md)
- [sourceOutputFeatureChannels](mpsmatrixfullyconnectedgradient/sourceoutputfeaturechannels.md)

### Instance Methods

- [copy(with:device:)](mpsmatrixfullyconnectedgradient/copy%28with_device_%29.md)
- [encodeForData(to:gradientMatrix:weightMatrix:resultGradientForDataMatrix:)](mpsmatrixfullyconnectedgradient/encodefordata%28to_gradientmatrix_weightmatrix_resultgradientfordatamatrix_%29.md)
- [encodeForWeightsAndBias(to:gradientMatrix:inputMatrix:resultGradientForWeightMatrix:resultGradientForBiasVector:)](mpsmatrixfullyconnectedgradient/encodeforweightsandbias%28to_gradientmatrix_inputmatrix_resultgradientforweightmatrix_resultgradientforbiasvector_%29.md)

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
- [MPSMatrixNeuron](mpsmatrixneuron.md): A neuron activation kernel that operates on matrices.
- [MPSMatrixNeuronGradient](mpsmatrixneurongradient.md): A gradient neuron activation kernel that operates on matrices.

# MPSMatrixFullyConnectedGradient (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A kernel for applying a fully gradient connected neural network layer.

## Declaration

```objectivec
@interface MPSMatrixFullyConnectedGradient : MPSMatrixBinaryKernel
```

## Topics

### Instance Properties

- [alpha](mpsmatrixfullyconnectedgradient/alpha.md)
- [sourceInputFeatureChannels](mpsmatrixfullyconnectedgradient/sourceinputfeaturechannels.md)
- [sourceNumberOfFeatureVectors](mpsmatrixfullyconnectedgradient/sourcenumberoffeaturevectors.md)
- [sourceOutputFeatureChannels](mpsmatrixfullyconnectedgradient/sourceoutputfeaturechannels.md)

### Instance Methods

- [copyWithZone:device:](mpsmatrixfullyconnectedgradient/copy%28with_device_%29.md)
- [encodeGradientForDataToCommandBuffer:gradientMatrix:weightMatrix:resultGradientForDataMatrix:](mpsmatrixfullyconnectedgradient/encodefordata%28to_gradientmatrix_weightmatrix_resultgradientfordatamatrix_%29.md)
- [encodeGradientForWeightsAndBiasToCommandBuffer:gradientMatrix:inputMatrix:resultGradientForWeightMatrix:resultGradientForBiasVector:](mpsmatrixfullyconnectedgradient/encodeforweightsandbias%28to_gradientmatrix_inputmatrix_resultgradientforweightmatrix_resultgradientforbiasvector_%29.md)
- [initWithCoder:device:](mpsmatrixfullyconnectedgradient/init%28coder_device_%29.md)
- [initWithDevice:](mpsmatrixfullyconnectedgradient/init%28device_%29.md)

## Relationships

### Inherits From

- [MPSMatrixBinaryKernel](mpsmatrixbinarykernel.md)

## See Also

### Matrix Neural Network Operations

- [MPSMatrixFullyConnected](mpsmatrixfullyconnected.md): A kernel for applying a fully connected neural network layer.
- [MPSMatrixNeuron](mpsmatrixneuron.md): A neuron activation kernel that operates on matrices.
- [MPSMatrixNeuronGradient](mpsmatrixneurongradient.md): A gradient neuron activation kernel that operates on matrices.
