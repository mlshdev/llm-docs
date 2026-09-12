> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/kfxpropertykey_pixeltransformsupport](https://developer.apple.com/documentation/professional_video_applications/kfxpropertykey_pixeltransformsupport)

# kFxPropertyKey_PixelTransformSupport (Swift)

**Framework:** Professional Video Applications  
**Kind:** Global Variable  
**Availability:** FxPlug 3.1+

A key in the `properties` dictionary in the `FXBaseEffect` Class that corresponds to an `NSNumber` containing one of the `FxImage` values. The default value is [kFxPixelTransform_ScaleTranslate](kfxpixeltransform_scaletranslate.md)

## Declaration

```swift
var kFxPropertyKey_PixelTransformSupport: String { get }
```

## Mentioned In

- [Optimizing FxPlug plug-ins](../professional-video-applications/optimizing-fxplug-plug-ins.md)

## See Also

### Constants

- [kFxPropertyKey_DrawsInScreenSpace](kfxpropertykey_drawsinscreenspace.md): Indicates that the filter or generator requires that its output to always be aligned with the camera’s film-back.
- [kFxPropertyKey_MayRemapTime](kfxpropertykey_mayremaptime.md): A Boolean value, encoded as an `NSNumber` object, indicating whether or not this plug-in may try to sample its input image(s) at any time other than the output time.
- [kFxPropertyKey_UsesNonmatchingTextureLayout](kfxpropertykey_usesnonmatchingtexturelayout.md)

# kFxPropertyKey_PixelTransformSupport (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Macro

A key in the `properties` dictionary in the `FXBaseEffect` Class that corresponds to an `NSNumber` containing one of the `FxImage` values. The default value is [kFxPixelTransform_ScaleTranslate](kfxpixeltransform_scaletranslate.md)

## Declaration

```objectivec
#define kFxPropertyKey_PixelTransformSupport
```

## Mentioned In

- [Optimizing FxPlug plug-ins](../professional-video-applications/optimizing-fxplug-plug-ins.md)

## See Also

### Constants

- [kFxPropertyKey_DrawsInScreenSpace](kfxpropertykey_drawsinscreenspace.md): Indicates that the filter or generator requires that its output to always be aligned with the camera’s film-back.
- [kFxPropertyKey_MayRemapTime](kfxpropertykey_mayremaptime.md): A Boolean value, encoded as an `NSNumber` object, indicating whether or not this plug-in may try to sample its input image(s) at any time other than the output time.
- [kFxPropertyKey_UsesNonmatchingTextureLayout](kfxpropertykey_usesnonmatchingtexturelayout.md)
- [PluginManagerVersionNumber](pluginmanagerversionnumber.md)
- [PluginManagerVersionString](pluginmanagerversionstring.md)
