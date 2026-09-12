> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistepper/setincrementimage(_:for:)](https://developer.apple.com/documentation/uikit/uistepper/setincrementimage(_:for:))

# setIncrementImage(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the image to use for the increment glyph of the control.

## Declaration

```swift
func setIncrementImage(_ image: UIImage?, for state: UIControl.State)
```

## Parameters

- `image`: The image to use for the increment glyph.
- `state`: The control state.

<a id="Discussion"></a>

## Discussion

The image you specify is used as a template image to create the final control. If you don’t specify a custom image, a plus (`+`) glyph is used.

## See Also

### Customizing appearance

- [backgroundImage(for:)](backgroundimage%28for_%29.md): Returns the background image associated with the specified control state.
- [setBackgroundImage(\_:for:)](setbackgroundimage%28__for_%29.md): Sets the background image for the control when it’s in the specified state.
- [decrementImage(for:)](decrementimage%28for_%29.md): Returns the image used for the decrement glyph of the control.
- [setDecrementImage(\_:for:)](setdecrementimage%28__for_%29.md): Sets the image to use for the decrement glyph of the control.
- [dividerImage(forLeftSegmentState:rightSegmentState:)](dividerimage%28forleftsegmentstate_rightsegmentstate_%29.md): Returns the divider image for the given combination of left and right states.
- [setDividerImage(\_:forLeftSegmentState:rightSegmentState:)](setdividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md): Sets the image to use for the given combination of left and right states.
- [incrementImage(for:)](incrementimage%28for_%29.md): Returns the image used for the increment glyph of the control.

# setIncrementImage:forState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the image to use for the increment glyph of the control.

## Declaration

```objectivec
- (void) setIncrementImage:(UIImage *) image forState:(UIControlState) state;
```

## Parameters

- `image`: The image to use for the increment glyph.
- `state`: The control state.

<a id="Discussion"></a>

## Discussion

The image you specify is used as a template image to create the final control. If you don’t specify a custom image, a plus (`+`) glyph is used.

## See Also

### Customizing appearance

- [backgroundImageForState:](backgroundimage%28for_%29.md): Returns the background image associated with the specified control state.
- [setBackgroundImage:forState:](setbackgroundimage%28__for_%29.md): Sets the background image for the control when it’s in the specified state.
- [decrementImageForState:](decrementimage%28for_%29.md): Returns the image used for the decrement glyph of the control.
- [setDecrementImage:forState:](setdecrementimage%28__for_%29.md): Sets the image to use for the decrement glyph of the control.
- [dividerImageForLeftSegmentState:rightSegmentState:](dividerimage%28forleftsegmentstate_rightsegmentstate_%29.md): Returns the divider image for the given combination of left and right states.
- [setDividerImage:forLeftSegmentState:rightSegmentState:](setdividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md): Sets the image to use for the given combination of left and right states.
- [incrementImageForState:](incrementimage%28for_%29.md): Returns the image used for the increment glyph of the control.
