> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/numberofvisiblecolumns](https://developer.apple.com/documentation/appkit/nsbrowser/numberofvisiblecolumns)

# numberOfVisibleColumns (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of visible columns.

## Declaration

```swift
var numberOfVisibleColumns: Int { get }
```

## See Also

### Managing Columns

- [addColumn()](addcolumn%28%29.md): Adds a column to the right of the last column.
- [selectedColumn](selectedcolumn.md): The index of the last column with a selected item.
- [lastColumn](lastcolumn.md): The index of the last column loaded.
- [firstVisibleColumn](firstvisiblecolumn.md): The index of the first visible column.
- [lastVisibleColumn](lastvisiblecolumn.md): The index of the last visible column.
- [validateVisibleColumns()](validatevisiblecolumns%28%29.md): Validates the browser’s visible columns.
- [isLoaded](isloaded.md): A Boolean that indicates whether column 0 is loaded.
- [loadColumnZero()](loadcolumnzero%28%29.md): Loads column 0; unloads previously loaded columns.
- [reloadColumn(\_:)](reloadcolumn%28__%29.md): Reloads the given column.

# numberOfVisibleColumns (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of visible columns.

## Declaration

```objectivec
@property (readonly) NSInteger numberOfVisibleColumns;
```

## See Also

### Managing Columns

- [addColumn](addcolumn%28%29.md): Adds a column to the right of the last column.
- [selectedColumn](selectedcolumn.md): The index of the last column with a selected item.
- [lastColumn](lastcolumn.md): The index of the last column loaded.
- [firstVisibleColumn](firstvisiblecolumn.md): The index of the first visible column.
- [lastVisibleColumn](lastvisiblecolumn.md): The index of the last visible column.
- [validateVisibleColumns](validatevisiblecolumns%28%29.md): Validates the browser’s visible columns.
- [loaded](isloaded.md): A Boolean that indicates whether column 0 is loaded.
- [loadColumnZero](loadcolumnzero%28%29.md): Loads column 0; unloads previously loaded columns.
- [reloadColumn:](reloadcolumn%28__%29.md): Reloads the given column.
