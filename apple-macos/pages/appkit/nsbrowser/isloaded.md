> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/isloaded](https://developer.apple.com/documentation/appkit/nsbrowser/isloaded)

# isLoaded (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether column 0 is loaded.

## Declaration

```swift
var isLoaded: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), column 0 is loaded.

## See Also

### Managing Columns

- [addColumn()](addcolumn%28%29.md): Adds a column to the right of the last column.
- [selectedColumn](selectedcolumn.md): The index of the last column with a selected item.
- [lastColumn](lastcolumn.md): The index of the last column loaded.
- [firstVisibleColumn](firstvisiblecolumn.md): The index of the first visible column.
- [numberOfVisibleColumns](numberofvisiblecolumns.md): The number of visible columns.
- [lastVisibleColumn](lastvisiblecolumn.md): The index of the last visible column.
- [validateVisibleColumns()](validatevisiblecolumns%28%29.md): Validates the browser’s visible columns.
- [loadColumnZero()](loadcolumnzero%28%29.md): Loads column 0; unloads previously loaded columns.
- [reloadColumn(\_:)](reloadcolumn%28__%29.md): Reloads the given column.

# loaded (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether column 0 is loaded.

## Declaration

```objectivec
@property (readonly, getter=isLoaded) BOOL loaded;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), column 0 is loaded.

## See Also

### Managing Columns

- [addColumn](addcolumn%28%29.md): Adds a column to the right of the last column.
- [selectedColumn](selectedcolumn.md): The index of the last column with a selected item.
- [lastColumn](lastcolumn.md): The index of the last column loaded.
- [firstVisibleColumn](firstvisiblecolumn.md): The index of the first visible column.
- [numberOfVisibleColumns](numberofvisiblecolumns.md): The number of visible columns.
- [lastVisibleColumn](lastvisiblecolumn.md): The index of the last visible column.
- [validateVisibleColumns](validatevisiblecolumns%28%29.md): Validates the browser’s visible columns.
- [loadColumnZero](loadcolumnzero%28%29.md): Loads column 0; unloads previously loaded columns.
- [reloadColumn:](reloadcolumn%28__%29.md): Reloads the given column.
