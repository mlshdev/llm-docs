> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/referenceimage/init(pixelbuffer:physicalsize:orientation:)

# init(pixelBuffer:physicalSize:orientation:)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** visionOS 1.0+

Creates a reference image from a pixel buffer.

## Declaration

```swift
init(pixelBuffer: CVPixelBuffer, physicalSize: CGSize, orientation: CGImagePropertyOrientation = .up)
```

## Parameters

- `pixelBuffer`: The image to use as a reference during tracking.
- `physicalSize`: The size of the image in meters.
- `orientation`: The orientation of the image asset.

## See Also

### Creating a reference image

- [init(cgimage:physicalSize:orientation:)](init%28cgimage_physicalsize_orientation_%29.md): Creates a reference image from a Core Graphics image.
- [loadReferenceImages(inGroupNamed:bundle:)](loadreferenceimages%28ingroupnamed_bundle_%29.md): Creates multiple reference images based on their group name in an asset catalog.
