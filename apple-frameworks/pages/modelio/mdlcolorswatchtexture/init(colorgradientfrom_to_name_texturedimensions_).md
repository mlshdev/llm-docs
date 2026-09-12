> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlcolorswatchtexture/init(colorgradientfrom:to:name:texturedimensions:)](https://developer.apple.com/documentation/modelio/mdlcolorswatchtexture/init(colorgradientfrom:to:name:texturedimensions:))

# init(colorGradientFrom:to:name:textureDimensions:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a texture that creates a vertical gradient between two colors.

## Declaration

```swift
init(colorGradientFrom color1: CGColor, to color2: CGColor, name: String?, textureDimensions: vector_int2)
```

## Parameters

- `color1`: The color at the top of the gradient.
- `color2`: The color at the bottom of the gradient.
- `name`: The [name](../mdlnamed/name.md) property for the new texture object.
- `textureDimensions`: The texel dimensions (width and height) of the texture image.

<a id="return-value"></a>

## Return Value

A new color swatch texture object.

<a id="Discussion"></a>

## Discussion

Model I/O interpolates between the `color1` and `color2` colors by hue, saturation, and lightness to create a color gradient when generating texture data.

This initializer does not generate texel data; the [MDLColorSwatchTexture](../mdlcolorswatchtexture.md) class automatically generates data and caches it for reuse when you use one of the [MDLTexture](../mdltexture.md) methods listed in Accessing Texture Data.

## See Also

### Creating a Color Swatch Texture

- [init(colorTemperatureGradientFrom:toColorTemperature:name:textureDimensions:)](init%28colortemperaturegradientfrom_tocolortemperature_name_texturedimensions_%29.md): Initializes a texture that creates a vertical gradient between two color temperatures.

# initWithColorGradientFrom:toColor:name:textureDimensions: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a texture that creates a vertical gradient between two colors.

## Declaration

```objectivec
- (instancetype) initWithColorGradientFrom:(CGColorRef) color1 toColor:(CGColorRef) color2 name:(NSString *) name textureDimensions:(vector_int2) textureDimensions;
```

## Parameters

- `color1`: The color at the top of the gradient.
- `color2`: The color at the bottom of the gradient.
- `name`: The [name](../mdlnamed/name.md) property for the new texture object.
- `textureDimensions`: The texel dimensions (width and height) of the texture image.

<a id="return-value"></a>

## Return Value

A new color swatch texture object.

<a id="Discussion"></a>

## Discussion

Model I/O interpolates between the `color1` and `color2` colors by hue, saturation, and lightness to create a color gradient when generating texture data.

This initializer does not generate texel data; the [MDLColorSwatchTexture](../mdlcolorswatchtexture.md) class automatically generates data and caches it for reuse when you use one of the [MDLTexture](../mdltexture.md) methods listed in Accessing Texture Data.

## See Also

### Creating a Color Swatch Texture

- [initWithColorTemperatureGradientFrom:toColorTemperature:name:textureDimensions:](init%28colortemperaturegradientfrom_tocolortemperature_name_texturedimensions_%29.md): Initializes a texture that creates a vertical gradient between two color temperatures.
