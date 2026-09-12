> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/indexpath(forcolumn:)](https://developer.apple.com/documentation/appkit/nsbrowser/indexpath(forcolumn:))

# indexPath(forColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the index path of the item whose children are displayed in the given column.

## Declaration

```swift
func indexPath(forColumn column: Int) -> IndexPath
```

## Parameters

- `column`: The column to find the index path for.

<a id="return-value"></a>

## Return Value

The index path of the column.

<a id="Discussion"></a>

## Discussion

This method can only be used if the delegate implements the item data source methods.

## See Also

### Accessing Components

- [loadedCell(atRow:column:)](loadedcell%28atrow_column_%29.md): Loads, if necessary, and returns the cell at the specified row and column location.
- [editItem(at:with:select:)](edititem%28at_with_select_%29.md): Begins editing the item at the specified path.
- [item(at:)](item%28at_%29.md): Returns the item at the specified index path.
- [item(atRow:inColumn:)](item%28atrow_incolumn_%29.md): Returns the item located at the specified row and column.
- [isLeafItem(\_:)](isleafitem%28__%29.md): Returns whether the specified item is a leaf item.
- [parentForItems(inColumn:)](parentforitems%28incolumn_%29.md): Returns the item that contains the children located in the specified column.

# indexPathForColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the index path of the item whose children are displayed in the given column.

## Declaration

```objectivec
- (NSIndexPath *) indexPathForColumn:(NSInteger) column;
```

## Parameters

- `column`: The column to find the index path for.

<a id="return-value"></a>

## Return Value

The index path of the column.

<a id="Discussion"></a>

## Discussion

This method can only be used if the delegate implements the item data source methods.

## See Also

### Accessing Components

- [loadedCellAtRow:column:](loadedcell%28atrow_column_%29.md): Loads, if necessary, and returns the cell at the specified row and column location.
- [editItemAtIndexPath:withEvent:select:](edititem%28at_with_select_%29.md): Begins editing the item at the specified path.
- [itemAtIndexPath:](item%28at_%29.md): Returns the item at the specified index path.
- [itemAtRow:inColumn:](item%28atrow_incolumn_%29.md): Returns the item located at the specified row and column.
- [isLeafItem:](isleafitem%28__%29.md): Returns whether the specified item is a leaf item.
- [parentForItemsInColumn:](parentforitems%28incolumn_%29.md): Returns the item that contains the children located in the specified column.
