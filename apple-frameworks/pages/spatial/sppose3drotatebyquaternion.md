> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppose3drotatebyquaternion](https://developer.apple.com/documentation/spatial/sppose3drotatebyquaternion)

# SPPose3DRotateByQuaternion

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a transform that results from rotating with the specified quaternion.

## Declaration

```objectivec
static SPPose3D SPPose3DRotateByQuaternion(SPPose3D pose, simd_quatd quaternion);
```

## See Also

### Transforming a 3D pose structure

- [SPPose3DConcatenation](sppose3dconcatenation.md): Returns a pose that represents the concatenation of two poses.
- [SPPose3DFlip](sppose3dflip.md): Flips a pose along the specified axis.
- [SPPose3DRotate](sppose3drotate.md): Returns a transform that results from rotating with the specified rotation structure.
- [SPPose3DTranslate](sppose3dtranslate-6bwqc.md): Deprecated. Returns a transform with an origin that’s offset by the specified size structure.
- [SPPose3DTranslate](sppose3dtranslate-8v4sq.md): Returns a pose with an origin that’s offset by the specified vector.
