> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxcolorgamutapi_v2/colormatrixfromdesiredrgbtoycbcr()](https://developer.apple.com/documentation/professional_video_applications/fxcolorgamutapi_v2/colormatrixfromdesiredrgbtoycbcr())

# colorMatrixFromDesiredRGBToYCbCr() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Returns a color matrix that is appropriate for converting RGB values in the project’s working gamut into YCbCr values.

## Declaration

```swift
func colorMatrixFromDesiredRGBToYCbCr() -> FxMatrix44!
```

<a id="return-value"></a>

## Return Value

A 4x4 matrix for converting an RGB value into YCbCr.

## Mentioned In

- [Managing color space and gamut in plug-ins](../../professional-video-applications/managing-color-space-and-gamut-in-plug-ins.md)

<a id="discussion"></a>

## Discussion

You can use the first row of the resulting matrix of this function to convert from RGB to grayscale.

## See Also

### Getting Color Gamut Information

- [colorMatrixFromYCbCrToDesiredRGB()](colormatrixfromycbcrtodesiredrgb%28%29.md): Returns a color matrix that is appropriate for converting RGB values from YCbCr to an RGB value in the project’s working gamut.
- [colorPrimaries()](colorprimaries%28%29.md): Provides an enumerated type that describes the color primaries of the project’s working gamut.

# colorMatrixFromDesiredRGBToYCbCr (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns a color matrix that is appropriate for converting RGB values in the project’s working gamut into YCbCr values.

## Declaration

```objectivec
- (FxMatrix44 *) colorMatrixFromDesiredRGBToYCbCr;
```

<a id="return-value"></a>

## Return Value

A 4x4 matrix for converting an RGB value into YCbCr.

## Mentioned In

- [Managing color space and gamut in plug-ins](../../professional-video-applications/managing-color-space-and-gamut-in-plug-ins.md)

<a id="discussion"></a>

## Discussion

You can use the first row of the resulting matrix of this function to convert from RGB to grayscale.

## See Also

### Getting Color Gamut Information

- [colorMatrixFromYCbCrToDesiredRGB](colormatrixfromycbcrtodesiredrgb%28%29.md): Returns a color matrix that is appropriate for converting RGB values from YCbCr to an RGB value in the project’s working gamut.
- [colorPrimaries](colorprimaries%28%29.md): Provides an enumerated type that describes the color primaries of the project’s working gamut.
