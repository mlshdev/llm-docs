> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview/rect(ofcolumn:)](https://developer.apple.com/documentation/quartz/ikimagebrowserview/rect(ofcolumn:))

# rect(ofColumn:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the rectangle containing the specified column.

## Declaration

```swift
func rect(ofColumn columnIndex: Int) -> NSRect
```

## Parameters

- `columnIndex`: The column index.

<a id="return-value"></a>

## Return Value

A rectangle containing the column. Specified in the view’s coordinate system.

## See Also

### Getting Columns and Rows Information

- [numberOfColumns()](numberofcolumns%28%29.md): Returns the current number of columns.
- [numberOfRows()](numberofrows%28%29.md): Returns the current number of rows.
- [columnIndexes(in:)](columnindexes%28in_%29.md): Returns the column indexes in the specified rectangle.
- [rect(ofRow:)](rect%28ofrow_%29.md): Returns the rectangle containing the specified row.
- [rowIndexes(in:)](rowindexes%28in_%29.md): Returns the row indexes in the specified rectangle.

# rectOfColumn: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the rectangle containing the specified column.

## Declaration

```objectivec
- (NSRect) rectOfColumn:(NSUInteger) columnIndex;
```

## Parameters

- `columnIndex`: The column index.

<a id="return-value"></a>

## Return Value

A rectangle containing the column. Specified in the view’s coordinate system.

## See Also

### Getting Columns and Rows Information

- [numberOfColumns](numberofcolumns%28%29.md): Returns the current number of columns.
- [numberOfRows](numberofrows%28%29.md): Returns the current number of rows.
- [columnIndexesInRect:](columnindexes%28in_%29.md): Returns the column indexes in the specified rectangle.
- [rectOfRow:](rect%28ofrow_%29.md): Returns the rectangle containing the specified row.
- [rowIndexesInRect:](rowindexes%28in_%29.md): Returns the row indexes in the specified rectangle.
