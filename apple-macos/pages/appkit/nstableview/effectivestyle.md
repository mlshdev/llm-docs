> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/effectivestyle](https://developer.apple.com/documentation/appkit/nstableview/effectivestyle)

# effectiveStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The effective style that the table uses.

## Declaration

```swift
var effectiveStyle: NSTableView.Style { get }
```

<a id="Discussion"></a>

## Discussion

If the [style](style-swift.property.md) property value is [NSTableView.Style.automatic](style-swift.enum/automatic.md), then this property contains the resolved style.

## See Also

### Setting Display Attributes

- [intercellSpacing](intercellspacing.md): The horizontal and vertical spacing between cells.
- [rowHeight](rowheight.md): The height of each row in the table.
- [backgroundColor](backgroundcolor.md): The color used to draw the background of the table.
- [usesAlternatingRowBackgroundColors](usesalternatingrowbackgroundcolors.md): A Boolean value indicating whether the table view uses alternating row colors for its background.
- [style](style-swift.property.md): The style that the table view uses.
- [NSTableView.Style](style-swift.enum.md): Contains the possible style values for a table view.
- [selectionHighlightStyle](selectionhighlightstyle-swift.property.md): The selection highlight style used by the table view to indicate row and column selection.
- [gridColor](gridcolor.md): The color used to draw grid lines.
- [gridStyleMask](gridstylemask.md): The grid lines drawn by the table view.
- [indicatorImage(in:)](indicatorimage%28in_%29.md): Returns the indicator image of the specified table column.
- [setIndicatorImage(\_:in:)](setindicatorimage%28__in_%29.md): Sets the indicator image of the specified column.

# effectiveStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The effective style that the table uses.

## Declaration

```objectivec
@property (readonly) NSTableViewStyle effectiveStyle;
```

<a id="Discussion"></a>

## Discussion

If the [style](style-swift.property.md) property value is [NSTableViewStyleAutomatic](style-swift.enum/automatic.md), then this property contains the resolved style.

## See Also

### Setting Display Attributes

- [intercellSpacing](intercellspacing.md): The horizontal and vertical spacing between cells.
- [rowHeight](rowheight.md): The height of each row in the table.
- [backgroundColor](backgroundcolor.md): The color used to draw the background of the table.
- [usesAlternatingRowBackgroundColors](usesalternatingrowbackgroundcolors.md): A Boolean value indicating whether the table view uses alternating row colors for its background.
- [style](style-swift.property.md): The style that the table view uses.
- [NSTableViewStyle](style-swift.enum.md): Contains the possible style values for a table view.
- [selectionHighlightStyle](selectionhighlightstyle-swift.property.md): The selection highlight style used by the table view to indicate row and column selection.
- [gridColor](gridcolor.md): The color used to draw grid lines.
- [gridStyleMask](gridstylemask.md): The grid lines drawn by the table view.
- [indicatorImageInTableColumn:](indicatorimage%28in_%29.md): Returns the indicator image of the specified table column.
- [setIndicatorImage:inTableColumn:](setindicatorimage%28__in_%29.md): Sets the indicator image of the specified column.
