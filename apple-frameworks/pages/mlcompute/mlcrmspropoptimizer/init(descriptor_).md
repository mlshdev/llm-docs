> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcrmspropoptimizer/init(descriptor:)](https://developer.apple.com/documentation/mlcompute/mlcrmspropoptimizer/init(descriptor:))

# init(descriptor:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.2+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 14.0+

Creates an RMSProp optimizer with the descriptor you specify.

## Declaration

```swift
convenience init(descriptor optimizerDescriptor: MLCOptimizerDescriptor)
```

## Parameters

- `optimizerDescriptor`: An object you use to configure the optimizer.

<a id="return-value"></a>

## Return Value

An RMSProp optimizer.

<a id="Discussion"></a>

## Discussion

Sets [momentumScale](../mlcsgdoptimizer/momentumscale.md) to `0.0`, [alpha](alpha.md) to `0.99`, [epsilon](epsilon.md) to `1e-8` , and [isCentered](iscentered.md) to `false` by default.

## See Also

### Creating an RMSProp Optimizer

- [init(descriptor:momentumScale:alpha:epsilon:isCentered:)](init%28descriptor_momentumscale_alpha_epsilon_iscentered_%29.md): Deprecated. Creates an RMSProp optimizer with the descriptor, momentum scale, smoothing, epsilon, and option to compute the centered RMSProp that you specify.

# optimizerWithDescriptor: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.2+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 14.0+

Creates an RMSProp optimizer with the descriptor you specify.

## Declaration

```objectivec
+ (instancetype) optimizerWithDescriptor:(MLCOptimizerDescriptor *) optimizerDescriptor;
```

## Parameters

- `optimizerDescriptor`: An object you use to configure the optimizer.

<a id="return-value"></a>

## Return Value

An RMSProp optimizer.

<a id="Discussion"></a>

## Discussion

Sets [momentumScale](../mlcsgdoptimizer/momentumscale.md) to `0.0`, [alpha](alpha.md) to `0.99`, [epsilon](epsilon.md) to `1e-8` , and [isCentered](iscentered.md) to `false` by default.

## See Also

### Creating an RMSProp Optimizer

- [optimizerWithDescriptor:momentumScale:alpha:epsilon:isCentered:](init%28descriptor_momentumscale_alpha_epsilon_iscentered_%29.md): Deprecated. Creates an RMSProp optimizer with the descriptor, momentum scale, smoothing, epsilon, and option to compute the centered RMSProp that you specify.
