> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgridview/addrow(with:)](https://developer.apple.com/documentation/appkit/nsgridview/addrow(with:))

# addRow(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Adds an array of views to a new row.

## Declaration

```swift
func addRow(with views: [NSView]) -> NSGridRow
```

<a id="Discussion"></a>

## Discussion

You can insert and remove rows and columns dynamically in a grid view. The grid is enlarged as needed to hold the specified views.

## See Also

### Adding, Removing, and Moving Rows

- [insertRow(at:with:)](insertrow%28at_with_%29.md): Inserts the array of view objects into the grid view at the index.
- [removeRow(at:)](removerow%28at_%29.md): Removes the row from the grid view at the index.
- [moveRow(at:to:)](moverow%28at_to_%29.md): Moves the specified row to the new row location.

# addRowWithViews: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Adds an array of views to a new row.

## Declaration

```objectivec
- (NSGridRow *) addRowWithViews:(NSArray<NSView *> *) views;
```

<a id="Discussion"></a>

## Discussion

You can insert and remove rows and columns dynamically in a grid view. The grid is enlarged as needed to hold the specified views.

## See Also

### Adding, Removing, and Moving Rows

- [insertRowAtIndex:withViews:](insertrow%28at_with_%29.md): Inserts the array of view objects into the grid view at the index.
- [removeRowAtIndex:](removerow%28at_%29.md): Removes the row from the grid view at the index.
- [moveRowAtIndex:toIndex:](moverow%28at_to_%29.md): Moves the specified row to the new row location.
