> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotation3d/init(axis:angle:)](https://developer.apple.com/documentation/spatial/rotation3d/init(axis:angle:))

# init(axis:angle:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a rotation structure with the specified axis and the specified angle from Spatial structures.

## Declaration

```swift
init(axis: RotationAxis3D, angle: Angle2D)
```

## Parameters

- `axis`: The rotation axis.
- `angle`: The rotation angle.

## See Also

### Deprecated symbols

- [init(\_:\_:\_:order:)](../eulerangles/init%28______order_%29.md): Deprecated. Creates a new Euler angles structure from the specified angle structures and order.
- [init(eye:target:up:)](init%28eye_target_up_%29.md): Deprecated. Creates a rotation structure that’s the look-at direction from a position to a target.
- [init(quaternion:)](init%28quaternion_%29-6ajmn.md): Deprecated. Creates a rotation axis from the specified single-precision quaternion.
- [zero](zero.md): Deprecated. The rotation with the zero value.
- [isZero](iszero.md): Deprecated. A Boolean value that indicates whether the rotation is zero.
