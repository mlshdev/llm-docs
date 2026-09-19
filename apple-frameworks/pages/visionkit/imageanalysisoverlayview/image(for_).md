> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/imageanalysisoverlayview/image(for:)

# image(for:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Provides an image asynchronously that contains the given subjects with the background removed.

## Declaration

```swift
@MainActor final func image(for subjects: Set<ImageAnalysisOverlayView.Subject>) async throws -> NSImage
```

## Parameters

- `subjects`: An array of subjects to include in the image.

<a id="discussion"></a>

## Discussion

If one or more subjects fail to produce an image, the method throws [ImageAnalysisOverlayView.SubjectUnavailable.imageUnavailable](subjectunavailable/imageunavailable.md).

## See Also

### Accessing image subjects

- [subjects](subjects.md): The set of all subjects the framework identifies in an image.
- [ImageAnalysisOverlayView.Subject](subject.md): An area of interest in an image that the framework identifies as a primary focal point.
- [subject(at:)](subject%28at_%29.md): Returns the subject at the given point within the overlay view’s image, if one exists.
