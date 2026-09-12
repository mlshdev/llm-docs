> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/quadrature/integrator](https://developer.apple.com/documentation/accelerate/quadrature/integrator)

# Quadrature.Integrator

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Constants that define different integrators.

## Declaration

```swift
enum Integrator
```

## Topics

### Integrators

- [Quadrature.Integrator.qng](integrator/qng.md): Non-adaptive automatic integrator that uses Gauss-Kronrod-Patterson quadrature coefficients.
- [nonAdaptive](integrator/nonadaptive.md): Non-adaptive automatic integrator that uses Gauss-Kronrod-Patterson quadrature coefficients.
- [Quadrature.Integrator.qag(pointsPerInterval:maxIntervals:)](integrator/qag%28pointsperinterval_maxintervals_%29.md): Globally adaptive integrator.
- [adaptive(pointsPerInterval:maxIntervals:)](integrator/adaptive%28pointsperinterval_maxintervals_%29.md): Globally adaptive integrator.
- [Quadrature.Integrator.qags(maxIntervals:)](integrator/qags%28maxintervals_%29.md): Globally adaptive integrator that is based on 21-point or 15-point Gauss–Kronrod quadrature within each subinterval.
- [adaptiveWithSingularities(maxIntervals:)](integrator/adaptivewithsingularities%28maxintervals_%29.md): Globally adaptive integrator that is based on 21-point or 15-point Gauss–Kronrod quadrature within each subinterval.

## See Also

### Enumerations

- [Quadrature.Error](error.md): Errors thrown by the Quadrature structure.
