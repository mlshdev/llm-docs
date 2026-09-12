> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcsgdoptimizer/init(descriptor:momentumscale:usesnesterovmomentum:)](https://developer.apple.com/documentation/mlcompute/mlcsgdoptimizer/init(descriptor:momentumscale:usesnesterovmomentum:))

# init(descriptor:momentumScale:usesNesterovMomentum:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Create an SGD optimizer with the descriptor, momentum scale, and option to enable Nesterov momentum that you specify.

## Declaration

```swift
convenience init(descriptor optimizerDescriptor: MLCOptimizerDescriptor, momentumScale: Float, usesNesterovMomentum: Bool)
```

## Parameters

- `optimizerDescriptor`: An object you use to configure the optimizer.
- `momentumScale`: The momentum scale.
- `usesNesterovMomentum`: A Boolean that indicates whether you enable Nesterov momentum.

## See Also

### Creating an SGD Optimizer

- [init(descriptor:)](init%28descriptor_%29.md): Deprecated. Creates an SGD optimizer with the descriptor you specify.

# optimizerWithDescriptor:momentumScale:usesNesterovMomentum: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Create an SGD optimizer with the descriptor, momentum scale, and option to enable Nesterov momentum that you specify.

## Declaration

```objectivec
+ (instancetype) optimizerWithDescriptor:(MLCOptimizerDescriptor *) optimizerDescriptor momentumScale:(float) momentumScale usesNesterovMomentum:(BOOL) usesNesterovMomentum;
```

## Parameters

- `optimizerDescriptor`: An object you use to configure the optimizer.
- `momentumScale`: The momentum scale.
- `usesNesterovMomentum`: A Boolean that indicates whether you enable Nesterov momentum.

## See Also

### Creating an SGD Optimizer

- [optimizerWithDescriptor:](init%28descriptor_%29.md): Deprecated. Creates an SGD optimizer with the descriptor you specify.
