> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uislider/currentthumbimage](https://developer.apple.com/documentation/uikit/uislider/currentthumbimage)

# currentThumbImage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The thumb image currently being used to render the slider.

## Declaration

```swift
var currentThumbImage: UIImage? { get }
```

<a id="Discussion"></a>

## Discussion

Sliders can have different thumb images for different control states. The active control state determines which thumb image is stored in this property. To get the thumb image for a different control state, use the [thumbImage(for:)](thumbimage%28for_%29.md) method.

If no custom thumb images have been set using the [setThumbImage(\_:for:)](setthumbimage%28__for_%29.md) method, this property is `nil`. In that situation, the slider uses the default thumb image for drawing.

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
- [maximumTrackImage(for:)](maximumtrackimage%28for_%29.md): Returns the maximum track image associated with the specified control state.
- [setMaximumTrackImage(\_:for:)](setmaximumtrackimage%28__for_%29.md): Assigns a maximum track image to the specified control states.
- [thumbTintColor](thumbtintcolor.md): The color used to tint the default thumb images.
- [thumbImage(for:)](thumbimage%28for_%29.md): Returns the thumb image associated with the specified control state.
- [setThumbImage(\_:for:)](setthumbimage%28__for_%29.md): Assigns a thumb image to the specified control states.

# currentThumbImage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The thumb image currently being used to render the slider.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIImage * currentThumbImage;
```

<a id="Discussion"></a>

## Discussion

Sliders can have different thumb images for different control states. The active control state determines which thumb image is stored in this property. To get the thumb image for a different control state, use the [thumbImageForState:](thumbimage%28for_%29.md) method.

If no custom thumb images have been set using the [setThumbImage:forState:](setthumbimage%28__for_%29.md) method, this property is `nil`. In that situation, the slider uses the default thumb image for drawing.

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
- [maximumTrackImageForState:](maximumtrackimage%28for_%29.md): Returns the maximum track image associated with the specified control state.
- [setMaximumTrackImage:forState:](setmaximumtrackimage%28__for_%29.md): Assigns a maximum track image to the specified control states.
- [thumbTintColor](thumbtintcolor.md): The color used to tint the default thumb images.
- [thumbImageForState:](thumbimage%28for_%29.md): Returns the thumb image associated with the specified control state.
- [setThumbImage:forState:](setthumbimage%28__for_%29.md): Assigns a thumb image to the specified control states.
