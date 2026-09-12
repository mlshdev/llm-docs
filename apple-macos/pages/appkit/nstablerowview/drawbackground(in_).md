> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablerowview/drawbackground(in:)](https://developer.apple.com/documentation/appkit/nstablerowview/drawbackground(in:))

# drawBackground(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Draws the background of the row in the rectangle.

## Declaration

```swift
func drawBackground(in dirtyRect: NSRect)
```

## Parameters

- `dirtyRect`: The rectangle that requires drawing.

<a id="Discussion"></a>

## Discussion

Overriding this method allows an application to draw a custom background for a table row view.

By default, this method draws the background color or group row style as appropriate for the row. This method also draws the “below look” for a drop target if [isTargetForDropOperation](istargetfordropoperation.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Overriding Row View Display Characteristics

- [backgroundColor](backgroundcolor.md): The background color of the row.
- [drawDraggingDestinationFeedback(in:)](drawdraggingdestinationfeedback%28in_%29.md): Draws the row’s dragging destination feedback when the entire row is a drop target.
- [drawSelection(in:)](drawselection%28in_%29.md): Draws the selected row.
- [drawSeparator(in:)](drawseparator%28in_%29.md): Draws the horizontal separator between table rows.

# drawBackgroundInRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Draws the background of the row in the rectangle.

## Declaration

```objectivec
- (void) drawBackgroundInRect:(NSRect) dirtyRect;
```

## Parameters

- `dirtyRect`: The rectangle that requires drawing.

<a id="Discussion"></a>

## Discussion

Overriding this method allows an application to draw a custom background for a table row view.

By default, this method draws the background color or group row style as appropriate for the row. This method also draws the “below look” for a drop target if [targetForDropOperation](istargetfordropoperation.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Overriding Row View Display Characteristics

- [backgroundColor](backgroundcolor.md): The background color of the row.
- [drawDraggingDestinationFeedbackInRect:](drawdraggingdestinationfeedback%28in_%29.md): Draws the row’s dragging destination feedback when the entire row is a drop target.
- [drawSelectionInRect:](drawselection%28in_%29.md): Draws the selected row.
- [drawSeparatorInRect:](drawseparator%28in_%29.md): Draws the horizontal separator between table rows.
