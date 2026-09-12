> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/reloadcolumn(_:)](https://developer.apple.com/documentation/appkit/nsbrowser/reloadcolumn(_:))

# reloadColumn(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Reloads the given column.

## Declaration

```swift
func reloadColumn(_ column: Int)
```

## Parameters

- `column`: The index of the column to reload.

<a id="Discussion"></a>

## Discussion

If after reloading the selected item no longer exists in the column, the column is set to be the last column.

## See Also

### Managing Columns

- [addColumn()](addcolumn%28%29.md): Adds a column to the right of the last column.
- [selectedColumn](selectedcolumn.md): The index of the last column with a selected item.
- [lastColumn](lastcolumn.md): The index of the last column loaded.
- [firstVisibleColumn](firstvisiblecolumn.md): The index of the first visible column.
- [numberOfVisibleColumns](numberofvisiblecolumns.md): The number of visible columns.
- [lastVisibleColumn](lastvisiblecolumn.md): The index of the last visible column.
- [validateVisibleColumns()](validatevisiblecolumns%28%29.md): Validates the browser’s visible columns.
- [isLoaded](isloaded.md): A Boolean that indicates whether column 0 is loaded.
- [loadColumnZero()](loadcolumnzero%28%29.md): Loads column 0; unloads previously loaded columns.

# reloadColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Reloads the given column.

## Declaration

```objectivec
- (void) reloadColumn:(NSInteger) column;
```

## Parameters

- `column`: The index of the column to reload.

<a id="Discussion"></a>

## Discussion

If after reloading the selected item no longer exists in the column, the column is set to be the last column.

## See Also

### Managing Columns

- [addColumn](addcolumn%28%29.md): Adds a column to the right of the last column.
- [selectedColumn](selectedcolumn.md): The index of the last column with a selected item.
- [lastColumn](lastcolumn.md): The index of the last column loaded.
- [firstVisibleColumn](firstvisiblecolumn.md): The index of the first visible column.
- [numberOfVisibleColumns](numberofvisiblecolumns.md): The number of visible columns.
- [lastVisibleColumn](lastvisiblecolumn.md): The index of the last visible column.
- [validateVisibleColumns](validatevisiblecolumns%28%29.md): Validates the browser’s visible columns.
- [loaded](isloaded.md): A Boolean that indicates whether column 0 is loaded.
- [loadColumnZero](loadcolumnzero%28%29.md): Loads column 0; unloads previously loaded columns.
