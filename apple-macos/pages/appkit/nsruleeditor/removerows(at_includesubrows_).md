> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/removerows(at:includesubrows:)](https://developer.apple.com/documentation/appkit/nsruleeditor/removerows(at:includesubrows:))

# removeRows(at:includeSubrows:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the rows at given indexes.

## Declaration

```swift
func removeRows(at rowIndexes: IndexSet, includeSubrows: Bool)
```

## Parameters

- `rowIndexes`: Indexes of one or more rows in the receiver.

  > **Important**

  >  Raises an `NSRangeException` if any index in `rowIndexes` is less than `0` or greater than or equal to the number of rows.
- `includeSubrows`: If [true](https://developer.apple.com/documentation/swift/true), then sub-rows of deleted rows are also deleted; if [false](https://developer.apple.com/documentation/swift/false), then each sub-row is adopted by its first non-deleted ancestor, or becomes a root row.

## See Also

### Manipulating Rows

- [addRow(\_:)](addrow%28__%29.md): Adds a row to the receiver.
- [insertRow(at:with:asSubrowOfRow:animate:)](insertrow%28at_with_assubrowofrow_animate_%29.md): Adds a new row of a given type at a given location.
- [removeRow(at:)](removerow%28at_%29.md): Removes the row at a given index.

# removeRowsAtIndexes:includeSubrows: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the rows at given indexes.

## Declaration

```objectivec
- (void) removeRowsAtIndexes:(NSIndexSet *) rowIndexes includeSubrows:(BOOL) includeSubrows;
```

## Parameters

- `rowIndexes`: Indexes of one or more rows in the receiver.

  > **Important**

  >  Raises an `NSRangeException` if any index in `rowIndexes` is less than `0` or greater than or equal to the number of rows.
- `includeSubrows`: If [true](https://developer.apple.com/documentation/swift/true), then sub-rows of deleted rows are also deleted; if [false](https://developer.apple.com/documentation/swift/false), then each sub-row is adopted by its first non-deleted ancestor, or becomes a root row.

## See Also

### Manipulating Rows

- [addRow:](addrow%28__%29.md): Adds a row to the receiver.
- [insertRowAtIndex:withType:asSubrowOfRow:animate:](insertrow%28at_with_assubrowofrow_animate_%29.md): Adds a new row of a given type at a given location.
- [removeRowAtIndex:](removerow%28at_%29.md): Removes the row at a given index.
