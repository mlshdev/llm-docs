> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayview/subject(at:)](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayview/subject(at:))

# subject(at:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Returns the subject at the given point within the overlay view’s image, if one exists.

## Declaration

```swift
@MainActor final func subject(at point: CGPoint) async -> ImageAnalysisOverlayView.Subject?
```

## Parameters

- `point`: A point in view coordinates at which to select a subject.

<a id="return-value"></a>

## Return Value

The subject that resides at `point`; or, `nil`, if no subject resides at `point`.

<a id="discussion"></a>

## Discussion

This method works for interaction types that include [imageSubject](interactiontypes/imagesubject.md).

The following code retrieves a subject image given a screen point, for instance, where a person clicks:

```swift
let configuration = ImageAnalyzer.Configuration()
...
overlayView.preferredInteractionTypes = [.imageSubject]
...
let viewPoint = /* A point in view coordinates */
if let subjectObject = try await overlayView.subject(at: viewPoint) {
    if let image = subjectObject.image {
        // Do something with the subject image.
    }
}
```

## See Also

### Accessing image subjects

- [subjects](subjects.md): The set of all subjects the framework identifies in an image.
- [ImageAnalysisOverlayView.Subject](subject.md): An area of interest in an image that the framework identifies as a primary focal point.
- [image(for:)](image%28for_%29.md): Provides an image asynchronously that contains the given subjects with the background removed.
