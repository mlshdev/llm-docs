> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/movecolumn(_:tocolumn:)](https://developer.apple.com/documentation/appkit/nstableview/movecolumn(_:tocolumn:))

# moveColumn(\_:toColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Moves the column and heading at the specified index to the new specified index.

## Declaration

```swift
func moveColumn(_ oldIndex: Int, toColumn newIndex: Int)
```

## Parameters

- `oldIndex`: The current index in the [tableColumns](tablecolumns.md) array of the column to move.
- `newIndex`: The new index in the [tableColumns](tablecolumns.md) array for the moved column.

<a id="Discussion"></a>

## Discussion

This method posts [columnDidMoveNotification](columndidmovenotification.md) to the default notification center.

## See Also

### Column Management

- [addTableColumn(\_:)](addtablecolumn%28__%29.md): Adds the specified column as the last column of the table view.
- [removeTableColumn(\_:)](removetablecolumn%28__%29.md): Removes the specified column from the table view.
- [tableColumns](tablecolumns.md): An array containing the current table column objects.
- [column(withIdentifier:)](column%28withidentifier_%29.md): Returns the index of the first column in the table view whose identifier is equal to the specified identifier.
- [tableColumn(withIdentifier:)](tablecolumn%28withidentifier_%29.md): Returns the `NSTableColumn` object for the first column whose identifier is equal to the specified object.

# moveColumn:toColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Moves the column and heading at the specified index to the new specified index.

## Declaration

```objectivec
- (void) moveColumn:(NSInteger) oldIndex toColumn:(NSInteger) newIndex;
```

## Parameters

- `oldIndex`: The current index in the [tableColumns](tablecolumns.md) array of the column to move.
- `newIndex`: The new index in the [tableColumns](tablecolumns.md) array for the moved column.

<a id="Discussion"></a>

## Discussion

This method posts [NSTableViewColumnDidMoveNotification](columndidmovenotification.md) to the default notification center.

## See Also

### Column Management

- [addTableColumn:](addtablecolumn%28__%29.md): Adds the specified column as the last column of the table view.
- [removeTableColumn:](removetablecolumn%28__%29.md): Removes the specified column from the table view.
- [tableColumns](tablecolumns.md): An array containing the current table column objects.
- [columnWithIdentifier:](column%28withidentifier_%29.md): Returns the index of the first column in the table view whose identifier is equal to the specified identifier.
- [tableColumnWithIdentifier:](tablecolumn%28withidentifier_%29.md): Returns the `NSTableColumn` object for the first column whose identifier is equal to the specified object.
