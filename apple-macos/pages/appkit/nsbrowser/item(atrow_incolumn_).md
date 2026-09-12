> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/item(atrow:incolumn:)](https://developer.apple.com/documentation/appkit/nsbrowser/item(atrow:incolumn:))

# item(atRow:inColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the item located at the specified row and column.

## Declaration

```swift
func item(atRow row: Int, inColumn column: Int) -> Any?
```

## Parameters

- `row`: The row of the item.
- `column`: The column of the item.

<a id="return-value"></a>

## Return Value

The item.

## See Also

### Accessing Components

- [loadedCell(atRow:column:)](loadedcell%28atrow_column_%29.md): Loads, if necessary, and returns the cell at the specified row and column location.
- [editItem(at:with:select:)](edititem%28at_with_select_%29.md): Begins editing the item at the specified path.
- [item(at:)](item%28at_%29.md): Returns the item at the specified index path.
- [indexPath(forColumn:)](indexpath%28forcolumn_%29.md): Returns the index path of the item whose children are displayed in the given column.
- [isLeafItem(\_:)](isleafitem%28__%29.md): Returns whether the specified item is a leaf item.
- [parentForItems(inColumn:)](parentforitems%28incolumn_%29.md): Returns the item that contains the children located in the specified column.

# itemAtRow:inColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the item located at the specified row and column.

## Declaration

```objectivec
- (id) itemAtRow:(NSInteger) row inColumn:(NSInteger) column;
```

## Parameters

- `row`: The row of the item.
- `column`: The column of the item.

<a id="return-value"></a>

## Return Value

The item.

## See Also

### Accessing Components

- [loadedCellAtRow:column:](loadedcell%28atrow_column_%29.md): Loads, if necessary, and returns the cell at the specified row and column location.
- [editItemAtIndexPath:withEvent:select:](edititem%28at_with_select_%29.md): Begins editing the item at the specified path.
- [itemAtIndexPath:](item%28at_%29.md): Returns the item at the specified index path.
- [indexPathForColumn:](indexpath%28forcolumn_%29.md): Returns the index path of the item whose children are displayed in the given column.
- [isLeafItem:](isleafitem%28__%29.md): Returns whether the specified item is a leaf item.
- [parentForItemsInColumn:](parentforitems%28incolumn_%29.md): Returns the item that contains the children located in the specified column.
