> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineview(_:didremove:forrow:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineview(_:didremove:forrow:))

# outlineView(\_:didRemove:forRow:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Implemented to know when a row view is removed from the table

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, didRemove rowView: NSTableRowView, forRow row: Int)
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `rowView`: The row view that was removed.
- `row`: The number of the row that was removed due to being moved offscreen, or `-1` if the row was removed from the table so it is no longer valid.

<a id="Discussion"></a>

## Discussion

The removed `rowView` may be reused by the table, so any additionally inserted views should be removed at this point.

## See Also

### Working with NSView-Based Outline Views

- [outlineView(\_:didAdd:forRow:)](outlineview%28__didadd_forrow_%29.md): Implemented to know when a new row view is added to the table.
- [outlineView(\_:rowViewForItem:)](outlineview%28__rowviewforitem_%29.md): implement this method to return a custom `NSTableRowView` for a particular item.
- [outlineView(\_:viewFor:item:)](outlineview%28__viewfor_item_%29.md): Implemented to return the view used to display the specified item and column.

# outlineView:didRemoveRowView:forRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Implemented to know when a row view is removed from the table

## Declaration

```objectivec
- (void) outlineView:(NSOutlineView *) outlineView didRemoveRowView:(NSTableRowView *) rowView forRow:(NSInteger) row;
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `rowView`: The row view that was removed.
- `row`: The number of the row that was removed due to being moved offscreen, or `-1` if the row was removed from the table so it is no longer valid.

<a id="Discussion"></a>

## Discussion

The removed `rowView` may be reused by the table, so any additionally inserted views should be removed at this point.

## See Also

### Working with NSView-Based Outline Views

- [outlineView:didAddRowView:forRow:](outlineview%28__didadd_forrow_%29.md): Implemented to know when a new row view is added to the table.
- [outlineView:rowViewForItem:](outlineview%28__rowviewforitem_%29.md): implement this method to return a custom `NSTableRowView` for a particular item.
- [outlineView:viewForTableColumn:item:](outlineview%28__viewfor_item_%29.md): Implemented to return the view used to display the specified item and column.
