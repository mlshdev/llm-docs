> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/semantic-swift.enum/scalar](https://developer.apple.com/documentation/realitykit/textureresource/semantic-swift.enum/scalar)

# TextureResource.Semantic.scalar

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Use the texture to store a single value in each pixel.

## Declaration

```swift
case scalar
```

<a id="discussion"></a>

## Discussion

Properties that specify a semantic of `scalar` use the texture to store a single floating point value in each pixel. If the texture’s source is an RGB image, the property uses only the red channel value.

## See Also

### Specifying intended use

- [TextureResource.Semantic.raw](raw.md): Use the texture unmodified.
- [TextureResource.Semantic.color](color.md): Use the texture to store colors data.
- [TextureResource.Semantic.hdrColor](hdrcolor.md): Use the texture to store a high-dynamic range image.
- [TextureResource.Semantic.normal](normal.md): Use the texture to store surface normals.
