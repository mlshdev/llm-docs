> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistepper/dividerimage(forleftsegmentstate:rightsegmentstate:)](https://developer.apple.com/documentation/uikit/uistepper/dividerimage(forleftsegmentstate:rightsegmentstate:))

# dividerImage(forLeftSegmentState:rightSegmentState:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the divider image for the given combination of left and right states.

## Declaration

```swift
func dividerImage(forLeftSegmentState state: UIControl.State, rightSegmentState state: UIControl.State) -> UIImage?
```

<a id="return-value"></a>

## Return Value

The image used for the specified combination of left and right states.

## See Also

### Customizing appearance

- [backgroundImage(for:)](backgroundimage%28for_%29.md): Returns the background image associated with the specified control state.
- [setBackgroundImage(\_:for:)](setbackgroundimage%28__for_%29.md): Sets the background image for the control when it’s in the specified state.
- [decrementImage(for:)](decrementimage%28for_%29.md): Returns the image used for the decrement glyph of the control.
- [setDecrementImage(\_:for:)](setdecrementimage%28__for_%29.md): Sets the image to use for the decrement glyph of the control.
- [setDividerImage(\_:forLeftSegmentState:rightSegmentState:)](setdividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md): Sets the image to use for the given combination of left and right states.
- [incrementImage(for:)](incrementimage%28for_%29.md): Returns the image used for the increment glyph of the control.
- [setIncrementImage(\_:for:)](setincrementimage%28__for_%29.md): Sets the image to use for the increment glyph of the control.

# dividerImageForLeftSegmentState:rightSegmentState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the divider image for the given combination of left and right states.

## Declaration

```objectivec
- (UIImage *) dividerImageForLeftSegmentState:(UIControlState) state rightSegmentState:(UIControlState) state;
```

<a id="return-value"></a>

## Return Value

The image used for the specified combination of left and right states.

## See Also

### Customizing appearance

- [backgroundImageForState:](backgroundimage%28for_%29.md): Returns the background image associated with the specified control state.
- [setBackgroundImage:forState:](setbackgroundimage%28__for_%29.md): Sets the background image for the control when it’s in the specified state.
- [decrementImageForState:](decrementimage%28for_%29.md): Returns the image used for the decrement glyph of the control.
- [setDecrementImage:forState:](setdecrementimage%28__for_%29.md): Sets the image to use for the decrement glyph of the control.
- [setDividerImage:forLeftSegmentState:rightSegmentState:](setdividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md): Sets the image to use for the given combination of left and right states.
- [incrementImageForState:](incrementimage%28for_%29.md): Returns the image used for the increment glyph of the control.
- [setIncrementImage:forState:](setincrementimage%28__for_%29.md): Sets the image to use for the increment glyph of the control.
