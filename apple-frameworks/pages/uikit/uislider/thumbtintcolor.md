> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uislider/thumbtintcolor](https://developer.apple.com/documentation/uikit/uislider/thumbtintcolor)

# thumbTintColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The color used to tint the default thumb images.

## Declaration

```swift
var thumbTintColor: UIColor? { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property resets the thumb images back to the slider’s default images; any custom images are released by the slider. Setting this property to `nil` resets the tint color to the default and removes any custom thumb images.

> **Important**

>  This property isn’t available when the user interface idiom is [UIUserInterfaceIdiom.mac](../uiuserinterfaceidiom/mac.md) and [behavioralStyle](behavioralstyle.md) is [UIBehavioralStyle.mac](../uibehavioralstyle/mac.md) — setting it while in this state throws an exception.

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
- [currentThumbImage](currentthumbimage.md): The thumb image currently being used to render the slider.
- [thumbImage(for:)](thumbimage%28for_%29.md): Returns the thumb image associated with the specified control state.
- [setThumbImage(\_:for:)](setthumbimage%28__for_%29.md): Assigns a thumb image to the specified control states.

# thumbTintColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The color used to tint the default thumb images.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIColor * thumbTintColor;
```

<a id="Discussion"></a>

## Discussion

Setting this property resets the thumb images back to the slider’s default images; any custom images are released by the slider. Setting this property to `nil` resets the tint color to the default and removes any custom thumb images.

> **Important**

>  This property isn’t available when the user interface idiom is [UIUserInterfaceIdiomMac](../uiuserinterfaceidiom/mac.md) and [behavioralStyle](behavioralstyle.md) is [UIBehavioralStyleMac](../uibehavioralstyle/mac.md) — setting it while in this state throws an exception.

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
- [currentThumbImage](currentthumbimage.md): The thumb image currently being used to render the slider.
- [thumbImageForState:](thumbimage%28for_%29.md): Returns the thumb image associated with the specified control state.
- [setThumbImage:forState:](setthumbimage%28__for_%29.md): Assigns a thumb image to the specified control states.
