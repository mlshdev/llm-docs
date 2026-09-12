> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtmotionestimationsessionref](https://developer.apple.com/documentation/videotoolbox/vtmotionestimationsessionref)

# VTMotionEstimationSessionRef

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Type Alias  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A reference to a Video Toolbox motion-estimation session.

## Declaration

```objectivec
typedef struct OpaqueVTMotionEstimationSession * VTMotionEstimationSessionRef;
```

<a id="discussion"></a>

## Discussion

A motion-estimation session supports two `CVPixelBuffer`s of the same size and type, and returns motion vectors in the form of a `CVPixelBuffer`. The session is a reference-counted CF object. To create a motion-estimation session, call [VTMotionEstimationSessionCreate](vtmotionestimationsessioncreate.md); then you can optionally configure the session using `VTSessionSetProperty`. To create motion-estimations, call `VTMotionEstimationSessionCreateMotionEstimation`. When you are done with the session, you should call [VTMotionEstimationSessionInvalidate](vtmotionestimationsessioninvalidate.md) to tear it down and `CFRelease` to release the session object reference.

## See Also

### Data types

- [VTMotionEstimationFrameFlags](vtmotionestimationframeflags.md): Flags to control processing of a frame you pass to the motion-estimation session.
- [VTMotionEstimationInfoFlags](vtmotionestimationinfoflags.md): Directives that provide information back to you with the results of motion-estimation.
