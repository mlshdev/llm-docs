> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltexture/miplevelcount](https://developer.apple.com/documentation/modelio/mdltexture/miplevelcount)

# mipLevelCount (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of mipmap levels contained in the texture image data.

## Declaration

```swift
var mipLevelCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

Mipmapping is a technique that uses multiple sizes of a texture image to increase rendering performance. If this property’s value is zero, the texture contains a single image, whose size matches the [dimensions](dimensions.md) property. If this value is 1, the texture contains an additional image at half the original dimensions; if this value is 2, the texture contains images at the original size, at half size, and at quarter size; and so on.

## See Also

### Examining Texture Attributes

- [dimensions](dimensions.md): The width and height, in texels, of the texture image.
- [rowStride](rowstride.md): The number of bytes between the first texel in a row of image data and the first texel in the next row.
- [channelCount](channelcount.md): The number of channels per texel.
- [channelEncoding](channelencoding.md): The data format for each channel value per texel.
- [isCube](iscube.md): A Boolean value that indicates whether the texture is a cube textures.

# mipLevelCount (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of mipmap levels contained in the texture image data.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger mipLevelCount;
```

<a id="Discussion"></a>

## Discussion

Mipmapping is a technique that uses multiple sizes of a texture image to increase rendering performance. If this property’s value is zero, the texture contains a single image, whose size matches the [dimensions](dimensions.md) property. If this value is 1, the texture contains an additional image at half the original dimensions; if this value is 2, the texture contains images at the original size, at half size, and at quarter size; and so on.

## See Also

### Examining Texture Attributes

- [dimensions](dimensions.md): The width and height, in texels, of the texture image.
- [rowStride](rowstride.md): The number of bytes between the first texel in a row of image data and the first texel in the next row.
- [channelCount](channelcount.md): The number of channels per texel.
- [channelEncoding](channelencoding.md): The data format for each channel value per texel.
- [isCube](iscube.md): A Boolean value that indicates whether the texture is a cube textures.
