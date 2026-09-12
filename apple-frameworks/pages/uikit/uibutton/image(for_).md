> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/image(for:)](https://developer.apple.com/documentation/uikit/uibutton/image(for:))

# image(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the image used for a button state.

## Declaration

```swift
func image(for state: UIControl.State) -> UIImage?
```

## Parameters

- `state`: The state that uses the image. Possible values are described in [UIControl.State](../uicontrol/state-swift.struct.md).

<a id="return-value"></a>

## Return Value

The image used for the specified state.

## See Also

### Managing images and tint color

- [backgroundImage(for:)](backgroundimage%28for_%29.md): Returns the background image used for a button state.
- [setBackgroundImage(\_:for:)](setbackgroundimage%28__for_%29.md): Sets the background image to use for the specified button state.
- [setImage(\_:for:)](setimage%28__for_%29.md): Sets the image to use for the specified state.
- [preferredSymbolConfigurationForImage(in:)](preferredsymbolconfigurationforimage%28in_%29.md): Returns the preferred symbol configuration for a button state.
- [setPreferredSymbolConfiguration(\_:forImageIn:)](setpreferredsymbolconfiguration%28__forimagein_%29.md): Sets the preferred symbol configuration for a button state.
- [tintColor](tintcolor.md): The tint color to apply to the button title and image.

# imageForState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the image used for a button state.

## Declaration

```objectivec
- (UIImage *) imageForState:(UIControlState) state;
```

## Parameters

- `state`: The state that uses the image. Possible values are described in [UIControlState](../uicontrol/state-swift.struct.md).

<a id="return-value"></a>

## Return Value

The image used for the specified state.

## See Also

### Managing images and tint color

- [backgroundImageForState:](backgroundimage%28for_%29.md): Returns the background image used for a button state.
- [setBackgroundImage:forState:](setbackgroundimage%28__for_%29.md): Sets the background image to use for the specified button state.
- [setImage:forState:](setimage%28__for_%29.md): Sets the image to use for the specified state.
- [preferredSymbolConfigurationForImageInState:](preferredsymbolconfigurationforimage%28in_%29.md): Returns the preferred symbol configuration for a button state.
- [setPreferredSymbolConfiguration:forImageInState:](setpreferredsymbolconfiguration%28__forimagein_%29.md): Sets the preferred symbol configuration for a button state.
- [tintColor](tintcolor.md): The tint color to apply to the button title and image.
