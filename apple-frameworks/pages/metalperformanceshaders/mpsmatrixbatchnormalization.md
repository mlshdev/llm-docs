> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixbatchnormalization](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixbatchnormalization)

# MPSMatrixBatchNormalization (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A batch normalization kernel that operates on matrices.

## Declaration

```swift
class MPSMatrixBatchNormalization
```

## Topics

### Initializers

- [init(coder:device:)](mpsmatrixbatchnormalization/init%28coder_device_%29.md)
- [init(device:)](mpsmatrixbatchnormalization/init%28device_%29.md)

### Instance Properties

- [computeStatistics](mpsmatrixbatchnormalization/computestatistics.md)
- [epsilon](mpsmatrixbatchnormalization/epsilon.md)
- [sourceInputFeatureChannels](mpsmatrixbatchnormalization/sourceinputfeaturechannels.md)
- [sourceNumberOfFeatureVectors](mpsmatrixbatchnormalization/sourcenumberoffeaturevectors.md)

### Instance Methods

- [copy(with:device:)](mpsmatrixbatchnormalization/copy%28with_device_%29.md)
- [encode(commandBuffer:inputMatrix:meanVector:varianceVector:gammaVector:betaVector:resultMatrix:)](mpsmatrixbatchnormalization/encode%28commandbuffer_inputmatrix_meanvector_variancevector_gammavector_betavector_resultmatrix_%29.md)
- [neuronParameterA()](mpsmatrixbatchnormalization/neuronparametera%28%29.md)
- [neuronParameterB()](mpsmatrixbatchnormalization/neuronparameterb%28%29.md)
- [neuronParameterC()](mpsmatrixbatchnormalization/neuronparameterc%28%29.md)
- [neuronType()](mpsmatrixbatchnormalization/neurontype%28%29.md)
- [setNeuronType(\_:parameterA:parameterB:parameterC:)](mpsmatrixbatchnormalization/setneurontype%28__parametera_parameterb_parameterc_%29.md)

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

### Matrix Normalization Operations

- [MPSMatrixBatchNormalizationGradient](mpsmatrixbatchnormalizationgradient.md): A batch normalization gradient kernel that operates on matrices.

# MPSMatrixBatchNormalization (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A batch normalization kernel that operates on matrices.

## Declaration

```objectivec
@interface MPSMatrixBatchNormalization : MPSMatrixUnaryKernel
```

## Topics

### Instance Properties

- [computeStatistics](mpsmatrixbatchnormalization/computestatistics.md)
- [epsilon](mpsmatrixbatchnormalization/epsilon.md)
- [sourceInputFeatureChannels](mpsmatrixbatchnormalization/sourceinputfeaturechannels.md)
- [sourceNumberOfFeatureVectors](mpsmatrixbatchnormalization/sourcenumberoffeaturevectors.md)

### Instance Methods

- [copyWithZone:device:](mpsmatrixbatchnormalization/copy%28with_device_%29.md)
- [encodeToCommandBuffer:inputMatrix:meanVector:varianceVector:gammaVector:betaVector:resultMatrix:](mpsmatrixbatchnormalization/encode%28commandbuffer_inputmatrix_meanvector_variancevector_gammavector_betavector_resultmatrix_%29.md)
- [initWithCoder:device:](mpsmatrixbatchnormalization/init%28coder_device_%29.md)
- [initWithDevice:](mpsmatrixbatchnormalization/init%28device_%29.md)
- [neuronParameterA](mpsmatrixbatchnormalization/neuronparametera%28%29.md)
- [neuronParameterB](mpsmatrixbatchnormalization/neuronparameterb%28%29.md)
- [neuronParameterC](mpsmatrixbatchnormalization/neuronparameterc%28%29.md)
- [neuronType](mpsmatrixbatchnormalization/neurontype%28%29.md)
- [setNeuronType:parameterA:parameterB:parameterC:](mpsmatrixbatchnormalization/setneurontype%28__parametera_parameterb_parameterc_%29.md)

## Relationships

### Inherits From

- [MPSMatrixUnaryKernel](mpsmatrixunarykernel.md)

## See Also

### Matrix Normalization Operations

- [MPSMatrixBatchNormalizationGradient](mpsmatrixbatchnormalizationgradient.md): A batch normalization gradient kernel that operates on matrices.
