> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/editedcolumn](https://developer.apple.com/documentation/appkit/nstableview/editedcolumn)

# editedColumn (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index of the column being edited.

## Declaration

```swift
var editedColumn: Int { get }
```

<a id="return-value"></a>

## Return Value

If sent during [editColumn(\_:row:with:select:)](editcolumn%28__row_with_select_%29.md), the index in the [tableColumns](tablecolumns.md) array of the column being edited; otherwise `–1`.

<a id="Discussion"></a>

## Discussion

This property does not apply to view-based table views. In a view-based table view, the views are responsible for their own editing behavior. For other tables, the value reflects the index of the column being edited or `–1` when there is no editing session in progress or when the currently edited row is a “full width” row.

## See Also

### Editing Cells

- [editColumn(\_:row:with:select:)](editcolumn%28__row_with_select_%29.md): Edits the cell at the specified column and row using the specified event and selection behavior.
- [editedRow](editedrow.md): The index of the row being edited.

# editedColumn (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index of the column being edited.

## Declaration

```objectivec
@property (readonly) NSInteger editedColumn;
```

<a id="return-value"></a>

## Return Value

If sent during [editColumn:row:withEvent:select:](editcolumn%28__row_with_select_%29.md), the index in the [tableColumns](tablecolumns.md) array of the column being edited; otherwise `–1`.

<a id="Discussion"></a>

## Discussion

This property does not apply to view-based table views. In a view-based table view, the views are responsible for their own editing behavior. For other tables, the value reflects the index of the column being edited or `–1` when there is no editing session in progress or when the currently edited row is a “full width” row.

## See Also

### Editing Cells

- [editColumn:row:withEvent:select:](editcolumn%28__row_with_select_%29.md): Edits the cell at the specified column and row using the specified event and selection behavior.
- [editedRow](editedrow.md): The index of the row being edited.
