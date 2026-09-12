> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/removetablecolumn(_:)](https://developer.apple.com/documentation/appkit/nstableview/removetablecolumn(_:))

# removeTableColumn(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the specified column from the table view.

## Declaration

```swift
func removeTableColumn(_ tableColumn: NSTableColumn)
```

## Parameters

- `tableColumn`: The column to remove from the table view.

## See Also

### Related Documentation

- [sizeLastColumnToFit()](sizelastcolumntofit%28%29.md): Resizes the last column so the table view fits exactly within its enclosing clip view.

### Column Management

- [addTableColumn(\_:)](addtablecolumn%28__%29.md): Adds the specified column as the last column of the table view.
- [moveColumn(\_:toColumn:)](movecolumn%28__tocolumn_%29.md): Moves the column and heading at the specified index to the new specified index.
- [tableColumns](tablecolumns.md): An array containing the current table column objects.
- [column(withIdentifier:)](column%28withidentifier_%29.md): Returns the index of the first column in the table view whose identifier is equal to the specified identifier.
- [tableColumn(withIdentifier:)](tablecolumn%28withidentifier_%29.md): Returns the `NSTableColumn` object for the first column whose identifier is equal to the specified object.

# removeTableColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the specified column from the table view.

## Declaration

```objectivec
- (void) removeTableColumn:(NSTableColumn *) tableColumn;
```

## Parameters

- `tableColumn`: The column to remove from the table view.

## See Also

### Related Documentation

- [sizeLastColumnToFit](sizelastcolumntofit%28%29.md): Resizes the last column so the table view fits exactly within its enclosing clip view.

### Column Management

- [addTableColumn:](addtablecolumn%28__%29.md): Adds the specified column as the last column of the table view.
- [moveColumn:toColumn:](movecolumn%28__tocolumn_%29.md): Moves the column and heading at the specified index to the new specified index.
- [tableColumns](tablecolumns.md): An array containing the current table column objects.
- [columnWithIdentifier:](column%28withidentifier_%29.md): Returns the index of the first column in the table view whose identifier is equal to the specified identifier.
- [tableColumnWithIdentifier:](tablecolumn%28withidentifier_%29.md): Returns the `NSTableColumn` object for the first column whose identifier is equal to the specified object.
