> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/tintcolor](https://developer.apple.com/documentation/uikit/uibutton/tintcolor)

# tintColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The tint color to apply to the button title and image.

## Declaration

```swift
var tintColor: UIColor! { get set }
```

<a id="Discussion"></a>

## Discussion

All subclasses of [UIView](../uiview.md) derive their behavior for [tintColor](../uiview/tintcolor.md) from the base class. See the discussion of [tintColor](../uiview/tintcolor.md) at the [UIView](../uiview.md) level for more information.

This property has no default effect for buttons with type [UIButton.ButtonType.custom](buttontype-swift.enum/custom.md). For custom buttons, you must implement any behavior related to [tintColor](tintcolor.md) yourself.

## See Also

### Managing images and tint color

- [backgroundImage(for:)](backgroundimage%28for_%29.md): Returns the background image used for a button state.
- [image(for:)](image%28for_%29.md): Returns the image used for a button state.
- [setBackgroundImage(\_:for:)](setbackgroundimage%28__for_%29.md): Sets the background image to use for the specified button state.
- [setImage(\_:for:)](setimage%28__for_%29.md): Sets the image to use for the specified state.
- [preferredSymbolConfigurationForImage(in:)](preferredsymbolconfigurationforimage%28in_%29.md): Returns the preferred symbol configuration for a button state.
- [setPreferredSymbolConfiguration(\_:forImageIn:)](setpreferredsymbolconfiguration%28__forimagein_%29.md): Sets the preferred symbol configuration for a button state.

# tintColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The tint color to apply to the button title and image.

## Declaration

```objectivec
@property (nonatomic, strong, null_resettable) UIColor * tintColor;
```

<a id="Discussion"></a>

## Discussion

All subclasses of [UIView](../uiview.md) derive their behavior for [tintColor](../uiview/tintcolor.md) from the base class. See the discussion of [tintColor](../uiview/tintcolor.md) at the [UIView](../uiview.md) level for more information.

This property has no default effect for buttons with type [UIButtonTypeCustom](buttontype-swift.enum/custom.md). For custom buttons, you must implement any behavior related to [tintColor](tintcolor.md) yourself.

## See Also

### Managing images and tint color

- [backgroundImageForState:](backgroundimage%28for_%29.md): Returns the background image used for a button state.
- [imageForState:](image%28for_%29.md): Returns the image used for a button state.
- [setBackgroundImage:forState:](setbackgroundimage%28__for_%29.md): Sets the background image to use for the specified button state.
- [setImage:forState:](setimage%28__for_%29.md): Sets the image to use for the specified state.
- [preferredSymbolConfigurationForImageInState:](preferredsymbolconfigurationforimage%28in_%29.md): Returns the preferred symbol configuration for a button state.
- [setPreferredSymbolConfiguration:forImageInState:](setpreferredsymbolconfiguration%28__forimagein_%29.md): Sets the preferred symbol configuration for a button state.
