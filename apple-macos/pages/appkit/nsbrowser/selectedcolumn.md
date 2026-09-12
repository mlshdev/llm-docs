> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/selectedcolumn](https://developer.apple.com/documentation/appkit/nsbrowser/selectedcolumn)

# selectedColumn (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index of the last column with a selected item.

## Declaration

```swift
var selectedColumn: Int { get }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is `-1`, there is no column selected.

## See Also

### Related Documentation

- [selectAll(\_:)](selectall%28__%29.md): Selects all cells in the last column of the browser.
- [column(of:)](column%28of_%29.md): Deprecated. Returns the column number in which the given matrix is located.

### Managing Columns

- [addColumn()](addcolumn%28%29.md): Adds a column to the right of the last column.
- [lastColumn](lastcolumn.md): The index of the last column loaded.
- [firstVisibleColumn](firstvisiblecolumn.md): The index of the first visible column.
- [numberOfVisibleColumns](numberofvisiblecolumns.md): The number of visible columns.
- [lastVisibleColumn](lastvisiblecolumn.md): The index of the last visible column.
- [validateVisibleColumns()](validatevisiblecolumns%28%29.md): Validates the browser’s visible columns.
- [isLoaded](isloaded.md): A Boolean that indicates whether column 0 is loaded.
- [loadColumnZero()](loadcolumnzero%28%29.md): Loads column 0; unloads previously loaded columns.
- [reloadColumn(\_:)](reloadcolumn%28__%29.md): Reloads the given column.

# selectedColumn (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index of the last column with a selected item.

## Declaration

```objectivec
@property (readonly) NSInteger selectedColumn;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is `-1`, there is no column selected.

## See Also

### Related Documentation

- [selectAll:](selectall%28__%29.md): Selects all cells in the last column of the browser.
- [columnOfMatrix:](column%28of_%29.md): Deprecated. Returns the column number in which the given matrix is located.

### Managing Columns

- [addColumn](addcolumn%28%29.md): Adds a column to the right of the last column.
- [lastColumn](lastcolumn.md): The index of the last column loaded.
- [firstVisibleColumn](firstvisiblecolumn.md): The index of the first visible column.
- [numberOfVisibleColumns](numberofvisiblecolumns.md): The number of visible columns.
- [lastVisibleColumn](lastvisiblecolumn.md): The index of the last visible column.
- [validateVisibleColumns](validatevisiblecolumns%28%29.md): Validates the browser’s visible columns.
- [loaded](isloaded.md): A Boolean that indicates whether column 0 is loaded.
- [loadColumnZero](loadcolumnzero%28%29.md): Loads column 0; unloads previously loaded columns.
- [reloadColumn:](reloadcolumn%28__%29.md): Reloads the given column.
