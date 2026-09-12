> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/draw(withframe:in:)](https://developer.apple.com/documentation/appkit/nscell/draw(withframe:in:))

# draw(withFrame:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the receiver’s border and then draws the interior of the cell.

## Declaration

```swift
func draw(withFrame cellFrame: NSRect, in controlView: NSView)
```

## Parameters

- `cellFrame`: The bounding rectangle of the receiver.
- `controlView`: The control that manages the cell.

<a id="Discussion"></a>

## Discussion

This method draws the cell in the currently focused view, which can be different from the `controlView` passed in. Taking advantage of this behavior is not recommended, however.

## See Also

### Drawing and Highlighting

- [highlightColor(withFrame:in:)](highlightcolor%28withframe_in_%29.md): Returns the color the receiver uses when drawing the selection highlight.
- [drawInterior(withFrame:in:)](drawinterior%28withframe_in_%29.md): Draws the interior portion of the receiver, which includes the image or text portion but does not include the border.
- [controlView](controlview.md): The view associated with the cell.
- [highlight(\_:withFrame:in:)](highlight%28__withframe_in_%29.md): Redraws the receiver with the specified highlight setting.
- [isHighlighted](ishighlighted.md): A Boolean value indicating whether the cell has a highlighted appearance.

# drawWithFrame:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the receiver’s border and then draws the interior of the cell.

## Declaration

```objectivec
- (void) drawWithFrame:(NSRect) cellFrame inView:(NSView *) controlView;
```

## Parameters

- `cellFrame`: The bounding rectangle of the receiver.
- `controlView`: The control that manages the cell.

<a id="Discussion"></a>

## Discussion

This method draws the cell in the currently focused view, which can be different from the `controlView` passed in. Taking advantage of this behavior is not recommended, however.

## See Also

### Drawing and Highlighting

- [highlightColorWithFrame:inView:](highlightcolor%28withframe_in_%29.md): Returns the color the receiver uses when drawing the selection highlight.
- [drawInteriorWithFrame:inView:](drawinterior%28withframe_in_%29.md): Draws the interior portion of the receiver, which includes the image or text portion but does not include the border.
- [controlView](controlview.md): The view associated with the cell.
- [highlight:withFrame:inView:](highlight%28__withframe_in_%29.md): Redraws the receiver with the specified highlight setting.
- [highlighted](ishighlighted.md): A Boolean value indicating whether the cell has a highlighted appearance.
