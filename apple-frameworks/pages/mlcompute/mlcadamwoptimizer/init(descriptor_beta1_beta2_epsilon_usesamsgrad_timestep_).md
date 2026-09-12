> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcadamwoptimizer/init(descriptor:beta1:beta2:epsilon:usesamsgrad:timestep:)](https://developer.apple.com/documentation/mlcompute/mlcadamwoptimizer/init(descriptor:beta1:beta2:epsilon:usesamsgrad:timestep:))

# init(descriptor:beta1:beta2:epsilon:usesAMSGrad:timeStep:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 15.0+ (deprecated in 17.4) · iPadOS 15.0+ (deprecated in 17.4) · Mac Catalyst 15.0+ (deprecated in 17.4) · macOS 12.0+ (deprecated in 14.3) · tvOS 15.0+ (deprecated in 17.4)

Creates an AdamW optimizer with the values you specify.

## Declaration

```swift
convenience init(descriptor optimizerDescriptor: MLCOptimizerDescriptor, beta1: Float, beta2: Float, epsilon: Float, usesAMSGrad: Bool, timeStep: Int)
```

## Parameters

- `optimizerDescriptor`: An object for configuring the optimizer.
- `beta1`: The coefficent for computing running averages of gradient. The default value is `0.9`.
- `beta2`: The coefficent for computing running averages of square of gradient. The default value is `0.999`.
- `epsilon`: The epsilon value for improving numerical stability. The default value is `1e-8`.
- `usesAMSGrad`: A Boolean value that indicates whether to use a variant of the algorithm. The default value is `false`.
- `timeStep`: The initial timestep for the update. The default value is `1`.

## See Also

### Creating an AdamW Optimizer

- [init(descriptor:)](init%28descriptor_%29.md): Deprecated. Creates a default optimizer with the descriptor you specify.

# optimizerWithDescriptor:beta1:beta2:epsilon:usesAMSGrad:timeStep: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 15.0+ (deprecated in 17.4) · iPadOS 15.0+ (deprecated in 17.4) · Mac Catalyst 15.0+ (deprecated in 17.4) · macOS 12.0+ (deprecated in 14.3) · tvOS 15.0+ (deprecated in 17.4)

Creates an AdamW optimizer with the values you specify.

## Declaration

```objectivec
+ (instancetype) optimizerWithDescriptor:(MLCOptimizerDescriptor *) optimizerDescriptor beta1:(float) beta1 beta2:(float) beta2 epsilon:(float) epsilon usesAMSGrad:(BOOL) usesAMSGrad timeStep:(NSUInteger) timeStep;
```

## Parameters

- `optimizerDescriptor`: An object for configuring the optimizer.
- `beta1`: The coefficent for computing running averages of gradient. The default value is `0.9`.
- `beta2`: The coefficent for computing running averages of square of gradient. The default value is `0.999`.
- `epsilon`: The epsilon value for improving numerical stability. The default value is `1e-8`.
- `usesAMSGrad`: A Boolean value that indicates whether to use a variant of the algorithm. The default value is `false`.
- `timeStep`: The initial timestep for the update. The default value is `1`.

## See Also

### Creating an AdamW Optimizer

- [optimizerWithDescriptor:](init%28descriptor_%29.md): Deprecated. Creates a default optimizer with the descriptor you specify.
