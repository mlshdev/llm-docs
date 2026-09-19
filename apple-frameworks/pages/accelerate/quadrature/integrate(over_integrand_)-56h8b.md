> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/quadrature/integrate(over:integrand:)-56h8b

# integrate(over:integrand:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Performs the integration over the supplied vector function.

## Declaration

```swift
func integrate(over interval: ClosedRange<Double>, integrand: (UnsafeBufferPointer<Double>, UnsafeMutableBufferPointer<Double>) -> ()) -> Result<(integralResult: Double, estimatedAbsoluteError: Double), Quadrature.Error>
```

## See Also

### Instance Methods

- [integrate(over:integrand:)](integrate%28over_integrand_%29-2d2y2.md): Performs the integration over the supplied scalar function.
