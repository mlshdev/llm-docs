> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlskycubetexture/init(name:channelencoding:texturedimensions:turbidity:sunelevation:upperatmospherescattering:groundalbedo:)](https://developer.apple.com/documentation/modelio/mdlskycubetexture/init(name:channelencoding:texturedimensions:turbidity:sunelevation:upperatmospherescattering:groundalbedo:))

# init(name:channelEncoding:textureDimensions:turbidity:sunElevation:upperAtmosphereScattering:groundAlbedo:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a sky cube texture object with the specified parameters.

## Declaration

```swift
init(name: String?, channelEncoding: MDLTextureChannelEncoding, textureDimensions: vector_int2, turbidity: Float, sunElevation: Float, upperAtmosphereScattering: Float, groundAlbedo: Float)
```

## Parameters

- `name`: The [name](../mdlnamed/name.md) property for the new texture object.
- `channelEncoding`: The data format for each channel value per texel—for example, 8-bit integer or 32-bit floating point. For possible values, see [MDLTextureChannelEncoding](../mdltexturechannelencoding.md).
- `textureDimensions`: The texel dimensions (width and height) of the texture image.
- `turbidity`: The cloudiness or haziness of the simulated sky. See the [turbidity](turbidity.md) property.
- `sunElevation`: The sun’s position in the simulated sky. See the [sunElevation](sunelevation.md) property.
- `upperAtmosphereScattering`: A factor that influences the color of the simulated sky. See the [upperAtmosphereScattering](upperatmospherescattering.md) property.
- `groundAlbedo`: A factor that influences the clarity of the simulated sky. See the [groundAlbedo](groundalbedo.md) property.

<a id="return-value"></a>

## Return Value

A new sky cube texture object.

<a id="Discussion"></a>

## Discussion

The newly created texture is a cube texture; that is, its [isCube](../mdltexture/iscube.md) property is [true](https://developer.apple.com/documentation/swift/true), and its [dimensions](../mdltexture/dimensions.md) property reflects the vertical layout of cube faces.

This initializer does not generate texel data; the [MDLSkyCubeTexture](../mdlskycubetexture.md) class automatically generates data and caches it for reuse when you use one of the [MDLTexture](../mdltexture.md) methods listed in Accessing Texture Data.

# initWithName:channelEncoding:textureDimensions:turbidity:sunElevation:upperAtmosphereScattering:groundAlbedo: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a sky cube texture object with the specified parameters.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name channelEncoding:(MDLTextureChannelEncoding) channelEncoding textureDimensions:(vector_int2) textureDimensions turbidity:(float) turbidity sunElevation:(float) sunElevation upperAtmosphereScattering:(float) upperAtmosphereScattering groundAlbedo:(float) groundAlbedo;
```

## Parameters

- `name`: The [name](../mdlnamed/name.md) property for the new texture object.
- `channelEncoding`: The data format for each channel value per texel—for example, 8-bit integer or 32-bit floating point. For possible values, see [MDLTextureChannelEncoding](../mdltexturechannelencoding.md).
- `textureDimensions`: The texel dimensions (width and height) of the texture image.
- `turbidity`: The cloudiness or haziness of the simulated sky. See the [turbidity](turbidity.md) property.
- `sunElevation`: The sun’s position in the simulated sky. See the [sunElevation](sunelevation.md) property.
- `upperAtmosphereScattering`: A factor that influences the color of the simulated sky. See the [upperAtmosphereScattering](upperatmospherescattering.md) property.
- `groundAlbedo`: A factor that influences the clarity of the simulated sky. See the [groundAlbedo](groundalbedo.md) property.

<a id="return-value"></a>

## Return Value

A new sky cube texture object.

<a id="Discussion"></a>

## Discussion

The newly created texture is a cube texture; that is, its [isCube](../mdltexture/iscube.md) property is [true](https://developer.apple.com/documentation/swift/true), and its [dimensions](../mdltexture/dimensions.md) property reflects the vertical layout of cube faces.

This initializer does not generate texel data; the [MDLSkyCubeTexture](../mdlskycubetexture.md) class automatically generates data and caches it for reuse when you use one of the [MDLTexture](../mdltexture.md) methods listed in Accessing Texture Data.
