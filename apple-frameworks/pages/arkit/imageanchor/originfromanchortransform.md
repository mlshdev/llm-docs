> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/imageanchor/originfromanchortransform

# originFromAnchorTransform

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The location and orientation of the image in world space.

## Declaration

```swift
var originFromAnchorTransform: simd_float4x4 { get }
```

## See Also

### Getting image information

- [referenceImage](referenceimage.md): The reference image that this image anchor tracks.
- [estimatedScaleFactor](estimatedscalefactor.md): The estimated scale factor between the tracked image’s physical size and the reference image’s size.
- [isTracked](istracked.md): A Boolean value that indicates whether ARKit is currently tracking this image.
- [description](description.md): A textual representation of this anchor.
- [id](id.md): The unique identifier of this anchor.
