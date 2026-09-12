> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/kfxpropertykey_desiredprocessingcolorinfo](https://developer.apple.com/documentation/professional_video_applications/kfxpropertykey_desiredprocessingcolorinfo)

# kFxPropertyKey_DesiredProcessingColorInfo (Swift)

**Framework:** Professional Video Applications  
**Kind:** Global Variable  
**Availability:** FxPlug 3.1+

A key that determines whether your plug-in renders in linear or gamma-corrected color space.

## Declaration

```swift
var kFxPropertyKey_DesiredProcessingColorInfo: String { get }
```

## Mentioned In

- [Managing color space and gamut in plug-ins](../professional-video-applications/managing-color-space-and-gamut-in-plug-ins.md)

<a id="discussion"></a>

## Discussion

The value for this key is an `NSUInteger` indicating the color space that the plug-in will process in. This color space is expressed as an [FxImageColorInfo](fximagecolorinfo.md) constant. If a plug-in includes this property, all inputs are in the specified color space, and the output must also be in this color space.

## See Also

### Property Keys

- [kFxPropertyKey_NeedsFullBuffer](kfxpropertykey_needsfullbuffer.md): A key that determines whether the plug-in needs the entire image to do its processing, and can’t tile its rendering.
- [kFxPropertyKey_VariesWhenParamsAreStatic](kfxpropertykey_varieswhenparamsarestatic.md): A key that determines whether your rendering varies even when the parameters remain the same.
- [kFxPropertyKey_ChangesOutputSize](kfxpropertykey_changesoutputsize.md): A key that determines whether your filter has the ability to change the size of its output to be different than the size of its input.

# kFxPropertyKey_DesiredProcessingColorInfo (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Macro

A key that determines whether your plug-in renders in linear or gamma-corrected color space.

## Declaration

```objectivec
#define kFxPropertyKey_DesiredProcessingColorInfo
```

## Mentioned In

- [Managing color space and gamut in plug-ins](../professional-video-applications/managing-color-space-and-gamut-in-plug-ins.md)

<a id="discussion"></a>

## Discussion

The value for this key is an `NSUInteger` indicating the color space that the plug-in will process in. This color space is expressed as an [FxImageColorInfo](fximagecolorinfo.md) constant. If a plug-in includes this property, all inputs are in the specified color space, and the output must also be in this color space.

## See Also

### Property Keys

- [kFxPropertyKey_NeedsFullBuffer](kfxpropertykey_needsfullbuffer.md): A key that determines whether the plug-in needs the entire image to do its processing, and can’t tile its rendering.
- [kFxPropertyKey_VariesWhenParamsAreStatic](kfxpropertykey_varieswhenparamsarestatic.md): A key that determines whether your rendering varies even when the parameters remain the same.
- [kFxPropertyKey_ChangesOutputSize](kfxpropertykey_changesoutputsize.md): A key that determines whether your filter has the ability to change the size of its output to be different than the size of its input.
