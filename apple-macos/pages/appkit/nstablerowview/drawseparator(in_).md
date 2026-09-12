> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablerowview/drawseparator(in:)](https://developer.apple.com/documentation/appkit/nstablerowview/drawseparator(in:))

# drawSeparator(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Draws the horizontal separator between table rows.

## Declaration

```swift
func drawSeparator(in dirtyRect: NSRect)
```

## Parameters

- `dirtyRect`: The rectangle that requires drawing.

<a id="Discussion"></a>

## Discussion

By default, the separator is only drawn if the enclosing table’s [gridStyleMask](../nstableview/gridstylemask.md) is set to include a horizontal separator.

The separator should be drawn at the bottom of the row view, indicating a separation from this row and the next.

## See Also

### Overriding Row View Display Characteristics

- [backgroundColor](backgroundcolor.md): The background color of the row.
- [drawBackground(in:)](drawbackground%28in_%29.md): Draws the background of the row in the rectangle.
- [drawDraggingDestinationFeedback(in:)](drawdraggingdestinationfeedback%28in_%29.md): Draws the row’s dragging destination feedback when the entire row is a drop target.
- [drawSelection(in:)](drawselection%28in_%29.md): Draws the selected row.

# drawSeparatorInRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Draws the horizontal separator between table rows.

## Declaration

```objectivec
- (void) drawSeparatorInRect:(NSRect) dirtyRect;
```

## Parameters

- `dirtyRect`: The rectangle that requires drawing.

<a id="Discussion"></a>

## Discussion

By default, the separator is only drawn if the enclosing table’s [gridStyleMask](../nstableview/gridstylemask.md) is set to include a horizontal separator.

The separator should be drawn at the bottom of the row view, indicating a separation from this row and the next.

## See Also

### Overriding Row View Display Characteristics

- [backgroundColor](backgroundcolor.md): The background color of the row.
- [drawBackgroundInRect:](drawbackground%28in_%29.md): Draws the background of the row in the rectangle.
- [drawDraggingDestinationFeedbackInRect:](drawdraggingdestinationfeedback%28in_%29.md): Draws the row’s dragging destination feedback when the entire row is a drop target.
- [drawSelectionInRect:](drawselection%28in_%29.md): Draws the selected row.
