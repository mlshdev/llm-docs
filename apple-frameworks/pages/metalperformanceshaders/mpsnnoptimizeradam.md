> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnoptimizeradam](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnoptimizeradam)

# MPSNNOptimizerAdam (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

An optimization layer that performs an Adam pdate.

## Declaration

```swift
class MPSNNOptimizerAdam
```

## Topics

### Initializers

- [init(device:beta1:beta2:epsilon:timeStep:optimizerDescriptor:)](mpsnnoptimizeradam/init%28device_beta1_beta2_epsilon_timestep_optimizerdescriptor_%29.md)
- [init(device:learningRate:)](mpsnnoptimizeradam/init%28device_learningrate_%29.md)

### Instance Properties

- [beta1](mpsnnoptimizeradam/beta1.md)
- [beta2](mpsnnoptimizeradam/beta2.md)
- [epsilon](mpsnnoptimizeradam/epsilon.md)
- [timeStep](mpsnnoptimizeradam/timestep.md)

### Instance Methods

- [encode(commandBuffer:batchNormalizationGradientState:batchNormalizationSourceState:inputMomentumVectors:inputVelocityVectors:maximumVelocityVectors:resultState:)](mpsnnoptimizeradam/encode%28commandbuffer_batchnormalizationgradientstate_batchnormalizationsourcestate_inputmomentumvectors_inputvelocityvectors_maximumvelocityvectors_resultstate_%29.md)
- [encode(commandBuffer:batchNormalizationGradientState:batchNormalizationSourceState:inputMomentumVectors:inputVelocityVectors:resultState:)](mpsnnoptimizeradam/encode%28commandbuffer_batchnormalizationgradientstate_batchnormalizationsourcestate_inputmomentumvectors_inputvelocityvectors_resultstate_%29.md)
- [encode(commandBuffer:batchNormalizationState:inputMomentumVectors:inputVelocityVectors:maximumVelocityVectors:resultState:)](mpsnnoptimizeradam/encode%28commandbuffer_batchnormalizationstate_inputmomentumvectors_inputvelocityvectors_maximumvelocityvectors_resultstate_%29.md)
- [encode(commandBuffer:batchNormalizationState:inputMomentumVectors:inputVelocityVectors:resultState:)](mpsnnoptimizeradam/encode%28commandbuffer_batchnormalizationstate_inputmomentumvectors_inputvelocityvectors_resultstate_%29.md)
- [encode(commandBuffer:convolutionGradientState:convolutionSourceState:inputMomentumVectors:inputVelocityVectors:maximumVelocityVectors:resultState:)](mpsnnoptimizeradam/encode%28commandbuffer_convolutiongradientstate_convolutionsourcestate_inputmomentumvectors_inputvelocityvectors_maximumvelocityvectors_resultstate_%29.md)
- [encode(commandBuffer:convolutionGradientState:convolutionSourceState:inputMomentumVectors:inputVelocityVectors:resultState:)](mpsnnoptimizeradam/encode%28commandbuffer_convolutiongradientstate_convolutionsourcestate_inputmomentumvectors_inputvelocityvectors_resultstate_%29.md)
- [encode(commandBuffer:inputGradientMatrix:inputValuesMatrix:inputMomentumMatrix:inputVelocityMatrix:maximumVelocityMatrix:resultValuesMatrix:)](mpsnnoptimizeradam/encode%28commandbuffer_inputgradientmatrix_inputvaluesmatrix_inputmomentummatrix_inputvelocitymatrix_maximumvelocitymatrix_resultvaluesmatrix_%29.md)
- [encode(commandBuffer:inputGradientMatrix:inputValuesMatrix:inputMomentumMatrix:inputVelocityMatrix:resultValuesMatrix:)](mpsnnoptimizeradam/encode%28commandbuffer_inputgradientmatrix_inputvaluesmatrix_inputmomentummatrix_inputvelocitymatrix_resultvaluesmatrix_%29.md)
- [encode(commandBuffer:inputGradientVector:inputValuesVector:inputMomentumVector:inputVelocityVector:maximumVelocityVector:resultValuesVector:)](mpsnnoptimizeradam/encode%28commandbuffer_inputgradientvector_inputvaluesvector_inputmomentumvector_inputvelocityvector_maximumvelocityvector_resultvaluesvector_%29.md)
- [encode(commandBuffer:inputGradientVector:inputValuesVector:inputMomentumVector:inputVelocityVector:resultValuesVector:)](mpsnnoptimizeradam/encode%28commandbuffer_inputgradientvector_inputvaluesvector_inputmomentumvector_inputvelocityvector_resultvaluesvector_%29.md)

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

- [MPSNNOptimizerRMSProp](mpsnnoptimizerrmsprop.md): An optimization layer that performs a root mean square propagation update.
- [MPSNNOptimizerStochasticGradientDescent](mpsnnoptimizerstochasticgradientdescent.md): An optimization layer that performs a gradient descent with an optional momentum update.
- [MPSNNOptimizer](mpsnnoptimizer.md): The base class for optimization layers.
- [MPSNNOptimizerDescriptor](mpsnnoptimizerdescriptor.md): An object that specifies properties used by an optimizer kernel.

