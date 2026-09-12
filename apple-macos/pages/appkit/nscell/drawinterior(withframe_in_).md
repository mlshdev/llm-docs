> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/drawinterior(withframe:in:)](https://developer.apple.com/documentation/appkit/nscell/drawinterior(withframe:in:))

# drawInterior(withFrame:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the interior portion of the receiver, which includes the image or text portion but does not include the border.

## Declaration

```swift
func drawInterior(withFrame cellFrame: NSRect, in controlView: NSView)
```

## Parameters

- `cellFrame`: The bounding rectangle of the receiver, or a portion of the bounding rectangle.
- `controlView`: The control that manages the cell.

<a id="Discussion"></a>

## Discussion

Text-type `NSCell` objects display their contents in a rectangle slightly inset from `cellFrame` using a global `NSText` object. Image-type `NSCell` objects display their contents centered within `cellFrame`. If the proper attributes are set, this method also displays the dotted-line rectangle to indicate if the control is the first responder and highlights the cell. This method is invoked from the [drawCellInside(\_:)](../nscontrol/drawcellinside%28__%29.md) method of `NSControl` to visually update what the cell displays when its contents change. The drawing done by the `NSCell` implementation is minimal and becomes more complex in objects such as `NSButtonCell` and `NSSliderCell`.

This method draws the cell in the currently focused view, which can be different from the `controlView` passed in. Taking advantage of this is not recommended.

Subclasses often override this method to provide more sophisticated drawing of cell contents. Because [draw(withFrame:in:)](draw%28withframe_in_%29.md) invokes [drawInterior(withFrame:in:)](drawinterior%28withframe_in_%29.md) after it draws the cell’s border, do not invoke [draw(withFrame:in:)](draw%28withframe_in_%29.md) in your override implementation.

## See Also

### Related Documentation

- [showsFirstResponder](showsfirstresponder.md): A Boolean value indicating whether the cell provides a visual indication that it is the first responder.

### Drawing and Highlighting

- [draw(withFrame:in:)](draw%28withframe_in_%29.md): Draws the receiver’s border and then draws the interior of the cell.
- [highlightColor(withFrame:in:)](highlightcolor%28withframe_in_%29.md): Returns the color the receiver uses when drawing the selection highlight.
- [controlView](controlview.md): The view associated with the cell.
- [highlight(\_:withFrame:in:)](highlight%28__withframe_in_%29.md): Redraws the receiver with the specified highlight setting.
- [isHighlighted](ishighlighted.md): A Boolean value indicating whether the cell has a highlighted appearance.

# drawInteriorWithFrame:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the interior portion of the receiver, which includes the image or text portion but does not include the border.

## Declaration

```objectivec
- (void) drawInteriorWithFrame:(NSRect) cellFrame inView:(NSView *) controlView;
```

## Parameters

- `cellFrame`: The bounding rectangle of the receiver, or a portion of the bounding rectangle.
- `controlView`: The control that manages the cell.

<a id="Discussion"></a>

## Discussion

Text-type `NSCell` objects display their contents in a rectangle slightly inset from `cellFrame` using a global `NSText` object. Image-type `NSCell` objects display their contents centered within `cellFrame`. If the proper attributes are set, this method also displays the dotted-line rectangle to indicate if the control is the first responder and highlights the cell. This method is invoked from the [drawCellInside:](../nscontrol/drawcellinside%28__%29.md) method of `NSControl` to visually update what the cell displays when its contents change. The drawing done by the `NSCell` implementation is minimal and becomes more complex in objects such as `NSButtonCell` and `NSSliderCell`.

This method draws the cell in the currently focused view, which can be different from the `controlView` passed in. Taking advantage of this is not recommended.

Subclasses often override this method to provide more sophisticated drawing of cell contents. Because [drawWithFrame:inView:](draw%28withframe_in_%29.md) invokes [drawInteriorWithFrame:inView:](drawinterior%28withframe_in_%29.md) after it draws the cell’s border, do not invoke [drawWithFrame:inView:](draw%28withframe_in_%29.md) in your override implementation.

## See Also

### Related Documentation

- [showsFirstResponder](showsfirstresponder.md): A Boolean value indicating whether the cell provides a visual indication that it is the first responder.

### Drawing and Highlighting

- [drawWithFrame:inView:](draw%28withframe_in_%29.md): Draws the receiver’s border and then draws the interior of the cell.
- [highlightColorWithFrame:inView:](highlightcolor%28withframe_in_%29.md): Returns the color the receiver uses when drawing the selection highlight.
- [controlView](controlview.md): The view associated with the cell.
- [highlight:withFrame:inView:](highlight%28__withframe_in_%29.md): Redraws the receiver with the specified highlight setting.
- [highlighted](ishighlighted.md): A Boolean value indicating whether the cell has a highlighted appearance.
