> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistepper/setdecrementimage(_:for:)](https://developer.apple.com/documentation/uikit/uistepper/setdecrementimage(_:for:))

# setDecrementImage(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the image to use for the decrement glyph of the control.

## Declaration

```swift
func setDecrementImage(_ image: UIImage?, for state: UIControl.State)
```

## Parameters

- `image`: The image to use for the decrement glyph.
- `state`: The control state in which you want to display the image.

<a id="Discussion"></a>

## Discussion

The image you specify is used as a template image to create the final control. If you don’t specify a custom image, a minus (`-`) glyph is used.

## See Also

### Customizing appearance

- [backgroundImage(for:)](backgroundimage%28for_%29.md): Returns the background image associated with the specified control state.
- [setBackgroundImage(\_:for:)](setbackgroundimage%28__for_%29.md): Sets the background image for the control when it’s in the specified state.
- [decrementImage(for:)](decrementimage%28for_%29.md): Returns the image used for the decrement glyph of the control.
- [dividerImage(forLeftSegmentState:rightSegmentState:)](dividerimage%28forleftsegmentstate_rightsegmentstate_%29.md): Returns the divider image for the given combination of left and right states.
- [setDividerImage(\_:forLeftSegmentState:rightSegmentState:)](setdividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md): Sets the image to use for the given combination of left and right states.
- [incrementImage(for:)](incrementimage%28for_%29.md): Returns the image used for the increment glyph of the control.
- [setIncrementImage(\_:for:)](setincrementimage%28__for_%29.md): Sets the image to use for the increment glyph of the control.

# setDecrementImage:forState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the image to use for the decrement glyph of the control.

## Declaration

```objectivec
- (void) setDecrementImage:(UIImage *) image forState:(UIControlState) state;
```

## Parameters

- `image`: The image to use for the decrement glyph.
- `state`: The control state in which you want to display the image.

<a id="Discussion"></a>

## Discussion

The image you specify is used as a template image to create the final control. If you don’t specify a custom image, a minus (`-`) glyph is used.

## See Also

### Customizing appearance

- [backgroundImageForState:](backgroundimage%28for_%29.md): Returns the background image associated with the specified control state.
- [setBackgroundImage:forState:](setbackgroundimage%28__for_%29.md): Sets the background image for the control when it’s in the specified state.
- [decrementImageForState:](decrementimage%28for_%29.md): Returns the image used for the decrement glyph of the control.
- [dividerImageForLeftSegmentState:rightSegmentState:](dividerimage%28forleftsegmentstate_rightsegmentstate_%29.md): Returns the divider image for the given combination of left and right states.
- [setDividerImage:forLeftSegmentState:rightSegmentState:](setdividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md): Sets the image to use for the given combination of left and right states.
- [incrementImageForState:](incrementimage%28for_%29.md): Returns the image used for the increment glyph of the control.
- [setIncrementImage:forState:](setincrementimage%28__for_%29.md): Sets the image to use for the increment glyph of the control.
