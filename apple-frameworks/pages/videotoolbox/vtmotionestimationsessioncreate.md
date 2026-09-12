> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtmotionestimationsessioncreate](https://developer.apple.com/documentation/videotoolbox/vtmotionestimationsessioncreate)

# VTMotionEstimationSessionCreate

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a session you use to generate a pixel buffer of motion vectors from two pixel buffers.

## Declaration

```objectivec
extern OSStatus VTMotionEstimationSessionCreate(CFAllocatorRef allocator, CFDictionaryRef motionVectorProcessorSelectionOptions, uint32_t width, uint32_t height, VTMotionEstimationSessionRef*motionEstimationSessionOut);
```

## Parameters

- `allocator`: An allocator for the session. Pass NULL to use the default allocator.
- `motionVectorProcessorSelectionOptions`: Available creation options are:

  - **[kVTMotionEstimationSessionCreationOption_MotionVectorSize](kvtmotionestimationsessioncreationoption_motionvectorsize.md)**: Size of the search block.
  - **[kVTMotionEstimationSessionCreationOption_UseMultiPassSearch](kvtmotionestimationsessioncreationoption_usemultipasssearch.md)**: Use multiple passes to detect true motion.
  - **[kVTMotionEstimationSessionCreationOption_Label](kvtmotionestimationsessioncreationoption_label.md)**: Label used for logging and resource tracking.
- `width`: The width of frames in pixels.
- `height`: The height of frames in pixels.
- `motionEstimationSessionOut`: Points to a variable to receive the new motion-estimation session.

<a id="discussion"></a>

## Discussion

The function creates a session for computing motion vectors between two pixel buffers.

## See Also

### Creating a session

- [kVTMotionEstimationSessionCreationOption_Label](kvtmotionestimationsessioncreationoption_label.md): A label you use to log and track resources.
- [kVTMotionEstimationSessionCreationOption_MotionVectorSize](kvtmotionestimationsessioncreationoption_motionvectorsize.md): The size of the search blocks that motion estimation session uses.
- [kVTMotionEstimationSessionCreationOption_UseMultiPassSearch](kvtmotionestimationsessioncreationoption_usemultipasssearch.md): An option to use for higher quality motion estimation.
- [kVTMotionEstimationSessionCreationOption_DetectTrueMotion](kvtmotionestimationsessioncreationoption_detecttruemotion.md): Enable multi pass true motion detection.
