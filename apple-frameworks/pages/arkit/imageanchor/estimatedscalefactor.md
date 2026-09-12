> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/imageanchor/estimatedscalefactor](https://developer.apple.com/documentation/arkit/imageanchor/estimatedscalefactor)

# estimatedScaleFactor

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The estimated scale factor between the tracked image’s physical size and the reference image’s size.

## Declaration

```swift
var estimatedScaleFactor: Float { get }
```

<a id="Discussion"></a>

## Discussion

The scale factor is between the tracked image’s size and the [physicalSize](../referenceimage/physicalsize.md) property on the reference image you supply when you create an image tracking provider. For example, if you supply a reference image and the version that appears in front of someone is three times larger, this property is `3.0`.

## See Also

### Getting image information

- [originFromAnchorTransform](originfromanchortransform.md): The location and orientation of the image in world space.
- [referenceImage](referenceimage.md): The reference image that this image anchor tracks.
- [isTracked](istracked.md): A Boolean value that indicates whether ARKit is currently tracking this image.
- [description](description.md): A textual representation of this anchor.
- [id](id.md): The unique identifier of this anchor.
