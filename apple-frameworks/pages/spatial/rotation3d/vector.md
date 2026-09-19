> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/rotation3d/vector

# vector

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The underlying vector of the rotation.

## Declaration

```swift
var vector: simd_double4 { get set }
```

## See Also

### Inspecting a 3D rotation’s properties

- [angle](angle.md): The angle of the rotation.
- [axis](axis.md): The axis of the rotation.
- [eulerAngles(order:)](eulerangles%28order_%29.md): Returns a rotation’s Euler angles.
- [EulerAngles](../eulerangles.md): A vector that represents three Euler angles and specifies the angle ordering.
- [quaternion](quaternion.md): A quaternion that represents the rotation.
