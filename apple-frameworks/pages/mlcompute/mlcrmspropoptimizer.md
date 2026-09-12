> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcrmspropoptimizer](https://developer.apple.com/documentation/mlcompute/mlcrmspropoptimizer)

# MLCRMSPropOptimizer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.2+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 14.0+

An optimizer that represents the root mean square propagation algorithm.

## Declaration

```swift
class MLCRMSPropOptimizer
```

## Topics

### Creating an RMSProp Optimizer

- [init(descriptor:)](mlcrmspropoptimizer/init%28descriptor_%29.md): Deprecated. Creates an RMSProp optimizer with the descriptor you specify.
- [init(descriptor:momentumScale:alpha:epsilon:isCentered:)](mlcrmspropoptimizer/init%28descriptor_momentumscale_alpha_epsilon_iscentered_%29.md): Deprecated. Creates an RMSProp optimizer with the descriptor, momentum scale, smoothing, epsilon, and option to compute the centered RMSProp that you specify.

### Inspecting an RMSProp Optimizer

- [momentumScale](mlcrmspropoptimizer/momentumscale.md): Deprecated. A hyper-parameter that specifies the momentum factor.
- [alpha](mlcrmspropoptimizer/alpha.md): Deprecated. The constant for smoothing.
- [epsilon](mlcrmspropoptimizer/epsilon.md): Deprecated. The epsilon value you use to improve numerical stability.
- [isCentered](mlcrmspropoptimizer/iscentered.md): Deprecated. A Boolean that indicates whether you compute the centered RMSProp.

## Relationships

### Inherits From

- [MLCOptimizer](mlcoptimizer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Optimizer Types

- [MLCSGDOptimizer](mlcsgdoptimizer.md): Deprecated. An optimizer that represents the stochastic gradient decent algorithm.
- [MLCAdamOptimizer](mlcadamoptimizer.md): Deprecated. An optimizer that represents the adaptive moment estimation algorithm.
- [MLCAdamWOptimizer](mlcadamwoptimizer.md): Deprecated. An optimizer that represents the Adam algorithm with weight decay.
- [MLCOptimizer](mlcoptimizer.md): Deprecated. The base class for all framework optimizers.

# MLCRMSPropOptimizer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.2+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 14.0+

An optimizer that represents the root mean square propagation algorithm.

## Declaration

```objectivec
@interface MLCRMSPropOptimizer : MLCOptimizer
```

## Topics

### Creating an RMSProp Optimizer

- [optimizerWithDescriptor:](mlcrmspropoptimizer/init%28descriptor_%29.md): Deprecated. Creates an RMSProp optimizer with the descriptor you specify.
- [optimizerWithDescriptor:momentumScale:alpha:epsilon:isCentered:](mlcrmspropoptimizer/init%28descriptor_momentumscale_alpha_epsilon_iscentered_%29.md): Deprecated. Creates an RMSProp optimizer with the descriptor, momentum scale, smoothing, epsilon, and option to compute the centered RMSProp that you specify.

### Inspecting an RMSProp Optimizer

- [momentumScale](mlcrmspropoptimizer/momentumscale.md): Deprecated. A hyper-parameter that specifies the momentum factor.
- [alpha](mlcrmspropoptimizer/alpha.md): Deprecated. The constant for smoothing.
- [epsilon](mlcrmspropoptimizer/epsilon.md): Deprecated. The epsilon value you use to improve numerical stability.
- [isCentered](mlcrmspropoptimizer/iscentered.md): Deprecated. A Boolean that indicates whether you compute the centered RMSProp.

## Relationships

### Inherits From

- [MLCOptimizer](mlcoptimizer.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Optimizer Types

- [MLCSGDOptimizer](mlcsgdoptimizer.md): Deprecated. An optimizer that represents the stochastic gradient decent algorithm.
- [MLCAdamOptimizer](mlcadamoptimizer.md): Deprecated. An optimizer that represents the adaptive moment estimation algorithm.
- [MLCAdamWOptimizer](mlcadamwoptimizer.md): Deprecated. An optimizer that represents the Adam algorithm with weight decay.
- [MLCOptimizer](mlcoptimizer.md): Deprecated. The base class for all framework optimizers.
