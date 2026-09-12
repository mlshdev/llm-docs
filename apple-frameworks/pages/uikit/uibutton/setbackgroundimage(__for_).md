> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/setbackgroundimage(_:for:)](https://developer.apple.com/documentation/uikit/uibutton/setbackgroundimage(_:for:))

# setBackgroundImage(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the background image to use for the specified button state.

## Declaration

```swift
func setBackgroundImage(_ image: UIImage?, for state: UIControl.State)
```

## Parameters

- `image`: The background image to use for the specified state.
- `state`: The state that uses the specified image. The values are described in [UIControl.State](../uicontrol/state-swift.struct.md).

<a id="Discussion"></a>

## Discussion

In general, if a property is not specified for a state, the default is to use the [normal](../uicontrol/state-swift.struct/normal.md) value. If the [normal](../uicontrol/state-swift.struct/normal.md) value is not set, then the property defaults to a system value. Therefore, at a minimum, you should set the value for the normal state.

## See Also

### Managing images and tint color

- [backgroundImage(for:)](backgroundimage%28for_%29.md): Returns the background image used for a button state.
- [image(for:)](image%28for_%29.md): Returns the image used for a button state.
- [setImage(\_:for:)](setimage%28__for_%29.md): Sets the image to use for the specified state.
- [preferredSymbolConfigurationForImage(in:)](preferredsymbolconfigurationforimage%28in_%29.md): Returns the preferred symbol configuration for a button state.
- [setPreferredSymbolConfiguration(\_:forImageIn:)](setpreferredsymbolconfiguration%28__forimagein_%29.md): Sets the preferred symbol configuration for a button state.
- [tintColor](tintcolor.md): The tint color to apply to the button title and image.

# setBackgroundImage:forState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the background image to use for the specified button state.

## Declaration

```objectivec
- (void) setBackgroundImage:(UIImage *) image forState:(UIControlState) state;
```

## Parameters

- `image`: The background image to use for the specified state.
- `state`: The state that uses the specified image. The values are described in [UIControlState](../uicontrol/state-swift.struct.md).

<a id="Discussion"></a>

## Discussion

In general, if a property is not specified for a state, the default is to use the [UIControlStateNormal](../uicontrol/state-swift.struct/normal.md) value. If the [UIControlStateNormal](../uicontrol/state-swift.struct/normal.md) value is not set, then the property defaults to a system value. Therefore, at a minimum, you should set the value for the normal state.

## See Also

### Managing images and tint color

- [backgroundImageForState:](backgroundimage%28for_%29.md): Returns the background image used for a button state.
- [imageForState:](image%28for_%29.md): Returns the image used for a button state.
- [setImage:forState:](setimage%28__for_%29.md): Sets the image to use for the specified state.
- [preferredSymbolConfigurationForImageInState:](preferredsymbolconfigurationforimage%28in_%29.md): Returns the preferred symbol configuration for a button state.
- [setPreferredSymbolConfiguration:forImageInState:](setpreferredsymbolconfiguration%28__forimagein_%29.md): Sets the preferred symbol configuration for a button state.
- [tintColor](tintcolor.md): The tint color to apply to the button title and image.
