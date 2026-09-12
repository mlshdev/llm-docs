> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/imagepresentationcomponent/init(contentsof:)](https://developer.apple.com/documentation/realitykit/imagepresentationcomponent/init(contentsof:))

# init(contentsOf:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** visionOS 26.0+

Creates a new component by loading a monoscopic texture and (if present) a pair of spatial textures from the provided image file URL.

## Declaration

```swift
init(contentsOf url: URL) async throws
```

<a id="discussion"></a>

## Discussion

> **Throws**

> Throws an error if it is not possible to load even a monoscopic texture from the image file.

## See Also

### Creating a component from a 2D image or spatial photo

- [init(imageSource:)](init%28imagesource_%29.md): Creates a new component by loading a monoscopic texture and (if present) a pair of spatial textures from the provided image source.
