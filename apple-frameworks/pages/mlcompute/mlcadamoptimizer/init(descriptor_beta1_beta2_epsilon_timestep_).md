> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcadamoptimizer/init(descriptor:beta1:beta2:epsilon:timestep:)](https://developer.apple.com/documentation/mlcompute/mlcadamoptimizer/init(descriptor:beta1:beta2:epsilon:timestep:))

# init(descriptor:beta1:beta2:epsilon:timeStep:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an Adam optimizer with the values you specify.

## Declaration

```swift
convenience init(descriptor optimizerDescriptor: MLCOptimizerDescriptor, beta1: Float, beta2: Float, epsilon: Float, timeStep: Int)
```

## Parameters

- `optimizerDescriptor`: An object for configuring the optimizer.
- `beta1`: The coefficent for computing running averages of gradient. The default value is `0.9`.
- `beta2`: The coefficent for computing running averages of square of gradient. The default value is `0.999`.
- `epsilon`: The epsilon value for improving numerical stability. The default value is `1e-8`.
- `timeStep`: The initial timestep for the update. The default value is `1`.

## See Also

### Creating an Adam Optimizer

- [init(descriptor:)](init%28descriptor_%29.md): Deprecated. Creates an Adam optimizer with the descriptor you specify.
- [init(descriptor:beta1:beta2:epsilon:usesAMSGrad:timeStep:)](init%28descriptor_beta1_beta2_epsilon_usesamsgrad_timestep_%29.md): Deprecated. Creates an Adam optimizer with the values you specify.

# optimizerWithDescriptor:beta1:beta2:epsilon:timeStep: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an Adam optimizer with the values you specify.

## Declaration

```objectivec
+ (instancetype) optimizerWithDescriptor:(MLCOptimizerDescriptor *) optimizerDescriptor beta1:(float) beta1 beta2:(float) beta2 epsilon:(float) epsilon timeStep:(NSUInteger) timeStep;
```

## Parameters

- `optimizerDescriptor`: An object for configuring the optimizer.
- `beta1`: The coefficent for computing running averages of gradient. The default value is `0.9`.
- `beta2`: The coefficent for computing running averages of square of gradient. The default value is `0.999`.
- `epsilon`: The epsilon value for improving numerical stability. The default value is `1e-8`.
- `timeStep`: The initial timestep for the update. The default value is `1`.

## See Also

### Creating an Adam Optimizer

- [optimizerWithDescriptor:](init%28descriptor_%29.md): Deprecated. Creates an Adam optimizer with the descriptor you specify.
- [optimizerWithDescriptor:beta1:beta2:epsilon:usesAMSGrad:timeStep:](init%28descriptor_beta1_beta2_epsilon_usesamsgrad_timestep_%29.md): Deprecated. Creates an Adam optimizer with the values you specify.
