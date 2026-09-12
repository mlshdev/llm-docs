> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/referenceimage/init(cgimage:physicalsize:orientation:)](https://developer.apple.com/documentation/arkit/referenceimage/init(cgimage:physicalsize:orientation:))

# init(cgimage:physicalSize:orientation:)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** visionOS 1.0+

Creates a reference image from a Core Graphics image.

## Declaration

```swift
init(cgimage: CGImage, physicalSize: CGSize, orientation: CGImagePropertyOrientation = .up)
```

## Parameters

- `cgimage`: The image to use as a reference during tracking.
- `physicalSize`: The size of the image in meters.
- `orientation`: The orientation of the image asset.

## See Also

### Creating a reference image

- [init(pixelBuffer:physicalSize:orientation:)](init%28pixelbuffer_physicalsize_orientation_%29.md): Creates a reference image from a pixel buffer.
- [loadReferenceImages(inGroupNamed:bundle:)](loadreferenceimages%28ingroupnamed_bundle_%29.md): Creates multiple reference images based on their group name in an asset catalog.
