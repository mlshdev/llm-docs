> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingbutton/isselected

# isSelected (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that indicates the selected state of a custom button.

## Declaration

```swift
var isSelected: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Use this property in [CPNowPlayingImageButton](../cpnowplayingimagebutton.md) objects to change the selected state of your button. Setting this property to `true` draws the button with a selected appearance. Setting the property to `false` draws the button with its unselected appearance. The default value of this property is `false`.

> **Note**

> You can’t change the selected state of system-provided button types such as [CPNowPlayingShuffleButton](../cpnowplayingshufflebutton.md) or [CPNowPlayingRepeatButton](../cpnowplayingrepeatbutton.md). Those buttons manage their own selected state and ignore any attempts to change this value.

## See Also

### Managing the button state

- [isEnabled](isenabled.md): A Boolean value that indicates whether the button is enabled.

# selected (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that indicates the selected state of a custom button.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isSelected) BOOL selected;
```

<a id="discussion"></a>

## Discussion

Use this property in [CPNowPlayingImageButton](../cpnowplayingimagebutton.md) objects to change the selected state of your button. Setting this property to `true` draws the button with a selected appearance. Setting the property to `false` draws the button with its unselected appearance. The default value of this property is `false`.

> **Note**

> You can’t change the selected state of system-provided button types such as [CPNowPlayingShuffleButton](../cpnowplayingshufflebutton.md) or [CPNowPlayingRepeatButton](../cpnowplayingrepeatbutton.md). Those buttons manage their own selected state and ignore any attempts to change this value.

## See Also

### Managing the button state

- [enabled](isenabled.md): A Boolean value that indicates whether the button is enabled.
