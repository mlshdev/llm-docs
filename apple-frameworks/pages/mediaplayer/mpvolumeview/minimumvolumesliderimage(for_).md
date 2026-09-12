> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpvolumeview/minimumvolumesliderimage(for:)](https://developer.apple.com/documentation/mediaplayer/mpvolumeview/minimumvolumesliderimage(for:))

# minimumVolumeSliderImage(for:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the minimum volume image associated with the specified control state.

## Declaration

```swift
func minimumVolumeSliderImage(for state: UIControl.State) -> UIImage?
```

## Parameters

- `state`: The control state whose minimum volume image you want. You should specify only one control state value for this parameter.

<a id="return-value"></a>

## Return Value

The maximum volume image associated with the specified state, or [nil](../../objectivec/nil-227m0.md) if an appropriate image could not be retrieved. This method might return [nil](../../objectivec/nil-227m0.md) if you specify multiple control states in the `state` parameter.

<a id="Discussion"></a>

## Discussion

For a description of slider and thumb images, see [Customizing the volume slider’s appearance](../mpvolumeview.md#Customizing-the-volume-sliders-appearance).

## See Also

### Customizing the volume slider

- [maximumVolumeSliderImage(for:)](maximumvolumesliderimage%28for_%29.md): Returns the maximum volume image associated with the specified control state.
- [setMaximumVolumeSliderImage(\_:for:)](setmaximumvolumesliderimage%28__for_%29.md): Assigns a maximum volume slider image to the specified control states.
- [setMinimumVolumeSliderImage(\_:for:)](setminimumvolumesliderimage%28__for_%29.md): Assigns a minimum volume slider image to the specified control states.
- [setVolumeThumbImage(\_:for:)](setvolumethumbimage%28__for_%29.md): Assigns a thumb image to the specified control states.
- [volumeSliderRect(forBounds:)](volumesliderrect%28forbounds_%29.md): Returns the drawing rectangle for the slider’s track.
- [volumeThumbImage(for:)](volumethumbimage%28for_%29.md): Returns the thumb image associated with the specified control state.
- [volumeThumbRect(forBounds:volumeSliderRect:value:)](volumethumbrect%28forbounds_volumesliderrect_value_%29.md): Returns the drawing rectangle for the volume slider’s thumb image.

# minimumVolumeSliderImageForState: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the minimum volume image associated with the specified control state.

## Declaration

```objectivec
- (UIImage *) minimumVolumeSliderImageForState:(UIControlState) state;
```

## Parameters

- `state`: The control state whose minimum volume image you want. You should specify only one control state value for this parameter.

<a id="return-value"></a>

## Return Value

The maximum volume image associated with the specified state, or [nil](../../objectivec/nil-227m0.md) if an appropriate image could not be retrieved. This method might return [nil](../../objectivec/nil-227m0.md) if you specify multiple control states in the `state` parameter.

<a id="Discussion"></a>

## Discussion

For a description of slider and thumb images, see [Customizing the volume slider’s appearance](../mpvolumeview.md#Customizing-the-volume-sliders-appearance).

## See Also

### Customizing the volume slider

- [maximumVolumeSliderImageForState:](maximumvolumesliderimage%28for_%29.md): Returns the maximum volume image associated with the specified control state.
- [setMaximumVolumeSliderImage:forState:](setmaximumvolumesliderimage%28__for_%29.md): Assigns a maximum volume slider image to the specified control states.
- [setMinimumVolumeSliderImage:forState:](setminimumvolumesliderimage%28__for_%29.md): Assigns a minimum volume slider image to the specified control states.
- [setVolumeThumbImage:forState:](setvolumethumbimage%28__for_%29.md): Assigns a thumb image to the specified control states.
- [volumeSliderRectForBounds:](volumesliderrect%28forbounds_%29.md): Returns the drawing rectangle for the slider’s track.
- [volumeThumbImageForState:](volumethumbimage%28for_%29.md): Returns the thumb image associated with the specified control state.
- [volumeThumbRectForBounds:volumeSliderRect:value:](volumethumbrect%28forbounds_volumesliderrect_value_%29.md): Returns the drawing rectangle for the volume slider’s thumb image.
