> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/quadrature/integrator/qags(maxintervals:)](https://developer.apple.com/documentation/accelerate/quadrature/integrator/qags(maxintervals:))

# Quadrature.Integrator.qags(maxIntervals:)

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Globally adaptive integrator that is based on 21-point or 15-point Gauss–Kronrod quadrature within each subinterval.

## Declaration

```swift
case qags(maxIntervals: Int)
```

## See Also

### Integrators

- [Quadrature.Integrator.qng](qng.md): Non-adaptive automatic integrator that uses Gauss-Kronrod-Patterson quadrature coefficients.
- [nonAdaptive](nonadaptive.md): Non-adaptive automatic integrator that uses Gauss-Kronrod-Patterson quadrature coefficients.
- [Quadrature.Integrator.qag(pointsPerInterval:maxIntervals:)](qag%28pointsperinterval_maxintervals_%29.md): Globally adaptive integrator.
- [adaptive(pointsPerInterval:maxIntervals:)](adaptive%28pointsperinterval_maxintervals_%29.md): Globally adaptive integrator.
- [adaptiveWithSingularities(maxIntervals:)](adaptivewithsingularities%28maxintervals_%29.md): Globally adaptive integrator that is based on 21-point or 15-point Gauss–Kronrod quadrature within each subinterval.
