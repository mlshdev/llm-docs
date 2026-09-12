> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rect3d/init(center:size:)-133fy](https://developer.apple.com/documentation/spatial/rect3d/init(center:size:)-133fy)

# init(center:size:) (Swift)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a rectangle with the specified center and the specified size from Spatial structures.

## Declaration

```swift
init(center: Point3D, size: Size3D)
```

## Parameters

- `center`: A point structure that specifies the rectangle’s center.
- `size`: A size structure that specifies the rectangle’s size.

## See Also

### Creating a 3D rectangle structure

- [init()](init%28%29.md): Creates a rectangle structure.
- [init(center:size:)](init%28center_size_%29-77l0z.md): Creates a rectangle with the specified center and the specified size from double-precision vectors.
- [init(center:size:)](init%28center_size_%29-9cfq7.md): Creates a rectangle with the specified center and the specified size from Spatial vectors.
- [init(center:size:)](init%28center_size_%29-zr2x.md): Creates a rectangle with the specified center and the specified size from single-precision vectors.
- [init(origin:size:)](init%28origin_size_%29-5xyrs.md): Creates a rectangle at the specified origin with the specified size from double-precision vectors.
- [init(origin:size:)](init%28origin_size_%29-7fnuf.md): Creates a rectangle at the specified origin with the specified size from single-precision vectors.
- [init(origin:size:)](init%28origin_size_%29-7o8ad.md): Creates a rectangle with the specified origin and the specified size from Spatial vectors.
- [init(origin:size:)](init%28origin_size_%29-7v73.md): Creates a rectangle at the specified origin and the specified size from Spatial structures.
- [init(origin:size:)](init%28origin_size_%29-9a089.md): Creates a rectangle structure.
- [init(points:)](init%28points_%29.md): Creates a rectangle that’s the bounding box of the specified points.

# SPRect3DMakeAtCenter (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a rectangle with the specified center and the specified size from Spatial structures.

## Declaration

```objectivec
static SPRect3D SPRect3DMakeAtCenter(SPPoint3D center, SPSize3D size);
```

## Parameters

- `center`: A point structure that specifies the rectangle’s center.
- `size`: A size structure that specifies the rectangle’s size.

## See Also

### Creating a 3D rectangle structure

- [SPRect3DMakeAtOrigin](init%28origin_size_%29-9a089.md): Creates a rectangle structure.
- [SPRect3DMakeAtCenterWithVector](../sprect3dmakeatcenterwithvector-9118a.md): Creates a rectangle with the specified center and the specified size from double-precision vectors.
- [SPRect3DMakeAtCenterWithVector](../sprect3dmakeatcenterwithvector-9doe4.md)
- [SPRect3DMakeAtOriginWithVector](../sprect3dmakeatoriginwithvector-36awh.md): Creates a rectangle at the specified origin and the specified size from double-precision vectors.
- [SPRect3DMakeAtOriginWithVector](../sprect3dmakeatoriginwithvector-7m66h.md)
- [SPRect3DMakeBoundingFromPoints](../sprect3dmakeboundingfrompoints.md): Creates a rectangle that’s the bounding box of the specified points.
