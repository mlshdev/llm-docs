> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpvolumeview/setvolumethumbimage(_:for:)](https://developer.apple.com/documentation/mediaplayer/mpvolumeview/setvolumethumbimage(_:for:))

# setVolumeThumbImage(\_:for:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Assigns a thumb image to the specified control states.

## Declaration

```swift
func setVolumeThumbImage(_ image: UIImage?, for state: UIControl.State)
```

## Parameters

- `image`: The thumb image to associate with the specified states.
- `state`: The control state with which to associate the image.

<a id="Discussion"></a>

## Discussion

For a description of slider and thumb images, see [Customizing the volume slider’s appearance](../mpvolumeview.md#Customizing-the-volume-sliders-appearance).

## See Also

### Customizing the volume slider

- [maximumVolumeSliderImage(for:)](maximumvolumesliderimage%28for_%29.md): Returns the maximum volume image associated with the specified control state.
- [minimumVolumeSliderImage(for:)](minimumvolumesliderimage%28for_%29.md): Returns the minimum volume image associated with the specified control state.
- [setMaximumVolumeSliderImage(\_:for:)](setmaximumvolumesliderimage%28__for_%29.md): Assigns a maximum volume slider image to the specified control states.
- [setMinimumVolumeSliderImage(\_:for:)](setminimumvolumesliderimage%28__for_%29.md): Assigns a minimum volume slider image to the specified control states.
- [volumeSliderRect(forBounds:)](volumesliderrect%28forbounds_%29.md): Returns the drawing rectangle for the slider’s track.
- [volumeThumbImage(for:)](volumethumbimage%28for_%29.md): Returns the thumb image associated with the specified control state.
- [volumeThumbRect(forBounds:volumeSliderRect:value:)](volumethumbrect%28forbounds_volumesliderrect_value_%29.md): Returns the drawing rectangle for the volume slider’s thumb image.

# setVolumeThumbImage:forState: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Assigns a thumb image to the specified control states.

## Declaration

```objectivec
- (void) setVolumeThumbImage:(UIImage *) image forState:(UIControlState) state;
```

## Parameters

- `image`: The thumb image to associate with the specified states.
- `state`: The control state with which to associate the image.

<a id="Discussion"></a>

## Discussion

For a description of slider and thumb images, see [Customizing the volume slider’s appearance](../mpvolumeview.md#Customizing-the-volume-sliders-appearance).

## See Also

### Customizing the volume slider

- [maximumVolumeSliderImageForState:](maximumvolumesliderimage%28for_%29.md): Returns the maximum volume image associated with the specified control state.
- [minimumVolumeSliderImageForState:](minimumvolumesliderimage%28for_%29.md): Returns the minimum volume image associated with the specified control state.
- [setMaximumVolumeSliderImage:forState:](setmaximumvolumesliderimage%28__for_%29.md): Assigns a maximum volume slider image to the specified control states.
- [setMinimumVolumeSliderImage:forState:](setminimumvolumesliderimage%28__for_%29.md): Assigns a minimum volume slider image to the specified control states.
- [volumeSliderRectForBounds:](volumesliderrect%28forbounds_%29.md): Returns the drawing rectangle for the slider’s track.
- [volumeThumbImageForState:](volumethumbimage%28for_%29.md): Returns the thumb image associated with the specified control state.
- [volumeThumbRectForBounds:volumeSliderRect:value:](volumethumbrect%28forbounds_volumesliderrect_value_%29.md): Returns the drawing rectangle for the volume slider’s thumb image.
