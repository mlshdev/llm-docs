> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxcolorgamutapi_v2/colormatrixfromycbcrtodesiredrgb()](https://developer.apple.com/documentation/professional_video_applications/fxcolorgamutapi_v2/colormatrixfromycbcrtodesiredrgb())

# colorMatrixFromYCbCrToDesiredRGB() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Returns a color matrix that is appropriate for converting RGB values from YCbCr to an RGB value in the project’s working gamut.

## Declaration

```swift
func colorMatrixFromYCbCrToDesiredRGB() -> FxMatrix44!
```

<a id="return-value"></a>

## Return Value

A 4x4 matrix for converting an RGB value into YCbCr.

## Mentioned In

- [Managing color space and gamut in plug-ins](../../professional-video-applications/managing-color-space-and-gamut-in-plug-ins.md)

## See Also

### Getting Color Gamut Information

- [colorMatrixFromDesiredRGBToYCbCr()](colormatrixfromdesiredrgbtoycbcr%28%29.md): Returns a color matrix that is appropriate for converting RGB values in the project’s working gamut into YCbCr values.
- [colorPrimaries()](colorprimaries%28%29.md): Provides an enumerated type that describes the color primaries of the project’s working gamut.

# colorMatrixFromYCbCrToDesiredRGB (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns a color matrix that is appropriate for converting RGB values from YCbCr to an RGB value in the project’s working gamut.

## Declaration

```objectivec
- (FxMatrix44 *) colorMatrixFromYCbCrToDesiredRGB;
```

<a id="return-value"></a>

## Return Value

A 4x4 matrix for converting an RGB value into YCbCr.

## Mentioned In

- [Managing color space and gamut in plug-ins](../../professional-video-applications/managing-color-space-and-gamut-in-plug-ins.md)

## See Also

### Getting Color Gamut Information

- [colorMatrixFromDesiredRGBToYCbCr](colormatrixfromdesiredrgbtoycbcr%28%29.md): Returns a color matrix that is appropriate for converting RGB values in the project’s working gamut into YCbCr values.
- [colorPrimaries](colorprimaries%28%29.md): Provides an enumerated type that describes the color primaries of the project’s working gamut.
