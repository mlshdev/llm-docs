> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/format/normal(_:pixelformat:)](https://developer.apple.com/documentation/realitykit/textureresource/format/normal(_:pixelformat:))

# normal(\_:pixelFormat:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Indicates that a texture is a normal map.

## Declaration

```swift
static func normal(_ encoding: TextureResource.Format.NormalEncoding, pixelFormat: MTLPixelFormat) -> TextureResource.Format
```

<a id="discussion"></a>

## Discussion

The created texture uses the [TextureResource.Semantic.normal](../semantic-swift.enum/normal.md) semantic.

## See Also

### Creating the format

- [color(\_:pixelFormat:)](color%28__pixelformat_%29.md): Indicates that a texture contains color data to interpret in a specific color space.
- [raw(pixelFormat:)](raw%28pixelformat_%29.md): Indicates a texture for unmodified use by a shader.
