> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcrmspropoptimizer/alpha](https://developer.apple.com/documentation/mlcompute/mlcrmspropoptimizer/alpha)

# alpha (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.2+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 14.0+

The constant for smoothing.

## Declaration

```swift
var alpha: Float { get }
```

<a id="Discussion"></a>

## Discussion

The default value is `0.99`.

## See Also

### Inspecting an RMSProp Optimizer

- [momentumScale](momentumscale.md): Deprecated. A hyper-parameter that specifies the momentum factor.
- [epsilon](epsilon.md): Deprecated. The epsilon value you use to improve numerical stability.
- [isCentered](iscentered.md): Deprecated. A Boolean that indicates whether you compute the centered RMSProp.

# alpha (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.2+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 14.0+

The constant for smoothing.

## Declaration

```objectivec
@property (nonatomic, readonly) float alpha;
```

<a id="Discussion"></a>

## Discussion

The default value is `0.99`.

## See Also

### Inspecting an RMSProp Optimizer

- [momentumScale](momentumscale.md): Deprecated. A hyper-parameter that specifies the momentum factor.
- [epsilon](epsilon.md): Deprecated. The epsilon value you use to improve numerical stability.
- [isCentered](iscentered.md): Deprecated. A Boolean that indicates whether you compute the centered RMSProp.
