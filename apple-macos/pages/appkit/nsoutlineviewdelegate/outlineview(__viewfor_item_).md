> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineview(_:viewfor:item:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineview(_:viewfor:item:))

# outlineView(\_:viewFor:item:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Implemented to return the view used to display the specified item and column.

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, viewFor tableColumn: NSTableColumn?, item: Any) -> NSView?
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `tableColumn`: The table column, or `nil` if the row is a group row.
- `item`: The item displayed by the returned view.

<a id="return-value"></a>

## Return Value

The view to display the specified column and row. Returning `nil` is acceptable, in which case a view is not shown at that location.

<a id="Discussion"></a>

## Discussion

This method is required if you wish to use `NSView` objects instead of `NSCell` objects for the cells within an outline view. Cells and views cannot be mixed within the same outline view.

It is recommended that the implementation of this method first call the `NSTableView` method [makeView(withIdentifier:owner:)](../nstableview/makeview%28withidentifier_owner_%29.md) passing, respectively, the `tableColumn` parameter’s identifier and `self` as the owner to attempt to reuse a view that is no longer visible. The frame of the view returned by this method is not important, and is automatically set by the outline view.

The view’s properties should be properly set up before returning the result.

When using Cocoa bindings, this method is optional if at least one identifier has been associated with the table view at design time. If this method is not implemented, the outline view automatically calls [makeView(withIdentifier:owner:)](../nstableview/makeview%28withidentifier_owner_%29.md) with the `tableColumn` parameter’s identifier and the outline view’s delegate as parameters, to attempt to reuse a previous view or automatically unarchive a prototype associated with the table view.

The [autoresizingMask](../nsview/autoresizingmask-swift.property.md) of the returned view is automatically set to [height](../nsview/autoresizingmask-swift.struct/height.md) to resize properly on row height changes.

## See Also

### Working with NSView-Based Outline Views

- [outlineView(\_:didAdd:forRow:)](outlineview%28__didadd_forrow_%29.md): Implemented to know when a new row view is added to the table.
- [outlineView(\_:didRemove:forRow:)](outlineview%28__didremove_forrow_%29.md): Implemented to know when a row view is removed from the table
- [outlineView(\_:rowViewForItem:)](outlineview%28__rowviewforitem_%29.md): implement this method to return a custom `NSTableRowView` for a particular item.

# outlineView:viewForTableColumn:item: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Implemented to return the view used to display the specified item and column.

## Declaration

```objectivec
- (NSView *) outlineView:(NSOutlineView *) outlineView viewForTableColumn:(NSTableColumn *) tableColumn item:(id) item;
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `tableColumn`: The table column, or `nil` if the row is a group row.
- `item`: The item displayed by the returned view.

<a id="return-value"></a>

## Return Value

The view to display the specified column and row. Returning `nil` is acceptable, in which case a view is not shown at that location.

<a id="Discussion"></a>

## Discussion

This method is required if you wish to use `NSView` objects instead of `NSCell` objects for the cells within an outline view. Cells and views cannot be mixed within the same outline view.

It is recommended that the implementation of this method first call the `NSTableView` method [makeViewWithIdentifier:owner:](../nstableview/makeview%28withidentifier_owner_%29.md) passing, respectively, the `tableColumn` parameter’s identifier and `self` as the owner to attempt to reuse a view that is no longer visible. The frame of the view returned by this method is not important, and is automatically set by the outline view.

The view’s properties should be properly set up before returning the result.

When using Cocoa bindings, this method is optional if at least one identifier has been associated with the table view at design time. If this method is not implemented, the outline view automatically calls [makeViewWithIdentifier:owner:](../nstableview/makeview%28withidentifier_owner_%29.md) with the `tableColumn` parameter’s identifier and the outline view’s delegate as parameters, to attempt to reuse a previous view or automatically unarchive a prototype associated with the table view.

The [autoresizingMask](../nsview/autoresizingmask-swift.property.md) of the returned view is automatically set to [NSViewHeightSizable](../nsview/autoresizingmask-swift.struct/height.md) to resize properly on row height changes.

## See Also

### Working with NSView-Based Outline Views

- [outlineView:didAddRowView:forRow:](outlineview%28__didadd_forrow_%29.md): Implemented to know when a new row view is added to the table.
- [outlineView:didRemoveRowView:forRow:](outlineview%28__didremove_forrow_%29.md): Implemented to know when a row view is removed from the table
- [outlineView:rowViewForItem:](outlineview%28__rowviewforitem_%29.md): implement this method to return a custom `NSTableRowView` for a particular item.
