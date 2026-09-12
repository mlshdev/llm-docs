> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/reloaddata(forrowindexes:columnindexes:)](https://developer.apple.com/documentation/appkit/nstableview/reloaddata(forrowindexes:columnindexes:))

# reloadData(forRowIndexes:columnIndexes:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Reloads the data for only the specified rows and columns.

## Declaration

```swift
func reloadData(forRowIndexes rowIndexes: IndexSet, columnIndexes: IndexSet)
```

## Parameters

- `rowIndexes`: The indexes of the rows to update.
- `columnIndexes`: The indexes of the columns to update.

<a id="Discussion"></a>

## Discussion

For cells that are visible, the appropriate [dataSource](datasource.md) and [delegate](delegate.md) methods are called and the cells are redrawn.

For tables that support variable row heights, the row height is not re-queried from the delegate; it is your responsibility to invoke [noteHeightOfRows(withIndexesChanged:)](noteheightofrows%28withindexeschanged_%29.md) if a row height change is required.

> **Note**

>  For [NSView](../nsview.md)-based table views, this method drops the view-cells in the table row, but not the [NSTableRowView](../nstablerowview.md) instances.

## See Also

### Managing the Table’s Data

- [dataSource](datasource.md): The object that provides the data displayed by the table view.
- [usesStaticContents](usesstaticcontents.md): A Boolean value indicating whether the table uses static data.
- [reloadData()](reloaddata%28%29.md): Marks the table view as needing redisplay, so it will reload the data for visible cells and draw the new values.

# reloadDataForRowIndexes:columnIndexes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Reloads the data for only the specified rows and columns.

## Declaration

```objectivec
- (void) reloadDataForRowIndexes:(NSIndexSet *) rowIndexes columnIndexes:(NSIndexSet *) columnIndexes;
```

## Parameters

- `rowIndexes`: The indexes of the rows to update.
- `columnIndexes`: The indexes of the columns to update.

<a id="Discussion"></a>

## Discussion

For cells that are visible, the appropriate [dataSource](datasource.md) and [delegate](delegate.md) methods are called and the cells are redrawn.

For tables that support variable row heights, the row height is not re-queried from the delegate; it is your responsibility to invoke [noteHeightOfRowsWithIndexesChanged:](noteheightofrows%28withindexeschanged_%29.md) if a row height change is required.

> **Note**

>  For [NSView](../nsview.md)-based table views, this method drops the view-cells in the table row, but not the [NSTableRowView](../nstablerowview.md) instances.

## See Also

### Managing the Table’s Data

- [dataSource](datasource.md): The object that provides the data displayed by the table view.
- [usesStaticContents](usesstaticcontents.md): A Boolean value indicating whether the table uses static data.
- [reloadData](reloaddata%28%29.md): Marks the table view as needing redisplay, so it will reload the data for visible cells and draw the new values.
