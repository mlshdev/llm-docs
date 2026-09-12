> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arplaneclassificationstatus/arplaneclassificationstatusundetermined](https://developer.apple.com/documentation/arkit/arplaneclassificationstatus/arplaneclassificationstatusundetermined)

# ARPlaneClassificationStatusUndetermined

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

ARKit has not yet produced a classification for the plane anchor.

## Declaration

```objectivec
ARPlaneClassificationStatusUndetermined
```

<a id="Discussion"></a>

## Discussion

This status occurs when ARKit is still in the process of plane classification. To be notified when ARKit produces a classification, observe the same plane anchor in a later frame (for example, in the [session:didUpdateAnchors:](../arsessiondelegate/session%28__didupdate_%29-3qtt8.md) or [renderer:didUpdateNode:forAnchor:](../arscnviewdelegate/renderer%28__didupdate_for_%29.md) delegate method).

## See Also

### Classification Status

- [ARPlaneClassificationStatusNotAvailable](arplaneclassificationstatusnotavailable.md): ARKit cannot currently provide plane classification information.
- [ARPlaneClassificationStatusUnknown](arplaneclassificationstatusunknown.md): ARKit has completed its classification process for the plane anchor, but the result is inconclusive.
- [ARPlaneClassificationStatusKnown](arplaneclassificationstatusknown.md): ARKit has completed its classfication process for the plane anchor.
