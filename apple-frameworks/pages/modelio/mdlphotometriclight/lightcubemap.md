> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlphotometriclight/lightcubemap](https://developer.apple.com/documentation/modelio/mdlphotometriclight/lightcubemap)

# lightCubeMap (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A cube map texture describing the light’s intensity in all directions.

## Declaration

```swift
var lightCubeMap: MDLTexture? { get }
```

<a id="Discussion"></a>

## Discussion

Use the [generateSphericalHarmonics(fromLight:)](generatesphericalharmonics%28fromlight_%29.md) method to create a cube map texture based on the light’s photometry data, then use this property to access the resulting texture. In this texture, each texel represents the light’s intensity in the direction from the cube’s center to the texel’s position on the cube.

## See Also

### Interpreting the Light Web as a Cube Texture

- [generateCubemap(fromLight:)](generatecubemap%28fromlight_%29.md): Generates a cube map texture from the light’s photometry data.

# lightCubeMap (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A cube map texture describing the light’s intensity in all directions.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) MDLTexture * lightCubeMap;
```

<a id="Discussion"></a>

## Discussion

Use the [generateSphericalHarmonicsFromLight:](generatesphericalharmonics%28fromlight_%29.md) method to create a cube map texture based on the light’s photometry data, then use this property to access the resulting texture. In this texture, each texel represents the light’s intensity in the direction from the cube’s center to the texel’s position on the cube.

## See Also

### Interpreting the Light Web as a Cube Texture

- [generateCubemapFromLight:](generatecubemap%28fromlight_%29.md): Generates a cube map texture from the light’s photometry data.
