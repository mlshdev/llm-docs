> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arplaneanchor/classification-swift.enum/status/notavailable

# ARPlaneAnchor.Classification.Status.notAvailable

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+

ARKit cannot currently provide plane classification information.

## Declaration

```swift
case notAvailable
```

<a id="Discussion"></a>

## Discussion

Plane classification is available only on iPhone XS and iPhone XS Max devices. On other devices, all plane anchors always indicate a classification status of [ARPlaneAnchor.Classification.Status.notAvailable](notavailable.md).

A classification status of [ARPlaneAnchor.Classification.Status.notAvailable](notavailable.md) can also occur if the plane classification process is temporarily unavilable.

## See Also

### Classification Status

- [ARPlaneAnchor.Classification.Status.undetermined](undetermined.md): ARKit has not yet produced a classification for the plane anchor.
- [ARPlaneAnchor.Classification.Status.unknown](unknown.md): ARKit has completed its classification process for the plane anchor, but the result is inconclusive.
