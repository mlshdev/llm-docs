> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rect3d/init(center:size:)-77l0z](https://developer.apple.com/documentation/spatial/rect3d/init(center:size:)-77l0z)

# init(center:size:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a rectangle with the specified center and the specified size from double-precision vectors.

## Declaration

```swift
init(center: simd_double3 = .zero, size: simd_double3)
```

## Parameters

- `center`: A double-precision vector that specifies the rectangle’s center.
- `size`: A double-precision vector that specifies the rectangle’s size.

## See Also

### Creating a 3D rectangle structure

- [init()](init%28%29.md): Creates a rectangle structure.
- [init(center:size:)](init%28center_size_%29-133fy.md): Creates a rectangle with the specified center and the specified size from Spatial structures.
- [init(center:size:)](init%28center_size_%29-9cfq7.md): Creates a rectangle with the specified center and the specified size from Spatial vectors.
- [init(center:size:)](init%28center_size_%29-zr2x.md): Creates a rectangle with the specified center and the specified size from single-precision vectors.
- [init(origin:size:)](init%28origin_size_%29-5xyrs.md): Creates a rectangle at the specified origin with the specified size from double-precision vectors.
- [init(origin:size:)](init%28origin_size_%29-7fnuf.md): Creates a rectangle at the specified origin with the specified size from single-precision vectors.
- [init(origin:size:)](init%28origin_size_%29-7o8ad.md): Creates a rectangle with the specified origin and the specified size from Spatial vectors.
- [init(origin:size:)](init%28origin_size_%29-7v73.md): Creates a rectangle at the specified origin and the specified size from Spatial structures.
- [init(origin:size:)](init%28origin_size_%29-9a089.md): Creates a rectangle structure.
- [init(points:)](init%28points_%29.md): Creates a rectangle that’s the bounding box of the specified points.
