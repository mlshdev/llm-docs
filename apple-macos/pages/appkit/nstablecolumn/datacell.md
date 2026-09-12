> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablecolumn/datacell](https://developer.apple.com/documentation/appkit/nstablecolumn/datacell)

# dataCell (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cell prototype used by the table column to draw individual cells.

> Cell-based table views are deprecated; use view-based table views instead. See [tableView(\_:viewFor:row:)](../nstableviewdelegate/tableview%28__viewfor_row_%29.md) and [view(atColumn:row:makeIfNecessary:)](../nstableview/view%28atcolumn_row_makeifnecessary_%29.md).

## Declaration

```swift
var dataCell: Any { get set }
```

<a id="Discussion"></a>

## Discussion

You can use this property to control the font, alignment, and other text attributes for the table column contents.

You can also assign a cell that displays things other than text—for example, you can display images by setting the cell to [NSImageCell](../nsimagecell.md).

> **Note**

>  This property is only valid for cell-based table views.

## See Also

### Deprecated Methods

- [dataCell(forRow:)](datacell%28forrow_%29.md): Deprecated. Returns the cell object used to display values in the specified row of the table column.

# dataCell (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cell prototype used by the table column to draw individual cells.

> Cell-based table views are deprecated; use view-based table views instead. See [tableView:viewForTableColumn:row:](../nstableviewdelegate/tableview%28__viewfor_row_%29.md) and [viewAtColumn:row:makeIfNecessary:](../nstableview/view%28atcolumn_row_makeifnecessary_%29.md).

## Declaration

```objectivec
@property (strong) id dataCell;
```

<a id="Discussion"></a>

## Discussion

You can use this property to control the font, alignment, and other text attributes for the table column contents.

You can also assign a cell that displays things other than text—for example, you can display images by setting the cell to [NSImageCell](../nsimagecell.md).

> **Note**

>  This property is only valid for cell-based table views.

## See Also

### Deprecated Methods

- [isResizable](isresizable.md): Deprecated. Returns whether the column is resizable.
- [setResizable:](setresizable_.md): Deprecated. Sets whether the user can resize the receiver in its NSTableView.
- [dataCellForRow:](datacell%28forrow_%29.md): Deprecated. Returns the cell object used to display values in the specified row of the table column.
