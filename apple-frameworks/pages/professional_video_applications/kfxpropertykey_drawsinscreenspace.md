> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/kfxpropertykey_drawsinscreenspace](https://developer.apple.com/documentation/professional_video_applications/kfxpropertykey_drawsinscreenspace)

# kFxPropertyKey_DrawsInScreenSpace (Swift)

**Framework:** Professional Video Applications  
**Kind:** Global Variable  
**Availability:** FxPlug 3.1+

Indicates that the filter or generator requires that its output to always be aligned with the camera’s film-back.

## Declaration

```swift
var kFxPropertyKey_DrawsInScreenSpace: String { get }
```

<a id="discussion"></a>

## Discussion

This property indicates that the drawing space behaves as if the layer its applied to is always directly in front of the camera, even if the camera moves. This is a Boolean value encoded as an `NSNumber` object.

## See Also

### Constants

- [kFxPropertyKey_MayRemapTime](kfxpropertykey_mayremaptime.md): A Boolean value, encoded as an `NSNumber` object, indicating whether or not this plug-in may try to sample its input image(s) at any time other than the output time.
- [kFxPropertyKey_PixelTransformSupport](kfxpropertykey_pixeltransformsupport.md): A key in the `properties` dictionary in the `FXBaseEffect` Class that corresponds to an `NSNumber` containing one of the `FxImage` values. The default value is [kFxPixelTransform_ScaleTranslate](kfxpixeltransform_scaletranslate.md)
- [kFxPropertyKey_UsesNonmatchingTextureLayout](kfxpropertykey_usesnonmatchingtexturelayout.md)

# kFxPropertyKey_DrawsInScreenSpace (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Macro

Indicates that the filter or generator requires that its output to always be aligned with the camera’s film-back.

## Declaration

```objectivec
#define kFxPropertyKey_DrawsInScreenSpace
```

<a id="discussion"></a>

## Discussion

This property indicates that the drawing space behaves as if the layer its applied to is always directly in front of the camera, even if the camera moves. This is a Boolean value encoded as an `NSNumber` object.

## See Also

### Constants

- [kFxPropertyKey_MayRemapTime](kfxpropertykey_mayremaptime.md): A Boolean value, encoded as an `NSNumber` object, indicating whether or not this plug-in may try to sample its input image(s) at any time other than the output time.
- [kFxPropertyKey_PixelTransformSupport](kfxpropertykey_pixeltransformsupport.md): A key in the `properties` dictionary in the `FXBaseEffect` Class that corresponds to an `NSNumber` containing one of the `FxImage` values. The default value is [kFxPixelTransform_ScaleTranslate](kfxpixeltransform_scaletranslate.md)
- [kFxPropertyKey_UsesNonmatchingTextureLayout](kfxpropertykey_usesnonmatchingtexturelayout.md)
- [PluginManagerVersionNumber](pluginmanagerversionnumber.md)
- [PluginManagerVersionString](pluginmanagerversionstring.md)
