> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlnoisetexture/init(scalarnoisewithsmoothness:name:texturedimensions:channelcount:channelencoding:grayscale:)](https://developer.apple.com/documentation/modelio/mdlnoisetexture/init(scalarnoisewithsmoothness:name:texturedimensions:channelcount:channelencoding:grayscale:))

# init(scalarNoiseWithSmoothness:name:textureDimensions:channelCount:channelEncoding:grayscale:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a noise texture that creates random color noise.

## Declaration

```swift
init(scalarNoiseWithSmoothness smoothness: Float, name: String?, textureDimensions: vector_int2, channelCount: Int32, channelEncoding: MDLTextureChannelEncoding, grayscale: Bool)
```

## Parameters

- `smoothness`: A value that indicates how similar neighboring texels will be in the resulting texture. The value should be between `0.0` and `1.0`. A value of `1.0` generates a smooth surface.
- `name`: The [name](../mdlnamed/name.md) property for the new texture object.
- `textureDimensions`: The texel dimensions (width and height) of the texture image.
- `channelCount`: The number of channels per texel—for example, 1 for a grayscale texture, 3 for an RGB color texture, or 4 for RGBA.
- `channelEncoding`: The data format for each channel value per texel—for example, 8-bit integer or 32-bit floating point. For possible values, see [MDLTextureChannelEncoding](../mdltexturechannelencoding.md).
- `grayscale`: If [true](https://developer.apple.com/documentation/swift/true), all four components of each texel will have equal values. If [false](https://developer.apple.com/documentation/swift/false), all four values are completely randomized.

<a id="return-value"></a>

## Return Value

A new color noise texture object.

<a id="Discussion"></a>

## Discussion

A color noise texture has random values for each color channel and can be tiled or mirrored without showing visible borders.

This initializer does not generate texel data; the [MDLNoiseTexture](../mdlnoisetexture.md) class automatically generates data and caches it for reuse when you use one of the [MDLTexture](../mdltexture.md) methods listed in Accessing Texture Data.

## See Also

### Creating a Noise Texture

- [init(vectorNoiseWithSmoothness:name:textureDimensions:channelEncoding:)](init%28vectornoisewithsmoothness_name_texturedimensions_channelencoding_%29.md): Initializes a noise texture that creates random directional noise.

# initScalarNoiseWithSmoothness:name:textureDimensions:channelCount:channelEncoding:grayscale: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a noise texture that creates random color noise.

## Declaration

```objectivec
- (instancetype) initScalarNoiseWithSmoothness:(float) smoothness name:(NSString *) name textureDimensions:(vector_int2) textureDimensions channelCount:(int) channelCount channelEncoding:(MDLTextureChannelEncoding) channelEncoding grayscale:(BOOL) grayscale;
```

## Parameters

- `smoothness`: A value that indicates how similar neighboring texels will be in the resulting texture. The value should be between `0.0` and `1.0`. A value of `1.0` generates a smooth surface.
- `name`: The [name](../mdlnamed/name.md) property for the new texture object.
- `textureDimensions`: The texel dimensions (width and height) of the texture image.
- `channelCount`: The number of channels per texel—for example, 1 for a grayscale texture, 3 for an RGB color texture, or 4 for RGBA.
- `channelEncoding`: The data format for each channel value per texel—for example, 8-bit integer or 32-bit floating point. For possible values, see [MDLTextureChannelEncoding](../mdltexturechannelencoding.md).
- `grayscale`: If [true](https://developer.apple.com/documentation/swift/true), all four components of each texel will have equal values. If [false](https://developer.apple.com/documentation/swift/false), all four values are completely randomized.

<a id="return-value"></a>

## Return Value

A new color noise texture object.

<a id="Discussion"></a>

## Discussion

A color noise texture has random values for each color channel and can be tiled or mirrored without showing visible borders.

This initializer does not generate texel data; the [MDLNoiseTexture](../mdlnoisetexture.md) class automatically generates data and caches it for reuse when you use one of the [MDLTexture](../mdltexture.md) methods listed in Accessing Texture Data.

## See Also

### Creating a Noise Texture

- [initVectorNoiseWithSmoothness:name:textureDimensions:channelEncoding:](init%28vectornoisewithsmoothness_name_texturedimensions_channelencoding_%29.md): Initializes a noise texture that creates random directional noise.
