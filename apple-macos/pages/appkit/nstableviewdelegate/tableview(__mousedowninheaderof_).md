> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/tableview(_:mousedowninheaderof:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/tableview(_:mousedowninheaderof:))

# tableView(\_:mouseDownInHeaderOf:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the mouse button was clicked in the specified table column’s header.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, mouseDownInHeaderOf tableColumn: NSTableColumn)
```

## Parameters

- `tableView`: The table view that sent the message.
- `tableColumn`: The table column.

## See Also

### Responding to mouse events

- [tableView(\_:didClick:)](tableview%28__didclick_%29.md): Tells the delegate that the mouse button was clicked in the specified table column, but the column was not dragged.
- [tableView(\_:shouldTrackCell:for:row:)](tableview%28__shouldtrackcell_for_row_%29.md): Asks the delegate whether the specified cell should be tracked.

# tableView:mouseDownInHeaderOfTableColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the mouse button was clicked in the specified table column’s header.

## Declaration

```objectivec
- (void) tableView:(NSTableView *) tableView mouseDownInHeaderOfTableColumn:(NSTableColumn *) tableColumn;
```

## Parameters

- `tableView`: The table view that sent the message.
- `tableColumn`: The table column.

## See Also

### Responding to mouse events

- [tableView:didClickTableColumn:](tableview%28__didclick_%29.md): Tells the delegate that the mouse button was clicked in the specified table column, but the column was not dragged.
- [tableView:shouldTrackCell:forTableColumn:row:](tableview%28__shouldtrackcell_for_row_%29.md): Asks the delegate whether the specified cell should be tracked.
