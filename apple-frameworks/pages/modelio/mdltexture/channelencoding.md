> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltexture/channelencoding](https://developer.apple.com/documentation/modelio/mdltexture/channelencoding)

# channelEncoding (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The data format for each channel value per texel.

## Declaration

```swift
var channelEncoding: MDLTextureChannelEncoding { get }
```

<a id="Discussion"></a>

## Discussion

For example, each channel value for a texel may be an 8-bit integer or a 32-bit floating point value. For possible channel encodings, see [MDLTextureChannelEncoding](../mdltexturechannelencoding.md).

## See Also

### Examining Texture Attributes

- [dimensions](dimensions.md): The width and height, in texels, of the texture image.
- [rowStride](rowstride.md): The number of bytes between the first texel in a row of image data and the first texel in the next row.
- [channelCount](channelcount.md): The number of channels per texel.
- [isCube](iscube.md): A Boolean value that indicates whether the texture is a cube textures.
- [mipLevelCount](miplevelcount.md): The number of mipmap levels contained in the texture image data.

# channelEncoding (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The data format for each channel value per texel.

## Declaration

```objectivec
@property (nonatomic, readonly) MDLTextureChannelEncoding channelEncoding;
```

<a id="Discussion"></a>

## Discussion

For example, each channel value for a texel may be an 8-bit integer or a 32-bit floating point value. For possible channel encodings, see [MDLTextureChannelEncoding](../mdltexturechannelencoding.md).

## See Also

### Examining Texture Attributes

- [dimensions](dimensions.md): The width and height, in texels, of the texture image.
- [rowStride](rowstride.md): The number of bytes between the first texel in a row of image data and the first texel in the next row.
- [channelCount](channelcount.md): The number of channels per texel.
- [isCube](iscube.md): A Boolean value that indicates whether the texture is a cube textures.
- [mipLevelCount](miplevelcount.md): The number of mipmap levels contained in the texture image data.
