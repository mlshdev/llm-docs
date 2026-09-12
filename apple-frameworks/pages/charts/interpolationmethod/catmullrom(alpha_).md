> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/interpolationmethod/catmullrom(alpha:)](https://developer.apple.com/documentation/charts/interpolationmethod/catmullrom(alpha:))

# catmullRom(alpha:)

**Framework:** Swift Charts  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Interpolate data points with Catmull-Rom spline, using the given alpha parameter.

## Declaration

```swift
static func catmullRom(alpha: CGFloat) -> InterpolationMethod
```

## Parameters

- `alpha`: A parameter for the Catmull-Rom spline. Use 0 for a uniform spline, 0.5 for the centripetal spline, and 1.0 for the chordal spline.
