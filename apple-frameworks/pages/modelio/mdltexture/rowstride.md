> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltexture/rowstride](https://developer.apple.com/documentation/modelio/mdltexture/rowstride)

# rowStride (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of bytes between the first texel in a row of image data and the first texel in the next row.

## Declaration

```swift
var rowStride: Int { get }
```

<a id="Discussion"></a>

## Discussion

If this value is zero, the texture does not support direct addressing of texels—this is the case for some compressed texture formats.

## See Also

### Examining Texture Attributes

- [dimensions](dimensions.md): The width and height, in texels, of the texture image.
- [channelCount](channelcount.md): The number of channels per texel.
- [channelEncoding](channelencoding.md): The data format for each channel value per texel.
- [isCube](iscube.md): A Boolean value that indicates whether the texture is a cube textures.
- [mipLevelCount](miplevelcount.md): The number of mipmap levels contained in the texture image data.

# rowStride (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of bytes between the first texel in a row of image data and the first texel in the next row.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger rowStride;
```

<a id="Discussion"></a>

## Discussion

If this value is zero, the texture does not support direct addressing of texels—this is the case for some compressed texture formats.

## See Also

### Examining Texture Attributes

- [dimensions](dimensions.md): The width and height, in texels, of the texture image.
- [channelCount](channelcount.md): The number of channels per texel.
- [channelEncoding](channelencoding.md): The data format for each channel value per texel.
- [isCube](iscube.md): A Boolean value that indicates whether the texture is a cube textures.
- [mipLevelCount](miplevelcount.md): The number of mipmap levels contained in the texture image data.
