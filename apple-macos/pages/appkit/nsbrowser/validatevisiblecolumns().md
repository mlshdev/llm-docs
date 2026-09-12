> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/validatevisiblecolumns()](https://developer.apple.com/documentation/appkit/nsbrowser/validatevisiblecolumns())

# validateVisibleColumns() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Validates the browser’s visible columns.

## Declaration

```swift
func validateVisibleColumns()
```

<a id="Discussion"></a>

## Discussion

This method invokes the delegate method [browser(\_:isColumnValid:)](../nsbrowserdelegate/browser%28__iscolumnvalid_%29.md)

## See Also

### Managing Columns

- [addColumn()](addcolumn%28%29.md): Adds a column to the right of the last column.
- [selectedColumn](selectedcolumn.md): The index of the last column with a selected item.
- [lastColumn](lastcolumn.md): The index of the last column loaded.
- [firstVisibleColumn](firstvisiblecolumn.md): The index of the first visible column.
- [numberOfVisibleColumns](numberofvisiblecolumns.md): The number of visible columns.
- [lastVisibleColumn](lastvisiblecolumn.md): The index of the last visible column.
- [isLoaded](isloaded.md): A Boolean that indicates whether column 0 is loaded.
- [loadColumnZero()](loadcolumnzero%28%29.md): Loads column 0; unloads previously loaded columns.
- [reloadColumn(\_:)](reloadcolumn%28__%29.md): Reloads the given column.

# validateVisibleColumns (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Validates the browser’s visible columns.

## Declaration

```objectivec
- (void) validateVisibleColumns;
```

<a id="Discussion"></a>

## Discussion

This method invokes the delegate method [browser:isColumnValid:](../nsbrowserdelegate/browser%28__iscolumnvalid_%29.md)

## See Also

### Managing Columns

- [addColumn](addcolumn%28%29.md): Adds a column to the right of the last column.
- [selectedColumn](selectedcolumn.md): The index of the last column with a selected item.
- [lastColumn](lastcolumn.md): The index of the last column loaded.
- [firstVisibleColumn](firstvisiblecolumn.md): The index of the first visible column.
- [numberOfVisibleColumns](numberofvisiblecolumns.md): The number of visible columns.
- [lastVisibleColumn](lastvisiblecolumn.md): The index of the last visible column.
- [loaded](isloaded.md): A Boolean that indicates whether column 0 is loaded.
- [loadColumnZero](loadcolumnzero%28%29.md): Loads column 0; unloads previously loaded columns.
- [reloadColumn:](reloadcolumn%28__%29.md): Reloads the given column.
