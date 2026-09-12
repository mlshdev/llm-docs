> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/preferredsymbolconfigurationforimage(in:)](https://developer.apple.com/documentation/uikit/uibutton/preferredsymbolconfigurationforimage(in:))

# preferredSymbolConfigurationForImage(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Returns the preferred symbol configuration for a button state.

## Declaration

```swift
func preferredSymbolConfigurationForImage(in state: UIControl.State) -> UIImage.SymbolConfiguration?
```

## Parameters

- `state`: The state that uses the symbol configuration. Possible values are described in [UIControl.State](../uicontrol/state-swift.struct.md).

## See Also

### Managing images and tint color

- [backgroundImage(for:)](backgroundimage%28for_%29.md): Returns the background image used for a button state.
- [image(for:)](image%28for_%29.md): Returns the image used for a button state.
- [setBackgroundImage(\_:for:)](setbackgroundimage%28__for_%29.md): Sets the background image to use for the specified button state.
- [setImage(\_:for:)](setimage%28__for_%29.md): Sets the image to use for the specified state.
- [setPreferredSymbolConfiguration(\_:forImageIn:)](setpreferredsymbolconfiguration%28__forimagein_%29.md): Sets the preferred symbol configuration for a button state.
- [tintColor](tintcolor.md): The tint color to apply to the button title and image.

# preferredSymbolConfigurationForImageInState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Returns the preferred symbol configuration for a button state.

## Declaration

```objectivec
- (UIImageSymbolConfiguration *) preferredSymbolConfigurationForImageInState:(UIControlState) state;
```

## Parameters

- `state`: The state that uses the symbol configuration. Possible values are described in [UIControlState](../uicontrol/state-swift.struct.md).

## See Also

### Managing images and tint color

- [backgroundImageForState:](backgroundimage%28for_%29.md): Returns the background image used for a button state.
- [imageForState:](image%28for_%29.md): Returns the image used for a button state.
- [setBackgroundImage:forState:](setbackgroundimage%28__for_%29.md): Sets the background image to use for the specified button state.
- [setImage:forState:](setimage%28__for_%29.md): Sets the image to use for the specified state.
- [setPreferredSymbolConfiguration:forImageInState:](setpreferredsymbolconfiguration%28__forimagein_%29.md): Sets the preferred symbol configuration for a button state.
- [tintColor](tintcolor.md): The tint color to apply to the button title and image.
