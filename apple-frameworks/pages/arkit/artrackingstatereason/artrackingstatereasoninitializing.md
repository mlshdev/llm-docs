> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/artrackingstatereason/artrackingstatereasoninitializing](https://developer.apple.com/documentation/arkit/artrackingstatereason/artrackingstatereasoninitializing)

# ARTrackingStateReasonInitializing

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

The AR session has not yet gathered enough camera or motion data to provide tracking information.

## Declaration

```objectivec
ARTrackingStateReasonInitializing
```

<a id="Discussion"></a>

## Discussion

This value occurs temporarily after starting a new AR session or changing configurations.

## See Also

### Reason Values

- [ARTrackingStateReasonNone](artrackingstatereasonnone.md): The current tracking state is not limited.
- [ARTrackingStateReasonRelocalizing](artrackingstatereasonrelocalizing.md): The AR session is attempting to resume after an interruption.
- [ARTrackingStateReasonExcessiveMotion](artrackingstatereasonexcessivemotion.md): The device is moving too fast for accurate image-based position tracking.
- [ARTrackingStateReasonInsufficientFeatures](artrackingstatereasoninsufficientfeatures.md): The scene visible to the camera does not contain enough distinguishable features for image-based position tracking.
