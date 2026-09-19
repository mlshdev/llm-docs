> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spscaledpose3dget4x4matrix

# SPScaledPose3DGet4x4Matrix

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a 4 x 4 matrix that represents the scaled pose’s translation, rotation, and scale.

## Declaration

```objectivec
static simd_double4x4 SPScaledPose3DGet4x4Matrix(SPScaledPose3D scaledPose);
```

## See Also

### Inspecting a 3D scaled pose’s properties

- [position](scaledpose3d/position.md): The scaled pose’s position.
- [rotation](scaledpose3d/rotation.md): The scaled pose’s rotation.
- [scale](scaledpose3d/scale.md): The scaled pose’s scale.
- [SPScaledPose3DGetInverse](spscaledpose3dgetinverse.md): Returns a new scaled pose with the inverse matrix of the specified scaled pose.
