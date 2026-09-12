> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/noteheightofrowswithindexeschanged(_:incolumn:)](https://developer.apple.com/documentation/appkit/nsbrowser/noteheightofrowswithindexeschanged(_:incolumn:))

# noteHeightOfRowsWithIndexesChanged(\_:inColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Immediately retiles the browser’s columns using row heights specified by the browser’s delegate.

## Declaration

```swift
func noteHeightOfRowsWithIndexesChanged(_ indexSet: IndexSet, inColumn columnIndex: Int)
```

## Parameters

- `indexSet`: The indexes of the rows to resize.
- `columnIndex`: The column to retile.

<a id="Discussion"></a>

## Discussion

The browser’s delegate must implement

## See Also

### Updating Browsers

- [reloadData(forRowIndexes:inColumn:)](reloaddata%28forrowindexes_incolumn_%29.md): Updates the rows in the column with the specified column index with indexes in the specified set.

# noteHeightOfRowsWithIndexesChanged:inColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Immediately retiles the browser’s columns using row heights specified by the browser’s delegate.

## Declaration

```objectivec
- (void) noteHeightOfRowsWithIndexesChanged:(NSIndexSet *) indexSet inColumn:(NSInteger) columnIndex;
```

## Parameters

- `indexSet`: The indexes of the rows to resize.
- `columnIndex`: The column to retile.

<a id="Discussion"></a>

## Discussion

The browser’s delegate must implement

## See Also

### Updating Browsers

- [reloadDataForRowIndexes:inColumn:](reloaddata%28forrowindexes_incolumn_%29.md): Updates the rows in the column with the specified column index with indexes in the specified set.
