> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/transform/init(scale:rotation:translation:)](https://developer.apple.com/documentation/realitykit/transform/init(scale:rotation:translation:))

# init(scale:rotation:translation:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a new transformation using the given values.

## Declaration

```swift
init(scale: SIMD3<Float> = SIMD3<Float>(x: 1, y: 1, z: 1), rotation: simd_quatf = simd_quaternion(0, 0, 0, 1), translation: SIMD3<Float> = SIMD3<Float>(x: 0, y: 0, z: 0))
```

## Parameters

- `scale`: A scale factor.
- `rotation`: The rotation given as a unit quaternion.
- `translation`: The translation, or position along the x, y, and z axes.

## See Also

### Creating a transform

- [init()](init%28%29.md): Creates a transform with the values of the identity transform.
- [init(pitch:yaw:roll:)](init%28pitch_yaw_roll_%29.md): Creates a new transform from the specified Euler angles.
- [init(matrix:)](init%28matrix_%29.md): Creates a new transform represented as a 4x4 matrix.
