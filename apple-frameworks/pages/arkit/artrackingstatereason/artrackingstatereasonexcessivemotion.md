> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/artrackingstatereason/artrackingstatereasonexcessivemotion](https://developer.apple.com/documentation/arkit/artrackingstatereason/artrackingstatereasonexcessivemotion)

# ARTrackingStateReasonExcessiveMotion

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

The device is moving too fast for accurate image-based position tracking.

## Declaration

```objectivec
ARTrackingStateReasonExcessiveMotion
```

## See Also

### Reason Values

- [ARTrackingStateReasonNone](artrackingstatereasonnone.md): The current tracking state is not limited.
- [ARTrackingStateReasonInitializing](artrackingstatereasoninitializing.md): The AR session has not yet gathered enough camera or motion data to provide tracking information.
- [ARTrackingStateReasonRelocalizing](artrackingstatereasonrelocalizing.md): The AR session is attempting to resume after an interruption.
- [ARTrackingStateReasonInsufficientFeatures](artrackingstatereasoninsufficientfeatures.md): The scene visible to the camera does not contain enough distinguishable features for image-based position tracking.
