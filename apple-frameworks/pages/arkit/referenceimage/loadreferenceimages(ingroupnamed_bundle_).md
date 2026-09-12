> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/referenceimage/loadreferenceimages(ingroupnamed:bundle:)](https://developer.apple.com/documentation/arkit/referenceimage/loadreferenceimages(ingroupnamed:bundle:))

# loadReferenceImages(inGroupNamed:bundle:)

**Framework:** ARKit  
**Kind:** Type Method  
**Availability:** visionOS 1.0+

Creates multiple reference images based on their group name in an asset catalog.

## Declaration

```swift
static func loadReferenceImages(inGroupNamed groupName: String, bundle: Bundle? = nil) -> [ReferenceImage]
```

## Parameters

- `groupName`: The name of the group of assets in an asset catalog.
- `bundle`: The bundle that contains the image assets. If `nil`, this method loads reference images from the main bundle.

<a id="return-value"></a>

## Return Value

An array of reference images loaded from the group you specify.

## See Also

### Creating a reference image

- [init(cgimage:physicalSize:orientation:)](init%28cgimage_physicalsize_orientation_%29.md): Creates a reference image from a Core Graphics image.
- [init(pixelBuffer:physicalSize:orientation:)](init%28pixelbuffer_physicalsize_orientation_%29.md): Creates a reference image from a pixel buffer.
