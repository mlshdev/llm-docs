> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/item(at:)](https://developer.apple.com/documentation/appkit/nsbrowser/item(at:))

# item(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the item at the specified index path.

## Declaration

```swift
func item(at indexPath: IndexPath) -> Any?
```

## Parameters

- `indexPath`: The index path of the item to return.

<a id="return-value"></a>

## Return Value

The item.

<a id="Discussion"></a>

## Discussion

This method can only be used if the delegate implements the item data source methods. The specified index path must be displayable in the browser.

## See Also

### Accessing Components

- [loadedCell(atRow:column:)](loadedcell%28atrow_column_%29.md): Loads, if necessary, and returns the cell at the specified row and column location.
- [editItem(at:with:select:)](edititem%28at_with_select_%29.md): Begins editing the item at the specified path.
- [item(atRow:inColumn:)](item%28atrow_incolumn_%29.md): Returns the item located at the specified row and column.
- [indexPath(forColumn:)](indexpath%28forcolumn_%29.md): Returns the index path of the item whose children are displayed in the given column.
- [isLeafItem(\_:)](isleafitem%28__%29.md): Returns whether the specified item is a leaf item.
- [parentForItems(inColumn:)](parentforitems%28incolumn_%29.md): Returns the item that contains the children located in the specified column.

# itemAtIndexPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the item at the specified index path.

## Declaration

```objectivec
- (id) itemAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `indexPath`: The index path of the item to return.

<a id="return-value"></a>

## Return Value

The item.

<a id="Discussion"></a>

## Discussion

This method can only be used if the delegate implements the item data source methods. The specified index path must be displayable in the browser.

## See Also

### Accessing Components

- [loadedCellAtRow:column:](loadedcell%28atrow_column_%29.md): Loads, if necessary, and returns the cell at the specified row and column location.
- [editItemAtIndexPath:withEvent:select:](edititem%28at_with_select_%29.md): Begins editing the item at the specified path.
- [itemAtRow:inColumn:](item%28atrow_incolumn_%29.md): Returns the item located at the specified row and column.
- [indexPathForColumn:](indexpath%28forcolumn_%29.md): Returns the index path of the item whose children are displayed in the given column.
- [isLeafItem:](isleafitem%28__%29.md): Returns whether the specified item is a leaf item.
- [parentForItemsInColumn:](parentforitems%28incolumn_%29.md): Returns the item that contains the children located in the specified column.
