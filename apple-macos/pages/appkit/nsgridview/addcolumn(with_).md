> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgridview/addcolumn(with:)](https://developer.apple.com/documentation/appkit/nsgridview/addcolumn(with:))

# addColumn(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Adds a new column containing the array of views.

## Declaration

```swift
func addColumn(with views: [NSView]) -> NSGridColumn
```

<a id="return-value"></a>

## Return Value

The newly created grid column.

## See Also

### Adding, Removing, and Moving Columns

- [insertColumn(at:with:)](insertcolumn%28at_with_%29.md): Inserts the array of view objects at the specified index.
- [removeColumn(at:)](removecolumn%28at_%29.md): Removes the column from the grid view at the specified index.
- [moveColumn(at:to:)](movecolumn%28at_to_%29.md): Moves the specified column to a new column location.

# addColumnWithViews: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Adds a new column containing the array of views.

## Declaration

```objectivec
- (NSGridColumn *) addColumnWithViews:(NSArray<NSView *> *) views;
```

<a id="return-value"></a>

## Return Value

The newly created grid column.

## See Also

### Adding, Removing, and Moving Columns

- [insertColumnAtIndex:withViews:](insertcolumn%28at_with_%29.md): Inserts the array of view objects at the specified index.
- [removeColumnAtIndex:](removecolumn%28at_%29.md): Removes the column from the grid view at the specified index.
- [moveColumnAtIndex:toIndex:](movecolumn%28at_to_%29.md): Moves the specified column to a new column location.
