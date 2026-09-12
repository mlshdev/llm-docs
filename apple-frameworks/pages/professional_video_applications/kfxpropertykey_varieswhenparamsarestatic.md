> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/kfxpropertykey_varieswhenparamsarestatic](https://developer.apple.com/documentation/professional_video_applications/kfxpropertykey_varieswhenparamsarestatic)

# kFxPropertyKey_VariesWhenParamsAreStatic (Swift)

**Framework:** Professional Video Applications  
**Kind:** Global Variable  
**Availability:** FxPlug 4.0+

A key that determines whether your rendering varies even when the parameters remain the same.

## Declaration

```swift
var kFxPropertyKey_VariesWhenParamsAreStatic: String { get }
```

## Mentioned In

- [Building an FxPlug plug-in manually](../professional-video-applications/building-an-fxplug-plug-in-manually.md)

<a id="discussion"></a>

## Discussion

The value for this key is a Boolean `NSNumber` indicating whether this effect changes its rendering even when the parameters don’t change. This can happen if your rendering is based on timing in addition to parameters, for example. Note that this property is only checked once when the filter is applied, so it should go in static properties rather than dynamic properties.

## See Also

### Property Keys

- [kFxPropertyKey_NeedsFullBuffer](kfxpropertykey_needsfullbuffer.md): A key that determines whether the plug-in needs the entire image to do its processing, and can’t tile its rendering.
- [kFxPropertyKey_ChangesOutputSize](kfxpropertykey_changesoutputsize.md): A key that determines whether your filter has the ability to change the size of its output to be different than the size of its input.
- [kFxPropertyKey_DesiredProcessingColorInfo](kfxpropertykey_desiredprocessingcolorinfo.md): A key that determines whether your plug-in renders in linear or gamma-corrected color space.

# kFxPropertyKey_VariesWhenParamsAreStatic (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Macro

A key that determines whether your rendering varies even when the parameters remain the same.

## Declaration

```objectivec
#define kFxPropertyKey_VariesWhenParamsAreStatic
```

## Mentioned In

- [Building an FxPlug plug-in manually](../professional-video-applications/building-an-fxplug-plug-in-manually.md)

<a id="discussion"></a>

## Discussion

The value for this key is a Boolean `NSNumber` indicating whether this effect changes its rendering even when the parameters don’t change. This can happen if your rendering is based on timing in addition to parameters, for example. Note that this property is only checked once when the filter is applied, so it should go in static properties rather than dynamic properties.

## See Also

### Property Keys

- [kFxPropertyKey_NeedsFullBuffer](kfxpropertykey_needsfullbuffer.md): A key that determines whether the plug-in needs the entire image to do its processing, and can’t tile its rendering.
- [kFxPropertyKey_ChangesOutputSize](kfxpropertykey_changesoutputsize.md): A key that determines whether your filter has the ability to change the size of its output to be different than the size of its input.
- [kFxPropertyKey_DesiredProcessingColorInfo](kfxpropertykey_desiredprocessingcolorinfo.md): A key that determines whether your plug-in renders in linear or gamma-corrected color space.
