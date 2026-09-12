> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/transform/init(matrix:)](https://developer.apple.com/documentation/realitykit/transform/init(matrix:))

# init(matrix:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a new transform represented as a 4x4 matrix.

## Declaration

```swift
init(matrix: float4x4)
```

## Parameters

- `matrix`: A transformation matrix.

<a id="discussion"></a>

## Discussion

A [Transform](../transform.md) component can’t represent every transform that a general 4x4 matrix can . Using a 4x4 matrix during initialization might result in certain transformations, such as shear, being lost.

## See Also

### Creating a transform

- [init()](init%28%29.md): Creates a transform with the values of the identity transform.
- [init(scale:rotation:translation:)](init%28scale_rotation_translation_%29.md): Creates a new transformation using the given values.
- [init(pitch:yaw:roll:)](init%28pitch_yaw_roll_%29.md): Creates a new transform from the specified Euler angles.
