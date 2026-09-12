> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablerowview/drawdraggingdestinationfeedback(in:)](https://developer.apple.com/documentation/appkit/nstablerowview/drawdraggingdestinationfeedback(in:))

# drawDraggingDestinationFeedback(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Draws the row’s dragging destination feedback when the entire row is a drop target.

## Declaration

```swift
func drawDraggingDestinationFeedback(in dirtyRect: NSRect)
```

## Parameters

- `dirtyRect`: The rectangle that requires drawing.

<a id="Discussion"></a>

## Discussion

Overriding this method allows an application to draw custom dragging destination feedback when the entire row is a drop target.

This method only is called if [isTargetForDropOperation](istargetfordropoperation.md) is [true](https://developer.apple.com/documentation/swift/true), and is only drawn based on the properties set, such as the group row style.

## See Also

### Overriding Row View Display Characteristics

- [backgroundColor](backgroundcolor.md): The background color of the row.
- [drawBackground(in:)](drawbackground%28in_%29.md): Draws the background of the row in the rectangle.
- [drawSelection(in:)](drawselection%28in_%29.md): Draws the selected row.
- [drawSeparator(in:)](drawseparator%28in_%29.md): Draws the horizontal separator between table rows.

# drawDraggingDestinationFeedbackInRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Draws the row’s dragging destination feedback when the entire row is a drop target.

## Declaration

```objectivec
- (void) drawDraggingDestinationFeedbackInRect:(NSRect) dirtyRect;
```

## Parameters

- `dirtyRect`: The rectangle that requires drawing.

<a id="Discussion"></a>

## Discussion

Overriding this method allows an application to draw custom dragging destination feedback when the entire row is a drop target.

This method only is called if [targetForDropOperation](istargetfordropoperation.md) is [true](https://developer.apple.com/documentation/swift/true), and is only drawn based on the properties set, such as the group row style.

## See Also

### Overriding Row View Display Characteristics

- [backgroundColor](backgroundcolor.md): The background color of the row.
- [drawBackgroundInRect:](drawbackground%28in_%29.md): Draws the background of the row in the rectangle.
- [drawSelectionInRect:](drawselection%28in_%29.md): Draws the selected row.
- [drawSeparatorInRect:](drawseparator%28in_%29.md): Draws the horizontal separator between table rows.
