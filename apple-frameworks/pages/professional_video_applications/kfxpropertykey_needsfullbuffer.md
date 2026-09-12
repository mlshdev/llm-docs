> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/kfxpropertykey_needsfullbuffer](https://developer.apple.com/documentation/professional_video_applications/kfxpropertykey_needsfullbuffer)

# kFxPropertyKey_NeedsFullBuffer (Swift)

**Framework:** Professional Video Applications  
**Kind:** Global Variable  
**Availability:** FxPlug 4.0+

A key that determines whether the plug-in needs the entire image to do its processing, and can’t tile its rendering.

## Declaration

```swift
var kFxPropertyKey_NeedsFullBuffer: String { get }
```

## Mentioned In

- [Building an FxPlug plug-in manually](../professional-video-applications/building-an-fxplug-plug-in-manually.md)
- [Working with tiled images](../professional-video-applications/working-with-tiled-images.md)

<a id="discussion"></a>

## Discussion

This value of this key is a Boolean `NSNumber` indicating whether this plug-in needs the entire image to do its processing. Note that setting this value to `YES` incurs a significant performance penalty and makes your plug-in unable to render large input images. The default value is `NO`.

## See Also

### Property Keys

- [kFxPropertyKey_VariesWhenParamsAreStatic](kfxpropertykey_varieswhenparamsarestatic.md): A key that determines whether your rendering varies even when the parameters remain the same.
- [kFxPropertyKey_ChangesOutputSize](kfxpropertykey_changesoutputsize.md): A key that determines whether your filter has the ability to change the size of its output to be different than the size of its input.
- [kFxPropertyKey_DesiredProcessingColorInfo](kfxpropertykey_desiredprocessingcolorinfo.md): A key that determines whether your plug-in renders in linear or gamma-corrected color space.

# kFxPropertyKey_NeedsFullBuffer (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Macro

A key that determines whether the plug-in needs the entire image to do its processing, and can’t tile its rendering.

## Declaration

```objectivec
#define kFxPropertyKey_NeedsFullBuffer
```

## Mentioned In

- [Building an FxPlug plug-in manually](../professional-video-applications/building-an-fxplug-plug-in-manually.md)
- [Working with tiled images](../professional-video-applications/working-with-tiled-images.md)

<a id="discussion"></a>

## Discussion

This value of this key is a Boolean `NSNumber` indicating whether this plug-in needs the entire image to do its processing. Note that setting this value to `YES` incurs a significant performance penalty and makes your plug-in unable to render large input images. The default value is `NO`.

## See Also

### Property Keys

- [kFxPropertyKey_VariesWhenParamsAreStatic](kfxpropertykey_varieswhenparamsarestatic.md): A key that determines whether your rendering varies even when the parameters remain the same.
- [kFxPropertyKey_ChangesOutputSize](kfxpropertykey_changesoutputsize.md): A key that determines whether your filter has the ability to change the size of its output to be different than the size of its input.
- [kFxPropertyKey_DesiredProcessingColorInfo](kfxpropertykey_desiredprocessingcolorinfo.md): A key that determines whether your plug-in renders in linear or gamma-corrected color space.
