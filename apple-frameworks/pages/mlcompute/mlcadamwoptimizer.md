> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcadamwoptimizer](https://developer.apple.com/documentation/mlcompute/mlcadamwoptimizer)

# MLCAdamWOptimizer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 15.0+ (deprecated in 17.4) · iPadOS 15.0+ (deprecated in 17.4) · Mac Catalyst 15.0+ (deprecated in 17.4) · macOS 12.0+ (deprecated in 14.3) · tvOS 15.0+ (deprecated in 17.4)

An optimizer that represents the Adam algorithm with weight decay.

## Declaration

```swift
class MLCAdamWOptimizer
```

## Topics

### Creating an AdamW Optimizer

- [init(descriptor:)](mlcadamwoptimizer/init%28descriptor_%29.md): Deprecated. Creates a default optimizer with the descriptor you specify.
- [init(descriptor:beta1:beta2:epsilon:usesAMSGrad:timeStep:)](mlcadamwoptimizer/init%28descriptor_beta1_beta2_epsilon_usesamsgrad_timestep_%29.md): Deprecated. Creates an AdamW optimizer with the values you specify.

### Inspecting an AdamW Optimizer

- [beta1](mlcadamwoptimizer/beta1.md): Deprecated. The coefficent for computing running averages of gradient.
- [beta2](mlcadamwoptimizer/beta2.md): Deprecated. The coefficent for computing running averages of square of gradient.
- [epsilon](mlcadamwoptimizer/epsilon.md): Deprecated. The epsilon value for improving numerical stability.
- [timeStep](mlcadamwoptimizer/timestep.md): Deprecated. The initial timestep for the update.
- [usesAMSGrad](mlcadamwoptimizer/usesamsgrad.md): Deprecated. A Boolean value that indicates whether to use a variant of the algorithm.

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
- [MLCRMSPropOptimizer](mlcrmspropoptimizer.md): Deprecated. An optimizer that represents the root mean square propagation algorithm.
- [MLCAdamOptimizer](mlcadamoptimizer.md): Deprecated. An optimizer that represents the adaptive moment estimation algorithm.
- [MLCOptimizer](mlcoptimizer.md): Deprecated. The base class for all framework optimizers.

# MLCAdamWOptimizer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 15.0+ (deprecated in 17.4) · iPadOS 15.0+ (deprecated in 17.4) · Mac Catalyst 15.0+ (deprecated in 17.4) · macOS 12.0+ (deprecated in 14.3) · tvOS 15.0+ (deprecated in 17.4)

An optimizer that represents the Adam algorithm with weight decay.

## Declaration

```objectivec
@interface MLCAdamWOptimizer : MLCOptimizer
```

## Topics

### Creating an AdamW Optimizer

- [optimizerWithDescriptor:](mlcadamwoptimizer/init%28descriptor_%29.md): Deprecated. Creates a default optimizer with the descriptor you specify.
- [optimizerWithDescriptor:beta1:beta2:epsilon:usesAMSGrad:timeStep:](mlcadamwoptimizer/init%28descriptor_beta1_beta2_epsilon_usesamsgrad_timestep_%29.md): Deprecated. Creates an AdamW optimizer with the values you specify.

### Inspecting an AdamW Optimizer

- [beta1](mlcadamwoptimizer/beta1.md): Deprecated. The coefficent for computing running averages of gradient.
- [beta2](mlcadamwoptimizer/beta2.md): Deprecated. The coefficent for computing running averages of square of gradient.
- [epsilon](mlcadamwoptimizer/epsilon.md): Deprecated. The epsilon value for improving numerical stability.
- [timeStep](mlcadamwoptimizer/timestep.md): Deprecated. The initial timestep for the update.
- [usesAMSGrad](mlcadamwoptimizer/usesamsgrad.md): Deprecated. A Boolean value that indicates whether to use a variant of the algorithm.

## Relationships

### Inherits From

- [MLCOptimizer](mlcoptimizer.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Optimizer Types

- [MLCSGDOptimizer](mlcsgdoptimizer.md): Deprecated. An optimizer that represents the stochastic gradient decent algorithm.
- [MLCRMSPropOptimizer](mlcrmspropoptimizer.md): Deprecated. An optimizer that represents the root mean square propagation algorithm.
- [MLCAdamOptimizer](mlcadamoptimizer.md): Deprecated. An optimizer that represents the adaptive moment estimation algorithm.
- [MLCOptimizer](mlcoptimizer.md): Deprecated. The base class for all framework optimizers.
