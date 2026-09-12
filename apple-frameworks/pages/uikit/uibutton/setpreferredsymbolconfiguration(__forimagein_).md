> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/setpreferredsymbolconfiguration(_:forimagein:)](https://developer.apple.com/documentation/uikit/uibutton/setpreferredsymbolconfiguration(_:forimagein:))

# setPreferredSymbolConfiguration(\_:forImageIn:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Sets the preferred symbol configuration for a button state.

## Declaration

```swift
func setPreferredSymbolConfiguration(_ configuration: UIImage.SymbolConfiguration?, forImageIn state: UIControl.State)
```

## Parameters

- `configuration`: The image symbol configuration for the specified state.
- `state`: The state that uses the specified image symbol configuration. Possible values are described in [UIControl.State](../uicontrol/state-swift.struct.md).

## See Also

### Managing images and tint color

- [backgroundImage(for:)](backgroundimage%28for_%29.md): Returns the background image used for a button state.
- [image(for:)](image%28for_%29.md): Returns the image used for a button state.
- [setBackgroundImage(\_:for:)](setbackgroundimage%28__for_%29.md): Sets the background image to use for the specified button state.
- [setImage(\_:for:)](setimage%28__for_%29.md): Sets the image to use for the specified state.
- [preferredSymbolConfigurationForImage(in:)](preferredsymbolconfigurationforimage%28in_%29.md): Returns the preferred symbol configuration for a button state.
- [tintColor](tintcolor.md): The tint color to apply to the button title and image.

# setPreferredSymbolConfiguration:forImageInState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Sets the preferred symbol configuration for a button state.

## Declaration

```objectivec
- (void) setPreferredSymbolConfiguration:(UIImageSymbolConfiguration *) configuration forImageInState:(UIControlState) state;
```

## Parameters

- `configuration`: The image symbol configuration for the specified state.
- `state`: The state that uses the specified image symbol configuration. Possible values are described in [UIControlState](../uicontrol/state-swift.struct.md).

## See Also

### Managing images and tint color

- [backgroundImageForState:](backgroundimage%28for_%29.md): Returns the background image used for a button state.
- [imageForState:](image%28for_%29.md): Returns the image used for a button state.
- [setBackgroundImage:forState:](setbackgroundimage%28__for_%29.md): Sets the background image to use for the specified button state.
- [setImage:forState:](setimage%28__for_%29.md): Sets the image to use for the specified state.
- [preferredSymbolConfigurationForImageInState:](preferredsymbolconfigurationforimage%28in_%29.md): Returns the preferred symbol configuration for a button state.
- [tintColor](tintcolor.md): The tint color to apply to the button title and image.
