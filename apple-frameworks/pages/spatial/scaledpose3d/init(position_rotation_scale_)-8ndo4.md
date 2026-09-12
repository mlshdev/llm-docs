> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/scaledpose3d/init(position:rotation:scale:)-8ndo4](https://developer.apple.com/documentation/spatial/scaledpose3d/init(position:rotation:scale:)-8ndo4)

# init(position:rotation:scale:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS · watchOS 11.0+

Creates a scaled pose with the specified single-precision position vector and quaternion.

## Declaration

```swift
init(position: simd_float3 = .zero, rotation: simd_quatf, scale: Float = 1)
```

## See Also

### Creating a 3D scaled-pose structure

- [init()](init%28%29.md): Creates a scaled pose structure.
- [init(\_:)](init%28__%29-v6ox.md): Creates a scaled pose from the specified 4 x 4 single-precision matrix.
- [init(\_:)](init%28__%29-4izkj.md): Creates a scaled pose from the specified 4 x 4 double-precision matrix.
- [init(forward:scale:up:)](init%28forward_scale_up_%29.md): Creates a scaled pose with the specified forward and up vectors.
- [init(position:rotation:scale:)](init%28position_rotation_scale_%29-6fom1.md): Creates a scaled pose with the specified double-precision position vector and quaternion.
- [init(position:target:scale:up:)](init%28position_target_scale_up_%29.md): Returns a scaled pose at the specified position with the rotation toward the target.
- [init(position:rotation:scale:)](init%28position_rotation_scale_%29-7ya6f.md): Creates a pose with the specified Spatial position, rotation, and scale structures.
- [init(position:rotation:scale:)](init%28position_rotation_scale_%29-8fyu0.md): Creates a scaled pose with the specified double-precision position vector and quaternion.
- [init(transform:)](init%28transform_%29-oogv.md): Returns a scaled pose with a position, rotation, and scale defined by an affine transform.
- [init(transform:)](init%28transform_%29-9s08k.md): Returns a scaled pose with a position, rotation, and scale defined by a projective transform.
