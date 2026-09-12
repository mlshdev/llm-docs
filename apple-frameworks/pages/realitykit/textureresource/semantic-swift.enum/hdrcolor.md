> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/semantic-swift.enum/hdrcolor](https://developer.apple.com/documentation/realitykit/textureresource/semantic-swift.enum/hdrcolor)

# TextureResource.Semantic.hdrColor

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Use the texture to store a high-dynamic range image.

## Declaration

```swift
case hdrColor
```

<a id="discussion"></a>

## Discussion

Properties that specify a semantic of `hdrColor` use the texture to store high-dynamic range RGB color data. If the source image contains color space information, RealityKit modifies the individual pixels to fit the color space. If the source image is grayscale, RealityKit converts it to an RGB image first.

## See Also

### Specifying intended use

- [TextureResource.Semantic.raw](raw.md): Use the texture unmodified.
- [TextureResource.Semantic.color](color.md): Use the texture to store colors data.
- [TextureResource.Semantic.normal](normal.md): Use the texture to store surface normals.
- [TextureResource.Semantic.scalar](scalar.md): Use the texture to store a single value in each pixel.
