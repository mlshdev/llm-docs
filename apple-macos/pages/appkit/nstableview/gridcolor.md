> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/gridcolor](https://developer.apple.com/documentation/appkit/nstableview/gridcolor)

# gridColor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The color used to draw grid lines.

## Declaration

```swift
@NSCopying var gridColor: NSColor { get set }
```

<a id="Discussion"></a>

## Discussion

The default color is gray.

## See Also

### Related Documentation

- [drawGrid(inClipRect:)](drawgrid%28incliprect_%29.md): Draws the grid lines within the supplied rectangle.

### Setting Display Attributes

- [intercellSpacing](intercellspacing.md): The horizontal and vertical spacing between cells.
- [rowHeight](rowheight.md): The height of each row in the table.
- [backgroundColor](backgroundcolor.md): The color used to draw the background of the table.
- [usesAlternatingRowBackgroundColors](usesalternatingrowbackgroundcolors.md): A Boolean value indicating whether the table view uses alternating row colors for its background.
- [style](style-swift.property.md): The style that the table view uses.
- [effectiveStyle](effectivestyle.md): The effective style that the table uses.
- [NSTableView.Style](style-swift.enum.md): Contains the possible style values for a table view.
- [selectionHighlightStyle](selectionhighlightstyle-swift.property.md): The selection highlight style used by the table view to indicate row and column selection.
- [gridStyleMask](gridstylemask.md): The grid lines drawn by the table view.
- [indicatorImage(in:)](indicatorimage%28in_%29.md): Returns the indicator image of the specified table column.
- [setIndicatorImage(\_:in:)](setindicatorimage%28__in_%29.md): Sets the indicator image of the specified column.

# gridColor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The color used to draw grid lines.

## Declaration

```objectivec
@property (copy) NSColor * gridColor;
```

<a id="Discussion"></a>

## Discussion

The default color is gray.

## See Also

### Related Documentation

- [drawsGrid](drawsgrid.md): Deprecated. Returns a Boolean value that indicates whether the table view draws a grid.
- [drawGridInClipRect:](drawgrid%28incliprect_%29.md): Draws the grid lines within the supplied rectangle.

### Setting Display Attributes

- [intercellSpacing](intercellspacing.md): The horizontal and vertical spacing between cells.
- [rowHeight](rowheight.md): The height of each row in the table.
- [backgroundColor](backgroundcolor.md): The color used to draw the background of the table.
- [usesAlternatingRowBackgroundColors](usesalternatingrowbackgroundcolors.md): A Boolean value indicating whether the table view uses alternating row colors for its background.
- [style](style-swift.property.md): The style that the table view uses.
- [effectiveStyle](effectivestyle.md): The effective style that the table uses.
- [NSTableViewStyle](style-swift.enum.md): Contains the possible style values for a table view.
- [selectionHighlightStyle](selectionhighlightstyle-swift.property.md): The selection highlight style used by the table view to indicate row and column selection.
- [gridStyleMask](gridstylemask.md): The grid lines drawn by the table view.
- [indicatorImageInTableColumn:](indicatorimage%28in_%29.md): Returns the indicator image of the specified table column.
- [setIndicatorImage:inTableColumn:](setindicatorimage%28__in_%29.md): Sets the indicator image of the specified column.
