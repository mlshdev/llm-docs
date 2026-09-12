> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/tableview(_:rowviewforrow:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/tableview(_:rowviewforrow:))

# tableView(\_:rowViewForRow:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Asks the delegate for a view to display the specified row.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, rowViewForRow row: Int) -> NSTableRowView?
```

## Parameters

- `tableView`: The table view that sent the message.
- `row`: The row index.

<a id="return-value"></a>

## Return Value

An instance or subclass of [NSTableRowView](../nstablerowview.md). If `nil` is returned, an [NSTableRowView](../nstablerowview.md) instance will be created and used.

<a id="Discussion"></a>

## Discussion

The delegate can implement this method to return a custom [NSTableRowView](../nstablerowview.md) for `row`.

The reuse queue can be used in the same way as documented in [tableView(\_:viewFor:row:)](tableview%28__viewfor_row_%29.md). The returned view will have attributes properly set to it before it’s added to the `tableView`.

> **Note**

>  This method is only valid for [NSView](../nsview.md)-based table views.

## See Also

### Providing views for rows and columns

- [tableView(\_:viewFor:row:)](tableview%28__viewfor_row_%29.md): Asks the delegate for a view to display the specified row and column.

# tableView:rowViewForRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Asks the delegate for a view to display the specified row.

## Declaration

```objectivec
- (NSTableRowView *) tableView:(NSTableView *) tableView rowViewForRow:(NSInteger) row;
```

## Parameters

- `tableView`: The table view that sent the message.
- `row`: The row index.

<a id="return-value"></a>

## Return Value

An instance or subclass of [NSTableRowView](../nstablerowview.md). If `nil` is returned, an [NSTableRowView](../nstablerowview.md) instance will be created and used.

<a id="Discussion"></a>

## Discussion

The delegate can implement this method to return a custom [NSTableRowView](../nstablerowview.md) for `row`.

The reuse queue can be used in the same way as documented in [tableView:viewForTableColumn:row:](tableview%28__viewfor_row_%29.md). The returned view will have attributes properly set to it before it’s added to the `tableView`.

> **Note**

>  This method is only valid for [NSView](../nsview.md)-based table views.

## See Also

### Providing views for rows and columns

- [tableView:viewForTableColumn:row:](tableview%28__viewfor_row_%29.md): Asks the delegate for a view to display the specified row and column.
