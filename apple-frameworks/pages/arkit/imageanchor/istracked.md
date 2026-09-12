> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/imageanchor/istracked](https://developer.apple.com/documentation/arkit/imageanchor/istracked)

# isTracked

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

A Boolean value that indicates whether ARKit is currently tracking this image.

## Declaration

```swift
var isTracked: Bool { get }
```

## See Also

### Getting image information

- [originFromAnchorTransform](originfromanchortransform.md): The location and orientation of the image in world space.
- [referenceImage](referenceimage.md): The reference image that this image anchor tracks.
- [estimatedScaleFactor](estimatedscalefactor.md): The estimated scale factor between the tracked image’s physical size and the reference image’s size.
- [description](description.md): A textual representation of this anchor.
- [id](id.md): The unique identifier of this anchor.
