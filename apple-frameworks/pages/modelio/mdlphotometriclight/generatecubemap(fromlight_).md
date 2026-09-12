> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlphotometriclight/generatecubemap(fromlight:)](https://developer.apple.com/documentation/modelio/mdlphotometriclight/generatecubemap(fromlight:))

# generateCubemap(fromLight:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Generates a cube map texture from the light’s photometry data.

## Declaration

```swift
func generateCubemap(fromLight textureSize: Int)
```

## Parameters

- `textureSize`: The size (side length in pixels) of cube map texture to generate.

<a id="Discussion"></a>

## Discussion

After generating a texture, use the [lightCubeMap](lightcubemap.md) property to access it. In this texture, each texel represents the light’s intensity in the direction from the cube’s center to the texel’s position on the cube.

## See Also

### Interpreting the Light Web as a Cube Texture

- [lightCubeMap](lightcubemap.md): A cube map texture describing the light’s intensity in all directions.

# generateCubemapFromLight: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Generates a cube map texture from the light’s photometry data.

## Declaration

```objectivec
- (void) generateCubemapFromLight:(NSUInteger) textureSize;
```

## Parameters

- `textureSize`: The size (side length in pixels) of cube map texture to generate.

<a id="Discussion"></a>

## Discussion

After generating a texture, use the [lightCubeMap](lightcubemap.md) property to access it. In this texture, each texel represents the light’s intensity in the direction from the cube’s center to the texel’s position on the cube.

## See Also

### Interpreting the Light Web as a Cube Texture

- [lightCubeMap](lightcubemap.md): A cube map texture describing the light’s intensity in all directions.
