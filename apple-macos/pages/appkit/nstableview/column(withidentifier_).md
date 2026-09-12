> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/column(withidentifier:)](https://developer.apple.com/documentation/appkit/nstableview/column(withidentifier:))

# column(withIdentifier:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the first column in the table view whose identifier is equal to the specified identifier.

## Declaration

```swift
func column(withIdentifier identifier: NSUserInterfaceItemIdentifier) -> Int
```

## Parameters

- `identifier`: A column identifier.

<a id="return-value"></a>

## Return Value

The index in the [tableColumns](tablecolumns.md) array of the first column in the table view whose identifier is equal to `anObject` (when compared using `isEqual:`), or `–1` if no columns are found with the specified identifier.

## See Also

### Column Management

- [addTableColumn(\_:)](addtablecolumn%28__%29.md): Adds the specified column as the last column of the table view.
- [removeTableColumn(\_:)](removetablecolumn%28__%29.md): Removes the specified column from the table view.
- [moveColumn(\_:toColumn:)](movecolumn%28__tocolumn_%29.md): Moves the column and heading at the specified index to the new specified index.
- [tableColumns](tablecolumns.md): An array containing the current table column objects.
- [tableColumn(withIdentifier:)](tablecolumn%28withidentifier_%29.md): Returns the `NSTableColumn` object for the first column whose identifier is equal to the specified object.

# columnWithIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the first column in the table view whose identifier is equal to the specified identifier.

## Declaration

```objectivec
- (NSInteger) columnWithIdentifier:(NSUserInterfaceItemIdentifier) identifier;
```

## Parameters

- `identifier`: A column identifier.

<a id="return-value"></a>

## Return Value

The index in the [tableColumns](tablecolumns.md) array of the first column in the table view whose identifier is equal to `anObject` (when compared using `isEqual:`), or `–1` if no columns are found with the specified identifier.

## See Also

### Column Management

- [addTableColumn:](addtablecolumn%28__%29.md): Adds the specified column as the last column of the table view.
- [removeTableColumn:](removetablecolumn%28__%29.md): Removes the specified column from the table view.
- [moveColumn:toColumn:](movecolumn%28__tocolumn_%29.md): Moves the column and heading at the specified index to the new specified index.
- [tableColumns](tablecolumns.md): An array containing the current table column objects.
- [tableColumnWithIdentifier:](tablecolumn%28withidentifier_%29.md): Returns the `NSTableColumn` object for the first column whose identifier is equal to the specified object.
