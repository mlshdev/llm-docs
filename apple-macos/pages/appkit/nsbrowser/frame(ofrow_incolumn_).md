> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/frame(ofrow:incolumn:)](https://developer.apple.com/documentation/appkit/nsbrowser/frame(ofrow:incolumn:))

# frame(ofRow:inColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the frame of the cell at the specified location, including the expandable arrow.

## Declaration

```swift
func frame(ofRow row: Int, inColumn column: Int) -> NSRect
```

## Parameters

- `row`: The row of the cell.
- `column`: The column of the cell.

<a id="return-value"></a>

## Return Value

The frame of the cell, in the [NSBrowser](../nsbrowser.md) coordinate space.

## See Also

### Getting Row Frames

- [getRow(\_:column:for:)](getrow%28__column_for_%29.md): Gets the row and column coordinates for the specified point, if a cell exists at that point.

# frameOfRow:inColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the frame of the cell at the specified location, including the expandable arrow.

## Declaration

```objectivec
- (NSRect) frameOfRow:(NSInteger) row inColumn:(NSInteger) column;
```

## Parameters

- `row`: The row of the cell.
- `column`: The column of the cell.

<a id="return-value"></a>

## Return Value

The frame of the cell, in the [NSBrowser](../nsbrowser.md) coordinate space.

## See Also

### Getting Row Frames

- [getRow:column:forPoint:](getrow%28__column_for_%29.md): Gets the row and column coordinates for the specified point, if a cell exists at that point.
