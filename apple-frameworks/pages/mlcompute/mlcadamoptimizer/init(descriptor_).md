> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcadamoptimizer/init(descriptor:)](https://developer.apple.com/documentation/mlcompute/mlcadamoptimizer/init(descriptor:))

# init(descriptor:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an Adam optimizer with the descriptor you specify.

## Declaration

```swift
convenience init(descriptor optimizerDescriptor: MLCOptimizerDescriptor)
```

## Parameters

- `optimizerDescriptor`: An object for configuring the optimizer.

<a id="return-value"></a>

## Return Value

An Adam optimizer.

<a id="Discussion"></a>

## Discussion

Sets [beta1](beta1.md) to `0.9`, [beta2](beta2.md) to `0.999`, [epsilon](epsilon.md) to `1e-8`, [usesAMSGrad](usesamsgrad.md) to `false`, and [timeStep](timestep.md) to `1` by default.

## See Also

### Creating an Adam Optimizer

- [init(descriptor:beta1:beta2:epsilon:timeStep:)](init%28descriptor_beta1_beta2_epsilon_timestep_%29.md): Deprecated. Creates an Adam optimizer with the values you specify.
- [init(descriptor:beta1:beta2:epsilon:usesAMSGrad:timeStep:)](init%28descriptor_beta1_beta2_epsilon_usesamsgrad_timestep_%29.md): Deprecated. Creates an Adam optimizer with the values you specify.

# optimizerWithDescriptor: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an Adam optimizer with the descriptor you specify.

## Declaration

```objectivec
+ (instancetype) optimizerWithDescriptor:(MLCOptimizerDescriptor *) optimizerDescriptor;
```

## Parameters

- `optimizerDescriptor`: An object for configuring the optimizer.

<a id="return-value"></a>

## Return Value

An Adam optimizer.

<a id="Discussion"></a>

## Discussion

Sets [beta1](beta1.md) to `0.9`, [beta2](beta2.md) to `0.999`, [epsilon](epsilon.md) to `1e-8`, [usesAMSGrad](usesamsgrad.md) to `false`, and [timeStep](timestep.md) to `1` by default.

## See Also

### Creating an Adam Optimizer

- [optimizerWithDescriptor:beta1:beta2:epsilon:timeStep:](init%28descriptor_beta1_beta2_epsilon_timestep_%29.md): Deprecated. Creates an Adam optimizer with the values you specify.
- [optimizerWithDescriptor:beta1:beta2:epsilon:usesAMSGrad:timeStep:](init%28descriptor_beta1_beta2_epsilon_usesamsgrad_timestep_%29.md): Deprecated. Creates an Adam optimizer with the values you specify.
