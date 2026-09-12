> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablerowview/drawselection(in:)](https://developer.apple.com/documentation/appkit/nstablerowview/drawselection(in:))

# drawSelection(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Draws the selected row.

## Declaration

```swift
func drawSelection(in dirtyRect: NSRect)
```

## Parameters

- `dirtyRect`: The rectangle that requires drawing.

<a id="Discussion"></a>

## Discussion

This method is only called if the selection should be drawn.

The selection will automatically be alpha-blended if the selection is animating in or out.

The default selection drawn is dependent on the [selectionHighlightStyle](../nstableview/selectionhighlightstyle-swift.property.md).

## See Also

### Overriding Row View Display Characteristics

- [backgroundColor](backgroundcolor.md): The background color of the row.
- [drawBackground(in:)](drawbackground%28in_%29.md): Draws the background of the row in the rectangle.
- [drawDraggingDestinationFeedback(in:)](drawdraggingdestinationfeedback%28in_%29.md): Draws the row’s dragging destination feedback when the entire row is a drop target.
- [drawSeparator(in:)](drawseparator%28in_%29.md): Draws the horizontal separator between table rows.

# drawSelectionInRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Draws the selected row.

## Declaration

```objectivec
- (void) drawSelectionInRect:(NSRect) dirtyRect;
```

## Parameters

- `dirtyRect`: The rectangle that requires drawing.

<a id="Discussion"></a>

## Discussion

This method is only called if the selection should be drawn.

The selection will automatically be alpha-blended if the selection is animating in or out.

The default selection drawn is dependent on the [selectionHighlightStyle](../nstableview/selectionhighlightstyle-swift.property.md).

## See Also

### Overriding Row View Display Characteristics

- [backgroundColor](backgroundcolor.md): The background color of the row.
- [drawBackgroundInRect:](drawbackground%28in_%29.md): Draws the background of the row in the rectangle.
- [drawDraggingDestinationFeedbackInRect:](drawdraggingdestinationfeedback%28in_%29.md): Draws the row’s dragging destination feedback when the entire row is a drop target.
- [drawSeparatorInRect:](drawseparator%28in_%29.md): Draws the horizontal separator between table rows.
