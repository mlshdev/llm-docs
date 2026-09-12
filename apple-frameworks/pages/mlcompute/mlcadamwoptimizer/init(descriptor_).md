> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcadamwoptimizer/init(descriptor:)](https://developer.apple.com/documentation/mlcompute/mlcadamwoptimizer/init(descriptor:))

# init(descriptor:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 15.0+ (deprecated in 17.4) · iPadOS 15.0+ (deprecated in 17.4) · Mac Catalyst 15.0+ (deprecated in 17.4) · macOS 12.0+ (deprecated in 14.3) · tvOS 15.0+ (deprecated in 17.4)

Creates a default optimizer with the descriptor you specify.

## Declaration

```swift
convenience init(descriptor optimizerDescriptor: MLCOptimizerDescriptor)
```

## Parameters

- `optimizerDescriptor`: An object for configuring the optimizer.

<a id="return-value"></a>

## Return Value

An AdamW optimizer.

<a id="Discussion"></a>

## Discussion

Sets [beta1](beta1.md) to `0.9`, [beta2](beta2.md) to `0.999`, [epsilon](epsilon.md) to `1e-8`, [usesAMSGrad](usesamsgrad.md) to `false`, and [timeStep](timestep.md) to `1` by default.

## See Also

### Creating an AdamW Optimizer

- [init(descriptor:beta1:beta2:epsilon:usesAMSGrad:timeStep:)](init%28descriptor_beta1_beta2_epsilon_usesamsgrad_timestep_%29.md): Deprecated. Creates an AdamW optimizer with the values you specify.

# optimizerWithDescriptor: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 15.0+ (deprecated in 17.4) · iPadOS 15.0+ (deprecated in 17.4) · Mac Catalyst 15.0+ (deprecated in 17.4) · macOS 12.0+ (deprecated in 14.3) · tvOS 15.0+ (deprecated in 17.4)

Creates a default optimizer with the descriptor you specify.

## Declaration

```objectivec
+ (instancetype) optimizerWithDescriptor:(MLCOptimizerDescriptor *) optimizerDescriptor;
```

## Parameters

- `optimizerDescriptor`: An object for configuring the optimizer.

<a id="return-value"></a>

## Return Value

An AdamW optimizer.

<a id="Discussion"></a>

## Discussion

Sets [beta1](beta1.md) to `0.9`, [beta2](beta2.md) to `0.999`, [epsilon](epsilon.md) to `1e-8`, [usesAMSGrad](usesamsgrad.md) to `false`, and [timeStep](timestep.md) to `1` by default.

## See Also

### Creating an AdamW Optimizer

- [optimizerWithDescriptor:beta1:beta2:epsilon:usesAMSGrad:timeStep:](init%28descriptor_beta1_beta2_epsilon_usesamsgrad_timestep_%29.md): Deprecated. Creates an AdamW optimizer with the values you specify.
