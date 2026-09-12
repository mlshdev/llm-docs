> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/reloaddata(forrowindexes:incolumn:)](https://developer.apple.com/documentation/appkit/nsbrowser/reloaddata(forrowindexes:incolumn:))

# reloadData(forRowIndexes:inColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Updates the rows in the column with the specified column index with indexes in the specified set.

## Declaration

```swift
func reloadData(forRowIndexes rowIndexes: IndexSet, inColumn column: Int)
```

## Parameters

- `rowIndexes`: The set of row indexes of the rows to be updated.
- `column`: The column containing the rows to be updated.

## See Also

### Updating Browsers

- [noteHeightOfRowsWithIndexesChanged(\_:inColumn:)](noteheightofrowswithindexeschanged%28__incolumn_%29.md): Immediately retiles the browser’s columns using row heights specified by the browser’s delegate.

# reloadDataForRowIndexes:inColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Updates the rows in the column with the specified column index with indexes in the specified set.

## Declaration

```objectivec
- (void) reloadDataForRowIndexes:(NSIndexSet *) rowIndexes inColumn:(NSInteger) column;
```

## Parameters

- `rowIndexes`: The set of row indexes of the rows to be updated.
- `column`: The column containing the rows to be updated.

## See Also

### Updating Browsers

- [noteHeightOfRowsWithIndexesChanged:inColumn:](noteheightofrowswithindexeschanged%28__incolumn_%29.md): Immediately retiles the browser’s columns using row heights specified by the browser’s delegate.
