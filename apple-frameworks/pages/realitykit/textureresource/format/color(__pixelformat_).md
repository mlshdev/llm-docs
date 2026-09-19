> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/textureresource/format/color(_:pixelformat:)

# color(\_:pixelFormat:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Indicates that a texture contains color data to interpret in a specific color space.

## Declaration

```swift
static func color(_ colorSpace: TextureResource.Format.ColorSpace, pixelFormat: MTLPixelFormat) -> TextureResource.Format
```

<a id="discussion"></a>

## Discussion

The created texture uses the [TextureResource.Semantic.color](../semantic-swift.enum/color.md) or [TextureResource.Semantic.hdrColor](../semantic-swift.enum/hdrcolor.md) semantic.

## See Also

### Creating the format

- [normal(\_:pixelFormat:)](normal%28__pixelformat_%29.md): Indicates that a texture is a normal map.
- [raw(pixelFormat:)](raw%28pixelformat_%29.md): Indicates a texture for unmodified use by a shader.
