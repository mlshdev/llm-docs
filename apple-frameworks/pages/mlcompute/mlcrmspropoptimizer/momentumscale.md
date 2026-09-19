> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mlcompute/mlcrmspropoptimizer/momentumscale

# momentumScale (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.2+ (deprecated in 27.2) · macOS 11.0+ (deprecated in 27.2) · tvOS 14.0+

A hyper-parameter that specifies the momentum factor.

## Declaration

```swift
var momentumScale: Float { get }
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`.

## See Also

### Inspecting an RMSProp Optimizer

- [alpha](alpha.md): Deprecated. The constant for smoothing.
- [epsilon](epsilon.md): Deprecated. The epsilon value you use to improve numerical stability.
- [isCentered](iscentered.md): Deprecated. A Boolean that indicates whether you compute the centered RMSProp.

# momentumScale (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.2+ (deprecated in 27.2) · macOS 11.0+ (deprecated in 27.2) · tvOS 14.0+

A hyper-parameter that specifies the momentum factor.

## Declaration

```objectivec
@property (nonatomic, readonly) float momentumScale;
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`.

## See Also

### Inspecting an RMSProp Optimizer

- [alpha](alpha.md): Deprecated. The constant for smoothing.
- [epsilon](epsilon.md): Deprecated. The epsilon value you use to improve numerical stability.
- [isCentered](iscentered.md): Deprecated. A Boolean that indicates whether you compute the centered RMSProp.
