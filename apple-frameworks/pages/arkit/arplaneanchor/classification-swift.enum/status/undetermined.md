> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arplaneanchor/classification-swift.enum/status/undetermined](https://developer.apple.com/documentation/arkit/arplaneanchor/classification-swift.enum/status/undetermined)

# ARPlaneAnchor.Classification.Status.undetermined

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+

ARKit has not yet produced a classification for the plane anchor.

## Declaration

```swift
case undetermined
```

<a id="Discussion"></a>

## Discussion

This status occurs when ARKit is still in the process of plane classification. To be notified when ARKit produces a classification, observe the same plane anchor in a later frame (for example, in the [session(\_:didUpdate:)](../../../arsessiondelegate/session%28__didupdate_%29-3qtt8.md) or [renderer(\_:didUpdate:for:)](../../../arscnviewdelegate/renderer%28__didupdate_for_%29.md) delegate method).

## See Also

### Classification Status

- [ARPlaneAnchor.Classification.Status.notAvailable](notavailable.md): ARKit cannot currently provide plane classification information.
- [ARPlaneAnchor.Classification.Status.unknown](unknown.md): ARKit has completed its classification process for the plane anchor, but the result is inconclusive.
