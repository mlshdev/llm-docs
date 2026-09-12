> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnoptimizerrmsprop](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnoptimizerrmsprop)

# MPSNNOptimizerRMSProp (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

An optimization layer that performs a root mean square propagation update.

## Declaration

```swift
class MPSNNOptimizerRMSProp
```

## Topics

### Initializers

- [init(device:decay:epsilon:optimizerDescriptor:)](mpsnnoptimizerrmsprop/init%28device_decay_epsilon_optimizerdescriptor_%29.md)
- [init(device:learningRate:)](mpsnnoptimizerrmsprop/init%28device_learningrate_%29.md)

### Instance Properties

- [decay](mpsnnoptimizerrmsprop/decay.md)
- [epsilon](mpsnnoptimizerrmsprop/epsilon.md)

### Instance Methods

- [encode(commandBuffer:batchNormalizationGradientState:batchNormalizationSourceState:inputSumOfSquaresVectors:resultState:)](mpsnnoptimizerrmsprop/encode%28commandbuffer_batchnormalizationgradientstate_batchnormalizationsourcestate_inputsumofsquaresvectors_resultstate_%29.md)
- [encode(commandBuffer:batchNormalizationState:inputSumOfSquaresVectors:resultState:)](mpsnnoptimizerrmsprop/encode%28commandbuffer_batchnormalizationstate_inputsumofsquaresvectors_resultstate_%29.md)
- [encode(commandBuffer:convolutionGradientState:convolutionSourceState:inputSumOfSquaresVectors:resultState:)](mpsnnoptimizerrmsprop/encode%28commandbuffer_convolutiongradientstate_convolutionsourcestate_inputsumofsquaresvectors_resultstate_%29.md)
- [encode(commandBuffer:inputGradientMatrix:inputValuesMatrix:inputSumOfSquaresMatrix:resultValuesMatrix:)](mpsnnoptimizerrmsprop/encode%28commandbuffer_inputgradientmatrix_inputvaluesmatrix_inputsumofsquaresmatrix_resultvaluesmatrix_%29.md)
- [encode(commandBuffer:inputGradientVector:inputValuesVector:inputSumOfSquaresVector:resultValuesVector:)](mpsnnoptimizerrmsprop/encode%28commandbuffer_inputgradientvector_inputvaluesvector_inputsumofsquaresvector_resultvaluesvector_%29.md)

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
- [MPSNNOptimizerStochasticGradientDescent](mpsnnoptimizerstochasticgradientdescent.md): An optimization layer that performs a gradient descent with an optional momentum update.
- [MPSNNOptimizer](mpsnnoptimizer.md): The base class for optimization layers.
- [MPSNNOptimizerDescriptor](mpsnnoptimizerdescriptor.md): An object that specifies properties used by an optimizer kernel.

# MPSNNOptimizerRMSProp (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

An optimization layer that performs a root mean square propagation update.

## Declaration

```objectivec
@interface MPSNNOptimizerRMSProp : MPSNNOptimizer
```

## Topics

### Instance Properties

- [decay](mpsnnoptimizerrmsprop/decay.md)
- [epsilon](mpsnnoptimizerrmsprop/epsilon.md)

### Instance Methods

- [encodeToCommandBuffer:batchNormalizationGradientState:batchNormalizationSourceState:inputSumOfSquaresVectors:resultState:](mpsnnoptimizerrmsprop/encode%28commandbuffer_batchnormalizationgradientstate_batchnormalizationsourcestate_inputsumofsquaresvectors_resultstate_%29.md)
- [encodeToCommandBuffer:batchNormalizationState:inputSumOfSquaresVectors:resultState:](mpsnnoptimizerrmsprop/encode%28commandbuffer_batchnormalizationstate_inputsumofsquaresvectors_resultstate_%29.md)
- [encodeToCommandBuffer:convolutionGradientState:convolutionSourceState:inputSumOfSquaresVectors:resultState:](mpsnnoptimizerrmsprop/encode%28commandbuffer_convolutiongradientstate_convolutionsourcestate_inputsumofsquaresvectors_resultstate_%29.md)
- [encodeToCommandBuffer:inputGradientMatrix:inputValuesMatrix:inputSumOfSquaresMatrix:resultValuesMatrix:](mpsnnoptimizerrmsprop/encode%28commandbuffer_inputgradientmatrix_inputvaluesmatrix_inputsumofsquaresmatrix_resultvaluesmatrix_%29.md)
- [encodeToCommandBuffer:inputGradientVector:inputValuesVector:inputSumOfSquaresVector:resultValuesVector:](mpsnnoptimizerrmsprop/encode%28commandbuffer_inputgradientvector_inputvaluesvector_inputsumofsquaresvector_resultvaluesvector_%29.md)
- [initWithDevice:decay:epsilon:optimizerDescriptor:](mpsnnoptimizerrmsprop/init%28device_decay_epsilon_optimizerdescriptor_%29.md)
- [initWithDevice:learningRate:](mpsnnoptimizerrmsprop/init%28device_learningrate_%29.md)

## Relationships

### Inherits From

- [MPSNNOptimizer](mpsnnoptimizer.md)

## See Also

### Optimization Layers

- [MPSNNOptimizerAdam](mpsnnoptimizeradam.md): An optimization layer that performs an Adam pdate.
- [MPSNNOptimizerStochasticGradientDescent](mpsnnoptimizerstochasticgradientdescent.md): An optimization layer that performs a gradient descent with an optional momentum update.
- [MPSNNOptimizer](mpsnnoptimizer.md): The base class for optimization layers.
- [MPSNNOptimizerDescriptor](mpsnnoptimizerdescriptor.md): An object that specifies properties used by an optimizer kernel.
