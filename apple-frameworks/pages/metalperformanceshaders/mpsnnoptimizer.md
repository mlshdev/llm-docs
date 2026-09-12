> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnoptimizer](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnoptimizer)

# MPSNNOptimizer (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The base class for optimization layers.

## Declaration

```swift
class MPSNNOptimizer
```

## Topics

### Instance Properties

- [applyGradientClipping](mpsnnoptimizer/applygradientclipping.md)
- [gradientClipMax](mpsnnoptimizer/gradientclipmax.md)
- [gradientClipMin](mpsnnoptimizer/gradientclipmin.md)
- [gradientRescale](mpsnnoptimizer/gradientrescale.md)
- [learningRate](mpsnnoptimizer/learningrate.md)
- [regularizationScale](mpsnnoptimizer/regularizationscale.md)
- [regularizationType](mpsnnoptimizer/regularizationtype.md)

### Instance Methods

- [setLearningRate(\_:)](mpsnnoptimizer/setlearningrate%28__%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

### Inherited By

- [MPSNNOptimizerAdam](mpsnnoptimizeradam.md)
- [MPSNNOptimizerRMSProp](mpsnnoptimizerrmsprop.md)
- [MPSNNOptimizerStochasticGradientDescent](mpsnnoptimizerstochasticgradientdescent.md)

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
- [MPSNNOptimizerStochasticGradientDescent](mpsnnoptimizerstochasticgradientdescent.md): An optimization layer that performs a gradient descent with an optional momentum update.
- [MPSNNOptimizerDescriptor](mpsnnoptimizerdescriptor.md): An object that specifies properties used by an optimizer kernel.

# MPSNNOptimizer (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The base class for optimization layers.

## Declaration

```objectivec
@interface MPSNNOptimizer : MPSKernel
```

## Topics

### Instance Properties

- [applyGradientClipping](mpsnnoptimizer/applygradientclipping.md)
- [gradientClipMax](mpsnnoptimizer/gradientclipmax.md)
- [gradientClipMin](mpsnnoptimizer/gradientclipmin.md)
- [gradientRescale](mpsnnoptimizer/gradientrescale.md)
- [learningRate](mpsnnoptimizer/learningrate.md)
- [regularizationScale](mpsnnoptimizer/regularizationscale.md)
- [regularizationType](mpsnnoptimizer/regularizationtype.md)

### Instance Methods

- [setLearningRate:](mpsnnoptimizer/setlearningrate%28__%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

### Inherited By

- [MPSNNOptimizerAdam](mpsnnoptimizeradam.md)
- [MPSNNOptimizerRMSProp](mpsnnoptimizerrmsprop.md)
- [MPSNNOptimizerStochasticGradientDescent](mpsnnoptimizerstochasticgradientdescent.md)

## See Also

### Optimization Layers

- [MPSNNOptimizerAdam](mpsnnoptimizeradam.md): An optimization layer that performs an Adam pdate.
- [MPSNNOptimizerRMSProp](mpsnnoptimizerrmsprop.md): An optimization layer that performs a root mean square propagation update.
- [MPSNNOptimizerStochasticGradientDescent](mpsnnoptimizerstochasticgradientdescent.md): An optimization layer that performs a gradient descent with an optional momentum update.
- [MPSNNOptimizerDescriptor](mpsnnoptimizerdescriptor.md): An object that specifies properties used by an optimizer kernel.
