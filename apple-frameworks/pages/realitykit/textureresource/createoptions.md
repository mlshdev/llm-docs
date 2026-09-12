> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/createoptions](https://developer.apple.com/documentation/realitykit/textureresource/createoptions)

# TextureResource.CreateOptions

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An object that holds texture resource creation options.

## Declaration

```swift
struct CreateOptions
```

## Topics

### Texture resource initializers

- [init(semantic:mipmapsMode:)](createoptions/init%28semantic_mipmapsmode_%29.md): Creates a texture creation options structure.

### Texture resource creation options

- [mipmapsMode](createoptions/mipmapsmode.md): Whether the texture resource automatically generates mipmaps.
- [semantic](createoptions/semantic.md): The intended use of the texture.

### Initializers

- [init(semantic:compression:mipmapsMode:)](createoptions/init%28semantic_compression_mipmapsmode_%29.md): Creates a texture creation options structure.

### Instance Properties

- [compression](createoptions/compression.md)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Texture resources

- [Generating procedural textures](../../visionos/generating-procedural-textures-in-visionos.md): Display a 3D model that generates procedural textures in a reality view.
- [Displaying a stereoscopic image](../../visionos/displaying-a-stereoscopic-image-in-visionos.md): Build a stereoscopic image by applying textures to the left and right eye in a shader graph material.
- [TextureResource](../textureresource.md): A representation of a texture.
- [TextureResource.SamplingQuality](samplingquality.md): An object for controlling the texture-sampling quality.
- [TextureResource.MipmapsMode](mipmapsmode.md): An enumeration for specifying how to allocate and generate mipmaps for a texture.
- [TextureResource.Semantic](semantic-swift.enum.md): An object for specifying the intended use of a texture.
