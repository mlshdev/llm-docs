> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxcolorgamutapi_v2](https://developer.apple.com/documentation/professional_video_applications/fxcolorgamutapi_v2)

# FxColorGamutAPI_v2 (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 4.0+

A protocol that handles plug-in queries to the host for the project’s color gamut.

## Declaration

```swift
protocol FxColorGamutAPI_v2
```

## Mentioned In

- [Managing color space and gamut in plug-ins](../professional-video-applications/managing-color-space-and-gamut-in-plug-ins.md)

<a id="overview"></a>

## Overview

The `FxColorGamutAPI` retrieves the matrices for converting between RGB (in the project’s color gamut) and YCbCr. Use this protocol when your plug-in converts to YCbCr or from color pixels to grayscale.

> **Note**

>  This is version 2 of the Color Gamut API and does not require `FxTime`.

## Topics

### Getting Color Gamut Information

- [colorMatrixFromDesiredRGBToYCbCr()](fxcolorgamutapi_v2/colormatrixfromdesiredrgbtoycbcr%28%29.md): Returns a color matrix that is appropriate for converting RGB values in the project’s working gamut into YCbCr values.
- [colorMatrixFromYCbCrToDesiredRGB()](fxcolorgamutapi_v2/colormatrixfromycbcrtodesiredrgb%28%29.md): Returns a color matrix that is appropriate for converting RGB values from YCbCr to an RGB value in the project’s working gamut.
- [colorPrimaries()](fxcolorgamutapi_v2/colorprimaries%28%29.md): Provides an enumerated type that describes the color primaries of the project’s working gamut.

### Constants

- [FxColorPrimaries](fxcolorprimaries.md): Constants used to describe a set of color primaries.

## See Also

### Color

- [Managing color space and gamut in plug-ins](../professional-video-applications/managing-color-space-and-gamut-in-plug-ins.md): Control the appearance of your rendering by using the color gamut API.

# FxColorGamutAPI_v2 (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

A protocol that handles plug-in queries to the host for the project’s color gamut.

## Declaration

```objectivec
@protocol FxColorGamutAPI_v2
```

## Mentioned In

- [Managing color space and gamut in plug-ins](../professional-video-applications/managing-color-space-and-gamut-in-plug-ins.md)

<a id="overview"></a>

## Overview

The `FxColorGamutAPI` retrieves the matrices for converting between RGB (in the project’s color gamut) and YCbCr. Use this protocol when your plug-in converts to YCbCr or from color pixels to grayscale.

> **Note**

>  This is version 2 of the Color Gamut API and does not require `FxTime`.

## Topics

### Getting Color Gamut Information

- [colorMatrixFromDesiredRGBToYCbCr](fxcolorgamutapi_v2/colormatrixfromdesiredrgbtoycbcr%28%29.md): Returns a color matrix that is appropriate for converting RGB values in the project’s working gamut into YCbCr values.
- [colorMatrixFromYCbCrToDesiredRGB](fxcolorgamutapi_v2/colormatrixfromycbcrtodesiredrgb%28%29.md): Returns a color matrix that is appropriate for converting RGB values from YCbCr to an RGB value in the project’s working gamut.
- [colorPrimaries](fxcolorgamutapi_v2/colorprimaries%28%29.md): Provides an enumerated type that describes the color primaries of the project’s working gamut.

### Constants

- [FxColorPrimaries](fxcolorprimaries.md): Constants used to describe a set of color primaries.

## See Also

### Color

- [Managing color space and gamut in plug-ins](../professional-video-applications/managing-color-space-and-gamut-in-plug-ins.md): Control the appearance of your rendering by using the color gamut API.
