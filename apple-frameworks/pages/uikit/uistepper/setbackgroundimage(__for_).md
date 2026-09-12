> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistepper/setbackgroundimage(_:for:)](https://developer.apple.com/documentation/uikit/uistepper/setbackgroundimage(_:for:))

# setBackgroundImage(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the background image for the control when it’s in the specified state.

## Declaration

```swift
func setBackgroundImage(_ image: UIImage?, for state: UIControl.State)
```

## Parameters

- `image`: The background image to use for the specified state.
- `state`: The control state in which you want to display the image.

<a id="Discussion"></a>

## Discussion

For good results, `image` must be a stretchable image.

## See Also

### Customizing appearance

- [backgroundImage(for:)](backgroundimage%28for_%29.md): Returns the background image associated with the specified control state.
- [decrementImage(for:)](decrementimage%28for_%29.md): Returns the image used for the decrement glyph of the control.
- [setDecrementImage(\_:for:)](setdecrementimage%28__for_%29.md): Sets the image to use for the decrement glyph of the control.
- [dividerImage(forLeftSegmentState:rightSegmentState:)](dividerimage%28forleftsegmentstate_rightsegmentstate_%29.md): Returns the divider image for the given combination of left and right states.
- [setDividerImage(\_:forLeftSegmentState:rightSegmentState:)](setdividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md): Sets the image to use for the given combination of left and right states.
- [incrementImage(for:)](incrementimage%28for_%29.md): Returns the image used for the increment glyph of the control.
- [setIncrementImage(\_:for:)](setincrementimage%28__for_%29.md): Sets the image to use for the increment glyph of the control.

# setBackgroundImage:forState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the background image for the control when it’s in the specified state.

## Declaration

```objectivec
- (void) setBackgroundImage:(UIImage *) image forState:(UIControlState) state;
```

## Parameters

- `image`: The background image to use for the specified state.
- `state`: The control state in which you want to display the image.

<a id="Discussion"></a>

## Discussion

For good results, `image` must be a stretchable image.

## See Also

### Customizing appearance

- [backgroundImageForState:](backgroundimage%28for_%29.md): Returns the background image associated with the specified control state.
- [decrementImageForState:](decrementimage%28for_%29.md): Returns the image used for the decrement glyph of the control.
- [setDecrementImage:forState:](setdecrementimage%28__for_%29.md): Sets the image to use for the decrement glyph of the control.
- [dividerImageForLeftSegmentState:rightSegmentState:](dividerimage%28forleftsegmentstate_rightsegmentstate_%29.md): Returns the divider image for the given combination of left and right states.
- [setDividerImage:forLeftSegmentState:rightSegmentState:](setdividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md): Sets the image to use for the given combination of left and right states.
- [incrementImageForState:](incrementimage%28for_%29.md): Returns the image used for the increment glyph of the control.
- [setIncrementImage:forState:](setincrementimage%28__for_%29.md): Sets the image to use for the increment glyph of the control.
