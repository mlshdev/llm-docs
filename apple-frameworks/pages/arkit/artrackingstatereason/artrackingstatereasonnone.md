> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/artrackingstatereason/artrackingstatereasonnone](https://developer.apple.com/documentation/arkit/artrackingstatereason/artrackingstatereasonnone)

# ARTrackingStateReasonNone

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

The current tracking state is not limited.

## Declaration

```objectivec
ARTrackingStateReasonNone
```

<a id="Discussion"></a>

## Discussion

This value occurs when the [trackingState](../arcamera/trackingstate-9pgmq.md) property is [ARTrackingStateNotAvailable](../artrackingstate/artrackingstatenotavailable.md) or [ARTrackingStateNormal](../artrackingstate/artrackingstatenormal.md).

## See Also

### Reason Values

- [ARTrackingStateReasonInitializing](artrackingstatereasoninitializing.md): The AR session has not yet gathered enough camera or motion data to provide tracking information.
- [ARTrackingStateReasonRelocalizing](artrackingstatereasonrelocalizing.md): The AR session is attempting to resume after an interruption.
- [ARTrackingStateReasonExcessiveMotion](artrackingstatereasonexcessivemotion.md): The device is moving too fast for accurate image-based position tracking.
- [ARTrackingStateReasonInsufficientFeatures](artrackingstatereasoninsufficientfeatures.md): The scene visible to the camera does not contain enough distinguishable features for image-based position tracking.
