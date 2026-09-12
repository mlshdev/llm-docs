> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisinteraction/image(for:)](https://developer.apple.com/documentation/visionkit/imageanalysisinteraction/image(for:))

# image(for:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Provides an image asynchronously that contains the given subjects with the background removed.

## Declaration

```swift
@MainActor final func image(for subjects: Set<ImageAnalysisInteraction.Subject>) async throws -> UIImage
```

## Parameters

- `subjects`: An array of subjects to include in the image.

<a id="discussion"></a>

## Discussion

If one or more subjects fail to produce an image, the method throws [ImageAnalysisInteraction.SubjectUnavailable.imageUnavailable](subjectunavailable/imageunavailable.md).

## See Also

### Accessing image subjects

- [subjects](subjects.md): The set of all subjects the framework identifies in an image.
- [ImageAnalysisInteraction.Subject](subject.md): An area of interest in an image that the framework identifies as a primary focal point.
- [subject(at:)](subject%28at_%29.md): Returns the subject at the given point within the interaction’s image, if one exists.
