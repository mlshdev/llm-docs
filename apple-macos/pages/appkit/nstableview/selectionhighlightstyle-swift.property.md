> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/selectionhighlightstyle-swift.property](https://developer.apple.com/documentation/appkit/nstableview/selectionhighlightstyle-swift.property)

# selectionHighlightStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The selection highlight style used by the table view to indicate row and column selection.

## Declaration

```swift
var selectionHighlightStyle: NSTableView.SelectionHighlightStyle { get set }
```

<a id="Discussion"></a>

## Discussion

Setting the selection highlight style to [NSTableView.SelectionHighlightStyle.sourceList](selectionhighlightstyle-swift.enum/sourcelist.md) causes the table view to draw its background using the source list style. It also sets the [draggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle-swift.property.md) to [NSTableView.DraggingDestinationFeedbackStyle.sourceList](draggingdestinationfeedbackstyle-swift.enum/sourcelist.md).

## See Also

### Setting Display Attributes

- [intercellSpacing](intercellspacing.md): The horizontal and vertical spacing between cells.
- [rowHeight](rowheight.md): The height of each row in the table.
- [backgroundColor](backgroundcolor.md): The color used to draw the background of the table.
- [usesAlternatingRowBackgroundColors](usesalternatingrowbackgroundcolors.md): A Boolean value indicating whether the table view uses alternating row colors for its background.
- [style](style-swift.property.md): The style that the table view uses.
- [effectiveStyle](effectivestyle.md): The effective style that the table uses.
- [NSTableView.Style](style-swift.enum.md): Contains the possible style values for a table view.
- [gridColor](gridcolor.md): The color used to draw grid lines.
- [gridStyleMask](gridstylemask.md): The grid lines drawn by the table view.
- [indicatorImage(in:)](indicatorimage%28in_%29.md): Returns the indicator image of the specified table column.
- [setIndicatorImage(\_:in:)](setindicatorimage%28__in_%29.md): Sets the indicator image of the specified column.

# selectionHighlightStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The selection highlight style used by the table view to indicate row and column selection.

## Declaration

```objectivec
@property NSTableViewSelectionHighlightStyle selectionHighlightStyle;
```

<a id="Discussion"></a>

## Discussion

Setting the selection highlight style to [NSTableViewSelectionHighlightStyleSourceList](selectionhighlightstyle-swift.enum/sourcelist.md) causes the table view to draw its background using the source list style. It also sets the [draggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle-swift.property.md) to [NSTableViewDraggingDestinationFeedbackStyleSourceList](draggingdestinationfeedbackstyle-swift.enum/sourcelist.md).

## See Also

### Setting Display Attributes

- [intercellSpacing](intercellspacing.md): The horizontal and vertical spacing between cells.
- [rowHeight](rowheight.md): The height of each row in the table.
- [backgroundColor](backgroundcolor.md): The color used to draw the background of the table.
- [usesAlternatingRowBackgroundColors](usesalternatingrowbackgroundcolors.md): A Boolean value indicating whether the table view uses alternating row colors for its background.
- [style](style-swift.property.md): The style that the table view uses.
- [effectiveStyle](effectivestyle.md): The effective style that the table uses.
- [NSTableViewStyle](style-swift.enum.md): Contains the possible style values for a table view.
- [gridColor](gridcolor.md): The color used to draw grid lines.
- [gridStyleMask](gridstylemask.md): The grid lines drawn by the table view.
- [indicatorImageInTableColumn:](indicatorimage%28in_%29.md): Returns the indicator image of the specified table column.
- [setIndicatorImage:inTableColumn:](setindicatorimage%28__in_%29.md): Sets the indicator image of the specified column.
