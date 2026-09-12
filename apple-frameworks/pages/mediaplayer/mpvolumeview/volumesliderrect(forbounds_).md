> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpvolumeview/volumesliderrect(forbounds:)](https://developer.apple.com/documentation/mediaplayer/mpvolumeview/volumesliderrect(forbounds:))

# volumeSliderRect(forBounds:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the drawing rectangle for the slider’s track.

## Declaration

```swift
func volumeSliderRect(forBounds bounds: CGRect) -> CGRect
```

## Parameters

- `bounds`: The bounding rectangle of the receiver.

<a id="return-value"></a>

## Return Value

The computed drawing rectangle for the volume slider track. This rectangle corresponds to the entire length of the track between the minimum and maximum value images.

<a id="Discussion"></a>

## Discussion

The system uses the rectangle to scale the track and thumb images during drawing.

## See Also

### Customizing the volume slider

- [maximumVolumeSliderImage(for:)](maximumvolumesliderimage%28for_%29.md): Returns the maximum volume image associated with the specified control state.
- [minimumVolumeSliderImage(for:)](minimumvolumesliderimage%28for_%29.md): Returns the minimum volume image associated with the specified control state.
- [setMaximumVolumeSliderImage(\_:for:)](setmaximumvolumesliderimage%28__for_%29.md): Assigns a maximum volume slider image to the specified control states.
- [setMinimumVolumeSliderImage(\_:for:)](setminimumvolumesliderimage%28__for_%29.md): Assigns a minimum volume slider image to the specified control states.
- [setVolumeThumbImage(\_:for:)](setvolumethumbimage%28__for_%29.md): Assigns a thumb image to the specified control states.
- [volumeThumbImage(for:)](volumethumbimage%28for_%29.md): Returns the thumb image associated with the specified control state.
- [volumeThumbRect(forBounds:volumeSliderRect:value:)](volumethumbrect%28forbounds_volumesliderrect_value_%29.md): Returns the drawing rectangle for the volume slider’s thumb image.

# volumeSliderRectForBounds: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the drawing rectangle for the slider’s track.

## Declaration

```objectivec
- (CGRect) volumeSliderRectForBounds:(CGRect) bounds;
```

## Parameters

- `bounds`: The bounding rectangle of the receiver.

<a id="return-value"></a>

## Return Value

The computed drawing rectangle for the volume slider track. This rectangle corresponds to the entire length of the track between the minimum and maximum value images.

<a id="Discussion"></a>

## Discussion

The system uses the rectangle to scale the track and thumb images during drawing.

## See Also

### Customizing the volume slider

- [maximumVolumeSliderImageForState:](maximumvolumesliderimage%28for_%29.md): Returns the maximum volume image associated with the specified control state.
- [minimumVolumeSliderImageForState:](minimumvolumesliderimage%28for_%29.md): Returns the minimum volume image associated with the specified control state.
- [setMaximumVolumeSliderImage:forState:](setmaximumvolumesliderimage%28__for_%29.md): Assigns a maximum volume slider image to the specified control states.
- [setMinimumVolumeSliderImage:forState:](setminimumvolumesliderimage%28__for_%29.md): Assigns a minimum volume slider image to the specified control states.
- [setVolumeThumbImage:forState:](setvolumethumbimage%28__for_%29.md): Assigns a thumb image to the specified control states.
- [volumeThumbImageForState:](volumethumbimage%28for_%29.md): Returns the thumb image associated with the specified control state.
- [volumeThumbRectForBounds:volumeSliderRect:value:](volumethumbrect%28forbounds_volumesliderrect_value_%29.md): Returns the drawing rectangle for the volume slider’s thumb image.
