> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/rowheight](https://developer.apple.com/documentation/appkit/nstableview/rowheight)

# rowHeight (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The height of each row in the table.

## Declaration

```swift
var rowHeight: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default row height is `16.0`. The value in this property is used only if the table’s [rowSizeStyle](rowsizestyle-swift.property.md) is set to [NSTableView.RowSizeStyle.custom](rowsizestyle-swift.enum/custom.md).

When you change the value of this property, the table view calls the [tile()](tile%28%29.md) method to redisplay the rows using the new value.

## See Also

### Related Documentation

- [rowSizeStyle](rowsizestyle-swift.property.md): The row size style (small, medium, large, or custom) used by the table view.

### Setting Display Attributes

- [intercellSpacing](intercellspacing.md): The horizontal and vertical spacing between cells.
- [backgroundColor](backgroundcolor.md): The color used to draw the background of the table.
- [usesAlternatingRowBackgroundColors](usesalternatingrowbackgroundcolors.md): A Boolean value indicating whether the table view uses alternating row colors for its background.
- [style](style-swift.property.md): The style that the table view uses.
- [effectiveStyle](effectivestyle.md): The effective style that the table uses.
- [NSTableView.Style](style-swift.enum.md): Contains the possible style values for a table view.
- [selectionHighlightStyle](selectionhighlightstyle-swift.property.md): The selection highlight style used by the table view to indicate row and column selection.
- [gridColor](gridcolor.md): The color used to draw grid lines.
- [gridStyleMask](gridstylemask.md): The grid lines drawn by the table view.
- [indicatorImage(in:)](indicatorimage%28in_%29.md): Returns the indicator image of the specified table column.
- [setIndicatorImage(\_:in:)](setindicatorimage%28__in_%29.md): Sets the indicator image of the specified column.

# rowHeight (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The height of each row in the table.

## Declaration

```objectivec
@property CGFloat rowHeight;
```

<a id="Discussion"></a>

## Discussion

The default row height is `16.0`. The value in this property is used only if the table’s [rowSizeStyle](rowsizestyle-swift.property.md) is set to [NSTableViewRowSizeStyleCustom](rowsizestyle-swift.enum/custom.md).

When you change the value of this property, the table view calls the [tile](tile%28%29.md) method to redisplay the rows using the new value.

## See Also

### Related Documentation

- [rowSizeStyle](rowsizestyle-swift.property.md): The row size style (small, medium, large, or custom) used by the table view.

### Setting Display Attributes

- [intercellSpacing](intercellspacing.md): The horizontal and vertical spacing between cells.
- [backgroundColor](backgroundcolor.md): The color used to draw the background of the table.
- [usesAlternatingRowBackgroundColors](usesalternatingrowbackgroundcolors.md): A Boolean value indicating whether the table view uses alternating row colors for its background.
- [style](style-swift.property.md): The style that the table view uses.
- [effectiveStyle](effectivestyle.md): The effective style that the table uses.
- [NSTableViewStyle](style-swift.enum.md): Contains the possible style values for a table view.
- [selectionHighlightStyle](selectionhighlightstyle-swift.property.md): The selection highlight style used by the table view to indicate row and column selection.
- [gridColor](gridcolor.md): The color used to draw grid lines.
- [gridStyleMask](gridstylemask.md): The grid lines drawn by the table view.
- [indicatorImageInTableColumn:](indicatorimage%28in_%29.md): Returns the indicator image of the specified table column.
- [setIndicatorImage:inTableColumn:](setindicatorimage%28__in_%29.md): Sets the indicator image of the specified column.
