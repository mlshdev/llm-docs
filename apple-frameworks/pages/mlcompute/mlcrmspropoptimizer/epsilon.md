> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcrmspropoptimizer/epsilon](https://developer.apple.com/documentation/mlcompute/mlcrmspropoptimizer/epsilon)

# epsilon (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.2+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 14.0+

The epsilon value you use to improve numerical stability.

## Declaration

```swift
var epsilon: Float { get }
```

<a id="Discussion"></a>

## Discussion

The default value is `1e-8`.

## See Also

### Inspecting an RMSProp Optimizer

- [momentumScale](momentumscale.md): Deprecated. A hyper-parameter that specifies the momentum factor.
- [alpha](alpha.md): Deprecated. The constant for smoothing.
- [isCentered](iscentered.md): Deprecated. A Boolean that indicates whether you compute the centered RMSProp.

# epsilon (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.2+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 14.0+

The epsilon value you use to improve numerical stability.

## Declaration

```objectivec
@property (nonatomic, readonly) float epsilon;
```

<a id="Discussion"></a>

## Discussion

The default value is `1e-8`.

## See Also

### Inspecting an RMSProp Optimizer

- [momentumScale](momentumscale.md): Deprecated. A hyper-parameter that specifies the momentum factor.
- [alpha](alpha.md): Deprecated. The constant for smoothing.
- [isCentered](iscentered.md): Deprecated. A Boolean that indicates whether you compute the centered RMSProp.
