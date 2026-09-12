> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/gridstylemask](https://developer.apple.com/documentation/appkit/nstableview/gridstylemask)

# gridStyleMask (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The grid lines drawn by the table view.

## Declaration

```swift
var gridStyleMask: NSTableView.GridLineStyle { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify whether lines should be drawn between rows and columns. When setting this property, you can specify multiple styles at once by adding the corresponding constants together. The default value of this property is [NSTableViewGridNone](../nstableviewgridlinestyle/nstableviewgridnone.md).

## See Also

### Setting Display Attributes

- [intercellSpacing](intercellspacing.md): The horizontal and vertical spacing between cells.
- [rowHeight](rowheight.md): The height of each row in the table.
- [backgroundColor](backgroundcolor.md): The color used to draw the background of the table.
- [usesAlternatingRowBackgroundColors](usesalternatingrowbackgroundcolors.md): A Boolean value indicating whether the table view uses alternating row colors for its background.
- [style](style-swift.property.md): The style that the table view uses.
- [effectiveStyle](effectivestyle.md): The effective style that the table uses.
- [NSTableView.Style](style-swift.enum.md): Contains the possible style values for a table view.
- [selectionHighlightStyle](selectionhighlightstyle-swift.property.md): The selection highlight style used by the table view to indicate row and column selection.
- [gridColor](gridcolor.md): The color used to draw grid lines.
- [indicatorImage(in:)](indicatorimage%28in_%29.md): Returns the indicator image of the specified table column.
- [setIndicatorImage(\_:in:)](setindicatorimage%28__in_%29.md): Sets the indicator image of the specified column.

# gridStyleMask (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The grid lines drawn by the table view.

## Declaration

```objectivec
@property NSTableViewGridLineStyle gridStyleMask;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify whether lines should be drawn between rows and columns. When setting this property, you can specify multiple styles at once by adding the corresponding constants together. The default value of this property is [NSTableViewGridNone](../nstableviewgridlinestyle/nstableviewgridnone.md).

## See Also

### Setting Display Attributes

- [intercellSpacing](intercellspacing.md): The horizontal and vertical spacing between cells.
- [rowHeight](rowheight.md): The height of each row in the table.
- [backgroundColor](backgroundcolor.md): The color used to draw the background of the table.
- [usesAlternatingRowBackgroundColors](usesalternatingrowbackgroundcolors.md): A Boolean value indicating whether the table view uses alternating row colors for its background.
- [style](style-swift.property.md): The style that the table view uses.
- [effectiveStyle](effectivestyle.md): The effective style that the table uses.
- [NSTableViewStyle](style-swift.enum.md): Contains the possible style values for a table view.
- [selectionHighlightStyle](selectionhighlightstyle-swift.property.md): The selection highlight style used by the table view to indicate row and column selection.
- [gridColor](gridcolor.md): The color used to draw grid lines.
- [indicatorImageInTableColumn:](indicatorimage%28in_%29.md): Returns the indicator image of the specified table column.
- [setIndicatorImage:inTableColumn:](setindicatorimage%28__in_%29.md): Sets the indicator image of the specified column.
