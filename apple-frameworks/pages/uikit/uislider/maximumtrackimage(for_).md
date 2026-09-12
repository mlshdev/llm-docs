> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uislider/maximumtrackimage(for:)](https://developer.apple.com/documentation/uikit/uislider/maximumtrackimage(for:))

# maximumTrackImage(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the maximum track image associated with the specified control state.

## Declaration

```swift
func maximumTrackImage(for state: UIControl.State) -> UIImage?
```

## Parameters

- `state`: The control state whose maximum track image you want to use. Specify a single control state value for this parameter.

<a id="return-value"></a>

## Return Value

The maximum track image associated with the specified state, or `nil` if an appropriate image could not be retrieved. This method might return `nil` if you specify multiple control states in the `state` parameter. For a description of track images, see [Customize the slider’s appearance](../uislider.md#Customize-the-sliders-appearance).

## See Also

### Changing the slider’s appearance

- [minimumValueImage](minimumvalueimage.md): The image that represents the slider’s minimum value.
- [maximumValueImage](maximumvalueimage.md): The image representing the slider’s maximum value.
- [minimumTrackTintColor](minimumtracktintcolor.md): The color used to tint the default minimum track images.
- [currentMinimumTrackImage](currentminimumtrackimage.md): The minimum track image currently being used to render the slider.
- [minimumTrackImage(for:)](minimumtrackimage%28for_%29.md): Returns the minimum track image associated with the specified control state.
- [setMinimumTrackImage(\_:for:)](setminimumtrackimage%28__for_%29.md): Assigns a minimum track image to the specified control states.
- [maximumTrackTintColor](maximumtracktintcolor.md): The color used to tint the default maximum track images.
- [currentMaximumTrackImage](currentmaximumtrackimage.md): Contains the maximum track image currently being used to render the slider.
- [setMaximumTrackImage(\_:for:)](setmaximumtrackimage%28__for_%29.md): Assigns a maximum track image to the specified control states.
- [thumbTintColor](thumbtintcolor.md): The color used to tint the default thumb images.
- [currentThumbImage](currentthumbimage.md): The thumb image currently being used to render the slider.
- [thumbImage(for:)](thumbimage%28for_%29.md): Returns the thumb image associated with the specified control state.
- [setThumbImage(\_:for:)](setthumbimage%28__for_%29.md): Assigns a thumb image to the specified control states.

# maximumTrackImageForState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the maximum track image associated with the specified control state.

## Declaration

```objectivec
- (UIImage *) maximumTrackImageForState:(UIControlState) state;
```

## Parameters

- `state`: The control state whose maximum track image you want to use. Specify a single control state value for this parameter.

<a id="return-value"></a>

## Return Value

The maximum track image associated with the specified state, or `nil` if an appropriate image could not be retrieved. This method might return `nil` if you specify multiple control states in the `state` parameter. For a description of track images, see [Customize the slider’s appearance](../uislider.md#Customize-the-sliders-appearance).

## See Also

### Changing the slider’s appearance

- [minimumValueImage](minimumvalueimage.md): The image that represents the slider’s minimum value.
- [maximumValueImage](maximumvalueimage.md): The image representing the slider’s maximum value.
- [minimumTrackTintColor](minimumtracktintcolor.md): The color used to tint the default minimum track images.
- [currentMinimumTrackImage](currentminimumtrackimage.md): The minimum track image currently being used to render the slider.
- [minimumTrackImageForState:](minimumtrackimage%28for_%29.md): Returns the minimum track image associated with the specified control state.
- [setMinimumTrackImage:forState:](setminimumtrackimage%28__for_%29.md): Assigns a minimum track image to the specified control states.
- [maximumTrackTintColor](maximumtracktintcolor.md): The color used to tint the default maximum track images.
- [currentMaximumTrackImage](currentmaximumtrackimage.md): Contains the maximum track image currently being used to render the slider.
- [setMaximumTrackImage:forState:](setmaximumtrackimage%28__for_%29.md): Assigns a maximum track image to the specified control states.
- [thumbTintColor](thumbtintcolor.md): The color used to tint the default thumb images.
- [currentThumbImage](currentthumbimage.md): The thumb image currently being used to render the slider.
- [thumbImageForState:](thumbimage%28for_%29.md): Returns the thumb image associated with the specified control state.
- [setThumbImage:forState:](setthumbimage%28__for_%29.md): Assigns a thumb image to the specified control states.
