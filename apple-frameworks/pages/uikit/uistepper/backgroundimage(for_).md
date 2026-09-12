> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistepper/backgroundimage(for:)](https://developer.apple.com/documentation/uikit/uistepper/backgroundimage(for:))

# backgroundImage(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the background image associated with the specified control state.

## Declaration

```swift
func backgroundImage(for state: UIControl.State) -> UIImage?
```

## Parameters

- `state`: The control state in which the image is displayed.

<a id="return-value"></a>

## Return Value

The background image used by the control when it is in the specified state.

## See Also

### Customizing appearance

- [setBackgroundImage(\_:for:)](setbackgroundimage%28__for_%29.md): Sets the background image for the control when it’s in the specified state.
- [decrementImage(for:)](decrementimage%28for_%29.md): Returns the image used for the decrement glyph of the control.
- [setDecrementImage(\_:for:)](setdecrementimage%28__for_%29.md): Sets the image to use for the decrement glyph of the control.
- [dividerImage(forLeftSegmentState:rightSegmentState:)](dividerimage%28forleftsegmentstate_rightsegmentstate_%29.md): Returns the divider image for the given combination of left and right states.
- [setDividerImage(\_:forLeftSegmentState:rightSegmentState:)](setdividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md): Sets the image to use for the given combination of left and right states.
- [incrementImage(for:)](incrementimage%28for_%29.md): Returns the image used for the increment glyph of the control.
- [setIncrementImage(\_:for:)](setincrementimage%28__for_%29.md): Sets the image to use for the increment glyph of the control.

# backgroundImageForState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the background image associated with the specified control state.

## Declaration

```objectivec
- (UIImage *) backgroundImageForState:(UIControlState) state;
```

## Parameters

- `state`: The control state in which the image is displayed.

<a id="return-value"></a>

## Return Value

The background image used by the control when it is in the specified state.

## See Also

### Customizing appearance

- [setBackgroundImage:forState:](setbackgroundimage%28__for_%29.md): Sets the background image for the control when it’s in the specified state.
- [decrementImageForState:](decrementimage%28for_%29.md): Returns the image used for the decrement glyph of the control.
- [setDecrementImage:forState:](setdecrementimage%28__for_%29.md): Sets the image to use for the decrement glyph of the control.
- [dividerImageForLeftSegmentState:rightSegmentState:](dividerimage%28forleftsegmentstate_rightsegmentstate_%29.md): Returns the divider image for the given combination of left and right states.
- [setDividerImage:forLeftSegmentState:rightSegmentState:](setdividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md): Sets the image to use for the given combination of left and right states.
- [incrementImageForState:](incrementimage%28for_%29.md): Returns the image used for the increment glyph of the control.
- [setIncrementImage:forState:](setincrementimage%28__for_%29.md): Sets the image to use for the increment glyph of the control.
