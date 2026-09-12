> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/focusringmaskbounds(forframe:in:)](https://developer.apple.com/documentation/appkit/nscell/focusringmaskbounds(forframe:in:))

# focusRingMaskBounds(forFrame:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the bounds of the focus ring mask.

## Declaration

```swift
func focusRingMaskBounds(forFrame cellFrame: NSRect, in controlView: NSView) -> NSRect
```

## Parameters

- `cellFrame`: The bounding rectangle of the receiver, or a portion of the bounding rectangle.
- `controlView`: The view that manages the cell.

<a id="return-value"></a>

## Return Value

Returns a rectangle encompassing the focus ring bounds in the `controlView` coordinate space.

<a id="Discussion"></a>

## Discussion

Implemented by `NSCell` subclasses to allow the cell to provide the rectangular bounds of the focus ring mask for the cell.

The default implementation returns an empty value. Subclasses are expected to implement this method if they intend to draw a focus ring.

## See Also

### Managing Focus Rings

- [drawFocusRingMask(withFrame:in:)](drawfocusringmask%28withframe_in_%29.md): Draws the focus ring for the control.
- [defaultFocusRingType](defaultfocusringtype.md): Returns the default type of focus ring for the receiver.
- [focusRingType](focusringtype.md): The type of focus ring to use with the associated view.

# focusRingMaskBoundsForFrame:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the bounds of the focus ring mask.

## Declaration

```objectivec
- (NSRect) focusRingMaskBoundsForFrame:(NSRect) cellFrame inView:(NSView *) controlView;
```

## Parameters

- `cellFrame`: The bounding rectangle of the receiver, or a portion of the bounding rectangle.
- `controlView`: The view that manages the cell.

<a id="return-value"></a>

## Return Value

Returns a rectangle encompassing the focus ring bounds in the `controlView` coordinate space.

<a id="Discussion"></a>

## Discussion

Implemented by `NSCell` subclasses to allow the cell to provide the rectangular bounds of the focus ring mask for the cell.

The default implementation returns an empty value. Subclasses are expected to implement this method if they intend to draw a focus ring.

## See Also

### Managing Focus Rings

- [drawFocusRingMaskWithFrame:inView:](drawfocusringmask%28withframe_in_%29.md): Draws the focus ring for the control.
- [defaultFocusRingType](defaultfocusringtype.md): Returns the default type of focus ring for the receiver.
- [focusRingType](focusringtype.md): The type of focus ring to use with the associated view.
