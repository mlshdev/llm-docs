> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/mipmaplevelcount](https://developer.apple.com/documentation/realitykit/textureresource/mipmaplevelcount)

# mipmapLevelCount

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The number of mipmaps for the texture.

## Declaration

```swift
@MainActor @preconcurrency var mipmapLevelCount: Int { get }
```

<a id="discussion"></a>

## Discussion

Mipmaps are additional copies of the same texture at different resolutions. This property contains the number of different versions of the texture, including the original-size version.

## See Also

### Describing the texture

- [textureType](texturetype.md): The dimension and arrangement of the texture image data.
- [pixelFormat](pixelformat.md): The texture’s pixel format.
- [height](height.md): The height of the texture image, in pixels.
- [width](width.md): The width of the texture image, in pixels.
- [depth](depth.md): The depth of the texture image, in pixels.
- [arrayLength](arraylength.md): The number of slices in the texture array.
- [semantic](semantic-swift.property.md): The intended usage of the texture resource.
