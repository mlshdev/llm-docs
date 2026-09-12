> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/firstvisiblecolumn](https://developer.apple.com/documentation/appkit/nsbrowser/firstvisiblecolumn)

# firstVisibleColumn (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index of the first visible column.

## Declaration

```swift
var firstVisibleColumn: Int { get }
```

## See Also

### Managing Columns

- [addColumn()](addcolumn%28%29.md): Adds a column to the right of the last column.
- [selectedColumn](selectedcolumn.md): The index of the last column with a selected item.
- [lastColumn](lastcolumn.md): The index of the last column loaded.
- [numberOfVisibleColumns](numberofvisiblecolumns.md): The number of visible columns.
- [lastVisibleColumn](lastvisiblecolumn.md): The index of the last visible column.
- [validateVisibleColumns()](validatevisiblecolumns%28%29.md): Validates the browser’s visible columns.
- [isLoaded](isloaded.md): A Boolean that indicates whether column 0 is loaded.
- [loadColumnZero()](loadcolumnzero%28%29.md): Loads column 0; unloads previously loaded columns.
- [reloadColumn(\_:)](reloadcolumn%28__%29.md): Reloads the given column.

# firstVisibleColumn (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index of the first visible column.

## Declaration

```objectivec
@property (readonly) NSInteger firstVisibleColumn;
```

## See Also

### Managing Columns

- [addColumn](addcolumn%28%29.md): Adds a column to the right of the last column.
- [selectedColumn](selectedcolumn.md): The index of the last column with a selected item.
- [lastColumn](lastcolumn.md): The index of the last column loaded.
- [numberOfVisibleColumns](numberofvisiblecolumns.md): The number of visible columns.
- [lastVisibleColumn](lastvisiblecolumn.md): The index of the last visible column.
- [validateVisibleColumns](validatevisiblecolumns%28%29.md): Validates the browser’s visible columns.
- [loaded](isloaded.md): A Boolean that indicates whether column 0 is loaded.
- [loadColumnZero](loadcolumnzero%28%29.md): Loads column 0; unloads previously loaded columns.
- [reloadColumn:](reloadcolumn%28__%29.md): Reloads the given column.
