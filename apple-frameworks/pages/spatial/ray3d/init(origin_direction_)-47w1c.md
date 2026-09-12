> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/ray3d/init(origin:direction:)-47w1c](https://developer.apple.com/documentation/spatial/ray3d/init(origin:direction:)-47w1c)

# init(origin:direction:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a ray with the specified origin and the specified direction from double-precision vectors.

## Declaration

```swift
init(origin: simd_double3 = .zero, direction: simd_double3)
```

## Parameters

- `origin`: A vector that specifies the ray’s origin.
- `direction`: A vector that specifies the ray’s direction.

## See Also

### Creating a 3D ray structure

- [init()](init%28%29.md): Creates a ray structure.
- [init(origin:direction:)](init%28origin_direction_%29-5sxkl.md): Creates a ray with the specified origin and the specified direction from Spatial primitives.
- [init(origin:direction:)](init%28origin_direction_%29-3gfcj.md): Creates a ray with the specified origin and the specified direction from single-precision vectors.
