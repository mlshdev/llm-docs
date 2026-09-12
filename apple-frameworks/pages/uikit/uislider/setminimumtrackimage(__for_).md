> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uislider/setminimumtrackimage(_:for:)](https://developer.apple.com/documentation/uikit/uislider/setminimumtrackimage(_:for:))

# setMinimumTrackImage(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Assigns a minimum track image to the specified control states.

## Declaration

```swift
func setMinimumTrackImage(_ image: UIImage?, for state: UIControl.State)
```

## Parameters

- `image`: The minimum track image to associate with the specified states.
- `state`: The control state with which to associate the image.

<a id="Discussion"></a>

## Discussion

Because the movement of the slider’s thumb changes the width of the area occupied by the minimum track image, the image width changes accordingly. To accommodate this requirement, specify track images as stretchable images that can grow or shrink to fill the available space. For information about how to create stretchable images, see [UIImage](../uiimage.md).

When you specify a custom minimum track image, the slider ignores the custom minimum track tint color, if any.

Sliders respond to user interaction with dynamic effects and appearance. If you use images to customize the appearance of the track, then the slider doesn’t apply the dynamic effects or alter the appearance.

> **Important**

>  This method isn’t available when the user interface idiom is [UIUserInterfaceIdiom.mac](../uiuserinterfaceidiom/mac.md) and [behavioralStyle](behavioralstyle.md) is [UIBehavioralStyle.mac](../uibehavioralstyle/mac.md) — calling it while in this state throws an exception.

## See Also

### Changing the slider’s appearance

- [minimumValueImage](minimumvalueimage.md): The image that represents the slider’s minimum value.
- [maximumValueImage](maximumvalueimage.md): The image representing the slider’s maximum value.
- [minimumTrackTintColor](minimumtracktintcolor.md): The color used to tint the default minimum track images.
- [currentMinimumTrackImage](currentminimumtrackimage.md): The minimum track image currently being used to render the slider.
- [minimumTrackImage(for:)](minimumtrackimage%28for_%29.md): Returns the minimum track image associated with the specified control state.
- [maximumTrackTintColor](maximumtracktintcolor.md): The color used to tint the default maximum track images.
- [currentMaximumTrackImage](currentmaximumtrackimage.md): Contains the maximum track image currently being used to render the slider.
- [maximumTrackImage(for:)](maximumtrackimage%28for_%29.md): Returns the maximum track image associated with the specified control state.
- [setMaximumTrackImage(\_:for:)](setmaximumtrackimage%28__for_%29.md): Assigns a maximum track image to the specified control states.
- [thumbTintColor](thumbtintcolor.md): The color used to tint the default thumb images.
- [currentThumbImage](currentthumbimage.md): The thumb image currently being used to render the slider.
- [thumbImage(for:)](thumbimage%28for_%29.md): Returns the thumb image associated with the specified control state.
- [setThumbImage(\_:for:)](setthumbimage%28__for_%29.md): Assigns a thumb image to the specified control states.

# setMinimumTrackImage:forState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Assigns a minimum track image to the specified control states.

## Declaration

```objectivec
- (void) setMinimumTrackImage:(UIImage *) image forState:(UIControlState) state;
```

## Parameters

- `image`: The minimum track image to associate with the specified states.
- `state`: The control state with which to associate the image.

<a id="Discussion"></a>

## Discussion

Because the movement of the slider’s thumb changes the width of the area occupied by the minimum track image, the image width changes accordingly. To accommodate this requirement, specify track images as stretchable images that can grow or shrink to fill the available space. For information about how to create stretchable images, see [UIImage](../uiimage.md).

When you specify a custom minimum track image, the slider ignores the custom minimum track tint color, if any.

Sliders respond to user interaction with dynamic effects and appearance. If you use images to customize the appearance of the track, then the slider doesn’t apply the dynamic effects or alter the appearance.

> **Important**

>  This method isn’t available when the user interface idiom is [UIUserInterfaceIdiomMac](../uiuserinterfaceidiom/mac.md) and [behavioralStyle](behavioralstyle.md) is [UIBehavioralStyleMac](../uibehavioralstyle/mac.md) — calling it while in this state throws an exception.

## See Also

### Changing the slider’s appearance

- [minimumValueImage](minimumvalueimage.md): The image that represents the slider’s minimum value.
- [maximumValueImage](maximumvalueimage.md): The image representing the slider’s maximum value.
- [minimumTrackTintColor](minimumtracktintcolor.md): The color used to tint the default minimum track images.
- [currentMinimumTrackImage](currentminimumtrackimage.md): The minimum track image currently being used to render the slider.
- [minimumTrackImageForState:](minimumtrackimage%28for_%29.md): Returns the minimum track image associated with the specified control state.
- [maximumTrackTintColor](maximumtracktintcolor.md): The color used to tint the default maximum track images.
- [currentMaximumTrackImage](currentmaximumtrackimage.md): Contains the maximum track image currently being used to render the slider.
- [maximumTrackImageForState:](maximumtrackimage%28for_%29.md): Returns the maximum track image associated with the specified control state.
- [setMaximumTrackImage:forState:](setmaximumtrackimage%28__for_%29.md): Assigns a maximum track image to the specified control states.
- [thumbTintColor](thumbtintcolor.md): The color used to tint the default thumb images.
- [currentThumbImage](currentthumbimage.md): The thumb image currently being used to render the slider.
- [thumbImageForState:](thumbimage%28for_%29.md): Returns the thumb image associated with the specified control state.
- [setThumbImage:forState:](setthumbimage%28__for_%29.md): Assigns a thumb image to the specified control states.
