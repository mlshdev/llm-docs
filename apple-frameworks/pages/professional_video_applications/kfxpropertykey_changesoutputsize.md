> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/kfxpropertykey_changesoutputsize](https://developer.apple.com/documentation/professional_video_applications/kfxpropertykey_changesoutputsize)

# kFxPropertyKey_ChangesOutputSize (Swift)

**Framework:** Professional Video Applications  
**Kind:** Global Variable  
**Availability:** FxPlug 4.0+

A key that determines whether your filter has the ability to change the size of its output to be different than the size of its input.

## Declaration

```swift
var kFxPropertyKey_ChangesOutputSize: String { get }
```

<a id="discussion"></a>

## Discussion

The value of this key is a Boolean `NSNumber` that indicates whether your filter returns an output that has a different size than the input. If not, return `NO` and your filter’s [destinationImageRect(\_:sourceImages:destinationImage:pluginState:at:)](fxtileableeffect/destinationimagerect%28__sourceimages_destinationimage_pluginstate_at_%29.md) method will not be called.

## See Also

### Property Keys

- [kFxPropertyKey_NeedsFullBuffer](kfxpropertykey_needsfullbuffer.md): A key that determines whether the plug-in needs the entire image to do its processing, and can’t tile its rendering.
- [kFxPropertyKey_VariesWhenParamsAreStatic](kfxpropertykey_varieswhenparamsarestatic.md): A key that determines whether your rendering varies even when the parameters remain the same.
- [kFxPropertyKey_DesiredProcessingColorInfo](kfxpropertykey_desiredprocessingcolorinfo.md): A key that determines whether your plug-in renders in linear or gamma-corrected color space.

# kFxPropertyKey_ChangesOutputSize (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Macro

A key that determines whether your filter has the ability to change the size of its output to be different than the size of its input.

## Declaration

```objectivec
#define kFxPropertyKey_ChangesOutputSize
```

<a id="discussion"></a>

## Discussion

The value of this key is a Boolean `NSNumber` that indicates whether your filter returns an output that has a different size than the input. If not, return `NO` and your filter’s [destinationImageRect:sourceImages:destinationImage:pluginState:atTime:error:](fxtileableeffect/destinationimagerect%28__sourceimages_destinationimage_pluginstate_at_%29.md) method will not be called.

## See Also

### Property Keys

- [kFxPropertyKey_NeedsFullBuffer](kfxpropertykey_needsfullbuffer.md): A key that determines whether the plug-in needs the entire image to do its processing, and can’t tile its rendering.
- [kFxPropertyKey_VariesWhenParamsAreStatic](kfxpropertykey_varieswhenparamsarestatic.md): A key that determines whether your rendering varies even when the parameters remain the same.
- [kFxPropertyKey_DesiredProcessingColorInfo](kfxpropertykey_desiredprocessingcolorinfo.md): A key that determines whether your plug-in renders in linear or gamma-corrected color space.
