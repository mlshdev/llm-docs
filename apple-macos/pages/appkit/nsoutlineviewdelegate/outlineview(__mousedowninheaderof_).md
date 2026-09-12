> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineview(_:mousedowninheaderof:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineview(_:mousedowninheaderof:))

# outlineView(\_:mouseDownInHeaderOf:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent to the delegate whenever the mouse button is clicked in `outlineView` while the cursor is in a column header `tableColumn`.

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, mouseDownInHeaderOf tableColumn: NSTableColumn)
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `tableColumn`: The table column.

## See Also

### Working with Table Columns

- [outlineView(\_:didClick:)](outlineview%28__didclick_%29.md): Sent at the time the mouse button subsequently goes up in `outlineView` and `tableColumn` has been “clicked” without having been dragged anywhere.
- [outlineView(\_:didDrag:)](outlineview%28__diddrag_%29.md): Sent at the time the mouse button goes up in `outlineView` and `tableColumn` has been dragged during the time the mouse button was down.

# outlineView:mouseDownInHeaderOfTableColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent to the delegate whenever the mouse button is clicked in `outlineView` while the cursor is in a column header `tableColumn`.

## Declaration

```objectivec
- (void) outlineView:(NSOutlineView *) outlineView mouseDownInHeaderOfTableColumn:(NSTableColumn *) tableColumn;
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `tableColumn`: The table column.

## See Also

### Working with Table Columns

- [outlineView:didClickTableColumn:](outlineview%28__didclick_%29.md): Sent at the time the mouse button subsequently goes up in `outlineView` and `tableColumn` has been “clicked” without having been dragged anywhere.
- [outlineView:didDragTableColumn:](outlineview%28__diddrag_%29.md): Sent at the time the mouse button goes up in `outlineView` and `tableColumn` has been dragged during the time the mouse button was down.
