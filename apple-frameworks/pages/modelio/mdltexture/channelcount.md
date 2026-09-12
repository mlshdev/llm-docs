> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltexture/channelcount](https://developer.apple.com/documentation/modelio/mdltexture/channelcount)

# channelCount (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of channels per texel.

## Declaration

```swift
var channelCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

For example, a grayscale texture has one channel (brightness) per texel, and a color texture may have three (RGB) or four (RGBA) channels per texel.

## See Also

### Examining Texture Attributes

- [dimensions](dimensions.md): The width and height, in texels, of the texture image.
- [rowStride](rowstride.md): The number of bytes between the first texel in a row of image data and the first texel in the next row.
- [channelEncoding](channelencoding.md): The data format for each channel value per texel.
- [isCube](iscube.md): A Boolean value that indicates whether the texture is a cube textures.
- [mipLevelCount](miplevelcount.md): The number of mipmap levels contained in the texture image data.

# channelCount (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of channels per texel.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger channelCount;
```

<a id="Discussion"></a>

## Discussion

For example, a grayscale texture has one channel (brightness) per texel, and a color texture may have three (RGB) or four (RGBA) channels per texel.

## See Also

### Examining Texture Attributes

- [dimensions](dimensions.md): The width and height, in texels, of the texture image.
- [rowStride](rowstride.md): The number of bytes between the first texel in a row of image data and the first texel in the next row.
- [channelEncoding](channelencoding.md): The data format for each channel value per texel.
- [isCube](iscube.md): A Boolean value that indicates whether the texture is a cube textures.
- [mipLevelCount](miplevelcount.md): The number of mipmap levels contained in the texture image data.
