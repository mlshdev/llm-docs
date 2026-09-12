> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcsgdoptimizer/init(descriptor:)](https://developer.apple.com/documentation/mlcompute/mlcsgdoptimizer/init(descriptor:))

# init(descriptor:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an SGD optimizer with the descriptor you specify.

## Declaration

```swift
convenience init(descriptor optimizerDescriptor: MLCOptimizerDescriptor)
```

## Parameters

- `optimizerDescriptor`: An object you use to configure the optimizer.

<a id="return-value"></a>

## Return Value

An SGD optimizer.

<a id="Discussion"></a>

## Discussion

Sets [momentumScale](momentumscale.md) to `0.0` and [usesNesterovMomentum](usesnesterovmomentum.md) to `false` by default.

## See Also

### Creating an SGD Optimizer

- [init(descriptor:momentumScale:usesNesterovMomentum:)](init%28descriptor_momentumscale_usesnesterovmomentum_%29.md): Deprecated. Create an SGD optimizer with the descriptor, momentum scale, and option to enable Nesterov momentum that you specify.

# optimizerWithDescriptor: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an SGD optimizer with the descriptor you specify.

## Declaration

```objectivec
+ (instancetype) optimizerWithDescriptor:(MLCOptimizerDescriptor *) optimizerDescriptor;
```

## Parameters

- `optimizerDescriptor`: An object you use to configure the optimizer.

<a id="return-value"></a>

## Return Value

An SGD optimizer.

<a id="Discussion"></a>

## Discussion

Sets [momentumScale](momentumscale.md) to `0.0` and [usesNesterovMomentum](usesnesterovmomentum.md) to `false` by default.

## See Also

### Creating an SGD Optimizer

- [optimizerWithDescriptor:momentumScale:usesNesterovMomentum:](init%28descriptor_momentumscale_usesnesterovmomentum_%29.md): Deprecated. Create an SGD optimizer with the descriptor, momentum scale, and option to enable Nesterov momentum that you specify.
