> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/imageanchor/referenceimage

# referenceImage

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The reference image that this image anchor tracks.

## Declaration

```swift
var referenceImage: ReferenceImage { get }
```

## See Also

### Getting image information

- [originFromAnchorTransform](originfromanchortransform.md): The location and orientation of the image in world space.
- [estimatedScaleFactor](estimatedscalefactor.md): The estimated scale factor between the tracked image’s physical size and the reference image’s size.
- [isTracked](istracked.md): A Boolean value that indicates whether ARKit is currently tracking this image.
- [description](description.md): A textual representation of this anchor.
- [id](id.md): The unique identifier of this anchor.
