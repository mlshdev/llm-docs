> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/sppose3dgetinverse

# SPPose3DGetInverse

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the affine pose’s inverse.

## Declaration

```objectivec
static SPPose3D SPPose3DGetInverse(SPPose3D pose);
```

## See Also

### Inspecting a 3D pose’s properties

- [position](pose3d/position.md): The pose’s position.
- [rotation](pose3d/rotation.md): The pose’s rotation.
- [SPPose3DGet4x4Matrix](sppose3dget4x4matrix.md): Returns the pose’s underlying matrix.
