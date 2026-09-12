> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxanalysislocation](https://developer.apple.com/documentation/professional_video_applications/fxanalysislocation)

# FxAnalysisLocation (Swift)

**Framework:** Professional Video Applications  
**Kind:** Type Alias  
**Availability:** FxPlug 4.1+

Indicates the type of hardware to use for analysis, either CPU or GPU.

## Declaration

```swift
typealias FxAnalysisLocation = Int
```

## Topics

### Constants

- [kFxAnalysisLocation_CPU](kfxanalysislocation_cpu.md): Use a bitmap in main memory for analysis images.
- [kFxAnalysisLocation_GPU](kfxanalysislocation_gpu.md): Use a texture on the GPU for analysis images.

## See Also

### Enumerations

- [FxImageColorInfo](fximagecolorinfo.md): Identifies some color properties of an FxImage instance. These include the color space, gamma level, and, in the case of `YCbCr` images, the color matrix for conversion to RGB.
- [FxPixelTransformSupport](fxpixeltransformsupport.md): Deprecated. Constants that define the support for pixel transforms.
- [FxImageOrigin](fximageorigin.md): Deprecated. These constants define the orientation of an image’s coordinate system. Images in Motion have a bottom-left origin. Images in Final Cut have a top-left origin.
- [FxModifierKeys](fxmodifierkeys.md): Specifies flags that identify modifier keys held down while an event is generated.
- [FxLightType](fxlighttype.md): The type of lighting.

# FxAnalysisLocation (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Type Alias

Indicates the type of hardware to use for analysis, either CPU or GPU.

## Declaration

```objectivec
typedef NSInteger FxAnalysisLocation;
```

## Topics

### Constants

- [kFxAnalysisLocation_CPU](kfxanalysislocation_cpu.md): Use a bitmap in main memory for analysis images.
- [kFxAnalysisLocation_GPU](kfxanalysislocation_gpu.md): Use a texture on the GPU for analysis images.

## See Also

### Enumerations

- [FxImageColorInfo](fximagecolorinfo.md): Identifies some color properties of an FxImage instance. These include the color space, gamma level, and, in the case of `YCbCr` images, the color matrix for conversion to RGB.
- [FxPixelTransformSupport](fxpixeltransformsupport.md): Deprecated. Constants that define the support for pixel transforms.
- [FxImageOrigin](fximageorigin.md): Deprecated. These constants define the orientation of an image’s coordinate system. Images in Motion have a bottom-left origin. Images in Final Cut have a top-left origin.
- [FxModifierKeys](fxmodifierkeys.md): Specifies flags that identify modifier keys held down while an event is generated.
- [FxLightType](fxlighttype.md): The type of lighting.
