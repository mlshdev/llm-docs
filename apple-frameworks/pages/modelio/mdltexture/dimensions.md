> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltexture/dimensions](https://developer.apple.com/documentation/modelio/mdltexture/dimensions)

# dimensions (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The width and height, in texels, of the texture image.

## Declaration

```swift
var dimensions: vector_int2 { get }
```

<a id="Discussion"></a>

## Discussion

If the texture contains multiple mipmap levels (the [mipLevelCount](miplevelcount.md) value is greater than zero), this property reflects the base (largest) mipmap level.

If the texture is a cube texture (the [isCube](iscube.md) value is [true](https://developer.apple.com/documentation/swift/true)), this property reflects the vertical arrangement of cube faces in the texture image data. That is, the texture’s height is six times its width, and the data represents six square images for the six sides of the cube.

## See Also

### Examining Texture Attributes

- [rowStride](rowstride.md): The number of bytes between the first texel in a row of image data and the first texel in the next row.
- [channelCount](channelcount.md): The number of channels per texel.
- [channelEncoding](channelencoding.md): The data format for each channel value per texel.
- [isCube](iscube.md): A Boolean value that indicates whether the texture is a cube textures.
- [mipLevelCount](miplevelcount.md): The number of mipmap levels contained in the texture image data.

# dimensions (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The width and height, in texels, of the texture image.

## Declaration

```objectivec
@property (nonatomic, readonly) vector_int2 dimensions;
```

<a id="Discussion"></a>

## Discussion

If the texture contains multiple mipmap levels (the [mipLevelCount](miplevelcount.md) value is greater than zero), this property reflects the base (largest) mipmap level.

If the texture is a cube texture (the [isCube](iscube.md) value is [true](https://developer.apple.com/documentation/swift/true)), this property reflects the vertical arrangement of cube faces in the texture image data. That is, the texture’s height is six times its width, and the data represents six square images for the six sides of the cube.

## See Also

### Examining Texture Attributes

- [rowStride](rowstride.md): The number of bytes between the first texel in a row of image data and the first texel in the next row.
- [channelCount](channelcount.md): The number of channels per texel.
- [channelEncoding](channelencoding.md): The data format for each channel value per texel.
- [isCube](iscube.md): A Boolean value that indicates whether the texture is a cube textures.
- [mipLevelCount](miplevelcount.md): The number of mipmap levels contained in the texture image data.