# MPSNNOptimizerAdam (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

An optimization layer that performs an Adam pdate.

## Declaration

```objectivec
@interface MPSNNOptimizerAdam : MPSNNOptimizer
```

## Topics

### Instance Properties

- [beta1](mpsnnoptimizeradam/beta1.md)
- [beta2](mpsnnoptimizeradam/beta2.md)
- [epsilon](mpsnnoptimizeradam/epsilon.md)
- [timeStep](mpsnnoptimizeradam/timestep.md)

### Instance Methods

- [encodeToCommandBuffer:batchNormalizationGradientState:batchNormalizationSourceState:inputMomentumVectors:inputVelocityVectors:maximumVelocityVectors:resultState:](mpsnnoptimizeradam/encode%28commandbuffer_batchnormalizationgradientstate_batchnormalizationsourcestate_inputmomentumvectors_inputvelocityvectors_maximumvelocityvectors_resultstate_%29.md)
- [encodeToCommandBuffer:batchNormalizationGradientState:batchNormalizationSourceState:inputMomentumVectors:inputVelocityVectors:resultState:](mpsnnoptimizeradam/encode%28commandbuffer_batchnormalizationgradientstate_batchnormalizationsourcestate_inputmomentumvectors_inputvelocityvectors_resultstate_%29.md)
- [encodeToCommandBuffer:batchNormalizationState:inputMomentumVectors:inputVelocityVectors:maximumVelocityVectors:resultState:](mpsnnoptimizeradam/encode%28commandbuffer_batchnormalizationstate_inputmomentumvectors_inputvelocityvectors_maximumvelocityvectors_resultstate_%29.md)
- [encodeToCommandBuffer:batchNormalizationState:inputMomentumVectors:inputVelocityVectors:resultState:](mpsnnoptimizeradam/encode%28commandbuffer_batchnormalizationstate_inputmomentumvectors_inputvelocityvectors_resultstate_%29.md)
- [encodeToCommandBuffer:convolutionGradientState:convolutionSourceState:inputMomentumVectors:inputVelocityVectors:maximumVelocityVectors:resultState:](mpsnnoptimizeradam/encode%28commandbuffer_convolutiongradientstate_convolutionsourcestate_inputmomentumvectors_inputvelocityvectors_maximumvelocityvectors_resultstate_%29.md)
- [encodeToCommandBuffer:convolutionGradientState:convolutionSourceState:inputMomentumVectors:inputVelocityVectors:resultState:](mpsnnoptimizeradam/encode%28commandbuffer_convolutiongradientstate_convolutionsourcestate_inputmomentumvectors_inputvelocityvectors_resultstate_%29.md)
- [encodeToCommandBuffer:inputGradientMatrix:inputValuesMatrix:inputMomentumMatrix:inputVelocityMatrix:maximumVelocityMatrix:resultValuesMatrix:](mpsnnoptimizeradam/encode%28commandbuffer_inputgradientmatrix_inputvaluesmatrix_inputmomentummatrix_inputvelocitymatrix_maximumvelocitymatrix_resultvaluesmatrix_%29.md)
- [encodeToCommandBuffer:inputGradientMatrix:inputValuesMatrix:inputMomentumMatrix:inputVelocityMatrix:resultValuesMatrix:](mpsnnoptimizeradam/encode%28commandbuffer_inputgradientmatrix_inputvaluesmatrix_inputmomentummatrix_inputvelocitymatrix_resultvaluesmatrix_%29.md)
- [encodeToCommandBuffer:inputGradientVector:inputValuesVector:inputMomentumVector:inputVelocityVector:maximumVelocityVector:resultValuesVector:](mpsnnoptimizeradam/encode%28commandbuffer_inputgradientvector_inputvaluesvector_inputmomentumvector_inputvelocityvector_maximumvelocityvector_resultvaluesvector_%29.md)
- [encodeToCommandBuffer:inputGradientVector:inputValuesVector:inputMomentumVector:inputVelocityVector:resultValuesVector:](mpsnnoptimizeradam/encode%28commandbuffer_inputgradientvector_inputvaluesvector_inputmomentumvector_inputvelocityvector_resultvaluesvector_%29.md)
- [initWithDevice:beta1:beta2:epsilon:timeStep:optimizerDescriptor:](mpsnnoptimizeradam/init%28device_beta1_beta2_epsilon_timestep_optimizerdescriptor_%29.md)
- [initWithDevice:learningRate:](mpsnnoptimizeradam/init%28device_learningrate_%29.md)

## Relationships

### Inherits From

- [MPSNNOptimizer](mpsnnoptimizer.md)

## See Also

### Optimization Layers

- [MPSNNOptimizerRMSProp](mpsnnoptimizerrmsprop.md): An optimization layer that performs a root mean square propagation update.
- [MPSNNOptimizerStochasticGradientDescent](mpsnnoptimizerstochasticgradientdescent.md): An optimization layer that performs a gradient descent with an optional momentum update.
- [MPSNNOptimizer](mpsnnoptimizer.md): The base class for optimization layers.
- [MPSNNOptimizerDescriptor](mpsnnoptimizerdescriptor.md): An object that specifies properties used by an optimizer kernel.
