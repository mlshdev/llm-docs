> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/tabletopshape/round(center:radius:thickness:in:)

# round(center:radius:thickness:in:)

**Framework:** TabletopKit  
**Kind:** Type Method  
**Availability:** visionOS 2.0+

Creates a round tabletop shape with the specified center, radius, and thickness.

## Declaration

```swift
static func round(center: Point3D = .zero, radius: Float, thickness: Float, in unit: UnitLength = .meters) -> TabletopShape
```

## See Also

### Creating a round or rectangular table

- [rectangular(center:width:height:thickness:in:)](rectangular%28center_width_height_thickness_in_%29.md): Creates a rectangular tabletop shape with the specified center and dimensions.
