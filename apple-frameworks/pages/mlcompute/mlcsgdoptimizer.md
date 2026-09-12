> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcsgdoptimizer](https://developer.apple.com/documentation/mlcompute/mlcsgdoptimizer)

# MLCSGDOptimizer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

An optimizer that represents the stochastic gradient decent algorithm.

## Declaration

```swift
class MLCSGDOptimizer
```

## Topics

### Creating an SGD Optimizer

- [init(descriptor:)](mlcsgdoptimizer/init%28descriptor_%29.md): Deprecated. Creates an SGD optimizer with the descriptor you specify.
- [init(descriptor:momentumScale:usesNesterovMomentum:)](mlcsgdoptimizer/init%28descriptor_momentumscale_usesnesterovmomentum_%29.md): Deprecated. Create an SGD optimizer with the descriptor, momentum scale, and option to enable Nesterov momentum that you specify.

### Inspecting an SGD Optimizer

- [momentumScale](mlcsgdoptimizer/momentumscale.md): Deprecated. A hyper-parameter specifying the momentum factor.
- [usesNesterovMomentum](mlcsgdoptimizer/usesnesterovmomentum.md): Deprecated. A Boolean that indicates whether you enable Nesterov momentum.

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

- [MLCRMSPropOptimizer](mlcrmspropoptimizer.md): Deprecated. An optimizer that represents the root mean square propagation algorithm.
- [MLCAdamOptimizer](mlcadamoptimizer.md): Deprecated. An optimizer that represents the adaptive moment estimation algorithm.
- [MLCAdamWOptimizer](mlcadamwoptimizer.md): Deprecated. An optimizer that represents the Adam algorithm with weight decay.
- [MLCOptimizer](mlcoptimizer.md): Deprecated. The base class for all framework optimizers.

# MLCSGDOptimizer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

An optimizer that represents the stochastic gradient decent algorithm.

## Declaration

```objectivec
@interface MLCSGDOptimizer : MLCOptimizer
```

## Topics

### Creating an SGD Optimizer

- [optimizerWithDescriptor:](mlcsgdoptimizer/init%28descriptor_%29.md): Deprecated. Creates an SGD optimizer with the descriptor you specify.
- [optimizerWithDescriptor:momentumScale:usesNesterovMomentum:](mlcsgdoptimizer/init%28descriptor_momentumscale_usesnesterovmomentum_%29.md): Deprecated. Create an SGD optimizer with the descriptor, momentum scale, and option to enable Nesterov momentum that you specify.

### Inspecting an SGD Optimizer

- [momentumScale](mlcsgdoptimizer/momentumscale.md): Deprecated. A hyper-parameter specifying the momentum factor.
- [usesNesterovMomentum](mlcsgdoptimizer/usesnesterovmomentum.md): Deprecated. A Boolean that indicates whether you enable Nesterov momentum.

## Relationships

### Inherits From

- [MLCOptimizer](mlcoptimizer.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Optimizer Types

- [MLCRMSPropOptimizer](mlcrmspropoptimizer.md): Deprecated. An optimizer that represents the root mean square propagation algorithm.
- [MLCAdamOptimizer](mlcadamoptimizer.md): Deprecated. An optimizer that represents the adaptive moment estimation algorithm.
- [MLCAdamWOptimizer](mlcadamwoptimizer.md): Deprecated. An optimizer that represents the Adam algorithm with weight decay.
- [MLCOptimizer](mlcoptimizer.md): Deprecated. The base class for all framework optimizers.
