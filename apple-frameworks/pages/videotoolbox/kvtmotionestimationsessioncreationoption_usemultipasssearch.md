> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtmotionestimationsessioncreationoption_usemultipasssearch](https://developer.apple.com/documentation/videotoolbox/kvtmotionestimationsessioncreationoption_usemultipasssearch)

# kVTMotionEstimationSessionCreationOption_UseMultiPassSearch (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An option to use for higher quality motion estimation.

## Declaration

```swift
let kVTMotionEstimationSessionCreationOption_UseMultiPassSearch: CFString!
```

<a id="discussion"></a>

## Discussion

[VTMotionEstimationSessionCreate](vtmotionestimationsessioncreate.md) takes a dictionary of creation options, `motionVectorProcessorSelectionOptions`. You can supply [kVTMotionEstimationSessionCreationOption_UseMultiPassSearch](kvtmotionestimationsessioncreationoption_usemultipasssearch.md) with `kCFBooleanTrue` to provide higher quality motion estimation. True-motion achieves higher quality by running the motion estimator in multiple passes. The default is `kCFBooleanFalse`.

## See Also

### Creating a session

- [VTMotionEstimationSession](vtmotionestimationsession.md)
- [kVTMotionEstimationSessionCreationOption_Label](kvtmotionestimationsessioncreationoption_label.md): A label you use to log and track resources.
- [kVTMotionEstimationSessionCreationOption_MotionVectorSize](kvtmotionestimationsessioncreationoption_motionvectorsize.md): The size of the search blocks that motion estimation session uses.

# kVTMotionEstimationSessionCreationOption_UseMultiPassSearch (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An option to use for higher quality motion estimation.

## Declaration

```objectivec
extern CFStringRef const kVTMotionEstimationSessionCreationOption_UseMultiPassSearch;
```

<a id="discussion"></a>

## Discussion

[VTMotionEstimationSessionCreate](vtmotionestimationsessioncreate.md) takes a dictionary of creation options, `motionVectorProcessorSelectionOptions`. You can supply [kVTMotionEstimationSessionCreationOption_UseMultiPassSearch](kvtmotionestimationsessioncreationoption_usemultipasssearch.md) with `kCFBooleanTrue` to provide higher quality motion estimation. True-motion achieves higher quality by running the motion estimator in multiple passes. The default is `kCFBooleanFalse`.

## See Also

### Creating a session

- [VTMotionEstimationSessionCreate](vtmotionestimationsessioncreate.md): Creates a session you use to generate a pixel buffer of motion vectors from two pixel buffers.
- [kVTMotionEstimationSessionCreationOption_Label](kvtmotionestimationsessioncreationoption_label.md): A label you use to log and track resources.
- [kVTMotionEstimationSessionCreationOption_MotionVectorSize](kvtmotionestimationsessioncreationoption_motionvectorsize.md): The size of the search blocks that motion estimation session uses.
- [kVTMotionEstimationSessionCreationOption_DetectTrueMotion](kvtmotionestimationsessioncreationoption_detecttruemotion.md): Enable multi pass true motion detection.
