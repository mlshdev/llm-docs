> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/pose3d/init(position:target:up:)](https://developer.apple.com/documentation/spatial/pose3d/init(position:target:up:))

# init(position:target:up:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a pose at the specified position with the rotation towards the target.

## Declaration

```swift
init(position: Point3D = .zero, target: Point3D, up: Vector3D = Vector3D(x: 0, y: 1, z: 0))
```

## Parameters

- `position`: A point structure that specifies the position of the pose.
- `target`: The point that the pose orients towards.
- `up`: The up direction.

## See Also

### Creating a 3D pose structure

- [init()](init%28%29.md): Creates a pose structure.
- [init(\_:)](init%28__%29-8njy6.md): Creates a pose from the specified 4 x 4 single-precision matrix.
- [init(\_:)](init%28__%29-9xspz.md): Creates a pose from the specified 4 x 4 double-precision matrix.
- [init(forward:up:)](init%28forward_up_%29.md): Creates a pose with the specified forward and up vectors.
- [init(position:rotation:)](init%28position_rotation_%29-1gu7k.md): Creates a pose with the specified single-precision position vector and quaternion.
- [init(position:rotation:)](init%28position_rotation_%29-5afaf.md): Creates a pose with the specified Spatial position and rotation structures.
- [init(position:rotation:)](init%28position_rotation_%29-5vswy.md): Creates a pose with the specified single-precision position vector and quaternion.
- [init(position:rotation:)](init%28position_rotation_%29-zc2j.md): Creates a pose with the specified double-precision position vector and quaternion.
- [init(transform:)](init%28transform_%29-2sey4.md): Returns a pose with a position and rotation defined by an affine transform.
- [init(transform:)](init%28transform_%29-4go9c.md): Returns a pose with a position and rotation defined by a projective transform.
