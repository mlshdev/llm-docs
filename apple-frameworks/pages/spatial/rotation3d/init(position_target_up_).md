> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotation3d/init(position:target:up:)](https://developer.apple.com/documentation/spatial/rotation3d/init(position:target:up:))

# init(position:target:up:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a rotation structure that represents the look-at direction from a position to a target.

## Declaration

```swift
init(position: Point3D = Point3D(x: 0, y: 0, z: 0), target: Point3D, up: Vector3D = Vector3D(x: 0, y: 1, z: 0))
```

## Parameters

- `position`: The eye position.
- `target`: The target position.
- `up`: The up direction.

## See Also

### Creating a 3D rotation structure

- [init()](init%28%29-2uz53.md): Creates a rotation.
- [init()](init%28%29-krpj.md): Creates a rotation structure.
- [init(eulerAngles:)](init%28eulerangles_%29.md): Creates a rotation structure with the specified Euler angles.
- [init(eulerAngles:)](init%28eulerangles_%29.md): Creates a rotation structure with the specified Euler angles.
- [EulerAngles](../eulerangles.md): A vector that represents three Euler angles and specifies the angle ordering.
- [init(quaternion:)](init%28quaternion_%29-2c79y.md): Creates a rotation axis from the specified double-precision quaternion.
- [init(\_:)](init%28__%29-8z2bn.md): Creates a rotation from the specified double-precision quaternion.
- [init(\_:)](init%28__%29-829qb.md): Creates a rotation axis from the specified single-precision quaternion.
- [init(angle:axis:)](init%28angle_axis_%29.md): Creates a rotation structure with the specified axis and the specified angle from Spatial structures.
- [init(forward:)](init%28forward_%29.md): Creates a rotation with the specified forward vector.
- [init(forward:up:)](init%28forward_up_%29.md): Creates a rotation with the specified forward and up vectors.
- [init(forward:up:)](init%28forward_up_%29.md): Creates a rotation with the specified forward and up vectors.
