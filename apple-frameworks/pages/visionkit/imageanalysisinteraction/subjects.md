> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisinteraction/subjects](https://developer.apple.com/documentation/visionkit/imageanalysisinteraction/subjects)

# subjects

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The set of all subjects the framework identifies in an image.

## Declaration

```swift
@MainActor final var subjects: Set<ImageAnalysisInteraction.Subject> { get async }
```

## See Also

### Accessing image subjects

- [ImageAnalysisInteraction.Subject](subject.md): An area of interest in an image that the framework identifies as a primary focal point.
- [image(for:)](image%28for_%29.md): Provides an image asynchronously that contains the given subjects with the background removed.
- [subject(at:)](subject%28at_%29.md): Returns the subject at the given point within the interaction’s image, if one exists.
