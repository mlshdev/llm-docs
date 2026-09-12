> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltexture/iscube](https://developer.apple.com/documentation/modelio/mdltexture/iscube)

# isCube (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the texture is a cube textures.

## Declaration

```swift
var isCube: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Cube textures are used in skybox rendering, light probes, and environment maps. If this property’s value is [true](https://developer.apple.com/documentation/swift/true), the texture object represents a cube texture. In this case, the texture’s image data (accessible with the methods in Accessing Texture Data) contains six square images arranged vertically. The images represent the +X, -X, +Y, -Y, +Z, and -Z faces of the cube (in that order), and the [dimensions](dimensions.md) property reflects this arrangement (height is six times width).

## See Also

### Examining Texture Attributes

- [dimensions](dimensions.md): The width and height, in texels, of the texture image.
- [rowStride](rowstride.md): The number of bytes between the first texel in a row of image data and the first texel in the next row.
- [channelCount](channelcount.md): The number of channels per texel.
- [channelEncoding](channelencoding.md): The data format for each channel value per texel.
- [mipLevelCount](miplevelcount.md): The number of mipmap levels contained in the texture image data.

# isCube (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the texture is a cube textures.

## Declaration

```objectivec
@property (nonatomic) BOOL isCube;
```

<a id="Discussion"></a>

## Discussion

Cube textures are used in skybox rendering, light probes, and environment maps. If this property’s value is [true](https://developer.apple.com/documentation/swift/true), the texture object represents a cube texture. In this case, the texture’s image data (accessible with the methods in Accessing Texture Data) contains six square images arranged vertically. The images represent the +X, -X, +Y, -Y, +Z, and -Z faces of the cube (in that order), and the [dimensions](dimensions.md) property reflects this arrangement (height is six times width).

## See Also

### Examining Texture Attributes

- [dimensions](dimensions.md): The width and height, in texels, of the texture image.
- [rowStride](rowstride.md): The number of bytes between the first texel in a row of image data and the first texel in the next row.
- [channelCount](channelcount.md): The number of channels per texel.
- [channelEncoding](channelencoding.md): The data format for each channel value per texel.
- [mipLevelCount](miplevelcount.md): The number of mipmap levels contained in the texture image data.
