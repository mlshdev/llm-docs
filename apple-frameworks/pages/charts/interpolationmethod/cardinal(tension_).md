> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/charts/interpolationmethod/cardinal(tension:)

# cardinal(tension:)

**Framework:** Swift Charts  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Interpolate data points with cardinal spline, using the given tension parameter.

## Declaration

```swift
static func cardinal(tension: CGFloat) -> InterpolationMethod
```

## Parameters

- `tension`: A parameter that controls the length of tangents in the cardinal spline.
