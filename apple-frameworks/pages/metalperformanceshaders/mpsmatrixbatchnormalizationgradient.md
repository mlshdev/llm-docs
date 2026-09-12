> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixbatchnormalizationgradient](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixbatchnormalizationgradient)

# MPSMatrixBatchNormalizationGradient (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A batch normalization gradient kernel that operates on matrices.

## Declaration

```swift
class MPSMatrixBatchNormalizationGradient
```

## Topics

### Initializers

- [init(coder:device:)](mpsmatrixbatchnormalizationgradient/init%28coder_device_%29.md)
- [init(device:)](mpsmatrixbatchnormalizationgradient/init%28device_%29.md)

### Instance Properties

- [epsilon](mpsmatrixbatchnormalizationgradient/epsilon.md)
- [sourceInputFeatureChannels](mpsmatrixbatchnormalizationgradient/sourceinputfeaturechannels.md)
- [sourceNumberOfFeatureVectors](mpsmatrixbatchnormalizationgradient/sourcenumberoffeaturevectors.md)

### Instance Methods

- [copy(with:device:)](mpsmatrixbatchnormalizationgradient/copy%28with_device_%29.md)
- [encode(to:gradientMatrix:inputMatrix:mean:varianceVector:gammaVector:betaVector:resultGradientForDataMatrix:resultGradientForGammaVector:resultGradientForBetaVector:)](mpsmatrixbatchnormalizationgradient/encode%28to_gradientmatrix_inputmatrix_mean_variancevector_gammavector_betavector_resultgradientfordatamatrix_resultgradientforgammavector_resultgradientforbetavector_%29.md)
- [neuronParameterA()](mpsmatrixbatchnormalizationgradient/neuronparametera%28%29.md)
- [neuronParameterB()](mpsmatrixbatchnormalizationgradient/neuronparameterb%28%29.md)
- [neuronParameterC()](mpsmatrixbatchnormalizationgradient/neuronparameterc%28%29.md)
- [neuronType()](mpsmatrixbatchnormalizationgradient/neurontype%28%29.md)
- [setNeuronType(\_:parameterA:parameterB:parameterC:)](mpsmatrixbatchnormalizationgradient/setneurontype%28__parametera_parameterb_parameterc_%29.md)

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

### Matrix Normalization Operations

- [MPSMatrixBatchNormalization](mpsmatrixbatchnormalization.md): A batch normalization kernel that operates on matrices.

# MPSMatrixBatchNormalizationGradient (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A batch normalization gradient kernel that operates on matrices.

## Declaration

```objectivec
@interface MPSMatrixBatchNormalizationGradient : MPSMatrixBinaryKernel
```

## Topics

### Instance Properties

- [epsilon](mpsmatrixbatchnormalizationgradient/epsilon.md)
- [sourceInputFeatureChannels](mpsmatrixbatchnormalizationgradient/sourceinputfeaturechannels.md)
- [sourceNumberOfFeatureVectors](mpsmatrixbatchnormalizationgradient/sourcenumberoffeaturevectors.md)

### Instance Methods

- [copyWithZone:device:](mpsmatrixbatchnormalizationgradient/copy%28with_device_%29.md)
- [encodeToCommandBuffer:gradientMatrix:inputMatrix:meanVector:varianceVector:gammaVector:betaVector:resultGradientForDataMatrix:resultGradientForGammaVector:resultGradientForBetaVector:](mpsmatrixbatchnormalizationgradient/encode%28to_gradientmatrix_inputmatrix_mean_variancevector_gammavector_betavector_resultgradientfordatamatrix_resultgradientforgammavector_resultgradientforbetavector_%29.md)
- [initWithCoder:device:](mpsmatrixbatchnormalizationgradient/init%28coder_device_%29.md)
- [initWithDevice:](mpsmatrixbatchnormalizationgradient/init%28device_%29.md)
- [neuronParameterA](mpsmatrixbatchnormalizationgradient/neuronparametera%28%29.md)
- [neuronParameterB](mpsmatrixbatchnormalizationgradient/neuronparameterb%28%29.md)
- [neuronParameterC](mpsmatrixbatchnormalizationgradient/neuronparameterc%28%29.md)
- [neuronType](mpsmatrixbatchnormalizationgradient/neurontype%28%29.md)
- [setNeuronType:parameterA:parameterB:parameterC:](mpsmatrixbatchnormalizationgradient/setneurontype%28__parametera_parameterb_parameterc_%29.md)

## Relationships

### Inherits From

- [MPSMatrixBinaryKernel](mpsmatrixbinarykernel.md)

## See Also

### Matrix Normalization Operations

- [MPSMatrixBatchNormalization](mpsmatrixbatchnormalization.md): A batch normalization kernel that operates on matrices.
