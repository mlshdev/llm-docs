> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/isleafitem(_:)](https://developer.apple.com/documentation/appkit/nsbrowser/isleafitem(_:))

# isLeafItem(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns whether the specified item is a leaf item.

## Declaration

```swift
func isLeafItem(_ item: Any?) -> Bool
```

## Parameters

- `item`: The item to be checked.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item is a leaf item; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method may return [false](https://developer.apple.com/documentation/swift/false) if the item has never been displayed in the browser or accessed via [item(at:)](item%28at_%29.md). Overriding this method has no effect. It may be used only if the browser’s delegate implements the item data source methods.

## See Also

### Accessing Components

- [loadedCell(atRow:column:)](loadedcell%28atrow_column_%29.md): Loads, if necessary, and returns the cell at the specified row and column location.
- [editItem(at:with:select:)](edititem%28at_with_select_%29.md): Begins editing the item at the specified path.
- [item(at:)](item%28at_%29.md): Returns the item at the specified index path.
- [item(atRow:inColumn:)](item%28atrow_incolumn_%29.md): Returns the item located at the specified row and column.
- [indexPath(forColumn:)](indexpath%28forcolumn_%29.md): Returns the index path of the item whose children are displayed in the given column.
- [parentForItems(inColumn:)](parentforitems%28incolumn_%29.md): Returns the item that contains the children located in the specified column.

# isLeafItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns whether the specified item is a leaf item.

## Declaration

```objectivec
- (BOOL) isLeafItem:(id) item;
```

## Parameters

- `item`: The item to be checked.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item is a leaf item; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method may return [false](https://developer.apple.com/documentation/swift/false) if the item has never been displayed in the browser or accessed via [itemAtIndexPath:](item%28at_%29.md). Overriding this method has no effect. It may be used only if the browser’s delegate implements the item data source methods.

## See Also

### Accessing Components

- [loadedCellAtRow:column:](loadedcell%28atrow_column_%29.md): Loads, if necessary, and returns the cell at the specified row and column location.
- [editItemAtIndexPath:withEvent:select:](edititem%28at_with_select_%29.md): Begins editing the item at the specified path.
- [itemAtIndexPath:](item%28at_%29.md): Returns the item at the specified index path.
- [itemAtRow:inColumn:](item%28atrow_incolumn_%29.md): Returns the item located at the specified row and column.
- [indexPathForColumn:](indexpath%28forcolumn_%29.md): Returns the index path of the item whose children are displayed in the given column.
- [parentForItemsInColumn:](parentforitems%28incolumn_%29.md): Returns the item that contains the children located in the specified column.
