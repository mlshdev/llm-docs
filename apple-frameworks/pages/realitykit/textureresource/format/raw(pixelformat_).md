> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/textureresource/format/raw(pixelformat:)

# raw(pixelFormat:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Indicates a texture for unmodified use by a shader.

## Declaration

```swift
static func raw(pixelFormat: MTLPixelFormat) -> TextureResource.Format
```

<a id="discussion"></a>

## Discussion

The created texture uses the [TextureResource.Semantic.raw](../semantic-swift.enum/raw.md) semantic.

## See Also

### Creating the format

- [color(\_:pixelFormat:)](color%28__pixelformat_%29.md): Indicates that a texture contains color data to interpret in a specific color space.
- [normal(\_:pixelFormat:)](normal%28__pixelformat_%29.md): Indicates that a texture is a normal map.
