> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arplaneanchor/classification-swift.enum/status/unknown](https://developer.apple.com/documentation/arkit/arplaneanchor/classification-swift.enum/status/unknown)

# ARPlaneAnchor.Classification.Status.unknown

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+

ARKit has completed its classification process for the plane anchor, but the result is inconclusive.

## Declaration

```swift
case unknown
```

<a id="Discussion"></a>

## Discussion

ARKit attempts to classify detected planes using a finite set of common categories. However, a detected plane may not be a real object fitting any of those categories, or the plane classification process may not be able to recognize it. In such cases, the plane anchor’s [classification](../../classification-2hi2p.md) is [ARPlaneAnchor.Classification.none(\_:)](../none%28__%29.md) with an associated value of [ARPlaneAnchor.Classification.Status.unknown](unknown.md).

## See Also

### Classification Status

- [ARPlaneAnchor.Classification.Status.notAvailable](notavailable.md): ARKit cannot currently provide plane classification information.
- [ARPlaneAnchor.Classification.Status.undetermined](undetermined.md): ARKit has not yet produced a classification for the plane anchor.
