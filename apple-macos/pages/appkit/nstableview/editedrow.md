> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/editedrow](https://developer.apple.com/documentation/appkit/nstableview/editedrow)

# editedRow (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index of the row being edited.

## Declaration

```swift
var editedRow: Int { get }
```

<a id="Discussion"></a>

## Discussion

This property does not apply to view-based table views. In a view-based table view, the views are responsible for their own editing behavior. For other tables, the value reflects the index of the row being edited or `–1` when there is no editing session in progress.

## See Also

### Editing Cells

- [editColumn(\_:row:with:select:)](editcolumn%28__row_with_select_%29.md): Edits the cell at the specified column and row using the specified event and selection behavior.
- [editedColumn](editedcolumn.md): The index of the column being edited.

# editedRow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index of the row being edited.

## Declaration

```objectivec
@property (readonly) NSInteger editedRow;
```

<a id="Discussion"></a>

## Discussion

This property does not apply to view-based table views. In a view-based table view, the views are responsible for their own editing behavior. For other tables, the value reflects the index of the row being edited or `–1` when there is no editing session in progress.

## See Also

### Editing Cells

- [editColumn:row:withEvent:select:](editcolumn%28__row_with_select_%29.md): Edits the cell at the specified column and row using the specified event and selection behavior.
- [editedColumn](editedcolumn.md): The index of the column being edited.
