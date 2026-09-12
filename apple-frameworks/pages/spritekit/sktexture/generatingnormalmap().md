> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktexture/generatingnormalmap()](https://developer.apple.com/documentation/spritekit/sktexture/generatingnormalmap())

# generatingNormalMap() (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a normal map texture by analyzing the contents of an existing texture.

## Declaration

```swift
func generatingNormalMap() -> Self
```

<a id="return-value"></a>

## Return Value

A new texture object that contains a normal map.

<a id="Discussion"></a>

## Discussion

A normal map texture is similar to an image texture, but instead of holding image data to be displayed onscreen, every texel represents a normal vector. Normal map textures are used to simulate 3D lighting (see the [normalTexture](../skspritenode/normaltexture.md) property) or used to generate velocity values (see [velocityField(with:)](../skfieldnode/velocityfield%28with_%29.md)).

You can create normal maps in two different ways. First, you can take an existing image map and use it to generate a normal map. SpriteKit filters the color data in the texture and then uses it to generate a map based on pixel contrast. Alternatively, you can load a regular image file but treat it as a normal map. To do this, provide a texture with 32-bit `RGBx` pixel data. Each component’s 8-bit integer value is mapped to a floating point number between the values of `-1.0` and `1.0`. Use a `0` to represent `-1.0f`, a value of `127` to represent `0.0`, and a value of `255` to represent `+1.0`.

The image below shows two sprite nodes both with the same texture. The node on the right has a normal map from the same noise texture generated using the [generatingNormalMap()](generatingnormalmap%28%29.md) method.

![Comparison of sprites with and without normal mapping](https://developer.apple.com/images/com.apple.spritekit/media-3020491@2x.png)

## See Also

### Texture from Normal Map

- [generatingNormalMap(withSmoothness:contrast:)](generatingnormalmap%28withsmoothness_contrast_%29.md): Creates a normal map texture by analyzing the contents of an existing texture.

# textureByGeneratingNormalMap (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a normal map texture by analyzing the contents of an existing texture.

## Declaration

```objectivec
- (instancetype) textureByGeneratingNormalMap;
```

<a id="return-value"></a>

## Return Value

A new texture object that contains a normal map.

<a id="Discussion"></a>

## Discussion

A normal map texture is similar to an image texture, but instead of holding image data to be displayed onscreen, every texel represents a normal vector. Normal map textures are used to simulate 3D lighting (see the [normalTexture](../skspritenode/normaltexture.md) property) or used to generate velocity values (see [velocityFieldWithTexture:](../skfieldnode/velocityfield%28with_%29.md)).

You can create normal maps in two different ways. First, you can take an existing image map and use it to generate a normal map. SpriteKit filters the color data in the texture and then uses it to generate a map based on pixel contrast. Alternatively, you can load a regular image file but treat it as a normal map. To do this, provide a texture with 32-bit `RGBx` pixel data. Each component’s 8-bit integer value is mapped to a floating point number between the values of `-1.0` and `1.0`. Use a `0` to represent `-1.0f`, a value of `127` to represent `0.0`, and a value of `255` to represent `+1.0`.

The image below shows two sprite nodes both with the same texture. The node on the right has a normal map from the same noise texture generated using the [textureByGeneratingNormalMap](generatingnormalmap%28%29.md) method.

![Comparison of sprites with and without normal mapping](https://developer.apple.com/images/com.apple.spritekit/media-3020491@2x.png)

## See Also

### Texture from Normal Map

- [textureByGeneratingNormalMapWithSmoothness:contrast:](generatingnormalmap%28withsmoothness_contrast_%29.md): Creates a normal map texture by analyzing the contents of an existing texture.
