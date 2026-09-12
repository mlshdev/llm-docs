> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/tableview(_:didadd:forrow:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/tableview(_:didadd:forrow:))

# tableView(\_:didAdd:forRow:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate that a row view was added at the specified row.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, didAdd rowView: NSTableRowView, forRow row: Int)
```

## Parameters

- `tableView`: The table view that sent the message.
- `rowView`: The row view.
- `row`: The index of the row.

<a id="Discussion"></a>

## Discussion

At this point, the delegate can add extra views, or modify the properties of `rowView`.

> **Note**

>  This method is only valid for [NSView](../nsview.md)-based table views.

## See Also

### Notification of row views being added or removed

- [tableView(\_:didRemove:forRow:)](tableview%28__didremove_forrow_%29.md): Tells the delegate that a row view was removed from the table at the specified row.

# tableView:didAddRowView:forRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate that a row view was added at the specified row.

## Declaration

```objectivec
- (void) tableView:(NSTableView *) tableView didAddRowView:(NSTableRowView *) rowView forRow:(NSInteger) row;
```

## Parameters

- `tableView`: The table view that sent the message.
- `rowView`: The row view.
- `row`: The index of the row.

<a id="Discussion"></a>

## Discussion

At this point, the delegate can add extra views, or modify the properties of `rowView`.

> **Note**

>  This method is only valid for [NSView](../nsview.md)-based table views.

## See Also

### Notification of row views being added or removed

- [tableView:didRemoveRowView:forRow:](tableview%28__didremove_forrow_%29.md): Tells the delegate that a row view was removed from the table at the specified row.
