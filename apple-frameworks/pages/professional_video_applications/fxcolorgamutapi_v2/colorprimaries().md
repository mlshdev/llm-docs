> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxcolorgamutapi_v2/colorprimaries()](https://developer.apple.com/documentation/professional_video_applications/fxcolorgamutapi_v2/colorprimaries())

# colorPrimaries() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.2.6+

Provides an enumerated type that describes the color primaries of the project’s working gamut.

## Declaration

```swift
func colorPrimaries() -> FxColorPrimaries
```

<a id="return-value"></a>

## Return Value

An [FxColorPrimaries](../fxcolorprimaries.md) value that describes the project’s working gamut.

## Mentioned In

- [Managing color space and gamut in plug-ins](../../professional-video-applications/managing-color-space-and-gamut-in-plug-ins.md)

## See Also

### Getting Color Gamut Information

- [colorMatrixFromDesiredRGBToYCbCr()](colormatrixfromdesiredrgbtoycbcr%28%29.md): Returns a color matrix that is appropriate for converting RGB values in the project’s working gamut into YCbCr values.
- [colorMatrixFromYCbCrToDesiredRGB()](colormatrixfromycbcrtodesiredrgb%28%29.md): Returns a color matrix that is appropriate for converting RGB values from YCbCr to an RGB value in the project’s working gamut.

# colorPrimaries (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Provides an enumerated type that describes the color primaries of the project’s working gamut.

## Declaration

```objectivec
- (FxColorPrimaries) colorPrimaries;
```

<a id="return-value"></a>

## Return Value

An [FxColorPrimaries](../fxcolorprimaries.md) value that describes the project’s working gamut.

## Mentioned In

- [Managing color space and gamut in plug-ins](../../professional-video-applications/managing-color-space-and-gamut-in-plug-ins.md)

## See Also

### Getting Color Gamut Information

- [colorMatrixFromDesiredRGBToYCbCr](colormatrixfromdesiredrgbtoycbcr%28%29.md): Returns a color matrix that is appropriate for converting RGB values in the project’s working gamut into YCbCr values.
- [colorMatrixFromYCbCrToDesiredRGB](colormatrixfromycbcrtodesiredrgb%28%29.md): Returns a color matrix that is appropriate for converting RGB values from YCbCr to an RGB value in the project’s working gamut.
