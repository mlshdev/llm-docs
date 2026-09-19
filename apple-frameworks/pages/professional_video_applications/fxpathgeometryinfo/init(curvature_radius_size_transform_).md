> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/professional_video_applications/fxpathgeometryinfo/init(curvature:radius:size:transform:)

# init(curvature:radius:size:transform:)

**Framework:** Professional Video Applications  
**Kind:** Initializer  
**Availability:** FxPlug 4.1+

## Declaration

```swift
init(curvature: Double, radius: FxPoint2D, size: FxPoint2D, transform: Unmanaged<FxMatrix44>!)
```

## Parameters

- `curvature`: The curvature of the ellipse, if applicable.
- `radius`: The radius of the ellipse, if applicable.
- `size`: The size of the rectangle, if applicable.
- `transform`: The shape’s transformation matrix.

## See Also

### Initializers

- [init()](init%28%29.md)
