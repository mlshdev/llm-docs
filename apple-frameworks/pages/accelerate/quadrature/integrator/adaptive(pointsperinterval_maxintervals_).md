> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/quadrature/integrator/adaptive(pointsperinterval:maxintervals:)](https://developer.apple.com/documentation/accelerate/quadrature/integrator/adaptive(pointsperinterval:maxintervals:))

# adaptive(pointsPerInterval:maxIntervals:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Globally adaptive integrator.

## Declaration

```swift
static func adaptive(pointsPerInterval: Quadrature.QAGPointsPerInterval, maxIntervals: Int) -> Quadrature.Integrator
```

## See Also

### Integrators

- [Quadrature.Integrator.qng](qng.md): Non-adaptive automatic integrator that uses Gauss-Kronrod-Patterson quadrature coefficients.
- [nonAdaptive](nonadaptive.md): Non-adaptive automatic integrator that uses Gauss-Kronrod-Patterson quadrature coefficients.
- [Quadrature.Integrator.qag(pointsPerInterval:maxIntervals:)](qag%28pointsperinterval_maxintervals_%29.md): Globally adaptive integrator.
- [Quadrature.Integrator.qags(maxIntervals:)](qags%28maxintervals_%29.md): Globally adaptive integrator that is based on 21-point or 15-point Gauss–Kronrod quadrature within each subinterval.
- [adaptiveWithSingularities(maxIntervals:)](adaptivewithsingularities%28maxintervals_%29.md): Globally adaptive integrator that is based on 21-point or 15-point Gauss–Kronrod quadrature within each subinterval.
