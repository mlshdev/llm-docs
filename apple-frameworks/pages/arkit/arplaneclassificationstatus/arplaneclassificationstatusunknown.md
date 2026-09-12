> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arplaneclassificationstatus/arplaneclassificationstatusunknown](https://developer.apple.com/documentation/arkit/arplaneclassificationstatus/arplaneclassificationstatusunknown)

# ARPlaneClassificationStatusUnknown

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

ARKit has completed its classification process for the plane anchor, but the result is inconclusive.

## Declaration

```objectivec
ARPlaneClassificationStatusUnknown
```

<a id="Discussion"></a>

## Discussion

ARKit attempts to classify detected planes using a finite set of common categories. However, a detected plane may not be a real object fitting any of those categories, or the plane classification process may not be able to recognize it. In such cases, the plane anchor’s [classification](../arplaneanchor/classification-2hi2p.md) is [ARPlaneClassificationNone](../arplaneclassification/arplaneclassificationnone.md) and its [classificationStatus](../arplaneanchor/classificationstatus.md) is [ARPlaneClassificationStatusUnknown](arplaneclassificationstatusunknown.md).

## See Also

### Classification Status

- [ARPlaneClassificationStatusNotAvailable](arplaneclassificationstatusnotavailable.md): ARKit cannot currently provide plane classification information.
- [ARPlaneClassificationStatusUndetermined](arplaneclassificationstatusundetermined.md): ARKit has not yet produced a classification for the plane anchor.
- [ARPlaneClassificationStatusKnown](arplaneclassificationstatusknown.md): ARKit has completed its classfication process for the plane anchor.
