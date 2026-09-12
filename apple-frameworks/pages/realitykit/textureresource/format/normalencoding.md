> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/format/normalencoding](https://developer.apple.com/documentation/realitykit/textureresource/format/normalencoding)

# TextureResource.Format.NormalEncoding

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A profile that specifies the interpretation of pixel values as a normal.

## Declaration

```swift
enum NormalEncoding
```

## Topics

### Normal profiles

- [TextureResource.Format.NormalEncoding.wy](normalencoding/wy.md): A normal map with the X and Y components of a surface normal in the tangent space of the surface that RealityKit encodes in the alpha and green channels of a texture.
- [TextureResource.Format.NormalEncoding.xy](normalencoding/xy.md): A normal map with the X and Y components of a surface normal in the tangent space of the surface that RealityKit encodes in the red and green channels of a texture.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining the format profile

- [TextureResource.Format.ColorSpace](colorspace.md): A profile that specifies the interpretation of pixel values as a color.
