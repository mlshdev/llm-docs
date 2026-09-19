> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/professional_video_applications/fxvertex/init(location:intangent:outtangent:xsplineweight:interpstyle:)

# init(location:inTangent:outTangent:xSplineWeight:interpStyle:)

**Framework:** Professional Video Applications  
**Kind:** Initializer  
**Availability:** FxPlug 4.1+

## Declaration

```swift
init(location: FxPoint2D, inTangent: FxPoint2D, outTangent: FxPoint2D, xSplineWeight: Double, interpStyle: FxPathStyle)
```

## Parameters

- `location`: The location of the point in the 2D image.
- `inTangent`: The x and y vectors of the incoming tangent.
- `outTangent`: The x and y vectors of the outgoing tangent.
- `xSplineWeight`: The weight of the x-spline at this point.
- `interpStyle`: The style of interpolation at this vertex.

## See Also

### Initializers

- [init()](init%28%29.md)
