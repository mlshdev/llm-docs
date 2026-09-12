> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/removerow(at:)](https://developer.apple.com/documentation/appkit/nsruleeditor/removerow(at:))

# removeRow(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the row at a given index.

## Declaration

```swift
func removeRow(at rowIndex: Int)
```

## Parameters

- `rowIndex`: The index of a row in the receiver.

  > **Important**

  >  Raises an `NSRangeException` if `rowIndex` is less than `0` or greater than or equal to the number of rows.

<a id="Discussion"></a>

## Discussion

Any subrows of the deleted row are adopted by the parent of the deleted row, or are made root rows.

## See Also

### Manipulating Rows

- [addRow(\_:)](addrow%28__%29.md): Adds a row to the receiver.
- [insertRow(at:with:asSubrowOfRow:animate:)](insertrow%28at_with_assubrowofrow_animate_%29.md): Adds a new row of a given type at a given location.
- [removeRows(at:includeSubrows:)](removerows%28at_includesubrows_%29.md): Removes the rows at given indexes.

# removeRowAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the row at a given index.

## Declaration

```objectivec
- (void) removeRowAtIndex:(NSInteger) rowIndex;
```

## Parameters

- `rowIndex`: The index of a row in the receiver.

  > **Important**

  >  Raises an `NSRangeException` if `rowIndex` is less than `0` or greater than or equal to the number of rows.

<a id="Discussion"></a>

## Discussion

Any subrows of the deleted row are adopted by the parent of the deleted row, or are made root rows.

## See Also

### Manipulating Rows

- [addRow:](addrow%28__%29.md): Adds a row to the receiver.
- [insertRowAtIndex:withType:asSubrowOfRow:animate:](insertrow%28at_with_assubrowofrow_animate_%29.md): Adds a new row of a given type at a given location.
- [removeRowsAtIndexes:includeSubrows:](removerows%28at_includesubrows_%29.md): Removes the rows at given indexes.
