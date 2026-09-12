> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgridview/insertrow(at:with:)](https://developer.apple.com/documentation/appkit/nsgridview/insertrow(at:with:))

# insertRow(at:with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Inserts the array of view objects into the grid view at the index.

## Declaration

```swift
func insertRow(at index: Int, with views: [NSView]) -> NSGridRow
```

## See Also

### Adding, Removing, and Moving Rows

- [addRow(with:)](addrow%28with_%29.md): Adds an array of views to a new row.
- [removeRow(at:)](removerow%28at_%29.md): Removes the row from the grid view at the index.
- [moveRow(at:to:)](moverow%28at_to_%29.md): Moves the specified row to the new row location.

# insertRowAtIndex:withViews: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Inserts the array of view objects into the grid view at the index.

## Declaration

```objectivec
- (NSGridRow *) insertRowAtIndex:(NSInteger) index withViews:(NSArray<NSView *> *) views;
```

## See Also

### Adding, Removing, and Moving Rows

- [addRowWithViews:](addrow%28with_%29.md): Adds an array of views to a new row.
- [removeRowAtIndex:](removerow%28at_%29.md): Removes the row from the grid view at the index.
- [moveRowAtIndex:toIndex:](moverow%28at_to_%29.md): Moves the specified row to the new row location.
