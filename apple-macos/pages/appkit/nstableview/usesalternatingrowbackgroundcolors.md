> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/usesalternatingrowbackgroundcolors](https://developer.apple.com/documentation/appkit/nstableview/usesalternatingrowbackgroundcolors)

# usesAlternatingRowBackgroundColors (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the table view uses alternating row colors for its background.

## Declaration

```swift
var usesAlternatingRowBackgroundColors: Bool { get set }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the table view uses standard alternating row colors for the background, [false](https://developer.apple.com/documentation/swift/false) if it uses a solid color.

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the table uses the standard alternating row colors for the background. When the value is [false](https://developer.apple.com/documentation/swift/false), the table view uses a single solid color for the background.

## See Also

### Setting Display Attributes

- [intercellSpacing](intercellspacing.md): The horizontal and vertical spacing between cells.
- [rowHeight](rowheight.md): The height of each row in the table.
- [backgroundColor](backgroundcolor.md): The color used to draw the background of the table.
- [style](style-swift.property.md): The style that the table view uses.
- [effectiveStyle](effectivestyle.md): The effective style that the table uses.
- [NSTableView.Style](style-swift.enum.md): Contains the possible style values for a table view.
- [selectionHighlightStyle](selectionhighlightstyle-swift.property.md): The selection highlight style used by the table view to indicate row and column selection.
- [gridColor](gridcolor.md): The color used to draw grid lines.
- [gridStyleMask](gridstylemask.md): The grid lines drawn by the table view.
- [indicatorImage(in:)](indicatorimage%28in_%29.md): Returns the indicator image of the specified table column.
- [setIndicatorImage(\_:in:)](setindicatorimage%28__in_%29.md): Sets the indicator image of the specified column.

# usesAlternatingRowBackgroundColors (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the table view uses alternating row colors for its background.

## Declaration

```objectivec
@property BOOL usesAlternatingRowBackgroundColors;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the table view uses standard alternating row colors for the background, [false](https://developer.apple.com/documentation/swift/false) if it uses a solid color.

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the table uses the standard alternating row colors for the background. When the value is [false](https://developer.apple.com/documentation/swift/false), the table view uses a single solid color for the background.

## See Also

### Setting Display Attributes

- [intercellSpacing](intercellspacing.md): The horizontal and vertical spacing between cells.
- [rowHeight](rowheight.md): The height of each row in the table.
- [backgroundColor](backgroundcolor.md): The color used to draw the background of the table.
- [style](style-swift.property.md): The style that the table view uses.
- [effectiveStyle](effectivestyle.md): The effective style that the table uses.
- [NSTableViewStyle](style-swift.enum.md): Contains the possible style values for a table view.
- [selectionHighlightStyle](selectionhighlightstyle-swift.property.md): The selection highlight style used by the table view to indicate row and column selection.
- [gridColor](gridcolor.md): The color used to draw grid lines.
- [gridStyleMask](gridstylemask.md): The grid lines drawn by the table view.
- [indicatorImageInTableColumn:](indicatorimage%28in_%29.md): Returns the indicator image of the specified table column.
- [setIndicatorImage:inTableColumn:](setindicatorimage%28__in_%29.md): Sets the indicator image of the specified column.
