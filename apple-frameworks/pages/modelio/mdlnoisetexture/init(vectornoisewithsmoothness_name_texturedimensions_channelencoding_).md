> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlnoisetexture/init(vectornoisewithsmoothness:name:texturedimensions:channelencoding:)](https://developer.apple.com/documentation/modelio/mdlnoisetexture/init(vectornoisewithsmoothness:name:texturedimensions:channelencoding:))

# init(vectorNoiseWithSmoothness:name:textureDimensions:channelEncoding:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a noise texture that creates random directional noise.

## Declaration

```swift
init(vectorNoiseWithSmoothness smoothness: Float, name: String?, textureDimensions: vector_int2, channelEncoding: MDLTextureChannelEncoding)
```

## Parameters

- `smoothness`: A value that indicates how similar neighboring texels will be in the resulting texture. The value should be between `0.0` and `1.0`. A value of `1.0` generates a smooth surface.
- `name`: The [name](../mdlnamed/name.md) property for the new texture object.
- `textureDimensions`: The texel dimensions (width and height) of the texture image.
- `channelEncoding`: The data format for each channel value per texel—for example, 8-bit integer or 32-bit floating point. For possible values, see [MDLTextureChannelEncoding](../mdltexturechannelencoding.md).

<a id="return-value"></a>

## Return Value

A new directional noise texture object.

<a id="Discussion"></a>

## Discussion

Unlike a color noise texture, in which the RGBA channels are independently randomized, a directional noise texture treats each texel’s RGB channels together as the XYZ components of a random direction vector, and the A channel as a scalar for the vector’s direction.

This initializer does not generate texel data; the [MDLNoiseTexture](../mdlnoisetexture.md) class automatically generates data and caches it for reuse when you use one of the [MDLTexture](../mdltexture.md) methods listed in Accessing Texture Data.

## See Also

### Creating a Noise Texture

- [init(scalarNoiseWithSmoothness:name:textureDimensions:channelCount:channelEncoding:grayscale:)](init%28scalarnoisewithsmoothness_name_texturedimensions_channelcount_channelencoding_grayscale_%29.md): Initializes a noise texture that creates random color noise.

# initVectorNoiseWithSmoothness:name:textureDimensions:channelEncoding: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a noise texture that creates random directional noise.

## Declaration

```objectivec
- (instancetype) initVectorNoiseWithSmoothness:(float) smoothness name:(NSString *) name textureDimensions:(vector_int2) textureDimensions channelEncoding:(MDLTextureChannelEncoding) channelEncoding;
```

## Parameters

- `smoothness`: A value that indicates how similar neighboring texels will be in the resulting texture. The value should be between `0.0` and `1.0`. A value of `1.0` generates a smooth surface.
- `name`: The [name](../mdlnamed/name.md) property for the new texture object.
- `textureDimensions`: The texel dimensions (width and height) of the texture image.
- `channelEncoding`: The data format for each channel value per texel—for example, 8-bit integer or 32-bit floating point. For possible values, see [MDLTextureChannelEncoding](../mdltexturechannelencoding.md).

<a id="return-value"></a>

## Return Value

A new directional noise texture object.

<a id="Discussion"></a>

## Discussion

Unlike a color noise texture, in which the RGBA channels are independently randomized, a directional noise texture treats each texel’s RGB channels together as the XYZ components of a random direction vector, and the A channel as a scalar for the vector’s direction.

This initializer does not generate texel data; the [MDLNoiseTexture](../mdlnoisetexture.md) class automatically generates data and caches it for reuse when you use one of the [MDLTexture](../mdltexture.md) methods listed in Accessing Texture Data.

## See Also

### Creating a Noise Texture

- [initScalarNoiseWithSmoothness:name:textureDimensions:channelCount:channelEncoding:grayscale:](init%28scalarnoisewithsmoothness_name_texturedimensions_channelcount_channelencoding_grayscale_%29.md): Initializes a noise texture that creates random color noise.
