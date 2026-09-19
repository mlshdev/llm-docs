> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/imageanalysisoverlayview/subjects

# subjects

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The set of all subjects the framework identifies in an image.

## Declaration

```swift
@MainActor final var subjects: Set<ImageAnalysisOverlayView.Subject> { get async }
```

## See Also

### Accessing image subjects

- [ImageAnalysisOverlayView.Subject](subject.md): An area of interest in an image that the framework identifies as a primary focal point.
- [image(for:)](image%28for_%29.md): Provides an image asynchronously that contains the given subjects with the background removed.
- [subject(at:)](subject%28at_%29.md): Returns the subject at the given point within the overlay view’s image, if one exists.
