> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineview(_:rowviewforitem:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineview(_:rowviewforitem:))

# outlineView(\_:rowViewForItem:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

implement this method to return a custom `NSTableRowView` for a particular item.

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, rowViewForItem item: Any) -> NSTableRowView?
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `item`: The item displayed by the returned table row view.

<a id="return-value"></a>

## Return Value

An instance or subclass of `NSTableRowView`. If `nil` is returned, a `NSTableRowView` instance is created and used.

<a id="Discussion"></a>

## Discussion

This method, if implemented, is only invoked for NSView-based outline views.

## See Also

### Working with NSView-Based Outline Views

- [outlineView(\_:didAdd:forRow:)](outlineview%28__didadd_forrow_%29.md): Implemented to know when a new row view is added to the table.
- [outlineView(\_:didRemove:forRow:)](outlineview%28__didremove_forrow_%29.md): Implemented to know when a row view is removed from the table
- [outlineView(\_:viewFor:item:)](outlineview%28__viewfor_item_%29.md): Implemented to return the view used to display the specified item and column.

# outlineView:rowViewForItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

implement this method to return a custom `NSTableRowView` for a particular item.

## Declaration

```objectivec
- (NSTableRowView *) outlineView:(NSOutlineView *) outlineView rowViewForItem:(id) item;
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `item`: The item displayed by the returned table row view.

<a id="return-value"></a>

## Return Value

An instance or subclass of `NSTableRowView`. If `nil` is returned, a `NSTableRowView` instance is created and used.

<a id="Discussion"></a>

## Discussion

This method, if implemented, is only invoked for NSView-based outline views.

## See Also

### Working with NSView-Based Outline Views

- [outlineView:didAddRowView:forRow:](outlineview%28__didadd_forrow_%29.md): Implemented to know when a new row view is added to the table.
- [outlineView:didRemoveRowView:forRow:](outlineview%28__didremove_forrow_%29.md): Implemented to know when a row view is removed from the table
- [outlineView:viewForTableColumn:item:](outlineview%28__viewfor_item_%29.md): Implemented to return the view used to display the specified item and column.
