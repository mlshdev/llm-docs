> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/imagepresentationcomponent/init(imagesource:)

# init(imageSource:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** visionOS 26.0+

Creates a new component by loading a monoscopic texture and (if present) a pair of spatial textures from the provided image source.

## Declaration

```swift
init(imageSource: CGImageSource) async throws
```

<a id="discussion"></a>

## Discussion

> **Throws**

> Throws an error if it is not possible to load even a monoscopic texture from the image source.

## See Also

### Creating a component from a 2D image or spatial photo

- [init(contentsOf:)](init%28contentsof_%29.md): Creates a new component by loading a monoscopic texture and (if present) a pair of spatial textures from the provided image file URL.
