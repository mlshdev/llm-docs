> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview/rowindexes(in:)](https://developer.apple.com/documentation/quartz/ikimagebrowserview/rowindexes(in:))

# rowIndexes(in:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the row indexes in the specified rectangle.

## Declaration

```swift
func rowIndexes(in rect: NSRect) -> IndexSet!
```

## Parameters

- `rect`: A rectangle in the view’s coordinate system.

<a id="return-value"></a>

## Return Value

An index set containing the item indexes.

## See Also

### Getting Columns and Rows Information

- [numberOfColumns()](numberofcolumns%28%29.md): Returns the current number of columns.
- [numberOfRows()](numberofrows%28%29.md): Returns the current number of rows.
- [rect(ofColumn:)](rect%28ofcolumn_%29.md): Returns the rectangle containing the specified column.
- [columnIndexes(in:)](columnindexes%28in_%29.md): Returns the column indexes in the specified rectangle.
- [rect(ofRow:)](rect%28ofrow_%29.md): Returns the rectangle containing the specified row.

# rowIndexesInRect: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the row indexes in the specified rectangle.

## Declaration

```objectivec
- (NSIndexSet *) rowIndexesInRect:(NSRect) rect;
```

## Parameters

- `rect`: A rectangle in the view’s coordinate system.

<a id="return-value"></a>

## Return Value

An index set containing the item indexes.

## See Also

### Getting Columns and Rows Information

- [numberOfColumns](numberofcolumns%28%29.md): Returns the current number of columns.
- [numberOfRows](numberofrows%28%29.md): Returns the current number of rows.
- [rectOfColumn:](rect%28ofcolumn_%29.md): Returns the rectangle containing the specified column.
- [columnIndexesInRect:](columnindexes%28in_%29.md): Returns the column indexes in the specified rectangle.
- [rectOfRow:](rect%28ofrow_%29.md): Returns the rectangle containing the specified row.
