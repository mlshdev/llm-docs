> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/loadedcell(atrow:column:)](https://developer.apple.com/documentation/appkit/nsbrowser/loadedcell(atrow:column:))

# loadedCell(atRow:column:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Loads, if necessary, and returns the cell at the specified row and column location.

## Declaration

```swift
func loadedCell(atRow row: Int, column col: Int) -> Any?
```

## Parameters

- `row`: The row index of the cell to return.
- `col`: The column index of the cell to return.

## See Also

### Related Documentation

- [selectRow(\_:inColumn:)](selectrow%28__incolumn_%29.md): Selects the cell at the specified row and column index.
- [selectedCell(inColumn:)](selectedcell%28incolumn_%29.md): Returns the last (lowest) cell selected in the given column.

### Accessing Components

- [editItem(at:with:select:)](edititem%28at_with_select_%29.md): Begins editing the item at the specified path.
- [item(at:)](item%28at_%29.md): Returns the item at the specified index path.
- [item(atRow:inColumn:)](item%28atrow_incolumn_%29.md): Returns the item located at the specified row and column.
- [indexPath(forColumn:)](indexpath%28forcolumn_%29.md): Returns the index path of the item whose children are displayed in the given column.
- [isLeafItem(\_:)](isleafitem%28__%29.md): Returns whether the specified item is a leaf item.
- [parentForItems(inColumn:)](parentforitems%28incolumn_%29.md): Returns the item that contains the children located in the specified column.

# loadedCellAtRow:column: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Loads, if necessary, and returns the cell at the specified row and column location.

## Declaration

```objectivec
- (id) loadedCellAtRow:(NSInteger) row column:(NSInteger) col;
```

## Parameters

- `row`: The row index of the cell to return.
- `col`: The column index of the cell to return.

## See Also

### Related Documentation

- [selectRow:inColumn:](selectrow%28__incolumn_%29.md): Selects the cell at the specified row and column index.
- [selectedCellInColumn:](selectedcell%28incolumn_%29.md): Returns the last (lowest) cell selected in the given column.

### Accessing Components

- [editItemAtIndexPath:withEvent:select:](edititem%28at_with_select_%29.md): Begins editing the item at the specified path.
- [itemAtIndexPath:](item%28at_%29.md): Returns the item at the specified index path.
- [itemAtRow:inColumn:](item%28atrow_incolumn_%29.md): Returns the item located at the specified row and column.
- [indexPathForColumn:](indexpath%28forcolumn_%29.md): Returns the index path of the item whose children are displayed in the given column.
- [isLeafItem:](isleafitem%28__%29.md): Returns whether the specified item is a leaf item.
- [parentForItemsInColumn:](parentforitems%28incolumn_%29.md): Returns the item that contains the children located in the specified column.
