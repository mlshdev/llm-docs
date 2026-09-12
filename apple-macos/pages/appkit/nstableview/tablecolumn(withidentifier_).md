> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/tablecolumn(withidentifier:)](https://developer.apple.com/documentation/appkit/nstableview/tablecolumn(withidentifier:))

# tableColumn(withIdentifier:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the `NSTableColumn` object for the first column whose identifier is equal to the specified object.

## Declaration

```swift
func tableColumn(withIdentifier identifier: NSUserInterfaceItemIdentifier) -> NSTableColumn?
```

## Parameters

- `identifier`: A column identifier.

<a id="return-value"></a>

## Return Value

The `NSTableColumn` object for the first column whose identifier is equal to `anObject` (when compared using `isEqual:`), or `nil` if no columns are found with the specified identifier.

## See Also

### Column Management

- [addTableColumn(\_:)](addtablecolumn%28__%29.md): Adds the specified column as the last column of the table view.
- [removeTableColumn(\_:)](removetablecolumn%28__%29.md): Removes the specified column from the table view.
- [moveColumn(\_:toColumn:)](movecolumn%28__tocolumn_%29.md): Moves the column and heading at the specified index to the new specified index.
- [tableColumns](tablecolumns.md): An array containing the current table column objects.
- [column(withIdentifier:)](column%28withidentifier_%29.md): Returns the index of the first column in the table view whose identifier is equal to the specified identifier.

# tableColumnWithIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the `NSTableColumn` object for the first column whose identifier is equal to the specified object.

## Declaration

```objectivec
- (NSTableColumn *) tableColumnWithIdentifier:(NSUserInterfaceItemIdentifier) identifier;
```

## Parameters

- `identifier`: A column identifier.

<a id="return-value"></a>

## Return Value

The `NSTableColumn` object for the first column whose identifier is equal to `anObject` (when compared using `isEqual:`), or `nil` if no columns are found with the specified identifier.

## See Also

### Column Management

- [addTableColumn:](addtablecolumn%28__%29.md): Adds the specified column as the last column of the table view.
- [removeTableColumn:](removetablecolumn%28__%29.md): Removes the specified column from the table view.
- [moveColumn:toColumn:](movecolumn%28__tocolumn_%29.md): Moves the column and heading at the specified index to the new specified index.
- [tableColumns](tablecolumns.md): An array containing the current table column objects.
- [columnWithIdentifier:](column%28withidentifier_%29.md): Returns the index of the first column in the table view whose identifier is equal to the specified identifier.
