> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/edititem(at:with:select:)](https://developer.apple.com/documentation/appkit/nsbrowser/edititem(at:with:select:))

# editItem(at:with:select:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Begins editing the item at the specified path.

## Declaration

```swift
func editItem(at indexPath: IndexPath, with event: NSEvent?, select: Bool)
```

## Parameters

- `indexPath`: The path of the item.
- `event`: The event to use when beginning the edit.
- `select`: If [true](https://developer.apple.com/documentation/swift/true), the cells contents will be selected; if [false](https://developer.apple.com/documentation/swift/false), they will not be selected.

## See Also

### Accessing Components

- [loadedCell(atRow:column:)](loadedcell%28atrow_column_%29.md): Loads, if necessary, and returns the cell at the specified row and column location.
- [item(at:)](item%28at_%29.md): Returns the item at the specified index path.
- [item(atRow:inColumn:)](item%28atrow_incolumn_%29.md): Returns the item located at the specified row and column.
- [indexPath(forColumn:)](indexpath%28forcolumn_%29.md): Returns the index path of the item whose children are displayed in the given column.
- [isLeafItem(\_:)](isleafitem%28__%29.md): Returns whether the specified item is a leaf item.
- [parentForItems(inColumn:)](parentforitems%28incolumn_%29.md): Returns the item that contains the children located in the specified column.

# editItemAtIndexPath:withEvent:select: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Begins editing the item at the specified path.

## Declaration

```objectivec
- (void) editItemAtIndexPath:(NSIndexPath *) indexPath withEvent:(NSEvent *) event select:(BOOL) select;
```

## Parameters

- `indexPath`: The path of the item.
- `event`: The event to use when beginning the edit.
- `select`: If [true](https://developer.apple.com/documentation/swift/true), the cells contents will be selected; if [false](https://developer.apple.com/documentation/swift/false), they will not be selected.

## See Also

### Accessing Components

- [loadedCellAtRow:column:](loadedcell%28atrow_column_%29.md): Loads, if necessary, and returns the cell at the specified row and column location.
- [itemAtIndexPath:](item%28at_%29.md): Returns the item at the specified index path.
- [itemAtRow:inColumn:](item%28atrow_incolumn_%29.md): Returns the item located at the specified row and column.
- [indexPathForColumn:](indexpath%28forcolumn_%29.md): Returns the index path of the item whose children are displayed in the given column.
- [isLeafItem:](isleafitem%28__%29.md): Returns whether the specified item is a leaf item.
- [parentForItemsInColumn:](parentforitems%28incolumn_%29.md): Returns the item that contains the children located in the specified column.
