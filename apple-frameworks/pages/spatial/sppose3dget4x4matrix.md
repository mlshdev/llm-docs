> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppose3dget4x4matrix](https://developer.apple.com/documentation/spatial/sppose3dget4x4matrix)

# SPPose3DGet4x4Matrix

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the pose’s underlying matrix.

## Declaration

```objectivec
static simd_double4x4 SPPose3DGet4x4Matrix(SPPose3D pose);
```

## See Also

### Inspecting a 3D pose’s properties

- [position](pose3d/position.md): The pose’s position.
- [rotation](pose3d/rotation.md): The pose’s rotation.
- [SPPose3DGetInverse](sppose3dgetinverse.md): Returns the affine pose’s inverse.
