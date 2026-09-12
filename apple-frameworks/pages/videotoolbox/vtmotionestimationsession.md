> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtmotionestimationsession](https://developer.apple.com/documentation/videotoolbox/vtmotionestimationsession)

# VTMotionEstimationSession

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
final class VTMotionEstimationSession
```

## Topics

### Creating a motion estimation session

- [init(width:height:motionVectorSize:useMultiPassSearch:label:)](vtmotionestimationsession/init%28width_height_motionvectorsize_usemultipasssearch_label_%29.md)

### Estimating motion

- [motion(of:comparedTo:flags:)](vtmotionestimationsession/motion%28of_comparedto_flags_%29.md)
- [VTMotionEstimationSession.FrameFlags](vtmotionestimationsession/frameflags.md)

### Inspecting the session

- [label](vtmotionestimationsession/label.md)
- [motionVectorSize](vtmotionestimationsession/motionvectorsize.md)
- [sourcePixelBufferAttributes](vtmotionestimationsession/sourcepixelbufferattributes.md)
- [useMultiPassSearch](vtmotionestimationsession/usemultipasssearch.md)

### Inspecting the motion result

- [VTMotionEstimationSession.Motion](vtmotionestimationsession/motion.md)
- [VTMotionEstimationSession.BlockSize](vtmotionestimationsession/blocksize.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
