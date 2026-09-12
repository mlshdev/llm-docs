> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingbutton/isselected](https://developer.apple.com/documentation/carplay/cpnowplayingbutton/isselected)

# isSelected (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that indicates whether the button is in a selected state.

## Declaration

```swift
var isSelected: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), CarPlay draws the button with a selected appearance to indicate its selected state. You can only update this property manually on instances of [CPNowPlayingImageButton](../cpnowplayingimagebutton.md). All system-provided buttons—for example, [CPNowPlayingShuffleButton](../cpnowplayingshufflebutton.md) or [CPNowPlayingRepeatButton](../cpnowplayingrepeatbutton.md)—manage their own selected states internally.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the Button State

- [isEnabled](isenabled.md): A Boolean value that indicates whether the button is in an enabled state.

# selected (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that indicates whether the button is in a selected state.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isSelected) BOOL selected;
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), CarPlay draws the button with a selected appearance to indicate its selected state. You can only update this property manually on instances of [CPNowPlayingImageButton](../cpnowplayingimagebutton.md). All system-provided buttons—for example, [CPNowPlayingShuffleButton](../cpnowplayingshufflebutton.md) or [CPNowPlayingRepeatButton](../cpnowplayingrepeatbutton.md)—manage their own selected states internally.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the Button State

- [enabled](isenabled.md): A Boolean value that indicates whether the button is in an enabled state.
