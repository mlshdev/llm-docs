> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/kfxpropertykey_mayremaptime](https://developer.apple.com/documentation/professional_video_applications/kfxpropertykey_mayremaptime)

# kFxPropertyKey_MayRemapTime (Swift)

**Framework:** Professional Video Applications  
**Kind:** Global Variable  
**Availability:** FxPlug 3.1+

A Boolean value, encoded as an `NSNumber` object, indicating whether or not this plug-in may try to sample its input image(s) at any time other than the output time.

## Declaration

```swift
var kFxPropertyKey_MayRemapTime: String { get }
```

## Mentioned In

- [Building an FxPlug plug-in manually](../professional-video-applications/building-an-fxplug-plug-in-manually.md)

<a id="discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Constants

- [kFxPropertyKey_DrawsInScreenSpace](kfxpropertykey_drawsinscreenspace.md): Indicates that the filter or generator requires that its output to always be aligned with the camera’s film-back.
- [kFxPropertyKey_PixelTransformSupport](kfxpropertykey_pixeltransformsupport.md): A key in the `properties` dictionary in the `FXBaseEffect` Class that corresponds to an `NSNumber` containing one of the `FxImage` values. The default value is [kFxPixelTransform_ScaleTranslate](kfxpixeltransform_scaletranslate.md)
- [kFxPropertyKey_UsesNonmatchingTextureLayout](kfxpropertykey_usesnonmatchingtexturelayout.md)

# kFxPropertyKey_MayRemapTime (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Macro

A Boolean value, encoded as an `NSNumber` object, indicating whether or not this plug-in may try to sample its input image(s) at any time other than the output time.

## Declaration

```objectivec
#define kFxPropertyKey_MayRemapTime
```

## Mentioned In

- [Building an FxPlug plug-in manually](../professional-video-applications/building-an-fxplug-plug-in-manually.md)

<a id="discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Constants

- [kFxPropertyKey_DrawsInScreenSpace](kfxpropertykey_drawsinscreenspace.md): Indicates that the filter or generator requires that its output to always be aligned with the camera’s film-back.
- [kFxPropertyKey_PixelTransformSupport](kfxpropertykey_pixeltransformsupport.md): A key in the `properties` dictionary in the `FXBaseEffect` Class that corresponds to an `NSNumber` containing one of the `FxImage` values. The default value is [kFxPixelTransform_ScaleTranslate](kfxpixeltransform_scaletranslate.md)
- [kFxPropertyKey_UsesNonmatchingTextureLayout](kfxpropertykey_usesnonmatchingtexturelayout.md)
- [PluginManagerVersionNumber](pluginmanagerversionnumber.md)
- [PluginManagerVersionString](pluginmanagerversionstring.md)
