> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/tablecolumns](https://developer.apple.com/documentation/appkit/nstableview/tablecolumns)

# tableColumns (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array containing the current table column objects.

## Declaration

```swift
var tableColumns: [NSTableColumn] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSTableColumn](../nstablecolumn.md) objects corresponding to the columns in the table. This array contains all columns, including those that are currently hidden.

## See Also

### Column Management

- [addTableColumn(\_:)](addtablecolumn%28__%29.md): Adds the specified column as the last column of the table view.
- [removeTableColumn(\_:)](removetablecolumn%28__%29.md): Removes the specified column from the table view.
- [moveColumn(\_:toColumn:)](movecolumn%28__tocolumn_%29.md): Moves the column and heading at the specified index to the new specified index.
- [column(withIdentifier:)](column%28withidentifier_%29.md): Returns the index of the first column in the table view whose identifier is equal to the specified identifier.
- [tableColumn(withIdentifier:)](tablecolumn%28withidentifier_%29.md): Returns the `NSTableColumn` object for the first column whose identifier is equal to the specified object.

# tableColumns (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array containing the current table column objects.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSTableColumn *> * tableColumns;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSTableColumn](../nstablecolumn.md) objects corresponding to the columns in the table. This array contains all columns, including those that are currently hidden.

## See Also

### Column Management

- [addTableColumn:](addtablecolumn%28__%29.md): Adds the specified column as the last column of the table view.
- [removeTableColumn:](removetablecolumn%28__%29.md): Removes the specified column from the table view.
- [moveColumn:toColumn:](movecolumn%28__tocolumn_%29.md): Moves the column and heading at the specified index to the new specified index.
- [columnWithIdentifier:](column%28withidentifier_%29.md): Returns the index of the first column in the table view whose identifier is equal to the specified identifier.
- [tableColumnWithIdentifier:](tablecolumn%28withidentifier_%29.md): Returns the `NSTableColumn` object for the first column whose identifier is equal to the specified object.
