> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtmotionestimationsessioncreationoption_motionvectorsize](https://developer.apple.com/documentation/videotoolbox/kvtmotionestimationsessioncreationoption_motionvectorsize)

# kVTMotionEstimationSessionCreationOption_MotionVectorSize (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The size of the search blocks that motion estimation session uses.

## Declaration

```swift
let kVTMotionEstimationSessionCreationOption_MotionVectorSize: CFString!
```

<a id="discussion"></a>

## Discussion

[VTMotionEstimationSessionCreate](vtmotionestimationsessioncreate.md) takes a dictionary of creation options, `motionVectorProcessorSelectionOptions`. You can supply [kVTMotionEstimationSessionCreationOption_MotionVectorSize](kvtmotionestimationsessioncreationoption_motionvectorsize.md) with `CFNumber` to override the default search block size. Supported motion vector size is 4 or 16, meaning 4x4 or 16x16 respectively. 16x16 is the default if you don’t provide this key.

## See Also

### Creating a session

- [VTMotionEstimationSession](vtmotionestimationsession.md)
- [kVTMotionEstimationSessionCreationOption_Label](kvtmotionestimationsessioncreationoption_label.md): A label you use to log and track resources.
- [kVTMotionEstimationSessionCreationOption_UseMultiPassSearch](kvtmotionestimationsessioncreationoption_usemultipasssearch.md): An option to use for higher quality motion estimation.

# kVTMotionEstimationSessionCreationOption_MotionVectorSize (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The size of the search blocks that motion estimation session uses.

## Declaration

```objectivec
extern CFStringRef const kVTMotionEstimationSessionCreationOption_MotionVectorSize;
```

<a id="discussion"></a>

## Discussion

[VTMotionEstimationSessionCreate](vtmotionestimationsessioncreate.md) takes a dictionary of creation options, `motionVectorProcessorSelectionOptions`. You can supply [kVTMotionEstimationSessionCreationOption_MotionVectorSize](kvtmotionestimationsessioncreationoption_motionvectorsize.md) with `CFNumber` to override the default search block size. Supported motion vector size is 4 or 16, meaning 4x4 or 16x16 respectively. 16x16 is the default if you don’t provide this key.

## See Also

### Creating a session

- [VTMotionEstimationSessionCreate](vtmotionestimationsessioncreate.md): Creates a session you use to generate a pixel buffer of motion vectors from two pixel buffers.
- [kVTMotionEstimationSessionCreationOption_Label](kvtmotionestimationsessioncreationoption_label.md): A label you use to log and track resources.
- [kVTMotionEstimationSessionCreationOption_UseMultiPassSearch](kvtmotionestimationsessioncreationoption_usemultipasssearch.md): An option to use for higher quality motion estimation.
- [kVTMotionEstimationSessionCreationOption_DetectTrueMotion](kvtmotionestimationsessioncreationoption_detecttruemotion.md): Enable multi pass true motion detection.
