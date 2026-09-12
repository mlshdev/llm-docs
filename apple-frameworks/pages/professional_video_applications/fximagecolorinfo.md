> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fximagecolorinfo](https://developer.apple.com/documentation/professional_video_applications/fximagecolorinfo)

# FxImageColorInfo (Swift)

**Framework:** Professional Video Applications  
**Kind:** Type Alias  
**Availability:** FxPlug 3.1+

Identifies some color properties of an FxImage instance. These include the color space, gamma level, and, in the case of `YCbCr` images, the color matrix for conversion to RGB.

## Declaration

```swift
typealias FxImageColorInfo = Int
```

<a id="discussion"></a>

## Discussion

This method was introduced in FxImage.

## Topics

### Constants

- [kFxImageColorInfo_RGB_LINEAR](kfximagecolorinfo_rgb_linear.md): RGB linear (not gamma corrected).
- [kFxImageColorInfo_RGB_GAMMA_VIDEO](kfximagecolorinfo_rgb_gamma_video.md): RGB at video gamma (2.2).

## See Also

### Enumerations

- [FxPixelTransformSupport](fxpixeltransformsupport.md): Deprecated. Constants that define the support for pixel transforms.
- [FxImageOrigin](fximageorigin.md): Deprecated. These constants define the orientation of an image’s coordinate system. Images in Motion have a bottom-left origin. Images in Final Cut have a top-left origin.
- [FxModifierKeys](fxmodifierkeys.md): Specifies flags that identify modifier keys held down while an event is generated.
- [FxLightType](fxlighttype.md): The type of lighting.
- [FxAnalysisLocation](fxanalysislocation.md): Indicates the type of hardware to use for analysis, either CPU or GPU.

# FxImageColorInfo (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Type Alias

Identifies some color properties of an FxImage instance. These include the color space, gamma level, and, in the case of `YCbCr` images, the color matrix for conversion to RGB.

## Declaration

```objectivec
typedef NSUInteger FxImageColorInfo;
```

<a id="discussion"></a>

## Discussion

This method was introduced in FxImage.

## Topics

### Constants

- [kFxImageColorInfo_RGB_LINEAR](kfximagecolorinfo_rgb_linear.md): RGB linear (not gamma corrected).
- [kFxImageColorInfo_RGB_GAMMA_VIDEO](kfximagecolorinfo_rgb_gamma_video.md): RGB at video gamma (2.2).

## See Also

### Enumerations

- [FxPixelTransformSupport](fxpixeltransformsupport.md): Deprecated. Constants that define the support for pixel transforms.
- [FxImageOrigin](fximageorigin.md): Deprecated. These constants define the orientation of an image’s coordinate system. Images in Motion have a bottom-left origin. Images in Final Cut have a top-left origin.
- [FxModifierKeys](fxmodifierkeys.md): Specifies flags that identify modifier keys held down while an event is generated.
- [FxLightType](fxlighttype.md): The type of lighting.
- [FxAnalysisLocation](fxanalysislocation.md): Indicates the type of hardware to use for analysis, either CPU or GPU.
