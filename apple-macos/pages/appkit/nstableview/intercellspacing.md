> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/intercellspacing](https://developer.apple.com/documentation/appkit/nstableview/intercellspacing)

# intercellSpacing (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The horizontal and vertical spacing between cells.

## Declaration

```swift
var intercellSpacing: NSSize { get set }
```

<a id="Discussion"></a>

## Discussion

Changing the value of this property causes the table view to redisplay itself. Negative values aren’t supported. The default spacing varies based on the table’s style.

Table views normally have a 1-pixel separation between consecutively selected rows or columns. An intercell spacing of `(1.0, 1.0)` or greater is required if you want this separation. An intercell spacing of `(0.0, 0.0)` forces no separation between consecutive selections.

## See Also

### Setting Display Attributes

- [rowHeight](rowheight.md): The height of each row in the table.
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

# intercellSpacing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The horizontal and vertical spacing between cells.

## Declaration

```objectivec
@property NSSize intercellSpacing;
```

<a id="Discussion"></a>

## Discussion

Changing the value of this property causes the table view to redisplay itself. Negative values aren’t supported. The default spacing varies based on the table’s style.

Table views normally have a 1-pixel separation between consecutively selected rows or columns. An intercell spacing of `(1.0, 1.0)` or greater is required if you want this separation. An intercell spacing of `(0.0, 0.0)` forces no separation between consecutive selections.

## See Also

### Setting Display Attributes

- [rowHeight](rowheight.md): The height of each row in the table.
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
