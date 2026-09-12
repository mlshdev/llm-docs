> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/tableview(_:didclick:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/tableview(_:didclick:))

# tableView(\_:didClick:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the mouse button was clicked in the specified table column, but the column was not dragged.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, didClick tableColumn: NSTableColumn)
```

## Parameters

- `tableView`: The table view that sent the message.
- `tableColumn`: The table column.

## See Also

### Responding to mouse events

- [tableView(\_:mouseDownInHeaderOf:)](tableview%28__mousedowninheaderof_%29.md): Tells the delegate that the mouse button was clicked in the specified table column’s header.
- [tableView(\_:shouldTrackCell:for:row:)](tableview%28__shouldtrackcell_for_row_%29.md): Asks the delegate whether the specified cell should be tracked.

# tableView:didClickTableColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the mouse button was clicked in the specified table column, but the column was not dragged.

## Declaration

```objectivec
- (void) tableView:(NSTableView *) tableView didClickTableColumn:(NSTableColumn *) tableColumn;
```

## Parameters

- `tableView`: The table view that sent the message.
- `tableColumn`: The table column.

## See Also

### Responding to mouse events

- [tableView:mouseDownInHeaderOfTableColumn:](tableview%28__mousedowninheaderof_%29.md): Tells the delegate that the mouse button was clicked in the specified table column’s header.
- [tableView:shouldTrackCell:forTableColumn:row:](tableview%28__shouldtrackcell_for_row_%29.md): Asks the delegate whether the specified cell should be tracked.
