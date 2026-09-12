> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/artrackingstate/artrackingstatelimited](https://developer.apple.com/documentation/arkit/artrackingstate/artrackingstatelimited)

# ARTrackingStateLimited

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

Tracking is available, but the quality of results is questionable.

## Declaration

```objectivec
ARTrackingStateLimited
```

<a id="Discussion"></a>

## Discussion

In this state, the positions and transforms of anchors in the scene (especially detected planes) may not be accurate or consistent from one captured frame to the next.

See the associated [ARTrackingStateReason](../artrackingstatereason.md) value for information you can present to the user for improving tracking quality.

## See Also

### Tracking States

- [ARTrackingStateNotAvailable](artrackingstatenotavailable.md): Camera position tracking is not available.
- [ARTrackingStateNormal](artrackingstatenormal.md): Camera position tracking is providing optimal results.
