> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnoptimizerstochasticgradientdescent](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnoptimizerstochasticgradientdescent)

# MPSNNOptimizerStochasticGradientDescent (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

An optimization layer that performs a gradient descent with an optional momentum update.

## Declaration

```swift
class MPSNNOptimizerStochasticGradientDescent
```

## Topics

### Initializers

- [init(device:learningRate:)](mpsnnoptimizerstochasticgradientdescent/init%28device_learningrate_%29.md)
- [init(device:momentumScale:useNesterovMomentum:optimizerDescriptor:)](mpsnnoptimizerstochasticgradientdescent/init%28device_momentumscale_usenesterovmomentum_optimizerdescriptor_%29.md)
- [init(device:momentumScale:useNestrovMomentum:optimizerDescriptor:)](mpsnnoptimizerstochasticgradientdescent/init%28device_momentumscale_usenestrovmomentum_optimizerdescriptor_%29.md)

### Instance Properties

- [momentumScale](mpsnnoptimizerstochasticgradientdescent/momentumscale.md)
- [useNesterovMomentum](mpsnnoptimizerstochasticgradientdescent/usenesterovmomentum.md)
- [useNestrovMomentum](mpsnnoptimizerstochasticgradientdescent/usenestrovmomentum.md)

### Instance Methods

- [encode(commandBuffer:batchNormalizationGradientState:batchNormalizationSourceState:inputMomentumVectors:resultState:)](mpsnnoptimizerstochasticgradientdescent/encode%28commandbuffer_batchnormalizationgradientstate_batchnormalizationsourcestate_inputmomentumvectors_resultstate_%29.md)
- [encode(commandBuffer:batchNormalizationState:inputMomentumVectors:resultState:)](mpsnnoptimizerstochasticgradientdescent/encode%28commandbuffer_batchnormalizationstate_inputmomentumvectors_resultstate_%29.md)
- [encode(commandBuffer:convolutionGradientState:convolutionSourceState:inputMomentumVectors:resultState:)](mpsnnoptimizerstochasticgradientdescent/encode%28commandbuffer_convolutiongradientstate_convolutionsourcestate_inputmomentumvectors_resultstate_%29.md)
- [encode(commandBuffer:inputGradientMatrix:inputValuesMatrix:inputMomentumMatrix:resultValuesMatrix:)](mpsnnoptimizerstochasticgradientdescent/encode%28commandbuffer_inputgradientmatrix_inputvaluesmatrix_inputmomentummatrix_resultvaluesmatrix_%29.md)
- [encode(commandBuffer:inputGradientVector:inputValuesVector:inputMomentumVector:resultValuesVector:)](mpsnnoptimizerstochasticgradientdescent/encode%28commandbuffer_inputgradientvector_inputvaluesvector_inputmomentumvector_resultvaluesvector_%29.md)

## Relationships

### Inherits From

- [MPSNNOptimizer](mpsnnoptimizer.md)

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

### Optimization Layers

- [MPSNNOptimizerAdam](mpsnnoptimizeradam.md): An optimization layer that performs an Adam pdate.
- [MPSNNOptimizerRMSProp](mpsnnoptimizerrmsprop.md): An optimization layer that performs a root mean square propagation update.
- [MPSNNOptimizer](mpsnnoptimizer.md): The base class for optimization layers.
- [MPSNNOptimizerDescriptor](mpsnnoptimizerdescriptor.md): An object that specifies properties used by an optimizer kernel.

# MPSNNOptimizerStochasticGradientDescent (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

An optimization layer that performs a gradient descent with an optional momentum update.

## Declaration

```objectivec
@interface MPSNNOptimizerStochasticGradientDescent : MPSNNOptimizer
```

## Topics

### Instance Properties

- [momentumScale](mpsnnoptimizerstochasticgradientdescent/momentumscale.md)
- [useNesterovMomentum](mpsnnoptimizerstochasticgradientdescent/usenesterovmomentum.md)
- [useNestrovMomentum](mpsnnoptimizerstochasticgradientdescent/usenestrovmomentum.md)

### Instance Methods

- [encodeToCommandBuffer:batchNormalizationGradientState:batchNormalizationSourceState:inputMomentumVectors:resultState:](mpsnnoptimizerstochasticgradientdescent/encode%28commandbuffer_batchnormalizationgradientstate_batchnormalizationsourcestate_inputmomentumvectors_resultstate_%29.md)
- [encodeToCommandBuffer:batchNormalizationState:inputMomentumVectors:resultState:](mpsnnoptimizerstochasticgradientdescent/encode%28commandbuffer_batchnormalizationstate_inputmomentumvectors_resultstate_%29.md)
- [encodeToCommandBuffer:convolutionGradientState:convolutionSourceState:inputMomentumVectors:resultState:](mpsnnoptimizerstochasticgradientdescent/encode%28commandbuffer_convolutiongradientstate_convolutionsourcestate_inputmomentumvectors_resultstate_%29.md)
- [encodeToCommandBuffer:inputGradientMatrix:inputValuesMatrix:inputMomentumMatrix:resultValuesMatrix:](mpsnnoptimizerstochasticgradientdescent/encode%28commandbuffer_inputgradientmatrix_inputvaluesmatrix_inputmomentummatrix_resultvaluesmatrix_%29.md)
- [encodeToCommandBuffer:inputGradientVector:inputValuesVector:inputMomentumVector:resultValuesVector:](mpsnnoptimizerstochasticgradientdescent/encode%28commandbuffer_inputgradientvector_inputvaluesvector_inputmomentumvector_resultvaluesvector_%29.md)
- [initWithDevice:learningRate:](mpsnnoptimizerstochasticgradientdescent/init%28device_learningrate_%29.md)
- [initWithDevice:momentumScale:useNesterovMomentum:optimizerDescriptor:](mpsnnoptimizerstochasticgradientdescent/init%28device_momentumscale_usenesterovmomentum_optimizerdescriptor_%29.md)
- [initWithDevice:momentumScale:useNestrovMomentum:optimizerDescriptor:](mpsnnoptimizerstochasticgradientdescent/init%28device_momentumscale_usenestrovmomentum_optimizerdescriptor_%29.md)

## Relationships

### Inherits From

- [MPSNNOptimizer](mpsnnoptimizer.md)

## See Also

### Optimization Layers

- [MPSNNOptimizerAdam](mpsnnoptimizeradam.md): An optimization layer that performs an Adam pdate.
- [MPSNNOptimizerRMSProp](mpsnnoptimizerrmsprop.md): An optimization layer that performs a root mean square propagation update.
- [MPSNNOptimizer](mpsnnoptimizer.md): The base class for optimization layers.
- [MPSNNOptimizerDescriptor](mpsnnoptimizerdescriptor.md): An object that specifies properties used by an optimizer kernel.
