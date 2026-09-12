> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/depth](https://developer.apple.com/documentation/realitykit/textureresource/depth)

# depth

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The depth of the texture image, in pixels.

## Declaration

```swift
@MainActor @preconcurrency var depth: Int { get }
```

<a id="discussion"></a>

## Discussion

The value is `0` if the texture isn’t a 3D texture.

## See Also

### Describing the texture

- [textureType](texturetype.md): The dimension and arrangement of the texture image data.
- [pixelFormat](pixelformat.md): The texture’s pixel format.
- [height](height.md): The height of the texture image, in pixels.
- [width](width.md): The width of the texture image, in pixels.
- [arrayLength](arraylength.md): The number of slices in the texture array.
- [mipmapLevelCount](mipmaplevelcount.md): The number of mipmaps for the texture.
- [semantic](semantic-swift.property.md): The intended usage of the texture resource.
