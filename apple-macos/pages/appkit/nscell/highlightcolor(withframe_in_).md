> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/highlightcolor(withframe:in:)](https://developer.apple.com/documentation/appkit/nscell/highlightcolor(withframe:in:))

# highlightColor(withFrame:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the color the receiver uses when drawing the selection highlight.

## Declaration

```swift
func highlightColor(withFrame cellFrame: NSRect, in controlView: NSView) -> NSColor?
```

## Parameters

- `cellFrame`: The bounding rectangle of the receiver.
- `controlView`: The control that manages the cell.

<a id="return-value"></a>

## Return Value

The color the receiver uses when drawing the selection highlight.

<a id="Discussion"></a>

## Discussion

You should not assume that a cell would necessarily want to draw itself with the value returned from [selectedControlColor](../nscolor/selectedcontrolcolor.md). A cell may wish to draw with different a selection highlight color depending on such things as the key state of its `controlView`.

## See Also

### Drawing and Highlighting

- [draw(withFrame:in:)](draw%28withframe_in_%29.md): Draws the receiver’s border and then draws the interior of the cell.
- [drawInterior(withFrame:in:)](drawinterior%28withframe_in_%29.md): Draws the interior portion of the receiver, which includes the image or text portion but does not include the border.
- [controlView](controlview.md): The view associated with the cell.
- [highlight(\_:withFrame:in:)](highlight%28__withframe_in_%29.md): Redraws the receiver with the specified highlight setting.
- [isHighlighted](ishighlighted.md): A Boolean value indicating whether the cell has a highlighted appearance.

# highlightColorWithFrame:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the color the receiver uses when drawing the selection highlight.

## Declaration

```objectivec
- (NSColor *) highlightColorWithFrame:(NSRect) cellFrame inView:(NSView *) controlView;
```

## Parameters

- `cellFrame`: The bounding rectangle of the receiver.
- `controlView`: The control that manages the cell.

<a id="return-value"></a>

## Return Value

The color the receiver uses when drawing the selection highlight.

<a id="Discussion"></a>

## Discussion

You should not assume that a cell would necessarily want to draw itself with the value returned from [selectedControlColor](../nscolor/selectedcontrolcolor.md). A cell may wish to draw with different a selection highlight color depending on such things as the key state of its `controlView`.

## See Also

### Drawing and Highlighting

- [drawWithFrame:inView:](draw%28withframe_in_%29.md): Draws the receiver’s border and then draws the interior of the cell.
- [drawInteriorWithFrame:inView:](drawinterior%28withframe_in_%29.md): Draws the interior portion of the receiver, which includes the image or text portion but does not include the border.
- [controlView](controlview.md): The view associated with the cell.
- [highlight:withFrame:inView:](highlight%28__withframe_in_%29.md): Redraws the receiver with the specified highlight setting.
- [highlighted](ishighlighted.md): A Boolean value indicating whether the cell has a highlighted appearance.
