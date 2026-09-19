> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arplaneclassificationstatus/arplaneclassificationstatusnotavailable

# ARPlaneClassificationStatusNotAvailable

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

ARKit cannot currently provide plane classification information.

## Declaration

```objectivec
ARPlaneClassificationStatusNotAvailable
```

<a id="Discussion"></a>

## Discussion

Plane classification is available only on iPhone XS, iPhone XS Max, and iPhone XR. On other devices, all plane anchors always indicate a classification status of [ARPlaneClassificationStatusNotAvailable](arplaneclassificationstatusnotavailable.md).

A classification status of [ARPlaneClassificationStatusNotAvailable](arplaneclassificationstatusnotavailable.md) can also occur if the plane classification process is temporarily unavilable.

## See Also

### Classification Status

- [ARPlaneClassificationStatusUndetermined](arplaneclassificationstatusundetermined.md): ARKit has not yet produced a classification for the plane anchor.
- [ARPlaneClassificationStatusUnknown](arplaneclassificationstatusunknown.md): ARKit has completed its classification process for the plane anchor, but the result is inconclusive.
- [ARPlaneClassificationStatusKnown](arplaneclassificationstatusknown.md): ARKit has completed its classfication process for the plane anchor.
