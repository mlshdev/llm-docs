> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcadamoptimizer](https://developer.apple.com/documentation/mlcompute/mlcadamoptimizer)

# MLCAdamOptimizer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

An optimizer that represents the adaptive moment estimation algorithm.

## Declaration

```swift
class MLCAdamOptimizer
```

## Topics

### Creating an Adam Optimizer

- [init(descriptor:)](mlcadamoptimizer/init%28descriptor_%29.md): Deprecated. Creates an Adam optimizer with the descriptor you specify.
- [init(descriptor:beta1:beta2:epsilon:timeStep:)](mlcadamoptimizer/init%28descriptor_beta1_beta2_epsilon_timestep_%29.md): Deprecated. Creates an Adam optimizer with the values you specify.
- [init(descriptor:beta1:beta2:epsilon:usesAMSGrad:timeStep:)](mlcadamoptimizer/init%28descriptor_beta1_beta2_epsilon_usesamsgrad_timestep_%29.md): Deprecated. Creates an Adam optimizer with the values you specify.

### Inspecting an Adam Optimizer

- [beta1](mlcadamoptimizer/beta1.md): Deprecated. The coefficent for computing running averages of gradient.
- [beta2](mlcadamoptimizer/beta2.md): Deprecated. The coefficent for computing running averages of square of gradient.
- [epsilon](mlcadamoptimizer/epsilon.md): Deprecated. The epsilon value for improving numerical stability.
- [timeStep](mlcadamoptimizer/timestep.md): Deprecated. The initial timestep for the update.
- [usesAMSGrad](mlcadamoptimizer/usesamsgrad.md): Deprecated. A Boolean value that indicates whether to use a variant of the algorithm.

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
- [MLCAdamWOptimizer](mlcadamwoptimizer.md): Deprecated. An optimizer that represents the Adam algorithm with weight decay.
- [MLCOptimizer](mlcoptimizer.md): Deprecated. The base class for all framework optimizers.

# MLCAdamOptimizer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

An optimizer that represents the adaptive moment estimation algorithm.

## Declaration

```objectivec
@interface MLCAdamOptimizer : MLCOptimizer
```

## Topics

### Creating an Adam Optimizer

- [optimizerWithDescriptor:](mlcadamoptimizer/init%28descriptor_%29.md): Deprecated. Creates an Adam optimizer with the descriptor you specify.
- [optimizerWithDescriptor:beta1:beta2:epsilon:timeStep:](mlcadamoptimizer/init%28descriptor_beta1_beta2_epsilon_timestep_%29.md): Deprecated. Creates an Adam optimizer with the values you specify.
- [optimizerWithDescriptor:beta1:beta2:epsilon:usesAMSGrad:timeStep:](mlcadamoptimizer/init%28descriptor_beta1_beta2_epsilon_usesamsgrad_timestep_%29.md): Deprecated. Creates an Adam optimizer with the values you specify.

### Inspecting an Adam Optimizer

- [beta1](mlcadamoptimizer/beta1.md): Deprecated. The coefficent for computing running averages of gradient.
- [beta2](mlcadamoptimizer/beta2.md): Deprecated. The coefficent for computing running averages of square of gradient.
- [epsilon](mlcadamoptimizer/epsilon.md): Deprecated. The epsilon value for improving numerical stability.
- [timeStep](mlcadamoptimizer/timestep.md): Deprecated. The initial timestep for the update.
- [usesAMSGrad](mlcadamoptimizer/usesamsgrad.md): Deprecated. A Boolean value that indicates whether to use a variant of the algorithm.

## Relationships

### Inherits From

- [MLCOptimizer](mlcoptimizer.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Optimizer Types

- [MLCSGDOptimizer](mlcsgdoptimizer.md): Deprecated. An optimizer that represents the stochastic gradient decent algorithm.
- [MLCRMSPropOptimizer](mlcrmspropoptimizer.md): Deprecated. An optimizer that represents the root mean square propagation algorithm.
- [MLCAdamWOptimizer](mlcadamwoptimizer.md): Deprecated. An optimizer that represents the Adam algorithm with weight decay.
- [MLCOptimizer](mlcoptimizer.md): Deprecated. The base class for all framework optimizers.
