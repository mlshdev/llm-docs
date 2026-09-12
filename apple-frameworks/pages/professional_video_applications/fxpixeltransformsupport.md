> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxpixeltransformsupport](https://developer.apple.com/documentation/professional_video_applications/fxpixeltransformsupport)

# FxPixelTransformSupport (Swift)

**Framework:** Professional Video Applications  
**Kind:** Type Alias  
**Availability:** FxPlug 3.1+ (deprecated in 4.0)

Constants that define the support for pixel transforms.

> FxPlug 4 must support pixel transforms.

## Declaration

```swift
typealias FxPixelTransformSupport = Int
```

## Topics

### Constants

- [kFxPixelTransform_Scale](kfxpixeltransform_scale.md): Handles only (non-uniform) scaling - this is the minimum required.
- [kFxPixelTransform_ScaleTranslate](kfxpixeltransform_scaletranslate.md): Handles non-uniform scaling, and arbitrary translation.
- [kFxPixelTransform_Full](kfxpixeltransform_full.md): Handles full perspective transformation.

## See Also

### Data Types

- [FxImageOrigin](fximageorigin.md): Deprecated. These constants define the orientation of an image’s coordinate system. Images in Motion have a bottom-left origin. Images in Final Cut have a top-left origin.
- [FxPathStyle](fxpathstyle.md): The style of the path, which is linear, bezier, or b-spline.

# FxPixelTransformSupport (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Type Alias

Constants that define the support for pixel transforms.

> FxPlug 4 must support pixel transforms.

## Declaration

```objectivec
typedef NSUInteger FxPixelTransformSupport;
```

## Topics

### Constants

- [kFxPixelTransform_Scale](kfxpixeltransform_scale.md): Handles only (non-uniform) scaling - this is the minimum required.
- [kFxPixelTransform_ScaleTranslate](kfxpixeltransform_scaletranslate.md): Handles non-uniform scaling, and arbitrary translation.
- [kFxPixelTransform_Full](kfxpixeltransform_full.md): Handles full perspective transformation.

## See Also

### Data Types

- [FxImageOrigin](fximageorigin.md): Deprecated. These constants define the orientation of an image’s coordinate system. Images in Motion have a bottom-left origin. Images in Final Cut have a top-left origin.
- [FxPathStyle](fxpathstyle.md): The style of the path, which is linear, bezier, or b-spline.
