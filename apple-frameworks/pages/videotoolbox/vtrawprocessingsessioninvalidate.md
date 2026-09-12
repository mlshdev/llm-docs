> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtrawprocessingsessioninvalidate](https://developer.apple.com/documentation/videotoolbox/vtrawprocessingsessioninvalidate)

# VTRAWProcessingSessionInvalidate

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** macOS 15.0+

Tears down a RAW processing session.

## Declaration

```objectivec
extern void VTRAWProcessingSessionInvalidate(VTRAWProcessingSessionRef session);
```

<a id="Discussion"></a>

## Discussion

When you are done with a RAW processing session you created, call this function to tear it down and then `CFRelease` to release your object reference. When a  session’s retain count reaches zero, it is automatically invalidated, but since sessions may be retained by multiple parties, it can be hard to predict when this will happen.

Calling this function ensures a deterministic, orderly teardown.
