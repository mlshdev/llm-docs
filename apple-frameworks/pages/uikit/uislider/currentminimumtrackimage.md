> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uislider/currentminimumtrackimage](https://developer.apple.com/documentation/uikit/uislider/currentminimumtrackimage)

# currentMinimumTrackImage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The minimum track image currently being used to render the slider.

## Declaration

```swift
var currentMinimumTrackImage: UIImage? { get }
```

<a id="Discussion"></a>

## Discussion

Sliders can have different track images for different control states. The active control state determines which minimum track image is stored in this property. To get the minimum track image for a different control state, use the [minimumTrackImage(for:)](minimumtrackimage%28for_%29.md) method.

If no custom track images have been set using the [setMinimumTrackImage(\_:for:)](setminimumtrackimage%28__for_%29.md) method, this property contains the value `nil`. In that situation, the slider uses the default minimum track image for drawing.

## See Also

### Changing the slider’s appearance

- [minimumValueImage](minimumvalueimage.md): The image that represents the slider’s minimum value.
- [maximumValueImage](maximumvalueimage.md): The image representing the slider’s maximum value.
- [minimumTrackTintColor](minimumtracktintcolor.md): The color used to tint the default minimum track images.
- [minimumTrackImage(for:)](minimumtrackimage%28for_%29.md): Returns the minimum track image associated with the specified control state.
- [setMinimumTrackImage(\_:for:)](setminimumtrackimage%28__for_%29.md): Assigns a minimum track image to the specified control states.
- [maximumTrackTintColor](maximumtracktintcolor.md): The color used to tint the default maximum track images.
- [currentMaximumTrackImage](currentmaximumtrackimage.md): Contains the maximum track image currently being used to render the slider.
- [maximumTrackImage(for:)](maximumtrackimage%28for_%29.md): Returns the maximum track image associated with the specified control state.
- [setMaximumTrackImage(\_:for:)](setmaximumtrackimage%28__for_%29.md): Assigns a maximum track image to the specified control states.
- [thumbTintColor](thumbtintcolor.md): The color used to tint the default thumb images.
- [currentThumbImage](currentthumbimage.md): The thumb image currently being used to render the slider.
- [thumbImage(for:)](thumbimage%28for_%29.md): Returns the thumb image associated with the specified control state.
- [setThumbImage(\_:for:)](setthumbimage%28__for_%29.md): Assigns a thumb image to the specified control states.

# currentMinimumTrackImage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The minimum track image currently being used to render the slider.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIImage * currentMinimumTrackImage;
```

<a id="Discussion"></a>

## Discussion

Sliders can have different track images for different control states. The active control state determines which minimum track image is stored in this property. To get the minimum track image for a different control state, use the [minimumTrackImageForState:](minimumtrackimage%28for_%29.md) method.

If no custom track images have been set using the [setMinimumTrackImage:forState:](setminimumtrackimage%28__for_%29.md) method, this property contains the value `nil`. In that situation, the slider uses the default minimum track image for drawing.

## See Also

### Changing the slider’s appearance

- [minimumValueImage](minimumvalueimage.md): The image that represents the slider’s minimum value.
- [maximumValueImage](maximumvalueimage.md): The image representing the slider’s maximum value.
- [minimumTrackTintColor](minimumtracktintcolor.md): The color used to tint the default minimum track images.
- [minimumTrackImageForState:](minimumtrackimage%28for_%29.md): Returns the minimum track image associated with the specified control state.
- [setMinimumTrackImage:forState:](setminimumtrackimage%28__for_%29.md): Assigns a minimum track image to the specified control states.
- [maximumTrackTintColor](maximumtracktintcolor.md): The color used to tint the default maximum track images.
- [currentMaximumTrackImage](currentmaximumtrackimage.md): Contains the maximum track image currently being used to render the slider.
- [maximumTrackImageForState:](maximumtrackimage%28for_%29.md): Returns the maximum track image associated with the specified control state.
- [setMaximumTrackImage:forState:](setmaximumtrackimage%28__for_%29.md): Assigns a maximum track image to the specified control states.
- [thumbTintColor](thumbtintcolor.md): The color used to tint the default thumb images.
- [currentThumbImage](currentthumbimage.md): The thumb image currently being used to render the slider.
- [thumbImageForState:](thumbimage%28for_%29.md): Returns the thumb image associated with the specified control state.
- [setThumbImage:forState:](setthumbimage%28__for_%29.md): Assigns a thumb image to the specified control states.
