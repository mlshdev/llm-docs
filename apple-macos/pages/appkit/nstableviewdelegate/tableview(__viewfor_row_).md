> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/tableview(_:viewfor:row:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/tableview(_:viewfor:row:))

# tableView(\_:viewFor:row:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Asks the delegate for a view to display the specified row and column.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, viewFor tableColumn: NSTableColumn?, row: Int) -> NSView?
```

## Parameters

- `tableView`: The table view that sent the message.
- `tableColumn`: The table column. (If the row is a group row, `tableColumn` is `nil`.)
- `row`: The row index.

<a id="return-value"></a>

## Return Value

The view to display the specified column and row. If you return `nil`, a view will not be shown at that location.

<a id="Discussion"></a>

## Discussion

This method is required if you want to use [NSView](../nsview.md) objects instead of [NSCell](../nscell.md) objects for the cells within a table view. Cells and views can’t be mixed within the same table view.

It’s recommended that the implementation of this method first call the [NSTableView](../nstableview.md) method [makeView(withIdentifier:owner:)](../nstableview/makeview%28withidentifier_owner_%29.md) passing, respectively, the `tableColumn` parameter’s identifier and `self` as the owner to attempt to reuse a view that is no longer visible or automatically unarchive an associated prototype view for that identifier. The `frame` of the view returned by this method is not important, and it will be automatically set by the table.

The view’s properties should be properly set up before returning the result.

When using Cocoa bindings, this method is optional if at least one identifier has been associated with the table view at design time. (Note that a view’s identifier must be the same as the identifier of its column. An easy way to achieve this is to use the Automatic identifier setting in Interface Builder.) If this method isn’t implemented, the table will automatically call the [NSTableView](../nstableview.md) method [makeView(withIdentifier:owner:)](../nstableview/makeview%28withidentifier_owner_%29.md) with the `tableColumn` parameter’s identifier and the table view’s `delegate` as parameters, to attempt to reuse a previous view, or automatically unarchive a prototype associated with the table view. If this method is implemented, you can set up properties that aren’t using bindings.

The autoresizing mask of the returned view will automatically be set to [height](../nsview/autoresizingmask-swift.struct/height.md) to resize properly on row height changes.

## See Also

### Related Documentation

- [Table View](../table-view.md): Display custom data in rows and columns.
- [Drag and Drop](../drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.

### Providing views for rows and columns

- [tableView(\_:rowViewForRow:)](tableview%28__rowviewforrow_%29.md): Asks the delegate for a view to display the specified row.

# tableView:viewForTableColumn:row: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Asks the delegate for a view to display the specified row and column.

## Declaration

```objectivec
- (NSView *) tableView:(NSTableView *) tableView viewForTableColumn:(NSTableColumn *) tableColumn row:(NSInteger) row;
```

## Parameters

- `tableView`: The table view that sent the message.
- `tableColumn`: The table column. (If the row is a group row, `tableColumn` is `nil`.)
- `row`: The row index.

<a id="return-value"></a>

## Return Value

The view to display the specified column and row. If you return `nil`, a view will not be shown at that location.

<a id="Discussion"></a>

## Discussion

This method is required if you want to use [NSView](../nsview.md) objects instead of [NSCell](../nscell.md) objects for the cells within a table view. Cells and views can’t be mixed within the same table view.

It’s recommended that the implementation of this method first call the [NSTableView](../nstableview.md) method [makeViewWithIdentifier:owner:](../nstableview/makeview%28withidentifier_owner_%29.md) passing, respectively, the `tableColumn` parameter’s identifier and `self` as the owner to attempt to reuse a view that is no longer visible or automatically unarchive an associated prototype view for that identifier. The `frame` of the view returned by this method is not important, and it will be automatically set by the table.

The view’s properties should be properly set up before returning the result.

When using Cocoa bindings, this method is optional if at least one identifier has been associated with the table view at design time. (Note that a view’s identifier must be the same as the identifier of its column. An easy way to achieve this is to use the Automatic identifier setting in Interface Builder.) If this method isn’t implemented, the table will automatically call the [NSTableView](../nstableview.md) method [makeViewWithIdentifier:owner:](../nstableview/makeview%28withidentifier_owner_%29.md) with the `tableColumn` parameter’s identifier and the table view’s `delegate` as parameters, to attempt to reuse a previous view, or automatically unarchive a prototype associated with the table view. If this method is implemented, you can set up properties that aren’t using bindings.

The autoresizing mask of the returned view will automatically be set to [NSViewHeightSizable](../nsview/autoresizingmask-swift.struct/height.md) to resize properly on row height changes.

## See Also

### Related Documentation

- [Table View](../table-view.md): Display custom data in rows and columns.
- [Drag and Drop](../drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.

### Providing views for rows and columns

- [tableView:rowViewForRow:](tableview%28__rowviewforrow_%29.md): Asks the delegate for a view to display the specified row.
