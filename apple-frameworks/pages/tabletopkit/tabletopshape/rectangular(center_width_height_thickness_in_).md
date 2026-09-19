> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/tabletopshape/rectangular(center:width:height:thickness:in:)

# rectangular(center:width:height:thickness:in:)

**Framework:** TabletopKit  
**Kind:** Type Method  
**Availability:** visionOS 2.0+

Creates a rectangular tabletop shape with the specified center and dimensions.

## Declaration

```swift
static func rectangular(center: Point3D = .zero, width: Float, height: Float, thickness: Float, in unit: UnitLength = .meters) -> TabletopShape
```

## See Also

### Creating a round or rectangular table

- [round(center:radius:thickness:in:)](round%28center_radius_thickness_in_%29.md): Creates a round tabletop shape with the specified center, radius, and thickness.
