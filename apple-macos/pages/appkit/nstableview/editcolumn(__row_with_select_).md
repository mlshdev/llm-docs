> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/editcolumn(_:row:with:select:)](https://developer.apple.com/documentation/appkit/nstableview/editcolumn(_:row:with:select:))

# editColumn(\_:row:with:select:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Edits the cell at the specified column and row using the specified event and selection behavior.

## Declaration

```swift
func editColumn(_ column: Int, row: Int, with event: NSEvent?, select: Bool)
```

## Parameters

- `column`: The index of the column in the [tableColumns](tablecolumns.md) array.
- `row`: The row index.
- `event`: The event.
- `select`: [true](https://developer.apple.com/documentation/swift/true) if the entered contents should be selected, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is invoked automatically in response to user actions; you should rarely need to invoke it directly. `theEvent` is usually the mouse event that triggered editing; it can be `nil` when starting an edit programmatically.

This method scrolls the table view so that the cell is visible and sets up the field editor. If `flag` is [false](https://developer.apple.com/documentation/swift/false), it calls the  [edit(withFrame:in:editor:delegate:event:)](../nscell/edit%28withframe_in_editor_delegate_event_%29.md) method of the field editor’s [NSCell](../nscell.md) object, providing the `NSTableView` as the text delegate. If `flag` is [true](https://developer.apple.com/documentation/swift/true), this method calls the [select(withFrame:in:editor:delegate:start:length:)](../nscell/select%28withframe_in_editor_delegate_start_length_%29.md) method instead.

This method can be overridden to customize drawing for `rowIndex` when using [NSCell](../nscell.md)-based table views.

> **Note**

>  When using [NSView](../nsview.md)-based table views, this method attempts to make the view at the specified `column` and `row` the first responder, which will begin editing if the view supports editing. This method should not be subclassed or overridden for [NSView](../nsview.md)-based table views. Instead, row drawing customization can be done by subclassing [NSTableRowView](../nstablerowview.md).

## See Also

### Editing Cells

- [editedColumn](editedcolumn.md): The index of the column being edited.
- [editedRow](editedrow.md): The index of the row being edited.

# editColumn:row:withEvent:select: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Edits the cell at the specified column and row using the specified event and selection behavior.

## Declaration

```objectivec
- (void) editColumn:(NSInteger) column row:(NSInteger) row withEvent:(NSEvent *) event select:(BOOL) select;
```

## Parameters

- `column`: The index of the column in the [tableColumns](tablecolumns.md) array.
- `row`: The row index.
- `event`: The event.
- `select`: [true](https://developer.apple.com/documentation/swift/true) if the entered contents should be selected, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is invoked automatically in response to user actions; you should rarely need to invoke it directly. `theEvent` is usually the mouse event that triggered editing; it can be `nil` when starting an edit programmatically.

This method scrolls the table view so that the cell is visible and sets up the field editor. If `flag` is [false](https://developer.apple.com/documentation/swift/false), it calls the  [editWithFrame:inView:editor:delegate:event:](../nscell/edit%28withframe_in_editor_delegate_event_%29.md) method of the field editor’s [NSCell](../nscell.md) object, providing the `NSTableView` as the text delegate. If `flag` is [true](https://developer.apple.com/documentation/swift/true), this method calls the [selectWithFrame:inView:editor:delegate:start:length:](../nscell/select%28withframe_in_editor_delegate_start_length_%29.md) method instead.

This method can be overridden to customize drawing for `rowIndex` when using [NSCell](../nscell.md)-based table views.

> **Note**

>  When using [NSView](../nsview.md)-based table views, this method attempts to make the view at the specified `column` and `row` the first responder, which will begin editing if the view supports editing. This method should not be subclassed or overridden for [NSView](../nsview.md)-based table views. Instead, row drawing customization can be done by subclassing [NSTableRowView](../nstablerowview.md).

## See Also

### Editing Cells

- [editedColumn](editedcolumn.md): The index of the column being edited.
- [editedRow](editedrow.md): The index of the row being edited.
