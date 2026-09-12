> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpvolumeview/volumethumbrect(forbounds:volumesliderrect:value:)](https://developer.apple.com/documentation/mediaplayer/mpvolumeview/volumethumbrect(forbounds:volumesliderrect:value:))

# volumeThumbRect(forBounds:volumeSliderRect:value:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the drawing rectangle for the volume slider’s thumb image.

## Declaration

```swift
func volumeThumbRect(forBounds bounds: CGRect, volumeSliderRect rect: CGRect, value: Float) -> CGRect
```

## Parameters

- `bounds`: The bounding rectangle of the thumb image.
- `rect`: The drawing rectangle for the receiver’s track, as returned by the [volumeSliderRect(forBounds:)](volumesliderrect%28forbounds_%29.md) method.
- `value`: The current value of the volume slider.

<a id="return-value"></a>

## Return Value

The computed drawing rectangle for the thumb image.

<a id="Discussion"></a>

## Discussion

The rectangle you return should reflect the size of your thumb image and its current position on the slider’s track.

## See Also

### Customizing the volume slider

- [maximumVolumeSliderImage(for:)](maximumvolumesliderimage%28for_%29.md): Returns the maximum volume image associated with the specified control state.
- [minimumVolumeSliderImage(for:)](minimumvolumesliderimage%28for_%29.md): Returns the minimum volume image associated with the specified control state.
- [setMaximumVolumeSliderImage(\_:for:)](setmaximumvolumesliderimage%28__for_%29.md): Assigns a maximum volume slider image to the specified control states.
- [setMinimumVolumeSliderImage(\_:for:)](setminimumvolumesliderimage%28__for_%29.md): Assigns a minimum volume slider image to the specified control states.
- [setVolumeThumbImage(\_:for:)](setvolumethumbimage%28__for_%29.md): Assigns a thumb image to the specified control states.
- [volumeSliderRect(forBounds:)](volumesliderrect%28forbounds_%29.md): Returns the drawing rectangle for the slider’s track.
- [volumeThumbImage(for:)](volumethumbimage%28for_%29.md): Returns the thumb image associated with the specified control state.

# volumeThumbRectForBounds:volumeSliderRect:value: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the drawing rectangle for the volume slider’s thumb image.

## Declaration

```objectivec
- (CGRect) volumeThumbRectForBounds:(CGRect) bounds volumeSliderRect:(CGRect) rect value:(float) value;
```

## Parameters

- `bounds`: The bounding rectangle of the thumb image.
- `rect`: The drawing rectangle for the receiver’s track, as returned by the [volumeSliderRectForBounds:](volumesliderrect%28forbounds_%29.md) method.
- `value`: The current value of the volume slider.

<a id="return-value"></a>

## Return Value

The computed drawing rectangle for the thumb image.

<a id="Discussion"></a>

## Discussion

The rectangle you return should reflect the size of your thumb image and its current position on the slider’s track.

## See Also

### Customizing the volume slider

- [maximumVolumeSliderImageForState:](maximumvolumesliderimage%28for_%29.md): Returns the maximum volume image associated with the specified control state.
- [minimumVolumeSliderImageForState:](minimumvolumesliderimage%28for_%29.md): Returns the minimum volume image associated with the specified control state.
- [setMaximumVolumeSliderImage:forState:](setmaximumvolumesliderimage%28__for_%29.md): Assigns a maximum volume slider image to the specified control states.
- [setMinimumVolumeSliderImage:forState:](setminimumvolumesliderimage%28__for_%29.md): Assigns a minimum volume slider image to the specified control states.
- [setVolumeThumbImage:forState:](setvolumethumbimage%28__for_%29.md): Assigns a thumb image to the specified control states.
- [volumeSliderRectForBounds:](volumesliderrect%28forbounds_%29.md): Returns the drawing rectangle for the slider’s track.
- [volumeThumbImageForState:](volumethumbimage%28for_%29.md): Returns the thumb image associated with the specified control state.
