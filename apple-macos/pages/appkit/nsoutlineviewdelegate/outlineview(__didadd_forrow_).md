> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineview(_:didadd:forrow:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineview(_:didadd:forrow:))

# outlineView(\_:didAdd:forRow:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Implemented to know when a new row view is added to the table.

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, didAdd rowView: NSTableRowView, forRow row: Int)
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `rowView`: The new row view.
- `row`: The row to which the view was added.

<a id="Discussion"></a>

## Discussion

This delegate method is for NSView-based outline views. At this point, you can choose to add in extra views or modify any properties on `rowView`.

## See Also

### Working with NSView-Based Outline Views

- [outlineView(\_:didRemove:forRow:)](outlineview%28__didremove_forrow_%29.md): Implemented to know when a row view is removed from the table
- [outlineView(\_:rowViewForItem:)](outlineview%28__rowviewforitem_%29.md): implement this method to return a custom `NSTableRowView` for a particular item.
- [outlineView(\_:viewFor:item:)](outlineview%28__viewfor_item_%29.md): Implemented to return the view used to display the specified item and column.

# outlineView:didAddRowView:forRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Implemented to know when a new row view is added to the table.

## Declaration

```objectivec
- (void) outlineView:(NSOutlineView *) outlineView didAddRowView:(NSTableRowView *) rowView forRow:(NSInteger) row;
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `rowView`: The new row view.
- `row`: The row to which the view was added.

<a id="Discussion"></a>

## Discussion

This delegate method is for NSView-based outline views. At this point, you can choose to add in extra views or modify any properties on `rowView`.

## See Also

### Working with NSView-Based Outline Views

- [outlineView:didRemoveRowView:forRow:](outlineview%28__didremove_forrow_%29.md): Implemented to know when a row view is removed from the table
- [outlineView:rowViewForItem:](outlineview%28__rowviewforitem_%29.md): implement this method to return a custom `NSTableRowView` for a particular item.
- [outlineView:viewForTableColumn:item:](outlineview%28__viewfor_item_%29.md): Implemented to return the view used to display the specified item and column.
