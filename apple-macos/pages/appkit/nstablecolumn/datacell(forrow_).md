> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablecolumn/datacell(forrow:)](https://developer.apple.com/documentation/appkit/nstablecolumn/datacell(forrow:))

# dataCell(forRow:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the cell object used to display values in the specified row of the table column.

> Cell-based table views are deprecated; use view-based table views instead. See [view(atColumn:row:makeIfNecessary:)](../nstableview/view%28atcolumn_row_makeifnecessary_%29.md).

## Declaration

```swift
func dataCell(forRow row: Int) -> Any
```

## Parameters

- `row`: The table column row.

<a id="return-value"></a>

## Return Value

The data cell object.

<a id="Discussion"></a>

## Discussion

Returns the [NSCell](../nscell.md) object used by the table view to draw values for the receiver. The table view calls this method when drawing the row, so you shouldn’t need to call it directly. By default, this method just accesses [dataCell](datacell.md).

To enable per-row customization of the cell used by the table column, you can override this method or use the `NSTableViewDelegate` method [tableView(\_:dataCellFor:row:)](../nstableviewdelegate/tableview%28__datacellfor_row_%29.md). In both cases, the cell that’s returned should properly implement [copy(with:)](https://developer.apple.com/documentation/foundation/nscopying/copy%28with:%29), because the table view may copy the cell during certain operations.

Subclasses should be prepared for this method to be called with `row` equal to –1 in cases where no actual row is involved but the table view needs to get some generic cell information.

> **Note**

>  This method is only valid for cell-based table views.

## See Also

### Deprecated Methods

- [dataCell](datacell.md): Deprecated. The cell prototype used by the table column to draw individual cells.

# dataCellForRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the cell object used to display values in the specified row of the table column.

> Cell-based table views are deprecated; use view-based table views instead. See [viewAtColumn:row:makeIfNecessary:](../nstableview/view%28atcolumn_row_makeifnecessary_%29.md).

## Declaration

```objectivec
- (id) dataCellForRow:(NSInteger) row;
```

## Parameters

- `row`: The table column row.

<a id="return-value"></a>

## Return Value

The data cell object.

<a id="Discussion"></a>

## Discussion

Returns the [NSCell](../nscell.md) object used by the table view to draw values for the receiver. The table view calls this method when drawing the row, so you shouldn’t need to call it directly. By default, this method just accesses [dataCell](datacell.md).

To enable per-row customization of the cell used by the table column, you can override this method or use the `NSTableViewDelegate` method [tableView:dataCellForTableColumn:row:](../nstableviewdelegate/tableview%28__datacellfor_row_%29.md). In both cases, the cell that’s returned should properly implement [copyWithZone:](https://developer.apple.com/documentation/foundation/nscopying/copy%28with:%29), because the table view may copy the cell during certain operations.

Subclasses should be prepared for this method to be called with `row` equal to –1 in cases where no actual row is involved but the table view needs to get some generic cell information.

> **Note**

>  This method is only valid for cell-based table views.

## See Also

### Deprecated Methods

- [isResizable](isresizable.md): Deprecated. Returns whether the column is resizable.
- [setResizable:](setresizable_.md): Deprecated. Sets whether the user can resize the receiver in its NSTableView.
- [dataCell](datacell.md): Deprecated. The cell prototype used by the table column to draw individual cells.
