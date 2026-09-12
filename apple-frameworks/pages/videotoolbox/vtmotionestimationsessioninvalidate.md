> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtmotionestimationsessioninvalidate](https://developer.apple.com/documentation/videotoolbox/vtmotionestimationsessioninvalidate)

# VTMotionEstimationSessionInvalidate

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Tears down a motion-estimation session.

## Declaration

```objectivec
extern void VTMotionEstimationSessionInvalidate(VTMotionEstimationSessionRef session);
```

<a id="discussion"></a>

## Discussion

When you are done with a motion-estimation session you created, call this function to tear it down and then `CFRelease` to release the session object reference. When a motion-estimation session’s retain count reaches zero, the system automatically invalidates it, but because multiple parties may retain sessions, it can be hard to predict when this happens. Calling this function ensures a deterministic, orderly teardown.
