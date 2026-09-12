> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtmotionestimationsessioncreationoption_label](https://developer.apple.com/documentation/videotoolbox/kvtmotionestimationsessioncreationoption_label)

# kVTMotionEstimationSessionCreationOption_Label (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A label you use to log and track resources.

## Declaration

```swift
let kVTMotionEstimationSessionCreationOption_Label: CFString!
```

<a id="discussion"></a>

## Discussion

[VTMotionEstimationSessionCreate](vtmotionestimationsessioncreate.md) takes a dictionary of creation options, `motionVectorProcessorSelectionOptions`. You can supply [kVTMotionEstimationSessionCreationOption_Label](kvtmotionestimationsessioncreationoption_label.md) with `CFString` to specify a label used in logging and resource tracking.

## See Also

### Creating a session

- [VTMotionEstimationSession](vtmotionestimationsession.md)
- [kVTMotionEstimationSessionCreationOption_MotionVectorSize](kvtmotionestimationsessioncreationoption_motionvectorsize.md): The size of the search blocks that motion estimation session uses.
- [kVTMotionEstimationSessionCreationOption_UseMultiPassSearch](kvtmotionestimationsessioncreationoption_usemultipasssearch.md): An option to use for higher quality motion estimation.

# kVTMotionEstimationSessionCreationOption_Label (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A label you use to log and track resources.

## Declaration

```objectivec
extern CFStringRef const kVTMotionEstimationSessionCreationOption_Label;
```

<a id="discussion"></a>

## Discussion

[VTMotionEstimationSessionCreate](vtmotionestimationsessioncreate.md) takes a dictionary of creation options, `motionVectorProcessorSelectionOptions`. You can supply [kVTMotionEstimationSessionCreationOption_Label](kvtmotionestimationsessioncreationoption_label.md) with `CFString` to specify a label used in logging and resource tracking.

## See Also

### Creating a session

- [VTMotionEstimationSessionCreate](vtmotionestimationsessioncreate.md): Creates a session you use to generate a pixel buffer of motion vectors from two pixel buffers.
- [kVTMotionEstimationSessionCreationOption_MotionVectorSize](kvtmotionestimationsessioncreationoption_motionvectorsize.md): The size of the search blocks that motion estimation session uses.
- [kVTMotionEstimationSessionCreationOption_UseMultiPassSearch](kvtmotionestimationsessioncreationoption_usemultipasssearch.md): An option to use for higher quality motion estimation.
- [kVTMotionEstimationSessionCreationOption_DetectTrueMotion](kvtmotionestimationsessioncreationoption_detecttruemotion.md): Enable multi pass true motion detection.
