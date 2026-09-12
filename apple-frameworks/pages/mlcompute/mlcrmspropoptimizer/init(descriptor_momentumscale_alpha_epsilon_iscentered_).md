> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcrmspropoptimizer/init(descriptor:momentumscale:alpha:epsilon:iscentered:)](https://developer.apple.com/documentation/mlcompute/mlcrmspropoptimizer/init(descriptor:momentumscale:alpha:epsilon:iscentered:))

# init(descriptor:momentumScale:alpha:epsilon:isCentered:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.2+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 14.0+

Creates an RMSProp optimizer with the descriptor, momentum scale, smoothing, epsilon, and option to compute the centered RMSProp that you specify.

## Declaration

```swift
convenience init(descriptor optimizerDescriptor: MLCOptimizerDescriptor, momentumScale: Float, alpha: Float, epsilon: Float, isCentered: Bool)
```

## Parameters

- `optimizerDescriptor`: An object you use to configure the optimizer.
- `momentumScale`: The momentum scale.
- `alpha`: The smoothing constant value.
- `epsilon`: The epsilon value you use to improve numerical stability.
- `isCentered`: A Boolean that indicates whether you compute the centered RMSProp.

## See Also

### Creating an RMSProp Optimizer

- [init(descriptor:)](init%28descriptor_%29.md): Deprecated. Creates an RMSProp optimizer with the descriptor you specify.

# optimizerWithDescriptor:momentumScale:alpha:epsilon:isCentered: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.2+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 14.0+

Creates an RMSProp optimizer with the descriptor, momentum scale, smoothing, epsilon, and option to compute the centered RMSProp that you specify.

## Declaration

```objectivec
+ (instancetype) optimizerWithDescriptor:(MLCOptimizerDescriptor *) optimizerDescriptor momentumScale:(float) momentumScale alpha:(float) alpha epsilon:(float) epsilon isCentered:(BOOL) isCentered;
```

## Parameters

- `optimizerDescriptor`: An object you use to configure the optimizer.
- `momentumScale`: The momentum scale.
- `alpha`: The smoothing constant value.
- `epsilon`: The epsilon value you use to improve numerical stability.
- `isCentered`: A Boolean that indicates whether you compute the centered RMSProp.

## See Also

### Creating an RMSProp Optimizer

- [optimizerWithDescriptor:](init%28descriptor_%29.md): Deprecated. Creates an RMSProp optimizer with the descriptor you specify.
