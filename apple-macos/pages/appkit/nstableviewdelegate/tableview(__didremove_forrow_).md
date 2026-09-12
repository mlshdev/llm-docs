> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/tableview(_:didremove:forrow:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/tableview(_:didremove:forrow:))

# tableView(\_:didRemove:forRow:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate that a row view was removed from the table at the specified row.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, didRemove rowView: NSTableRowView, forRow row: Int)
```

## Parameters

- `tableView`: The table view that sent the message.
- `rowView`: The row view.
- `row`: The index of the row.

<a id="Discussion"></a>

## Discussion

If `row` equals `-1`, the row is being deleted from the table and is no longer a valid row; otherwise `row` is a valid row that is being removed by being moved off screen.

> **Note**

>  This method is only valid for [NSView](../nsview.md)-based table views.

## See Also

### Notification of row views being added or removed

- [tableView(\_:didAdd:forRow:)](tableview%28__didadd_forrow_%29.md): Tells the delegate that a row view was added at the specified row.

# tableView:didRemoveRowView:forRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate that a row view was removed from the table at the specified row.

## Declaration

```objectivec
- (void) tableView:(NSTableView *) tableView didRemoveRowView:(NSTableRowView *) rowView forRow:(NSInteger) row;
```

## Parameters

- `tableView`: The table view that sent the message.
- `rowView`: The row view.
- `row`: The index of the row.

<a id="Discussion"></a>

## Discussion

If `row` equals `-1`, the row is being deleted from the table and is no longer a valid row; otherwise `row` is a valid row that is being removed by being moved off screen.

> **Note**

>  This method is only valid for [NSView](../nsview.md)-based table views.

## See Also

### Notification of row views being added or removed

- [tableView:didAddRowView:forRow:](tableview%28__didadd_forrow_%29.md): Tells the delegate that a row view was added at the specified row.
