> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/setimage(_:for:)](https://developer.apple.com/documentation/uikit/uibutton/setimage(_:for:))

# setImage(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the image to use for the specified state.

## Declaration

```swift
func setImage(_ image: UIImage?, for state: UIControl.State)
```

## Parameters

- `image`: The image to use for the specified state.
- `state`: The state that uses the specified image. The values are described in [UIControl.State](../uicontrol/state-swift.struct.md).

<a id="Discussion"></a>

## Discussion

At a minimum, always set an image for the [normal](../uicontrol/state-swift.struct/normal.md) state when associating images to a button. If you don’t specify an image for the other states, the button uses the image associated with [normal](../uicontrol/state-swift.struct/normal.md). If you don’t specify an image for the [normal](../uicontrol/state-swift.struct/normal.md) state, the button uses a system value.

> **Important**

>  When the user interface idiom is [UIUserInterfaceIdiom.mac](../uiuserinterfaceidiom/mac.md) and [behavioralStyle](behavioralstyle.md) is [UIBehavioralStyle.mac](../uibehavioralstyle/mac.md), your app throws an exception if you use this method to set the image for any state other than [normal](../uicontrol/state-swift.struct/normal.md).

## See Also

### Managing images and tint color

- [backgroundImage(for:)](backgroundimage%28for_%29.md): Returns the background image used for a button state.
- [image(for:)](image%28for_%29.md): Returns the image used for a button state.
- [setBackgroundImage(\_:for:)](setbackgroundimage%28__for_%29.md): Sets the background image to use for the specified button state.
- [preferredSymbolConfigurationForImage(in:)](preferredsymbolconfigurationforimage%28in_%29.md): Returns the preferred symbol configuration for a button state.
- [setPreferredSymbolConfiguration(\_:forImageIn:)](setpreferredsymbolconfiguration%28__forimagein_%29.md): Sets the preferred symbol configuration for a button state.
- [tintColor](tintcolor.md): The tint color to apply to the button title and image.

# setImage:forState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the image to use for the specified state.

## Declaration

```objectivec
- (void) setImage:(UIImage *) image forState:(UIControlState) state;
```

## Parameters

- `image`: The image to use for the specified state.
- `state`: The state that uses the specified image. The values are described in [UIControlState](../uicontrol/state-swift.struct.md).

<a id="Discussion"></a>

## Discussion

At a minimum, always set an image for the [UIControlStateNormal](../uicontrol/state-swift.struct/normal.md) state when associating images to a button. If you don’t specify an image for the other states, the button uses the image associated with [UIControlStateNormal](../uicontrol/state-swift.struct/normal.md). If you don’t specify an image for the [UIControlStateNormal](../uicontrol/state-swift.struct/normal.md) state, the button uses a system value.

> **Important**

>  When the user interface idiom is [UIUserInterfaceIdiomMac](../uiuserinterfaceidiom/mac.md) and [behavioralStyle](behavioralstyle.md) is [UIBehavioralStyleMac](../uibehavioralstyle/mac.md), your app throws an exception if you use this method to set the image for any state other than [UIControlStateNormal](../uicontrol/state-swift.struct/normal.md).

## See Also

### Managing images and tint color

- [backgroundImageForState:](backgroundimage%28for_%29.md): Returns the background image used for a button state.
- [imageForState:](image%28for_%29.md): Returns the image used for a button state.
- [setBackgroundImage:forState:](setbackgroundimage%28__for_%29.md): Sets the background image to use for the specified button state.
- [preferredSymbolConfigurationForImageInState:](preferredsymbolconfigurationforimage%28in_%29.md): Returns the preferred symbol configuration for a button state.
- [setPreferredSymbolConfiguration:forImageInState:](setpreferredsymbolconfiguration%28__forimagein_%29.md): Sets the preferred symbol configuration for a button state.
- [tintColor](tintcolor.md): The tint color to apply to the button title and image.
