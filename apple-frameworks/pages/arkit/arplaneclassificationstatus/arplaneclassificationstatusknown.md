> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arplaneclassificationstatus/arplaneclassificationstatusknown

# ARPlaneClassificationStatusKnown

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

ARKit has completed its classfication process for the plane anchor.

## Declaration

```objectivec
ARPlaneClassificationStatusKnown
```

<a id="Discussion"></a>

## Discussion

See the [classification](../arplaneanchor/classification-2hi2p.md) property to identify the detected surface.

## See Also

### Classification Status

- [ARPlaneClassificationStatusNotAvailable](arplaneclassificationstatusnotavailable.md): ARKit cannot currently provide plane classification information.
- [ARPlaneClassificationStatusUndetermined](arplaneclassificationstatusundetermined.md): ARKit has not yet produced a classification for the plane anchor.
- [ARPlaneClassificationStatusUnknown](arplaneclassificationstatusunknown.md): ARKit has completed its classification process for the plane anchor, but the result is inconclusive.
