> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgridview/insertcolumn(at:with:)](https://developer.apple.com/documentation/appkit/nsgridview/insertcolumn(at:with:))

# insertColumn(at:with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Inserts the array of view objects at the specified index.

## Declaration

```swift
func insertColumn(at index: Int, with views: [NSView]) -> NSGridColumn
```

## See Also

### Adding, Removing, and Moving Columns

- [addColumn(with:)](addcolumn%28with_%29.md): Adds a new column containing the array of views.
- [removeColumn(at:)](removecolumn%28at_%29.md): Removes the column from the grid view at the specified index.
- [moveColumn(at:to:)](movecolumn%28at_to_%29.md): Moves the specified column to a new column location.

# insertColumnAtIndex:withViews: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Inserts the array of view objects at the specified index.

## Declaration

```objectivec
- (NSGridColumn *) insertColumnAtIndex:(NSInteger) index withViews:(NSArray<NSView *> *) views;
```

## See Also

### Adding, Removing, and Moving Columns

- [addColumnWithViews:](addcolumn%28with_%29.md): Adds a new column containing the array of views.
- [removeColumnAtIndex:](removecolumn%28at_%29.md): Removes the column from the grid view at the specified index.
- [moveColumnAtIndex:toIndex:](movecolumn%28at_to_%29.md): Moves the specified column to a new column location.
