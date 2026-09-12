> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/tableview(_:diddrag:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/tableview(_:diddrag:))

# tableView(\_:didDrag:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the specified table column was dragged.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, didDrag tableColumn: NSTableColumn)
```

## Parameters

- `tableView`: The table view that sent the message.
- `tableColumn`: The table column.

<a id="Discussion"></a>

## Discussion

Specifically, this method is sent when the mouse button goes up in `tableView` and `tableColumn` has been dragged during the time the mouse button was down. In macOS 10.5 and later the dragged column is sent to the delegate. (In earlier versions of macOS the table column that’s currently located at the dragged column’s original index is sent.)

## See Also

### Moving and resizing columns

- [tableView(\_:shouldReorderColumn:toColumn:)](tableview%28__shouldreordercolumn_tocolumn_%29.md): Asks the delegate to allow or prohibit the specified column to be dragged to a new location.
- [tableViewColumnDidMove(\_:)](tableviewcolumndidmove%28__%29.md): Tells the delegate that a table column was moved by user action.
- [tableViewColumnDidResize(\_:)](tableviewcolumndidresize%28__%29.md): Tells the delegate that a table column was resized.

# tableView:didDragTableColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the specified table column was dragged.

## Declaration

```objectivec
- (void) tableView:(NSTableView *) tableView didDragTableColumn:(NSTableColumn *) tableColumn;
```

## Parameters

- `tableView`: The table view that sent the message.
- `tableColumn`: The table column.

<a id="Discussion"></a>

## Discussion

Specifically, this method is sent when the mouse button goes up in `tableView` and `tableColumn` has been dragged during the time the mouse button was down. In macOS 10.5 and later the dragged column is sent to the delegate. (In earlier versions of macOS the table column that’s currently located at the dragged column’s original index is sent.)

## See Also

### Moving and resizing columns

- [tableView:shouldReorderColumn:toColumn:](tableview%28__shouldreordercolumn_tocolumn_%29.md): Asks the delegate to allow or prohibit the specified column to be dragged to a new location.
- [tableViewColumnDidMove:](tableviewcolumndidmove%28__%29.md): Tells the delegate that a table column was moved by user action.
- [tableViewColumnDidResize:](tableviewcolumndidresize%28__%29.md): Tells the delegate that a table column was resized.
