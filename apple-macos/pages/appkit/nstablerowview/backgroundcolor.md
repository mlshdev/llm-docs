> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablerowview/backgroundcolor](https://developer.apple.com/documentation/appkit/nstablerowview/backgroundcolor)

# backgroundColor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The background color of the row.

## Declaration

```swift
@NSCopying var backgroundColor: NSColor { get set }
```

<a id="Discussion"></a>

## Discussion

The property defaults to the table view’s [backgroundColor](../nstableview/backgroundcolor.md), unless [usesAlternatingRowBackgroundColors](../nstableview/usesalternatingrowbackgroundcolors.md) is set to [true](https://developer.apple.com/documentation/swift/true). In that case, the colors alternate, and are automatically updated as required by insertions and deletions.

The value of the background color can be customized in the `NSTableViewDelegate` method `tableView:didAddRowView:forRow:`. The property is animatable.

## See Also

### Overriding Row View Display Characteristics

- [drawBackground(in:)](drawbackground%28in_%29.md): Draws the background of the row in the rectangle.
- [drawDraggingDestinationFeedback(in:)](drawdraggingdestinationfeedback%28in_%29.md): Draws the row’s dragging destination feedback when the entire row is a drop target.
- [drawSelection(in:)](drawselection%28in_%29.md): Draws the selected row.
- [drawSeparator(in:)](drawseparator%28in_%29.md): Draws the horizontal separator between table rows.

# backgroundColor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The background color of the row.

## Declaration

```objectivec
@property (copy) NSColor * backgroundColor;
```

<a id="Discussion"></a>

## Discussion

The property defaults to the table view’s [backgroundColor](../nstableview/backgroundcolor.md), unless [usesAlternatingRowBackgroundColors](../nstableview/usesalternatingrowbackgroundcolors.md) is set to [true](https://developer.apple.com/documentation/swift/true). In that case, the colors alternate, and are automatically updated as required by insertions and deletions.

The value of the background color can be customized in the `NSTableViewDelegate` method `tableView:didAddRowView:forRow:`. The property is animatable.

## See Also

### Overriding Row View Display Characteristics

- [drawBackgroundInRect:](drawbackground%28in_%29.md): Draws the background of the row in the rectangle.
- [drawDraggingDestinationFeedbackInRect:](drawdraggingdestinationfeedback%28in_%29.md): Draws the row’s dragging destination feedback when the entire row is a drop target.
- [drawSelectionInRect:](drawselection%28in_%29.md): Draws the selected row.
- [drawSeparatorInRect:](drawseparator%28in_%29.md): Draws the horizontal separator between table rows.
