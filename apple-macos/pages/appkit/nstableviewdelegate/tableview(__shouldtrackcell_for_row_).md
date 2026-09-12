> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/tableview(_:shouldtrackcell:for:row:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/tableview(_:shouldtrackcell:for:row:))

# tableView(\_:shouldTrackCell:for:row:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Asks the delegate whether the specified cell should be tracked.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, shouldTrackCell cell: NSCell, for tableColumn: NSTableColumn?, row: Int) -> Bool
```

## Parameters

- `tableView`: The table view that sent the message.
- `cell`: The cell to track.
- `tableColumn`: The table column.
- `row`: A row in `tableView`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the cell should be tracked, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

In general, only selectable or selected cells can be tracked. If you implement this method, cells that aren’t selectable or selected can be tracked; similarly, cells that are selectable or selected can be set as untracked.

For example, this allows you to have an [NSButtonCell](../nsbuttoncell.md) object in a table that doesn’t change the selection, but can still be clicked on and tracked.

> **Note**

>  This method is only valid for [NSCell](../nscell.md)-based table views.

## See Also

### Responding to mouse events

- [tableView(\_:didClick:)](tableview%28__didclick_%29.md): Tells the delegate that the mouse button was clicked in the specified table column, but the column was not dragged.
- [tableView(\_:mouseDownInHeaderOf:)](tableview%28__mousedowninheaderof_%29.md): Tells the delegate that the mouse button was clicked in the specified table column’s header.

# tableView:shouldTrackCell:forTableColumn:row: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Asks the delegate whether the specified cell should be tracked.

## Declaration

```objectivec
- (BOOL) tableView:(NSTableView *) tableView shouldTrackCell:(NSCell *) cell forTableColumn:(NSTableColumn *) tableColumn row:(NSInteger) row;
```

## Parameters

- `tableView`: The table view that sent the message.
- `cell`: The cell to track.
- `tableColumn`: The table column.
- `row`: A row in `tableView`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the cell should be tracked, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

In general, only selectable or selected cells can be tracked. If you implement this method, cells that aren’t selectable or selected can be tracked; similarly, cells that are selectable or selected can be set as untracked.

For example, this allows you to have an [NSButtonCell](../nsbuttoncell.md) object in a table that doesn’t change the selection, but can still be clicked on and tracked.

> **Note**

>  This method is only valid for [NSCell](../nscell.md)-based table views.

## See Also

### Responding to mouse events

- [tableView:didClickTableColumn:](tableview%28__didclick_%29.md): Tells the delegate that the mouse button was clicked in the specified table column, but the column was not dragged.
- [tableView:mouseDownInHeaderOfTableColumn:](tableview%28__mousedowninheaderof_%29.md): Tells the delegate that the mouse button was clicked in the specified table column’s header.
