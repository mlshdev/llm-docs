> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spscaledpose3dgetinverse](https://developer.apple.com/documentation/spatial/spscaledpose3dgetinverse)

# SPScaledPose3DGetInverse

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a new scaled pose with the inverse matrix of the specified scaled pose.

## Declaration

```objectivec
static SPScaledPose3D SPScaledPose3DGetInverse(SPScaledPose3D scaledPose);
```

## See Also

### Inspecting a 3D scaled pose’s properties

- [position](scaledpose3d/position.md): The scaled pose’s position.
- [rotation](scaledpose3d/rotation.md): The scaled pose’s rotation.
- [scale](scaledpose3d/scale.md): The scaled pose’s scale.
- [SPScaledPose3DGet4x4Matrix](spscaledpose3dget4x4matrix.md): Returns a 4 x 4 matrix that represents the scaled pose’s translation, rotation, and scale.
