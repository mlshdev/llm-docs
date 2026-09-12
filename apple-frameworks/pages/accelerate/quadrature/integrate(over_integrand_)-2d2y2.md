> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/quadrature/integrate(over:integrand:)-2d2y2](https://developer.apple.com/documentation/accelerate/quadrature/integrate(over:integrand:)-2d2y2)

# integrate(over:integrand:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Performs the integration over the supplied scalar function.

## Declaration

```swift
func integrate(over interval: ClosedRange<Double>, integrand: (Double) -> Double) -> Result<(integralResult: Double, estimatedAbsoluteError: Double), Quadrature.Error>
```

## See Also

### Instance Methods

- [integrate(over:integrand:)](integrate%28over_integrand_%29-56h8b.md): Performs the integration over the supplied vector function.
