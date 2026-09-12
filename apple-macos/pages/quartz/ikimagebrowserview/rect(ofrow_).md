> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview/rect(ofrow:)](https://developer.apple.com/documentation/quartz/ikimagebrowserview/rect(ofrow:))

# rect(ofRow:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the rectangle containing the specified row.

## Declaration

```swift
func rect(ofRow rowIndex: Int) -> NSRect
```

## Parameters

- `rowIndex`: The row index.

<a id="return-value"></a>

## Return Value

A rectangle containing the column. Specified in the view’s coordinate system.

## See Also

### Getting Columns and Rows Information

- [numberOfColumns()](numberofcolumns%28%29.md): Returns the current number of columns.
- [numberOfRows()](numberofrows%28%29.md): Returns the current number of rows.
- [rect(ofColumn:)](rect%28ofcolumn_%29.md): Returns the rectangle containing the specified column.
- [columnIndexes(in:)](columnindexes%28in_%29.md): Returns the column indexes in the specified rectangle.
- [rowIndexes(in:)](rowindexes%28in_%29.md): Returns the row indexes in the specified rectangle.

# rectOfRow: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the rectangle containing the specified row.

## Declaration

```objectivec
- (NSRect) rectOfRow:(NSUInteger) rowIndex;
```

## Parameters

- `rowIndex`: The row index.

<a id="return-value"></a>

## Return Value

A rectangle containing the column. Specified in the view’s coordinate system.

## See Also

### Getting Columns and Rows Information

- [numberOfColumns](numberofcolumns%28%29.md): Returns the current number of columns.
- [numberOfRows](numberofrows%28%29.md): Returns the current number of rows.
- [rectOfColumn:](rect%28ofcolumn_%29.md): Returns the rectangle containing the specified column.
- [columnIndexesInRect:](columnindexes%28in_%29.md): Returns the column indexes in the specified rectangle.
- [rowIndexesInRect:](rowindexes%28in_%29.md): Returns the row indexes in the specified rectangle.
