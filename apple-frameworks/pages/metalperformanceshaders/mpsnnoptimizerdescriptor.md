> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnoptimizerdescriptor](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnoptimizerdescriptor)

# MPSNNOptimizerDescriptor (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

An object that specifies properties used by an optimizer kernel.

## Declaration

```swift
class MPSNNOptimizerDescriptor
```

## Topics

### Initializers

- [init(learningRate:gradientRescale:applyGradientClipping:gradientClipMax:gradientClipMin:regularizationType:regularizationScale:)](mpsnnoptimizerdescriptor/init%28learningrate_gradientrescale_applygradientclipping_gradientclipmax_gradientclipmin_regularizationtype_regularizationscale_%29.md)
- [init(learningRate:gradientRescale:regularizationType:regularizationScale:)](mpsnnoptimizerdescriptor/init%28learningrate_gradientrescale_regularizationtype_regularizationscale_%29.md)

### Instance Properties

- [applyGradientClipping](mpsnnoptimizerdescriptor/applygradientclipping.md)
- [gradientClipMax](mpsnnoptimizerdescriptor/gradientclipmax.md)
- [gradientClipMin](mpsnnoptimizerdescriptor/gradientclipmin.md)
- [gradientRescale](mpsnnoptimizerdescriptor/gradientrescale.md)
- [learningRate](mpsnnoptimizerdescriptor/learningrate.md)
- [regularizationScale](mpsnnoptimizerdescriptor/regularizationscale.md)
- [regularizationType](mpsnnoptimizerdescriptor/regularizationtype.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Optimization Layers

- [MPSNNOptimizerAdam](mpsnnoptimizeradam.md): An optimization layer that performs an Adam pdate.
- [MPSNNOptimizerRMSProp](mpsnnoptimizerrmsprop.md): An optimization layer that performs a root mean square propagation update.
- [MPSNNOptimizerStochasticGradientDescent](mpsnnoptimizerstochasticgradientdescent.md): An optimization layer that performs a gradient descent with an optional momentum update.
- [MPSNNOptimizer](mpsnnoptimizer.md): The base class for optimization layers.

# MPSNNOptimizerDescriptor (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

An object that specifies properties used by an optimizer kernel.

## Declaration

```objectivec
@interface MPSNNOptimizerDescriptor : NSObject
```

## Topics

### Instance Properties

- [applyGradientClipping](mpsnnoptimizerdescriptor/applygradientclipping.md)
- [gradientClipMax](mpsnnoptimizerdescriptor/gradientclipmax.md)
- [gradientClipMin](mpsnnoptimizerdescriptor/gradientclipmin.md)
- [gradientRescale](mpsnnoptimizerdescriptor/gradientrescale.md)
- [learningRate](mpsnnoptimizerdescriptor/learningrate.md)
- [regularizationScale](mpsnnoptimizerdescriptor/regularizationscale.md)
- [regularizationType](mpsnnoptimizerdescriptor/regularizationtype.md)

### Instance Methods

- [initWithLearningRate:gradientRescale:applyGradientClipping:gradientClipMax:gradientClipMin:regularizationType:regularizationScale:](mpsnnoptimizerdescriptor/init%28learningrate_gradientrescale_applygradientclipping_gradientclipmax_gradientclipmin_regularizationtype_regularizationscale_%29.md)
- [initWithLearningRate:gradientRescale:regularizationType:regularizationScale:](mpsnnoptimizerdescriptor/init%28learningrate_gradientrescale_regularizationtype_regularizationscale_%29.md)

### Type Methods

- [optimizerDescriptorWithLearningRate:gradientRescale:applyGradientClipping:gradientClipMax:gradientClipMin:regularizationType:regularizationScale:](mpsnnoptimizerdescriptor/optimizerdescriptorwithlearningrate_gradientrescale_applygradientclipping_gradientclipmax_gradientclipmin_regularizationtype_regularizationscale_.md)
- [optimizerDescriptorWithLearningRate:gradientRescale:regularizationType:regularizationScale:](mpsnnoptimizerdescriptor/optimizerdescriptorwithlearningrate_gradientrescale_regularizationtype_regularizationscale_.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Optimization Layers

- [MPSNNOptimizerAdam](mpsnnoptimizeradam.md): An optimization layer that performs an Adam pdate.
- [MPSNNOptimizerRMSProp](mpsnnoptimizerrmsprop.md): An optimization layer that performs a root mean square propagation update.
- [MPSNNOptimizerStochasticGradientDescent](mpsnnoptimizerstochasticgradientdescent.md): An optimization layer that performs a gradient descent with an optional momentum update.
- [MPSNNOptimizer](mpsnnoptimizer.md): The base class for optimization layers.
