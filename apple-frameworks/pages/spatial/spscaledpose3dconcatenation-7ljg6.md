> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spscaledpose3dconcatenation-7ljg6](https://developer.apple.com/documentation/spatial/spscaledpose3dconcatenation-7ljg6)

# SPScaledPose3DConcatenation

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a new scaled pose that’s constructed by concatenating two existing poses.

## Declaration

```objectivec
static SPScaledPose3D SPScaledPose3DConcatenation(SPScaledPose3D lhs, SPScaledPose3D rhs);
```

## See Also

### Transforming a 3D scaled-pose structure

- [SPScaledPose3DFlip](spscaledpose3dflip.md): Returns a scaled pose that’s flipped along the specified axis.
- [SPScaledPose3DRotate](spscaledpose3drotate.md): Returns a scaled pose with a rotation that’s rotated by the specified rotation.
- [SPScaledPose3DRotateByQuaternion](spscaledpose3drotatebyquaternion.md): Returns a scaled pose with a rotation that’s rotated by the specified quaternion.
- [SPScaledPose3DTranslate](spscaledpose3dtranslate.md): Returns a scaled pose with an origin that’s offset by the specified vector.
