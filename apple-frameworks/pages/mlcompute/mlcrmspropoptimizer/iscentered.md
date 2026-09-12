> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcrmspropoptimizer/iscentered](https://developer.apple.com/documentation/mlcompute/mlcrmspropoptimizer/iscentered)

# isCentered (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.2+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 14.0+

A Boolean that indicates whether you compute the centered RMSProp.

## Declaration

```swift
var isCentered: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If `true`, the optimizer normalizes the gradient by an estimation of its variance. The default value is `false`.

## See Also

### Inspecting an RMSProp Optimizer

- [momentumScale](momentumscale.md): Deprecated. A hyper-parameter that specifies the momentum factor.
- [alpha](alpha.md): Deprecated. The constant for smoothing.
- [epsilon](epsilon.md): Deprecated. The epsilon value you use to improve numerical stability.

# isCentered (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.2+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 14.0+

A Boolean that indicates whether you compute the centered RMSProp.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isCentered;
```

<a id="Discussion"></a>

## Discussion

If `true`, the optimizer normalizes the gradient by an estimation of its variance. The default value is `false`.

## See Also

### Inspecting an RMSProp Optimizer

- [momentumScale](momentumscale.md): Deprecated. A hyper-parameter that specifies the momentum factor.
- [alpha](alpha.md): Deprecated. The constant for smoothing.
- [epsilon](epsilon.md): Deprecated. The epsilon value you use to improve numerical stability.
