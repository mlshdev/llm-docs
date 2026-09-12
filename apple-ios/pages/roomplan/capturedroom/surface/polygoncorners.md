> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/surface/polygoncorners](https://developer.apple.com/documentation/roomplan/capturedroom/surface/polygoncorners)

# polygonCorners

**Framework:** RoomPlan  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

A 2D polygon that represents nonuniform wall heights and floor shapes.

## Declaration

```swift
var polygonCorners: [simd_float3] { get }
```

<a id="discussion"></a>

## Discussion

This property’s triplet type describes the polygon in local plane coordinates.

## See Also

### Shaping a surface

- [completedEdges](completededges.md): An array of edges that outline the surface.
- [CapturedRoom.Surface.Edge](edge.md): An object that represents a single edge of a surface.
- [curve](curve-swift.property.md): An object that represents the curve of a surface.
- [CapturedRoom.Surface.Curve](curve-swift.struct.md): An object that represents a single curve of a surface.
