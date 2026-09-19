> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arplaneanchor/classification-swift.enum/none(_:)

# ARPlaneAnchor.Classification.none(\_:)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+

No classification is available for the plane anchor.

## Declaration

```swift
case none(ARPlaneAnchor.Classification.Status)
```

<a id="Discussion"></a>

## Discussion

Plane classification can take longer than plane detection, and ARKit reports classifications only for planes where it has a high confidence in the result. See the associated [ARPlaneAnchor.Classification.Status](status.md) value for the reason a plane anchor reports no classification.

## See Also

### Missing Classification Status

- [ARPlaneAnchor.Classification.Status](status.md): Reasons ARKit is unable to classify a plane.
